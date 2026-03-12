// 3. 업앤 다운 UP & DOWN 숫자맞추기 게임
// https://codingdojang.com/scode/711?answer_mode=hide

// 컴퓨터가 1~100 숫자(정수 범위) 중 하나를 랜덤으로 정합니다. (이를 알려주지 않습니다.)
// 사용자는 이 숫자를 맞추어야 합니다.
// 입력한 숫자보다 정답이 크면 → "UP" 출력,
// 입력한 숫자보다 정답이 작으면 → "DOWN" 출력.
// 정답을 맞추면 → "정답"을 출력하고, 지금까지 숫자를 입력한 횟수를 알려줍니다.


import promptSync from 'prompt-sync';

const prompt = promptSync();

function upAndDown() {
  const answer = Math.floor(Math.random() * 100) + 1;
  let count = 0;

  while (true) {
    const guess = Number(prompt(`(${count + 1}번째) 숫자를 입력하세요: `))
    count++

      if (guess > answer) {
        console.log('DOWN');
      } else if (guess < answer) {
        console.log('UP');
      } else {
        console.log(`정답: ${count}번 만에 맞췄습니다.!`);
        break;
      }
  }
}

upAndDown();
