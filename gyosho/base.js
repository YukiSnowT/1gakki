
let text = "" // 28文字まで
let text2 = "";
let text_i = 0;
let text_speed = 25;
let text_gyo = 1;
let text_clear = true;
let text_next = ["テストキャラクター２：@@次のメッセージ@@テストテストテストテストテスト@@クリックで次へ","テストキャラクター：@@3/7@@テストテストテストテストテスト","テストキャラクター２：@@4/7@@テストテストテストテストテスト","テストキャラクター：@@5/7@@テストテストテストテストテスト","テストキャラクター２：@@6/7@@テストテストテストテストテスト","テストキャラクター：@@7/7@@これが最後のメッセージ。クリックしても何も起きない"];
let text_face = "img/testface.png";
let text_facenext = ["img/testface2.png","img/testface.png","img/testface2.png","img/testface.png","img/testface2.png","img/testface.png"];



//メッセージウィンドウに文字列を表示。現在のtextを持ってくる。
//1行28文字まで。@@で改行。現状は@@を使用した状態で28文字変えるとバグが発生するので注意。
const displayText = () => {
    document.getElementById("message").removeEventListener("click",displayText);
    if(!text_clear){
        document.getElementById("one").innerText="";
        document.getElementById("two").innerText="";
        document.getElementById("three").innerText="";
        document.getElementById("four").innerText="";
        text_clear = true;
    }
    let gyo = "one";
    if(text_gyo == 2){
        gyo = "two";
    }else if(text_gyo == 3){
        gyo = "three";
    }else if(text_gyo == 4){
        gyo = "four";
    }
    document.getElementById("kaogura").setAttribute("src",text_face);
    if(text.length<29&&text.indexOf("@@")===-1){
        document.getElementById(gyo).innerText=text.substr(0,text_i++);
        if(text_i<=text.length){
            setTimeout("displayText()",text_speed)
        }else{
            text_i = 0;
            text_gyo = 1;
            text_clear = false;
            if(text_next.length!==0){
                text = text_next[0];
                text_face = text_facenext[0]
                text_next.shift();
                text_facenext.shift();
                document.getElementById("message").addEventListener("click",displayText);
            }
        }
    }else if(text.length<113&&text.indexOf("@@")===-1){
        text2 = text.substr(0,27);
        document.getElementById(gyo).innerText=text.substr(0,text_i++);
        if(text_i<=28){
            setTimeout("displayText()",text_speed)
        }else{
            text_i = 0;
            text_gyo++;
            text = text.substr(28);
            displayText();
        }
    }else if(text.indexOf("@@")!==-1){
        text2 = text.substr(0,text.indexOf("@@")-1);
        document.getElementById(gyo).innerText=text.substr(0,text_i++);
        if(text_i<=text.indexOf("@@")){
            setTimeout("displayText()",text_speed)
        }else{
            text_i = 0;
            text_gyo++;
            text = text.substr(text.indexOf("@@")+2);
            if(text_gyo<5){
                displayText();
            }else{
                text_i = 0;
                text_gyo = 1;
                text_clear = false;
                if(text_next.length!==0){
                    text = text_next[0];
                    text_face = text_facenext[0]
                    text_next.shift();
                    text_facenext.shift();
                    document.getElementById("message").addEventListener("click",displayText);                }
            }
        }
    }else{
        text = text.substr(0,112);
        displayText();
    }
}


text = "テストキャラクター：@@テストメッセージです。@@改行表示のテストメッセージです。@@ここは４行目。@@ここは表示されない」"


document.getElementById("message").addEventListener("click",displayText);

