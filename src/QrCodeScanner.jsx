import React from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

export const QrCodeScanner = () => {
  const scanHandler = (result) => {
    console.log('dfjfjbhgjfghbfj');
  };
  const settings = {
    audio: true,
    finder: false,
  };

  return (
    <div>
      <Scanner
        onScan={scanHandler}
        components={settings}
        allowMultiple={true}
        styles={{
          container: { width: '200px', height: '200px' },
        }}
      />
    </div>
  );
};
