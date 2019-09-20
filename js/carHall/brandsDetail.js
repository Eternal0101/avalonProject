 $('.tabMenu li').click(function () {
     $(this).addClass('tab_this').siblings().removeClass('tab_this');
     $('.tabContent .tabItem').eq($(this).index()).show().siblings().hide();
 });
 var province = [];

 function getProvince() {
     for (var i in Area.provinces.province) {
         province.push('<a href="javascript:setCity(' + Area.provinces.province[i].ssqid + ')">' + Area.provinces.province[i].ssqname + '</a>');
     }
     return province.join(' ');
 }
 console.log(Area.provinces.province)
 var city = [];

 function getCity(id) {
     for (var k in Area.provinces.province) {
         if (Area.provinces.province[k].ssqid == id) {
             for (var i in Area.provinces.province[k].cities.city) {
                 city.push('<a href="javascript:;">' + Area.provinces.province[k].cities.city[i].ssqname + '</a>');
             }
         }
     }
     return city.join(' ');
 }

 function setCity(id) {
     city = [];
     document.getElementById('city').innerHTML = getCity(id);
 }
 document.getElementById('province').innerHTML = getProvince();
$('#province a').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
});
    $("#city").delegate("a", "click", function () {
    $(this).addClass('active').siblings().removeClass('active')
});
 