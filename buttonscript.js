const bcanvas = document.getElementById("buttonCanvas");
const bctx = bcanvas.getContext("2d");
let bx = 0
let by = 0
let direction = 0 //0=無 1=上 2=下 3=右 4=左 
window.addEventListener('click', e => {
    var rect = e.target.getBoundingClientRect();
    bx = e.clientX - rect.left;
    by = e.clientY - rect.top;
    if (bx >= 75 && bx <= 125 && by >= 25 && by <= 75) { // Xが75以上で125以下、Yが25以上で75以下
        direction = 1
        console.log("上")
    }
    if (bx >= 125 && bx <= 175 && by >= 75 && by <= 125) {
        direction = 3
        console.log("右")
    }
    if (bx >= 25 && bx <= 75 && by >= 75 && by <= 125) {
        direction = 4
        console.log("左")
    }
    if (bx >= 75 && bx <= 125 && by >= 125 && by <= 175) {
        direction = 2
        console.log("下")
    }

});
export {direction};
export function kakikae(value){
    direction = value
}
direction = 0;
function draw() {
    // 1. 画面のクリア
    bctx.fillStyle = 'rgb(255, 0, 0)';
    bctx.fillRect(0, 0, bcanvas.width, bcanvas.height); // 背景を白
    // 2. 図形の描画
    bctx.fillStyle = 'rgb(10, 10, 10)';
    bctx.beginPath();
    bctx.fill();
    bctx.fillRect(75, 25, 50 , 50)
    bctx.fillRect(125, 75, 50 , 50)
    bctx.fillRect(25, 75, 50 , 50)
    bctx.fillRect(75, 125, 50 , 50)
    console.log("direction"+direction)
    requestAnimationFrame(draw); // フレームごとに更新 while(繰り返し)とpygame.display.update(全体の描画)の中間みたいな感じ
}
draw();