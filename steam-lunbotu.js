 let arr = [];
function get (data) {
	//cookie
	let cookie = new Cookie();
	window.onunload = function () { //页面跳转
		if(arr.length != 0) {
			console.log(cookie.setCookie("name",arr,7));
		}
	};
	// cookie数据加到页面中
	let his= $("#his");
	function fnhis(data){
		data.forEach(function(item,index){
			let a = $("<a>");
			a.attr("href",item.href);
			a.html(item.name);
			his.append(a);
		})
	}
	let history = $("#history");
	if(!cookie.getCookie("history")){
		history.css("display","none");
	}else{
		let data = cookie.getCookie("history");
		history.css("display","block");
		let script = $("<script>");
		script.attr("src",`http://pujie1213.top:90/history?gameId=${data}&callback=fnhis`);
		script.appendTo(document.head);
	};
	'use strict'
	//数据渲染
	let left = $("#left > img");
	let screenshots = $(".screenshots");
	let popup = $(".popup");
		for(let i = 0; i < data.length; i++){
			let clonediv = screenshots.clone();
			let clonepo = popup.clone();
			//cookie
			clonediv.attr("gameid",data[i].gameId)[0];
			clonediv.click(function(){
				let gameid = $(this).attr("gameid");
				if(arr.indexOf(gameid) == -1){
					arr.push(gameid);
				};
			});
			// 去掉克隆元素display属性
			clonepo.css("display","");
			clonediv.css("display","");
			$("#right").append(clonediv);
			$(".pop").append(clonepo);
			clonepo.find(".podiv>.poimg>img").attr("src",data[i].imgUrl[0]);
			left[i].src = data[i].imgUrl[0];
			clonediv.find(".selec-p1").html(data[i].name);
				for(let v = 0; v < data[i].imgUrl.length; v++){
					let img = clonediv.find(".selec-div> div > img");
					img.eq(v).attr("src",data[i].imgUrl[v]);
				};
		};
	// 语言选择点击 
	let lang = document.getElementsByClassName("lang")[0];
	lang.onclick = function () {
		$(".language").css("display","block");
	};
	// 点击语言消失
	let homepage = document.getElementsByClassName("homepage")[0];
	let pagegame = document.getElementsByClassName("pagegame")[0];
	homepage.onclick = function () {
		$(".language").css("display","none");
	}
	pagegame.onclick = function () {
		$(".language").css("display","none");
	}
	//构造函数左右点击鼠标移上小圆点
	let page = document.getElementsByClassName("page-right")[0];
	let page2 = document.getElementsByClassName("page-right2")[0];
	let page3 = document.getElementsByClassName("page-right3")[0];
	let page4 = document.getElementsByClassName("page-right4")[0];
	function Comstructor (el) {
		this.right = el.getElementsByClassName("btn-right")[0];
		this.left = el.getElementsByClassName("btn-left")[0];
		this.divrg = el.getElementsByClassName("selec-right")[0].children;
		this.leftimg = el.getElementsByClassName("selec-left")[0].children;
		let _this = this;
		_this.index = 0;
		//左点击
		this.left.onclick = function () {
			_this.index++;
			if(_this.index == _this.leftimg.length) {
				_this.index = 0;
			};
			$(_this.leftimg).fadeOut(1000);
			$(_this.leftimg).eq(_this.index).fadeIn(1000);
			$(_this.divrg).fadeOut(1000);
			$(_this.divrg).eq(_this.index).fadeIn(1000);
		}
		//右点击
		this.right.onclick = function () {
			_this.index--;
			$(_this.leftimg).fadeOut(1000);
			$(_this.leftimg).eq(_this.index).fadeIn(1000);
			$(_this.divrg).fadeOut(1000);
			$(_this.divrg).eq(_this.index).fadeIn(1000);
			if(_this.index == -1) {
				_this.index = _this.leftimg.length-1;
			};
		};
		//鼠标移上出现
		let img4 = $(".selec-div");
		for(let w = 0; w < data.length; w++){
		let I = img4[w].children;
			for(let e = 0; e < I.length; e++){
				let imglist = I[e].children;
				for(let r = 0; r < imglist.length; r++){
					imglist[r].onmouseover = function () {
						$(".big-img").css({"display":"block","zIndex":"99"});
						$(".big-img>img").css({"width":"584px","height":"400px"})
					$(".big-img>img")[0].src = this.src;
					};
					imglist[r].onmouseout = function () {
						$(".big-img").css("display","none");
					};
				};					
			};
		};
		//小圆点
		this.back = el.getElementsByClassName("back")[0];
		this.spanList = this.back.children;
		for	(let a = 0; a < data.length; a++) {
            let span = document.createElement("span");
            _this.back.append(span);
			span.setAttribute("in", a);
		};
		for (let b = 0; b < this.spanList.length; b++) {
			this.spanList[b].onclick = function () {
				let sp = this.getAttribute("in");
				_this.index = sp;
				$(_this.leftimg).fadeOut(1000);
				$(_this.leftimg).eq(sp).fadeIn(1000);
				$(_this.divrg).fadeOut(1000);
				$(_this.divrg).eq(sp).fadeIn(1000);
				_this.spanList[b].style = "opacity:1";
				_this.spanList.style = "opacity:0.5";
			};
		};
	};
	let con = new Comstructor(page);
	let con2 = new Comstructor(page2);
	let con3 = new Comstructor(page3);
	let con4 = new Comstructor(page4);
}
// 发送请求
onload = function () {
    'use strict'
	const script = document.createElement("script");
	script.src = "http://pujie1213.top:90/rcGame?callback=get";
	document.head.appendChild(script);
//ajxa拉取数据库图片
//	var ajxa = new XMLHttpRequest();
//			ajxa.open("GET","http://pujie1213.top:90/rcGame",false);
//			ajxa.send();
//			var date = ajxa.responseText;
//			date = JSON.parse(date);
//			var left = $("#left > img");
//			var screenshots = $(".screenshots");
//			for(var i = 0; i < date.length; i++){
//				var clonediv = screenshots.clone();
//				$("#right").append(clonediv);
//				left[i].src = date[i].imgUrl[0];
//				for(var v = 0; v < date[i].imgUrl.length; v++){
//					var img = clonediv.find(".selec-div> div > img");
//					img.eq(v).attr("src",date[i].imgUrl[v]);
//				}
//			}
};