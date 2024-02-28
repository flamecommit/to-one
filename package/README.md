## 라이브러리 개요

to-one은 0부터 1까지 만들어주는 typescript 라이브러리 입니다.
easing, duration, partition 등의 옵션을 제공합니다.
​

## 설치

npm을 사용하여 설치할 수 있습니다.

```bash
npm install to-one
```

또는 yarn을 사용할 수도 있습니다.

```bash
yarn add to-one
```

## 예제 코드

라이브러리의 간단한 사용 예제 코드입니다.

```tsx
import { zeroToOne } from 'to-one';

zeroToOne({
  easing: 'ease-out',
  duration: 1500, // 0에서 1이 되는 시간이 1.5초 소요됩니다.
  partition: 100, // 100번의 step을 거칩니다.
  callback: (value) => {
    setNum1(value);
  },
});
```

## 주요 옵션

### easing

- type: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'
- 0부터 1까지 증가율 곡선을 제공합니다.

### duration

- type: number
- 증가되는 시간을 설정합니다. 단위는 (ms) 입니다.

### partition

- type: number
- partition 만큼 분할하여 증가합니다.

### callback

- type: (value: number) => void;
- 분할마다 Callback 함수를 실행합니다.

## 실제 사용 사례

라이브러리의 실제 사용 예시는 [Demo](https://shinyongjun.com/library/to-one)에서 확인할 수 있습니다.

## 피드백 및 지원

라이브러리에 대한 피드백이나 문제 신고는 [GitHub Issues 페이지](https://github.com/flamecommit/to-one/issues)에서 제공합니다.
