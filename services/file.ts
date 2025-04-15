'use server';

const maxSize = 5 * 1024 * 1024; // 限制5MB

export async function getRemoteFile(src: string) {
  const response = await fetch(src);

  if (!response.ok) {
    throw new Error('获取文件失败');
  }

  const contentLength = response.headers.get('content-length');
  if (contentLength && parseInt(contentLength) > maxSize) {
    throw new Error('文件大小超过5MB');
  }

  return await response.blob();
}
