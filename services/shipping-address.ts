'use server';

import { db } from '@/lib/db';
import { PHONE_REGEX, USERNAME_REGEX } from '@/lib/regex';
import { shippingAddresses } from '@/lib/schema';
import { getUserId, maskPhone } from '@/lib/utils';
import { ActionState } from '@/types/common';
import { CityItem, ShippingAddress } from '@/types/user';
import { and, eq } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

/**
 * 查询收货地址
 */
export async function findShippingAddresses(): Promise<ShippingAddress[]> {
  const userId = await getUserId();

  const addresses = await db
    .select()
    .from(shippingAddresses)
    .where(eq(shippingAddresses.userId, userId));

  return addresses.map((address) => ({
    ...address,
    recipientPhone: maskPhone(address.recipientPhone)
  }));
}

const createShippingAddressSchema = createInsertSchema(shippingAddresses, {
  id: z.string().nullable(),
  recipientName: z
    .string()
    .regex(USERNAME_REGEX, '仅允许2~16位的中文、英文或数字'),
  recipientPhone: z.string(),
  city: z.string({ message: '请选择城市' }),
  address: z
    .string({ message: '请输入详细地址' })
    .max(50, '详细地址不能超过50个字符'),
  label: z.string().max(10, '标签不能超过10个字符').nullable()
})
  .omit({ userId: true })
  .refine((data) => data.id || PHONE_REGEX.test(data.recipientPhone), {
    message: '手机号格式错误',
    path: ['recipientPhone']
  });

type SubmitState = ActionState<{
  recipientName?: string[];
  recipientPhone?: string[];
  city?: string[];
  address?: string[];
  label?: string[];
}>;

/**
 * 添加/修改收货地址
 */
export async function submitShippingAddress(
  _: SubmitState,
  formData: FormData
): Promise<SubmitState> {
  const validatedFields = createShippingAddressSchema.safeParse({
    id: formData.get('id'),
    recipientName: formData.get('recipientName'),
    recipientPhone: formData.get('recipientPhone'),
    city: formData.get('city'),
    address: formData.get('address'),
    label: formData.get('label')
  });
  if (validatedFields.error) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  }

  const { id, recipientName, recipientPhone, city, address, label } =
    validatedFields.data;

  const userId = await getUserId();
  const parsedCity = JSON.parse(city) as CityItem[];

  if (id) {
    await db
      .update(shippingAddresses)
      .set({
        recipientName,
        recipientPhone: PHONE_REGEX.test(recipientPhone)
          ? recipientPhone
          : undefined,
        city: parsedCity,
        address,
        label
      })
      .where(
        and(
          eq(shippingAddresses.id, Number(id)),
          eq(shippingAddresses.userId, userId)
        )
      );
  } else {
    await db.insert(shippingAddresses).values({
      userId,
      recipientName,
      recipientPhone,
      city: parsedCity,
      address,
      label
    });
  }

  revalidatePath('/user/addresses');

  return {
    success: true
  };
}

/**
 * 删除收货地址
 */
export async function deleteShippingAddress(id: number) {
  const userId = await getUserId();

  await db
    .delete(shippingAddresses)
    .where(
      and(eq(shippingAddresses.id, id), eq(shippingAddresses.userId, userId))
    );

  revalidatePath('/user/addresses');
}
