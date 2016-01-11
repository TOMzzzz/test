
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

/*New和Hot*/
$(
	function(){
		$("input[type=button]").on('click', function() {
			var a=$(this).val();
			if (a=='Hot') {
				$(this).css({
					'background-color': '#616161',
					'color': '#FC6C62'
				});
				$('input#new').css({
					'background-color': '#fff',
					'color': '#A7E63A'
				});
			} 
			else{
				$(this).css({
					'background-color': '#616161',
					'color': '#A7E63A'
				});
				$('input#hot').css({
					'background-color': '#fff',
					'color': '#FC6C62'
				});
			};
		});
	}
)

$(
	function() {
        var div1 = $("#left");
        var div2 = $("#main");

        var h = div2.height();
        div1.css('height', h);
	}
)
