import { useState } from 'react';
import './style.css';

function encodeRLE(text) {
  if (!text) return "";
  
  let encoded = "";
  let count = 1;
  
  for (let i = 1; i < text.length; i++) {
    if (text[i] == text[i - 1]) {
      count++;
    } else {
      encoded += count + text[i - 1];
      count = 1;
    }
  }
  
  encoded += count + text[text.length - 1];
  return encoded;
}

function decodeRLE(text) {
  let decoded = "";
  let count = "";
  for (let char of text) {
    if (!isNaN(char)) {
      count += char;
    } else {
      decoded += char.repeat(Number(count));
      count = "";
    }
  }
  return decoded;
}

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [compressionInfo, setCompressionInfo] = useState("");

  const handleEncode = () => {
    const encoded = encodeRLE(input);
    setOutput(encoded);
    
    const original_size = input.length;
    const encoded_size = encoded.length;
    const saved = original_size > 0 ? Math.round((1 - encoded_size / original_size) * 100) : 0;
    
    setCompressionInfo(`Original: ${original_size} chars | Encoded: ${encoded_size} | Saved: ${saved}%`);
  };

  const handleDecode = () => {
    setOutput(decodeRLE(input));
  };

  return (
    <div className="container">
      <h1>RLE Encoder/Decoder</h1>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text" />
      <div>
        <button onClick={handleEncode}>Encode</button>
        <button onClick={handleDecode}>Decode</button>
      </div>
      <textarea value={output} readOnly placeholder="Output" />
      <p>{compressionInfo}</p>
    </div>
  );
}