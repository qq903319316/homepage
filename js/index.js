// 也许还能在网上看到你的消息
$(function(){

    //    第一屏hover
    $(".ultwo-one li").hover(function(){
        var index=$(this).index();
        $(".ultwo-two li").eq(index).css({transform:"scale(1)"});
    },function(){
        var index=$(this).index();
        $(".ultwo-two li").eq(index).css({transform:"scale(0)"});
    });
    $(window).resize(function(){
        //    判断屏幕分辨率
        function screenwidth(){
            if (screen.width <= 640){
                //console.log("现在是小于640");
                $(".zhu-tops li:nth-child(1) a").text("简介嘿");
                $(".zhu-tops li:nth-child(2) a").text("技能嘿");
                $(".zhu-tops li:nth-child(3) a").text("作品嘿");
                $(".zhu-tops li:nth-child(4) a").text("移动端");
                $(".zhu-tops li:nth-child(5) a").text("轮播图");
                $(".zhu-tops li:nth-child(6) a").text("结尾页");
            }else {
                //console.log("现在是大于640");
                $(".zhu-tops li:nth-child(1) a").text("个人简述");
                $(".zhu-tops li:nth-child(2) a").text("薄技在身");
                $(".zhu-tops li:nth-child(3) a").text("即兴之作");
                $(".zhu-tops li:nth-child(4) a").text("手机终端");
                $(".zhu-tops li:nth-child(5) a").text("落笔成蝇");
                $(".zhu-tops li:nth-child(6) a").text("信而有征");
            }
        }(screenwidth());
    });


    // 鼠标跟随样式
    function shu_biao(){
        $('.button-shu').bind('mousedown touchstart',function(e) {
            // 按下动作和移动端手指触摸屏幕触发
            $('.clicked-shu').removeClass('clicked-shu');
            $(this).addClass('clicked-shu');
        });
        $(document).bind('mousemove touchmove',function(e) {
            //去除浏览器默认事件
            if (document.all) {
                event.returnValue = false;
            } else {
                e.preventDefault();
            }
            var drawSize = 0.35;
            var drawType = $('.clicked-shu').html();
            var floatTypes = Array('floatOne','floatTwo','floatThree','floatFour','floatFive');
            var floatType = floatTypes[Math.floor(Math.random()*floatTypes.length)];
            var xPos = e.originalEvent.pageX;
            var yPos = e.originalEvent.pageY;
            $('body').append('<div class="draw" style="font-size:'+drawSize+'rem;left:'+(xPos+20)+'px;top:'+(yPos+60)+'px;-webkit-animation:'+floatType+' .9s 1;-moz-animation:'+floatType+' .9s 1;color:hsla('+H+',100.0%,70.0%,1)">'+drawType+'</div>');
            $('.draw').each(function() {
                var div = $(this);
                setTimeout(function() {$(div).remove();},800);
            });
        });
        var H=0;
        setInterval(function() {
            if(H<=360) {
                H++;
            }else {
                H=0;
            }
        },5);
    }(shu_biao());
    // 文字突突突的出现
    $(".sp-text").lbyl({
        content: "\<p\>假如人生不曾相遇，我还是那个我，偶尔做做梦，然后，开始日复一日的奔波，淹没在这喧嚣的城市里。 我不会了解，这个世界还有这样的一个你，只有你能让人回味，也只有你会让我心醉。 假如人生不曾相遇，我不会相信，有一种人可以百看不厌，有一种人一认识就觉得温馨。\</p\>",
        speed: 80,
        type: 'show',
        finished: function(){
            $('.dog-title').lbyl({
                content:"我想你一定会有兴趣去了解这样一个人，别再犹豫，点击下面的按钮，你会发现他别样的风采！",
                speed: 150,
                type: 'fade',
                fadeSpeed: 500
            })
        } // Finished Callback
    });
    //音乐
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
    function sp_tishi(){
        $("#sp-tishi").on("click",function(){
            $(this).animate({left:"3rem"},400,function(){
                $(this).hide();
            });
            $(".sp-work>ul").animate({left:"0"},400,function(){
                $(this).animate({height:"90%"},500);
            });

        });
        $(".sp-ul-last").on("click",function(){
            $(".sp-work>ul").animate({height:"20%"},400,function(){
                $(this).animate({left:"-3rem"},400,function(){
                    $("#sp-tishi").show().css({left:"0rem"});
                });
            })
        })

    }(sp_tishi());
    $(".sec3-box").on("touchmove",function(e){
        //console.log("11");
        e.stopPropagation();
    });
    //$.get("http://localhost:63342/Zhu%20work/web/2017.05.31-indexsssssssssssssss/canvas.js",function(data,status){
    //    console.log(data)
    //});

    //闪屏btn
    $("#sp-btn").on("click",function(){
        /*打开页面，先开启闪屏页，闪屏页完了后fullPage滚屏开始*/
        $(this).parent().animate({top:"45%",height:"2rem"},"slow",function(){
            $(this).css({transform:"scale(0)",transition: "all 1s ease-in-out",opacity:"0"});
        });
        $(".zy-menu").animate({right:"auto",left:".1rem"},600,function(){
            $(".zy-menu li p").removeClass("zu-m-left").addClass("zu-m-right");
            //$(".zy-menu li p").after({background:"#ccc"}).css({background:"red"});
            $(".zy-menu li").hover(function(){
                $(this).find("p").css({left:"auto",right:"-2.2rem"});
            },function(){
                $(this).find("p").css({left:"auto",right:"-3.2rem"});
            });
        });
        $(".zhu-audio").animate({right:"-.5rem",top:"1rem"},1000,function(){
            //$(this).find(".audio-button").css({position:"absolute",left:"0",top:"0",right:"0",bottom:"6rem",zIndex:"1",margin:"auto"}).queue(function(){
            //    $(this).css({transform:"scale(0)",transition:"all 1s ease"})
            //});
            $(this).find(".audio-pu").css({display:"none"});
        });
        $(".zy-menu li a").css({color:"#111"});
        //fullPage滚屏
        $('#fullpage').fullpage({
            css3: true,  // 如果此选项设置为true，浏览器不支持CSS3，jQuery回调函数将被替代。
            scrollingSpeed:800,  //默认值：700，每个屏幕滚动动画执行的时间，时间的单位为毫秒（ms）
            sectionsColor: ['green', '#4BBFC3', '#7BAABE', 'red',"#ccc","#eee"],  //默认值：none，定义每个section的CSS背景
            anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],  //默认值：[]，锚点链接
            menu: '#myMenu',   // 与锚点链接一起的  加不加都行
            navigation: true,   //默认值：false，如果设置为true，那他将会显示一个小圆圈组成的快速导航栏。[另一个作用是进入页面才加载,就是第一屏的东西]
            //滚动回调函数  到哪一瓶加载哪一屏
            afterLoad: function(anchorLink, index){

                var lefts=$(".sec1-box")[0].offsetWidth / 2 - $(".sec1-border")[0].offsetWidth;
                var tops=$(".sec1-box")[0].offsetHeight / 2 - $(".sec1-border")[0].offsetHeight;
                //console.log(lefts);
                if(index==1){
                    $(".sec1-right").animate({right:lefts,top:tops},1500);
                    $(".sec1-top").animate({left:lefts,bottom:tops},1500);
                    $(".sec1-bottom").animate({right:lefts,bottom:tops},1500);
                    $(".sec1-left").animate({left:lefts,top:tops},1500,function(){
                        $(this).parent().css({transform:"rotate(360deg)",transition:"all 1.5s ease"});
                        //$(".sec1-right").animate({right:0,top:0},2000);
                        //$(".sec1-left").animate({left:0,top:0},2000);
                        //$(".sec1-top").animate({left:0,bottom:0},2000);
                        //$(".sec1-bottom").animate({right:0,bottom:0},2000,function(){
                        //    $(".sec1-content").css({display:"block"})
                        //});
                        $(".sec1-right").css({right:0,top:0,transition:"all 1.5s ease 1.5s",opacity:0.1});
                        $(".sec1-left").css({left:0,top:0,transition:"all 1.5s ease 1.5s",opacity:0.1});
                        $(".sec1-top").css({left:0,bottom:0,transition:"all 1.5s ease 1.5s",opacity:0.1});
                        $(".sec1-bottom").css({right:0,bottom:0,transition:"all 1.5s ease 1.5s",opacity:0.1});
                        $(".sec1-content>ul li").css({opacity:"1",transition:"all 1s ease .5s"});
                        $(".sec1-content h1").css({opacity:"1",transition:"all 1.5s ease 1.5s"});


                    });
                    $(".zhu-tops li a").eq(index-1).addClass("nav-a").parent().siblings().find("a").removeClass("nav-a");
                    $(".zy-menu li a").css({color:"#000"});
//    圆圈
//                    $(".ultwo-one li").delay(2000).queue(function(){
                        //var sec1sp=0.2;
                        //'+num*sec1sp+'s
                        //var num=0;
                        //var w=$(".ultwo-one li").width()/2;
                        $(".ultwo-one li").each(function(index,obj){
                            //num++;
                            $(obj).css({transform:"rotate("+index*40+"deg)",transition:" all .5s ease 3.8s",opacity:1});
                            //$(".ultwo-one li").css({transform:"rotate("+index*40+"deg)",transition:"all .5s ease 3s",opacity:1});
                            //obj.style.cssText="opacity:1;transform:translate(0,0) rotate("+index*40+"deg);transition:all .5s ease;";
                            //obj.style.transform='translate(0,0) rotate('+index*40+'deg)';
                            //obj.style.transition=' all .5s ease ';
                        });
                    //});


                }else if(index==2){
                    $(".sec2-box").css({transform:"scale(1)",transition:"all .8s ease"});
                    $(".sec2-box div").eq(0).css({transform:"scale(1) translate(1rem,1rem)",transition:"all .8s ease",opacity: 1});
                    $(".sec2-box div").eq(1).css({transform:"scale(1) translate(2.5rem,2.5rem)",transition:"all .8s ease .7s",opacity: 1});
                    $(".sec2-box div").eq(2).css({transform:"scale(1) translate(4rem,4rem)",transition:"all .8s ease 1.4s",opacity: 1});
                    //document.querySelector(".clip-p").style.animationPlayState="running";
                    //$("#animation").css("-webkit-animation-play-state", "running");
                    $(".clip-p").css("-webkit-animation-play-state","running");

                    $(".zy-menu li a").css({color:"#fff"});
                    $(".zhu-tops li a").eq(index-1).addClass("nav-a").parent().siblings().find("a").removeClass("nav-a");
                    //console.log($(".zhu-tops li a").eq(index-1).text());
                }else if(index==3){
                    $(".s3-ul").css({opacity:1,transform:"scale(1)"});
                    $(".zhu-tops li a").eq(index-1).addClass("nav-a").parent().siblings().find("a").removeClass("nav-a");
                    $(".zy-menu li a").css({color:"#fff"});
                }else if(index==4){
                    $(".phone-box").css({right:"calc(50% - 2rem)"});
                    $(".zhu-tops li a").eq(index-1).addClass("nav-a").parent().siblings().find("a").removeClass("nav-a");
                    $(".zy-menu li a").css({color:"#000"});
                }else if(index==5){
                    $(".zhu-tops li a").eq(index-1).addClass("nav-a").parent().siblings().find("a").removeClass("nav-a");
                    $(".zy-menu li a").css({color:"#fff"});
//                    3d轮播
                    function banner3d(){
                        var arr=[
                            {width:"1rem", height:"1.5rem", top:"0.75rem", left:"0.5rem", zIndex:1},
                            {width:"1.4rem", height:"1.8rem", top:"0.6rem", left:"1rem", zIndex:2},
                            {width:"1.7rem", height:"2.2rem", top:"0.4rem", left:"1.85rem", zIndex:3},
                            {width:"2rem", height:"2.6rem", top:"0.2rem", left:"3rem", zIndex:4},
                            {width:"1.7rem", height:"2.2rem", top:"0.4rem", left:"4.5rem", zIndex:3},
                            {width:"1.4rem", height:"1.8rem", top:"0.6rem", left:"5.6rem", zIndex:2},
                            {width:"1rem", height:"1.5rem", top:"0.75rem", left:"6.5rem", zIndex:1}
                        ];
                        var t=setInterval(move,2000);
                        function move(){
                            $(".index-ul").animate({left:0},2000,function(){
                                var first=$(this).children().first();
                                $(".index-ul li").eq(0).css=arr[0];
                                $(".index-ul li").eq(1).css=arr[1];
                                $(".index-ul li").eq(2).css=arr[2];
                                $(".index-ul li").eq(3).css=arr[3];
                                $(".index-ul li").eq(4).css=arr[4];
                                $(".index-ul li").eq(5).css=arr[5];
                                $(".index-ul li").eq(6).css=arr[6];
                                $(this).append(first);
                            });
                        }
                        $(".index-ul").hover(function(){
                            clearInterval(t);
                        },function(){
                            t=setInterval(move,2000);
                        });
                    }(banner3d());
                    $(".canvas-box").css({transform:"scale(1)"});

                    // canvas.js
                    var arr_can=[];
                    var arrs_can=[];
                    var canvas1_can=document.querySelector("#can1");
                    var canvas2_can=document.querySelector("#can2");
                    var cobj=canvas1_can.getContext("2d");
                    var xobj=canvas2_can.getContext("2d");
                    ts=setInterval(moves,100);
                    function lizi(){
                        this.x=0;
                        this.y=0;
                        this.r=2+3*Math.random();
                        this.color="rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
                        this.speedx=4+2*Math.random();
                        this.speedy=-3*Math.random()-2;
                        this.speed2=0.1;
                        this.zhongli=0.2;
                    }
                    lizi.prototype={
                        dddd:function(that){
                            // var that=this;
                            that.save();
                            that.translate(this.x,this.y);
                            that.beginPath();
                            that.fillStyle=this.color;
                            that.arc(this.x,this.y,this.r,0,2*Math.PI);
                            that.fill();
                            // cobj.fillRect(0,0,100,100);
                            that.restore();
                        },
                        update:function(){
                            this.speedy+=this.zhongli;
                            this.x+=this.speedx;
                            this.y+=this.speedy;
                            this.r-=this.speed2;
                            //if(this.zhongli>=1000){
                            //
                            //}
                        }
                    };
                    function moves(){
                        cobj.clearRect(0,0,600,400);
                        var obj=new lizi();
                        obj.x=20;
                        obj.y=70;
                        arr_can.push(obj);
                        for(var i=0;i<arr_can.length;i++){
                            arr_can[i].dddd(cobj);
                            arr_can[i].update();
                            if(arr_can[i].r<0||arr_can[i].length){
                                arr_can[i]=new lizi();
                                arr_can[i].x=20;
                                arr_can[i].y=70;
                            }
                        }
                        xobj.clearRect(0,0,600,400);
                        var objs=new lizi();
                        objs.x=20;
                        objs.y=70;
                        arrs_can.push(objs);
                        for(var i=0;i<arrs_can.length;i++){
                            arrs_can[i].dddd(xobj);
                            arrs_can[i].update();
                            if(arrs_can[i].r<0||arrs_can[i].length){
                                arrs_can[i]=new lizi();
                                arrs_can[i].x=20;
                                arrs_can[i].y=70;
                            }
                        }
                    }

                }else if(index==6){
                    $(".zhu-tops li a").eq(index-1).addClass("nav-a").parent().siblings().find("a").removeClass("nav-a");
                    $(".zy-menu li a").css({color:"#000"});

                    $(".sec-position").addClass("sec6-box").find("li").css({transform:"scale(1)"});
                    //    老头
                    var laonum=0;
                    laotou=setInterval(lao,200);
                    function lao(){
                        laonum++;
                        //console.log(laonum);
                        if(laonum>= $(".sec-position li").length){
                            laonum=0;
                        }
                        $(".sec-position li").eq(laonum-1).css({display:"block"}).siblings().css({display:"none"});
                    }
                //    表单
                    $(".sec-6-div").css({transform: "rotateX(3deg) scale(1)",transition: "all 2s ease-in 40s"});

                }
            },
            //页面全部恢复为初始化回调函数
            onLeave: function(index, nextIndex, direction){
                if(index == 1){
                    $(".zhu-tops li a").removeClass("nav-a");
                    $(".sec1-right").animate({right:"-99rem",top:"-99rem"},100);
                    $(".sec1-top").animate({left:"-99rem",bottom:"-99rem"},100);
                    $(".sec1-bottom").animate({right:"-99rem",bottom:"-99rem"},100);
                    $(".sec1-left").animate({left:"-99rem",top:"-99rem"},0,function(){
                        $(this).parent().css({transform:"rotate(0deg)",transition:"all 0s ease"});
                        $(".sec1-right").css({right:"-99rem",top:"-99rem",transition:"all 0s ease 0s",opacity:1});
                        $(".sec1-left").css({left:"-99rem",top:"-99rem",transition:"all 0s ease 0s",opacity:1});
                        $(".sec1-top").css({left:"-99rem",bottom:"-99rem",transition:"all 0s ease 0s",opacity:1});
                        $(".sec1-bottom").css({right:"-99rem",bottom:"-99rem",transition:"all 0s ease 0s",opacity:1});
                        $(".sec1-content>ul li").css({opacity:"0",transition:"all 0s ease 0s"});
                        $(".sec1-content h1").css({opacity:"0",transition:"all 0s ease 0s"});
                    });
                    //    圆圈
                    $(".ultwo-one li").css({transform:"rotate(0deg)",transition:" all .3s ease 0s",opacity:0});

                //    $(".ultwo-one li").delay(1000).queue(function(){
                //        $(".ultwo-one li").each(function(index,obj){
                //            //num++;
                //            $(obj).css({opacity:0,transform:"rotate(0deg)",transition:"all .3s ease 0s"});
                //            //obj.style.cssText="opacity:1;transform:translate(0,0) rotate("+index*40+"deg);transition:all .5s ease;";
                //            //obj.style.transform='translate(0,0) rotate('+index*40+'deg)';
                //            //obj.style.transition=' all .5s ease ';
                //        })
                //    })

                }else if( index == 2){
                    $(".zhu-tops li a").removeClass("nav-a");
                    //$(".zhu-audio").css({transform:"scale(0)",transition:"all .6s ease"});
                    $(".sec2-box").css({transform:"scale(0)",transition:"all 1s ease 0s"});
                    $(".sec2-box div").eq(0).css({transform:"scale(0) translate(0rem,0rem)",transition:"all 1s ease",opacity:0});
                    $(".sec2-box div").eq(1).css({transform:"scale(0) translate(0rem,0rem)",transition:"all 1s ease",opacity: 0});
                    $(".sec2-box div").eq(2).css({transform:"scale(0) translate(0rem,0rem)",transition:"all 1s ease",opacity: 0});

                    //document.querySelector(".clip-p").style.animationPlayState="paused";
                    $(".clip-p").css("-webkit-animation-play-state","paused");

                }else if( index == 3){
                    $(".zhu-tops li a").removeClass("nav-a");
                    $(".s3-ul").css({opacity:0,transform:"scale(1.2)"});
                }else if( index == 4){
                    $(".zhu-tops li a").removeClass("nav-a");
                    $(".phone-box").css({right:"-20rem"});
                }else if( index == 5){
                    $(".zhu-tops li a").removeClass("nav-a");
                    $(".canvas-box").css({transform:"scale(0)"});
                    clearInterval(ts);



                }else if( index == 6){
                    $(".zhu-tops li a").removeClass("nav-a");
                    clearInterval(laotou);
                    $(".sec-position").removeClass("sec6-box").find("li").css({transform:"scale(0)"});
                    //    表单
                    $(".sec-6-div").css({transform: "rotateX(93deg) scale(0)",transition: "all 1s ease-in 0s"});
                }
            }
        });//fullPage闭合

    });//click闭合





























}); //这个是最外层function括号