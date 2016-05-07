function AutoScroll(){     //自动滚动
	var li=$("#slide>ul");
	li.animate({marginLeft:"--38%"},1000,function(){
              li.css({marginLeft:0}).find("li:first").appendTo(li);
	})
}
$(function(){
	//两秒后调用
	var _scrolling=setInterval("AutoScroll()",3000);
	$("#slide>ul").hover(function(){
		//鼠标移动DIV上停止
		clearInterval(_scrolling);
	},function(){
		//离开继续调用
		_scrolling=setInterval("AutoScroll()",3000);
	});
});
/*选项卡操作*/
$(function(){
  var $li=$("#contact .tab li");
  $li.click(function(){
    $("#contact div").eq($(this).index()).addClass("on").siblings().removeClass('on');
    /*if($(this).index()==0){
    	$(this).css("background-image","url(images/qq2.png)");
    }else{
    	$(this).css("background-image","url(images/phone2.png)");
    }
    	*/
    	/*该方法点击另一个，第一个的背景图不会还原*/
    
  });
});
