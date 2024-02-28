import { useEffect, useState } from 'react';
import { zeroToOne } from 'to-one';

function App() {
  const [num1, setNum1] = useState<number>(0);

  useEffect(() => {
    zeroToOne({
      easing: 'ease-out',
      duration: 1000,
      partition: 100,
      callback: (value) => {
        // console.log(value);
        setNum1(value * 10000);
      },
    });
  }, []);

  return <div>{num1}</div>;
}

export default App;
