/*article.note背景效果*/
$(
	function () {
	    $(".note").hover(function () {
	        $(this).css("background-color", "#F2F2F2");
	    },
			function () {
			    $(this).css("background-color", "none")
			}
		);
	}
)
/*上下翻页背景效果*/
$(
	function () {
	    $(".cpage").hover(function () {
	        $(this).css("background-color", "#383838");
	    },
			function () {
			    $(this).css("background-color", "none")
			}
		);
	}
)
