webpackJsonp([7],{"0GFC":function(t,i){},"0mrB":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("router-view",{attrs:{isLogin:t.isLogin,userInfo:t.userInfo},on:{getUserInfo:t.getUserInfo}}),t._v(" "),e("Rain")],1)},s=[],o={render:n,staticRenderFns:s};i.a=o},"8Otp":function(t,i,e){"use strict";function n(t){e("hBxA")}var s=e("FkHa"),o=e("Ki/8"),r=e("VU/8"),a=n,h=r(s.a,o.a,!1,a,null,null);i.a=h.exports},FkHa:function(t,i,e){"use strict";i.a={name:"Rainyday"}},KETh:function(t,i){!function(t){function i(){var t,i;t=document.createElement("div"),t.innerHTML=e,e=null,(i=t.getElementsByTagName("svg")[0])&&(i.setAttribute("aria-hidden","true"),i.style.position="absolute",i.style.width=0,i.style.height=0,i.style.overflow="hidden",r(i,document.body))}var e='<svg><symbol id="icon-image" viewBox="0 0 1098 1024"><path d="M365.717333 329.152q0 45.717333-32 77.717333t-77.717333 32-77.717333-32-32-77.717333 32-77.717333 77.717333-32 77.717333 32 32 77.717333zM950.848 548.565333l0 256-804.565333 0 0-109.717333 182.848-182.848 91.434667 91.434667 292.565333-292.565333zM1005.717333 146.282667l-914.282667 0q-7.424 0-12.864 5.418667t-5.418667 12.864l0 694.848q0 7.424 5.418667 12.864t12.864 5.418667l914.282667 0q7.424 0 12.864-5.418667t5.418667-12.864l0-694.848q0-7.424-5.418667-12.864t-12.864-5.418667zM1097.152 164.565333l0 694.848q0 37.717333-26.858667 64.576t-64.576 26.858667l-914.282667 0q-37.717333 0-64.576-26.858667t-26.858667-64.576l0-694.848q0-37.717333 26.858667-64.576t64.576-26.858667l914.282667 0q37.717333 0 64.576 26.858667t26.858667 64.576z"  ></path></symbol></svg>',n=function(){var t=document.getElementsByTagName("script");return t[t.length-1]}(),s=n.getAttribute("data-injectcss"),o=function(t,i){i.parentNode.insertBefore(t,i)},r=function(t,i){i.firstChild?o(t,i.firstChild):i.appendChild(t)};if(s&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(t){console&&console.log(t)}}!function(i){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(i,0);else{var e=function t(){document.removeEventListener("DOMContentLoaded",t,!1),i()};document.addEventListener("DOMContentLoaded",e,!1)}else document.attachEvent&&function(t,i){var e=t.document,n=!1,s=function(){n||(n=!0,i())};!function t(){try{e.documentElement.doScroll("left")}catch(i){return void setTimeout(t,50)}s()}(),e.onreadystatechange=function(){"complete"==e.readyState&&(e.onreadystatechange=null,s())}}(t,i)}(i)}(window)},"Ki/8":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement;return(t._self._c||i)("img",{attrs:{src:"",alt:"",id:"rainyday"}})},s=[],o={render:n,staticRenderFns:s};i.a=o},M93x:function(t,i,e){"use strict";function n(t){e("0GFC")}var s=e("xJD8"),o=e("0mrB"),r=e("VU/8"),a=n,h=r(s.a,o.a,!1,a,null,null);i.a=h.exports},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("7+uW"),s=e("M93x"),o=e("YaEn");n.a.config.productionTip=!1,new n.a({el:"#app",router:o.a,template:"<App/>",components:{App:s.a}})},YaEn:function(t,i,e){"use strict";var n=e("7+uW"),s=e("/ocq"),o=function(t){return e.e(1).then(function(){return t(e("psOb"))}.bind(null,e)).catch(e.oe)},r=function(t){return e.e(2).then(function(){return t(e("Asuo"))}.bind(null,e)).catch(e.oe)},a=function(t){return e.e(4).then(function(){return t(e("SGec"))}.bind(null,e)).catch(e.oe)},h=function(t){return e.e(3).then(function(){return t(e("sKU7"))}.bind(null,e)).catch(e.oe)},c=function(t){return e.e(0).then(function(){return t(e("AJqI"))}.bind(null,e)).catch(e.oe)};n.a.use(s.a);var l=new s.a({mode:"history",routes:[{path:"*",name:"",component:h},{path:"/",name:"blog",component:a},{path:"/signup",name:"signup",component:o},{path:"/signin",name:"signin",component:r},{path:"/edit",name:"edit",component:c}]});l.beforeEach(function(t,i,e){sessionStorage.getItem("isLogin")&&~["signin","signup"].indexOf(t.name)&&e({path:"/"}),e()}),i.a=l},hBxA:function(t,i){},wJVV:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),function(t){var i=e("pFYg"),n=e.n(i);!function(i,s){"object"===("undefined"==typeof exports?"undefined":n()(exports))&&void 0!==t?t.exports=s():"function"==typeof define&&e("nErl")?define(s):i.RainyDay=s()}(this,function(t,i){function e(t,i){if(this===window)return new e(t,i);this.img=t.image;var n={opacity:1,blur:10,crop:[0,0,this.img.naturalWidth,this.img.naturalHeight],enableSizeChange:!0,parentElement:document.getElementsByTagName("body")[0],fps:30,fillStyle:"#8ED6FF",enableCollisions:!0,gravityThreshold:3,gravityAngle:Math.PI/2,gravityAngleVariance:0,reflectionScaledownFactor:5,reflectionDropMappingWidth:200,reflectionDropMappingHeight:200,width:this.img.clientWidth,height:this.img.clientHeight,position:"absolute",top:0,left:0};for(var s in n)void 0===t[s]&&(t[s]=n[s]);this.options=t,this.drops=[],this.canvas=i||this.prepareCanvas(),this.prepareBackground(),this.prepareGlass(),this.reflection=this.REFLECTION_MINIATURE,this.trail=this.TRAIL_DROPS,this.gravity=this.GRAVITY_NON_LINEAR,this.collision=this.COLLISION_SIMPLE,this.setRequestAnimFrame()}function n(t,i,e,n,s){this.x=Math.floor(i),this.y=Math.floor(e),this.r=Math.random()*s+n,this.rainyday=t,this.context=t.context,this.reflection=t.reflected}function s(){this.r=0,this.g=0,this.b=0,this.next=null}function o(t,i,e){this.resolution=e,this.xc=t,this.yc=i,this.matrix=new Array(t);for(var n=0;n<=t+5;n++){this.matrix[n]=new Array(i);for(var s=0;s<=i+5;++s)this.matrix[n][s]=new r(null)}}function r(t){this.drop=t,this.next=null}return e.prototype.prepareCanvas=function(){var t=document.createElement("canvas");return t.style.position=this.options.position,t.style.top=this.options.top,t.style.left=this.options.left,t.width=this.options.width,t.height=this.options.height,this.options.parentElement.appendChild(t),this.options.enableSizeChange&&this.setResizeHandler(),t},e.prototype.setResizeHandler=function(){null!==window.onresize?window.setTimeout(this.checkSize.bind(this),100):(window.onresize=this.checkSize.bind(this),window.onorientationchange=this.checkSize.bind(this))},e.prototype.checkSize=function(){var t=this.img.clientWidth,i=this.img.clientHeight,e=(this.img.offsetLeft,this.img.offsetTop,this.canvas.width),n=this.canvas.height;this.canvas.offsetLeft,this.canvas.offsetTop;e===t&&n===i||(this.canvas.width=t,this.canvas.height=i,this.prepareBackground(),this.glass.width=this.canvas.width,this.glass.height=this.canvas.height,this.prepareReflections())},e.prototype.animateDrops=function(){this.addDropCallback&&this.addDropCallback();for(var t=this.drops.slice(),i=[],e=0;e<t.length;++e)t[e].animate()&&i.push(t[e]);this.drops=i,this.requestID=window.requestAnimFrame(this.animateDrops.bind(this))},e.prototype.pause=function(){window.cancelAnimationFrame(this.requestID)},e.prototype.resume=function(){this.requestID=window.requestAnimFrame(this.animateDrops.bind(this))},e.prototype.setRequestAnimFrame=function(){var t=this.options.fps;window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(i){window.setTimeout(i,1e3/t)}}()},e.prototype.prepareReflections=function(){this.reflected=document.createElement("canvas"),this.reflected.width=this.canvas.width/this.options.reflectionScaledownFactor,this.reflected.height=this.canvas.height/this.options.reflectionScaledownFactor,this.reflected.getContext("2d").drawImage(this.img,this.options.crop[0],this.options.crop[1],this.options.crop[2],this.options.crop[3],0,0,this.reflected.width,this.reflected.height)},e.prototype.prepareGlass=function(){this.glass=document.createElement("canvas"),this.glass.width=this.canvas.width,this.glass.height=this.canvas.height,this.context=this.glass.getContext("2d")},e.prototype.rain=function(t,i){if(this.reflection!==this.REFLECTION_NONE&&this.prepareReflections(),this.animateDrops(),this.presets=t,this.PRIVATE_GRAVITY_FORCE_FACTOR_Y=.001*this.options.fps/25,this.PRIVATE_GRAVITY_FORCE_FACTOR_X=(Math.PI/2-this.options.gravityAngle)*(.001*this.options.fps)/50,this.options.enableCollisions){for(var e=0,s=0;s<t.length;s++)t[s][0]+t[s][1]>e&&(e=Math.floor(t[s][0]+t[s][1]));if(e>0){var r=Math.ceil(this.canvas.width/e),a=Math.ceil(this.canvas.height/e);this.matrix=new o(r,a,e)}else this.options.enableCollisions=!1}for(var s=0;s<t.length;s++)t[s][3]||(t[s][3]=-1);var h=0;this.addDropCallback=function(){var e=(new Date).getTime();if(!(e-h<i)){h=e;var s=this.canvas.getContext("2d");s.clearRect(0,0,this.canvas.width,this.canvas.height),s.drawImage(this.background,0,0,this.canvas.width,this.canvas.height);for(var o,r=0;r<t.length;r++)if(t[r][2]>1||-1===t[r][3]){if(0!==t[r][3]){t[r][3]--;for(var a=0;a<t[r][2];++a)this.putDrop(new n(this,Math.random()*this.canvas.width,Math.random()*this.canvas.height,t[r][0],t[r][1]))}}else if(Math.random()<t[r][2]){o=t[r];break}o&&this.putDrop(new n(this,Math.random()*this.canvas.width,Math.random()*this.canvas.height,o[0],o[1])),s.save(),s.globalAlpha=this.options.opacity,s.drawImage(this.glass,0,0,this.canvas.width,this.canvas.height),s.restore()}}.bind(this)},e.prototype.putDrop=function(t){t.draw(),this.gravity&&t.r>this.options.gravityThreshold&&(this.options.enableCollisions&&this.matrix.update(t),this.drops.push(t))},e.prototype.clearDrop=function(t,i){var e=t.clear(i);if(e){var n=this.drops.indexOf(t);n>=0&&this.drops.splice(n,1)}return e},n.prototype.draw=function(){this.context.save(),this.context.beginPath();var t=this.r;if(this.r=.95*this.r,this.r<3)this.context.arc(this.x,this.y,this.r,0,2*Math.PI,!0),this.context.closePath();else if(this.colliding||this.yspeed>2){if(this.colliding){var i=this.colliding;this.r=1.001*(this.r>i.r?this.r:i.r),this.x+=i.x-this.x,this.colliding=null}var e=1+.1*this.yspeed;this.context.moveTo(this.x-this.r/e,this.y),this.context.bezierCurveTo(this.x-this.r,this.y-2*this.r,this.x+this.r,this.y-2*this.r,this.x+this.r/e,this.y),this.context.bezierCurveTo(this.x+this.r,this.y+e*this.r,this.x-this.r,this.y+e*this.r,this.x-this.r/e,this.y)}else this.context.arc(this.x,this.y,.9*this.r,0,2*Math.PI,!0),this.context.closePath();this.context.clip(),this.r=t,this.rainyday.reflection&&this.rainyday.reflection(this),this.context.restore()},n.prototype.clear=function(t){return this.context.clearRect(this.x-this.r-1,this.y-this.r-2,2*this.r+2,2*this.r+2),t?(this.terminate=!0,!0):this.y-this.r>this.rainyday.canvas.height||this.x-this.r>this.rainyday.canvas.width||this.x+this.r<0},n.prototype.animate=function(){if(this.terminate)return!1;var t=this.rainyday.gravity(this);if(!t&&this.rainyday.trail&&this.rainyday.trail(this),this.rainyday.options.enableCollisions){var i=this.rainyday.matrix.update(this,t);i&&this.rainyday.collision(this,i)}return!t||this.terminate},e.prototype.TRAIL_NONE=function(){},e.prototype.TRAIL_DROPS=function(t){(!t.trailY||t.y-t.trailY>=100*Math.random()*t.r)&&(t.trailY=t.y,this.putDrop(new n(this,t.x+(2*Math.random()-1)*Math.random(),t.y-t.r-5,Math.ceil(t.r/5),0)))},e.prototype.TRAIL_SMUDGE=function(t){var i=t.y-t.r-3,e=t.x-t.r/2+2*Math.random();i<0||e<0||this.context.drawImage(this.clearbackground,e,i,t.r,2,e,i,t.r,2)},e.prototype.GRAVITY_NONE=function(){return!0},e.prototype.GRAVITY_LINEAR=function(t){return!!this.clearDrop(t)||(t.yspeed?(t.yspeed+=this.PRIVATE_GRAVITY_FORCE_FACTOR_Y*Math.floor(t.r),t.xspeed+=this.PRIVATE_GRAVITY_FORCE_FACTOR_X*Math.floor(t.r)):(t.yspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_Y,t.xspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_X),t.y+=t.yspeed,t.draw(),!1)},e.prototype.GRAVITY_NON_LINEAR=function(t){return!!this.clearDrop(t)||(t.collided?(t.collided=!1,t.seed=Math.floor(t.r*Math.random()*this.options.fps),t.skipping=!1,t.slowing=!1):(!t.seed||t.seed<0)&&(t.seed=Math.floor(t.r*Math.random()*this.options.fps),t.skipping=!1===t.skipping,t.slowing=!0),t.seed--,t.yspeed?t.slowing?(t.yspeed/=1.1,t.xspeed/=1.1,t.yspeed<this.PRIVATE_GRAVITY_FORCE_FACTOR_Y&&(t.slowing=!1)):t.skipping?(t.yspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_Y,t.xspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_X):(t.yspeed+=1*this.PRIVATE_GRAVITY_FORCE_FACTOR_Y*Math.floor(t.r),t.xspeed+=1*this.PRIVATE_GRAVITY_FORCE_FACTOR_X*Math.floor(t.r)):(t.yspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_Y,t.xspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_X),0!==this.options.gravityAngleVariance&&(t.xspeed+=(2*Math.random()-1)*t.yspeed*this.options.gravityAngleVariance),t.y+=t.yspeed,t.x+=t.xspeed,t.draw(),!1)},e.prototype.positiveMin=function(t,i){var e=0;return e=t<i?t<=0?i:t:i<=0?t:i,e<=0?1:e},e.prototype.REFLECTION_NONE=function(){this.context.fillStyle=this.options.fillStyle,this.context.fill()},e.prototype.REFLECTION_MINIATURE=function(t){var i=Math.max((t.x-this.options.reflectionDropMappingWidth)/this.options.reflectionScaledownFactor,0),e=Math.max((t.y-this.options.reflectionDropMappingHeight)/this.options.reflectionScaledownFactor,0),n=this.positiveMin(2*this.options.reflectionDropMappingWidth/this.options.reflectionScaledownFactor,this.reflected.width-i),s=this.positiveMin(2*this.options.reflectionDropMappingHeight/this.options.reflectionScaledownFactor,this.reflected.height-e),o=Math.max(t.x-1.1*t.r,0),r=Math.max(t.y-1.1*t.r,0);this.context.drawImage(this.reflected,i,e,n,s,o,r,2*t.r,2*t.r)},e.prototype.COLLISION_SIMPLE=function(t,i){for(var e,n=i;null!=n;){var s=n.drop,o=t.r+s.r,r=t.x-s.x,a=t.y-s.y;if(Math.abs(r)<o&&Math.abs(a)<o&&Math.sqrt(Math.pow(t.x-s.x,2)+Math.pow(t.y-s.y,2))<t.r+s.r){e=s;break}n=n.next}if(e){var h,c;t.y>e.y?(h=t,c=e):(h=e,c=t),this.clearDrop(c),this.clearDrop(h,!0),this.matrix.remove(h),c.draw(),c.colliding=h,c.collided=!0}},e.prototype.prepareBackground=function(){this.background=document.createElement("canvas"),this.background.width=this.canvas.width,this.background.height=this.canvas.height,this.clearbackground=document.createElement("canvas"),this.clearbackground.width=this.canvas.width,this.clearbackground.height=this.canvas.height;var t=this.background.getContext("2d");t.clearRect(0,0,this.canvas.width,this.canvas.height),t.drawImage(this.img,this.options.crop[0],this.options.crop[1],this.options.crop[2],this.options.crop[3],0,0,this.canvas.width,this.canvas.height),t=this.clearbackground.getContext("2d"),t.clearRect(0,0,this.canvas.width,this.canvas.height),t.drawImage(this.img,this.options.crop[0],this.options.crop[1],this.options.crop[2],this.options.crop[3],0,0,this.canvas.width,this.canvas.height),!isNaN(this.options.blur)&&this.options.blur>=1&&this.stackBlurCanvasRGB(this.canvas.width,this.canvas.height,this.options.blur)},e.prototype.stackBlurCanvasRGB=function(t,i,e){var n=[[0,9],[1,11],[2,12],[3,13],[5,14],[7,15],[11,16],[15,17],[22,18],[31,19],[45,20],[63,21],[90,22],[127,23],[181,24]],o=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];e|=0;var r,a,h,c,l,p,d,u,f,g,m,y,v,x,w,_,R,A,I,C,b=this.background.getContext("2d"),T=b.getImageData(0,0,t,i),E=T.data,M=e+1,O=M*(M+1)/2,F=new s,D=new s,S=F;for(h=1;h<2*e+1;h++)S=S.next=new s,h===M&&(D=S);S.next=F;var V=null,k=null;d=p=0;for(var L,N=o[e],Y=0;Y<n.length;++Y)if(e<=n[Y][0]){L=n[Y-1][1];break}for(a=0;a<i;a++){for(x=w=_=u=f=g=0,m=M*(R=E[p]),y=M*(A=E[p+1]),v=M*(I=E[p+2]),u+=O*R,f+=O*A,g+=O*I,S=F,h=0;h<M;h++)S.r=R,S.g=A,S.b=I,S=S.next;for(h=1;h<M;h++)c=p+((t-1<h?t-1:h)<<2),u+=(S.r=R=E[c])*(C=M-h),f+=(S.g=A=E[c+1])*C,g+=(S.b=I=E[c+2])*C,x+=R,w+=A,_+=I,S=S.next;for(V=F,k=D,r=0;r<t;r++)E[p]=u*N>>L,E[p+1]=f*N>>L,E[p+2]=g*N>>L,u-=m,f-=y,g-=v,m-=V.r,y-=V.g,v-=V.b,c=d+((c=r+e+1)<t-1?c:t-1)<<2,x+=V.r=E[c],w+=V.g=E[c+1],_+=V.b=E[c+2],u+=x,f+=w,g+=_,V=V.next,m+=R=k.r,y+=A=k.g,v+=I=k.b,x-=R,w-=A,_-=I,k=k.next,p+=4;d+=t}for(r=0;r<t;r++){for(w=_=x=f=g=u=0,p=r<<2,m=M*(R=E[p]),y=M*(A=E[p+1]),v=M*(I=E[p+2]),u+=O*R,f+=O*A,g+=O*I,S=F,h=0;h<M;h++)S.r=R,S.g=A,S.b=I,S=S.next;for(l=t,h=1;h<M;h++)p=l+r<<2,u+=(S.r=R=E[p])*(C=M-h),f+=(S.g=A=E[p+1])*C,g+=(S.b=I=E[p+2])*C,x+=R,w+=A,_+=I,S=S.next,h<i-1&&(l+=t);for(p=r,V=F,k=D,a=0;a<i;a++)c=p<<2,E[c]=u*N>>L,E[c+1]=f*N>>L,E[c+2]=g*N>>L,u-=m,f-=y,g-=v,m-=V.r,y-=V.g,v-=V.b,c=r+((c=a+M)<i-1?c:i-1)*t<<2,u+=x+=V.r=E[c],f+=w+=V.g=E[c+1],g+=_+=V.b=E[c+2],V=V.next,m+=R=k.r,y+=A=k.g,v+=I=k.b,x-=R,w-=A,_-=I,k=k.next,p+=t}b.putImageData(T,0,0)},o.prototype.update=function(t,i){if(t.gid){if(!this.matrix[t.gmx]||!this.matrix[t.gmx][t.gmy])return null;if(this.matrix[t.gmx][t.gmy].remove(t),i)return null;if(t.gmx=Math.floor(t.x/this.resolution),t.gmy=Math.floor(t.y/this.resolution),!this.matrix[t.gmx]||!this.matrix[t.gmx][t.gmy])return null;this.matrix[t.gmx][t.gmy].add(t);var e=this.collisions(t);if(e&&null!=e.next)return e.next}else{if(t.gid=Math.random().toString(36).substr(2,9),t.gmx=Math.floor(t.x/this.resolution),t.gmy=Math.floor(t.y/this.resolution),!this.matrix[t.gmx]||!this.matrix[t.gmx][t.gmy])return null;this.matrix[t.gmx][t.gmy].add(t)}return null},o.prototype.collisions=function(t){var i=new r(null),e=i;return i=this.addAll(i,t.gmx-1,t.gmy+1),i=this.addAll(i,t.gmx,t.gmy+1),i=this.addAll(i,t.gmx+1,t.gmy+1),e},o.prototype.addAll=function(t,i,e){if(i>0&&e>0&&i<this.xc&&e<this.yc)for(var n=this.matrix[i][e];null!=n.next;)n=n.next,t.next=new r(n.drop),t=t.next;return t},o.prototype.remove=function(t){this.matrix[t.gmx][t.gmy].remove(t)},r.prototype.add=function(t){for(var i=this;null!=i.next;)i=i.next;i.next=new r(t)},r.prototype.remove=function(t){for(var i=this,e=null;null!=i.next;)e=i,i=i.next,i.drop.gid===t.gid&&(e.next=i.next)},e})}.call(i,e("f1Eh")(t))},xJD8:function(t,i,e){"use strict";var n,s=e("8Otp"),o=e("KETh"),r=(e.n(o),e("7t+N")),a=(e.n(r),e("wJVV").RainyDay),h={path:"http://image.lcddjm.com/qnimg/",names:["20171010-DSC_2019.jpg","20171010-DSC_2020.jpg","20171010-DSC_2068.jpg","20171010-DSC_2075.jpg","20171010-DSC_2077.jpg","20171010-DSC_2078.jpg","20171010-DSC_2085.jpg","20171010-DSC_2091.jpg","20171010-DSC_2190.jpg","20171010-DSC_2198.jpg","20171010-DSC_2223.jpg","20171010-DSC_2357.jpg","20171011-DSC_2363.jpg","20171011-DSC_2367.jpg"]};i.a={name:"app",data:function(){return{userInfo:"",isLogin:!1}},created:function(){},mounted:function(){this.getUserInfo(),this.$nextTick(function(){var t=this,i=document.querySelector("#rainyday");i.onload=function(){n=new a({image:i,height:window.innerHeight,width:window.innerWidth}),n.canvas.id="rainCanvas",~["signin","signup"].indexOf(t.$route.name)?n.canvas.style.display="block":n.canvas.style.display="none",n.rain([[3,3,.88],[5,5,.9],[6,2,1]],100),this.crossOrigin="anonymous",this.style.visibility="hidden"},i.crossOrigin="Anonymous",i.src=h.path+h.names[Math.floor(Math.random()*h.names.length)]})},methods:{getUserInfo:function(){var t=this;fetch("/api/get_user_info",{credentials:"include"}).then(function(t){return t.json()}).then(function(i){200===i.code?(t.userInfo=i.data,t.isLogin=!0,sessionStorage.setItem("isLogin","1")):(t.userInfo="",t.isLogin=!1,sessionStorage.removeItem("isLogin"))}).catch(function(t){console.log(t)})}},watch:{$route:function(){n&&(~["signin","signup"].indexOf(this.$route.name)?n.canvas.style.display="block":n.canvas.style.display="none")}},components:{Rain:s.a}}}},["NHnr"]);
//# sourceMappingURL=app.69fa0a995d566defbcf4.js.map