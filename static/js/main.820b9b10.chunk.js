(this["webpackJsonpbla-landing"]=this["webpackJsonpbla-landing"]||[]).push([[0],[,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(3),i=a.n(n),o=(a(8),a(0)),r=function(e){var t=e.target,a=e.text;return Object(o.jsx)("li",{className:"navbar__item",children:Object(o.jsx)("a",{href:"#".concat(t),className:"navbar__link",children:a})})},l=function(){return document.addEventListener("click",(function(e){e.target.matches(".navbar__link")&&(e.preventDefault(),function(e){var t=e.getAttribute("href"),a=document.querySelector(t),c=document.querySelector(".navbar").offsetHeight,s=a.getBoundingClientRect().top-c;window.scrollBy({top:s,behavior:"smooth"})}(e.target))})),Object(o.jsx)("header",{className:"navbar",id:"header",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar__wrapper",children:[Object(o.jsxs)("a",{href:"#",className:"navbar__logo logo",children:[Object(o.jsx)("img",{className:"navbar__logo-image",src:"img/header/b-logo.png",alt:"Image of logo"}),Object(o.jsxs)("div",{className:"navbar__info",children:[Object(o.jsx)("span",{className:"navbar__title",children:"BLA BLA"}),Object(o.jsx)("span",{className:"navbar__subtitle",children:"One Page Flat Template"})]})]}),Object(o.jsxs)("ul",{className:"navbar__list",children:[Object(o.jsx)(r,{target:"header",text:"HOME"}),Object(o.jsx)(r,{target:"portfolio",text:"PORTFOLIO"}),Object(o.jsx)(r,{target:"about",text:"ABOUT"}),Object(o.jsx)(r,{target:"contact",text:"CONTACT"})]})]})})})},j=(a(10),function(){return Object(o.jsxs)("section",{className:"brand",children:[Object(o.jsx)("h1",{className:"brand__title",children:"We Build Brand"}),Object(o.jsx)("div",{className:"brand__subtitle",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."}),Object(o.jsx)("button",{className:"brand__button",children:"Learn more"}),Object(o.jsx)("a",{href:"#portfolio",className:"brand__link",children:Object(o.jsx)("img",{className:"brand__arrow",src:"img/brand/arrow-down.png",alt:"Image of arrow"})})]})}),m=(a(11),function(){var e=function(e){for(var t=[],a=1;a<e+1;a++)t.push(Object(o.jsx)("div",{className:"portfolio__item",children:Object(o.jsx)("img",{className:"portfolio__image",src:"img/portfolio/img-".concat(a,".png"),alt:"Image of item"})},a));return t}(8);return Object(o.jsx)("section",{className:"portfolio",id:"portfolio",children:Object(o.jsxs)("div",{className:"portfolio__wrapper",children:[Object(o.jsx)("h2",{className:"portfolio__title",children:"Portfolio"}),Object(o.jsx)("p",{className:"portfolio__subtitle",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}),Object(o.jsxs)("div",{className:"portfolio__btn-wrapper",children:[Object(o.jsx)("button",{className:"portfolio__button btn-1",children:"All"}),Object(o.jsx)("button",{className:"portfolio__button btn-2",children:"WEB DESIGN"}),Object(o.jsx)("button",{className:"portfolio__button btn-3",children:"GRAPHIC DESIGN"}),Object(o.jsx)("button",{className:"portfolio__button btn-4",children:"FLAT DESIGN"})]}),Object(o.jsx)("div",{className:"portfolio__items-wrapper",children:e})]})})}),d=(a(12),function(e){var t=e.image,a=e.name,c=e.profession,s=e.description;return Object(o.jsxs)("div",{className:"about__card card",children:[Object(o.jsx)("div",{style:{backgroundImage:"url(img/about/".concat(t,")")},className:"about__image"}),Object(o.jsxs)("div",{className:"about__info",children:[Object(o.jsx)("span",{className:"about__user",children:a}),Object(o.jsx)("span",{className:"about__profession",children:c}),Object(o.jsx)("p",{className:"about__description",children:s})]})]})}),b=function(){return Object(o.jsx)("section",{className:"about",id:"about",children:Object(o.jsxs)("div",{className:"about__wrapper",children:[Object(o.jsx)("h2",{className:"about__title",children:"About Us"}),Object(o.jsx)("p",{className:"about__subtitle",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}),Object(o.jsxs)("div",{className:"about__cards-wrapper",children:[Object(o.jsx)(d,{image:"ava-1.png",name:"Melannie Doe",profession:"Project Manager",description:"Ut wisi enim ad minim veniam, quis nostrud exerci tation"}),Object(o.jsx)(d,{image:"ava-2.png",name:"Jhonnie Doe",profession:"Graphic Designer",description:"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nislut aliquip ex ea commodo consequat."}),Object(o.jsx)(d,{image:"ava-3.png",name:"Daniel Doe",profession:"Web Designer",description:"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo"})]})]})})},u=(a(13),function(){return Object(o.jsx)("section",{className:"contact",id:"contact",children:Object(o.jsxs)("div",{className:"contact__wrapper",children:[Object(o.jsx)("h2",{className:"contact__title",children:"Contact Us"}),Object(o.jsx)("p",{className:"contact__subtitle",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}),Object(o.jsxs)("div",{className:"contact__content",children:[Object(o.jsxs)("form",{className:"contact__form",action:"send.php",method:"POST",children:[Object(o.jsxs)("div",{className:"contact__input-wrapper",children:[Object(o.jsx)("div",{className:"contact__input-group",children:Object(o.jsx)("input",{type:"text",className:"contact__input",placeholder:"Your name",name:"name",required:!0})}),Object(o.jsx)("div",{className:"contact__input-group",children:Object(o.jsx)("input",{type:"email",className:"contact__input",placeholder:"Your email",name:"email",required:!0})})]}),Object(o.jsx)("textarea",{className:"contact__message",placeholder:"Your message",name:"message"}),Object(o.jsx)("button",{className:"contact__button",children:"SUBMIT"})]}),Object(o.jsxs)("div",{className:"contact__map",children:[Object(o.jsx)("span",{className:"contact__location",children:"Bla Bla Company 125009 Moscow, Red Square 1"}),Object(o.jsx)("div",{id:"map"})]})]})]})})}),p=(a(14),function(){return document.addEventListener("click",(function(e){e.preventDefault(),e.target.closest(".up")&&document.querySelector(".navbar").scrollIntoView({behavior:"smooth",block:"start"})})),Object(o.jsx)("a",{href:"#header",className:"up",children:Object(o.jsx)("img",{className:"up__arrow",alt:"Image of up-button",src:"img/shevron/shevron.png"})})}),_=(a(15),function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"footer__wrapper",children:[Object(o.jsx)("div",{className:"footer__info",children:"\xa9 Copyright 2016 Bla Bla Studio | One Page Flat Template"}),Object(o.jsx)(p,{})]})})})}),x=(a(16),function(){return Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)(l,{}),Object(o.jsx)(j,{}),Object(o.jsx)(m,{}),Object(o.jsx)(b,{}),Object(o.jsx)(u,{}),Object(o.jsx)(_,{})]})});i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.820b9b10.chunk.js.map