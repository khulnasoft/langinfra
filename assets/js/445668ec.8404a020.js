"use strict";(self.webpackChunklanginfra_docs=self.webpackChunklanginfra_docs||[]).push([[6008],{68553:(e,n,t)=>{t.r(n),t.d(n,{CH:()=>d,assets:()=>c,chCodeConfig:()=>h,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var o=t(74848),r=t(28453),i=t(24754);const s={title:"Contribute to Langinfra",sidebar_position:1,slug:"/contributing-how-to-contribute"},l=void 0,a={id:"Contributing/contributing-how-to-contribute",title:"Contribute to Langinfra",description:"This guide is intended to help you start contributing to Langinfra.",source:"@site/docs/Contributing/contributing-how-to-contribute.md",sourceDirName:"Contributing",slug:"/contributing-how-to-contribute",permalink:"/contributing-how-to-contribute",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Contribute to Langinfra",sidebar_position:1,slug:"/contributing-how-to-contribute"},sidebar:"docs",previous:{title:"Request an enhancement or report a bug",permalink:"/contributing-github-issues"},next:{title:"Telemetry",permalink:"/contributing-telemetry"}},c={},d={annotations:i.hk,Code:i.Cy},h={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},u=[{value:"Contribute code",id:"contribute-code",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Clone the Langinfra Repository",id:"clone-the-langinfra-repository",level:3},{value:"Prepare the development environment",id:"prepare-the-development-environment",level:3},{value:"Debug",id:"debug",level:3},{value:"Run Langinfra locally",id:"run-langinfra-locally",level:3},{value:"Contribute documentation",id:"contribute-documentation",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Clone the Langinfra repository",id:"clone-the-langinfra-repository-1",level:3},{value:"Open a pull request",id:"open-a-pull-request",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return d||f("CH",!1),d.Code||f("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,o.jsx)(n.p,{children:"This guide is intended to help you start contributing to Langinfra.\nAs an open-source project in a rapidly developing field, Langinfra welcomes contributions, whether it be in the form of a new feature, improved infrastructure, or better documentation."}),"\n",(0,o.jsxs)(n.p,{children:["To contribute code or documentation to this project, follow the ",(0,o.jsx)(n.a,{href:"https://docs.github.com/en/get-started/quickstart/contributing-to-projects",children:"fork and pull request"})," workflow."]}),"\n",(0,o.jsx)(n.h2,{id:"contribute-code",children:"Contribute code"}),"\n",(0,o.jsxs)(n.p,{children:["Develop Langinfra locally with ",(0,o.jsx)(n.a,{href:"https://docs.astral.sh/uv/getting-started/installation/",children:"uv"})," and ",(0,o.jsx)(n.a,{href:"https://nodejs.org/en/download/package-manager",children:"Node.js"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.astral.sh/uv/getting-started/installation/",children:"uv(>=0.4)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://nodejs.org/en/download/package-manager",children:"Node.js"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"clone-the-langinfra-repository",children:"Clone the Langinfra Repository"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Navigate to the ",(0,o.jsx)(n.a,{href:"https://github.com/khulnasoft/langinfra",children:"Langinfra GitHub repository"}),", and then click ",(0,o.jsx)(n.strong,{children:"Fork"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add the new remote to your local repository on your local machine:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"git ",props:{style:{color:"#FFA657"}}},{content:"remote add fork https://github.com/",props:{style:{color:"#A5D6FF"}}},{content:"<",props:{style:{color:"#FF7B72"}}},{content:"your_git_usernam",props:{style:{color:"#A5D6FF"}}},{content:"e",props:{style:{color:"#C9D1D9"}}},{content:">",props:{style:{color:"#FF7B72"}}},{content:"/langinfra.git",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(n.h3,{id:"prepare-the-development-environment",children:"Prepare the development environment"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Create development hooks."}),"\n"]}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"make ",props:{style:{color:"#FFA657"}}},{content:"init",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsxs)(n.p,{children:["This command sets up the development environment by installing backend and frontend dependencies, building the frontend static files, and initializing the project. It runs ",(0,o.jsx)(n.code,{children:"make install_backend"}),", ",(0,o.jsx)(n.code,{children:"make install_frontend"}),", ",(0,o.jsx)(n.code,{children:"make build_frontend"}),", and finally ",(0,o.jsx)(n.code,{children:"uv run langinfra run"})," to start the application."]}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Run ",(0,o.jsx)(n.code,{children:"make lint"}),", ",(0,o.jsx)(n.code,{children:"make format"}),", and ",(0,o.jsx)(n.code,{children:"make unit_tests"})," before pushing to the repository."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"debug",children:"Debug"}),"\n",(0,o.jsxs)(n.p,{children:["The repo includes a ",(0,o.jsx)(n.code,{children:".vscode/launch.json"})," file for debugging the backend in VSCode, which is faster than debugging with Docker Compose. To debug Langinfra with the ",(0,o.jsx)(n.code,{children:"launch.json"})," file in VSCode:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Open Langinfra in VSCode."}),"\n",(0,o.jsxs)(n.li,{children:["Press ",(0,o.jsx)(n.strong,{children:"Ctrl+Shift+D"})," for Windows ",(0,o.jsx)(n.strong,{children:"or Cmd+Shift+D"})," for Mac to open the Run and Debug view."]}),"\n",(0,o.jsxs)(n.li,{children:["From the ",(0,o.jsx)(n.strong,{children:"Run and Debug"})," dropdown, choose a debugging configuration."]}),"\n",(0,o.jsxs)(n.li,{children:["Click the green ",(0,o.jsx)(n.strong,{children:"Play"})," button or press F5 to start debugging."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"launch.json"})," to quickly debug different parts of your application, like the backend, frontend, or CLI, directly from VSCode."]}),"\n",(0,o.jsx)(n.h3,{id:"run-langinfra-locally",children:"Run Langinfra locally"}),"\n",(0,o.jsxs)(n.p,{children:["After setting up the environment with ",(0,o.jsx)(n.code,{children:"make init"}),", you can run Langinfra's backend and frontend separately for development.\nLanginfra recommends using a virtual environment like ",(0,o.jsx)(n.a,{href:"https://docs.python.org/3/library/venv.html",children:"venv"})," or ",(0,o.jsx)(n.a,{href:"https://anaconda.org/anaconda/conda",children:"conda"})," to isolate dependencies."]}),"\n",(0,o.jsxs)(n.p,{children:["Before you begin, ensure you have ",(0,o.jsx)(n.a,{href:"https://docs.astral.sh/uv/getting-started/installation/",children:"uv"})," and ",(0,o.jsx)(n.a,{href:"https://nodejs.org/en/download/package-manager",children:"Node.js"})," installed."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"In the repository root, install the dependencies and start the development server for the backend:"}),"\n"]}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"make ",props:{style:{color:"#FFA657"}}},{content:"backend",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Install dependencies and start the frontend:"}),"\n"]}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"make ",props:{style:{color:"#FFA657"}}},{content:"frontend",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(n.p,{children:"This approach allows you to work on the backend and frontend independently, with hot-reloading for faster development."}),"\n",(0,o.jsx)(n.h2,{id:"contribute-documentation",children:"Contribute documentation"}),"\n",(0,o.jsxs)(n.p,{children:["The documentation is built using ",(0,o.jsx)(n.a,{href:"https://docusaurus.io/",children:"Docusaurus"})," and written in ",(0,o.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features",children:"Markdown"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://nodejs.org/en/download/package-manager",children:"Node.js"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"clone-the-langinfra-repository-1",children:"Clone the Langinfra repository"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Navigate to the ",(0,o.jsx)(n.a,{href:"https://github.com/khulnasoft/langinfra",children:"Langinfra GitHub repository"}),", and then click ",(0,o.jsx)(n.strong,{children:"Fork"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add the new remote to your local repository on your local machine:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"git ",props:{style:{color:"#FFA657"}}},{content:"remote add fork https://github.com/",props:{style:{color:"#A5D6FF"}}},{content:"<",props:{style:{color:"#FF7B72"}}},{content:"your_git_usernam",props:{style:{color:"#A5D6FF"}}},{content:"e",props:{style:{color:"#C9D1D9"}}},{content:">",props:{style:{color:"#FF7B72"}}},{content:"/langinfra.git",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"To run the documentation locally, run the following commands:"}),"\n"]}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"cd ",props:{style:{color:"#79C0FF"}}},{content:"docs",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"npm ",props:{style:{color:"#FFA657"}}},{content:"install",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"npm ",props:{style:{color:"#FFA657"}}},{content:"run start",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsxs)(n.p,{children:["The documentation will be available at ",(0,o.jsx)(n.code,{children:"localhost:3000"})," and all the files are located in the ",(0,o.jsx)(n.code,{children:"docs/docs"})," folder."]}),"\n",(0,o.jsx)(n.h2,{id:"open-a-pull-request",children:"Open a pull request"}),"\n",(0,o.jsxs)(n.p,{children:["Once you have written and manually tested your changes with ",(0,o.jsx)(n.code,{children:"make lint"})," and ",(0,o.jsx)(n.code,{children:"make unit_tests"}),", open a pull request to send your changes upstream to the main Langinfra repository."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Open a new GitHub pull request with your patch against the ",(0,o.jsx)(n.code,{children:"main"})," branch."]}),"\n",(0,o.jsxs)(n.li,{children:["Ensure the PR title follows semantic commit conventions. For example, features are ",(0,o.jsx)(n.code,{children:"feat: add new feature"})," and fixes are ",(0,o.jsx)(n.code,{children:"fix: correct issue with X"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"A Langinfra maintainer will review your pull request. Thanks for your contribution!"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Some additional guidance on pull request titles:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Ensure the pull request description clearly describes the problem and solution. If the PR fixes an issue, include a link to the fixed issue in the PR description with ",(0,o.jsx)(n.code,{children:"Fixes #1234"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Pull request titles appear in Langinfra's release notes, so they should explain what the PR does as explicitly as possible."}),"\n",(0,o.jsxs)(n.li,{children:["Pull requests should strive to fix one thing ",(0,o.jsx)(n.strong,{children:"only"}),", and should contain a good description of what is being fixed."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For more information, see the ",(0,o.jsx)(n.a,{href:"https://devguide.python.org/getting-started/pull-request-lifecycle/index.html#making-good-commits",children:"Python Developer's Guide"}),"."]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}function f(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);