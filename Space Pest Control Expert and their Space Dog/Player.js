class Player {
  constructor() {
    this.x = width / 2; // 設定玩家的 x 座標為畫面寬度的一半，將玩家置中
    this.y = height - 50; // 設定玩家的 y 座標為畫面高度減去 50，即位於畫面下方
    this.speed = 8; // 設定玩家的移動速度
    this.direction = {
      left: false,
      right: false,
      up: false,
      down: false
       // 設定玩家的移動方向，初始值皆為 false
    };
  }

  move() {
    if (this.direction.left) {
      this.x -= this.speed; // 若向左移動的方向為真，將 x 座標減去速度值
    }
    if (this.direction.right) {
      this.x += this.speed; // 若向右移動的方向為真，將 x 座標加上速度值
    }
    if (this.direction.up) {
      this.y -= this.speed; // 若向上移動的方向為真，將 y 座標減去速度值
    }
    if (this.direction.down) {
      this.y += this.speed; // 若向下移動的方向為真，將 y 座標加上速度值
    }
    this.x = constrain(this.x, 0, width); // 限制 x 座標在畫面寬度的範圍內
    this.y = constrain(this.y, 0, height); // 限制 y 座標在畫面高度的範圍內
  }

  moveLeft() {
    this.direction.left = true; // 設定向左移動的方向為真
  }

  moveRight() {
    this.direction.right = true; // 設定向右移動的方向為真
  }

  moveUp() {
    this.direction.up = true; // 設定向上移動的方向為真
  }

  moveDown() {
    this.direction.down = true; // 設定向下移動的方向為真
  }

  stopMoving(direction) {
    if (direction === "left") {
      this.direction.left = false; // 停止向左移動
    }
    if (direction === "right") {
      this.direction.right = false; // 停止向右移動
    }
    if (direction === "up") {
      this.direction.up = false; // 停止向上移動
    }
    if (direction === "down") {
      this.direction.down = false; // 停止向下移動
    }
  }

  display() {
    image(playerImg, this.x, this.y, 130, 140); // 顯示玩家圖片，設定圖片的位置和大小
  }
}