var char0 = {
    title1: "暴龍汪",
    text1: "不小心踹壞奇怪的機械，導致從古代穿越時空來到現代的狗狗。可是本身還不知道自己穿越時空來到現代。",
    title2: "小夥伴化石",
    text2: "雖然知道暴龍汪的秘密，但心懷敵意的化石沒有坦白告訴他。",
};
var char1 = {
    title1: "騎士汪",
    text1: "想救出公主並成為史上最酷的騎士狗狗。 有時候太天真。",
    title2: "夥伴小盾牌​",
    text2: "每當戲弄純真的騎士汪時，總是感到快樂的小盾牌。​",
};
var char2 = {
    title1: "虎爛汪",
    text1: "我比任何人還要來得強！我就是山獸之君！ 自尊心很強，一不小心刺激他就會被咬。",
    title2: "小夥伴肉肉​",
    text2: "與虎爛汪有著又愛又恨的關係，常常想要避開他，但一旦沒看到他，又會擔心他。 ​",
};
var char3 = {
    title1: "炸彈汪",
    text1: "發現掉落在路邊的紙條與帽子後，天真地戴上危險帽子的狗狗。 帽子很敏感，只要有些微的衝擊感，就會爆炸。​",
    title2: "夥伴番仔火​",
    text2: "想要與認為會點燃帽子的炸彈汪解除誤會的番仔火。​",
};

var char4 = {
    title1: "小花汪",
    text1: "喜歡花朵且很親切的狗狗。超喜歡花朵，所以自己擁有專用的花圃。如果弄壞花圃的話…",
    title2: "夥伴鬱金香",
    text2: "管理小花汪的花圃並跟她一起生活的鬱金香。",
};
var char5 = {
    title1: "咕雞汪",
    text1: "為了炸雞店吉祥物面試，穿成雞衣服的狗狗。聽說他是雄性，所以沒有通過面試。很會碎碎念但又會照顧別人的性格。",
    title2: "夥伴雞腿君",
    text2: "炸雞店的吉祥物雞腿，一直無法理解咕雞汪的執著。 ​",
};

// 小狗按鈕
var char_info = "";
for ($i = 0; $i <= 5; $i++) {
    char_info +=
        `<div class="btn" onclick="tab_btn(` +
        $i +
        `)">
        <img src="/img/front/sec4_btn` +
        $i +
        `.png">
    </div>`;
}
$(".sec4_box4").html(char_info);

var point_text = {
    title: `注意事項`,

    text: `<ul>
<li>事前預約時間為12/13~開服當日中午12:00，完成預約後，於開服後即可在遊戲內領取預約獎勵。<br>​</li>

<li>一組手機號碼僅限參加一次事前預約，參加者請確保手機號碼填寫正確。<br>參與預約活動即表示同意個人資料蒐集使用及接收獎勵簡訊。<br>​​</li>

<li>活動一：投票活動－選出心儀小狗<br>​ 
(1)每個手機號每天限定投票一次​<br>​
(2)最終票數結果以活動結束後(開服當日中午12:00)，當下網站統計的數據為準，<br>獲勝的小狗獎勵將於開服後七天內發送至帳號中。<br>​</li>

<li>活動二：投票餵食小狗，最終獎勵依據活動結束後(開服當日中午12:00)，網站顯示最高獎勵為主。<br>最高獎勵將於開服後七天內發送至帳號中。<br>​​</li>

<li>活動二的骨頭數量，將於每日凌晨12點進行更新​

<li>本活動贈送的虛寶獎勵，無法折換現金或等值商品。<br>​

<li>本活動限定台灣、香港、澳門地區的玩家參與，請根據自己所在地區參加相應活動。<br>​​</li>

<li>玩家如因個人因素造成線路不穩、異常而無法正常參加活動，將無法額外進行補發獎勵。<br>​​</li>

<li>活動期間系統若發生問題，本公司保留變更或終止本活動時間、內容之權利。<br>​​</li>

<li>本活動須於活動期限內，達成活動指定之條件，才具活動參加、抽獎、得獎與活動獎項領取之資格。<br>實際任務達成之計算、官方伺服器開放時間均依據《小狗英雄》伺服器、資料庫之數據為準；<br>虛寶獎項所呈現之效果，應以遊戲內實際設定為準。<br>​​</li>

<li>官方將保留變更活動內容以及核准兌換與否之權利，詳細活動規則、獎勵及異動說明均以網站<br>或FB公告最後一次公佈為準，請玩家密切留意網站公告訊息。活動開始後，所有玩家視同<br>同意最後公告之內容。<br>​</li></ul>​`,

    img: ``,
};

// 電腦視窗小尺寸 畫面黑屏

// function mobile() {
//     try {
//         document.createEvent("TouchEvent");
//         return true;
//     } catch (e) {
//         return false;
//     }
// }
// if (mobile()) {
//     console.log("是手機");
// } else {
//     console.log("是電腦");
// }

// function checkWindowSize() {
//     var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//     var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

//     // 檢查高度與寬度的比例是否小於0.53
//     if (screenHeight / screenWidth < 0.41 || screenHeight / screenWidth >1.13 ) {
//         // 如果條件滿足，顯示黑屏
//         document.getElementById('blackScreen').style.display = 'block';
//     } else {
//         // 如果不符合條件，隱藏黑屏
//         document.getElementById('blackScreen').style.display = 'none';
//     }
// }

// // 初始檢查視窗大小
// checkWindowSize();

// // 監聽視窗大小變化事件
// window.addEventListener('resize', checkWindowSize);
