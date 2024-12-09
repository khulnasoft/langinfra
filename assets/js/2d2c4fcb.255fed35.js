"use strict";(self.webpackChunklanginfra_docs=self.webpackChunklanginfra_docs||[]).push([[4973],{80671:(n,e,t)=>{t.r(e),t.d(e,{CH:()=>d,assets:()=>c,chCodeConfig:()=>h,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=t(74848),a=t(28453),i=t(24754);const r={title:"Install Langinfra",sidebar_position:1,slug:"/get-started-installation"},s=void 0,l={id:"Get-Started/get-started-installation",title:"Install Langinfra",description:"You can deploy Langinfra either locally or as a hosted service with Datastax Langinfra.",source:"@site/docs/Get-Started/get-started-installation.md",sourceDirName:"Get-Started",slug:"/get-started-installation",permalink:"/get-started-installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Install Langinfra",sidebar_position:1,slug:"/get-started-installation"},sidebar:"docs",previous:{title:"Welcome to Langinfra",permalink:"/"},next:{title:"Quickstart",permalink:"/get-started-quickstart"}},c={},d={annotations:i.hk,Code:i.Cy},h={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},p=[{value:"Install Langinfra locally",id:"install-langinfra-locally",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install Langinfra with pip or pipx",id:"install-langinfra-with-pip-or-pipx",level:3},{value:"Run Langinfra",id:"run-langinfra",level:2},{value:"Manage Langinfra versions",id:"manage-langinfra-versions",level:2},{value:"DataStax Langinfra",id:"datastax-langinfra",level:2},{value:"Common installation issues",id:"common-installation-issues",level:2},{value:"No <code>langinfra.__main__</code> module",id:"no-langinfra__main__-module",level:3},{value:"Langinfra runTraceback",id:"langinfra-runtraceback",level:3},{value:"Something went wrong running migrations",id:"something-went-wrong-running-migrations",level:3}];function g(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return d||u("CH",!1),d.Code||u("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,o.jsxs)(e.p,{children:["You can deploy Langinfra either locally or as a hosted service with ",(0,o.jsx)(e.a,{href:"#datastax-langinfra",children:(0,o.jsx)(e.strong,{children:"Datastax Langinfra"})}),"."]}),"\n",(0,o.jsx)(e.h2,{id:"install-langinfra-locally",children:"Install Langinfra locally"}),"\n",(0,o.jsxs)(e.p,{children:["Install Langinfra locally with ",(0,o.jsx)(e.a,{href:"https://pypi.org/project/pip/",children:"pip"}),",\xa0",(0,o.jsx)(e.a,{href:"https://docs.astral.sh/uv/getting-started/installation/",children:"uv"}),", or ",(0,o.jsx)(e.a,{href:"https://pipx.pypa.io/stable/installation/",children:"pipx"}),"."]}),"\n",(0,o.jsx)(e.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"https://www.python.org/downloads/release/python-3100/",children:"Python 3.10 to 3.12"})," installed"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"https://pypi.org/project/pip/",children:"pip"}),",\xa0",(0,o.jsx)(e.a,{href:"https://docs.astral.sh/uv/getting-started/installation/",children:"uv"}),", or ",(0,o.jsx)(e.a,{href:"https://pipx.pypa.io/stable/installation/",children:"pipx"})," installed"]}),"\n",(0,o.jsxs)(e.li,{children:["Before installing Langinfra, we recommend creating a virtual environment to isolate your Python dependencies with ",(0,o.jsx)(e.a,{href:"https://docs.python.org/3/library/venv.html",children:"venv"}),", ",(0,o.jsx)(e.a,{href:"https://docs.astral.sh/uv/pip/environments",children:"uv"}),", or ",(0,o.jsx)(e.a,{href:"https://anaconda.org/anaconda/conda",children:"conda"})]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"install-langinfra-with-pip-or-pipx",children:"Install Langinfra with pip or pipx"}),"\n",(0,o.jsx)(e.p,{children:"Install Langinfra with pip:"}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"pip install langinfra",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(e.p,{children:"Install Langinfra with uv:"}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"uv ",props:{style:{color:"#FFA657"}}},{content:"pip install langinfra",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(e.p,{children:"Install Langinfra with pipx using the Python 3.10 executable:"}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"pipx ",props:{style:{color:"#FFA657"}}},{content:"install langinfra ",props:{style:{color:"#A5D6FF"}}},{content:"--python ",props:{style:{color:"#79C0FF"}}},{content:"python3.",props:{style:{color:"#A5D6FF"}}},{content:"10",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(e.h2,{id:"run-langinfra",children:"Run Langinfra"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"To run Langinfra, enter the following command."}),"\n"]}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langinfra run",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(e.p,{children:"To run Langinfra with uv, enter the following command."}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"uv ",props:{style:{color:"#FFA657"}}},{content:"run langinfra run",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsxs)(e.ol,{start:"2",children:["\n",(0,o.jsxs)(e.li,{children:["Confirm that a local Langinfra instance starts by visiting\xa0",(0,o.jsx)(e.code,{children:"http://127.0.0.1:7860"}),"\xa0in a Chromium-based browser."]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Now that Langinfra is running, follow the ",(0,o.jsx)(e.a,{href:"/get-started-quickstart",children:"Quickstart"})," to create your first flow."]}),"\n",(0,o.jsx)(e.h2,{id:"manage-langinfra-versions",children:"Manage Langinfra versions"}),"\n",(0,o.jsx)(e.p,{children:"To upgrade Langinfra to the latest version, use the pip upgrade command."}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"pip install langinfra ",props:{style:{color:"#A5D6FF"}}},{content:"-U",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(e.p,{children:"To upgrade Langinfra to the latest version with uv, use the uv pip upgrade command."}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"uv ",props:{style:{color:"#FFA657"}}},{content:"pip install langinfra ",props:{style:{color:"#A5D6FF"}}},{content:"-U",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(e.p,{children:"To install a specific version of the Langinfra package, add the required version to the command."}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"pip install langinfra==",props:{style:{color:"#A5D6FF"}}},{content:"1.1",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsxs)(e.p,{children:["To reinstall Langinfra and all of its dependencies, add the ",(0,o.jsx)(e.code,{children:"--force-reinstall"})," flag to the command."]}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"pip install langinfra ",props:{style:{color:"#A5D6FF"}}},{content:"--force-reinstall",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(e.h2,{id:"datastax-langinfra",children:"DataStax Langinfra"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"DataStax Langinfra"})," is a hosted version of Langinfra integrated with\xa0",(0,o.jsx)(e.a,{href:"https://www.datastax.com/products/datastax-astra",children:"Astra DB"}),". Be up and running in minutes with no installation or setup required.\xa0",(0,o.jsx)(e.a,{href:"https://astra.datastax.com/signup?type=langinfra",children:"Sign up for free"}),"."]}),"\n",(0,o.jsx)(e.h2,{id:"common-installation-issues",children:"Common installation issues"}),"\n",(0,o.jsx)(e.p,{children:"This is a list of possible issues that you may encounter when installing and running Langinfra."}),"\n",(0,o.jsxs)(e.h3,{id:"no-langinfra__main__-module",children:["No ",(0,o.jsx)(e.code,{children:"langinfra.__main__"})," module"]}),"\n",(0,o.jsxs)(e.p,{children:["When you try to run Langinfra with the command ",(0,o.jsx)(e.code,{children:"langinfra run"}),", you encounter the following error:"]}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:">",props:{style:{color:"#FF7B72"}}},{content:" No\xa0module\xa0named\xa0",props:{style:{color:"#C9D1D9"}}},{content:"'langinfra.__main__'",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["Run\xa0",(0,o.jsx)(e.code,{children:"python\xa0-m langinfra run"}),"\xa0instead of\xa0",(0,o.jsx)(e.code,{children:"langinfra run"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:["If that doesn't work, reinstall the latest Langinfra version with\xa0",(0,o.jsx)(e.code,{children:"python\xa0-m pip install langinfra\xa0-U"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:["If that doesn't work, reinstall Langinfra and its dependencies with\xa0",(0,o.jsx)(e.code,{children:"python\xa0-m pip install langinfra\xa0--pre\xa0-U\xa0--force-reinstall"}),"."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"langinfra-runtraceback",children:"Langinfra runTraceback"}),"\n",(0,o.jsxs)(e.p,{children:["When you try to run Langinfra using the command\xa0",(0,o.jsx)(e.code,{children:"langinfra run"}),", you encounter the following error:"]}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:">",props:{style:{color:"#FF7B72"}}},{content:" langinfra runTraceback (",props:{style:{color:"#C9D1D9"}}},{content:"most ",props:{style:{color:"#FFA657"}}},{content:"recent call last",props:{style:{color:"#A5D6FF"}}},{content:"): File ",props:{style:{color:"#C9D1D9"}}},{content:'".../langinfra"',props:{style:{color:"#A5D6FF"}}},{content:", line 5, ",props:{style:{color:"#C9D1D9"}}},{content:"in <",props:{style:{color:"#FF7B72"}}},{content:"module",props:{style:{color:"#C9D1D9"}}},{content:">",props:{style:{color:"#FF7B72"}}},{content:"  from langinfra.__main__ import mainModuleNotFoundError: No module named ",props:{style:{color:"#C9D1D9"}}},{content:"'langinfra.__main__'",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(e.p,{children:"There are two possible reasons for this error:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["You've installed Langinfra using\xa0",(0,o.jsx)(e.code,{children:"pip install langinfra"}),"\xa0but you already had a previous version of Langinfra installed in your system. In this case, you might be running the wrong executable. To solve this issue, run the correct executable by running\xa0",(0,o.jsx)(e.code,{children:"python\xa0-m langinfra run"}),"\xa0instead of\xa0",(0,o.jsx)(e.code,{children:"langinfra run"}),". If that doesn't work, try uninstalling and reinstalling Langinfra with\xa0",(0,o.jsx)(e.code,{children:"python\xa0-m pip install langinfra\xa0--pre\xa0-U"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:["Some version conflicts might have occurred during the installation process. Run\xa0",(0,o.jsx)(e.code,{children:"python\xa0-m pip install langinfra\xa0--pre\xa0-U\xa0--force-reinstall"}),"\xa0to reinstall Langinfra and its dependencies."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"something-went-wrong-running-migrations",children:"Something went wrong running migrations"}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:">",props:{style:{color:"#FF7B72"}}},{content:" Something went wrong running migrations. Please, run\xa0",props:{style:{color:"#C9D1D9"}}},{content:"'langinfra migration --fix'",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(e.p,{children:"Clear the cache by deleting the contents of the cache folder."}),"\n",(0,o.jsx)(e.p,{children:"This folder can be found at:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Linux or WSL2 on Windows"}),":\xa0",(0,o.jsx)(e.code,{children:"home/<username>/.cache/langinfra/"})]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"MacOS"}),":\xa0",(0,o.jsx)(e.code,{children:"/Users/<username>/Library/Caches/langinfra/"})]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["This error can occur during Langinfra upgrades when the new version can't override\xa0",(0,o.jsx)(e.code,{children:"langinfra-pre.db"}),"\xa0in\xa0",(0,o.jsx)(e.code,{children:".cache/langinfra/"}),". Clearing the cache removes this file but also erases your settings."]}),"\n",(0,o.jsx)(e.p,{children:"If you wish to retain your files, back them up before clearing the folder."})]})}function f(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(g,{...n})}):g(n)}function u(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);