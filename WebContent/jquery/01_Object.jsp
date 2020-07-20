<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<script src="jquery-3.5.1.js"></script>
<script>
	/* var obj = new JQuery(document);		// jquery 객체 생성
	obj.ready(testFun);						// jquery는 항상 이렇게 시작한다.
	
	function testFun(){
		alert("JQuery 시작입니다.");
	} */
	
	new JQuery(document).ready(function(){	// 위에 것과 동일. 하지만 코드수가 줄어듬.
		alert("JQuery 시작입니다.");
	})
	
</script>

<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

</body>
</html>