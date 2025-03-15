const bcanvas = document.getElementById("buttonCanvas");
const bctx = bcanvas.getContext("2d");
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
        if (e.clientX >= 75 && e.clientX <= 125 && e.clientY >= 25 && e.clientY <= 75) { // Xが75以上で125以下、Yが25以上で75以下
            console.log("上");
        }
        if (e.clientX >= 125 && e.clientX <= 175 && e.clientY >= 75 && e.clientY <= 125) {
            console.log("右");
        }
        if (e.clientX >= 25 && e.clientX <= 75 && e.clientY >= 75 && e.clientY <= 125) {
            console.log("左");
        }
        if (e.clientX >= 75 && e.clientX <= 125 && e.clientY >= 125 && e.clientY <= 175) {
            console.log("下");
        }
    });
    
}
draw();