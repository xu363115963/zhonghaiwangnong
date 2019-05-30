$(function(){function t(t,e,n){"ie8"!=p&&(n?p?a(!0,e):(t.find(".mmw").removeClass("animated fadeIn"),t.find(".page-left").addClass("cur")):p?a(!1,e):(t.find(".mmw").addClass("animated fadeIn"),t.find(".page-left").removeClass("cur")))}function a(t,a){"ie8"!=p&&(t?a.hasClass("flag")&&(a.animate({opacity:0},500),a.removeClass("flag")):setTimeout(function(){a.addClass("flag").animate({opacity:1},1200)},200))}function e(t){if("ie8"!=p){var a=$(".page7-wraper h2"),e=$("#news");t?a.hasClass("flag")&&(setTimeout(function(){a.animate({top:-50,opacity:0},700)},150),setTimeout(function(){e.animate({right:50,opacity:0},700)},300),a.removeClass("flag")):(setTimeout(function(){setTimeout(function(){a.animate({top:0,opacity:1},700)},150),setTimeout(function(){e.animate({right:0,opacity:1},700)},300)},100),a.addClass("flag"))}}function n(t){if("ie8"!=p){var a=$(".page6-wraper"),e=$(".page6 h2"),n=$(".page6-content-img"),i=$(".page6-content-r"),o=$(".page6-btn"),s=200;t?a.hasClass("flag")&&(setTimeout(function(){e.css({top:-50,opacity:0}),n.css({left:-50,opacity:0}),i.find("h3").css({top:50,opacity:0}),i.find("p").css({top:50,opacity:0}),o.css({top:372,opacity:0})},600),a.removeClass("flag")):setTimeout(function(){setTimeout(function(){e.animate({top:0,opacity:1},700)},s),setTimeout(function(){n.animate({left:0,opacity:1},700)},s),setTimeout(function(){i.find("h3").animate({top:0,opacity:1},700)},s),setTimeout(function(){i.find("p").animate({top:0,opacity:1},700)},s),setTimeout(function(){o.animate({top:322,opacity:1},700)},s),a.addClass("flag")},100)}}function i(t){if("ie8"!=p){var a=$(".page1-list"),e=a.find(".page1-list-item");t?a.hasClass("flag")&&(setTimeout(function(){e.animate({top:50,opacity:0},500)},300),a.removeClass("flag")):setTimeout(function(){e.each(function(t,a){var e=$(a);setTimeout(function(){e.animate({top:0,opacity:1},700)},150*t)}),a.addClass("flag")},300)}}function o(){if(p){var t=$(".sign-icon");setInterval(function(){t.animate({top:5},600,function(){t.animate({top:28},500)})},1100)}}function s(){"ie8"!=p&&($(".banner-title").animate({top:0,opacity:1},900),setTimeout(function(){$(".banner-tip").animate({top:0,opacity:1},600)},300),setTimeout(function(){$(".banner-download").animate({top:0,opacity:1},450)},400),setTimeout(function(){$(".banner-content").animate({opacity:1},600)},400),setTimeout(function(){var t=$(".banner-icon-r");t.each(function(t,a){setTimeout(function(){$(a).animate({opacity:1},200)},250*t)})},650),setTimeout(function(){var t=$(".banner-icon-s");t.each(function(t,a){setTimeout(function(){$(a).animate({opacity:1},200)},250*t)})},2500),"ie8"!=p&&setTimeout(function(){$(".page1-title").animate({top:0,opacity:1},600)},600),setTimeout(function(){$(".banner-icon-s").addClass("animated-s")},1500),setTimeout(function(){$(".banner-icon-r").addClass("animated-r")},300))}function c(){var t=!1;return navigator.userAgent.indexOf("MSIE")>0&&(navigator.userAgent.indexOf("MSIE 6.0")>0&&(t="ie8"),navigator.userAgent.indexOf("MSIE 7.0")>0&&(t="ie8"),navigator.userAgent.indexOf("MSIE 8.0")>0&&(t="ie8"),navigator.userAgent.indexOf("MSIE 9.0")>0&&(t=!0)),t}var p=c();s(),o(),$("#news").owlCarousel({items:3,loop:!0,autoplay:!0,autoplaySpeed:2e3,slideBy:3,autoplayTimeout:5e3}),navigator.userAgent.indexOf("Firefox")<0&&$(".page-left").hover(function(){$(this).addClass("cur")},function(){$(this).removeClass("cur")});{var r=$("#bg"),u=1e3,l=!1,f=!1,g=.04,d=.2;
$("#dowebok").fullpage({
	
	css3:true,
	verticalCentered:!0,
	navigation:!0,anchors:["page1","page2","page3","page4","page5","page6"],
	menu:".header",
	onLeave:function(a,o,s){

		p||(l||3!=o&&4!=o&&5!=o&&6!=o?1==o||2==o||7==o||8==o||9==o?(r.hide().velocity({opacity:0}),l=!1,f=!1):f?(3==o||5==o?r.velocity("stop").velocity({opacity:g,scale:.6,translateX:"0px",translateY:"0px",rotateZ:"0deg"},
		
		{duration:3*u,easing:"ease"}):r.velocity("stop").velocity({opacity:d,scale:.6,translateX:"0px",
		translateY:"0px",
		rotateZ:"0deg"},
		{duration:3*u,easing:"ease"}),
		f=!1):(3==o||5==o?r.velocity("stop").velocity({opacity:g,scale:1,translateX:"-200px",translateY:"300px",rotateZ:"-60deg"},{duration:2.5*u,easing:"ease-in-out"}):r.velocity("stop").velocity({opacity:d,scale:1,translateX:"-200px",translateY:"300px",rotateZ:"-60deg"},{duration:2.5*u,easing:"ease-in-out"}),f=!0):(3==o||5==o?r.show().velocity({rotateZ:"90deg",translateX:"-7000px",scale:3},{duration:0}).velocity({opacity:g,scale:.6,translateX:"0px",translateY:"0px",rotateZ:"0deg"},{duration:3*u,easing:"ease"}):r.show().velocity({rotateZ:"90deg",translateX:"-7000px",scale:3},{duration:0}).velocity({opacity:d,scale:.6,translateX:"0px",translateY:"0px",rotateZ:"0deg"},{duration:3*u,easing:"ease"}),l=!0)),2==o?i():i(!0),7==o?n():n(!0),8==o||9==o?e():e(!0);var c=$(".page2"),m=$(".page2-content");3==o?t(c,m):t(c,m,!0);var y=$(".page4"),v=$(".page4-content");5==o?t(y,v):t(y,v,!0);var T=$(".page3"),h=$(".page3-content");4==o?t(T,h):t(T,h,!0);var C=$(".page5"),x=$(".page5-content");6==o?t(C,x):t(C,x,!0),
		"down"==s?$(".header").animate({top:-90},400):$(".header").animate({top:0},400)
			//第一屏
			if(o == 1){
//				$('.header .mmw').find('.header-nav').addClass('box1');
//				setTimeout(function(){$('.header .mmw ').find('.header-nav').removeClass('box1');},1000);
			}
			//第二屏
			if(o == 2){
				$('.page1 .mmw').find('.intro-h2').addClass('fadeInDown animated');
				setTimeout(function(){$('.page1 .mmw').find('.intro-h2').removeClass('fadeInDown animated');},1000);
				
				$('.page1 .mmw .page1-list').find('.intro-li1').addClass('bounceInLeft animated');
				setTimeout(function(){$('.page1 .mmw').find('.intro-li1').removeClass('bounceInLeft animated');},1000);
				$('.page1 .mmw .page1-list').find('.intro-li2').addClass('bounceInRight animated');
				setTimeout(function(){$('.page1 .mmw').find('.intro-li2').removeClass('bounceInRight animated');},1000);
				$('.page1 .mmw .page1-list .intro-li2').find('.li2-p2').hide()
				setTimeout(function(){$('.page1 .mmw .page1-list .intro-li2').find('.li2-p2').show().addClass('slideInUp animated');},1000);
						
			}
//			第三屏
			if(o == 3){
				$('.page2 .mmw').find('.intro-h2').addClass('fadeInDown animated');
				setTimeout(function(){$('.page2 .mmw').find('.intro-h2').removeClass('fadeInDown animated');},1000);
				
			}
//			第四屏
			if(o == 4){
				$('.page3 .mmw').find('.intro-h2').addClass('fadeInDown animated');
				setTimeout(function(){$('.page3 .mmw').find('.intro-h2').removeClass('fadeInDown animated');},1000);
				
				$('.page3 .mmw .business').find('li').addClass('rotateIn animated');
				setTimeout(function(){$('.page3 .mmw .business').find('li').removeClass('rotateIn animated');},1000);
				
			}
//			第五屏
			if(o == 5){
				$('.page4 .mmw').find('.intro-page4').addClass('fadeInDown animated');
				setTimeout(function(){$('.page4 .mmw').find('.intro-page4').removeClass('fadeInDown animated');},1000);
				
				
				
			}
			//第六屏
			if(o == 6){
				$('.page5 .mmw').find('.intro-h2').addClass('fadeInDown animated');
				setTimeout(function(){$('.page5 .mmw').find('.intro-h2').removeClass('fadeInDown animated');},1000);
				
				$('.page5 .mmw .ul-page5').find('li').addClass('rollIn animated');
				setTimeout(function(){$('.page5 .mmw .ul-page5').find('li').removeClass('rollIn animated');},1000);
				
			}
	}
}

)}});






