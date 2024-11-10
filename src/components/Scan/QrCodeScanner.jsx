import React from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import s from './qrCodeScanner.module.css';

export const QrCodeScanner = () => {
  const [scanned, setScanned] = React.useState(null);
  const settings = {
    audio: true,
    finder: false,
  };
  const scanHandler = (result) => {
    setScanned(result[0].rawValue);
  };
  return (
    <div className={s.container}>
      <Scanner
        onScan={scanHandler}
        components={settings}
        allowMultiple={true}
        styles={{
          container: { width: '200px', height: '200px' },
        }}
      />
      <p className={s.scanned}>{scanned}</p>
    </div>
  );
};
