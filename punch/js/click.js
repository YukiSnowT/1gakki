
    //クリック位置の取得
    const clickView = () =>{
        cvs.addEventListener("mousemove",e=>{
            const rect = e.target.getBoundingClientRect();
            viewXY[0] = e.clientX - rect.left+0.5;
            viewXY[1] = e.clientY - rect.top;
        })
    }



//キャンバスクリックレベルアップ処理
const clickLevelUp = () =>{
    if(subcheck(clickPrice)&&clickLevel<100){
        subPrice(clickPrice);
        clickLevel++;
        clickGet[1] = Math.floor(clickGet[1]*4.2);
        clickGet[2] = Math.floor(clickGet[2]*4.2);
        clickGet = advprice(clickGet);
        clickPrice[1] *= 5;
        clickPrice[2] *= 5;
        clickPrice = advprice(clickPrice);
        displayClickLevel();
    }
}

//キャンバスクリックで発生するイベント
const clickEvent = () =>{
    cvs.addEventListener("click",function(){
        if(gameStart){ //ゲーム開始後
            if(viewXY[1]>cvy/1.5){
                clickLevelUp()
            }else if(viewXY[1]>cvy/8&&animationM>40){
                animationP = 30;
                animationPXY[0] = viewXY[0]-Math.floor(Math.random()*(cvx/5+1));
                animationPXY[1] = viewXY[1]-Math.floor(Math.random()*(cvx/5+1));
                addPrice(clickGet);
                addPrice(clickGet,sumMyPrice);
            }
            displayMyprice();
            displayClickLevel();
        }else{
            gameStart = true;
            //コンテニュー、データ消去の分岐
            displayMainGame();
            loopEvent = setInterval(mainAct,1000/30)////1000/30に変更→baseも
        }
    })
}

