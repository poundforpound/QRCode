import React from 'react';
import { SCAN_DATA } from '../constants';
import { QRCodeSVG } from 'qrcode.react';
export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
  return (
    <div>
      {data.map((item) => (
        <div key={item}>
          <p>{item}</p>
          <QRCodeSVG value={item} size={50} />
        </div>
      ))}
    </div>
  );
};
