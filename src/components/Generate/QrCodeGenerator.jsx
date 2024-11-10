import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../constants';
import s from './qrCodeGenerator.module.css';

export const QrCodeGenerator = () => {
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  function generateQRCode() {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));
    setValue('');
    setResult(value);
  }
  function onInput(e) {
    setValue(e.target.value);
    setResult('');
  }
  return (
    <div className={s.container}>
      <input
        type="text"
        value={value}
        onChange={onInput}
        className={s.input}
        placeholder="Enter your text..."
      />
      <button type="button" onClick={generateQRCode} className={s.button}>
        Generate
      </button>
      <div>
        {' '}
        {result !== '' && (
          <div className={s.qrWrapper}>
            {' '}
            <QRCodeSVG value={result} size={200} />{' '}
          </div>
        )}
      </div>
    </div>
  );
};
