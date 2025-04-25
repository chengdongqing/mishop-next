'use server';

import { Result } from '@/lib/result';

const maxSize = 5 * 1024 * 1024; // 限制5MB

export async function getRemoteFile(src: string) {
  try {
    const response = await fetch(src);

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
