"use strict";(self.webpackChunklanginfra_docs=self.webpackChunklanginfra_docs||[]).push([[4429],{83966:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(74848),s=t(28453);const i={title:"How to build flows with components",sidebar_position:0,slug:"/components-overview"},c=void 0,a={id:"Components/components-overview",title:"How to build flows with components",description:"A\xa0component\xa0is a single building block within a flow. It consists of inputs, outputs, and parameters that define their functionality. These elements provide a convenient and  straightforward way to compose LLM-based applications. Learn more about components and how they work below.",source:"@site/docs/Components/components-overview.md",sourceDirName:"Components",slug:"/components-overview",permalink:"/components-overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"How to build flows with components",sidebar_position:0,slug:"/components-overview"},sidebar:"docs",previous:{title:"Security best practices",permalink:"/configuration-security-best-practices"},next:{title:"Agents",permalink:"/components-agents"}},r={},l=[{value:"Component menu",id:"7e3f2f8ff5074b2fb3eee97c9cfaabe7",level:2},{value:"Output preview",id:"ed7b3c34e0774b8a916b0e68821c9a7a",level:2},{value:"Advanced settings",id:"b6430d4903df44f0ba4618a558c83d7b",level:2},{value:"Group components",id:"c3f5ed818e3b40ceb6534dc358e1a5f2",level:2},{value:"Component version",id:"887fd587589448dc8c27336d1c235b9b",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"A\xa0component\xa0is a single building block within a flow. It consists of inputs, outputs, and parameters that define their functionality. These elements provide a convenient and  straightforward way to compose LLM-based applications. Learn more about components and how they work below."}),"\n",(0,o.jsx)(n.p,{children:"During the flow creation process, you will notice handles (colored circles) attached to one or both sides of a component. These handles use distinct colors to indicate the types of inputs and outputs that can be interconnected. Hover over a handle to see connection details."}),"\n",(0,o.jsx)("img",{src:"/img/prompt-component.png",alt:"Prompt component",style:{display:"block",margin:"auto",width:300}}),"\n",(0,o.jsxs)(n.p,{children:["On the top right corner of the component, you'll find the a play button to run a component. Once it runs, a status icon appears and you can hover over that to visualize success or error messages. Start interacting with your AI by clicking the\xa0",(0,o.jsx)(n.strong,{children:"Playground"}),"\xa0at the bottom right of the workspace."]}),"\n",(0,o.jsx)(n.h2,{id:"7e3f2f8ff5074b2fb3eee97c9cfaabe7",children:"Component menu"}),"\n",(0,o.jsx)(n.p,{children:"Each component is unique, but they all have a menu bar at the top that looks something like this."}),"\n",(0,o.jsx)("img",{src:"/img/openai-model-component.png",alt:"Prompt component",style:{display:"block",margin:"auto",width:300}}),"\n",(0,o.jsx)(n.p,{children:"It consists of options such as:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Code"}),"\xa0\u2014 Modify the component's Python code and save it."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Controls"}),"\xa0\u2014 Adjust all parameters of a component."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Freeze Path"}),"\xa0\u2014 After a component runs, lock its previous output state to prevent it from re-running."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Click\xa0",(0,o.jsx)(n.strong,{children:"All"}),'\xa0(the "..." button) to see all options.']}),"\n",(0,o.jsx)(n.h2,{id:"ed7b3c34e0774b8a916b0e68821c9a7a",children:"Output preview"}),"\n",(0,o.jsx)(n.p,{children:"Langinfra includes an output visualizer for components that opens a pop-up screen. This allows you to easily inspect and monitor transmissions between components, providing instant feedback on your workflows."}),"\n",(0,o.jsx)(n.h2,{id:"b6430d4903df44f0ba4618a558c83d7b",children:"Advanced settings"}),"\n",(0,o.jsxs)(n.p,{children:["Langinfra components can be edited by clicking the\xa0",(0,o.jsx)(n.strong,{children:"Advanced Settings"}),"\xa0button."]}),"\n",(0,o.jsxs)(n.p,{children:["Hide parameters with the\xa0",(0,o.jsx)(n.strong,{children:"Show"}),"\xa0button to reduce complexity and keep the workspace clean and intuitive for experimentation."]}),"\n",(0,o.jsx)(n.p,{children:"You can also double-click a component's name and description to modify those. Component descriptions accept markdown syntax."}),"\n",(0,o.jsx)(n.h2,{id:"c3f5ed818e3b40ceb6534dc358e1a5f2",children:"Group components"}),"\n",(0,o.jsx)(n.p,{children:"Multiple components can be grouped into a single component for reuse. This is useful when combining large flows into single components (like RAG with a vector database, for example) and saving space."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Hold\xa0",(0,o.jsx)(n.strong,{children:"Shift"}),"\xa0and drag to select components."]}),"\n",(0,o.jsxs)(n.li,{children:["Select\xa0",(0,o.jsx)(n.strong,{children:"Group"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"The components merge into a single component."}),"\n",(0,o.jsx)(n.li,{children:"Double-click the name and description to change them."}),"\n",(0,o.jsx)(n.li,{children:"Save your grouped component to in the sidebar for later use!"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"887fd587589448dc8c27336d1c235b9b",children:"Component version"}),"\n",(0,o.jsx)(n.p,{children:"A component's state is stored in a database, while sidebar components are like starter templates. As soon as you drag a component from the sidebar to the workspace, the two components are no longer in parity."}),"\n",(0,o.jsxs)(n.p,{children:["The component will keep the version number it was initialized to the workspace with. Click the\xa0",(0,o.jsx)(n.strong,{children:"Update Component"}),"\xa0icon (exclamation mark) to bring the component up to the\xa0",(0,o.jsx)(n.code,{children:"latest"}),"\xa0version. This will change the code of the component in place so you can validate that the component was updated by checking its Python code before and after updating it."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var o=t(96540);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);