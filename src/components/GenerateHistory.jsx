import React from 'react';
import { GENERATE_DATA } from '../constants';
import { QRCodeSVG } from 'qrcode.react';
export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
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
