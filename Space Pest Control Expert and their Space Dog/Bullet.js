class Bullet {
  constructor(x, y) {
    this.x = x + 20;  // 設定子彈的 x 座標為玩家的 x 座標加上 20
    this.y = y - 20;  // 設定子彈的 y 座標為玩家的 y 座標減去 20
    this.speed = 6;  // 設定子彈的速度為 6
  }

  move() {
    this.y -= this.speed; // 讓子彈往上移動，y 座標減去速度值
  }

  display() {
    image(bulletImg, this.x + 40, this.y, 10, 30);
     // 顯示子彈圖片，設定 x 和 y 座標偏移量，寬度和高度
  }
}
