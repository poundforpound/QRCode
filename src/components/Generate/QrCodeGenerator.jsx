import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import s from './qrCodeGenerator.module.css';

export const QrCodeGenerator = () => {
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  function onChange() {
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
      <button type="button" onClick={onChange} className={s.button}>
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
