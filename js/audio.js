(function audio(){
    var num=0;
    $("#audio-button").on("click",function(){
        num++;
        if(num == 1){
            $("#audio-fixed").get(0).pause();
            $(this).css({"animation-play-state":"paused"});
            $(".audio-pu").find("div").css({"animation-play-state":"paused"});
        }else if(num == 2){
            $("#audio-fixed").get(0).play();
            $(this).css({"animation-play-state":""});
            $(".audio-pu").find("div").css({"animation-play-state":""});
            num=0;
        }
    });
})();