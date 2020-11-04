class Board {
  
  // 새 게임이 시작되면 보드를 초기화한다.
  reset() {
    this.grid = this.getEmptyBoard();
  }
  
  // 0으로 채워진 행렬을 얻는다.
  getEmptyBoard() {
    return Array.from(
      {length: ROWS}, () => Array(COLS).fill(0)
    );
  }


  valid(p) {
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = p.x + dx
        let y = p.y + dy
        return value === 0 || (this.isInsideWalls(x, y) && this.notOccupied(x, y))
      })
    })
  }
  
  isInsideWalls(x, y) {
    return x >= 0 && x < COLS && y <= ROWS;
  }

  notOccupied(x, y) {
    return this.grid[y] && this.grid[y][x] === 0;
  }
}
