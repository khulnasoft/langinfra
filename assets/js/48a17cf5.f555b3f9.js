"use strict";(self.webpackChunklanginfra_docs=self.webpackChunklanginfra_docs||[]).push([[5460],{53019:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>r,default:()=>o,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=i(74848),l=i(28453);const s={},r="Delete File",a={type:"api",id:"delete-file",title:"Delete File",description:"",slug:"/delete-file",frontMatter:{},api:{tags:["Files"],operationId:"delete_file_api_v1_files_delete__flow_id___file_name__delete",security:[{OAuth2PasswordBearer:[]},{"API key query":[]},{"API key header":[]}],parameters:[{name:"file_name",in:"path",required:!0,schema:{type:"string",title:"File Name"}},{name:"flow_id",in:"path",required:!0,schema:{type:"string",format:"uuid",title:"Flow Id"}}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}},description:"Delete File",method:"delete",path:"/api/v1/files/delete/{flow_id}/{file_name}",securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"Langinfra",version:"1.1.0"},postman:{name:"Delete File",description:{type:"text/plain"},url:{path:["api","v1","files","delete",":flow_id",":file_name"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"file_name"},{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<uuid>",key:"flow_id"}]},method:"DELETE",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/delete-file",previous:{title:"List Files",permalink:"/api/list-files"},next:{title:"Get Vertex Builds",permalink:"/api/get-vertex-builds"}},d=[];function c(e){const t={h1:"h1",header:"header",p:"p",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"delete-file",children:"Delete File"})}),"\n",(0,n.jsx)(t.p,{children:"Delete File"}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"file_name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" File Name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"flow_id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" uuid"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})]})]}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"200"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Successful Response"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:(0,n.jsx)("span",{style:{opacity:"0.6"},children:" undefined"})})})})]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"422"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Validation Error"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"detail"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"loc"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"msg"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"type"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function o(e){void 0===e&&(e={});const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(96540);const l={},s=n.createContext(l);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);