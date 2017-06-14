function Video() {
	
}
$.extend(Video.prototype,{
	init: function(){
		this.restoreUserInfo();
		this.bindEvents();
	},
	
	restoreUserInfo: function() {
		try{
			if(window.localStorage) {
				var userInfo = {};
				if(window.localStorage.userInfo) {
					var userInfo = JSON.parse(window.localStorage.userInfo);
					//console.log(userInfo);
				}
				if(userInfo.bgColor){
					$("body").css({"backgroundColor": userInfo.bgColor});
				}
				if(userInfo.fontSize){
					$(".js_content p").css({"font-size": userInfo.fontSize+"px"});
					$(".js_now_fontsize").text(userInfo.fontSize)
				}
			}
		}catch(e) {};
	},
	
	bindEvents: function() {
		$(".js_choice_color li").on({"click":this.handleChangeBgClick});
		$(".js_bigger_fontsize").on({"click":this.handleChangefontsizeClick});
		$(".js_smaller_fontsize").on({"click":this.handleChangefontsizeClick});
	},
	
	handleChangeBgClick: function() {
		var userInfo = {
			fontSize:$(".js_now_fontsize").text(),
			bgColor:$(this).css("backgroundColor")
		};
		//console.log(userInfo);
		userInfo=JSON.stringify(userInfo);
		//console.log(userInfo);
		try{
			if (window.localStorage) {
				window.localStorage.userInfo=userInfo;
			}
		}catch(e){};
		$("body").css({"backgroundColor": $(this).css("backgroundColor")});
	},
	
	handleChangefontsizeClick: function() {
		console.log($(this).index());
		if($(this).index()==0){
			fontSize:$(".js_now_fontsize").text(parseInt($(".js_now_fontsize").text())+2)
			if(parseInt($(".js_now_fontsize").text())>=50){
				$(".js_now_fontsize").text(50)
			}
		}else{
			fontSize:$(".js_now_fontsize").text(parseInt($(".js_now_fontsize").text())-2)
			if(parseInt($(".js_now_fontsize").text())<=8){
				$(".js_now_fontsize").text(8)
			}
		}
		var userInfo = {
			bgColor:$("body").css("backgroundColor"),
			fontSize:$(".js_now_fontsize").text()
		};
		userInfo=JSON.stringify(userInfo);
		try{
			if (window.localStorage) {
				window.localStorage.userInfo=userInfo;
			}
		}catch(e){};
		$(".js_content p").css({"font-size": parseInt($(".js_now_fontsize").text())+"px"});
	}
})
var e_book = new Video();
e_book.init();
