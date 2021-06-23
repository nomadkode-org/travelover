(this.webpackJsonptravelover=this.webpackJsonptravelover||[]).push([[0],{35:function(e,t,n){"use strict";n.r(t);var i,a,r,o,c,s,l,d,p,b,m,u,h,g,f,j,x=n(1),w=n.n(x),y=n(18),O=n.n(y),v=n(11),k=n(7),D=n(4),_=n(3),C=Object(_.a)(i||(i=Object(D.a)(["\n  * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Montserrat', sans-serif;\n  }\n\n  html, body {\n    overflow-x: hidden;\n  }\n\nbody::-webkit-scrollbar {\n  width: 10px;\n}\n\nbody::-webkit-scrollbar-thumb {\n  background-color: #f1f1f1;\n  border-radius: 50px;\n}\n\nbody::-webkit-scrollbar-track {\n  background-color: #000;\n}\n"]))),N=n(6),H=[{title:"About",Link:"/about"},{title:"Destinations",Link:"/destinations"},{title:"Hotels",Link:"/hotels"}],I=Object(_.c)(N.b)(a||(a=Object(D.a)(["\n  background: ",";\n  padding: ",";\n  color: ",";\n  font-size: ",";\n  white-space: nowrap;\n  outline: none;\n  border: none;\n  border-radius: 50px;\n  min-width: 100px;\n  max-width: 200px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: 0.3s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    transform: translateY(-3px);\n    background: #f1f1f1;\n    color: #ba135d;\n  }\n"])),(function(e){return e.primary?"#BA135D":"#000d1a"}),(function(e){return e.big?"16px 40px":"14px 24px"}),(function(e){return e.primary?"#f1f1f1":"#BA135D"}),(function(e){return e.big?"20px":"14px"})),B=n.p+"static/media/bars.8f43271b.svg",z=n(2),V=_.c.nav.withConfig({displayName:"Navbar__Nav",componentId:"sc-1aaaclu-0"})(["height:60px;width:100%;display:flex;justify-content:space-between;padding:1rem 2rem;z-index:100;position:fixed;background:",";"],(function(e){return e.navbar?"#000":"transparent"})),L=Object(_.b)(r||(r=Object(D.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  text-decoration: none;\n"]))),$=Object(_.c)(N.b).withConfig({displayName:"Navbar__Logo",componentId:"sc-1aaaclu-1"})([""," font-size:1.2rem;font-weight:bold;font-style:italic;&:hover{color:#ba135d;}"],L),S=_.c.i.withConfig({displayName:"Navbar__MenuBars",componentId:"sc-1aaaclu-2"})(["display:none;@media screen and (max-width:768px){display:block;background-image:url(",");background-size:contain;height:40px;width:40px;cursor:pointer;position:absolute;top:0;right:0;transform:translate(-50%,25%);}"],B),A=_.c.div.withConfig({displayName:"Navbar__NavMenu",componentId:"sc-1aaaclu-3"})(["display:flex;align-items:center;margin-right:-48px;@media screen and (max-width:768px){display:none;}"]),T=Object(_.c)(N.b).withConfig({displayName:"Navbar__NavMenuLinks",componentId:"sc-1aaaclu-4"})([""," transition:0.3s;&:hover{color:#ba135d;transform:translateY(-5px);}"],L),q=_.c.div.withConfig({displayName:"Navbar__NavBtn",componentId:"sc-1aaaclu-5"})(["display:flex;align-items:center;margin-right:24px;@media screen and (max-width:768px){display:none;}"]),E=function(e){var t=e.toggle,n=Object(x.useState)(!1),i=Object(k.a)(n,2),a=i[0],r=i[1];return window.addEventListener("scroll",(function(){window.scrollY>=100?r(!0):r(!1)})),Object(z.jsxs)(V,{navbar:a,children:[Object(z.jsx)($,{to:"/",children:"TRAVELOVER"}),Object(z.jsx)(S,{onClick:t}),Object(z.jsx)(A,{children:H.map((function(e,t){return Object(z.jsx)(T,{to:e.Link,children:e.title},t)}))}),Object(z.jsx)(q,{children:Object(z.jsx)(I,{to:"/contact",primary:"true",children:"Contact Us"})})]})},M=n(22),P=_.c.div(o||(o=Object(D.a)(["\n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  display: grid;\n  align-items: center;\n  top: 0;\n  left: 0;\n  transition: 0.3s ease-in-out;\n  opacity: ",";\n  top: ",";\n"])),(function(e){return e.openIcon?"1":"0"}),(function(e){return e.openIcon?"0":"-100%"})),F=_.c.div(c||(c=Object(D.a)(["\n  position: absolute;\n  top: 1.2rem;\n  right: 1.5rem;\n  background: transparent;\n  font-size: 2rem;\n  cursor: pointer;\n  outline: none;\n"]))),J=Object(_.c)(M.a)(s||(s=Object(D.a)(["\n  color: #f1f1f1;\n"]))),R=_.c.div(l||(l=Object(D.a)([""]))),U=_.c.div(d||(d=Object(D.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(4, 80px);\n  text-align: center;\n  margin-bottom: 4rem;\n\n  @media screen and (max-width: 488px) {\n    grid-template-rows: repeat(4, 60px);\n  }\n"]))),K=Object(_.c)(N.b)(p||(p=Object(D.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #f1f1f1;\n  font-size: 1.5rem;\n  text-decoration: none;\n  list-style: none;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n\n  &:hover {\n    color: #ba135d;\n  }\n"]))),X=_.c.div(b||(b=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Y=function(e){var t=e.openIcon,n=e.toggle;return Object(z.jsxs)(P,{openIcon:t,onClick:n,children:[Object(z.jsx)(F,{onClick:n,children:Object(z.jsx)(J,{})}),Object(z.jsxs)(R,{children:[Object(z.jsx)(U,{children:H.map((function(e,t){return Object(z.jsx)(K,{to:e.link,children:e.title},t)}))}),Object(z.jsx)(X,{children:Object(z.jsx)(I,{primary:"true",round:"true",to:"/contact",children:"Contact Us"})})]})]})},G=n(23),Q=n(16),W=_.c.section.withConfig({displayName:"Hero__HeroSection",componentId:"sc-9f5kyy-0"})(["height:100vh;max-height:1100px;overflow:hidden;"]),Z=_.c.div.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-9f5kyy-1"})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative;"]),ee=_.c.div.withConfig({displayName:"Hero__HeroSlide",componentId:"sc-9f5kyy-2"})(["z-index:1;height:100%;width:100%;"]),te=_.c.div.withConfig({displayName:"Hero__HeroSlider",componentId:"sc-9f5kyy-3"})(["position:absolute;top:0;left:0;height:100%;width:100%;display:flex;align-items:center;justify-content:center;&::before{content:'';height:100%;width:100%;z-index:2;overflow:hidden;opacity:0.4;background:linear-gradient( 0deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 50%,rgba(0,0,0,0.6) 100% );position:absolute;bottom:0vh;left:0;}"]),ne=_.c.img.withConfig({displayName:"Hero__HeroImage",componentId:"sc-9f5kyy-4"})(["position:absolute;top:0;left:0;height:100vh;width:100vw;object-fit:cover;opacity:0.9;"]),ie=_.c.div.withConfig({displayName:"Hero__HeroContent",componentId:"sc-9f5kyy-5"})(["position:relative;z-index:10;display:flex;flex-direction:column;max-width:1000px;width:calc(100% - 150px);color:#fff;h1{font-size:clamp(1rem,8vw,2rem);font-weight:800;text-transform:uppercase;text-shadow:0px 0px 20px rgba(0,0,0,0.8);text-align:left;margin-bottom:0.8rem;}p{margin-bottom:1.5rem;font-weight:600;text-shadow:0px 0px 20px rgba(0,0,0,0.8);}"]),ae=_.c.div.withConfig({displayName:"Hero__SliderButtons",componentId:"sc-9f5kyy-6"})(["position:absolute;bottom:40px;display:flex;z-index:10;"]),re=Object(_.c)(G.a).withConfig({displayName:"Hero__Arrow",componentId:"sc-9f5kyy-7"})(["margin-left:0.5rem;"]),oe=Object(_.b)(m||(m=Object(D.a)(["\n  width: 40px;\n  height: 40px;\n  color: #f1f1f1;\n  background: #ba135d;\n  cursor: pointer;\n  padding: 10px;\n  margin-right: 0.5rem;\n  user-select: none;\n  transition: 0.3s;\n\n  &:hover {\n    background: #f1f1f1;\n    color: #ba135d;\n    transform: scale(1.1);\n  }\n"]))),ce=Object(_.c)(Q.a).withConfig({displayName:"Hero__PrevArrow",componentId:"sc-9f5kyy-8"})([""," border-radius:100% 0% 0% 100% / 50% 50% 50% 50%;&:hover{transform:translateX(-10px);}"],oe),se=Object(_.c)(Q.b).withConfig({displayName:"Hero__NextArrow",componentId:"sc-9f5kyy-9"})([""," border-radius:0% 100% 100% 0% / 50% 50% 50% 50%;&:hover{transform:translateX(10px);}"],oe),le=Object(_.c)(I).withConfig({displayName:"Hero___StyledButton",componentId:"sc-9f5kyy-10"})(["max-width:160px;border-radius:27% 73% 43% 57% / 54% 38% 62% 46%;&:hover{transform:translateX(10px);background:#f1f1f1;color:#ba135d;}"]),de=function(e){var t=e.slides,n=Object(x.useState)(0),i=Object(k.a)(n,2),a=i[0],r=i[1],o=t.length,c=Object(x.useRef)(null);Object(x.useEffect)((function(){return c.current=setTimeout((function(){r((function(e){return e===o-1?0:e+1}))}),5e3),function(){c.current&&clearTimeout(c.current)}}),[a,o]);return!Array.isArray(t)||t.length<=0?null:Object(z.jsx)(W,{children:Object(z.jsxs)(Z,{children:[t.map((function(e,t){return Object(z.jsx)(ee,{children:t===a&&Object(z.jsxs)(te,{children:[Object(z.jsx)(ne,{src:e.image,alt:e.alt}),Object(z.jsxs)(ie,{children:[Object(z.jsx)("h1",{children:e.title}),Object(z.jsx)("p",{children:e.price}),Object(z.jsxs)(le,{to:e.path,primary:"true",children:[e.label,Object(z.jsx)(re,{})]})]})]})},t)})),Object(z.jsxs)(ae,{children:[Object(z.jsx)(ce,{onClick:function(){c.current&&clearTimeout(c.current),r(0===a?o-1:a-1)}}),Object(z.jsx)(se,{onClick:function(){c.current&&clearTimeout(c.current),r(a===o-1?0:a+1)}})]})]})})},pe=_.c.section(u||(u=Object(D.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 4rem 0;\n  background: #000;\n  color: #f1f1f1;\n"]))),be=_.c.div(h||(h=Object(D.a)(["\n  padding: 3rem calc((100vw - 1300px) / 2);\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 800px;\n\n  @media screen and (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n"]))),me=_.c.div(g||(g=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  line-height: 1.4;\n  padding: 1rem 2rem;\n  order: ",";\n\n  h1 {\n    margin-bottom: 1rem;\n    font-size: clamp(1.5rem, 6vw, 2rem);\n  }\n  p {\n    margin-bottom: 2rem;\n  }\n"])),(function(e){return e.reverse?"2":"1"})),ue=_.c.div(f||(f=Object(D.a)(["\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  order: ",";\n\n  @media screen and (max-width: 768px) {\n    order: ",";\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n\n    @media screen and (max-width: 768px) {\n      width: 100%;\n      height: 100%;\n    }\n  }\n"])),(function(e){return e.reverse?"1":"2"}),(function(e){return e.reverse?"2":"1"})),he=function(e){var t=e.heading,n=e.paragraphOne,i=e.paragraphTwo,a=e.buttonLabel,r=e.reverse,o=e.image;return Object(z.jsx)(pe,{children:Object(z.jsxs)(be,{children:[Object(z.jsxs)(me,{children:[Object(z.jsx)("h1",{children:t}),Object(z.jsx)("p",{children:n}),Object(z.jsx)("p",{children:i}),Object(z.jsx)(I,{to:"/hotels",primary:"true",children:a})]}),Object(z.jsx)(ue,{reverse:r,children:Object(z.jsx)("img",{src:o,alt:"destinations"})})]})})},ge=_.c.div(j||(j=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #000;\n  color: #f1f1f1;\n  padding: 2rem;\n"]))),fe=function(){return Object(z.jsx)(ge,{children:Object(z.jsx)("h4",{children:"Made with \ud83d\udc97 by nomadkode"})})},je=n.p+"static/media/borabora.54187ba5.jpg",xe=n.p+"static/media/austria.3c9dc66a.jpg",we=n.p+"static/media/bali.9fcb8a7c.jpg",ye=[{title:"Bora Bora, Fr. Polynesia",price:"$1000 / night",path:"/destinations",label:"View Destination",image:je,alt:"Destinations"},{title:"Kaprun, Austria",price:"$400 / night",path:"/destinations",label:"View Destination",image:xe,alt:"Destinations"},{title:"Bali, Indonesia",price:"$350 / night",path:"/destinations",label:"View Destination",image:we,alt:"Destinations"},{title:"Ibiza, Spain",price:"$750 / night",path:"/destinations",label:"View Destination",image:n.p+"static/media/ibiza.4b3ad8bb.jpg",alt:"Destinations"},{title:"Kyoto, Japan",price:"$500 / night",path:"/destinations",label:"View Destination",image:n.p+"static/media/kyoto.91fe2120.jpg",alt:"Destinations"},{title:"Lauterbrunnen, Switzerland",price:"$450 / night",path:"/destinations",label:"View Destination",image:n.p+"static/media/switzerland.c5050c1c.jpg",alt:"Destinations"},{title:"Hawaii, United States",price:"$1200 / night",path:"/destinations",label:"View Destination",image:n.p+"static/media/hawaii.a94c77b2.jpg",alt:"Destinations"},{title:"Santorini, Greece",price:"$600 / night",path:"/destinations",label:"View Destination",image:n.p+"static/media/santorini.79a3d582.jpg",alt:"Destinations"},{title:"Phi Phi Island, Thailand",price:"$300 / night",path:"/destinations",label:"View Destination",image:n.p+"static/media/phiphi.3d76d49f.jpg",alt:"Destinations"},{title:"Nassau, Bahamas",price:"$700 / night",path:"/destinations",label:"View Destination",image:n.p+"static/media/nassau.6e0a25eb.jpg",alt:"Destinations"},{title:"Cappadocia, Turkey",price:"$350 / night",path:"/destinations",label:"View Destination",image:n.p+"static/media/cappadocia.89f19065.jpg",alt:"Destinations"},{title:"Heidelberg, Germany",price:"$350 / night",path:"/destinations",label:"View Destination",image:n.p+"static/media/heidelberg.88bb45c2.jpg",alt:"Destinations"},{title:"Mendoza, Argentina",price:"$450 / night",path:"/destinations",label:"View Destination",image:n.p+"static/media/mendoza.8a63c20f.jpg",alt:"Destinations"},{title:"Nairobi, Kenya",price:"$500 / night",path:"/destinations",label:"View Destination",image:n.p+"static/media/nairobi.d5bebdb2.jpg",alt:"Destinations"},{title:"Petra, Jordan",price:"$300 / night",path:"/destinations",label:"View Destination",image:n.p+"static/media/petra.7c40d0ed.jpg",alt:"Destinations"},{title:"Rio de Janeiro, Brazil",price:"$400 / night",path:"/destinations",label:"View Destination",image:n.p+"static/media/rio.ac2e86b7.jpg",alt:"Destinations"}],Oe={heading:"Explore Beautiful beach in Bora - Bora",paragraphOne:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nam officia voluptas, magni numquam libero excepturi at? Delectus dolore cumque, nostrum dolor hic natus blanditiis perferendis eos repellendus! Harum, distinctio.",paragraphTwo:"Delectus dolore cumque, nostrum dolor hic natus blanditiis perferendis eos repellendus! Harum, distinctio.",buttonLabel:"View Hotels",image:je,reverse:!0,delay:100},ve={heading:"Explore Beautiful Mt. Alpine from Austria",paragraphOne:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nam officia voluptas, magni numquam libero excepturi at? Delectus dolore cumque, nostrum dolor hic natus blanditiis perferendis eos repellendus! Harum, distinctio.",paragraphTwo:"Delectus dolore cumque, nostrum dolor hic natus blanditiis perferendis eos repellendus! Harum, distinctio.",buttonLabel:"View Hotels",image:xe,reverse:!0,delay:300},ke={heading:"Explore Beautiful Ubud in Bali",paragraphOne:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nam officia voluptas, magni numquam libero excepturi at? Delectus dolore cumque, nostrum dolor hic natus blanditiis perferendis eos repellendus! Harum, distinctio.",paragraphTwo:"Delectus dolore cumque, nostrum dolor hic natus blanditiis perferendis eos repellendus! Harum, distinctio.",buttonLabel:"View Hotels",image:we,reverse:!0,delay:500},De=function(){var e=Object(x.useState)(!1),t=Object(k.a)(e,2),n=t[0],i=t[1],a=function(){i(!n)};return Object(z.jsxs)("div",{children:[Object(z.jsx)(C,{}),Object(z.jsx)(E,{toggle:a}),Object(z.jsx)(Y,{openIcon:n,toggle:a}),Object(z.jsx)(de,{slides:ye}),Object(z.jsx)(he,Object(v.a)({},Oe)),Object(z.jsx)(he,Object(v.a)({},ve)),Object(z.jsx)(he,Object(v.a)({},ke)),Object(z.jsx)(fe,{})]})},_e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),r(e),o(e)}))};O.a.render(Object(z.jsx)(w.a.StrictMode,{children:Object(z.jsx)(N.a,{children:Object(z.jsx)(De,{})})}),document.getElementById("root")),_e()}},[[35,1,2]]]);
//# sourceMappingURL=main.30105ae2.chunk.js.map