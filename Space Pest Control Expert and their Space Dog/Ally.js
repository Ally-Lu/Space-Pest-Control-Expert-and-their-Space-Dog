class Ally { // class 定義了物件的屬性（資料）和方法（行為）
  constructor() { // 初始化物件的屬性
    this.x = random(50, width - 70); // 在畫布的指定範圍內隨機設定 x 座標
    this.y = 0; // 設定初始的 y 座標為 0
    this.speed = random(2, 4); // 隨機設定移動速度
  }

  move() { // 移動
    this.y += this.speed; // 根據速度更新 y 座標，使其向下移動
  }

  display() { // 顯示
    image(allyImg, this.x, this.y, 100, 100);
    // 顯示太空狗狗在指定座標位置，大小為 100x100 像素
  }

  hits(bullet) { // 碰撞判定方法
    let hit = collideRectRect( // collideRectRect() 函式判斷盟友和子彈是否發生碰撞
      this.x, // 第一個矩形（太空狗狗）的左上角 x 座標
      this.y, // 第一個矩形（太空狗狗）的左上角 y 座標
      100, // 第一個矩形的寬度
      100, // 第一個矩形的高度
      bullet.x, // 第二個矩形（子彈）的左上角 x 座標
      bullet.y, // 第二個矩形（子彈）的左上角 y 座標
      10, // 第二個矩形的寬度
      30 // 第二個矩形的高度
    );
    return hit; // 判斷盟友和子彈是否發生碰撞，並回傳結果
  }
}