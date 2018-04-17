$(function() {
	$(".nav_open").click(function() {
		$(".nav_box").fadeIn("show");
	})
	$(".close").click(function() {
		$(".nav_box").fadeOut("show");
	})
	$(".case .ca1").hover(function() {
		$(this).find(".shade").fadeToggle();
	});
	$("#tooltip .t-img").hover(function() {
		$(this).next(".tooltip-item").fadeToggle();
	});
	/* 地图弹出框 */
	$("#map").click(function() {
		$(".map_dig").show();
	})
	$(".map_dig #mapclose").click(function() {
		$(".map_dig").hide();
	})
	/* 地图弹出框 end */
	
	$("#Open").click(function() {
		$(".classify").toggleClass("none");
		if($("#classify").hasClass("none")) {
			$("#Open").html("展开分类...")
		} else {
			$("#Open").html("收起")
		}
	})

	$(".case_list dd").hover(function() {
		$(this).find(".zzc").fadeToggle();
	});
	$("#more").click(function() {
		$(".partnerlogo dl").css("height", "initial");
		$(this).hide();
	})
	/* 弹出框 */
	$(".case_list dd").click(function() {
		// $(".Popup").show();
	})
	$(".Popup #dig_close img").click(function() {
		$(".Popup").hide();
	})
	$(".about").click(function() {
		$("#listBox").show();
	})
	/* 弹出框  end*/

})