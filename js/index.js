$(function(){

    // FullPage
    $('#main').fullpage({
        anchors: ['top', 'about', 'skills', 'works'],
        menu: '#menu',
        navigation: false,
        onLeave: function (index, nextIndex, direction) {

            // ProfilePage
            if(index == 1 && direction =='down'){
                $('.gnav-link').addClass('is-profile');
                $('.gnav-link').addClass('is-profile-link');
                $('.copyright').addClass('is-profile');
                $('.logo').addClass('is-profile-logo');
            }
            // TopPage
            else if(index == 2 && direction == 'up'){
                $('.gnav-link').removeClass('is-profile');
                $('.gnav-link').removeClass('is-profile-link');
                $('.copyright').removeClass('is-profile');
                $('.logo').removeClass('is-profile-logo');
            }
        }
    });

    // DataTables
    $('#table').DataTable({
        lengthChange: false,
        searching: false,
        ordering: false,
        info: false,
        paging: false,
        data: works,
        columns: [
            { data: "Type" },
            { data: "Work" }
        ]
    });
});

// PieChart
nv.addGraph(function() {
    var chart = nv.models.pieChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .labelThreshold(.05)
        .showLabels(true);

    d3.select("#chart svg")
        .datum(skills)
        .transition().duration(350)
        .call(chart);

    d3.selectAll('.nv-pieLabels text').style('fill', '#FFFFFF');

    nv.utils.windowResize(chart.update);

    return chart;
});

var works = [
    {
        "Type": "Web",
        "Work": "勤怠管理サイト"
    },
    {
        "Type": "Windows",
        "Work": "アパレル業向け販売管理アプリ"
    },
    {
        "Type": "Web",
        "Work": "パンフレット管理サイト"
    },
    {
        "Type": "Phone",
        "Work": "電子書籍ビューア"
    },
    {
        "Type": "Windows",
        "Work": "電子帳票ビューア"
    },
    {
        "Type": "Web",
        "Work": "発電所レイヤー表示地図サイト"
    },
    {
        "Type": "Web",
        "Work": "病院情報統合サイト"
    },
    {
        "Type": "Linux",
        "Work": "操作ログ収集エージェントアプリ"
    },
    {
        "Type": "Mac",
        "Work": "操作ログ収集エージェントアプリ"
    },
    {
        "Type": "Web",
        "Work": "クライアントPC操作ログ管理サイト"
    }
];

var skills = [
    {
        "label": "C#",
        "value" : 30,
        "color": "#690081"
    } ,
    {
        "label": "Mono",
        "value" : 10,
        "color": "#333333"
    } ,
    {
        "label": "Xamarin.Mac",
        "value" : 10,
        "color": "#1FAECE"
    } ,
    {
        "label": "PHP",
        "value" : 20,
        "color": "#8892BF"
    } ,
    {
        "label": "Node.js",
        "value" : 10,
        "color": "#56AE37"
    } ,
    {
        "label": "Leaflet",
        "value" : 5,
        "color": "#B1DE5C"
    } ,
    {
        "label": "PostgreSQL",
        "value" : 10,
        "color": "#009ACD"
    } ,
    {
        "label": "MySQL",
        "value" : 5,
        "color": "#F29111"
    }
];
