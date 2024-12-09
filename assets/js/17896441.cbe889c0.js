"use strict";(self.webpackChunklanginfra_docs=self.webpackChunklanginfra_docs||[]).push([[8401],{34616:(e,t,n)=>{n.r(t),n.d(t,{default:()=>He});var s=n(96540),a=n(1003),i=n(89532),l=n(74848);const o=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(o.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(18215),m=n(24581),h=n(86929);function x(){const{metadata:e}=c();return(0,l.jsx)(h.A,{previous:e.previous,next:e.next})}var b=n(44586),p=n(28774),v=n(21312),g=n(44070),f=n(17559),j=n(53886),A=n(23025);const N={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(v.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(v.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function L(e){const t=N[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function C(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,l.jsx)(v.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(p.A,{to:n,onClick:s,children:(0,l.jsx)(v.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function _(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,b.A)(),{pluginId:a}=(0,g.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,j.g1)(a),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,g.HW)(a),c=o??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.A)(t,f.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(L,{siteTitle:s,versionMetadata:n})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(C,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function T(e){let{className:t}=e;const n=(0,A.r)();return n.banner?(0,l.jsx)(_,{className:t,versionMetadata:n}):null}function k(e){let{className:t}=e;const n=(0,A.r)();return n.badge?(0,l.jsx)("span",{className:(0,u.A)(t,f.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(v.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}const y={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function H(e){let{permalink:t,label:n,count:s,description:a}=e;return(0,l.jsxs)(p.A,{href:t,title:a,className:(0,u.A)(y.tag,s?y.tagWithCount:y.tagRegular),children:[n,s&&(0,l.jsx)("span",{children:s})]})}const w={tags:"tags_jXut",tag:"tag_QGVx"};function U(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(v.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.A)(w.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:w.tag,children:(0,l.jsx)(H,{...e})},e.permalink)))})]})}const B={iconEdit:"iconEdit_Z9Sw"};function M(e){let{className:t,...n}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(B.iconEdit,t),"aria-hidden":"true",...n,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function I(e){let{editUrl:t}=e;return(0,l.jsxs)(p.A,{to:t,className:f.G.common.editThisPage,children:[(0,l.jsx)(M,{}),(0,l.jsx)(v.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}function E(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,b.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,b.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function V(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=E({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,l.jsx)(v.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function O(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(v.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function G(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,l.jsxs)("span",{className:f.G.common.lastUpdated,children:[(0,l.jsx)(v.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,l.jsx)(V,{lastUpdatedAt:t}):"",byUser:n?(0,l.jsx)(O,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const S={lastUpdated:"lastUpdated_JAkA"};function P(e){let{className:t,editUrl:n,lastUpdatedAt:s,lastUpdatedBy:a}=e;return(0,l.jsxs)("div",{className:(0,u.A)("row",t),children:[(0,l.jsx)("div",{className:"col",children:n&&(0,l.jsx)(I,{editUrl:n})}),(0,l.jsx)("div",{className:(0,u.A)("col",S.lastUpdated),children:(s||a)&&(0,l.jsx)(G,{lastUpdatedAt:s,lastUpdatedBy:a})})]})}function D(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,i=a.length>0,o=!!(t||n||s);return i||o?(0,l.jsxs)("footer",{className:(0,u.A)(f.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,u.A)("row margin-top--sm",f.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(U,{tags:a})})}),o&&(0,l.jsx)(P,{className:(0,u.A)("margin-top--sm",f.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var F=n(41422),R=n(65195);const z={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function q(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",z.tocCollapsibleButton,!t&&z.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(v.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const W={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function Z(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,F.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(W.tocCollapsible,!i&&W.tocCollapsibleExpanded,n),children:[(0,l.jsx)(q,{collapsed:i,onClick:o}),(0,l.jsx)(F.N,{lazy:!0,className:W.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(R.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const $={tocMobile:"tocMobile_ITEo"};function J(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(f.G.docs.docTocMobile,$.tocMobile)})}const Q={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},X="table-of-contents__link toc-highlight",Y="table-of-contents__link--active";function K(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,u.A)(Q.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(R.A,{...n,linkClassName:X,linkActiveClassName:Y})})}function ee(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(K,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.G.docs.docTocDesktop})}var te=n(51107),ne=n(28453),se=n(72774);function ae(e){let{children:t}=e;return(0,l.jsx)(ne.x,{components:se.A,children:t})}function ie(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(f.G.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(te.A,{as:"h1",children:n})}),(0,l.jsx)(ae,{children:t})]})}var le=n(26972),oe=n(99169),re=n(86025);function ce(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const de={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function ue(){const e=(0,re.Ay)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(p.A,{"aria-label":(0,v.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(ce,{className:de.breadcrumbHomeIcon})})})}const me={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function he(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,l.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,l.jsx)(p.A,{className:a,href:n,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:a,children:t})}function xe(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,l.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function be(){const e=(0,le.OF)(),t=(0,oe.Dt)();return e?(0,l.jsx)("nav",{className:(0,u.A)(f.G.docs.docBreadcrumbs,me.breadcrumbsContainer),"aria-label":(0,v.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(ue,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(xe,{active:s,index:n,addMicrodata:!!a,children:(0,l.jsx)(he,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var pe=n(5260);function ve(){return(0,l.jsx)(v.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function ge(){return(0,l.jsx)(v.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function fe(){return(0,l.jsx)(pe.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function je(){return(0,l.jsx)(v.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function Ae(){return(0,l.jsx)(v.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var Ne=n(27293);function Le(e){let{className:t}=e;return(0,l.jsx)(Ne.A,{type:"caution",title:(0,l.jsx)(je,{}),className:(0,u.A)(t,f.G.common.draftBanner),children:(0,l.jsx)(Ae,{})})}function Ce(e){let{className:t}=e;return(0,l.jsx)(Ne.A,{type:"caution",title:(0,l.jsx)(ve,{}),className:(0,u.A)(t,f.G.common.unlistedBanner),children:(0,l.jsx)(ge,{})})}function _e(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(fe,{}),(0,l.jsx)(Ce,{...e})]})}function Te(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,l.jsxs)(l.Fragment,{children:[(n||s.unlisted)&&(0,l.jsx)(_e,{}),s.draft&&(0,l.jsx)(Le,{})]})}const ke={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ye(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,l.jsx)(J,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(ee,{})}}(),{metadata:s}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&ke.docItemCol),children:[(0,l.jsx)(Te,{metadata:s}),(0,l.jsx)(T,{}),(0,l.jsxs)("div",{className:ke.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(be,{}),(0,l.jsx)(k,{}),n.mobile,(0,l.jsx)(ie,{children:t}),(0,l.jsx)(D,{})]}),(0,l.jsx)(x,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function He(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(ye,{children:(0,l.jsx)(n,{})})]})})}},86929:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var s=n(21312),a=n(18215),i=n(28774),l=n(74848);function o(e){const{permalink:t,title:n,subLabel:s,isNext:o}=e;return(0,l.jsxs)(i.A,{className:(0,a.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,l.jsx)("div",{className:"pagination-nav__label",children:n})]})}function r(e){const{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(o,{...t,subLabel:(0,l.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(o,{...n,subLabel:(0,l.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},65195:(e,t,n)=>{n.d(t,{A:()=>b});var s=n(96540),a=n(6342);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>o(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(28774),m=n(74848);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const x=s.memo(h);function b(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const b=(0,a.p)(),p=c??b.tableOfContents.minHeadingLevel,v=u??b.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:v});return d((0,s.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:p,maxHeadingLevel:v}}),[o,r,p,v])),(0,m.jsx)(x,{toc:g,className:n,linkClassName:o,...h})}}}]);