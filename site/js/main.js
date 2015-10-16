requirejs.config({
    baseUrl:'./js',
    paths:{
        jquery:'lib/jquery.min',
        underscore:'lib/underscore-min',
        jstree:'lib/jstree'
    },
    shim:{
        underscore:{exports:'_'},
        jstree:{deps:['jquery']}
    }
});

require(['jquery','jstree'],function($){

        $("#jstreeDiv").jstree({
            'core' : {
                'data' : {
                    "url" : "./js/data/data1.json",
                    "dataType" : "json" // needed only if you do not supply JSON headers
                }
            }
        });
        for(var i = 0; i < 5; i++) {
            $(".picStream").append($(".imgli").clone(true));
            console.log("once")
        }
    $(window).resize(function(){
        $("#contentRight").height($(window).height());
    });

});