(this["webpackJsonpurl-shortening-api-landing-page"]=this["webpackJsonpurl-shortening-api-landing-page"]||[]).push([[0],{31:function(e,t,i){},37:function(e,t,i){"use strict";i.r(t);var s=i(2),n=i.n(s),c=i(21),r=i.n(c),a=i(5),l=i(25),o=i(12),d=i(1),u=n.a.createContext();function j(e){var t=e.children,i=Object(s.useState)(!1),n=Object(o.a)(i,2),c=n[0],r=n[1];Object(s.useEffect)((function(){return window.addEventListener("resize",(function(){return r(!1)})),function(){return window.removeEventListener("resize",(function(){return r(!1)}))}}),[]);var a=Object(s.useState)(!1),j=Object(o.a)(a,2),b=j[0],h=j[1],g=Object(s.useState)(JSON.parse(localStorage.getItem("shortenedLinks"))||[]),m=Object(o.a)(g,2),x=m[0],p=m[1],O=Object(s.useState)(""),v=Object(o.a)(O,2),f=v[0],k=v[1],N=Object(s.useState)(!1),S=Object(o.a)(N,2),y=S[0],w=S[1];var C="https://api.shrtco.de/v2/shorten?url=".concat(f);return Object(s.useEffect)((function(){b&&fetch(C).then((function(e){return e.json()})).then((function(e){p((function(t){return[].concat(Object(l.a)(t),[e])})),h(!1)})).catch((function(e){alert("There was an error when trying to call to the API. Please try to shorten your URL again, after the page reloads.\n".concat(e)),h(!1),window.location.reload()}))}),[b,C]),Object(s.useEffect)((function(){localStorage.setItem("shortenedLinks",JSON.stringify(x))}),[x]),Object(d.jsx)(u.Provider,{value:{showMenu:c,setShowMenu:r,shorten:b,setShorten:h,linkShorten:x,setlinkShorten:p,value:f,onChange:function(e){""===e.target.value&&console.log("EMPTY STRING"),k(e.target.value)},handleClick:function(e){navigator.clipboard.writeText(e.target.parentNode.firstChild.innerText),document.getElementById(e.target.id).textContent="Copied!",document.getElementById(e.target.id).style.backgroundColor="hsl(255, 11%, 22%)"},onSubmitClick:function(){""===f?w(!0):(w(!1),h(!0))},formError:y,clearLocalStorage:function(){localStorage.clear(),window.location.reload()}},children:t})}i(31);var b=i(3);var h=function(e){var t=e.showMenu;return Object(d.jsxs)("nav",{className:"mobileMenu",style:{opacity:t?"1":"0"},children:[Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/url-shortening-api-landing-page/features",children:"Features"})}),Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/url-shortening-api-landing-page/pricing",children:"Pricing"})}),Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/url-shortening-api-landing-page/resources",children:"Resources"})})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"usersMobile",children:[Object(d.jsx)("button",{className:"loginMobile",children:"Login"}),Object(d.jsx)("button",{className:"signUpMobile",children:"Sign Up"})]})]})},g=i.p+"static/media/logo.83464303.svg",m=i(23);var x=function(){var e=Object(s.useContext)(u),t=e.showMenu,i=e.setShowMenu;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("header",{children:[Object(d.jsx)(a.b,{to:"/url-shortening-api-landing-page",children:Object(d.jsx)("img",{src:g,alt:"logo"})}),Object(d.jsxs)("div",{className:"desktopMenu",children:[Object(d.jsx)("nav",{className:"navMenu",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/url-shortening-api-landing-page/features",children:"Features"})}),Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/url-shortening-api-landing-page/pricing",children:"Pricing"})}),Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/url-shortening-api-landing-page/resources",children:"Resources"})})]})}),Object(d.jsxs)("div",{className:"users",children:[Object(d.jsx)("button",{className:"login",children:"Login"}),Object(d.jsx)("button",{className:"signUp",children:"Sign Up"})]})]}),Object(d.jsx)(m.a,{size:"30px",id:"hamburger",onClick:function(){return i(!t)}})]}),Object(d.jsx)(h,{showMenu:t})]})},p=i.p+"static/media/illustration-working.c9b5ef54.svg";var O=function(){return Object(d.jsxs)("section",{className:"banner",children:[Object(d.jsx)("img",{src:p,alt:"banner"}),Object(d.jsxs)("div",{className:"bannerText",children:[Object(d.jsx)("h1",{children:"More than just shorter links"}),Object(d.jsx)("p",{children:"Build your brand's recognition and get detailed insights on how your links are performing."}),Object(d.jsx)(a.b,{to:"/url-shortening-api-landing-page/pricing",children:Object(d.jsx)("button",{children:"Get Started"})})]})]})};var v=function(){var e=Object(s.useContext)(u),t=e.shorten,i=e.value,n=e.onChange,c=e.onSubmitClick,r=e.formError;return Object(d.jsxs)("section",{className:"shortener",children:[Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{type:"text",name:"name",id:"urlInput",placeholder:"Shorten a link here...",value:i,onChange:n,required:"required",style:r?{border:"3px solid #cb6775",color:"#cb6775"}:null}),Object(d.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),c()},style:t?{boxShadow:"0 0 0 0 rgba(0, 0, 0, 1)",transform:"scale(1)",animation:"pulse 2s infinite"}:null,children:t?"Shortening...":"Shorten it!"})]}),Object(d.jsx)("div",{className:"label",style:{display:r?"block":"none"},children:"Please add a link"})]})};var f=function(e){var t=e.id,i=e.img,s=e.title,n=e.text;return Object(d.jsxs)("div",{className:"panel",id:t,children:[Object(d.jsx)("div",{className:"imageBackground",children:Object(d.jsx)("img",{src:i,alt:"icon"})}),Object(d.jsx)("h3",{children:s}),Object(d.jsx)("p",{children:n})]})},k=i.p+"static/media/icon-brand-recognition.c349d3b6.svg",N=i.p+"static/media/icon-detailed-records.265c8aea.svg",S=i.p+"static/media/icon-fully-customizable.a1532a74.svg";var y=function(){var e=Object(s.useContext)(u),t=e.linkShorten,i=e.handleClick,n=e.linkRef,c=e.clearLocalStorage,r=t.map((function(e,t){return e.ok?Object(d.jsxs)("div",{className:"shortenedLink",id:e.result.code,children:[Object(d.jsx)("div",{className:"originalLink",children:e.result.original_link}),Object(d.jsxs)("div",{className:"shortened",children:[Object(d.jsx)("a",{href:e.result.full_short_link,ref:n,children:e.result.full_short_link}),Object(d.jsx)("button",{id:t,onClick:function(e){return i(e)},children:"Copy"})]})]},e.result.code):Object(d.jsx)("div",{className:"badLink",children:e.error},t)}));return Object(d.jsxs)("section",{className:"about",children:[Object(d.jsx)("div",{className:"links",children:r}),t.length>0?Object(d.jsx)("button",{className:"clearStorage",onClick:c,children:"Clear saved URLs"}):null,Object(d.jsx)("h2",{children:"Advanced Statistics"}),Object(d.jsx)("p",{className:"aboutPara",children:"Track how your links are performing across the web with our advanced statistics dashbboard"}),Object(d.jsxs)("div",{className:"panels",children:[Object(d.jsx)(f,{id:"brand",img:k,title:"Brand Recognition",text:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."}),Object(d.jsx)("svg",{className:"mobileLine",width:"80",height:" 80",children:Object(d.jsx)("line",{x1:"40",y1:"0",x2:"40",y2:"80",stroke:"hsl(180, 66%, 49%)",strokeWidth:"6px"})}),Object(d.jsx)("svg",{className:"desktopLine",width:"80",height:" 80",children:Object(d.jsx)("line",{x1:"15",y1:"0",x2:"48",y2:"0",stroke:"hsl(180, 66%, 49%)",strokeWidth:"15px"})}),Object(d.jsx)(f,{id:"records",img:N,title:"Detailed Records",text:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."}),Object(d.jsx)("svg",{className:"mobileLine",width:"80",height:" 80",children:Object(d.jsx)("line",{x1:"40",y1:"0",x2:"40",y2:"80",stroke:"hsl(180, 66%, 49%)",strokeWidth:"6px"})}),Object(d.jsx)("svg",{className:"desktopLine",width:"80",height:" 80",children:Object(d.jsx)("line",{x1:"15",y1:"0",x2:"48",y2:"0",stroke:"hsl(180, 66%, 49%)",strokeWidth:"15px"})}),Object(d.jsx)(f,{id:"customize",img:S,title:"Fully Customizable",text:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."})]})]})};var w=function(){return Object(d.jsxs)("section",{className:"callToAction",children:[Object(d.jsx)("h2",{children:"Boost your links today"}),Object(d.jsx)(a.b,{to:"/url-shortening-api-landing-page/pricing",children:Object(d.jsx)("button",{children:"Get Started"})})]})},C=i.p+"static/media/logo-white.8bd469cf.svg";var L=function(e){var t=e.title,i=e.children;return Object(d.jsxs)("div",{className:"footerLinks",children:[Object(d.jsx)("h3",{children:t}),Object(d.jsx)("ul",{children:i})]})},M=i(10),E=i(11);var I=function(){return Object(d.jsxs)("div",{className:"socialMedia",children:[Object(d.jsx)(M.a,{size:"32px",className:"fb-svg"}),Object(d.jsx)(M.c,{size:"32px",className:"tw-svg"}),Object(d.jsx)(E.b,{size:"28px",className:"pi-svg"}),Object(d.jsx)(M.b,{size:"32px",className:"in-svg"})]})};var q=function(){return Object(d.jsxs)("footer",{children:[Object(d.jsx)("img",{src:C,alt:"logo"}),Object(d.jsxs)("div",{className:"footerRight",children:[Object(d.jsxs)(L,{title:"Features",children:[Object(d.jsx)("li",{children:"Link Shortening"}),Object(d.jsx)("li",{children:"Branded Links"}),Object(d.jsx)("li",{children:"Analytics"})]}),Object(d.jsxs)(L,{title:"Resources",children:[Object(d.jsx)("li",{children:"Blog"}),Object(d.jsx)("li",{children:"Developers"}),Object(d.jsx)("li",{children:"Support"})]}),Object(d.jsxs)(L,{title:"Company",children:[Object(d.jsx)("li",{children:"About"}),Object(d.jsx)("li",{children:"Our Team"}),Object(d.jsx)("li",{children:"Careers"}),Object(d.jsx)("li",{children:"Contact"})]}),Object(d.jsx)(I,{})]})]})};var z=function(){return Object(d.jsxs)("section",{className:"features",children:[Object(d.jsx)("h1",{children:"Link shortening"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend est eget odio bibendum dapibus. Quisque nulla lacus, gravida iaculis dapibus quis, euismod vitae ante. Mauris vitae sagittis lectus. Maecenas tincidunt viverra odio, at tincidunt dolor. Sed eget mauris dictum, sodales erat in, lobortis arcu. Integer eget semper tortor. Curabitur pulvinar sapien et tellus mattis, sed vulputate sem facilisis. Sed eros turpis, accumsan eu egestas accumsan, condimentum sit amet tortor."}),Object(d.jsx)("h1",{children:"Branded Links"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend est eget odio bibendum dapibus. Quisque nulla lacus, gravida iaculis dapibus quis, euismod vitae ante. Mauris vitae sagittis lectus. Maecenas tincidunt viverra odio, at tincidunt dolor. Sed eget mauris dictum, sodales erat in, lobortis arcu. Integer eget semper tortor. Curabitur pulvinar sapien et tellus mattis, sed vulputate sem facilisis. Sed eros turpis, accumsan eu egestas accumsan, condimentum sit amet tortor."}),Object(d.jsx)("h1",{children:"Analytics"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend est eget odio bibendum dapibus. Quisque nulla lacus, gravida iaculis dapibus quis, euismod vitae ante. Mauris vitae sagittis lectus. Maecenas tincidunt viverra odio, at tincidunt dolor. Sed eget mauris dictum, sodales erat in, lobortis arcu. Integer eget semper tortor. Curabitur pulvinar sapien et tellus mattis, sed vulputate sem facilisis. Sed eros turpis, accumsan eu egestas accumsan, condimentum sit amet tortor."})]})};var B=function(){return Object(d.jsxs)("section",{className:"resources",children:[Object(d.jsx)("h1",{children:"Blog"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend est eget odio bibendum dapibus. Quisque nulla lacus, gravida iaculis dapibus quis, euismod vitae ante. Mauris vitae sagittis lectus. Maecenas tincidunt viverra odio, at tincidunt dolor. Sed eget mauris dictum, sodales erat in, lobortis arcu. Integer eget semper tortor. Curabitur pulvinar sapien et tellus mattis, sed vulputate sem facilisis. Sed eros turpis, accumsan eu egestas accumsan, condimentum sit amet tortor."}),Object(d.jsx)("h1",{children:"Developers"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend est eget odio bibendum dapibus. Quisque nulla lacus, gravida iaculis dapibus quis, euismod vitae ante. Mauris vitae sagittis lectus. Maecenas tincidunt viverra odio, at tincidunt dolor. Sed eget mauris dictum, sodales erat in, lobortis arcu. Integer eget semper tortor. Curabitur pulvinar sapien et tellus mattis, sed vulputate sem facilisis. Sed eros turpis, accumsan eu egestas accumsan, condimentum sit amet tortor."}),Object(d.jsx)("h1",{children:"Support"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend est eget odio bibendum dapibus. Quisque nulla lacus, gravida iaculis dapibus quis, euismod vitae ante. Mauris vitae sagittis lectus. Maecenas tincidunt viverra odio, at tincidunt dolor. Sed eget mauris dictum, sodales erat in, lobortis arcu. Integer eget semper tortor. Curabitur pulvinar sapien et tellus mattis, sed vulputate sem facilisis. Sed eros turpis, accumsan eu egestas accumsan, condimentum sit amet tortor."})]})};var R=function(e){var t=e.price,i=e.icon;return Object(d.jsxs)("div",{className:"card",children:[i,Object(d.jsxs)("h2",{children:[t,"\u20ac"]}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet."}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet."}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet."}),Object(d.jsx)("button",{children:"Buy Now"})]})},P=i(24);var T=function(){return Object(d.jsxs)("section",{className:"pricing",children:[Object(d.jsx)("h1",{children:"Pricing"}),Object(d.jsxs)("div",{className:"priceCards",children:[Object(d.jsx)(R,{price:"25",icon:Object(d.jsx)(P.a,{size:"52px",color:"var(--dark-violet)"})}),Object(d.jsx)(R,{price:"50",icon:Object(d.jsx)(E.a,{size:"52px",color:"var(--dark-violet)"})}),Object(d.jsx)(R,{price:"100",icon:Object(d.jsx)(E.c,{size:"52px",color:"var(--dark-violet)"})})]})]})};var A=function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(x,{}),Object(d.jsxs)(b.c,{children:[Object(d.jsxs)(b.a,{exact:!0,path:["/","/url-shortening-api-landing-page"],children:[Object(d.jsx)(O,{}),Object(d.jsx)(v,{}),Object(d.jsx)(y,{}),Object(d.jsx)(w,{})]}),Object(d.jsx)(b.a,{exact:!0,path:["/features","/url-shortening-api-landing-page/features"],children:Object(d.jsx)(z,{})}),Object(d.jsx)(b.a,{exact:!0,path:["/pricing","/url-shortening-api-landing-page/pricing"],children:Object(d.jsx)(T,{})}),Object(d.jsx)(b.a,{exact:!0,path:["/resources","/url-shortening-api-landing-page/resources"],children:Object(d.jsx)(B,{})})]}),Object(d.jsx)(q,{})]})};r.a.render(Object(d.jsx)(a.a,{children:Object(d.jsx)(j,{children:Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(A,{})})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.7024f870.chunk.js.map