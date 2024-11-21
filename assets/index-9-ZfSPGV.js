(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const I=()=>{if(!window.localStorage)return-1;const n=(i,o)=>{window.localStorage.setItem(i,JSON.stringify({data:o,expire:Date.now()+864e5}))},e=i=>{if(!window.localStorage.getItem(i))return null;window.localStorage.removeItem(i)};return{save:n,del:e,get:i=>window.localStorage.getItem(i)?JSON.parse(window.localStorage.getItem(i)).expire<=Date.now()?(e(i),null):JSON.parse(window.localStorage.getItem(i)).data:null}},j=({onOnline:n,onOffline:e,initialOffline:t,initialOnline:i})=>{let o;return o??(o=navigator.onLine),o?i==null||i():t==null||t(),window.addEventListener("online",()=>{o=!0,n==null||n()}),window.addEventListener("offline",()=>{o=!1,e==null||e()}),{isOnline:o}},B=({isCached:n})=>{let e,t;return{lat:t,long:e,init:o=>{if(n){o();return}try{return navigator.geolocation.getCurrentPosition(r=>{r!=null&&r.coords&&(t=r.coords.latitude,e=r.coords.longitude),o(t,e)}),{lat:t,long:e}}catch(r){console.error(r)}}}},N=async(n,e)=>{const t=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${n}&lon=${e}`,{headers:{"content-type":"application/json"}});if(!t.ok)throw new Error("Error getting data from nominatim service");return await t.json()},P=[{id:1,img:"/starlinkproject/media/images/residential.jpg",title:"Residential",description:"Residential connection for the whole family"},{id:2,img:"/starlinkproject/media/images/everywhere.jpg",title:"Everywhere",description:"Our satellites are everywhere, you will always have a signal"},{id:3,img:"/starlinkproject/media/images/boat.jpg",title:"The sea",description:"Our signal reaches all the seas of the world, wherever you are in the world."}],T=n=>{if(!n)throw new Error("Father Element is mandatory in Insert Location");let e;const t=()=>{e=document.createElement("p"),e.classList.add("text-white","text-center","text-sm","lg:text-base"),e.setAttribute("aria-label","if your location is correct, will be shown in this paragraph")};return{insertLocationCountry:s=>{t(),s?e.innerHTML=`Your current location is <strong>${s}</strong> <br /> our product is avaliable in your location`:e.textContent="Country not available",n.appendChild(e)},insertLocationOffline:()=>{e||t(),e.textContent="Your internet is disconnected",n.appendChild(e)},resetLocationText:()=>{var s;(s=e==null?void 0:e.parentNode)==null||s.removeChild(e),e=void 0}}},M=(n,e="ORDER NOW")=>{let t;return{buildElement:()=>{t=document.createElement("button"),t.classList.add("px-4","py-2","bg-white","rounded-lg","font-bold","text-sm","hover:bg-black","hover:text-white","hover:cursor-pointer","transition-all","active:scale-95"),t.textContent=e,n.appendChild(t)},dismissElement:()=>{var r;t&&((r=t.parentNode)==null||r.removeChild(t),t=void 0)}}},k=n=>{if(!n)throw new Error("Parent element is mandatory in Insert Loading");const e=document.createElement("div");return{buildElement:()=>{e.classList.add("border-x-2","border-t-2","border-gray-300","rounded-full","w-5","h-5","animate-spin"),n.appendChild(e)},dismissElement:()=>{if(e.classList.length===0)throw new Error("This loading element doesn't exist");e.parentNode.removeChild(e)}}},$=({icon:n,text:e,fatherElement:t,description:i="This is a button",onClick:o})=>{if(!t)throw new Error("Father Element is mandatory in Button Text Icon");const r=document.getElementById("button-text-icon-template");let s,a,c,l,E;return{buildElement:()=>{s=r.content.cloneNode(!0),a=s.getElementById("button-text-icon-text"),c=s.getElementById("button-text-icon-icon"),l=s.getElementById("button-text-icon"),l.setAttribute("aria-label",i),E=k(l),e||a.parentNode.removeChild(a),e&&(a.textContent=e),n||c.parentNode.removeChild(c),n&&c.classList.add("fa",n);const y=()=>{console.log("hola"),o()};l.addEventListener("click",y),t.appendChild(s)},dismissElement:()=>{var y;s&&((y=l.parentNode)==null||y.removeChild(l),l.removeEventListener("click",o),s=void 0,a=void 0,c=void 0,l=void 0,E=void 0)},loadingElement:()=>{s&&(E.buildElement(),a.style.display="none",c.style.display="none",l.disabled=!0)},stopLoadingElement:()=>{s&&(a.style.display="inline",c.style.display="inline",E.dismissElement(),l.disabled=!1)}}},q=n=>{const e=document.querySelector("#product-template"),t=document.querySelector("#list-products-container");return{buildElement:()=>{n.forEach(o=>{const r=e.content.cloneNode(!0),s=r.querySelector("#article-product");s.style.backgroundImage=`url(${o.img})`;const a=r.querySelector("#title-product");a.textContent=o.title;const c=r.querySelector("#description-product");c.textContent=o.description,t.appendChild(r)})}}},A=()=>{const n=document.querySelector("#close-menu"),e=document.querySelector("#menu"),t=document.getElementById("open-menu"),i=document.querySelector("html");return{buildEvents:()=>{const r=()=>{e.classList.contains("open")||(e.style.transform="translate(0%)"),e.classList.toggle("open"),i.style.overflowY="hidden"},s=()=>{e.classList.contains("open")&&(e.style.transform="translate(100%)"),e.classList.toggle("open"),i.style.overflowY="visible"};n.addEventListener("click",s),t.addEventListener("click",r)}}},O=()=>{const n=document.querySelector("#title");return{buildEvents:()=>{window.addEventListener("resize",()=>{if(window.innerWidth<1024){n.style.display="block";return}})}}},D=()=>{const n=document.querySelector("#heroe-video"),e=document.querySelector("#title");return{buildEvents:()=>{n.ontimeupdate=()=>{if(window.innerWidth<768)return;const i=n.duration%60,o=n.currentTime/i*100;o>=0&&o<=24?e.style.display="block":e.style.display="none"}}}},F=()=>{const n=document.querySelector("#nav-menu");return{buildEvents:()=>{document.addEventListener("scroll",()=>{let t=window.scrollY;t>=100&&(n.style.background="rgba(0,0,0,0.5)",n.style.backdropFilter="blur(2rem)"),t<100&&(n.style.background="transparent",n.style.backdropFilter="none")})}}},b={country:"country",weather:"weather"},H=async n=>{const e=await fetch(`https://api.weatherapi.com/v1/current.json?q=${n}&key=815a2964cd27416b90d24405242111`,{headers:{"content-type":"application/json"}});if(console.log(e),!e.ok)throw new Error("Error getting data from weather service");return await e.json()},Y=()=>{const n=I();let e,t=document.getElementById("weather-image"),i=document.getElementById("weather-city"),o=document.getElementById("weather-temperature"),r=document.getElementById("weather-container"),s;const a=()=>{r&&(s=k(r),s.buildElement())},c=()=>{r&&s.dismissElement()},l=()=>{e&&(o.textContent=`${e.temperature} °C`,i.textContent=e.city,t.setAttribute("src",e.icon),t.style.display="block")};return{getData:async({address:d,stored:m})=>{var u,p,y,h;if(a(),m){e=m,c(),l();return}if(!d){c();return}try{const g=await H(`${d.country} ${d.city}`);e={icon:(p=(u=g.current)==null?void 0:u.condition)==null?void 0:p.icon,temperature:(y=g.current)==null?void 0:y.dewpoint_c,city:(h=g.location)==null?void 0:h.name},n.save(b.weather,e)}catch(g){console.error("Error getting weather data: ",g)}finally{c(),l()}},buildElement:l}},z=({fatherElement:n,text:e})=>{if(!n)throw new Error("Father element is mandatory in insert small");let t;return{buildElement:()=>{t=document.createElement("small"),t.textContent=e,t.classList.add("text-white/70","text-center"),n.appendChild(t)},dismissElement:()=>{var r;(r=t==null?void 0:t.parentNode)==null||r.removeChild(t)}}},R=n=>{let e=document.getElementById("price-element-template"),t=document.getElementById("prices-elements-container"),i,o,r,s,a;return{buildElement:()=>{if(!n||n.length===0)throw new Error("List is mandatory in Insert Prices");n.forEach((l,E)=>{const d=e.content.cloneNode(!0);i=d.getElementById("price-element-title"),o=d.getElementById("price-element-description"),r=d.getElementById("price-element-list"),s=d.getElementById("price-element-img"),a=d.getElementById("price-element-img-container"),i.textContent=l.title,o.textContent=l.description,s.setAttribute("src",l.img),s.setAttribute("alt",`image for the ${l.title}`),s.setAttribute("aria-label",`image for the ${l.title}`),E%2===0&&a.classList.add("order-2"),l.descriptionItems.forEach(m=>{const u=document.createElement("li");u.textContent=m,r.appendChild(u)}),t.appendChild(d)})}}},W=[{id:1,img:"/starlinkproject/media/images/initial.jpg",title:"Initial package",description:"As a student, you need a reliable and high-speed internet connection to power through your assignments, research, and online classes. Starlink's Student Starter Pack offers you just that!",descriptionItems:["200 Mbps download speeds for seamless streaming, gaming, and video calls.","Low latency for a lag-free online experience.","Global coverage so you can stay connected wherever your studies take you.","Easy setup and a compact design for hassle-free installation."]},{id:2,img:"/starlinkproject/media/images/middle.jpg",title:"Middle package",description:"As a student, you need a reliable and high-speed internet connection to power through your assignments, research, and online classes. Starlink's Student Starter Pack offers you just that!",descriptionItems:["Up to 250 Mbps speed, Enjoy a fast and stable connection for all your online activities.","Global coverage, Take Starlink with you wherever you go, even to rural or remote areas.","Easy setup, Set up your Starlink system in minutes and start enjoying high-speed internet.","Stable connection, Forget about interruptions and enjoy a reliable connection at all times."]},{id:3,img:"/starlinkproject/media/images/pro.jpg",title:"Pro package",description:"Experience the future of business connectivity with Starlink Pro. Our most advanced package is engineered to meet the unique needs of enterprises, providing the speed, reliability, and scalability you need to succeed.",descriptionItems:["Blazing-fast speeds, Enjoy download speeds of up to [insert specific speed] for demanding applications like video conferencing, cloud computing, and large file transfers.","Enhanced performance, Benefit from lower latency and higher throughput for a seamless online experience.","Scalability, Easily expand your network to accommodate growing business needs.   ","Priority service, Receive priority support and network access."]}],G=n=>{let e=document.getElementById("prices-table-body");return{buildElement:()=>{n.forEach(i=>{const o=document.createElement("tr");o.classList.add("even:bg-gray-100","odd:bg-white","border-b-2"),Object.entries(i).forEach((r,s)=>{const a=document.createElement("td");a.classList.add("px-6","py-3"),s>0&&a.classList.add("text-neutral-600","text-center"),a.textContent=r[1],o.appendChild(a)}),e.appendChild(o)})}}},J=[{name:"Initial Package",speed:"200Mb/s",price:"19.99$ / Month"},{name:"Middle package",speed:"400Mb/s",price:"39.99$ / Month"},{name:"Pro Package",speed:"750Mb/s",price:"59.99$ / Month"}],K=async()=>{const n=document.getElementById("geo-data"),e=I(),t=e.get(b.country),i=e.get(b.weather),o=Y();await o.getData({address:t,stored:i});const r=q(P),s=A(),a=O(),c=D(),l=F();r.buildElement(),s.buildEvents(),a.buildEvents(),c.buildEvents(),l.buildEvents();const{init:E}=B({isCached:!!t}),d=M(n),m=T(n),u=z({fatherElement:n,text:"Tell us where you are located and we will give you an offer",description:""}),p=$({fatherElement:n,text:"Find Your Location",icon:"fa-map-marker",description:"button to get your location and give you a personalized service",onClick:()=>{try{E(async(h,g)=>{await y(h,g),t||await o.getData({address:e.get(b.country)})})}catch(h){console.error("Something was wrong getting and setting location: ",h)}}});R(W).buildElement(),G(J).buildElement();const y=async(h,g)=>{var x,C,S;let w,v,L;if(p.loadingElement(),h&&g&&!t){try{const f=await N(h,g);w=(x=f.address)==null?void 0:x.country,v=(C=f.address)==null?void 0:C.city,L=(S=f.address)==null?void 0:S.country_code}catch(f){console.error(f);return}e.save(b.country,{country:w,city:v,code:L})}p.stopLoadingElement(),p.dismissElement(),u.dismissElement(),m.insertLocationCountry(w&&v?`${w} ${v}`:`${t.country} ${t.city}`),d.buildElement()};j({onOnline:async()=>{m.resetLocationText(),p.buildElement(),u.buildElement()},onOffline:()=>{m.insertLocationOffline(),p.dismissElement(),d.dismissElement(),u.dismissElement()},initialOffline:()=>{m.insertLocationOffline()},initialOnline:()=>{p.buildElement(),u.buildElement()}})};document.addEventListener("DOMContentLoaded",K);
