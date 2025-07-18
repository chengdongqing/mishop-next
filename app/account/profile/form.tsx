'use client';

import Button from '@/components/ui/button';
import FormErrorTips from '@/components/ui/form-error-tips';
import ImageCropper from '@/components/ui/image-cropper';
import Input from '@/components/ui/input';
import popup from '@/components/ui/popup';
import Radio from '@/components/ui/radio';
import { useUserInfo } from '@/contexts/user-info-context';
import { displayGender, GenderType } from '@/enums/user';
import useSetState from '@/hooks/useSetState';
import { uploadFile } from '@/services/file';
import { modifyProfile } from '@/services/users';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import {
  PropsWithChildren,
  ReactNode,
  useActionState,
  useEffect,
  useState
} from 'react';

export default function ProfileForm() {
  const userInfo = useUserInfo()!;
  const [isEdit, setIsEdit] = useState(false);

  const avatar = (src: string) => (
    <Image
      src={src}
      alt={'User Avatar'}
      width={128}
      height={128}
      className={'h-[60] w-[60] rounded-full object-scale-down'}
    />
  );
  const btnClass = '-ml-5 !h-[60] !w-[360] rounded-sm !text-lg';

  const [state, formAction, isPending] = useActionState(modifyProfile, {});
  const { errors } = state;
  useEffect(() => {
    if (state.success) {
      setIsEdit(false);
    }
  }, [state]);

  const [profile, setProfile] = useSetState({
    name: userInfo.name,
    gender: userInfo.gender,
    avatarUrl: userInfo.avatarUrl
  });

  return (
    <form action={formAction}>
      <FormItem label={'头像'}>
        {!isEdit ? (
          avatar(userInfo.avatarUrl)
        ) : (
          <EditableAvatar
            value={profile.avatarUrl}
            avatar={avatar(profile.avatarUrl)}
            onChange={(value) => setProfile({ avatarUrl: value })}
          />
        )}
      </FormItem>
      <FormItem label={'昵称'}>
        {!isEdit ? (
          userInfo.name
        ) : (
          <Input
            name={'name'}
            value={profile.name}
            required
            error={!!errors?.name?.length}
            aria-describedby="name-error"
            onChange={(value) => setProfile({ name: value })}
          />
        )}
      </FormItem>
      <div className={'ml-[180]'}>
        <FormErrorTips id={'name-error'} errors={errors?.name} />
      </div>
      <FormItem label={'性别'}>
        {!isEdit ? (
          displayGender(userInfo.gender)
        ) : (
          <GenderRadioGroup
            value={profile.gender}
            onChange={(gender) => setProfile({ gender })}
          />
        )}
      </FormItem>
      <FormItem label={'小米ID'}>{userInfo.id}</FormItem>
      <FormItem label={'国家/地区'}>中国</FormItem>
      <FormItem>
        {isEdit ? (
          <Button type={'submit'} loading={isPending} className={btnClass}>
            保存
          </Button>
        ) : (
          <Button
            className={btnClass}
            onClick={(e) => {
              e.preventDefault();

              setIsEdit(true);
            }}
          >
            编辑
          </Button>
        )}
      </FormItem>
    </form>
  );
}

function EditableAvatar({
  value,
  avatar,
  onChange
}: {
  value: string;
  avatar: ReactNode;
  onChange: (value: string) => void;
}) {
  return (
    <div
      className={'flex cursor-pointer items-center justify-between'}
      onClick={() =>
        openImageCropper(async (file) => {
          const res = await uploadFile(file);
          if (res.ok) {
            onChange(res.data);
          } else {
            popup.alert(res.error);
          }
        })
      }
    >
      {avatar}
      <input type={'hidden'} name={'avatarUrl'} value={value} />
      <ChevronRightIcon className={'w-7 text-[silver]'} />
    </div>
  );
}

function GenderRadioGroup({
  value,
  onChange
}: {
  value: GenderType | null | undefined;
  onChange: (gender: GenderType) => void;
}) {
  return (
    <div className={'flex gap-x-6'}>
      <Radio
        name={'gender'}
        value={GenderType.MALE}
        checked={value === GenderType.MALE}
        onClick={() => {
          onChange(GenderType.MALE);
        }}
      >
        男
      </Radio>
      <Radio
        name={'gender'}
        value={GenderType.FEMALE}
        checked={value === GenderType.FEMALE}
        onClick={() => {
          onChange(GenderType.FEMALE);
        }}
      >
        女
      </Radio>
    </div>
  );
}

function FormItem({ children, label }: PropsWithChildren<{ label?: string }>) {
  return (
    <div className={'m-5 flex h-[80] items-center gap-x-5 text-base'}>
      <h4 className={'w-[120] text-right'}>{label}</h4>
      <div className={'w-[358] pl-5'}>{children}</div>
    </div>
  );
}

function openImageCropper(onChange: (file: File) => void) {
  const close = popup.open({
    width: 450,
    footer: null,
    content: (
      <ImageCropper
        onChange={(value) => {
          onChange(value);
          close();
        }}
      />
    )
  });
}
