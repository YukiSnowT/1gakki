const grid = 30;
let widSize = 10;
let heiSize = 25;
let nextWidth = grid*3+8;
let canvasWidth = (grid+1)*widSize+nextWidth+3; //canvasの横幅
let canvasHeight = (grid+1)*heiSize; //canvasの縦幅

const canvas = document.createElement("canvas");
canvas.style.backgroundColor = "#000"
canvas.style.display = "block";
canvas.style.margin = "auto";
canvas.style.border = "5px outset #0ff";
canvas.setAttribute("id","canv");
canvas.setAttribute("width",canvasWidth)
canvas.setAttribute("height",canvasHeight)
document.querySelector("body").appendChild(canvas);
const ctx = canvas.getContext("2d");

const blockType = [
    [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],"#000"],//空
    [[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],"#fff"],//I型、白
    [[0,0,1,0],[0,0,1,0],[0,1,1,0],[0,0,0,0],"#ff0"],//J型、黄
    [[0,1,0,0],[0,1,0,0],[0,1,1,0],[0,0,0,0],"#0f0"],//L型、緑
    [[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],"#f00"],//O型、赤
    [[0,0,0,0],[0,0,1,1],[0,1,1,0],[0,0,0,0],"#0ff"],//S型、水
    [[0,0,0,0],[1,1,0,0],[0,1,1,0],[0,0,0,0],"#f0f"],//Z型、桃
    [[0,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0],"#00f"],//T型、青
]

let nextBlock = 2;
let nextBlockLast = 7;
let nextBlockSet = [1,2,3,4,5,6,7];



const displayMain = () =>{
    ctx.fillStyle='#444';
    for(i=1;i<=widSize;i++){
        ctx.fillRect((grid+1)*i-1,0,1,canvasHeight);
    }
    for(j=1;j<=heiSize;j++){
        ctx.fillRect(0,(grid+1)*j,canvasWidth-nextWidth,1);
    }
    ctx.fillStyle='#ddd';
    ctx.strokeStyle='#ddd';
    ctx.fillRect((grid+1)*10,0,3,canvasHeight);
    ctx.font="bold "+ grid*2/3 +"px sans";
    ctx.textBaseline='top';
    ctx.textAlign='center';
    ctx.fillText("NEXT",canvasWidth-nextWidth/2,grid/3,nextWidth);
    ctx.strokeRect((grid+1)*10+5, grid*3/2, nextWidth-4, nextWidth-4);
    ctx.fillText("LEVEL",canvasWidth-nextWidth/2,grid*17/6+nextWidth-4,nextWidth);
    ctx.strokeRect((grid+1)*10+5, grid*11/3+nextWidth, nextWidth-4, nextWidth-4);
    ctx.fillText("SCORE",canvasWidth-nextWidth/2,grid*5.5+nextWidth*2-8,nextWidth);
    ctx.fillRect((grid+1)*10,canvasHeight-grid*4,nextWidth,3);
    ctx.fillRect((grid+1)*10,canvasHeight-grid*4,grid,grid);
    
}


const controlBlock ={
    x:0,
    y:0,
    type:2,
    dire:0
}

displayMain();
