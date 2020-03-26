$(document).ready(function() {
	$("#loading-div").fadeOut(3000,function(){
		mui.toast('欢迎使用<br><br>罗小黑妖灵论坛');
		setTimeout(function(){
			mui.toast('好吧我们还在咕');
		},3000);
		setTimeout(function(){
			mui.toast('不要着急,<br>新版“马上”就好');
		},6000);
		setTimeout(function(){get_times()},10000);
	});
});
function get_times(){
	var timestamps = new Date().getTime();
	timestamps = timestamps - 1566748800000;
	var day = parseInt(timestamps/86400000);
	timestamps = timestamps - day*86400000;
	var hour = parseInt(timestamps/3600000);
	timestamps = timestamps - hour*3600000;
	var minute = parseInt(timestamps/60000);
	timestamps = timestamps - minute*60000;
	var second = parseInt(timestamps/1000);
	if(minute == 0){
		minute = "00";
	}
	document.getElementById('times').innerHTML = "黑公历28集"+day+"日"+hour+"时"+minute+"分"+second+"秒";
	setTimeout(function(){get_times()},1000);
}
function go_to_2048(){
	document.getElementById('offCanvasContentScroll').innerHTML = '<iframe src="https://mm-jiahong.github.io/2048Luoxiaohei/2048lxh.html" frameborder="0" height="100%" width="100%" style="position: relative;" id="test"></iframe>'
	loading(true);
}
function back_to_home(){
	document.getElementById('offCanvasContentScroll').innerHTML = '<div class = "mui-content-padded"><span class="mui-tab-label">来玩会2048？</span></div><div class = "mui-content-padded">							<button class = "mui-btn-block" onclick="go_to_2048()">点击开始</button></div><div class = "mui-content-padded">							<button class = "mui-btn-block" onclick="go_froum()">进入论坛</button><button class = "mui-btn-block" onclick="getupdate()">查询更新</button><button class = "mui-btn-block" onclick="go_xunxi()">最新APP讯息</button><span class = "mui-tab-label">上次更新：2020/3/18 19：11</span><br><span class = "mui-tab-label">版本：0.0.9.01</span><span class="mui-tab-label">版本号:</span><span class="mui-tab-label" id = "version">13</span></div>'
	loading(true);
}

function go_froum(){
	document.getElementById('offCanvasContentScroll').innerHTML = '<iframe src="http://www.heibbs.net/" frameborder="0" height="100%" width="100%" style="position: relative;" id="test"></iframe>'
	loading(false);
}
function loading(auto){
	$('#loading-div').show();
	if(auto){
		$('#loading-div').fadeOut(3500);
	}else{
		$('#test').ready(function(){
			jQuery("#loading-div").fadeOut(3500);
		});
	}
}
function go_xunxi(){
	document.getElementById('offCanvasContentScroll').innerHTML = '<iframe src="http://www.heibbs.net/app/xunxi.html" frameborder="0" height="100%" width="100%" style="position: relative;" id="test"></iframe>'
	loading(false);
}