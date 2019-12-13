var a = 1400;
	function time() {
    function format(i) {
        return (i < 10 ? "0" + i : i);
    }
    var tip = document.getElementById("time");
    tip.style.left = a +'px';
    a=a-20;
    tip.innerHTML = "[温馨提示]最近有不少不法分子在网上骗人！！！"
				}
	var interval = setInterval(time, 10);

	var box = document.getElementById('box');
	var oNavlist = document.getElementById('nav').children;
	var slider = document.getElementById('slider');
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var index = 1;
	var timer;
	var isMoving = false;

	function next(){
		if(!isMoving){
			isMoving = true;
			index++;
			navChange();
			animate(slider,{left:-1200*index},function(){
				if(index == 6){
					slider.style.left = "-1200px";
					index = 1;
				}
				isMoving = false;
			});
		}
	}
		function prev(){
			if(!isMoving){
			isMoving = true;
			index--;
			navChange();
			animate(slider,{left:-1200*index},function(){
				if(index == 0){
					slider.style.left = "-6000px";
					index = 5;
				}
				isMoving = false;
			});
		}
	}
	timer = setInterval(next,2000);
	//
	box.onmouseover = function(){
		animate(left,{opacity:50})
		animate(right,{opacity:50})
		clearInterval(timer);
	}
	box.onmouseout = function(){
		animate(left,{opacity:0})
		animate(right,{opacity:0})
		timer = setInterval(next,2000);
	}
	right.onclick = next;
	left.onclick = prev;
	for(var i=0;i<oNavlist.length;i++){
		oNavlist[i].idx=i;
		oNavlist[i].onclick = function(){
			index = this.idx+1;
			navChange();
			animate(slider,{left:-1200*index})
		}
	}
	oNavlist[0].style.color = "white";
	function navChange(){
		for(var i=0;i<oNavlist.length;i++){
			oNavlist[i].className = "";
			oNavlist[i].style.color = "black";
			if(i == 0 || i == 6){
			oNavlist[i].style.color = "red";

			}
		}
		if(index == 6){
			oNavlist[0].className = 'active';
			oNavlist[0].style.color = "white";

		}else if(index == 0){
			oNavlist[4].className = 'active';
			oNavlist[4].style.color = "white";

		}else{
			oNavlist[index-1].className = 'active';
			oNavlist[index-1].style.color = "white";

		}
	
	}