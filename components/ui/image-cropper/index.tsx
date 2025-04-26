import React, { useState } from 'react';
import CropPanel from './crop-panel';
import UploadPanel from './upload-panel';

export default function ImageCropper({
  onChange
}: {
  onChange: (file: File) => void;
}) {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className={'p-[20_25]'}>
      <h4 className={'mb-[30] text-center text-lg'}>设置头像</h4>
      {file ? (
        <CropPanel
          file={file}
          onReset={() => setFile(null)}
          onChange={onChange}
        />
      ) : (
        <UploadPanel onChange={setFile} />
      )}
    </div>
  );
}
