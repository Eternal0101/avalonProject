$('.statusList li').click(function(){
    $(this).addClass('hightLight').siblings().removeClass('hightLight');
    $('.statusContent .statusDetail').eq($(this).index()).show().siblings().hide();
});

var province = [];

function getProvince() {
    for (var i in Area.provinces.province) {
        province.push('<a href="javascript:setCity(' + Area.provinces.province[i].ssqid + ')">' + Area.provinces.province[i].ssqname + '</a>');
    }
    return province.join(' ');
}
// console.log(Area.provinces.province)
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

$(function(){
    var counter = 0;
    var pageStart = 2;
    var pageSize = 1; 
    $('.btn-loadMore').on('click', function () {
        pageStart++
        getData(pageStart, pageSize);
    });
    getData(pageStart, pageSize)
    function getData(offset,size){
        $.ajax({
            url: '../../data/data.json',
            type: 'get',
            success: function (res) {
                var data = res;
                var sum = res.length;
                var result = '';
                for(var i=(offset - 1)*size;i<sum;i++){
                    result += "<tr>"+
                                "<td>"+
                                "<div class='selectDetail'> <span>" + data[i].title_one + "</span><span>" + data[i].title_two + "</span><span>" + data[i].title_three + "</span><span>" + data[i].title_four + "</span><span>" + data[i].title_five + "</span><span></div>" +
                                "<div class='allStatus'><button>" + data[i].status_one + "</button><button>" + data[i].status_two + "</button><button>" + data[i].status_three + "</button><button>" + data[i].status_four + "</button><button>" + data[i].status_five + "</button></div>"+
                                "</td>"+
                                "<td>" + data[i].price+"</td>"+
                                "<td>" + data[i].Img + "</td>" +
                                "<td>" + data[i].canshu + "</td>" +
                                "</tr>" ;
                                $('#loadMore tbody').append(result);
                }
                // console.log(res);
            }
        });
    };
    avalon.ready(function(){
        window.vmCarSeriesDetail = avalon.define({
            $id:'root',
            onLoad:function(){

            },
            getPage: function (el) {
                var src = el.currentTarget.dataset.src;
                window.parent.parent.document.getElementById('test').src = src;
            }
        });
        avalon.scan(document.body);
        vmCarSeriesDetail.onLoad();
    });
});
