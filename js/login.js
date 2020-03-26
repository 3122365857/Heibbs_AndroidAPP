var sesson = '0';
function connect_to_server(user,pass){
	url = "http://www.heibbs.net/plugin.php?id=xinxiu_network:login&key=202002221042!##!&action=login_user&username="+user+"&password="+pass;
	var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
	        httpRequest.open('GET', url, true);//第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
	        httpRequest.send();//第三步：发送请求  将请求参数写在URL中
	        /**
	         * 获取数据后的处理程序
	         */
	        httpRequest.onreadystatechange = function () {
	            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
	                var json = eval('(' + httpRequest.responseText + ')');//获取到json字符串，还需解析
	                if(json['result'] == "OK"){
						sesson = json['data']['uid'];
					}else{
						alert("用户名或密码或网络错误");
					}
					
	            }
	        };
}
function connect_to_xiaohei(text){
	data = "text="+text+"sesson="+sesson;
	var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
	httpRequest.open('POST', 'http://www.heibbs.net/app/robot.php', true); //第二步：打开连接
	httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
	httpRequest.send(data);//发送请求 将情头体写在send中
	/**
	 * 获取数据后的处理程序
	 */
	httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
	    if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
	        var json = eval('(' + httpRequest.responseText + ')');//获取到服务端返回的数据
	        var fuck = json['ret'];
			if(fuck == 0){
				return json['data']['answer'];
			}else{
				return "推销 羊驼";
			}
	    }
	};
}