
    //タグを作るためのメソッド
    // function createTag(name){
    //     const t = document.createElement(name);
    //     return t;
    // }

    //IDつきのタグを作る
    function createTagId(name,id){
        const t = document.createElement(name);
        t.setAttribute("id", id);
        return t;
    }

    //classつきのタグを作る
    function createTagClass(name,clas){
        const t = document.createElement(name);
        t.setAttribute("class", clas);
        return t;
    }

    //リンクを作る
    const link_css = document.createElement("link");
    link_css.setAttribute("rel","stylesheet");
    link_css.setAttribute("href","css/style.css");
    document.querySelector("head").appendChild(link_css);

    //titleをつくる
    document.querySelector("title").textContent = "動物園について : ZOO LOGICAL"; 

    //headerをつくる
    function createHeader(){
        const header = createTagId("header","top");
        const h1_header = document.createElement("h1");
        const a_header = createTagId("a","kari");
        a_header.setAttribute("href","index.html");
        const img_header = document.createElement("img");
        img_header.setAttribute("src","images/logo.png");
        img_header.setAttribute("alt","ZOO LOGICAL");
        
        document.querySelector("body").appendChild(header);
        document.querySelector("header").appendChild(h1_header);
        document.querySelector("h1").appendChild(a_header);
        document.querySelector("#kari").appendChild(img_header);
        
        a_header.removeAttribute("id");

    }
    
    //navをつくる
    function createNav(){
        const nav = document.createElement("nav");
        const ul_nav = document.createElement("ul");
        const li_nav_about = createTagId("li","nav_about");
        const li_nav_guide = createTagId("li","nav_guide");
        const li_nav_animals = createTagId("li","nav_animals");
        const li_nav_contact = createTagId("li","nav_contact");
        const a_nav_about = document.createElement("a");
        a_nav_about.setAttribute("href","about.html");
        a_nav_about.textContent = "動物園について";
        const a_nav_guide = document.createElement("a");
        a_nav_guide.setAttribute("href","guide.html");
        a_nav_guide.textContent = "ガイドのご案内";
        const a_nav_animals = document.createElement("a");
        a_nav_animals.setAttribute("href","animals.html");
        a_nav_animals.textContent = "人気の動物たち";
        const a_nav_contact = document.createElement("a");
        a_nav_contact.setAttribute("href","contact.html");
        a_nav_contact.textContent = "お問い合わせ";

        document.querySelector("body").appendChild(nav);
        document.querySelector("nav").appendChild(ul_nav);
        document.querySelector("ul").appendChild(li_nav_about);
        document.querySelector("ul").appendChild(li_nav_guide);
        document.querySelector("ul").appendChild(li_nav_animals);
        document.querySelector("ul").appendChild(li_nav_contact);
        document.querySelector("#nav_about").appendChild(a_nav_about);
        document.querySelector("#nav_guide").appendChild(a_nav_guide);
        document.querySelector("#nav_animals").appendChild(a_nav_animals);
        document.querySelector("#nav_contact").appendChild(a_nav_contact);
        
    }

    //pathをつくる
    function createPath(){
        const div_path = createTagId("div","path");
        const ol_path = document.createElement("ol");
        const li_path1 = createTagId("li","kari");
        const li_path2 = document.createElement("li");
        const a_path_home = document.createElement("a");
        a_path_home.setAttribute("href","index.html");
        a_path_home.textContent = "ホーム";
        li_path2.textContent = "動物園について";

        document.querySelector("body").appendChild(div_path);
        document.querySelector("#path").appendChild(ol_path);
        document.querySelector("ol").appendChild(li_path1);
        document.querySelector("ol").appendChild(li_path2);
        document.querySelector("#kari").appendChild(a_path_home);

        li_path1.removeAttribute("id");
        
    }


    //contentsをつくる
    function createContents(){
        const div_contents = createTagId("div","contents");
        const div_main = createTagId("div","main");
        const div_sub = createTagId("div","sub");
        const article_main = document.createElement("article");
        const h1_main = document.createElement("h1");
        h1_main.textContent = "動物園について";
        const aside_sub = document.createElement("aside");
        const div_bnr1 = createTagClass("div","bnr_area_k");
        const div_bnr2 = createTagClass("div","bnr_area");
        const a_sub_guide = createTagId("a","kari1");
        a_sub_guide.setAttribute("href","guide.html");
        const dl_sub = document.createElement("dl");
        const dt_sub = document.createElement("dt");
        const img_sub_guide = document.createElement("img");
        img_sub_guide.setAttribute("src","images/bnr_guide.png");
        img_sub_guide.setAttribute("alt","ガイドのご案内");
        const dd_sub = document.createElement("dd");
        dd_sub.textContent = "飼育員が動物たちをご紹介";
        const a_sub_contact = createTagId("a","kari2");
        a_sub_contact.setAttribute("href","contact.html");
        const p_sub = createTagId("p","kari3");
        const img_sub_contact = document.createElement("img");
        img_sub_contact.setAttribute("src","images/bnr_contact.png");
        img_sub_guide.setAttribute("alt","お問い合わせ");
        
        document.querySelector("body").appendChild(div_contents);
        document.querySelector("#contents").appendChild(div_main);
        document.querySelector("#contents").appendChild(div_sub);
        document.querySelector("#main").appendChild(article_main);
        document.querySelector("article").appendChild(h1_main);
        document.querySelector("#sub").appendChild(aside_sub);
        document.querySelector("aside").appendChild(div_bnr1);
        console.log(document.querySelector("#sub"))
        console.log(document.querySelector(".bnr_area_k"))
        document.querySelector("aside").appendChild(div_bnr2);
        document.querySelector(".bnr_area_k").appendChild(a_sub_guide);
        document.querySelector("#kari1").appendChild(dl_sub);
        document.querySelector("dl").appendChild(dt_sub);
        document.querySelector("dl").appendChild(dd_sub);
        document.querySelector("dt").appendChild(img_sub_guide);
        document.querySelector(".bnr_area").appendChild(a_sub_contact);
        document.querySelector("#kari2").appendChild(p_sub);
        document.querySelector("#kari3").appendChild(img_sub_contact);
        
        div_bnr1.setAttribute("class" , "bnr_area");
        a_sub_guide.removeAttribute("id");
        a_sub_contact.removeAttribute("id");
        p_sub.removeAttribute("id");

    }

    //footerをつくる
    function createFooter(){
        const footer = document.createElement("footer");
        const p_footer_top = createTagId("p","pagetop");
        const a_fotter = document.createElement("a");
        a_fotter.setAttribute("href","#top");
        a_fotter.textContent = "ページの先頭へ戻る"; 

        const adress = document.createElement("address")
        adress.textContent = "山梨県富士吉田市X-X-X 電話 0120-XXX-XXX 営業時間 9:00～17:00(休園日：月曜日、年末年始)"; 
    
        const p_footer_bottom = createTagId("p","copyright");
        const small_footer = document.createElement("small");
        small_footer.textContent = "Copyright 2014 ZOO LOGICAL All rights reserved.";

        document.querySelector("body").appendChild(footer);
        document.querySelector("footer").appendChild(p_footer_top);
        document.querySelector("#pagetop").appendChild(a_fotter);

        document.querySelector("footer").appendChild(adress);
        document.querySelector("footer").appendChild(p_footer_bottom);
        document.querySelector("#copyright").appendChild(small_footer);
    
    }
    createHeader();
    createNav();
    createPath();
    createContents();
    createFooter();

    
    
    
