webpackJsonp([1],{"7Otq":function(e,t,s){e.exports=s.p+"static/img/logo.18d6563.png"},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("7+uW");var i=s("g/zD"),o={name:"app",methods:{locale:function(){return i.a.locale},switchLocale:function(e){i.a.locale=e}},computed:{typeform_url:function(){return"https://riderx.typeform.com/to/"+i.b[i.a.locale].common.typeform_id},dialowflow_url:function(){return"https://app.talky.cards/?api="+i.b[i.a.locale].common.dialogflow_id}},mounted:function(){this.loaded=!0,this.$route.query.lang&&this.switchLocale(this.$route.query.lang)}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view"),e._v(" "),s("footer",{staticClass:"footer bg-forgr"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 h-100 text-center text-lg-left my-auto"},[s("ul",{staticClass:"list-inline mb-2"},[s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"mailto:hello@forgr.ee",target:"_top"}},[e._v(e._s(e.$t("footer.contact")))])]),e._v(" "),s("li",{staticClass:"list-inline-item"},[e._v("⋅")]),e._v(" "),s("li",{staticClass:"list-inline-item"},[s("router-link",{attrs:{to:"/privacy"}},[e._v(e._s(e.$t("footer.privacy")))])],1),e._v(" "),s("li",{staticClass:"list-inline-item"},[e._v("⋅")]),e._v(" "),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSegXHjwus5qdwwlB2PfsegpMGXhAA8jYmFRSvd0VweoD7IH4A/viewform",target:"_blank"}},[e._v(e._s(e.$t("footer.jobs")))])]),e._v(" "),s("li",{staticClass:"list-inline-item"},[e._v("⋅")]),e._v(" "),"fr"!==e.locale()?s("li",{staticClass:"list-inline-item fa-1x"},[s("a",{staticClass:"lang-icons",attrs:{href:"#"},on:{click:function(t){e.switchLocale("fr")}}},[e._v("🇫🇷")])]):e._e(),e._v(" "),"en"!==e.locale()?s("li",{staticClass:"list-inline-item fa-1x"},[s("a",{staticClass:"lang-icons",attrs:{href:"#"},on:{click:function(t){e.switchLocale("en")}}},[e._v("🇬🇧")])]):e._e(),e._v(" "),"ee"!==e.locale()?s("li",{staticClass:"list-inline-item fa-1x"},[s("a",{staticClass:"lang-icons",attrs:{href:"#"},on:{click:function(t){e.switchLocale("ee")}}},[e._v("🇪🇪")])]):e._e()]),e._v(" "),s("p",{staticClass:"text-muted small mb-4 mb-lg-0"},[e._v("© Forgr 2017. All Rights Reserved.")])]),e._v(" "),e._m(0,!1,!1)])])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-lg-6 h-100 text-center text-lg-right my-auto"},[t("ul",{staticClass:"list-inline mb-0"},[t("li",{staticClass:"list-inline-item mr-3"},[t("a",{attrs:{href:"https://medium.com/forgr"}},[t("i",{staticClass:"fab fa-medium-m fa-2x fa-fw"})])]),this._v(" "),t("li",{staticClass:"list-inline-item mr-3"},[t("a",{attrs:{href:"https://twitter.com/Forgr_ee"}},[t("i",{staticClass:"icon-social-twitter fa-2x fa-fw"})])]),this._v(" "),t("li",{staticClass:"list-inline-item mr-3"},[t("a",{attrs:{href:"https://www.facebook.com/forgr.ee"}},[t("i",{staticClass:"icon-social-facebook fa-2x fa-fw"})])]),this._v(" "),t("li",{staticClass:"list-inline-item"},[t("a",{attrs:{href:"https://www.instagram.com/Forgr_ee"}},[t("i",{staticClass:"icon-social-instagram fa-2x fa-fw"})])])])])}]},n=(s("VU/8")(o,a,!1,function(e){s("yaq3")},null,null).exports,s("/ocq"),function(){function e(){requestAnimationFrame(e),r.position.x+=.005*(f-r.position.x),r.position.y+=.005*(-y-r.position.y),r.lookAt(n.position),l.render(n,r)}function t(){var e=window.innerWidth;r.aspect=u,r.updateProjectionMatrix(),l.setSize(e,400)}function i(e){f=e.clientX-g,y=e.clientY-w}function o(e){f=Math.abs(e.alpha)>80?5*e.alpha:10*e.alpha;var t=e.beta-70;y=Math.abs(t)>80?5*t:10*t}var a=s("w6Vy"),n=void 0,r=void 0,l=void 0,c=void 0,u=void 0,d=void 0,h=void 0,v=void 0,p=void 0,m=void 0,f=void 0,y=void 0,g=void 0,w=void 0,b=void 0,_=void 0,E=void 0,C=void 0;c=document.querySelector("div.skycloud"),d=400,h=window.innerWidth,u=h/d,v=75,p=1,m=1e3,f=0,y=0,g=h/2,w=d/2,(r=new a.PerspectiveCamera(v,u,p,m)).position.z=m/2,(n=new a.Scene({antialias:!0})).fog=new a.FogExp2(0,3e-4),function(){b=new a.SphereGeometry(1e3,100,50),E={size:2,transparency:!0,opacity:.7},_=new a.PointCloudMaterial(E);for(var e=0;e<45e3;e++){var t=new a.Vector3;t.x=2e3*Math.random()-1e3,t.y=2e3*Math.random()-1e3,t.z=2e3*Math.random()-1e3,b.vertices.push(t)}C=new a.PointCloud(b,_),n.add(C)}(),(l=function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(e){return!1}}()?new a.WebGLRenderer({alpha:!0}):new a.CanvasRenderer).setClearColor(17,1),l.setPixelRatio(window.devicePixelRatio),l.setSize(h,d),c.appendChild(l.domElement),window.addEventListener("resize",t,!1),document.addEventListener("mousemove",i,!1),window.addEventListener("deviceorientation",o,!0),e()}),r={name:"Home",metaInfo:function(){return{meta:[{property:"og:title",content:this.og_title},{property:"og:description",content:this.og_description},{property:"og:locale",conten:this.og_locale}]}},data:function(){return{loaded:!1,og_title:i.b[i.a.locale].meta.og_title,og_description:i.b[i.a.locale].meta.og_description,og_locale:i.b[i.a.locale].meta.og_locale}},methods:{locale:function(){return i.a.locale},switchLocale:function(e){i.a.locale=e}},computed:{dialowflow_url:function(){return"https://app.talky.cards/?api="+i.b[i.a.locale].common.dialogflow_id}},mounted:function(){this.loaded=!0,n()}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home"},[t("header",{staticClass:"masthead text-white text-center"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-9 mx-auto"},[t("img",{staticClass:"brand-logo",attrs:{src:s("7Otq")}}),t("br"),this._v(" "),t("h1",{staticClass:"mb-5"},[t("b",[this._v(this._s(this.$t("value_proposition.third")))])])]),this._v(" "),t("div",{staticClass:"col-md-10 col-lg-8 col-xl-7 mx-auto"},[t("form",[t("div",{staticClass:"form-row center-content"},[t("div",{staticClass:"col-12 col-md-4"},[t("a",{staticClass:"button btn btn-lg btn-primary animated-button victoria-four",staticStyle:{"z-index":"1"},attrs:{href:"https://calendly.com/forgr/30min",target:"_blank"}},[this._v(this._s(this.$t("common.signup")))])])])])])])])]),this._v(" "),t("section",{staticClass:"showcase"},[t("div",{staticClass:"container-fluid p-0"},[t("div",{staticClass:"row no-gutters"},[t("div",{staticClass:"col-lg-6 text-white showcase-img tile2"}),this._v(" "),t("div",{staticClass:"col-lg-6 my-auto showcase-text"},[t("h1",[this._v(this._s(this.$t("showcase.2.title")))]),this._v(" "),t("h3",{staticClass:"quote"},[this._v(this._s(this.$t("showcase.2.subtitle")))]),this._v(" "),t("br"),this._v(" "),t("p",{staticClass:"lead mb-0 space"},[this._v("\n                  "+this._s(this.$t("showcase.2.content"))+"\n              ")])])]),this._v(" "),t("div",{staticClass:"row no-gutters"},[t("div",{staticClass:"col-lg-6 order-lg-2 text-white showcase-img tile3"}),this._v(" "),t("div",{staticClass:"col-lg-6 order-lg-1 my-auto showcase-text"},[t("h1",[this._v(this._s(this.$t("showcase.3.title")))]),this._v(" "),t("h3",{staticClass:"quote"},[this._v(this._s(this.$t("showcase.3.subtitle")))]),this._v(" "),t("br"),this._v(" "),t("p",{staticClass:"lead mb-0 space"},[this._v("\n                  "+this._s(this.$t("showcase.3.content"))+"\n              ")])])]),this._v(" "),t("div",{staticClass:"row no-gutters"},[t("div",{staticClass:"col-lg-6 text-white showcase-img tile4"}),this._v(" "),t("div",{staticClass:"col-lg-6 my-auto showcase-text"},[t("h2",[this._v(this._s(this.$t("showcase.4.title")))]),this._v(" "),t("h3",{staticClass:"quote"},[this._v(this._s(this.$t("showcase.4.subtitle")))]),this._v(" "),t("br"),this._v(" "),t("p",{staticClass:"lead mb-0 space"},[this._v("\n                    "+this._s(this.$t("showcase.4.content"))+"\n                  ")])])]),this._v(" "),t("div",{staticClass:"row no-gutters"},[this._m(0,!1,!1),this._v(" "),t("div",{staticClass:"col-lg-6 order-lg-1 my-auto showcase-text"},[t("h1",[this._v(this._s(this.$t("showcase.5.title")))]),this._v(" "),t("h3",{staticClass:"quote"},[this._v(this._s(this.$t("showcase.5.subtitle")))]),this._v(" "),t("br"),this._v(" "),t("p",{staticClass:"lead mb-0 space"},[this._v("\n                    "+this._s(this.$t("showcase.5.content"))+"\n                  ")])])]),this._v(" "),t("div",{staticClass:"row no-gutters"},[t("div",{staticClass:"col-lg-6 text-white showcase-img tile5"}),this._v(" "),t("div",{staticClass:"col-lg-6 my-auto showcase-text"},[t("h1",[this._v(this._s(this.$t("showcase.6.title")))]),this._v(" "),t("h3",{staticClass:"quote"},[this._v(this._s(this.$t("showcase.6.subtitle")))]),this._v(" "),t("br"),this._v(" "),t("p",{staticClass:"lead mb-0 space"},[this._v("\n                    "+this._s(this.$t("showcase.6.content"))+"\n                    ")])]),this._v(" "),t("div",{staticClass:"row no-gutters"},[t("div",{staticClass:"col-lg-6 order-lg-2 text-white showcase-img tile6"}),this._v(" "),t("div",{staticClass:"col-lg-6 order-lg-1 my-auto showcase-text"},[t("h1",[this._v(this._s(this.$t("showcase.7.title")))]),this._v(" "),t("h3",{staticClass:"quote"},[this._v(this._s(this.$t("showcase.7.subtitle")))]),this._v(" "),t("br"),this._v(" "),t("p",{staticClass:"lead mb-0 space"},[this._v("\n                  "+this._s(this.$t("showcase.7.content"))+"\n                ")])])])])])]),this._v(" "),t("section",{staticClass:"testimonials text-center bg-light"},[t("div",{staticClass:"container"},[t("h2",{staticClass:"mb-5 light-forgr-text"},[this._v(this._s(this.$t("common.faq")))]),this._v(" "),this.loaded&&"en"===this.locale()?t("iframe",{staticStyle:{border:"none"},attrs:{width:"100%",height:"430",src:this.dialowflow_url}}):t("div",{staticClass:"fb-messengermessageus",attrs:{messenger_app_id:"1954598607889653",page_id:"2054932541405651",color:"blue",size:"xlarge"}})])]),this._v(" "),t("section",{staticClass:"text-white text-center"},[t("div",{staticClass:"skycloud"},[t("div",{staticClass:"row rawcloud"},[t("div",{staticClass:"col-xl-9 mx-auto"},[t("h2",{staticClass:"mb-5"},[this._v(this._s(this.$t("cta.first"))+" "),t("br"),this._v(" "),t("b",[this._v(this._s(this.$t("cta.second")))])])]),this._v(" "),t("div",{staticClass:"col-md-10 col-lg-8 col-xl-7 mx-auto"},[t("form",[t("div",{staticClass:"form-row center-content"},[t("div",{staticClass:"col-12 col-md-3"},[t("a",{staticClass:"button btn btn-lg btn-primary animated-button victoria-four",staticStyle:{"z-index":"1"},attrs:{href:"https://calendly.com/forgr/30min",target:"_blank"}},[this._v(this._s(this.$t("common.signup")))])])])])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-lg-6 order-lg-2 text-white showcase-img"},[t("div",{staticStyle:{background:"#272822",height:"100%",overflow:"auto",width:"auto",border:"solid gray","border-width":".1em .1em .1em .8em",padding:".2em .6em","font-size":"1.6rem"}},[t("br"),t("table",[t("tr",[t("td",{staticStyle:{margin:"0","line-height":"210%",width:"20px","border-style":"solid","border-color":"#a6e22e","border-width":"0px 2px 0px 0px"}},[this._v("\n                      1\n                      2\n                      3\n                      4\n                      5\n                      6\n                      7\n                      ")]),this._v(" "),t("td",[t("pre",{staticStyle:{margin:"0","line-height":"200%"}},[t("span",{staticStyle:{color:"#ca0256"}},[this._v("private")]),this._v(" "),t("span",{staticStyle:{color:"#ca0256"}},[this._v("static")]),this._v(" "),t("span",{staticStyle:{color:"#66d9ef"}},[this._v("int")]),this._v(" "),t("span",{staticStyle:{color:"#a6e22e"}},[this._v("updateDesktop")]),this._v(" "),t("span",{staticStyle:{color:"#f92672"}},[this._v("(")]),t("span",{staticStyle:{color:"#66d9ef"}},[this._v("Image")]),this._v(" "),t("span",{staticStyle:{color:"#f8f8f2"}},[this._v("wallpaper")]),t("span",{staticStyle:{color:"#f92672"}},[this._v(")")]),this._v(" "),t("span",{staticStyle:{color:"#f92672"}},[this._v("{")]),this._v("\n                    "),t("span",{staticStyle:{color:"#66d9ef"}},[this._v("int")]),this._v(" "),t("span",{staticStyle:{color:"#f8f8f2"}},[this._v("happyness")]),t("span",{staticStyle:{color:"#f92672"}},[this._v(";")]),this._v("\n                    "),t("span",{staticStyle:{color:"#66d9ef"}},[this._v("MyDesktop")]),this._v(" "),t("span",{staticStyle:{color:"#f8f8f2"}},[this._v("desktop")]),this._v(" "),t("span",{staticStyle:{color:"#f92672"}},[this._v("=")]),this._v(" "),t("span",{staticStyle:{color:"#66d9ef"}},[this._v("new")]),this._v(" "),t("span",{staticStyle:{color:"#f8f8f2"}},[this._v("MyDesktop")]),t("span",{staticStyle:{color:"#f92672"}},[this._v("();")]),this._v("\n                    "),t("span",{staticStyle:{color:"#f8f8f2"}},[this._v("desktop")]),t("span",{staticStyle:{color:"#f92672"}},[this._v(".")]),t("span",{staticStyle:{color:"#a6e22e"}},[this._v("apply")]),t("span",{staticStyle:{color:"#f92672"}},[this._v("(")]),t("span",{staticStyle:{color:"#f8f8f2"}},[this._v("wallpaper")]),t("span",{staticStyle:{color:"#f92672"}},[this._v(");")]),this._v("\n                    "),t("span",{staticStyle:{color:"#f8f8f2"}},[this._v("happyness")]),this._v(" "),t("span",{staticStyle:{color:"#f92672"}},[this._v("=")]),this._v(" "),t("span",{staticStyle:{color:"#6b06d4"}},[this._v("INFINITY")]),t("span",{staticStyle:{color:"#f92672"}},[this._v(";")]),this._v("\n                    "),t("span",{staticStyle:{color:"#f92672"}},[this._v("return")]),this._v(" "),t("span",{staticStyle:{color:"#f8f8f2"}},[this._v("happyness")]),t("span",{staticStyle:{color:"#f92672"}},[this._v(";")]),this._v("\n                    "),t("span",{staticStyle:{color:"#f92672"}},[this._v("}")]),this._v("\n                  ")])])])])])])}]},c=(s("VU/8")(r,l,!1,null,null,null).exports,s("pFYg")),u=s.n(c);!function(e){var t={TWO:"2.1",THREE:"3.0",FOUR:"4.0"},s={Version:t,Entry:{ADDRESS:{version:[t.TWO,t.THREE,t.FOUR],key:"ADR",format:";;{0};{2};{4};{1};{3}","@comment":"usage: addAdr(street, code, city, country, state)"},AGENT:{version:[t.TWO,t.THREE],key:"AGENT"},ANNIVERSARY:{version:[t.FOUR],key:"ANNIVERSARY"},BIRTHDAY:{version:[t.TWO,t.THREE,t.FOUR],key:"BDAY"},CALENDARADDURI:{version:[t.FOUR],key:"CALADRURI"},CALENDARURI:{version:[t.FOUR],key:"CALURI"},CATEGORIES:{version:[t.TWO,t.THREE,t.FOUR],key:"CATEGORIES"},CLASS:{version:[t.THREE],key:"CLASS"},CLIENTPIDMAP:{version:[t.FOUR],key:"CLIENTPIDMAP"},EMAIL:{version:[t.TWO,t.THREE,t.FOUR],key:"EMAIL"},FBURL:{version:[t.FOUR],key:"FBURL"},FORMATTEDNAME:{version:[t.TWO,t.THREE,t.FOUR],key:"FN"},GENDER:{version:[t.FOUR],key:"GENDER"},GEO:{version:[t.TWO,t.THREE,t.FOUR],key:"GEO"},IMPP:{version:[t.THREE,t.FOUR],key:"IMPP"},KIND:{version:[t.FOUR],key:"KIND"},LABEL:{version:[t.TWO,t.THREE],key:"LABEL"},MAILER:{version:[t.TWO,t.THREE],key:"MAILER"},MEMBER:{version:[t.FOUR],key:"MEMBER"},NAME:{version:[t.TWO,t.THREE,t.FOUR],key:"N",format:"{1};{0};;{2}","@comment":"usage: addName(firstname, lastname, title)"},NICKNAME:{version:[t.THREE,t.FOUR],key:"NICKNAME"},NOTE:{version:[t.TWO,t.THREE,t.FOUR],key:"NOTE"},ORGANIZATION:{version:[t.TWO,t.THREE,t.FOUR],key:"ORG"},PRODID:{version:[t.THREE,t.FOUR],key:"PRODID"},PROFILE:{version:[t.TWO,t.THREE],key:"PROFILE"},RELATED:{version:[t.FOUR],key:"RELATED"},REVISION:{version:[t.TWO,t.THREE,t.FOUR],key:"REV"},ROLE:{version:[t.TWO,t.THREE,t.FOUR],key:"ROLE"},SORTSTRING:{version:[t.TWO,t.THREE,t.FOUR],key:"SORT-STRING"},SOURCE:{version:[t.TWO,t.THREE,t.FOUR],key:"SOURCE"},PHONE:{version:[t.TWO,t.THREE,t.FOUR],key:"TEL"},TITLE:{version:[t.TWO,t.THREE,t.FOUR],key:"TITLE"},TIMEZONE:{version:[t.TWO,t.THREE,t.FOUR],key:"TZ"},UID:{version:[t.TWO,t.THREE,t.FOUR],key:"UID"},URL:{version:[t.TWO,t.THREE,t.FOUR],key:"URL"},XML:{version:[t.FOUR],key:"XML"}},Type:{HOME:"HOME",WORK:"WORK",CELL:"CELL",MAIN:"MAIN",OTHER:"OTHER"},create:function(e){for(var t in this.Version)if(this.Version[t]===e)return new i(e);throw new Error("Unknown vCard version")},dump:function(e){var t="BEGIN:VCARD\n";for(var s in e){var i=e[s];if("function"!=typeof i)if("[object Array]"===Object.prototype.toString.call(i))for(var o=0,a=i.length;o<a;o++){var n=i[o];t+=s.toUpperCase()+(n.type?";TYPE="+n.type.toUpperCase()+":":":")+n.value+"\n"}else"object"===(void 0===i?"undefined":u()(i))?t+=s.toUpperCase()+(i.type?";TYPE="+i.type.toUpperCase()+":":":")+i.value+"\n":t+=s.toUpperCase()+":"+i+"\n"}return t+="END:VCARD"},export:function(e,t,s){var i=document.createElement("a");if(i.download=t+".vcf",i.textContent=t,Blob){var o=new Blob([this.dump(e)],{type:"text/vcard"});i.href=URL.createObjectURL(o)}else i.href="data:text/vcard;base64,"+this.btoa(this.dump(e));return s&&i.click(),i},btoa:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){if(e=unescape(encodeURIComponent(e)),!btoa){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=void 0,i="",o=e.length;for(s=0;s<o-2;s+=3)i+=t[e.charCodeAt(s)>>>2],i+=t[(3&e.charCodeAt(s))<<4|e.charCodeAt(s+1)>>>4],i+=t[(15&e.charCodeAt(s+1))<<2|e.charCodeAt(s+2)>>>6],i+=t[63&e.charCodeAt(s+2)];return o%3==2?(i+=t[e.charCodeAt(s)>>>2],i+=t[(3&e.charCodeAt(s))<<4|e.charCodeAt(s+1)>>>4],i+=t[(15&e.charCodeAt(s+1))<<2],i+="="):o%3==1&&(i+=t[e.charCodeAt(s)>>>2],i+=t[(3&e.charCodeAt(s))<<4],i+="=="),i}return btoa(e)})},i=function e(t){this.version=t;for(var i in s.Entry){var o=s.Entry[i];if(o.version&&!(o.version.indexOf(t)<0)){var a="add"+i[0].toUpperCase()+i.slice(1).toLowerCase();e.prototype[a]=function(e,t){return function(){var i=Array.prototype.slice.call(arguments),o=i.length>0?i[i.length-1]:void 0,a=s.Type.hasOwnProperty(o)?i.slice(0,i.length-1):i,n=t&&t.replace(/\{([0-9]*)\}/g,function(e,t){return a[parseInt(t)]||""})||a[0];this.add(e,n,s.Type.hasOwnProperty(o)&&o)}}(o.key,o.format)}}this.add=function(e,t,s){var i="object"===(void 0===e?"undefined":u()(e))&&e.key?e.key:e;!this[i]&&(this[i]=[]);var o={value:t};s&&(o.type=s),this[i].push(o)}}}();throw new Error('Cannot find module "file-saver"')},Ph6f:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="https://connect.facebook.net/"+("en"===s("g/zD").a.locale?"en_US":"fr_FR")+"/sdk.js";window.fbAsyncInit=function(){FB.init({appId:"1954598607889653",autoLogAppEvents:!0,xfbml:!0,version:"v2.11"}),FB.getLoginStatus(function(e){console.log(e)})},function(e,t,s){var o=void 0,a=e.getElementsByTagName("script")[0];e.getElementById(s)||((o=e.createElement("script")).id=s,o.src=i,a.parentNode.insertBefore(o,a))}(document,0,"facebook-jssdk")},"XdQ/":function(e,t){},"g/zD":function(e,t,s){"use strict";var i=s("7+uW"),o=s("TXmL"),a={common:{typeform_id:"SVgBZq",dialogflow_id:"38022ca2551e4aa28711a25bb9639eb8",faq:"Des questions ?",signup:"Prenez rendez-vous"},card:{call:"Appelez-moi",email:"Envoyez-moi un email",visit:"Visitez notre site",addme:"Ajoutez-moi a vos contact",meet:"Rencontrons-nous"},meta:{og_title:"Forgr",og_description:"Moins de code, plus de business",og_locale:"fr_FR"},value_proposition:{first:"VOUS AVEZ BESOIN D'UN MVP.",second:"NOUS FORGEONS VOTRE MVP EN 4 SEMAINES.",third:"Moins de code, plus de business"},cta:{first:"Votre MVP, dans 4 semaines.",second:"Ni plus ni moins."},grid:{1:{title:"Pensé pour les mobiles",subtitle:"Peu importe la taille et la marque, le rendu sera parfait!"},2:{title:"Prêt pour le futur",subtitle:"Grâce aux dernières technologies, supportez aussi bien 1 ou 1 millions d'utilisateurs!"},3:{title:"Facile à utiliser",subtitle:"Prêt à l'emploi, simple à personnaliser pour votre équipe!"}},showcase:{1:{title:"IDEATION",subtitle:"Impulser le succès",content:"Nous croyons déjà au potentiel de votre projet ! Le succès est à la portée de tous les entrepreneurs, mais il faut commencer par le début : il vous faut un MVP. Alors, discutons ! Commencez par remplir le formulaire ou utilisez notre bot afin que nous puissions vous répondre rapidement avec une proposition sur mesure incluant un devis. Bien sûr, à cette étape, un accord de non-divulgation (NDA) peut être signé si nécessaire."},2:{title:"CIBLAGE",subtitle:"Mettre le contact",content:"Avant d'atteindre les étoiles, nous devons être entièrement alignés avec votre vision et vos objectifs. Pour ça, remplissez le formulaire. Ensemble, nous allons parcourir tous les aspects de votre projet afin de s'assurer que vos attentes et enjeux sont bien définis. Concrètement, nous allons mesurer la faisabilité, définir les besoins, établir un devis et vous donner une vision claire sur les prochaines étapes et les livrables."},3:{title:"EXPERIENCE UTILISATEUR",subtitle:"Ajouter de la magie",content:"Au delà de l'esthétisme, elle vous garantira un produit qui correspond aux attentes des utilisateurs. Pour ce faire, nous utiliserons notre connaissance des dernières tendances et bonnes pratiques pour concevoir la meilleure expérience utilisateur pour votre MVP. À ce stade, nous produirons un prototype entièrement fonctionnel vous donnant un aperçu de votre produit."},4:{title:"ASPECT VISUEL",subtitle:"Propulser jusqu'au ciel",content:"Une fois que vous avez approuvé le prototype, nos concepteurs d'interface utilisateur réfléchissent et créent plusieurs conceptions visuelles qui correspondent à votre vision et à la valeur de votre produit (ne vous inquiétez pas, nous n’abuserons ni des roses, étoiles et/ou licornes). À la fin de cette étape, nous livrerons un kit de conception visuelle prêt à être mis en œuvre."},5:{title:"DEVELOPPEMENT",subtitle:"Forger une solution viable",content:"Nous croyons fortement que certaines technologies sont plus adaptées que d’autres lors de la construction d'un MVP. C'est pourquoi en nous spécialisant sur ces dernières et qu’un rendu en 4 semaines devient possible. Le produit final sera robuste et évolutif. Nous gardons toujours le processus de développement transparent, ainsi vous serez en mesure de suivre son progrès."},6:{title:"LIVRAISON",subtitle:"Prêt à conquérir le ciel",content:"À ce stade, votre MVP est prêt ! Après avoir finalisé le livrable, nous nous assurerons qu'il arrive en bonne et due forme entre vos mains. Pour ce faire, nous réaliserons une série de tests pour constater et valider la qualité de votre MVP."},7:{title:"PRODUCTION VIDEO",subtitle:"Maximiser l'impact",content:"Aujourd'hui, les vidéos sont partout (même qu'elles noient votre fil d'actualité Facebook). Elles sont considérées comme un média riche de par leur excellent impact sur les individus. Nous sommes profondément attachés à elles car nous sommes convaincus qu'elles apporteront une forte valeur ajoutée à votre MVP. Convaincu ? Discutons-en !"}},testimonial:{header:"",1:{title:"",content:""},2:{title:"",content:""},3:{title:"",content:""}},footer:{about:"A propos",jobs:"Job",contact:"Contact",terms:"Conditions d'utilisation",privacy:"Politique de confidentialité"}},n={common:{typeform_id:"xBQRdl",dialogflow_id:"38022ca2551e4aa28711a25bb9639eb8",faq:"Any question ?",signup:"Take your rendez-vous"},card:{call:"Call me",email:"Send me an email",visit:"Visit our website",addme:"Add me to your contact",meet:"Meet us"},meta:{og_title:"Forgr",og_description:"Less code, more business",og_locale:"en_US"},value_proposition:{first:"YOU'RE HERE BECAUSE YOU NEED AN MVP.",second:"WE FORGE YOUR MVP IN 4 WEEKS.",third:"Less code, more business"},cta:{first:"Your MVP, in 4 weeks.",second:"Nothing more, nothing less."},grid:{1:{title:"Fully Responsive",subtitle:"Your MVP will look great on any device, no matter the size!"},2:{title:"Future Ready",subtitle:"Featuring the latest Technology!"},3:{title:"Easy to Use",subtitle:"Ready to use, simple to customize for your team!"}},showcase:{1:{title:"IDEATION",subtitle:"Initiate success",content:"Success is reachable by everyone but you need to start somewhere. Please, use the chat or the contact form to tell us more about your project. In this way, we will be able to get back to you quickly with a tailor-made proposition including an estimate. Of course, at this step, a non-disclosure agreement (NDA) can be signed if needed."},2:{title:"SCOPING",subtitle:"Turn on the power",content:"Before reaching the sky, we need to be fully aligned with your vision and objectives. Use the contact form to tell us more about your project. Together we will go through every aspects of your project so as to match your expectations and our expertise. Concretely, we will measure the feasibility, define the requirements, make an estimate, and give you a clear view on the deliverables."},3:{title:"USER EXPERIENCE",subtitle:"Add magic to the project",content:"Behind the estethic, user experience will ensure that your product matches with users' expectations. To do so, we will use our knowledge of the latest trends and good practices to conceive the best user experience for your MVP. At this point, we will produce a fully functional prototype giving you a valuable overview of your product."},4:{title:"VISUAL DESIGN",subtitle:"Propel the project to the sky",content:"Once you've approved the prototype, our User Interface Designers will brainstorm and create several visual designs that fit both your vision and product value (don't worry we won't use too much pink, stars and unicorns). Based on your preferences, we will focus on one specific design and make few iterations if it's necessary. At the end of this stage, we will deliver a visual design kit ready to be implemented."},5:{title:"DEVELOPMENT",subtitle:"Forge a strong solution",content:"We believe some technologies are more accurate than others when building an efficient MVP. This is why we emphasize on these particular techniques in order to reach our 4 weeks’ commitment. Using them, we can obtain a bespoke product, easily upgradable and focus on your needs. Our aim is to keep the development process as transparent as possible so it allows you to understand and follow each step."},6:{title:"DELIVERY",subtitle:"All set to conquest the sky",content:"Now, your MVP is ready to hit the market! We will produce the deliverable and ensure it arrives in your hands in a perfect shape. To do so, we will do a range of tests in order to ensure the quality."},7:{title:"VIDEO PRODUCTION",subtitle:"Boost your impact",content:"Nowadays videos are everywhere (you know they're flooding your Facebook feed too much). They are considered as the ultimate media because of their powerful impacts on people. We are deeply attached to them because we are convinced that they will bring a high value to your MVP, and finally, ensure your success. Convinced? Let's talk about it."}},testimonial:{header:"",1:{title:"",content:""},2:{title:"",content:""},3:{title:"",content:""}},footer:{about:"About",jobs:"Jobs",contact:"Contact",terms:"Terms of Use",privacy:"Privacy Policy"}},r={common:{typeform_id:"xBQRdl",dialogflow_id:"38022ca2551e4aa28711a25bb9639eb8",faq:"Any question ?",signup:"Take your rendez-vous"},card:{call:"Call me",email:"Send me an email",visit:"Visit our website",addme:"Add me to your contact",meet:"Meet us"},meta:{og_title:"Forgr",og_description:"Less code, more business",og_locale:"ee_EE"},value_proposition:{first:"VAJUTA MVP.",second:"OLEME EHITADA 4 NÄDALA PÄEVAKS.",third:"Vähem code, rohkem business"},cta:{first:"Teie MVP, 4 nädala pärast.",second:"Mitte midagi muud, mitte vähem."},grid:{1:{title:"Fully Responsive",subtitle:"Your MVP will look great on any device, no matter the size!"},2:{title:"Future Ready",subtitle:"Featuring the latest Technology!"},3:{title:"Easy to Use",subtitle:"Ready to use, simple to customize for your team!"}},showcase:{1:{title:"IDEATION",subtitle:"Initiate success",content:"Success is reachable by everyone but you need to start somewhere. Please, use the chat or the contact form to tell us more about your project. In this way, we will be able to get back to you quickly with a tailor-made proposition including an estimate. Of course, at this step, a non-disclosure agreement (NDA) can be signed if needed."},2:{title:"SCOPING",subtitle:"Turn on the power",content:"Before reaching the sky, we need to be fully aligned with your vision and objectives. Use the contact form to tell us more about your project. Together we will go through every aspects of your project so as to match your expectations and our expertise. Concretely, we will measure the feasibility, define the requirements, make an estimate, and give you a clear view on the deliverables."},3:{title:"USER EXPERIENCE",subtitle:"Add magic to the project",content:"Behind the estethic, user experience will ensure that your product matches with users' expectations. To do so, we will use our knowledge of the latest trends and good practices to conceive the best user experience for your MVP. At this point, we will produce a fully functional prototype giving you a valuable overview of your product."},4:{title:"VISUAL DESIGN",subtitle:"Propel the project to the sky",content:"Once you've approved the prototype, our User Interface Designers will brainstorm and create several visual designs that fit both your vision and product value (don't worry we won't use too much pink, stars and unicorns). Based on your preferences, we will focus on one specific design and make few iterations if it's necessary. At the end of this stage, we will deliver a visual design kit ready to be implemented."},5:{title:"DEVELOPMENT",subtitle:"Forge a strong solution",content:"We believe certains technologies are more accurated to build MVP. That's why we are specialized in them, that's how we reach our 4 weeks dealine. The end-product will be easily extendable and scalable. We always keep the development process as transparent as possiblelike this you will be able to follow its progress."},6:{title:"DELIVERY",subtitle:"All set to conquest the sky",content:"Now, your MVP is ready to hit the market! We will produce the deliverable and ensure it arrives in your hands in a perfect shape. To do so, we will do a range of tests in order to ensure the quality."},7:{title:"VIDEO PRODUCTION",subtitle:"Boost your impact",content:"Nowadays videos are everywhere (you know they're flooding your Facebook feed too much). They are considered as the ultimate media because of their powerful impacts on people. We are deeply attached to them because we are convinced that they will bring a high value to your MVP, and finally, ensure your success. Convinced? Let's talk about it."}},testimonial:{header:"",1:{title:"",content:""},2:{title:"",content:""},3:{title:"",content:""}},footer:{about:"About",jobs:"Jobs",contact:"Contact",terms:"Terms of Use",privacy:"Privacy Policy"}};s.d(t,"b",function(){return l}),s.d(t,"a",function(){return h});var l={fr:a,en:n,ee:r};i.a.use(o.a);var c=["languages","language","browserLanguage","userLanguage","systemLanguage"],u=["fr","ee","en"],d=function(){for(var e=[],t=0;t<c.length;t+=1){var s=c[t];window.navigator[s]&&("string"==typeof window.navigator[s]?window.navigator[s].indexOf("_")>-1?e.push(window.navigator[s].split("_")[0]):window.navigator[s].indexOf("-")>-1?e.push(window.navigator[s].split("-")[0]):e.push(window.navigator[s]):e=e.concat(window.navigator[s]))}return e}().find(function(e){return u[u.indexOf(e)]})||"en";console.log("lang",d);var h=new o.a({locale:d,fallbackLocale:"en",messages:l})},yaq3:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.8dd23bb17ded572a7e4f.js.map