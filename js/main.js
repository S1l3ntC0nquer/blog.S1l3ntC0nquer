var anzhiyu_musicFirst=false;var anzhiyu_keyboard=null;var anzhiyu_musicPlaying=false;var $bodyWrap=document.getElementById("body-wrap");var anzhiyu_intype=false;var anzhiyu_keyUpEvent_timeoutId=null;var anzhiyu_keyUpShiftDelayEvent_timeoutId=null;var rm=null;var popupWindowTimer=null;var adjectives=["美麗的","英俊的","聰明的","勇敢的","可愛的","慷慨的","善良的","可靠的","開朗的","成熟的","穩重的","真誠的","幽默的","豁達的","有趣的","活潑的","優雅的","敏捷的","溫柔的","溫暖的","敬業的","細心的","耐心的","深沉的","樸素的","含蓄的","率直的","開放的","務實的","堅強的","自信的","謙虛的","文靜的","深刻的","純真的","朝氣蓬勃的","慎重的","大方的","頑強的","迷人的","機智的","善解人意的","富有想象力的","有魅力的","獨立的","好奇的","乾淨的","寬容的","尊重他人的","體貼的","守信的","有耐性的","有責任心的","有擔當的","有遠見的","有智慧的","有眼光的","有冒險精神的","有愛心的","有同情心的","喜歡思考的","喜歡學習的","具有批判性思維的","善於表達的","善於溝通的","善於合作的","善於領導的","有激情的","有幽默感的","有思想的","有個性的","有正義感的","有責任感的","有創造力的","有想象力的","有藝術細胞的","有團隊精神的","有協調能力的","有決策能力的","有組織能力的","有學習能力的","有執行能力的","有分析能力的","有邏輯思維的","有創新能力的","有專業素養的","有商業頭腦的"];var vegetablesAndFruits=["蘿蔔","白菜","芹菜","生菜","青椒","辣椒","茄子","豆角","黃瓜","西紅柿","洋蔥","大蒜","土豆","南瓜","豆腐","韭菜","花菜","西蘭花","蘑菇","金針菇","蘋果","香蕉","橙子","檸檬","獼猴桃","草莓","葡萄","桃子","杏子","李子","石榴","西瓜","哈密瓜","蜜瓜","櫻桃","藍莓","柿子","橄欖","柚子","火龍果"];var selectRandomSong=[];var musicVolume=.8;var changeMusicListFlag=false;var defaultPlayMusicList=[];var themeColorMeta,pageHeaderEl,navMusicEl,consoleEl;document.addEventListener("DOMContentLoaded",function(){let s,a,c;let t=false;const e=e=>{const t=e=>{return Array.from(e).reduce((e,t)=>e+t.offsetWidth,0)};if(e){const o=t(document.querySelector("#blog_name > a").children);const i=t(document.getElementById("menus").children);s=o+i;a=document.getElementById("nav")}const n=window.innerWidth<=768||s>a.offsetWidth-120;a.classList.toggle("hide-menu",n)};const n=()=>{e(true);a.classList.add("show")};const o={open:()=>{anzhiyu.sidebarPaddingR();anzhiyu.animateIn(document.getElementById("menu-mask"),"to_show 0.5s");document.getElementById("sidebar-menus").classList.add("open");t=true},close:()=>{const e=document.body;e.style.paddingRight="";anzhiyu.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s");document.getElementById("sidebar-menus").classList.remove("open");t=false}};const i=()=>{const e=()=>{const e=document.getElementById("bbTimeList");if(e){anzhiyu.scrollToDest(e.offsetTop-62,300)}else{anzhiyu.scrollToDest(document.getElementById("home_top").offsetTop-60,300)}};const t=document.getElementById("scroll-down");t&&anzhiyu.addEventListenerPjax(t,"click",e)};const l=function(){const e=GLOBAL_CONFIG.highlight;if(!e)return;const{highlightCopy:t,highlightLang:o,highlightHeightLimit:a,plugin:n}=e;const i=GLOBAL_CONFIG_SITE.isHighlightShrink;const c=t||o||i!==undefined;const s=n==="highlight.js"?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if(!((c||a)&&s.length))return;const l=n==="prismjs";const r=i===true?"closed":"";const d=i!==undefined?'<i class="anzhiyufont anzhiyu-icon-angle-down expand ${highlightShrinkClass}"></i>':"";const u=t?'<div class="copy-notice"></div><i class="anzhiyufont anzhiyu-icon-paste copy-button"></i>':"";const m=(e,t)=>{if(GLOBAL_CONFIG.Snackbar!==undefined){anzhiyu.snackbarShow(t)}else{const n=e.previousElementSibling;n.textContent=t;n.style.opacity=1;setTimeout(()=>{n.style.opacity=0},800)}};const y=e=>{if(document.queryCommandSupported&&document.queryCommandSupported("copy")){document.execCommand("copy");m(e,GLOBAL_CONFIG.copy.success)}else{m(e,GLOBAL_CONFIG.copy.noSupport)}};const h=e=>{const t=e.parentNode;t.classList.add("copy-true");const n=window.getSelection();const o=document.createRange();const i=l?"pre code":"table .code pre";o.selectNodeContents(t.querySelectorAll(`${i}`)[0]);n.removeAllRanges();n.addRange(o);y(e.lastChild);n.removeAllRanges();t.classList.remove("copy-true")};const g=e=>{e.classList.toggle("closed")};const f=function(e){const t=e.target.classList;if(t.contains("expand"))g(this);else if(t.contains("copy-button"))h(this)};const p=function(){this.classList.toggle("expand-done")};const L=(e,t,n)=>{const o=document.createDocumentFragment();if(c){const i=document.createElement("div");i.className=`highlight-tools ${r}`;i.innerHTML=d+e+u;anzhiyu.addEventListenerPjax(i,"click",f);o.appendChild(i)}if(a&&t.offsetHeight>a+30){const s=document.createElement("div");s.className="code-expand-btn";s.innerHTML='<i class="anzhiyufont anzhiyu-icon-angle-double-down"></i>';anzhiyu.addEventListenerPjax(s,"click",p);o.appendChild(s)}if(n==="hl"){t.insertBefore(o,t.firstChild)}else{t.parentNode.insertBefore(o,t)}};if(l){s.forEach(e=>{if(o){const t=e.getAttribute("data-language")||"Code";const n=`<div class="code-lang">${t}</div>`;anzhiyu.wrap(e,"figure",{class:"highlight"});L(n,e)}else{anzhiyu.wrap(e,"figure",{class:"highlight"});L("",e)}})}else{s.forEach(t=>{if(o){let e=t.getAttribute("class").split(" ")[1];if(e==="plain"||e===undefined)e="Code";const n=`<div class="code-lang">${e}</div>`;L(n,t,"hl")}else{L("",t,"hl")}})}};function r(){document.querySelectorAll("#article-container img").forEach(function(e){const t=e.parentNode;const n=e.title||e.alt;if(n&&!t.parentNode.classList.contains("justified-gallery")){const o=document.createElement("div");o.className="img-alt is-center";o.textContent=n;t.insertBefore(o,e.nextSibling)}})}const d=()=>{anzhiyu.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)"))};const u=function(e){const a=e=>{let s="";const a=e=>e.replace(/"/g,"&quot;");e.forEach(e=>{const t=e.alt?`alt="${a(e.alt)}"`:"";const n=e.title?`title="${a(e.title)}"`:"";const o=e.address?e.address:"";const i=`
        <div class="fj-gallery-item">
          ${o?`<div class="tag-address">${o}</div>`:""}
          <img src="${e.url}" ${t+n}>
        </div>
      `;s+=i});return s};const c=(e,t,n)=>{const o=Number(n);const i=t.length;if(i>o)e.insertAdjacentHTML("beforeend",a(t.splice(0,o)));else{e.insertAdjacentHTML("beforeend",a(t));e.classList.remove("lazyload")}window.lazyLoadInstance&&window.lazyLoadInstance.update();return i>o?o:i};const n=async e=>{const t=await fetch(e);return await t.json()};const o=(t,n)=>{const o=t.getAttribute("data-limit")??n.length;if(!t.classList.contains("lazyload")||n.length<o){t.innerHTML=a(n);t.nextElementSibling.style.display="none"}else{if(!t.classList.contains("btn_album_detail_lazyload")||t.classList.contains("page_img_lazyload")){c(t,n,o);const i=()=>{const e=c(t,n,o);fjGallery(t,"appendImages",t.querySelectorAll(`.fj-gallery-item:nth-last-child(-n+${e})`));anzhiyu.loadLightbox(t.querySelectorAll("img"));if(e<Number(o)){s.unobserve(t.nextElementSibling)}};const s=new IntersectionObserver((e,t)=>{e.forEach(e=>{if(e.isIntersecting){setTimeout(i(),100)}})});s.observe(t.nextElementSibling)}else{c(t,n,o);const i=()=>{const e=c(t,n,o);fjGallery(t,"appendImages",t.querySelectorAll(`.fj-gallery-item:nth-last-child(-n+${e})`));anzhiyu.loadLightbox(t.querySelectorAll("img"));e<o&&t.nextElementSibling.removeEventListener("click",i)};t.nextElementSibling.addEventListener("click",i)}}anzhiyu.initJustifiedGallery(t);anzhiyu.loadLightbox(t.querySelectorAll("img"));window.lazyLoadInstance&&window.lazyLoadInstance.update()};const t=()=>{e.forEach(t=>{t.classList.contains("url")?n(t.textContent).then(e=>{o(t,e)}):o(t,JSON.parse(t.textContent))})};if(window.fjGallery){t();return}getCSS(`${GLOBAL_CONFIG.source.justifiedGallery.css}`);getScript(`${GLOBAL_CONFIG.source.justifiedGallery.js}`).then(t)};const m=function(){const o=document.getElementById("rightside");const i=window.innerHeight+56;let s=0;if(document.body.scrollHeight<=i){o.style.cssText="opacity: 1; transform: translateX(-58px)"}function a(e){const t=e>n;n=e;return t}let n=0;let c=true;const l=document.getElementById("page-header");const r=document.getElementById("popup-window");const d=typeof chatBtnHide==="function";const u=typeof chatBtnShow==="function";let m=false;const e=document.getElementById("nav-music"),t=document.getElementById("footer"),y=document.getElementById("waterfall"),h=document.getElementById("percent"),g=document.getElementById("nav-totop"),f=document.getElementById("body-wrap");let p=document.getElementById("post-comment")||document.getElementById("footer");function L(e){let t=f.clientHeight;const n=document.documentElement.clientHeight;const o=t>n?t-n:document.documentElement.scrollHeight-n;const i=e/o;const s=Math.round(i*100);const a=s>100?100:s<=0?1:s;h.textContent=a;function c(e){if(!e)return;const t=window.getComputedStyle(e).getPropertyValue("display");if(t=="none"){return}const n=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;const o=e.offsetTop;const i=document.documentElement.scrollTop;const s=o-i;return s<=n}if(c(p||a>90)&&e>20){g.classList.add("long");h.textContent="Top"}else{g.classList.remove("long");h.textContent=a}if(y){const l=e%document.documentElement.clientHeight;if(!m&&l+100>=document.documentElement.clientHeight){console.info(l,document.documentElement.clientHeight);setTimeout(()=>{waterfall("#waterfall")},500)}else{setTimeout(()=>{y&&waterfall("#waterfall")},500)}}}const E=anzhiyu.throttle(()=>{const e=window.scrollY||document.documentElement.scrollTop;const t=a(e);const n=Math.abs(s-e);if(e>60&&n<20&&n!=0){return}if(r&&r.classList.contains("show-popup-window")&&e>60&&n>20&&s!=0){anzhiyu.throttle(()=>{if(popupWindowTimer)clearTimeout(popupWindowTimer);popupWindowTimer=setTimeout(()=>{if(!r.classList.contains("popup-hide")){r.classList.add("popup-hide")}setTimeout(()=>{r.classList.remove("popup-hide");r.classList.remove("show-popup-window")},1e3)},1e3)},1e3)()}s=e;if(e>26){if(t){if(l.classList.contains("nav-visible"))l.classList.remove("nav-visible");if(u&&c===true){chatBtnHide();c=false}}else{if(!l.classList.contains("nav-visible"))l.classList.add("nav-visible");if(d&&c===false){chatBtnShow();c=true}}requestAnimationFrame(()=>{anzhiyu.initThemeColor();l.classList.add("nav-fixed")});if(window.getComputedStyle(o).getPropertyValue("opacity")==="0"){o.style.cssText="opacity: 0.8; transform: translateX(-58px)"}}else{if(e<=5){requestAnimationFrame(()=>{l.classList.remove("nav-fixed");l.classList.remove("nav-visible");anzhiyu.initThemeColor()})}o.style.cssText="opacity: ''; transform: ''"}if(document.body.scrollHeight<=i){o.style.cssText="opacity: 0.8; transform: translateX(-58px)"}L(e)},96);if(t){anzhiyu.intersectionObserver(()=>{if(t&&e&&768<document.body.clientWidth){e.style.bottom="-10px";e.style.opacity="0"}m=true},()=>{if(t&&e&&768<document.body.clientWidth){e.style.bottom="20px";e.style.opacity="1"}})().observe(t)}E();anzhiyu.addEventListenerPjax(window,"scroll",E,{passive:true})};const y=function(){const e=GLOBAL_CONFIG_SITE.isToc;const n=GLOBAL_CONFIG.isAnchor;const t=document.getElementById("article-container");if(!(t&&(e||n)))return;let a,c,l,r;if(e){const m=document.getElementById("card-toc");c=m.querySelector(".toc-content");a=c.querySelectorAll(".toc-link");r=c.classList.contains("is-expand");const y=e=>{const t=e.target.closest(".toc-link");if(!t)return;e.preventDefault();anzhiyu.scrollToDest(anzhiyu.getEleTop(document.getElementById(decodeURI(t.getAttribute("href")).replace("#","")))-60,300);if(window.innerWidth<900){m.classList.remove("open")}};anzhiyu.addEventListenerPjax(c,"click",y);l=e=>{const t=e.getBoundingClientRect().top;const n=c.scrollTop;if(t>document.documentElement.clientHeight-100){c.scrollTop=n+150}if(t<100){c.scrollTop=n-150}}}const o=t.querySelectorAll("h1,h2,h3,h4,h5,h6");const d=Array.from(o).filter(e=>e.id!=="CrawlerTitle");let u="";const i=function(o){if(o===0){return false}let i="";let s="";d.forEach(function(e,t){if(o>anzhiyu.getEleTop(e)-80){const n=e.id;i=n?"#"+encodeURI(n):"";s=t}});if(u===s)return;if(n)anzhiyu.updateAnchor(i);u=s;if(e){c.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")});if(i===""){return}const t=a[s];t.classList.add("active");setTimeout(()=>{l(t)},0);if(r)return;let e=t.parentNode;for(;!e.matches(".toc");e=e.parentNode){if(e.matches("li"))e.classList.add("active")}}};const s=anzhiyu.throttle(()=>{const e=window.scrollY||document.documentElement.scrollTop;i(e)},100);anzhiyu.addEventListenerPjax(window,"scroll",s,{passive:true})};const h=n=>{const e=window.globalFn||{};const o=e.themeChange||{};if(!o){return}Object.keys(o).forEach(e=>{const t=o[e];t(n)});rm&&rm.hideRightMenu();const t=c.querySelector(".menu-darkmode-text");if(n==="light"){t.textContent="Light / Dark"}else{t.textContent="Light / Dark"}if(!GLOBAL_CONFIG_SITE.isPost){const i=document.querySelector(":root");i.style.setProperty("--anzhiyu-bar-background","var(--anzhiyu-meta-theme-color)");requestAnimationFrame(()=>{anzhiyu.initThemeColor()});document.documentElement.style.setProperty("--anzhiyu-main",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-theme"));document.documentElement.style.setProperty("--anzhiyu-theme-op",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"23");document.documentElement.style.setProperty("--anzhiyu-theme-op-deep",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"dd")}};const g={readmode:()=>{const e=document.body;e.classList.add("read-mode");const t=document.createElement("button");t.type="button";t.className="anzhiyufont anzhiyu-icon-xmark exit-readmode";e.appendChild(t);const n=()=>{e.classList.remove("read-mode");t.remove();t.removeEventListener("click",n)};t.addEventListener("click",n)},darkmode:()=>{const e=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";if(e==="dark"){activateDarkMode()}else{activateLightMode()}saveToLocal.set("theme",e,2);h(e)},"rightside-config":e=>{const t=e.firstElementChild;if(t.classList.contains("show")){t.classList.add("status");setTimeout(()=>{t.classList.remove("status")},300)}t.classList.toggle("show")},"go-up":()=>{anzhiyu.scrollToDest(0,500)},"hide-aside-btn":()=>{const e=document.documentElement.classList;const t=e.contains("hide-aside")?"show":"hide";saveToLocal.set("aside-status",t,2);e.toggle("hide-aside")},"mobile-toc-button":e=>{const t=document.getElementById("card-toc");t.style.transformOrigin=`right ${e.getBoundingClientRect().top+17}px`;t.style.transition="transform 0.3s ease-in-out";t.classList.toggle("open");t.addEventListener("transitionend",()=>{t.style.transition="";t.style.transformOrigin=""},{once:true})},"chat-btn":()=>{window.chatBtnFn()},translateLink:()=>{window.translateFn.translatePage()}};document.getElementById("rightside").addEventListener("click",function(e){const t=e.target.closest("[id]");if(t&&g[t.id]){g[t.id](this)}});document.addEventListener("touchstart",e=>{anzhiyu.removeRewardMask()},{passive:true});const f=()=>{const e=e=>{const t=e.target.closest(".site-page.group");if(!t)return;t.classList.toggle("hide")};document.querySelector("#sidebar-menus .menus_items")&&document.querySelector("#sidebar-menus .menus_items").addEventListener("click",e)};const p=()=>{const e=()=>{o.open()};anzhiyu.addEventListenerPjax(document.getElementById("toggle-menu"),"click",e)};const L=()=>{const{limitCount:o,languages:i,copy:e,copyrightEbable:s}=GLOBAL_CONFIG.copyright;const t=t=>{if(e){anzhiyu.snackbarShow(i.copySuccess,!1,5e3)}if(s){t.preventDefault();const n=window.getSelection(0).toString();let e=n;if(n.length>o){e=`${n}\n\n\n${i.author}\n${i.link}${window.location.href}\n${i.source}\n${i.info}`}if(t.clipboardData){return t.clipboardData.setData("text",e)}else{return window.clipboardData.setData("text",e)}}};document.body.addEventListener("copy",t)};const E=()=>{const e=document.getElementById("runtimeshow");if(e){const t=e.getAttribute("data-publishDate");e.textContent=`${anzhiyu.diffDate(t)} ${GLOBAL_CONFIG.runtime}`}};const v=()=>{const e=document.getElementById("last-push-date");if(e){const t=e.getAttribute("data-lastPushDate");e.textContent=anzhiyu.diffDate(t,true)}};const z=()=>{const e=document.querySelectorAll("#article-container table");if(!e.length)return;e.forEach(e=>{if(!e.closest(".highlight")){anzhiyu.wrap(e,"div",{class:"table-wrap"})}})};const b=()=>{const e=document.querySelectorAll("#article-container .hide-button");if(!e.length)return;const t=function(e){const t=this;t.classList.add("open");const n=t.nextElementSibling.querySelectorAll(".gallery-container");n.length&&addJustifiedGallery(n)};e.forEach(e=>{e.addEventListener("click",t,{once:true})})};const I=()=>{const e=document.querySelectorAll("#article-container .tabs");if(!e.length)return;const a=(e,t)=>{Array.from(e).forEach(e=>{e.classList.remove("active");if(e===t||e.id===t){e.classList.add("active")}})};const n=(e,s)=>{const t=function(e){const t=e.target.closest("button");if(t.classList.contains("active"))return;a(this.children,t);this.classList.remove("no-default");const n=t.getAttribute("data-href");const o=this.nextElementSibling;a(o.children,n);if(s){const i=o.querySelectorAll(`#${n} .fj-gallery`);if(i.length>0){anzhiyu.initJustifiedGallery(i)}}};anzhiyu.addEventListenerPjax(e.firstElementChild,"click",t)};const o=n=>{const e=e=>{const t=e.target.closest("button");if(!t)return;anzhiyu.scrollToDest(anzhiyu.getEleTop(n),300)};anzhiyu.addEventListenerPjax(n.lastElementChild,"click",e)};e.forEach(e=>{const t=!!e.querySelectorAll(".gallery-container");n(e,t);o(e)})};const C=()=>{const e=document.querySelector("#aside-cat-list.expandBtn");if(!e)return;const t=e=>{const t=e.target;if(t.nodeName==="I"){e.preventDefault();t.parentNode.classList.toggle("expand")}};anzhiyu.addEventListenerPjax(e,"click",t,true)};const B=()=>{const e=document.getElementById("switch-btn");if(!e)return;let t=false;const n=document.getElementById("post-comment");const o=()=>{n.classList.toggle("move");if(!t&&typeof loadOtherComment==="function"){t=true;loadOtherComment()}};anzhiyu.addEventListenerPjax(e,"click",o)};const w=function(){const e=GLOBAL_CONFIG.noticeOutdate;const t=anzhiyu.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(t>=e.limitDay){const n=document.createElement("div");n.className="post-outdate-notice";n.textContent=e.messagePrev+" "+t+" "+e.messageNext;const o=document.getElementById("article-container");if(e.position==="top"){o.insertBefore(n,o.firstChild)}else{o.appendChild(n)}}};const O=()=>{window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})};const A=function(e){e.forEach(e=>{const t=e.getAttribute("datetime");e.textContent=anzhiyu.diffDate(t,true);e.style.display="inline"})};const G=function(){const e=document.querySelector(".topGroup");if(!e)return;e.addEventListener("mouseleave",function(){document.getElementById("todayCard").classList.remove("hide");document.getElementById("todayCard").style.zIndex=1})};const k=function(){let t=1,n="",s=3;let a=document.createElement("div");a.id="owo-big";let c=document.querySelector("body");c.appendChild(a);const e=new MutationObserver(e=>{e.forEach(e=>{const t=e.addedNodes;for(let e=0;e<t.length;e++){const n=t[e];if(n.nodeType===Node.ELEMENT_NODE&&n.classList.contains("OwO-body")&&!n.classList.contains("comment-barrage")){const o=n;o.addEventListener("contextmenu",e=>e.preventDefault());o.addEventListener("mouseover",i);o.addEventListener("mouseout",l)}}})});const o={childList:true,subtree:true};e.observe(document.getElementById("post-comment"),o);function i(i){if(i.target.tagName=="IMG"&&t){t=0;n=setTimeout(()=>{let e=i.target.clientHeight*s;let t=i.target.clientWidth*s;let n=i.x-i.offsetX-(t-i.target.clientWidth)/2;if(n+t>c.clientWidth){n-=n+t-c.clientWidth+10}if(n<0)n=10;let o=i.y-i.offsetY;a.style.height=e+"px";a.style.width=t+"px";a.style.left=n+"px";a.style.top=o+"px";a.style.display="flex";a.innerHTML=`<img src="${i.target.src}">`},100)}}function l(e){a.style.display="none";t=1;clearTimeout(n)}};const T=async()=>{const t=document.querySelector(":root");const n=document.getElementById("post-top-bg")?.src;if(!n){t.style.setProperty("--anzhiyu-bar-background","var(--anzhiyu-meta-theme-color)");requestAnimationFrame(()=>{anzhiyu.initThemeColor()});document.documentElement.style.setProperty("--anzhiyu-main",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-theme"));document.documentElement.style.setProperty("--anzhiyu-theme-op",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"23");document.documentElement.style.setProperty("--anzhiyu-theme-op-deep",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"dd");return}if(GLOBAL_CONFIG.mainTone){if(GLOBAL_CONFIG_SITE.postMainColor){let e=GLOBAL_CONFIG_SITE.postMainColor;if(F(e)==="light"){e=S(_(e),-40)}t.style.setProperty("--anzhiyu-bar-background",e);requestAnimationFrame(()=>{anzhiyu.initThemeColor()});if(GLOBAL_CONFIG.mainTone.cover_change){document.documentElement.style.setProperty("--anzhiyu-main",e);document.documentElement.style.setProperty("--anzhiyu-theme-op",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"23");document.documentElement.style.setProperty("--anzhiyu-theme-op-deep",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"dd")}}else{const o="var(--anzhiyu-theme)";let e="";if(GLOBAL_CONFIG.mainTone.mode=="cdn"||GLOBAL_CONFIG.mainTone.mode=="both"){e=n+"?imageAve"}else if(GLOBAL_CONFIG.mainTone.mode=="api"){e=GLOBAL_CONFIG.mainTone.api+n}try{const i=await fetch(e);if(i.ok&&i.headers.get("content-type")?.includes("application/json")){const s=await i.json();let e=GLOBAL_CONFIG.mainTone.mode=="cdn"||GLOBAL_CONFIG.mainTone.mode=="both"?"#"+s.RGB.slice(2):s.RGB;if(F(e)==="light"){e=S(_(e),-40)}t.style.setProperty("--anzhiyu-bar-background",e);requestAnimationFrame(()=>{anzhiyu.initThemeColor()});if(GLOBAL_CONFIG.mainTone.cover_change){document.documentElement.style.setProperty("--anzhiyu-main",e);document.documentElement.style.setProperty("--anzhiyu-theme-op",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"23");document.documentElement.style.setProperty("--anzhiyu-theme-op-deep",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"dd")}}else{if(GLOBAL_CONFIG.mainTone.mode=="both"){try{const i=await fetch(GLOBAL_CONFIG.mainTone.api+n);if(i.ok&&i.headers.get("content-type")?.includes("application/json")){const s=await i.json();let e=s.RGB;if(F(e)==="light"){e=S(_(e),-40)}t.style.setProperty("--anzhiyu-bar-background",e);requestAnimationFrame(()=>{anzhiyu.initThemeColor()});if(GLOBAL_CONFIG.mainTone.cover_change){document.documentElement.style.setProperty("--anzhiyu-main",e);document.documentElement.style.setProperty("--anzhiyu-theme-op",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"23");document.documentElement.style.setProperty("--anzhiyu-theme-op-deep",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"dd")}}else{t.style.setProperty("--anzhiyu-bar-background",o);requestAnimationFrame(()=>{anzhiyu.initThemeColor()});document.documentElement.style.setProperty("--anzhiyu-main",o)}}catch{t.style.setProperty("--anzhiyu-bar-background",o);requestAnimationFrame(()=>{anzhiyu.initThemeColor()});document.documentElement.style.setProperty("--anzhiyu-main",o)}}else{t.style.setProperty("--anzhiyu-bar-background",o);requestAnimationFrame(()=>{anzhiyu.initThemeColor()});document.documentElement.style.setProperty("--anzhiyu-main",o)}}}catch(e){console.error("Error fetching data:",e);t.style.setProperty("--anzhiyu-bar-background",o);requestAnimationFrame(()=>{anzhiyu.initThemeColor()});document.documentElement.style.setProperty("--anzhiyu-main",o)}}}};const _=e=>{const t=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;if(/^(rgb|RGB)/.test(e)){const n=e.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",");return n.reduce((e,t)=>{const n=Number(t).toString(16).padStart(2,"0");return e+n},"#")}if(t.test(e)){if(e.length===4){return Array.from(e.slice(1)).reduce((e,t)=>e+t+t,"#")}return e}return e};const S=(e,t)=>{const n=e.startsWith("#");if(n){e=e.slice(1)}let o=parseInt(e,16);const i=(e,t)=>{e+=t;return e>255?255:e<0?0:e};const s=i(o>>16,t);const a=i(o>>8&255,t);const c=i(o&255,t);return(n?"#":"")+String("000000"+(c|a<<8|s<<16).toString(16)).slice(-6)};const F=e=>{const t=e=>{const t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,(e,t,n,o)=>t+t+n+n+o+o);const n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?`rgb(${parseInt(n[1],16)}, ${parseInt(n[2],16)}, ${parseInt(n[3],16)})`:null};const n=t(e);const o=n.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);const[i,s,a,c]=o;const l=(s*299+a*587+c*114)/255e3;return l>=.5?"light":"dark"};const N=function(){var e=document.getElementById("toPageText");if(e){e.addEventListener("keydown",e=>{if(e.keyCode===13){anzhiyu.toPage();var t=document.getElementById("toPageButton");var n=t.href;pjax.loadUrl(n)}})}};const P=function(){const n=setInterval(()=>{if(navMusicEl&&navMusicEl.querySelector("#nav-music meting-js").aplayer){clearInterval(n);let e='<i class="anzhiyufont anzhiyu-icon-play"></i><span>Play music</span>';let t='<i class="anzhiyufont anzhiyu-icon-pause"></i><span>Pause music</span>';navMusicEl.querySelector("#nav-music meting-js").aplayer.on("pause",function(){navMusicEl.classList.remove("playing");document.getElementById("menu-music-toggle").innerHTML=e;document.getElementById("nav-music-hoverTips").innerHTML="Music paused";document.querySelector("#consoleMusic").classList.remove("on");anzhiyu_musicPlaying=false;navMusicEl.classList.remove("stretch")});navMusicEl.querySelector("#nav-music meting-js").aplayer.on("play",function(){navMusicEl.classList.add("playing");document.getElementById("menu-music-toggle").innerHTML=t;document.querySelector("#consoleMusic").classList.add("on");anzhiyu_musicPlaying=true})}},16)};window.onkeydown=function(e){123===e.keyCode&&anzhiyu.snackbarShow("DevTools are opened. Please adhere to the terms of the GPL license.",!1,5e3)};function q(){const t=GLOBAL_CONFIG.greetingBox.list;const e=GLOBAL_CONFIG.greetingBox.default;let n=document.createElement("div");n.id="greeting";setTimeout(()=>{n.classList.add("shown")},1e3);let o=document.getElementById("greetingBox");if(!o)return;o.appendChild(n);const i=(new Date).getHours();let s=e;for(let e=0;e<t.length;e++){if(i>=t[e].startTime&&i<=t[e].endTime){s=t[e].greeting;break}}n.innerHTML=s;setTimeout(()=>{n.classList.remove("shown");setTimeout(()=>{o.remove()},500)},3e3)}function M(){const i=(o,i="UTF-8",s,a)=>{return new Promise((t,e)=>{const n=document.createElement("script");n.src=o;n.async=true;if(a){n.setAttribute("id",a)}if(i){n.setAttribute("charset",i)}if(s){n.setAttribute("crossorigin",s)}n.onerror=e;n.onload=n.onreadystatechange=function(){const e=this.readyState;if(e&&e!=="loaded"&&e!=="complete")return;n.onload=n.onreadystatechange=null;t()};document.head.appendChild(n)})};const e=[{url:"https://sdk.51.la/js-sdk-pro.min.js",charset:"UTF-8",crossorigin:false,id:"LA_COLLECT"},{url:"https://sdk.51.la/perf/js-sdk-perf.min.js",crossorigin:"anonymous"}];Promise.all(e.map(({url:e,charset:t,crossorigin:n,id:o})=>i(e,t,n,o))).then(()=>{LA.init({id:GLOBAL_CONFIG.LA51.ck,ck:GLOBAL_CONFIG.LA51.ck});(new LingQue.Monitor).init({id:GLOBAL_CONFIG.LA51.LingQueMonitorID,sendSuspicious:true})}).catch(e=>{console.error("加載51a統計異常，本地加載403是正常情況:",e)})}function j(){const e=document.querySelectorAll("input, textarea");const t=Array.from(e).filter(e=>{if(e.id!=="center-console"||e.id!=="page-type"){return}});t.forEach(e=>{e.addEventListener("focus",()=>{anzhiyu_intype=true});e.addEventListener("blur",()=>{anzhiyu_intype=false})})}function D(){anzhiyu_keyboard=localStorage.getItem("keyboardToggle")?localStorage.getItem("keyboardToggle"):false;function e(){const e=window;e.removeEventListener("keydown",t);e.removeEventListener("keyup",n);e.addEventListener("keydown",t);e.addEventListener("keyup",n)}function t(e){const t=e.keyCode===27;const n=e.shiftKey;const o=anzhiyu_keyboard;const i=anzhiyu_intype;if(t){anzhiyu.hideLoading();anzhiyu.hideConsole();rm&&rm.hideRightMenu()}const s=GLOBAL_CONFIG.shortcutKey.delay?GLOBAL_CONFIG.shortcutKey.delay:100;const a=GLOBAL_CONFIG.shortcutKey.shiftDelay?GLOBAL_CONFIG.shortcutKey.shiftDelay:200;if(o&&n&&!i){anzhiyu_keyUpShiftDelayEvent_timeoutId=setTimeout(()=>{switch(e.keyCode){case 16:anzhiyu_keyUpEvent_timeoutId=setTimeout(()=>{document.querySelector("#keyboard-tips").classList.add("show")},a);break;case 65:anzhiyu.switchConsole();break;case 77:anzhiyu.musicToggle();break;case 75:anzhiyu.keyboardToggle();break;case 73:anzhiyu.rightMenuToggle();break;case 82:toRandomPost();break;case 72:pjax.loadUrl("/");break;case 68:g.darkmode();break;case 70:pjax.loadUrl("/fcircle/");break;case 76:pjax.loadUrl("/link/");break;case 80:pjax.loadUrl("/about/");break;default:break}e.preventDefault()},s)}}window.onfocus=function(){document.getElementById("keyboard-tips").classList.remove("show")};function n(e){anzhiyu_keyUpEvent_timeoutId&&clearTimeout(anzhiyu_keyUpEvent_timeoutId);anzhiyu_keyUpShiftDelayEvent_timeoutId&&clearTimeout(anzhiyu_keyUpShiftDelayEvent_timeoutId);if(e.keyCode===16){const t=document.querySelector("#keyboard-tips");t.classList.remove("show")}}e()}function H(){let e=GLOBAL_CONFIG.diytitle.leaveTitle;let t=GLOBAL_CONFIG.diytitle.backTitle;let n=document.title;let o;document.addEventListener("visibilitychange",function(){if(document.hidden){document.title=e;clearTimeout(o)}else{document.title=t+n;o=setTimeout(function(){document.title=n},2e3)}})}function x(e,t){const n=document.getElementById(e);if(n&&t){const o=n.querySelector(t);o&&o.addEventListener("click",g.darkmode)}else if(n){n.addEventListener("click",g.darkmode)}}const $=function(){window.addEventListener("resize",()=>{e(false);t&&anzhiyu.isHidden(document.getElementById("toggle-menu"))&&o.close()});document.getElementById("menu-mask").addEventListener("click",e=>{o.close()});c=document.getElementById("rightMenu");x("menu-darkmode");x("sidebar",".darkmode_switchbutton");f();GLOBAL_CONFIG.islazyload&&O();GLOBAL_CONFIG.copyright!==undefined&&L();GLOBAL_CONFIG.navMusic&&P();if(GLOBAL_CONFIG.shortcutKey&&document.getElementById("consoleKeyboard")){localStorage.setItem("keyboardToggle","true");document.getElementById("consoleKeyboard").classList.add("on");anzhiyu_keyboard=true;D()}if(GLOBAL_CONFIG.autoDarkmode){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{if(saveToLocal.get("theme")!==undefined)return;e.matches?h("dark"):h("light")})}GLOBAL_CONFIG.greetingBox&&q();GLOBAL_CONFIG.LA51&&M()};window.refreshFn=function(){n();themeColorMeta=document.querySelector('meta[name="theme-color"]');pageHeaderEl=document.getElementById("page-header");navMusicEl=document.getElementById("nav-music");consoleEl=document.getElementById("console");x("console",".darkmode_switchbutton");x("nav-naoDark",".components");x("console-naoDark",".components");if(GLOBAL_CONFIG_SITE.isPost){GLOBAL_CONFIG.noticeOutdate!==undefined&&w();GLOBAL_CONFIG.relativeDate.post&&A(document.querySelectorAll("#post-meta time"))}else{if(GLOBAL_CONFIG.relativeDate.homepage){A(document.querySelectorAll("#recent-posts time"))}else if(GLOBAL_CONFIG.relativeDate.simplehomepage){A(document.querySelectorAll("#recent-posts time"),true)}GLOBAL_CONFIG.runtime&&E();v();C()}GLOBAL_CONFIG.diytitle&&H();y();GLOBAL_CONFIG_SITE.isHome&&i();l();GLOBAL_CONFIG.isPhotoFigcaption&&r();m();window.scrollCollect&&window.scrollCollect();const e=document.querySelectorAll("#content-inner .fj-gallery");e.length&&u(e);d();z();b();I();B();document.getElementById("toggle-menu").addEventListener("click",()=>{o.open()});if(document.getElementById("post-comment"))k();G();T();N();p();document.getElementById("page-name").innerText=document.title.split(` | ${GLOBAL_CONFIG_SITE.configTitle}`)[0];anzhiyu.initIndexEssay();anzhiyu.changeTimeInEssay();anzhiyu.removeBodyPaceClass();anzhiyu.qrcodeCreate();anzhiyu.changeTimeInAlbumDetail();anzhiyu.reflashEssayWaterFall();anzhiyu.sayhi();anzhiyu.stopImgRightDrag();anzhiyu.addNavBackgroundInit();anzhiyu.setValueToBodyType();anzhiyu.catalogActive();anzhiyu.tagsPageActive();anzhiyu.categoriesBarActive();anzhiyu.topCategoriesBarScroll();anzhiyu.switchRightClickMenuHotReview();anzhiyu.getCustomPlayList();anzhiyu.addEventListenerConsoleMusicList(false);anzhiyu.initPaginationObserver();setTimeout(()=>{j();if(typeof addFriendLinksInFooter==="function"){addFriendLinksInFooter()}},200)};refreshFn();$()});