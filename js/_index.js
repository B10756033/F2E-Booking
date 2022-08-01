


var xhr = new XMLHttpRequest();

xhr.open("GET", "https://challenge.thef2e.com/api/thef2e2019/stage6/rooms");
xhr.setRequestHeader("Authorization", "Bearer z0UbXWVhJ2JsqdXK71lAZl6wHOVChtZ9JOJ6PEJ1SjQDZAV85ob8eQQ3b1f7");
xhr.send();
xhr.onload = function() {
    console.log(xhr.responseText);
    function addPics() {
      var str = JSON.parse(xhr.responseText);
      for(var i = 1;i<7;i++){
        document.querySelector(".card_title_"+i).innerHTML = str.items[i-1].name;
        document.querySelector(".normalDayPrice_"+i).innerHTML = 'NT$'+str.items[i-1].normalDayPrice;
        document.querySelector(".holidayPrice_"+i).innerHTML = 'NT$'+str.items[i-1].holidayPrice;
        
      }
      
      
    }
    addPics()
}


$(window).load(function() { // 確認整個頁面讀取完畢再將這三個div隱藏起來
  $("#status").delay(200).fadeOut(100); //delay --> 延遲幾秒才fadeOut
  $("#preloader").delay(200).fadeOut(100);
})