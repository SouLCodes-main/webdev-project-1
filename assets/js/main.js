console.log('%c Proudly Crafted with ZiOn.', 'background: #222; color: #bada55');







// Preloader
$.holdReady( true );

$($("main section")[0]).imagesLoaded({ background: ".background-holder" }, function(){
    $('#preloader').removeClass("loading");
    $.holdReady( false );
     setTimeout(function() {
         $('#preloader').remove();
    }, 800);
});


/////////////////////////////////////////
//
// Inline Playr [plyr]
//
/////////////////////////////////////////
$(document).ready(function(){
   if($("#player").length){
       var player = new Plyr("#player");
   }
});

//////////////////////////////////////////
//
// flexslider(need to be moved to zcore)
//
/////////////////////////////////////////
$(document).ready(function() {
	if($(".flexslider-test").length){
		$(".flexslider-test").each(function(){
			var $this = $(this);
			var options = $this.data("options");
			$this.flexslider(options);
			if(options.controlNav == "thumbnails"){
				var width = 100/$this.find("ol").find("li").length + "%";
				$(".flex-control-thumbs li").css({
					"width": width
				});
			}
		});
	}
});
