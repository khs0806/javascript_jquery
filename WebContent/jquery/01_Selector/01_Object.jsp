<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<script src="jquery.js"></script>								<!-- 라이브러리를 직접 다운받아서 호출 -->
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>		<!-- 인터넷을 통해 jquery사이트에서 호출한다. -->
<script>
	/* var obj = new JQuery(document);		// jquery 객체 생성
	obj.ready(testFun);						// jquery는 항상 이렇게 시작한다.
	
	function testFun(){
		alert("JQuery 시작입니다.");
	} */
	
	/* new JQuery(document).ready(function(){	// 위에 것과 동일. 하지만 코드수가 줄어듬.
		alert("JQuery 시작입니다.");
	}); */
	
	$(document).ready(function(){				// 위에 문장의 최종 끝판왕. 주로 이렇게 쓴다.
		alert("JQuery 시작입니다.");
	});
	
</script>

<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

</body>
</html>