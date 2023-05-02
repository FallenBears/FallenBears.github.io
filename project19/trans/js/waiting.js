var ybc = {}
// ****** 展示等待框
ybc.showWaiting = function(){
	var wbox = mui("#waitArea")[0];
	if(wbox){
		return
	}else{
		wbox = document.createElement("div")
		wbox.id = "waitArea"
		var arr = []
		arr.push("<div id='waitBox'>")
		arr.push("<img src='img/loading.gif' />")
		arr.push("<div id='waitTitle'>正在翻译,请稍后...</div>")
		arr.push("</div>")
		wbox.innerHTML = arr.join("")
		document.body.appendChild(wbox)
	}
	
}

// ***** 关闭等待框
ybc.closeWaiting = function(){
	var wbox = mui("#waitArea")[0];
	if(wbox){
		document.body.removeChild(wbox)
	}else{
		return
	}
}


// 测试Demo
// ybc.showWaiting()
// setTimeout(function() {
// 	ybc.closeWaiting()
// }, 3000);