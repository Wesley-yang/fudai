$(function(){
	
	if($(".lottery").size()>0)
	{
		$(".lottery_list .item").click(function(){
			$("#tip").show();
		});
		
		$("#tip .tip_main_close,#tip .tip_main_f .btn").click(function(){
			$(this).parents("#tip").hide();
		});
	};
	
})
