//読み込み
const start = () =>{
    displayNowLoading();
    setMonsterImage();
    imgLoad(systemImages,loadSystemImage);
    imgLoad(monsterImages,loadMonsterImage);
    setSpeed();
    const times = setInterval(function (){
        if(loadTime==0){
            //読み込み完了
            clearInterval(times);
            opening();
        }
    },1)
}

//読み込み完了後の動作
const opening = () =>{
    clickView();
    clickEvent();
    displayOpening();
}