'use server';

import { Result } from '@/lib/result';
import { existsSync } from 'fs';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { v7 as uuidV7 } from 'uuid';

const maxSize = 5 * 1024 * 1024; // 限制5MB

/**
 * 下载文件
 */
export async function downloadFile(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return Result.fail('获取文件失败');
    }

    const contentLength = response.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > maxSize) {
      return Result.fail('文件大小超过5MB');
    }

    const blob = await response.blob();

    return Result.ok(blob);
  } catch (err) {
    return Result.fail((err as Error).message);
  }
}

/**
 * 上传文件
 */
export async function uploadFile(file: File) {
  if (file.size > maxSize) {
    return Result.fail('文件不能超过5MB');
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const ext = path.extname(file.name);
  const filename = `${uuidV7().replaceAll('-', '')}${ext}`;
  const uploadDir = path.join(process.cwd(), 'public/uploads');
  const filepath = path.join(uploadDir, filename);

  if (!existsSync(uploadDir)) {
    await mkdir(uploadDir, {
      recursive: true // 支持多层目录递归创建
    });
  }

  await writeFile(filepath, buffer);

  const url = `/files/${filename}`;
  return Result.ok(url);
}
