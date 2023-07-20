import React, { useCallback, useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [textArray, setTextArray] = useState<string[]>([]);

  // `increment`関数を最適化する
  const increment = useCallback(() => {
    setCount((count) => count + 1);
    console.log('increment');
  }, [setCount]);

  useEffect(() => {
    return console.log('文字が増えました');
  }, [text]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // `text`の値を更新する
      setText(e.target.value);
      console.log('handleChange');
    },
    [setText]
  );

  const input = useCallback(() => {
    setTextArray((textArray) => [...textArray, text]);
    console.log('input');
  }, [setTextArray, text]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <p>Text: {text}</p>
      {textArray.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
      <input type='text' value={text} onChange={handleChange} />
      <button onClick={input}>input</button>
    </div>
  );
}

export default MyComponent;
