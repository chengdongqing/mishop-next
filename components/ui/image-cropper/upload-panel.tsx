import Button from '@/components/ui/button';
import toast from '@/components/ui/toast';
import React from 'react';

const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
const maxSize = 5 * 1024 * 1024;

export default function UploadPanel({
  onChange
}: {
  onChange: (value: File) => void;
}) {
  function handleFile(file: File) {
    // 校验格式
    if (!allowedTypes.includes(file.type)) {
      toast.warning('只支持 jpg、jpeg、png 和 webp 格式的图片');
      return;
    }

    // 校验大小
    if (file.size > maxSize) {
      toast.warning('图片大小不能超过5MB');
      return;
    }

    onChange(file);
  }

  return (
    <div className={'h-[180]'}>
      <label className={'relative'}>
        <Button className={'!h-[60] !w-full rounded-sm !text-lg'}>
          上传头像
        </Button>
        <input
          type="file"
          accept="image/*"
          className={
            'absolute top-0 right-0 bottom-0 left-0 z-1 cursor-pointer opacity-0'
          }
          onChange={(e) => {
            const { files } = e.target;
            if (files && files.length) {
              handleFile(files[0]);
            }
          }}
        />
      </label>
      <p className={'mt-5 text-base'}>
        图片格式jpg、png、jpeg、webp，大小不超过5MB
      </p>
    </div>
  );
}
