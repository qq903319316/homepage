//function canvass(name1,name2,num){
//    var num=num||1;
//    var arr=[];
//    var arrs=[];
//    var canvas1=document.querySelector(name1);
//    var canvas2=document.querySelector(name2);
//    var cobj=canvas1.getContext("2d");
//    var xobj=canvas2.getContext("2d");
//    ts=setInterval(moves,100);
//    function lizi(){
//        this.x=0;
//        this.y=0;
//        this.r=2+3*Math.random();
//        this.color="rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
//        this.speedx=4+2*Math.random();
//        this.speedy=-3*Math.random()-2;
//        this.speed2=0.1;
//        this.zhongli=0.2;
//    }
//    lizi.prototype={
//        dddd:function(that){
//            // var that=this;
//            that.save();
//            that.translate(this.x,this.y);
//            that.beginPath();
//            that.fillStyle=this.color;
//            that.arc(this.x,this.y,this.r,0,2*Math.PI);
//            that.fill();
////            cobj.fillRect(0,0,100,100);
//            that.restore();
//        },
//        update:function(){
//            this.speedy+=this.zhongli;
//            this.x+=this.speedx;
//            this.y+=this.speedy;
//            this.r-=this.speed2;
//            //if(this.zhongli>=1000){
//            //
//            //}
//        }
//    };
//    if(num===0){
//        //var a=[],b=[];
//        arr.length=0;arrs.length=0;
//        //cobj.clearRect(0,0,0,0);
//        //xobj.clearRect(0,0,0,0);
//        return false;
//    }
//    if(num===1){
//
//        function moves(){
//            cobj.clearRect(0,0,600,400);
//            var obj=new lizi();
//            obj.x=20;
//            obj.y=70;
//            arr.push(obj);
//            for(var i=0;i<arr.length;i++){
//                arr[i].dddd(cobj);
//                arr[i].update();
//                if(arr[i].r<0||arr[i].length){
//                    arr[i]=new lizi();
//                    arr[i].x=20;
//                    arr[i].y=70;
//                }
//            }
//
//            xobj.clearRect(0,0,600,400);
//            var objs=new lizi();
//            objs.x=20;
//            objs.y=70;
//            arrs.push(objs);
//            for(var i=0;i<arrs.length;i++){
//                arrs[i].dddd(xobj);
//                arrs[i].update();
//                if(arrs[i].r<0||arrs[i].length){
//                    arrs[i]=new lizi();
//                    arrs[i].x=20;
//                    arrs[i].y=70;
//                }
//            }
//        }
//    }
//
//
//
//}
