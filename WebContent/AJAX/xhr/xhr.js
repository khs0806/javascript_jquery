/**
 * 
 */

function createXHR(){
	if (window.XMLHttpRequest){
		return new XMLHttpRequest;
	} else {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}
var xhr = null;
var arr = new Array();
// post, xhr.txt, 
function sendRequest(method, url, params, callback){
	alert("sendRequest");
	var httpMethod = method.toUpperCase();
	var httpUrl = url;
	var httpParams = (params==null || params=="") ? null:params;
	
	if (httpMethod == "GET" && httpParams != null){ //GET 방식일때
		url += "?" + httpParams;
	}
	
	arr.push(httpMethod, httpUrl, httpParams);
	
	xhr = createXHR();
	xhr.open(httpMethod, httpUrl, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // GET일때는 실행 안됨, POST만 실행
	xhr.send(httpMethod=="POST" ? httpParams : null); //GET이면 null, POST면 파라미터 갖음
	xhr.onreadtystatechange = callback();
}