!function(e,n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(o){return n(o,e,e.document,e.Math)}):"undefined"!=typeof exports?module.exports=n(require("jquery"),e,e.document,e.Math):n(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function(e,n,o,t,i){"use strict";var a="fullpage-wrapper",s="."+a,r="fp-scrollable",l="."+r,c=".slimScrollBar",f=".slimScrollRail",d="fp-responsive",u="fp-notransition",h="fp-destroyed",p="fp-enabled",v="fp-viewing",m="active",g="."+m,S=".section",w="fp-section",y="."+w,x=y+g,T=y+":first",b=y+":last",C="fp-tableCell",k="."+C,A="fp-auto-height",L="fp-nav",E="#"+L,B="fp-tooltip",M="fp-show-active",F=".slide",R="fp-slide",q="."+R,z=q+g,I="fp-slides",P="."+I,D="fp-slidesContainer",H="."+D,O="fp-table",V="fp-slidesNav",U="."+V,Y=U+" a",W="fp-controlArrow",N="."+W,K="fp-prev",X="."+K,j=W+" "+K,Q=N+X,_="fp-next",G="."+_,J=W+" "+_,Z=N+G,$=e(n),en=e(o);e.fn.fullpage=function(W){function X(){Fo.css({height:"100%",position:"relative"}),Fo.addClass(a),e("html").addClass(p),W.css3&&(W.css3=so()),W.anchors.length||(W.anchors=e("[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),Co.setAllowScrolling(!0),Fo.removeClass(h),on(),e(y).each(function(n){var o=e(this),t=o.find(q),i=t.length;G(o,n),nn(o,n),i>0?_(o,t,i):W.verticalCentered&&Qn(o)}),Co.setAutoScrolling(W.autoScrolling,"internal");var t=e(x).find(z);if(t.length&&(0!==e(x).index(y)||0===e(x).index(y)&&0!==t.index())&&po(t),W.fixedElements&&W.css3&&e(W.fixedElements).appendTo(bo),W.navigation&&an(),W.scrollOverflow?("complete"===o.readyState&&sn(),$.on("load",sn)):rn(),Pn(),!W.animateAnchor){var i=n.location.hash.replace("#","").split("/"),s=i[0];if(s.length){var r=e('[data-anchor="'+s+'"]');r.length&&(W.autoScrolling?vo(r.position().top):(vo(0),To.scrollTop(r.position().top)),Yn(s,null),e.isFunction(W.afterLoad)&&W.afterLoad.call(r,s,r.index(y)+1),r.addClass(m).siblings().removeClass(m))}}ao(),$.on("load",function(){Bn()})}function _(n,o,t){var i=100*t,a=100/t;o.wrapAll('<div class="'+D+'" />'),o.parent().wrap('<div class="'+I+'" />'),n.find(H).css("width",i+"%"),t>1&&(W.controlArrows&&tn(n),W.slidesNavigation&&no(n,t)),o.each(function(){e(this).css("width",a+"%"),W.verticalCentered&&Qn(e(this))});var s=n.find(z);s.length&&(0!==e(x).index(y)||0===e(x).index(y)&&0!==s.index())?po(s):o.eq(0).addClass(m)}function G(n,o){o||0!==e(x).length||n.addClass(m),n.css("height",Ro+"px"),W.paddingTop&&n.css("padding-top",W.paddingTop),W.paddingBottom&&n.css("padding-bottom",W.paddingBottom),"undefined"!=typeof W.sectionsColor[o]&&n.css("background-color",W.sectionsColor[o])}function nn(n,o){"undefined"!=typeof W.anchors[o]&&(n.attr("data-anchor",W.anchors[o]),n.hasClass(m)&&Yn(W.anchors[o],o)),W.menu&&W.css3&&e(W.menu).closest(s).length&&e(W.menu).appendTo(bo)}function on(){e(W.sectionSelector).each(function(){e(this).addClass(w)}),e(W.slideSelector).each(function(){e(this).addClass(R)})}function tn(e){e.find(P).after('<div class="'+j+'"></div><div class="'+J+'"></div>'),"#fff"!=W.controlArrowColor&&(e.find(Z).css("border-color","transparent transparent transparent "+W.controlArrowColor),e.find(Q).css("border-color","transparent "+W.controlArrowColor+" transparent transparent")),W.loopHorizontal||e.find(Q).hide()}function an(){bo.append('<div id="'+L+'"><ul></ul></div>');var n=e(E);n.addClass(function(){return W.showActiveTooltip?M+" "+W.navigationPosition:W.navigationPosition});for(var o=0;o<e(y).length;o++){var t="";W.anchors.length&&(t=W.anchors[o]);var i='<li><a href="#'+t+'"><span></span></a>',a=W.navigationTooltips[o];"undefined"!=typeof a&&""!==a&&(i+='<div class="'+B+" "+W.navigationPosition+'">'+a+"</div>"),i+="</li>",n.find("ul").append(i)}e(E).css("margin-top","-"+e(E).height()/2+"px"),e(E).find("li").eq(e(x).index(y)).find("a").addClass(m)}function sn(){e(y).each(function(){var n=e(this).find(q);n.length?n.each(function(){Xn(e(this))}):Xn(e(this))}),rn()}function rn(){var n=e(x);ln(n),An(n),Ln(n),e.isFunction(W.afterLoad)&&W.afterLoad.call(n,n.data("anchor"),n.index(y)+1),e.isFunction(W.afterRender)&&W.afterRender.call(Fo)}function ln(e){var n=e.find("SLIDES_WRAPPER"),o=e.find(l);n.length&&(o=n.find(z)),o.mouseover()}function cn(){var n;if(!W.autoScrolling||W.scrollBar){for(var i=$.scrollTop(),a=0,s=t.abs(i-o.querySelectorAll(y)[0].offsetTop),r=o.querySelectorAll(y),l=0;l<r.length;++l){var c=r[l],f=t.abs(i-c.offsetTop);s>f&&(a=l,s=f)}n=e(r).eq(a)}if(!W.autoScrolling||W.scrollBar){if(!n.hasClass(m)&&!n.hasClass(A)){Ko=!0;var d=e(x),u=d.index(y)+1,h=Nn(n),p=n.data("anchor"),v=n.index(y)+1,g=n.find(z);if(g.length)var S=g.data("anchor"),w=g.index();Io&&(n.addClass(m).siblings().removeClass(m),e.isFunction(W.onLeave)&&W.onLeave.call(d,u,v,h),e.isFunction(W.afterLoad)&&W.afterLoad.call(n,p,v),An(n),Co.setFitToSection(!n.hasClass(A)),Yn(p,v-1),W.anchors.length&&(ko=p,oo(w,S,p,v))),clearTimeout(Uo),Uo=setTimeout(function(){Ko=!1},100)}W.fitToSection&&(clearTimeout(Yo),Yo=setTimeout(function(){Io&&W.fitToSection&&(e(x).is(n)&&requestAnimFrame(function(){qo=!0}),yn(n),qo=!1)},W.fitToSectionDelay))}}function fn(e){return e.find(P).length?e.find(z).find(l):e.find(l)}function dn(e,n){if(Do.m[e]){var o,t;if("down"==e?(o="bottom",t=Co.moveSectionDown):(o="top",t=Co.moveSectionUp),n.length>0){if(!Wn(o,n))return!0;t()}else t()}}function un(n){var o=n.originalEvent;if(!hn(n.target)&&pn(o)){W.autoScrolling&&n.preventDefault();var i=e(x),a=fn(i);if(Io&&!Eo){var s=ho(o);Qo=s.y,_o=s.x,i.find(P).length&&t.abs(jo-_o)>t.abs(Xo-Qo)?t.abs(jo-_o)>$.width()/100*W.touchSensitivity&&(jo>_o?Do.m.right&&Co.moveSlideRight():Do.m.left&&Co.moveSlideLeft()):W.autoScrolling&&t.abs(Xo-Qo)>$.height()/100*W.touchSensitivity&&(Xo>Qo?dn("down",a):Qo>Xo&&dn("up",a))}}}function hn(n,o){o=o||0;var t=e(n).parent();return o<W.normalScrollElementTouchThreshold&&t.is(W.normalScrollElements)?!0:o==W.normalScrollElementTouchThreshold?!1:hn(t,++o)}function pn(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function vn(e){var n=e.originalEvent;if(W.fitToSection&&To.stop(),pn(n)){var o=ho(n);Xo=o.y,jo=o.x}}function mn(e,n){for(var o=0,i=e.slice(t.max(e.length-n,1)),a=0;a<i.length;a++)o+=i[a];return t.ceil(o/n)}function gn(o){var i=(new Date).getTime();if(W.autoScrolling&&!Lo){o=o||n.event;var a=o.wheelDelta||-o.deltaY||-o.detail,s=t.max(-1,t.min(1,a));Po.length>149&&Po.shift(),Po.push(t.abs(a)),W.scrollBar&&(o.preventDefault?o.preventDefault():o.returnValue=!1);var r=e(x),l=fn(r),c=i-Go;if(Go=i,c>200&&(Po=[]),Io){var f=mn(Po,10),d=mn(Po,70),u=f>=d;u&&(0>s?dn("down",l):dn("up",l))}return!1}W.fitToSection&&To.stop()}function Sn(n){var o=e(x),t=o.find(P),i=t.find(q).length;if(!(!t.length||Eo||2>i)){var a=t.find(z),s=null;if(s="prev"===n?a.prev(q):a.next(q),!s.length){if(!W.loopHorizontal)return;s=a.siblings("prev"===n?":last":":first")}Eo=!0,zn(t,s)}}function wn(){e(z).each(function(){po(e(this),"internal")})}function yn(o,t,i){n.requestAnimFrame=function(){return n.requestAnimationFrame||function(e){e()}}(),requestAnimFrame(function(){var n=o.position();if("undefined"!=typeof n){var a=o.hasClass(A)?0==n.top?0:n.top-Ro+o.height():n.top,s={element:o,callback:t,isMovementUp:i,dest:n,dtop:a,yMovement:Nn(o),anchorLink:o.data("anchor"),sectionIndex:o.index(y),activeSlide:o.find(z),activeSection:e(x),leavingSection:e(x).index(y)+1,localIsResizing:qo};if(!(s.activeSection.is(o)&&!qo||W.scrollBar&&$.scrollTop()===s.dtop&&!o.hasClass(A))){if(s.activeSlide.length)var r=s.activeSlide.data("anchor"),l=s.activeSlide.index();if(W.autoScrolling&&W.continuousVertical&&"undefined"!=typeof s.isMovementUp&&(!s.isMovementUp&&"up"==s.yMovement||s.isMovementUp&&"down"==s.yMovement)&&(s=bn(s)),e.isFunction(W.onLeave)&&!s.localIsResizing){if(W.onLeave.call(s.activeSection,s.leavingSection,s.sectionIndex+1,s.yMovement)===!1)return;En(s.activeSection)}o.addClass(m).siblings().removeClass(m),An(o),Io=!1,oo(l,r,s.anchorLink,s.sectionIndex),xn(s),ko=s.anchorLink,Yn(s.anchorLink,s.sectionIndex)}}})}function xn(n){if(W.css3&&W.autoScrolling&&!W.scrollBar){var o="translate3d(0px, -"+n.dtop+"px, 0px)";Gn(o,!0),W.scrollingSpeed?Oo=setTimeout(function(){kn(n)},W.scrollingSpeed):kn(n)}else{var t=Tn(n);e(t.element).animate(t.options,W.scrollingSpeed,W.easing).promise().done(function(){kn(n)})}}function Tn(e){var n={};return W.autoScrolling&&!W.scrollBar?(n.options={top:-e.dtop},n.element=s):(n.options={scrollTop:e.dtop},n.element="html, body"),n}function bn(n){return n.isMovementUp?e(x).before(n.activeSection.nextAll(y)):e(x).after(n.activeSection.prevAll(y).get().reverse()),vo(e(x).position().top),wn(),n.wrapAroundElements=n.activeSection,n.dest=n.element.position(),n.dtop=n.dest.top,n.yMovement=Nn(n.element),n}function Cn(n){n.wrapAroundElements&&n.wrapAroundElements.length&&(n.isMovementUp?e(T).before(n.wrapAroundElements):e(b).after(n.wrapAroundElements),vo(e(x).position().top),wn())}function kn(n){Cn(n),n.element.find(".fp-scrollable").mouseover(),Co.setFitToSection(!n.element.hasClass(A)),e.isFunction(W.afterLoad)&&!n.localIsResizing&&W.afterLoad.call(n.element,n.anchorLink,n.sectionIndex+1),Ln(n.element),Io=!0,e.isFunction(n.callback)&&n.callback.call(this)}function An(n){var o=n.find(z);o.length&&(n=e(o)),n.find("img[data-src], source[data-src], audio[data-src]").each(function(){e(this).attr("src",e(this).data("src")),e(this).removeAttr("data-src"),e(this).is("source")&&e(this).closest("video").get(0).load()})}function Ln(n){n.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("autoplay")&&"function"==typeof n.play&&n.play()})}function En(n){n.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-ignore")||"function"!=typeof n.pause||n.pause()})}function Bn(){var e=n.location.hash.replace("#","").split("/"),o=e[0],t=e[1];o&&$n(o,t)}function Mn(){if(!Ko&&!W.lockAnchors){var e=n.location.hash.replace("#","").split("/"),o=e[0],t=e[1];if(o.length){var i="undefined"==typeof ko,a="undefined"==typeof ko&&"undefined"==typeof t&&!Eo;(o&&o!==ko&&!i||a||!Eo&&Ao!=t)&&$n(o,t)}}}function Fn(n){clearTimeout(Wo);var o=e(":focus");if(!o.is("textarea")&&!o.is("input")&&!o.is("select")&&W.keyboardScrolling&&W.autoScrolling){var t=n.which,i=[40,38,32,33,34];e.inArray(t,i)>-1&&n.preventDefault(),Lo=n.ctrlKey,Wo=setTimeout(function(){Rn(n)},150)}}function Rn(n){var o=n.shiftKey;switch(n.which){case 38:case 33:Do.k.up&&Co.moveSectionUp();break;case 32:if(o&&Do.k.up){Co.moveSectionUp();break}case 40:case 34:Do.k.down&&Co.moveSectionDown();break;case 36:Do.k.up&&Co.moveTo(1);break;case 35:Do.k.down&&Co.moveTo(e(y).length);break;case 37:Do.k.left&&Co.moveSlideLeft();break;case 39:Do.k.right&&Co.moveSlideRight();break;default:return}}function qn(e){Io&&(e.pageY<Jo?Co.moveSectionUp():e.pageY>Jo&&Co.moveSectionDown()),Jo=e.pageY}function zn(n,o){var i=o.position(),a=o.index(),s=n.closest(y),r=s.index(y),l=s.data("anchor"),c=s.find(U),f=io(o),d=qo;if(W.onSlideLeave){var u=s.find(z),h=u.index(),p=Kn(h,a);if(!d&&"none"!==p&&e.isFunction(W.onSlideLeave)&&W.onSlideLeave.call(u,l,r+1,h,p,a)===!1)return void(Eo=!1)}o.addClass(m).siblings().removeClass(m),d||An(o),!W.loopHorizontal&&W.controlArrows&&(s.find(Q).toggle(0!==a),s.find(Z).toggle(!o.is(":last-child"))),s.hasClass(m)&&oo(a,f,l,r);var v=function(){d||e.isFunction(W.afterSlideLoad)&&W.afterSlideLoad.call(o,l,r+1,f,a),Eo=!1};if(W.css3){var S="translate3d(-"+t.round(i.left)+"px, 0px, 0px)";Dn(n.find(H),W.scrollingSpeed>0).css(mo(S)),Vo=setTimeout(function(){v()},W.scrollingSpeed,W.easing)}else n.animate({scrollLeft:t.round(i.left)},W.scrollingSpeed,W.easing,function(){v()});c.find(g).removeClass(m),c.find("li").eq(a).find("a").addClass(m)}function In(){if(Pn(),Bo){var n=e(o.activeElement);if(!n.is("textarea")&&!n.is("input")&&!n.is("select")){var i=$.height();t.abs(i-Zo)>20*t.max(Zo,i)/100&&(Co.reBuild(!0),Zo=i)}}else clearTimeout(Ho),Ho=setTimeout(function(){Co.reBuild(!0)},350)}function Pn(){var e=W.responsive||W.responsiveWidth,n=W.responsiveHeight;if(e&&Co.setResponsive($.width()<e),n){var o=Fo.hasClass(d);o||Co.setResponsive($.height()<n)}}function Dn(e){var n="all "+W.scrollingSpeed+"ms "+W.easingcss3;return e.removeClass(u),e.css({"-webkit-transition":n,transition:n})}function Hn(e){return e.addClass(u)}function On(e,n){var o=825,i=900;if(o>e||i>n){var a=100*e/o,s=100*n/i,r=t.min(a,s),l=r.toFixed(2);bo.css("font-size",l+"%")}else bo.css("font-size","100%")}function Vn(n,o){W.navigation&&(e(E).find(g).removeClass(m),n?e(E).find('a[href="#'+n+'"]').addClass(m):e(E).find("li").eq(o).find("a").addClass(m))}function Un(n){W.menu&&(e(W.menu).find(g).removeClass(m),e(W.menu).find('[data-menuanchor="'+n+'"]').addClass(m))}function Yn(e,n){Un(e),Vn(e,n)}function Wn(e,n){return"top"===e?!n.scrollTop():"bottom"===e?n.scrollTop()+1+n.innerHeight()>=n[0].scrollHeight:void 0}function Nn(n){var o=e(x).index(y),t=n.index(y);return o==t?"none":o>t?"up":"down"}function Kn(e,n){return e==n?"none":e>n?"left":"right"}function Xn(e){e.css("overflow","hidden");var n,o=e.closest(y),t=e.find(l);t.length?n=t.get(0).scrollHeight:(n=e.get(0).scrollHeight,W.verticalCentered&&(n=e.find(k).get(0).scrollHeight));var i=Ro-parseInt(o.css("padding-bottom"))-parseInt(o.css("padding-top"));n>i?t.length?t.css("height",i+"px").parent().css("height",i+"px"):(W.verticalCentered?e.find(k).wrapInner('<div class="'+r+'" />'):e.wrapInner('<div class="'+r+'" />'),e.find(l).slimScroll({allowPageScroll:!0,height:i+"px",size:"10px",alwaysVisible:!0})):jn(e),e.css("overflow","")}function jn(e){e.find(l).children().first().unwrap().unwrap(),e.find(c).remove(),e.find(f).remove()}function Qn(e){e.addClass(O).wrapInner('<div class="'+C+'" style="height:'+_n(e)+'px;" />')}function _n(e){var n=Ro;if(W.paddingTop||W.paddingBottom){var o=e;o.hasClass(w)||(o=e.closest(y));var t=parseInt(o.css("padding-top"))+parseInt(o.css("padding-bottom"));n=Ro-t}return n}function Gn(e,n){n?Dn(Fo):Hn(Fo),Fo.css(mo(e)),setTimeout(function(){Fo.removeClass(u)},10)}function Jn(n){var o=e(y+'[data-anchor="'+n+'"]');return o.length||(o=e(y).eq(n-1)),o}function Zn(e,n){var o=n.find(P),t=o.find(q+'[data-anchor="'+e+'"]');return t.length||(t=o.find(q).eq(e)),t}function $n(e,n){var o=Jn(e);"undefined"==typeof n&&(n=0),e===ko||o.hasClass(m)?eo(o,n):yn(o,function(){eo(o,n)})}function eo(e,n){if("undefined"!=typeof n){var o=e.find(P),t=Zn(n,e);t.length&&zn(o,t)}}function no(e,n){e.append('<div class="'+V+'"><ul></ul></div>');var o=e.find(U);o.addClass(W.slidesNavPosition);for(var t=0;n>t;t++)o.find("ul").append('<li><a href="#"><span></span></a></li>');o.css("margin-left","-"+o.width()/2+"px"),o.find("li").first().find("a").addClass(m)}function oo(e,n,o){var t="";W.anchors.length&&!W.lockAnchors&&(e?("undefined"!=typeof o&&(t=o),"undefined"==typeof n&&(n=e),Ao=n,to(t+"/"+n)):"undefined"!=typeof e?(Ao=n,to(o)):to(o)),ao()}function to(e){if(W.recordHistory)location.hash=e;else if(Bo||Mo)history.replaceState(i,i,"#"+e);else{var o=n.location.href.split("#")[0];n.location.replace(o+"#"+e)}}function io(e){var n=e.data("anchor"),o=e.index();return"undefined"==typeof n&&(n=o),n}function ao(){var n=e(x),o=n.find(z),t=n.data("anchor"),i=io(o),a=n.index(y),s=a;W.anchors.length&&(s=t),s=String(s),o.length&&(s=s+"-"+i),s=s.replace("/","-").replace("#","");var r=new RegExp("\\b\\s?"+v+"-[^\\s]+\\b","g");bo[0].className=bo[0].className.replace(r,""),bo.addClass(v+"-"+s)}function so(){var e,t=o.createElement("p"),a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};o.body.insertBefore(t,null);for(var s in a)t.style[s]!==i&&(t.style[s]="translate3d(1px,1px,1px)",e=n.getComputedStyle(t).getPropertyValue(a[s]));return o.body.removeChild(t),e!==i&&e.length>0&&"none"!==e}function ro(){o.addEventListener?(o.removeEventListener("mousewheel",gn,!1),o.removeEventListener("wheel",gn,!1),o.removeEventListener("DOMMouseScroll",gn,!1)):o.detachEvent("onmousewheel",gn)}function lo(){o.addEventListener?(o.addEventListener("mousewheel",gn,!1),o.addEventListener("wheel",gn,!1),o.addEventListener("DOMMouseScroll",gn,!1)):o.attachEvent("onmousewheel",gn)}function co(){if(Bo||Mo){var n=uo();e(s).off("touchstart "+n.down).on("touchstart "+n.down,vn),e(s).off("touchmove "+n.move).on("touchmove "+n.move,un)}}function fo(){if(Bo||Mo){var n=uo();e(s).off("touchstart "+n.down),e(s).off("touchmove "+n.move)}}function uo(){var e;return e=n.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function ho(e){var n=[];return n.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,Mo&&pn(e)&&W.scrollBar&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function po(e,n){Co.setScrollingSpeed(0,"internal"),"undefined"!=typeof n&&(qo=!0),zn(e.closest(P),e),"undefined"!=typeof n&&(qo=!1),Co.setScrollingSpeed(No.scrollingSpeed,"internal")}function vo(e){if(W.scrollBar)Fo.scrollTop(e);else if(W.css3){var n="translate3d(0px, -"+e+"px, 0px)";Gn(n,!1)}else Fo.css("top",-e)}function mo(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function go(e,n,o){switch(n){case"up":Do[o].up=e;break;case"down":Do[o].down=e;break;case"left":Do[o].left=e;break;case"right":Do[o].right=e;break;case"all":"m"==o?Co.setAllowScrolling(e):Co.setKeyboardScrolling(e)}}function So(){vo(0),e(E+", "+U+", "+N).remove(),e(y).css({height:"","background-color":"",padding:""}),e(q).css({width:""}),Fo.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),To.css({overflow:"",height:""}),e("html").removeClass(p),e.each(bo.get(0).className.split(/\s+/),function(e,n){0===n.indexOf(v)&&bo.removeClass(n)}),e(y+", "+q).each(function(){jn(e(this)),e(this).removeClass(O+" "+m)}),Hn(Fo),Fo.find(k+", "+H+", "+P).each(function(){e(this).replaceWith(this.childNodes)}),To.scrollTop(0)}function wo(e,n,o){W[e]=n,"internal"!==o&&(No[e]=n)}function yo(){W.continuousVertical&&(W.loopTop||W.loopBottom)&&(W.continuousVertical=!1,xo("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),W.scrollBar&&W.scrollOverflow&&xo("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),W.continuousVertical&&W.scrollBar&&(W.continuousVertical=!1,xo("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),e.each(W.anchors,function(n,o){(e("#"+o).length||e('[name="'+o+'"]').length)&&xo("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})}function xo(e,n){console&&console[e]&&console[e]("fullPage: "+n)}var To=e("html, body"),bo=e("body"),Co=e.fn.fullpage;W=e.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!1,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,sectionSelector:S,slideSelector:F,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},W),yo(),e.extend(e.easing,{easeInOutCubic:function(e,n,o,t,i){return(n/=i/2)<1?t/2*n*n*n+o:t/2*((n-=2)*n*n+2)+o}}),e.extend(e.easing,{easeInQuart:function(e,n,o,t,i){return t*(n/=i)*n*n*n+o}}),Co.setAutoScrolling=function(n,o){wo("autoScrolling",n,o);var t=e(x);W.autoScrolling&&!W.scrollBar?(To.css({overflow:"hidden",height:"100%"}),Co.setRecordHistory(W.recordHistory,"internal"),Fo.css({"-ms-touch-action":"none","touch-action":"none"}),t.length&&vo(t.position().top)):(To.css({overflow:"visible",height:"initial"}),Co.setRecordHistory(!1,"internal"),Fo.css({"-ms-touch-action":"","touch-action":""}),vo(0),t.length&&To.scrollTop(t.position().top))},Co.setRecordHistory=function(e,n){wo("recordHistory",e,n)},Co.setScrollingSpeed=function(e,n){wo("scrollingSpeed",e,n)},Co.setFitToSection=function(e,n){wo("fitToSection",e,n)},Co.setLockAnchors=function(e){W.lockAnchors=e},Co.setMouseWheelScrolling=function(e){e?lo():ro()},Co.setAllowScrolling=function(n,o){"undefined"!=typeof o?(o=o.replace(/ /g,"").split(","),e.each(o,function(e,o){go(n,o,"m")})):n?(Co.setMouseWheelScrolling(!0),co()):(Co.setMouseWheelScrolling(!1),fo())},Co.setKeyboardScrolling=function(n,o){"undefined"!=typeof o?(o=o.replace(/ /g,"").split(","),e.each(o,function(e,o){go(n,o,"k")})):W.keyboardScrolling=n},Co.moveSectionUp=function(){var n=e(x).prev(y);n.length||!W.loopTop&&!W.continuousVertical||(n=e(y).last()),n.length&&yn(n,null,!0)},Co.moveSectionDown=function(){var n=e(x).next(y);n.length||!W.loopBottom&&!W.continuousVertical||(n=e(y).first()),n.length&&yn(n,null,!1)},Co.silentMoveTo=function(e,n){requestAnimFrame(function(){Co.setScrollingSpeed(0,"internal")}),Co.moveTo(e,n),requestAnimFrame(function(){Co.setScrollingSpeed(No.scrollingSpeed,"internal")})},Co.moveTo=function(e,n){var o=Jn(e);"undefined"!=typeof n?$n(e,n):o.length>0&&yn(o)},Co.moveSlideRight=function(){Sn("next")},Co.moveSlideLeft=function(){Sn("prev")},Co.reBuild=function(n){if(!Fo.hasClass(h)){requestAnimFrame(function(){qo=!0});var o=$.width();Ro=$.height(),W.resize&&On(Ro,o),e(y).each(function(){var n=e(this).find(P),o=e(this).find(q);W.verticalCentered&&e(this).find(k).css("height",_n(e(this))+"px"),e(this).css("height",Ro+"px"),W.scrollOverflow&&(o.length?o.each(function(){Xn(e(this))}):Xn(e(this))),o.length>1&&zn(n,n.find(z))});var t=e(x),i=t.index(y);i&&Co.silentMoveTo(i+1),requestAnimFrame(function(){qo=!1}),e.isFunction(W.afterResize)&&n&&W.afterResize.call(Fo),e.isFunction(W.afterReBuild)&&!n&&W.afterReBuild.call(Fo)}},Co.setResponsive=function(n){var o=Fo.hasClass(d);n?o||(Co.setAutoScrolling(!1,"internal"),Co.setFitToSection(!1,"internal"),e(E).hide(),Fo.addClass(d)):o&&(Co.setAutoScrolling(No.autoScrolling,"internal"),Co.setFitToSection(No.autoScrolling,"internal"),e(E).show(),Fo.removeClass(d))};var ko,Ao,Lo,Eo=!1,Bo=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),Mo="ontouchstart"in n||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,Fo=e(this),Ro=$.height(),qo=!1,zo=!0,Io=!0,Po=[],Do={};Do.m={up:!0,down:!0,left:!0,right:!0},Do.k=e.extend(!0,{},Do.m);var Ho,Oo,Vo,Uo,Yo,Wo,No=e.extend(!0,{},W);e(this).length&&X();var Ko=!1;$.on("scroll",cn);var Xo=0,jo=0,Qo=0,_o=0,Go=(new Date).getTime();n.requestAnimFrame=function(){return n.requestAnimationFrame||function(e){e()}}(),$.on("hashchange",Mn),en.keydown(Fn),en.keyup(function(e){zo&&(Lo=e.ctrlKey)}),e(n).blur(function(){zo=!1,Lo=!1});var Wo;Fo.mousedown(function(e){2==e.which&&(Jo=e.pageY,Fo.on("mousemove",qn))}),Fo.mouseup(function(e){2==e.which&&Fo.off("mousemove")});var Jo=0;en.on("click touchstart",E+" a",function(n){n.preventDefault();var o=e(this).parent().index();yn(e(y).eq(o))}),en.on("click touchstart",Y,function(n){n.preventDefault();var o=e(this).closest(y).find(P),t=o.find(q).eq(e(this).closest("li").index());zn(o,t)}),W.normalScrollElements&&(en.on("mouseenter",W.normalScrollElements,function(){Co.setMouseWheelScrolling(!1)}),en.on("mouseleave",W.normalScrollElements,function(){Co.setMouseWheelScrolling(!0)})),e(y).on("click touchstart",N,function(){e(this).hasClass(K)?Do.m.left&&Co.moveSlideLeft():Do.m.right&&Co.moveSlideRight()}),$.resize(In);var Zo=Ro;Co.destroy=function(n){Co.setAutoScrolling(!1,"internal"),Co.setAllowScrolling(!1),Co.setKeyboardScrolling(!1),Fo.addClass(h),clearTimeout(Vo),clearTimeout(Oo),clearTimeout(Ho),clearTimeout(Uo),clearTimeout(Yo),$.off("scroll",cn).off("hashchange",Mn).off("resize",In),en.off("click",E+" a").off("mouseenter",E+" li").off("mouseleave",E+" li").off("click",Y).off("mouseover",W.normalScrollElements).off("mouseout",W.normalScrollElements),e(y).off("click",N),clearTimeout(Vo),clearTimeout(Oo),n&&So()}}});