import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './QrCodeGenerator.css';

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
    <div className="container">
      <input
        type="text"
        value={value}
        onChange={onInput}
        className="input"
        placeholder="Enter your text..."
      />
      <button type="button" onClick={onChange} className="button">
        Generate
      </button>
      <div>
        {' '}
        {result !== '' && (
          <div className="qrWrapper">
            {' '}
            <QRCodeSVG value={result} size={200} />{' '}
          </div>
        )}
      </div>
    </div>
  );
};
