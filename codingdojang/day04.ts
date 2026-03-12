import promptSync from 'prompt-sync';

const prompt = promptSync();

class UnionFind {
  parent: number[];
  
  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
  }
  
  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  
  unite(x: number, y: number): void {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.parent[rootX] = rootY;
    }
  }
}

function solveSpyProblem() {
  const input = prompt('첫 줄 (N M): ');
  const [N, M] = input.split(' ').map(Number);
  
  const uf = new UnionFind(N * 2); // 각 정치인 2개 노드
  let lineNum = 1;
  
  while (lineNum <= M) {
    const inputLine = prompt(`${lineNum}번째 줄: `);
    const [a, b, relation] = inputLine.split(' ');
    const x = Number(a) - 1; // 0-index
    const y = Number(b) - 1;
    
    // 친구: 같은 그룹이어야 함
    // a와 b가 친구 → a와 b가 같은 그룹
    if (relation === 'f') {
      if (uf.find(x) === uf.find(y) || uf.find(x + N) === uf.find(y + N)) {
        return lineNum; // 모순!
      }
      uf.unite(x, y);           // 친구 그룹 연결
      uf.unite(x + N, y + N);   // 적 그룹도 연결
    }
    // 적: 다른 그룹이어야 함
    else { // 'e'
      if (uf.find(x) === uf.find(y + N) || uf.find(x + N) === uf.find(y)) {
        return lineNum; // 모순!
      }
      uf.unite(x, y + N);       // a의 친구 = b의 적
      uf.unite(x + N, y);       // a의 적 = b의 친구
    }
    
    lineNum++;
  }
  
  return "THE SPY DID NOT BETRAY";
}

// 실행
console.log(solveSpyProblem());
