
$(window).ready(function() {


		$('#recruit-ul > li').on('click',function(){
					var index = $(this).index();
					$(this).addClass('action').siblings('li').removeClass('action');
		})
		
		//返回上一页
		$("#btn-return").click(function() {
			window.history.back();
		})


//$(function(){
//	$('.dowebok_1').fullpage({
////		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
//		afterLoad: function(anchorLink, index){
//			if(index == 1){
//				alert(1);
//			}
//			if(index == 2){
//				alert(2);
//				$('.section1 .section1_mmw').find('.intro-h2').delay(500).animate({
//					top: '0'
//				}, 1500, 'easeOutExpo');
//			}
//			if(index == 3){
//				$('.section3').find('p').delay(500).animate({
//					bottom: '0'
//				}, 1500, 'easeOutExpo');
//			}
//			if(index == 4){
//				$('.section4').find('p').fadeIn(2000);
//			}
//		},
//		onLeave: function(index, direction){
//			if(index == '2'){
//				$('.section2').find('p').delay(500).animate({
//					left: '-120%'
//				}, 1500, 'easeOutExpo');
//			}
//			if(index == '3'){
//				$('.section3').find('p').delay(500).animate({
//					bottom: '-120%'
//				}, 1500, 'easeOutExpo');
//			}
//			if(index == '4'){
//				$('.section4').find('p').fadeOut(2000);
//			}
//		}
//	});
//});


})


