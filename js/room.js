var xhr = new XMLHttpRequest();
if(document.querySelector(".Room").innerHTML=='White Space-Single Room'){
  xhr.open("GET", "https://challenge.thef2e.com/api/thef2e2019/stage6/room/3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu");
}else if(document.querySelector(".Room").innerHTML=='White Space-Deluxe Single Room'){
  xhr.open("GET", "https://challenge.thef2e.com/api/thef2e2019/stage6/room/g0mYhN6ignMz4VYW7eiWsXZN8DHolHzH8LuVmM6hq5h6BrrqrLMw4aJgHv7LZ3RQ");
}else if(document.querySelector(".Room").innerHTML=='White Space-Double Room'){
  xhr.open("GET", "https://challenge.thef2e.com/api/thef2e2019/stage6/room/RA8NhExaXXZB7EODVALSDvFFQzj1JP0a4C1pwZ1acPaieRBwiWoCb0FE0KUbXaxg");
}else if(document.querySelector(".Room").innerHTML=='White Space-Deluxe Double Room'){
  xhr.open("GET", "https://challenge.thef2e.com/api/thef2e2019/stage6/room/kICyWhZ5XsfI4n1d4gBOsDjIyIxNozwgmxYKyZpzi5pjLcU2Nl4RhiGrn6zaPuTJ");
}else if(document.querySelector(".Room").innerHTML=='White Space-Twin Room'){
  xhr.open("GET", "https://challenge.thef2e.com/api/thef2e2019/stage6/room/VCxbQq1vLeUtxW781k9Dlq3mHBRNl5YP19Lhq8k5TbIr2BeH58gRpnNKGoEgkysz");
}else{
  xhr.open("GET", "https://challenge.thef2e.com/api/thef2e2019/stage6/room/YovqNpFDaal598jbpd1A14gXwDE6gekTqJgxOAGcq78B8YnP7claymQVFy2GTwgb");
}
// 如何獲得 API 授權

xhr.setRequestHeader("Authorization", "Bearer z0UbXWVhJ2JsqdXK71lAZl6wHOVChtZ9JOJ6PEJ1SjQDZAV85ob8eQQ3b1f7");
xhr.send();
xhr.onload = function() {
    console.log(xhr.responseText);
    function addPics() {
      var str = JSON.parse(xhr.responseText);
      var descriptionShort = str.room[0].descriptionShort;
      
      var _descriptionShort = '房客人數限制：'+descriptionShort.GuestMin+'~'+descriptionShort.GuestMax+'人<br>床型：'+descriptionShort.Bed+'<br>衛浴數量：1間<br>房間大小：'+descriptionShort.Footage+'平方公分'
      var _description = str.room[0].description

      document.querySelector(".roomName").innerHTML = str.room[0].name;
      document.querySelector(".descriptionShort").innerHTML = _descriptionShort;
      document.querySelector(".description").innerHTML = '<br>'+_description;
      document.querySelector(".checkIn_time").innerHTML = str.room[0].checkInAndOut.checkInEarly+' － '+str.room[0].checkInAndOut.checkInLate;
      document.querySelector(".checkOut_time").innerHTML = str.room[0].checkInAndOut.checkOut
      document.querySelector(".normalDayPrice").innerHTML = 'NT.'+str.room[0].normalDayPrice
      document.querySelector(".holidayPrice").innerHTML = 'NT.'+str.room[0].holidayPrice

      $("#status").delay(700).fadeOut(500); //delay --> 延遲幾秒才fadeOut
      $("#preloader").delay(1000).fadeOut(800);
    }
    document.querySelector(".input_date_1").addEventListener("change", mydate1);
    document.querySelector(".input_date_2").addEventListener("change", mydate2);

    function mydate1()
    {
      d=new Date(document.querySelector(".input_date_1").value);
      dt=d.getDate();
      mn=d.getMonth();
      mn++;
      yy=d.getFullYear();
      document.querySelector(".date_1").innerHTML=yy+"-"+mn+"-"+dt
    }
    function mydate2()
    {
      d=new Date(document.querySelector(".input_date_2").value);
      dt=d.getDate();
      mn=d.getMonth();
      mn++;
      yy=d.getFullYear();
      document.querySelector(".date_2").innerHTML=yy+"-"+mn+"-"+dt
    }
    addPics()
}


