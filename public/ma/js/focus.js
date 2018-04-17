// JavaScript Document
(function(){
	function G(s){
		return document.getElementById(s);
	}
	
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj, false)[attr];
		}
	}
	
	function Animate(obj, json){
		if(obj.timer){
			clearInterval(obj.timer);
		}
		obj.timer = setInterval(function(){
			for(var attr in json){
				var iCur = parseInt(getStyle(obj, attr));
				iCur = iCur ? iCur : 0;
				var iSpeed = (json[attr] - iCur) / 3;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				obj.style[attr] = iCur + iSpeed + 'px';
				if(iCur == json[attr]){
					clearInterval(obj.timer);
				}
			}
		}, 30);
	}

	var oPic = G("picBox");
	var oList = G("listBox");
	var ccnumct = G("numct");
	
	var oPrev = G("prev");
	var oNext = G("next");
	var oPrevTop = G("prevTop");
	var oNextTop = G("nextTop");

	var oPicLi = oPic.getElementsByTagName("li");
	var oListLi = oList.getElementsByTagName("li");
	var ccnumLi = ccnumct.getElementsByTagName("li");
	var diLi = oList.getElementsByTagName("dd");
	var len1 = oPicLi.length;
	var len2 = oListLi.length;
	var len3=ccnumLi.length;
	
	var oPicUl = oPic.getElementsByTagName("ul")[0];
	var oListUl = oList.getElementsByTagName("ul")[0];
	var w1 = oPicLi[0].offsetHeight;
	var w2 = oListLi[0].offsetHeight;
	oPicUl.style.width = w1 * len1 + "px";
	oListUl.style.height = w2 * len2 + "px";

	var index = 0;
	
	var num =3;
	var num2 = Math.ceil(num / 2);

	function Change(){

		Animate(oPicUl, {top: - index * w1});
		
		if(index < num2){
			Animate(oListUl, {top: 0});
		}else if(index + num2 <= len2){
			Animate(oListUl, {top: - (index - num2 + 1) * w2});
		}else{
			Animate(oListUl, {top: - (len2 - num) * w2});
		}

		for (var i = 0; i < len2; i++) {
			oListLi[i].className = "";
			ccnumLi[i].className = "";
			diLi[i].className = "";
			if(i == index){
				oListLi[i].className = "on";
				ccnumLi[i].className = "tk";
				diLi[i].className = "d_ck";
			}
		}
		
		
	}
	
	oNextTop.onclick = oNext.onclick = function(){
		index ++;
		index = index == len2 ? 0 : index;
		Change();
	}

	oPrevTop.onclick = oPrev.onclick = function(){
		index --;
		index = index == -1 ? len2 -1 : index;
		Change();
	}

	for (var i = 0; i < len2; i++) {
		oListLi[i].index = i;
		ccnumLi[i].index = i;
		diLi[i].index = i;
		oListLi[i].onclick = function(){
			index = this.index;
			Change();
		}
		ccnumLi[i].onclick = function(){
			index = this.index;
			Change();
		}
		diLi[i].onclick = function(){
			index = this.index;
			Change();
		}
	}
	
})()

