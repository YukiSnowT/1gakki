//クリックレベルアップ処理
const clickLevelUp = () =>{
    if(subcheck(clickPrice)&&clickLevel<100){
        subPrice(clickPrice);
        clickLevel++;
        clickGet[1] *= 4;
        clickGet[2] *= 4;
        clickGet = advprice(clickGet);
        clickPrice[1] *= 5;
        clickPrice[2] *= 5;
        clickPrice = advprice(clickPrice);
        displayClickLevel();
    }
}

const clickEvent = () =>{
    cvs.addEventListener("click",function(){
        if(viewXY[0]<cvx/2&&viewXY[1]>cvy/1.5){
            clickLevelUp()
        }else if(viewXY[1]>cvy/8){
            addPrice(clickGet);
        }
        displayMyprice();
        displayClickLevel();
    })
}

clickEvent()