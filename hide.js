    $(document).ready(function() {
        //hiding all the content divs
		$(".hide").hide();

        $(".showMore1").click(function() {
            $("#content1").slideToggle("slow");
			$("#content2").hide();
            $("#content3").hide();
            $("#content4").hide();
            $("#content5").hide();
            $("#content6").hide();
            $("#content7").hide();
            $("#content8").hide();
            $("#content9").hide();
            $("#content10").hide();
            $("#content11").hide();
            $("#content12").hide();
        });
            $(".showMore2").click(function() {
            $("#content2").slideToggle("slow");
			$("#content1").hide();
            $("#content3").hide();
            $("#content4").hide();
            $("#content5").hide();
            $("#content6").hide();
            $("#content7").hide();
            $("#content8").hide();
            $("#content9").hide();
            $("#content10").hide();
            $("#content11").hide();
            $("#content12").hide();
        });
           $(".showMore3").click(function() {
            $("#content3").slideToggle("slow");
			$("#content1").hide();
            $("#content2").hide();
            $("#content4").hide();
            $("#content5").hide();
            $("#content6").hide();
            $("#content7").hide();
            $("#content8").hide();
            $("#content9").hide();
            $("#content10").hide();
            $("#content11").hide();
            $("#content12").hide();
        });
            $(".showMore4").click(function() {
            $("#content4").slideToggle("slow");
			$("#content1").hide();
            $("#content2").hide();
            $("#content3").hide();
            $("#content5").hide();
            $("#content6").hide();
            $("#content7").hide();
            $("#content8").hide();
            $("#content9").hide();
            $("#content10").hide();
            $("#content11").hide();
            $("#content12").hide();
        });
            $(".showMore5").click(function() {
            $("#content5").slideToggle("slow");
			$("#content1").hide();
            $("#content2").hide();
            $("#content3").hide();
            $("#content4").hide();
            $("#content6").hide();
            $("#content7").hide();
            $("#content8").hide();
            $("#content9").hide();
            $("#content10").hide();
            $("#content11").hide();
            $("#content12").hide();
        });
            $(".showMore6").click(function() {
            $("#content6").slideToggle("slow");
			$("#content1").hide();
            $("#content2").hide();
            $("#content3").hide();
            $("#content4").hide();
            $("#content5").hide();
            $("#content7").hide();
            $("#content8").hide();
            $("#content9").hide();
            $("#content10").hide();
            $("#content11").hide();
            $("#content12").hide();
        });
            $(".showMore7").click(function() {
            $("#content7").slideToggle("slow");
			$("#content1").hide();
            $("#content2").hide();
            $("#content3").hide();
            $("#content4").hide();
            $("#content5").hide();
            $("#content6").hide();
            $("#content8").hide();
            $("#content9").hide();
            $("#content10").hide();
            $("#content11").hide();
            $("#content12").hide();
        });
            $(".showMore8").click(function() {
            $("#content8").slideToggle("slow");
			$("#content1").hide();
            $("#content2").hide();
            $("#content3").hide();
            $("#content4").hide();
            $("#content5").hide();
            $("#content6").hide();
            $("#content7").hide();
            $("#content9").hide();
            $("#content10").hide();
            $("#content11").hide();
            $("#content12").hide();
        });
            $(".showMore9").click(function() {
            $("#content9").slideToggle("slow");
			$("#content1").hide();
            $("#content2").hide();
            $("#content3").hide();
            $("#content4").hide();
            $("#content5").hide();
            $("#content6").hide();
            $("#content7").hide();
            $("#content8").hide();
            $("#content10").hide();
            $("#content11").hide();
            $("#content12").hide();
        });
            $(".showMore10").click(function() {
            $("#content10").slideToggle("slow");
			$("#content1").hide();
            $("#content2").hide();
            $("#content3").hide();
            $("#content4").hide();
            $("#content5").hide();
            $("#content6").hide();
            $("#content7").hide();
            $("#content8").hide();
            $("#content9").hide();
            $("#content11").hide();
            $("#content12").hide();
        });
            $(".showMore11").click(function() {
            $("#content11").slideToggle("slow");
			$("#content1").hide();
            $("#content2").hide();
            $("#content3").hide();
            $("#content4").hide();
            $("#content5").hide();
            $("#content6").hide();
            $("#content7").hide();
            $("#content8").hide();
            $("#content9").hide();
            $("#content10").hide();
            $("#content12").hide();
        });
            $(".showMore12").click(function() {
            $("#content12").slideToggle("slow");
			$("#content1").hide();
            $("#content2").hide();
            $("#content3").hide();
            $("#content4").hide();
            $("#content5").hide();
            $("#content6").hide();
            $("#content7").hide();
            $("#content8").hide();
            $("#content9").hide();
            $("#content10").hide();
            $("#content11").hide();
        });
    });
      $("a[href='#']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

    $(document).ready(function(){

        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 800);
            return false;
        });

    });
