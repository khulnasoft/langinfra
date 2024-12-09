"use strict";(self.webpackChunklanginfra_docs=self.webpackChunklanginfra_docs||[]).push([[3596],{96991:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var l=i(74848),n=i(28453);const s={},a="Download Multiple File",r={type:"api",id:"download-multiple-file",title:"Download Multiple File",description:"",slug:"/download-multiple-file",frontMatter:{},api:{tags:["Flows"],description:"Download all flows as a zip file.",operationId:"download_multiple_file_api_v1_flows_download__post",requestBody:{content:{"application/json":{schema:{items:{type:"string",format:"uuid"},type:"array",title:"Flow Ids"}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}},security:[{OAuth2PasswordBearer:[]},{"API key query":[]},{"API key header":[]}],method:"post",path:"/api/v1/flows/download/",parameters:[],securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},jsonRequestBodyExample:["3fa85f64-5717-4562-b3fc-2c963f66afa6"],info:{title:"Langinfra",version:"1.1.0"},postman:{name:"Download Multiple File",description:{content:"Download all flows as a zip file.",type:"text/plain"},url:{path:["api","v1","flows","download",""],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'[\n    "<uuid>",\n    "<uuid>"\n]'},auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/download-multiple-file",previous:{title:"Upload File",permalink:"/api/upload-file"},next:{title:"Read Basic Examples",permalink:"/api/read-basic-examples"}},d=[];function o(e){const t={h1:"h1",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"download-multiple-file",children:"Download Multiple File"})}),"\n",(0,l.jsx)(t.p,{children:"Download all flows as a zip file."}),"\n",(0,l.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("th",{style:{textAlign:"left"},children:[(0,l.jsx)("span",{children:"Request Body "}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,l.jsx)("div",{})]})})}),(0,l.jsx)("tbody",{children:(0,l.jsx)("tr",{children:(0,l.jsx)("td",{children:(0,l.jsx)("span",{style:{opacity:"0.6"},children:" uuid[]"})})})})]}),"\n",(0,l.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)("code",{children:"200"})}),(0,l.jsx)("div",{children:(0,l.jsx)(t.p,{children:"Successful Response"})})]}),(0,l.jsx)("div",{children:(0,l.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("th",{style:{textAlign:"left"},children:[(0,l.jsx)("span",{children:"Schema "}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{})]})})}),(0,l.jsx)("tbody",{children:(0,l.jsx)("tr",{children:(0,l.jsx)("td",{children:(0,l.jsx)("span",{style:{opacity:"0.6"},children:" undefined"})})})})]})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)("code",{children:"422"})}),(0,l.jsx)("div",{children:(0,l.jsx)(t.p,{children:"Validation Error"})})]}),(0,l.jsx)("div",{children:(0,l.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("th",{style:{textAlign:"left"},children:[(0,l.jsx)("span",{children:"Schema "}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{})]})})}),(0,l.jsx)("tbody",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"detail"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"loc"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"msg"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"type"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e){void 0===e&&(e={});const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var l=i(96540);const n={},s=l.createContext(n);function a(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);