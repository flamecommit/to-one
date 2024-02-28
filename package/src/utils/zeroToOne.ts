interface IProps {
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
  duration: number;
  /**
   * duration의 10% 이하로 할당하세요.
   */
  partition: number;
  callback?: (value: number) => void;
}

type EasingFunction = (t: number) => number;

// function cubicBezier(p0: number, p1: number, p2: number, p3: number) {
//   return function (t: number) {
//     const t2 = t * t;
//     const t3 = t2 * t;
//     return (
//       p0 * (1 - t3) + 3 * p1 * (1 - t2) * t + 3 * p2 * (1 - t) * t2 + p3 * t3
//     );
//   };
// }

function getEasingMethod(method: string): EasingFunction {
  switch (method) {
    case 'linear':
      return (t: number) => t;
    case 'ease-in':
      return (t: number) => t * t;
    case 'ease-out':
      return (t: number) => t * (2 - t);
    case 'ease-in-out':
      return (t: number) =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    default:
      return (t: number) => t;
  }
}

function calculateEasingValues(method: string, partition: number): number[] {
  const easing: EasingFunction = getEasingMethod(method);
  const values: number[] = [];
  const stepSize: number = 1 / partition;
  // const stepSize: number = duration / partition;

  for (let i = 0; i <= partition; i++) {
    const t = i * stepSize;
    values.push(easing(t));
  }

  return values;
}

export default function zeroToOne({
  easing = 'linear',
  duration,
  partition,
  callback,
}: IProps) {
  const partitions: number[] = calculateEasingValues(easing, partition);
  const durations = partitions.map((value, index) => {
    const prevValue = index > 0 ? partitions[index - 1] : 0;
    const d = value - (prevValue || 0);
    return d * duration;
  });

  // const sum = durations.reduce((a, b) => a + b);
  // console.log(durations, sum);

  const action = (step: number) => {
    setTimeout(() => {
      if (callback) {
        callback(partitions[step] || 0);
      }
      if (step < partition) {
        action(step + 1);
      }
    }, durations[step]);
  };

  action(0);
}
