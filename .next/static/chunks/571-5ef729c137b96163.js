(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[571],{7760:function(e,t){"use strict";var r={protan:{x:.7465,y:.2535,m:1.273463,yi:-.073894},deutan:{x:1.4,y:-.4,m:.968437,yi:.003331},tritan:{x:.1748,y:0,m:.062921,yi:.292119},custom:{x:.735,y:.265,m:-1.059259,yi:1.026914}},n=function(e){var t={},r=e.R/255,n=e.G/255,a=e.B/255;return r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,a=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92,t.X=.41242371206635076*r+.3575793401363035*n+.1804662232369621*a,t.Y=.21265606784927693*r+.715157818248362*n+.0721864539171564*a,t.Z=.019331987577444885*r+.11919267420354762*n+.9504491124870351*a,t},a=function(e){var t=e.X+e.Y+e.Z;return 0===t?{x:0,y:0,Y:e.Y}:{x:e.X/t,y:e.Y/t,Y:e.Y}};t.a=function(e,t,o){var i,u,s,l,f,c,h,d,p,g,b,v,_,m,y,w,x,k,M,C;return"achroma"===t?(i={R:i=.212656*e.R+.715158*e.G+.072186*e.B,G:i,B:i},o&&(s=(u=1.75)+1,i.R=(u*i.R+e.R)/s,i.G=(u*i.G+e.G)/s,i.B=(u*i.B+e.B)/s),i):(l=r[t],c=((f=a(n(e))).y-l.y)/(f.x-l.x),h=f.y-f.x*c,d=(l.yi-h)/(c-l.m),p=c*d+h,(i={}).X=d*f.Y/p,i.Y=f.Y,i.Z=(1-(d+p))*f.Y/p,k=.312713*f.Y/.329016,M=.358271*f.Y/.329016,v=3.240712470389558*(g=k-i.X)+-0+-.49857440415943116*(b=M-i.Z),_=-.969259258688888*g+0+.041556132211625726*b,m=.05563600315398933*g+-0+1.0570636917433989*b,i.R=3.240712470389558*i.X+-1.5372626602963142*i.Y+-.49857440415943116*i.Z,i.G=-.969259258688888*i.X+1.875996969313966*i.Y+.041556132211625726*i.Z,i.B=.05563600315398933*i.X+-.2039948802843549*i.Y+1.0570636917433989*i.Z,y=((i.R<0?0:1)-i.R)/v,w=((i.G<0?0:1)-i.G)/_,(x=(x=((i.B<0?0:1)-i.B)/m)>1||x<0?0:x)>(C=(y=y>1||y<0?0:y)>(w=w>1||w<0?0:w)?y:w)&&(C=x),i.R+=C*v,i.G+=C*_,i.B+=C*m,i.R=255*(i.R<=0?0:i.R>=1?1:Math.pow(i.R,.45454545454545453)),i.G=255*(i.G<=0?0:i.G>=1?1:Math.pow(i.G,.45454545454545453)),i.B=255*(i.B<=0?0:i.B>=1?1:Math.pow(i.B,.45454545454545453)),o&&(s=(u=1.75)+1,i.R=(u*i.R+e.R)/s,i.G=(u*i.G+e.G)/s,i.B=(u*i.B+e.B)/s),i)}},1450:function(e,t,r){"use strict";var n=r(4314),a=r(7760).a,o={protanomaly:{type:"protan",anomalize:!0},protanopia:{type:"protan"},deuteranomaly:{type:"deutan",anomalize:!0},deuteranopia:{type:"deutan"},tritanomaly:{type:"tritan",anomalize:!0},tritanopia:{type:"tritan"},achromatomaly:{type:"achroma",anomalize:!0},achromatopsia:{type:"achroma"}},i=function(e){return Math.round(255*e)},u=function(e){return function(t,r){var u=n(t);if(!u)return r?{R:0,G:0,B:0}:"#000000";var s=new a({R:i(u.red()||0),G:i(u.green()||0),B:i(u.blue()||0)},o[e].type,o[e].anomalize);return(s.R=s.R||0,s.G=s.G||0,s.B=s.B||0,r)?(delete s.X,delete s.Y,delete s.Z,s):new n.RGB(s.R%256/255,s.G%256/255,s.B%256/255,1).hex()}};for(var s in o)t[s]=u(s)},4314:function(e,t,r){e.exports=r(2172).use(r(1794)).use(r(8870)).use(r(654)).use(r(5305)).use(r(4775)).use(r(2861)).use(r(3700)).use(r(8195)).use(r(2986)).use(r(5632)).use(r(4157)).use(r(2411)).use(r(8508)).use(r(4115)).use(r(5201)).use(r(4209)).use(r(4593)).use(r(3467)).use(r(991)).use(r(8532)).use(r(2810))},4775:function(e){e.exports=function(e){e.installColorSpace("CMYK",["cyan","magenta","yellow","black","alpha"],{rgb:function(){return new e.RGB(1-this._cyan*(1-this._black)-this._black,1-this._magenta*(1-this._black)-this._black,1-this._yellow*(1-this._black)-this._black,this._alpha)},fromRgb:function(){var t=this._red,r=this._green,n=this._blue,a=1-t,o=1-r,i=1-n,u=1;return t||r||n?(u=Math.min(a,Math.min(o,i)),a=(a-u)/(1-u),o=(o-u)/(1-u),i=(i-u)/(1-u)):u=1,new e.CMYK(a,o,i,u,this._alpha)}})}},5305:function(e,t,r){e.exports=function(e){e.use(r(654)),e.installColorSpace("HSL",["hue","saturation","lightness","alpha"],{hsv:function(){var t=2*this._lightness,r=this._saturation*(t<=1?t:2-t);return new e.HSV(this._hue,t+r<1e-9?0:2*r/(t+r),(t+r)/2,this._alpha)},rgb:function(){return this.hsv().rgb()},fromRgb:function(){return this.hsv().hsl()}})}},654:function(e){e.exports=function(e){e.installColorSpace("HSV",["hue","saturation","value","alpha"],{rgb:function(){var t,r,n,a=this._hue,o=this._saturation,i=this._value,u=Math.min(5,Math.floor(6*a)),s=6*a-u,l=i*(1-o),f=i*(1-s*o),c=i*(1-(1-s)*o);switch(u){case 0:t=i,r=c,n=l;break;case 1:t=f,r=i,n=l;break;case 2:t=l,r=i,n=c;break;case 3:t=l,r=f,n=i;break;case 4:t=c,r=l,n=i;break;case 5:t=i,r=l,n=f}return new e.RGB(t,r,n,this._alpha)},hsl:function(){var t=(2-this._saturation)*this._value,r=this._saturation*this._value,n=t<=1?t:2-t;return new e.HSL(this._hue,n<1e-9?0:r/n,t/2,this._alpha)},fromRgb:function(){var t,r=this._red,n=this._green,a=this._blue,o=Math.max(r,n,a),i=o-Math.min(r,n,a);if(0===i)t=0;else switch(o){case r:t=(n-a)/i/6+(n<a?1:0);break;case n:t=(a-r)/i/6+1/3;break;case a:t=(r-n)/i/6+2/3}return new e.HSV(t,0===o?0:i/o,o,this._alpha)}})}},8870:function(e,t,r){e.exports=function(e){e.use(r(1794)),e.installColorSpace("LAB",["l","a","b","alpha"],{fromRgb:function(){return this.xyz().lab()},rgb:function(){return this.xyz().rgb()},xyz:function(){var t=function(e){var t=Math.pow(e,3);return t>.008856?t:(e-16/116)/7.87},r=(this._l+16)/116,n=this._a/500+r,a=r-this._b/200;return new e.XYZ(95.047*t(n),100*t(r),108.883*t(a),this._alpha)}})}},1794:function(e){e.exports=function(e){e.installColorSpace("XYZ",["x","y","z","alpha"],{fromRgb:function(){var t=function(e){return e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92},r=t(this._red),n=t(this._green),a=t(this._blue);return new e.XYZ(.4124564*r+.3575761*n+.1804375*a,.2126729*r+.7151522*n+.072175*a,.0193339*r+.119192*n+.9503041*a,this._alpha)},rgb:function(){var t=this._x,r=this._y,n=this._z,a=function(e){return e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e};return new e.RGB(a(3.2404542*t+-1.5371385*r+-.4985314*n),a(-.969266*t+1.8760108*r+.041556*n),a(.0556434*t+-.2040259*r+1.0572252*n),this._alpha)},lab:function(){var t=function(e){return e>.008856?Math.pow(e,1/3):7.787037*e+4/29},r=t(this._x/95.047),n=t(this._y/100),a=t(this._z/108.883);return new e.LAB(116*n-16,500*(r-n),200*(n-a),this._alpha)}})}},2172:function(e){var t=[],r=function(e){return void 0===e},n=/\s*(\.\d+|\d+(?:\.\d+)?)(%)?\s*/,a=/\s*(\.\d+|100|\d?\d(?:\.\d+)?)%\s*/,o=RegExp("^(rgb|hsl|hsv)a?\\("+n.source+","+n.source+","+n.source+"(?:,"+/\s*(\.\d+|\d+(?:\.\d+)?)\s*/.source+")?\\)$","i");function i(e){if(Array.isArray(e)){if("string"==typeof e[0]&&"function"==typeof i[e[0]])return new i[e[0]](e.slice(1,e.length));if(4===e.length)return new i.RGB(e[0]/255,e[1]/255,e[2]/255,e[3]/255)}else if("string"==typeof e){var t=e.toLowerCase();i.namedColors[t]&&(e="#"+i.namedColors[t]),"transparent"===t&&(e="rgba(0,0,0,0)");var n=e.match(o);if(n){var u=n[1].toUpperCase(),s=r(n[8])?n[8]:parseFloat(n[8]),l="H"===u[0],f=n[3]?100:l?360:255,c=n[5]||l?100:255,h=n[7]||l?100:255;if(r(i[u]))throw Error("color."+u+" is not installed.");return new i[u](parseFloat(n[2])/f,parseFloat(n[4])/c,parseFloat(n[6])/h,s)}e.length<6&&(e=e.replace(/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i,"$1$1$2$2$3$3"));var d=e.match(/^#?([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])$/i);if(d)return new i.RGB(parseInt(d[1],16)/255,parseInt(d[2],16)/255,parseInt(d[3],16)/255);if(i.CMYK){var p=e.match(RegExp("^cmyk\\("+a.source+","+a.source+","+a.source+","+a.source+"\\)$","i"));if(p)return new i.CMYK(parseFloat(p[1])/100,parseFloat(p[2])/100,parseFloat(p[3])/100,parseFloat(p[4])/100)}}else if("object"==typeof e&&e.isColor)return e;return!1}i.namedColors={},i.installColorSpace=function(e,n,a){i[e]=function(t){var r=Array.isArray(t)?t:arguments;n.forEach(function(t,a){var o=r[a];if("alpha"===t)this._alpha=isNaN(o)||o>1?1:o<0?0:o;else{if(isNaN(o))throw Error("["+e+"]: Invalid color: ("+n.join(",")+")");"hue"===t?this._hue=o<0?o-Math.floor(o):o%1:this["_"+t]=o<0?0:o>1?1:o}},this)},i[e].propertyNames=n;var o=i[e].prototype;for(var u in["valueOf","hex","hexa","css","cssa"].forEach(function(t){o[t]=o[t]||("RGB"===e?o.hex:function(){return this.rgb()[t]()})}),o.isColor=!0,o.equals=function(t,a){r(a)&&(a=1e-10),t=t[e.toLowerCase()]();for(var o=0;o<n.length;o+=1)if(Math.abs(this["_"+n[o]]-t["_"+n[o]])>a)return!1;return!0},o.toJSON=function(){return[e].concat(n.map(function(e){return this["_"+e]},this))},a)if(a.hasOwnProperty(u)){var s=u.match(/^from(.*)$/);s?i[s[1].toUpperCase()].prototype[e.toLowerCase()]=a[u]:o[u]=a[u]}function l(e,t){var r={};for(var n in r[t.toLowerCase()]=function(){return this.rgb()[t.toLowerCase()]()},i[t].propertyNames.forEach(function(e){var n="black"===e?"k":e.charAt(0);r[e]=r[n]=function(r,n){return this[t.toLowerCase()]()[e](r,n)}}),r)r.hasOwnProperty(n)&&void 0===i[e].prototype[n]&&(i[e].prototype[n]=r[n])}return o[e.toLowerCase()]=function(){return this},o.toString=function(){return"["+e+" "+n.map(function(e){return this["_"+e]},this).join(", ")+"]"},n.forEach(function(e){var t="black"===e?"k":e.charAt(0);o[e]=o[t]=function(t,r){return void 0===t?this["_"+e]:new this.constructor(r?n.map(function(r){return this["_"+r]+(e===r?t:0)},this):n.map(function(r){return e===r?t:this["_"+r]},this))}}),t.forEach(function(t){l(e,t),l(t,e)}),t.push(e),i},i.pluginList=[],i.use=function(e){return -1===i.pluginList.indexOf(e)&&(this.pluginList.push(e),e(i)),i},i.installMethod=function(e,r){return t.forEach(function(t){i[t].prototype[e]=r}),this},i.installColorSpace("RGB",["red","green","blue","alpha"],{hex:function(){var e=(65536*Math.round(255*this._red)+256*Math.round(255*this._green)+Math.round(255*this._blue)).toString(16);return"#"+"00000".substr(0,6-e.length)+e},hexa:function(){var e=Math.round(255*this._alpha).toString(16);return"#"+"00".substr(0,2-e.length)+e+this.hex().substr(1,6)},css:function(){return"rgb("+Math.round(255*this._red)+","+Math.round(255*this._green)+","+Math.round(255*this._blue)+")"},cssa:function(){return"rgba("+Math.round(255*this._red)+","+Math.round(255*this._green)+","+Math.round(255*this._blue)+","+this._alpha+")"}}),e.exports=i},3700:function(e){e.exports=function(e){e.installMethod("clearer",function(e){return this.alpha(isNaN(e)?-.1:-e,!0)})}},8195:function(e,t,r){e.exports=function(e){e.use(r(5201)),e.installMethod("contrast",function(e){var t=this.luminance(),r=e.luminance();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)})}},2986:function(e,t,r){e.exports=function(e){e.use(r(5305)),e.installMethod("darken",function(e){return this.lightness(isNaN(e)?-.1:-e,!0)})}},5632:function(e,t,r){e.exports=function(e){e.use(r(5305)),e.installMethod("desaturate",function(e){return this.saturation(isNaN(e)?-.1:-e,!0)})}},4157:function(e){e.exports=function(e){function t(){var t=this.rgb(),r=.3*t._red+.59*t._green+.11*t._blue;return new e.RGB(r,r,r,t._alpha)}e.installMethod("greyscale",t).installMethod("grayscale",t)}},2411:function(e){e.exports=function(e){e.installMethod("isDark",function(){var e=this.rgb();return(76245*e._red+149685*e._green+29070*e._blue)/1e3<128})}},8508:function(e,t,r){e.exports=function(e){e.use(r(2411)),e.installMethod("isLight",function(){return!this.isDark()})}},4115:function(e,t,r){e.exports=function(e){e.use(r(5305)),e.installMethod("lighten",function(e){return this.lightness(isNaN(e)?.1:e,!0)})}},5201:function(e){e.exports=function(e){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}e.installMethod("luminance",function(){var e=this.rgb();return .2126*t(e._red)+.7152*t(e._green)+.0722*t(e._blue)})}},4209:function(e){e.exports=function(e){e.installMethod("mix",function(t,r){t=e(t).rgb();var n=2*(r=1-(isNaN(r)?.5:r))-1,a=this._alpha-t._alpha,o=((n*a==-1?n:(n+a)/(1+n*a))+1)/2,i=1-o,u=this.rgb();return new e.RGB(u._red*o+t._red*i,u._green*o+t._green*i,u._blue*o+t._blue*i,u._alpha*r+t._alpha*(1-r))})}},2861:function(e){e.exports=function(e){e.namedColors={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"}}},4593:function(e){e.exports=function(e){e.installMethod("negate",function(){var t=this.rgb();return new e.RGB(1-t._red,1-t._green,1-t._blue,this._alpha)})}},3467:function(e){e.exports=function(e){e.installMethod("opaquer",function(e){return this.alpha(isNaN(e)?.1:e,!0)})}},991:function(e,t,r){e.exports=function(e){e.use(r(5305)),e.installMethod("rotate",function(e){return this.hue((e||0)/360,!0)})}},8532:function(e,t,r){e.exports=function(e){e.use(r(5305)),e.installMethod("saturate",function(e){return this.saturation(isNaN(e)?.1:e,!0)})}},2810:function(e){e.exports=function(e){e.installMethod("toAlpha",function(e){var t=this.rgb(),r=e(e).rgb(),n=new e.RGB(0,0,0,t._alpha),a=["_red","_green","_blue"];return a.forEach(function(e){t[e]<1e-10?n[e]=t[e]:t[e]>r[e]?n[e]=(t[e]-r[e])/(1-r[e]):t[e]>r[e]?n[e]=(r[e]-t[e])/r[e]:n[e]=0}),n._red>n._green?n._red>n._blue?t._alpha=n._red:t._alpha=n._blue:n._green>n._blue?t._alpha=n._green:t._alpha=n._blue,t._alpha<1e-10||(a.forEach(function(e){t[e]=(t[e]-r[e])/t._alpha+r[e]}),t._alpha*=n._alpha),t})}},5651:function(e,t,r){"use strict";r.d(t,{ZE:function(){return q},gW:function(){return L}});var n=r(7294);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(a[r]=e[r]);return a}function i(e){var t=(0,n.useRef)(e),r=(0,n.useRef)(function(e){t.current&&t.current(e)});return t.current=e,r.current}var u,s=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=1),e>r?r:e<t?t:e},l=function(e){return"touches"in e},f=function(e){return e&&e.ownerDocument.defaultView||self},c=function(e,t,r){var n=e.getBoundingClientRect(),a=l(t)?function(e,t){for(var r=0;r<e.length;r++)if(e[r].identifier===t)return e[r];return e[0]}(t.touches,r):t;return{left:s((a.pageX-(n.left+f(e).pageXOffset))/n.width),top:s((a.pageY-(n.top+f(e).pageYOffset))/n.height)}},h=function(e){l(e)||e.preventDefault()},d=n.memo(function(e){var t=e.onMove,r=e.onKey,u=o(e,["onMove","onKey"]),s=(0,n.useRef)(null),d=i(t),p=i(r),g=(0,n.useRef)(null),b=(0,n.useRef)(!1),v=(0,n.useMemo)(function(){var e=function(e){h(e),(l(e)?e.touches.length>0:e.buttons>0)&&s.current?d(c(s.current,e,g.current)):r(!1)},t=function(){return r(!1)};function r(r){var n=b.current,a=f(s.current),o=r?a.addEventListener:a.removeEventListener;o(n?"touchmove":"mousemove",e),o(n?"touchend":"mouseup",t)}return[function(e){var t=e.nativeEvent,n=s.current;if(n&&(h(t),(!b.current||l(t))&&n)){if(l(t)){b.current=!0;var a=t.changedTouches||[];a.length&&(g.current=a[0].identifier)}n.focus(),d(c(n,t,g.current)),r(!0)}},function(e){var t=e.which||e.keyCode;t<37||t>40||(e.preventDefault(),p({left:39===t?.05:37===t?-.05:0,top:40===t?.05:38===t?-.05:0}))},r]},[p,d]),_=v[0],m=v[1],y=v[2];return(0,n.useEffect)(function(){return y},[y]),n.createElement("div",a({},u,{onTouchStart:_,onMouseDown:_,className:"react-colorful__interactive",ref:s,onKeyDown:m,tabIndex:0,role:"slider"}))}),p=function(e){return e.filter(Boolean).join(" ")},g=function(e){var t=e.color,r=e.left,a=e.top,o=p(["react-colorful__pointer",e.className]);return n.createElement("div",{className:o,style:{top:100*(void 0===a?.5:a)+"%",left:100*r+"%"}},n.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},b=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=Math.pow(10,t)),Math.round(r*e)/r},v=function(e){return"#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?b(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?b(parseInt(e.substring(6,8),16)/255,2):1}},_=function(e){var t=e.s,r=e.v,n=e.a,a=(200-t)*r/100;return{h:b(e.h),s:b(a>0&&a<200?t*r/100/(a<=100?a:200-a)*100:0),l:b(a/2),a:b(n,2)}},m=function(e){var t=_(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},y=function(e){var t=e.h,r=e.s,n=e.v,a=e.a;t=t/360*6,r/=100,n/=100;var o=Math.floor(t),i=n*(1-r),u=n*(1-(t-o)*r),s=n*(1-(1-t+o)*r),l=o%6;return{r:b(255*[n,u,i,i,s,n][l]),g:b(255*[s,n,n,u,i,i][l]),b:b(255*[i,i,s,n,n,u][l]),a:b(a,2)}},w=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},x=function(e){var t=e.r,r=e.g,n=e.b,a=e.a,o=a<1?w(b(255*a)):"";return"#"+w(t)+w(r)+w(n)+o},k=function(e){var t=e.r,r=e.g,n=e.b,a=e.a,o=Math.max(t,r,n),i=o-Math.min(t,r,n),u=i?o===t?(r-n)/i:o===r?2+(n-t)/i:4+(t-r)/i:0;return{h:b(60*(u<0?u+6:u)),s:b(o?i/o*100:0),v:b(o/255*100),a:a}},M=n.memo(function(e){var t=e.hue,r=e.onChange,a=p(["react-colorful__hue",e.className]);return n.createElement("div",{className:a},n.createElement(d,{onMove:function(e){r({h:360*e.left})},onKey:function(e){r({h:s(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":b(t),"aria-valuemax":"360","aria-valuemin":"0"},n.createElement(g,{className:"react-colorful__hue-pointer",left:t/360,color:m({h:t,s:100,v:100,a:1})})))}),C=n.memo(function(e){var t=e.hsva,r=e.onChange,a={backgroundColor:m({h:t.h,s:100,v:100,a:1})};return n.createElement("div",{className:"react-colorful__saturation",style:a},n.createElement(d,{onMove:function(e){r({s:100*e.left,v:100-100*e.top})},onKey:function(e){r({s:s(t.s+100*e.left,0,100),v:s(t.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+b(t.s)+"%, Brightness "+b(t.v)+"%"},n.createElement(g,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:m(t)})))}),R=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},B="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,E=new Map,N=function(e){B(function(){var t=e.current?e.current.ownerDocument:document;if(void 0!==t&&!E.has(t)){var n=t.createElement("style");n.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',E.set(t,n);var a=u||r.nc;a&&n.setAttribute("nonce",a),t.head.appendChild(n)}},[])},G=function(e){var t,r,u,s,l,f=e.className,c=e.colorModel,h=e.color,d=void 0===h?c.defaultColor:h,g=e.onChange,b=o(e,["className","colorModel","color","onChange"]),v=(0,n.useRef)(null);N(v);var _=(t=i(g),u=(r=(0,n.useState)(function(){return c.toHsva(d)}))[0],s=r[1],l=(0,n.useRef)({color:d,hsva:u}),(0,n.useEffect)(function(){if(!c.equal(d,l.current.color)){var e=c.toHsva(d);l.current={hsva:e,color:d},s(e)}},[d,c]),(0,n.useEffect)(function(){var e;R(u,l.current.hsva)||c.equal(e=c.fromHsva(u),l.current.color)||(l.current={hsva:u,color:e},t(e))},[u,c,t]),[u,(0,n.useCallback)(function(e){s(function(t){return Object.assign({},t,e)})},[])]),m=_[0],y=_[1],w=p(["react-colorful",f]);return n.createElement("div",a({},b,{ref:v,className:w}),n.createElement(C,{hsva:m,onChange:y}),n.createElement(M,{hue:m.h,onChange:y,className:"react-colorful__last-control"}))},Y={defaultColor:"000",toHsva:function(e){return k(v(e))},fromHsva:function(e){return x(y({h:e.h,s:e.s,v:e.v,a:1}))},equal:function(e,t){return e.toLowerCase()===t.toLowerCase()||R(v(e),v(t))}},L=function(e){return n.createElement(G,a({},e,{colorModel:Y}))},S=/^#?([0-9A-F]{3,8})$/i,z=function(e){var t=e.color,r=void 0===t?"":t,u=e.onChange,s=e.onBlur,l=e.escape,f=e.validate,c=e.format,h=e.process,d=o(e,["color","onChange","onBlur","escape","validate","format","process"]),p=(0,n.useState)(function(){return l(r)}),g=p[0],b=p[1],v=i(u),_=i(s),m=(0,n.useCallback)(function(e){var t=l(e.target.value);b(t),f(t)&&v(h?h(t):t)},[l,h,f,v]),y=(0,n.useCallback)(function(e){f(e.target.value)||b(l(r)),_(e)},[r,l,f,_]);return(0,n.useEffect)(function(){b(l(r))},[r,l]),n.createElement("input",a({},d,{value:c?c(g):g,spellCheck:"false",onChange:m,onBlur:y}))},H=function(e){return"#"+e},q=function(e){var t=e.prefixed,r=e.alpha,i=o(e,["prefixed","alpha"]),u=(0,n.useCallback)(function(e){return e.replace(/([^0-9A-F]+)/gi,"").substring(0,r?8:6)},[r]),s=(0,n.useCallback)(function(e){var t,n;return 3===(n=(t=S.exec(e))?t[1].length:0)||6===n||!!r&&4===n||!!r&&8===n},[r]);return n.createElement(z,a({},i,{escape:u,format:t?H:void 0,process:H,validate:s}))}}}]);