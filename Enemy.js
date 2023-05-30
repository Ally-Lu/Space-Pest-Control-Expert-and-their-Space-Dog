class Enemy {
  constructor() {
    this.x = random(50, width - 70); // 設定敵人的 x 座標為在一定範圍內的隨機數值
    this.y = 0; // 設定敵人的 y 座標為 0，即位於畫面上方
    this.speed = random(2, 4); // 設定敵人的速度為在一定範圍內的隨機數值
  }

  move() {
    this.y += this.speed; // 讓敵人往下移動，y 座標加上速度值
  }

  display() {
    image(enemyImg, this.x, this.y, 100, 104);
     // 顯示敵人圖片，設定 x 和 y 座標，寬度和高度
  }

  hits(bullet) {
      let hit = collideRectRect(
      this.x - 25, // 設定敵人碰撞偵測的矩形左上角 x 座標，將 x 值減去 25
      this.y, // 設定敵人碰撞偵測的矩形左上角 y 座標
      enemyImg.width, // 設定敵人碰撞偵測的矩形寬度，使用敵人圖片的寬度
      enemyImg.height, // 設定敵人碰撞偵測的矩形高度，使用敵人圖片的高度
      bullet.x, // 設定子彈碰撞偵測的矩形左上角 x 座標
      bullet.y, // 設定子彈碰撞偵測的矩形左上角 y 座標
      bulletImg.width, // 設定子彈碰撞偵測的矩形寬度，使用子彈圖片的寬度
      bulletImg.height // 設定子彈碰撞偵測的矩形高度，使用子彈圖片的高度
    );
    return hit; // 回傳碰撞偵測結果
  }
}