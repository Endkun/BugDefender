//export function move() {
//    return 1
//}
const bcanvas = document.getElementById("buttonCanvas");
const canvas = document.getElementById("gameCanvas");
const bctx = bcanvas.getContext("2d");
const ctx = canvas.getContext("2d") 
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
    requestAnimationFrame(draw); // フレームごとに更新 while(繰り返し)とpygame.display.update(全体の描画)の中間みたいな感じ
    window.addEventListener('click', e => {
        var rect = e.target.getBoundingClientRect();
        bx = e.clientX - rect.left;
        by = e.clientY - rect.top;
        if (bx >= 75 && bx <= 125 && by >= 25 && by <= 75) { // Xが75以上で125以下、Yが25以上で75以下
            console.log("上")
        }
        if (bx >= 125 && bx <= 175 && by >= 75 && by <= 125) {
            console.log("右")
        }
        if (bx >= 25 && bx <= 75 && by >= 75 && by <= 125) {
            console.log("左")
        }
        if (bx >= 75 && bx <= 125 && by >= 125 && by <= 175) {
            console.log("下")
        }

    });
    
}
draw();