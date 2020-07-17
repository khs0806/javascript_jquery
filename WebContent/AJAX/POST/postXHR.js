/**
 * 
 */
var xhr = null;
var arr = new Array();

function toServer(){
	var msg = document.getElementById("createForm").msg.value;
//	arr.push(msg);
	
	if (window.XMLHttpRequest){
		xhr = new XMLHttpRequest;
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
//	xhr.open("GET", "command.jsp?msg="  + msg, true);	// 요청방식, 서버파일, 비동기식(true)
//	xhr.send();
//	xhr.onreadystatechange = process;
	
	xhr.open("POST", "command.jsp", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("msg=" + msg);
	xhr.onreadystatechange = process;
}

function process(){
	
	if (xhr.readyState==4 && xhr.status==200){
		arr.push("aaa" + xhr.responseText);
		
		var disp = document.getElementById("disp");
		disp.innerText = xhr.responseText;
	}
	
//	alert(arr.join("/n"));
}
