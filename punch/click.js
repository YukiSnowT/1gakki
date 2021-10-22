//クリックレベルアップ処理
const clickLevelUp = () =>{
    if(subcheck(clickPrice)&&clickLevel<100){
        subPrice(clickPrice);
        clickLevel++;
        clickGet[1] *= 2;
        clickGet[2] *= 2;
        clickGet = advprice(clickGet);
        clickPrice[1] *= 5;
        clickPrice[2] *= 5;
        clickPrice = advprice(clickPrice);
        displayClickLevel();
    }
}