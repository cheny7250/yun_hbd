const correctNames = ["小寶", "寶寶", "劉小昀", "小豬", "劉大昀", "姊姊"];     // 設定可以通過驗證的名字
const button = document.getElementById("checkButton");     // 取得網頁中 id 為 checkButton 的按鈕
const nameInput = document.getElementById("nameInput");     // 取得網頁中 id 為 nameInput 的輸入欄位
button.addEventListener("click", function () {     // 當按鈕被點擊時執行以下程式碼
    const inputName = nameInput.value.trim();     // 取得使用者輸入的名字
    if (correctNames.includes(inputName)) {     // 檢查輸入的名字是否在正確名字清單中
        alert("驗證成功！歡迎" + inputName + "！");     // 顯示成功訊息
    } 
    else {
        alert("你不是我的小寶，請你關掉");     // 顯示失敗訊息
    }
});
console.log("JavaScript 連接成功！");     // 在瀏覽器的開發者工具中顯示訊息，確認 JavaScript 已成功連接到網頁

