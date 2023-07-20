import React, { useEffect, useState, useContext } from "react";

type Humans = {
  name: string;
  age: number;
};
const human: Humans = {
  name: "Mike",
  age: 20,
};
const PracticeContext = React.createContext(human.name);
const MyComponent = () => {
  const [name, setName] = useState("Mike");

  useEffect(() => {
    // コンポーネントのマウント時に実行される処理
    console.log("Component mounted");

    // クリーンアップ関数を返すこともできます
    return () => {
      console.log("Component unmounted");
    };
  }, []); // 空の配列を渡すことで、マウント時のみ実行されるようにします

  useEffect(() => {
    // nameの値が変更された時に実行される処理
    console.log("Name changed");
  }, [name]); // nameを監視しているので、nameの値が変更されたときに実行されます

  useEffect(() => {
    // コンポーネントが更新されるたびに実行される処理
    console.log("Component updated");
  }); // 依存配列を渡さない場合、propsやstateの変更があるたびに実行されます

  return (
    <div>
      <p>My Component Name: {name}</p>
      <button
        onClick={() => {
          if (name === "Mike") setName("Jun");
          else setName("Mike");
        }}
      >
        Change Name
      </button>
      <PracticeContext.Provider value={human.name} />
    </div>
  );
};

export default MyComponent;
