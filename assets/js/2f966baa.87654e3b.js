"use strict";(self.webpackChunklanginfra_docs=self.webpackChunklanginfra_docs||[]).push([[7632],{3345:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=i(74848),s=i(28453);const l={},r="Update Flow",d={type:"api",id:"update-flow",title:"Update Flow",description:"",slug:"/update-flow",frontMatter:{},api:{tags:["Flows"],description:"Update a flow.",operationId:"update_flow_api_v1_flows__flow_id__patch",security:[{OAuth2PasswordBearer:[]},{"API key query":[]},{"API key header":[]}],parameters:[{name:"flow_id",in:"path",required:!0,schema:{type:"string",format:"uuid",title:"Flow Id"}}],requestBody:{required:!0,content:{"application/json":{schema:{properties:{name:{anyOf:[{type:"string"},{type:"null"}],title:"Name"},description:{anyOf:[{type:"string"},{type:"null"}],title:"Description"},data:{anyOf:[{type:"object"},{type:"null"}],title:"Data"},folder_id:{anyOf:[{type:"string",format:"uuid"},{type:"null"}],title:"Folder Id"},endpoint_name:{anyOf:[{type:"string"},{type:"null"}],title:"Endpoint Name"}},type:"object",title:"FlowUpdate"}}}},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{properties:{name:{type:"string",title:"Name"},description:{anyOf:[{type:"string"},{type:"null"}],title:"Description"},icon:{anyOf:[{type:"string"},{type:"null"}],title:"Icon"},icon_bg_color:{anyOf:[{type:"string"},{type:"null"}],title:"Icon Bg Color"},gradient:{anyOf:[{type:"string"},{type:"null"}],title:"Gradient"},data:{anyOf:[{type:"object"},{type:"null"}],title:"Data"},is_component:{anyOf:[{type:"boolean"},{type:"null"}],title:"Is Component",default:!1},updated_at:{anyOf:[{type:"string",format:"date-time"},{type:"null"}],title:"Updated At"},webhook:{anyOf:[{type:"boolean"},{type:"null"}],title:"Webhook",description:"Can be used on the webhook endpoint",default:!1},endpoint_name:{anyOf:[{type:"string"},{type:"null"}],title:"Endpoint Name"},tags:{anyOf:[{items:{type:"string"},type:"array"},{type:"null"}],title:"Tags"},id:{type:"string",format:"uuid",title:"Id"},user_id:{anyOf:[{type:"string",format:"uuid"},{type:"null"}],title:"User Id"},folder_id:{anyOf:[{type:"string",format:"uuid"},{type:"null"}],title:"Folder Id"}},type:"object",required:["name","id","user_id","folder_id"],title:"FlowRead"}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}},method:"patch",path:"/api/v1/flows/{flow_id}",securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},jsonRequestBodyExample:{},info:{title:"Langinfra",version:"1.1.0"},postman:{name:"Update Flow",description:{content:"Update a flow.",type:"text/plain"},url:{path:["api","v1","flows",":flow_id"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<uuid>",key:"flow_id"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'{\n    "name": "<string>",\n    "description": "<string>",\n    "data": "<object>",\n    "folder_id": "<uuid>",\n    "endpoint_name": "<string>"\n}'},auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/update-flow",previous:{title:"Read Flow",permalink:"/api/read-flow"},next:{title:"Delete Flow",permalink:"/api/delete-flow"}},o=[];function a(e){const t={h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"update-flow",children:"Update Flow"})}),"\n",(0,n.jsx)(t.p,{children:"Update a flow."}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"flow_id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" uuid"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})})]}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Request Body "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,n.jsx)("div",{})]})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Name"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"description"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Description"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"data"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Data"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"folder_id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Folder Id"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"endpoint_name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Endpoint Name"})]})})]})]}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"200"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Successful Response"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Name"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"description"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Description"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"icon"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Icon"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"icon_bg_color"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Icon Bg Color"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"gradient"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Gradient"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"data"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Data"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"is_component"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Is Component"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"updated_at"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Updated At"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"webhook"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Webhook"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(t.p,{children:"Can be used on the webhook endpoint"})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"endpoint_name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Endpoint Name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"tags"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Tags"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" uuid"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"user_id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" User Id"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"folder_id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Folder Id"})]})})]})]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"422"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Validation Error"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"detail"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"loc"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"msg"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"type"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e){void 0===e&&(e={});const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>d});var n=i(96540);const s={},l=n.createContext(s);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);