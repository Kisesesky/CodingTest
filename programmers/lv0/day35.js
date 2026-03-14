// 안전지대
// https://school.programmers.co.kr/learn/courses/30/lessons/120866

// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// board는 n * n 배열입니다.
// 1 ≤ n ≤ 100
// 지뢰는 1로 표시되어 있습니다.
// board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.

// 입출력 예
// board	                result
// [                        16
//  [0, 0, 0, 0, 0], 
//  [0, 0, 0, 0, 0], 
//  [0, 0, 0, 0, 0], 
//  [0, 0, 1, 0, 0], 
//  [0, 0, 0, 0, 0]
// ]	

// [                         13
//  [0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0],
//  [0, 0, 1, 1, 0],
//  [0, 0, 0, 0, 0]
// ]	

// [                          0
//  [1, 1, 1, 1, 1, 1],
//  [1, 1, 1, 1, 1, 1],
//  [1, 1, 1, 1, 1, 1], 
//  [1, 1, 1, 1, 1, 1],
//  [1, 1, 1, 1, 1, 1],
//  [1, 1, 1, 1, 1, 1]
// ]	

// 입출력 예 설명
// 입출력 예 #1
// (3, 2)에 지뢰가 있으므로 지뢰가 있는 지역과 지뢰와 인접한 위, 아래, 좌, 우, 대각선 총 8칸은 위험지역입니다. 따라서 16을 return합니다.

// 입출력 예 #2
// (3, 2), (3, 3)에 지뢰가 있으므로 지뢰가 있는 지역과 지뢰와 인접한 위, 아래, 좌, 우, 대각선은 위험지역입니다. 따라서 위험지역을 제외한 칸 수 13을 return합니다.

// 입출력 예 #3
// 모든 지역에 지뢰가 있으므로 안전지역은 없습니다. 따라서 0을 return합니다.

function solution(board) {
  const n = board.length
  const dir = [
      [-1,-1], [-1,0], [-1,1],
      [0,-1],          [0,1],
      [1,-1],  [1,0],  [1,1]
  ]
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        for (let d of dir) {
          let nx = i + d[0]
          let ny = j + d[1]
          if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
            if (board[nx][ny] === 0) {
              board[nx][ny] = 2
            }
          }
        }
      }
    }
  }
  return board.flat().filter(v => v === 0).length
}

function solution(board) {
  const n = board.length
  const dir = [
      [-1,-1], [-1,0], [-1,1],
      [0,-1],          [0,1],
      [1,-1],  [1,0],  [1,1]
  ]
  let dangerZone = new Set()
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        dir.forEach(v => {
          let [col, row] = [i + v[0], j + v[1]];
          if (col >= 0 && col < n && row >=0 && row < n) {
            dangerZone.add(col + " " + row);
          }
        })
      }
    }
  }
  return n * n - dangerZone.size;
}