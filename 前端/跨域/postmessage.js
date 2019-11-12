//http://a.local.test
//弹出一个新窗口
var domain = 'http://b.local.test/';
var newWindow = window.open(domain,'_blank');

//周期性的发送消息
setInterval(function(){
	var message = 'time:' + (new Date().getTime());
	console.log('message:' + message);
  //发送
	newWindow.postMessage(message,domain);
},6000);

//监听消息反馈
window.addEventListener('message',function(event) {
  //过滤掉其他域名的事件
	if(event.origin !== 'http://a.local.test') return;
	console.log('response:',event.data);
},false);
