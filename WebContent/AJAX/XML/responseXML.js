/**
 * 
 */
var arr = new Array();
var xhr = null;
function startRequest(){
//	alert("Ok!");
//	객체 XMLHttpRequest -> 웹브라우저
	
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest;
	} else {
		xhr = ActiveXObject("Microsoft.XMLHTTP");
	}
	arr.push(xhr);
	
	xhr.open("GET","responseXML.xml", true);
	xhr.send();
	xhr.onreadystatechange = resultProcess;
	
}

function resultProcess(){
	if (xhr.readyState==4 && xhr.status==200) {
		arr.push(xhr.responseXML);
		alert(arr.join("\n"));
		
		var xmlDoc = xhr.responseXML;
		var studentList = xmlDoc.getElementsByTagName("student");
		
		for (var i=0; i<studentList.length; i++) {
			var student = studentList[i];
			var subElement = student.childNodes;
			
			var disp = document.getElementById("disp");
			var div = document.createElement("div");
			
			for (var j=0; j<subElement.length; j++) {
				if (subElement[j].nodeType == 1) {
					var span = document.createElement("span");
					span.innerHTML = subElement[j].childNodes[0].nodeValue + "&nbsp";
					div.appendChild(span);
				}
			}
			disp.appendChild(div);
		}
	}
}