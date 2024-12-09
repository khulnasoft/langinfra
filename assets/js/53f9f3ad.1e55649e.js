"use strict";(self.webpackChunklanginfra_docs=self.webpackChunklanginfra_docs||[]).push([[5350],{41154:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var l=i(74848),n=i(28453);const r={},s="Download File",d={type:"api",id:"download-file-1",title:"Download File",description:"",slug:"/download-file-1",frontMatter:{},api:{tags:["Folders"],description:"Download all flows from folder as a zip file.",operationId:"download_file_api_v1_folders_download__folder_id__get",security:[{OAuth2PasswordBearer:[]},{"API key query":[]},{"API key header":[]}],parameters:[{name:"folder_id",in:"path",required:!0,schema:{type:"string",title:"Folder Id"}}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}},method:"get",path:"/api/v1/folders/download/{folder_id}",securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"Langinfra",version:"1.1.0"},postman:{name:"Download File",description:{content:"Download all flows from folder as a zip file.",type:"text/plain"},url:{path:["api","v1","folders","download",":folder_id"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"folder_id"}]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/download-file-1",previous:{title:"Delete Folder",permalink:"/api/delete-folder"},next:{title:"Upload File",permalink:"/api/upload-file-2"}},a=[];function o(e){const t={h1:"h1",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"download-file",children:"Download File"})}),"\n",(0,l.jsx)(t.p,{children:"Download all flows from folder as a zip file."}),"\n",(0,l.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,l.jsx)("tbody",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"folder_id"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Folder Id"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})})]}),"\n",(0,l.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)("code",{children:"200"})}),(0,l.jsx)("div",{children:(0,l.jsx)(t.p,{children:"Successful Response"})})]}),(0,l.jsx)("div",{children:(0,l.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("th",{style:{textAlign:"left"},children:[(0,l.jsx)("span",{children:"Schema "}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{})]})})}),(0,l.jsx)("tbody",{children:(0,l.jsx)("tr",{children:(0,l.jsx)("td",{children:(0,l.jsx)("span",{style:{opacity:"0.6"},children:" undefined"})})})})]})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)("code",{children:"422"})}),(0,l.jsx)("div",{children:(0,l.jsx)(t.p,{children:"Validation Error"})})]}),(0,l.jsx)("div",{children:(0,l.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("th",{style:{textAlign:"left"},children:[(0,l.jsx)("span",{children:"Schema "}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{})]})})}),(0,l.jsx)("tbody",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"detail"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"loc"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"msg"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"type"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e){void 0===e&&(e={});const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>d});var l=i(96540);const n={},r=l.createContext(n);function s(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);