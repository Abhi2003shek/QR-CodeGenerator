import React, { useState } from 'react';
import './App.css';
import QRCode from 'react-qr-code';

function App() {
const [text,setText] = useState('');
const [qrCode, setQRCode] = useState(null);

  const handleGenerate = () => {
    setQRCode(text);
  }

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "qrcode"+Math.round(Math.random()*1000)+".png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setQRCode(null);
    setText('');
  }
return(

<div class="card">
  <input class="input" type='text' placeholder='Enter The Text' value={text} onChange={e => setText(e.target.value)}/>
  <div class="space">
  <div class="card1">{qrCode && <QRCode value={qrCode}/>}</div><br/>
  <button onClick={handleGenerate}>Generate QR code</button>
  <br/><br/>
  <button onClick={handleDownload} >Download QR code</button>     
  </div>
</div>

);
}

export default App;
