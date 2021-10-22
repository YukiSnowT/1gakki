//セーブ

//


const dataSave = () =>{
    savedata = []//ここに必要データを配列で格納
    localStorage.setItem("mydata",savedata);
}

const dataLoad = () => {
    if(!localStorage.getItem("mydata")){
        //データがない場合の処理
    }else{
        //savedataに格納されていた順番で各変数に値を戻す
    }
}