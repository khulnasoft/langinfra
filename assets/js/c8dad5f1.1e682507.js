"use strict";(self.webpackChunklanginfra_docs=self.webpackChunklanginfra_docs||[]).push([[3917],{72572:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(74848),o=t(28453);const a={title:"Setup",sidebar_position:0,slug:"/integrations/notion/setup"},s="Set up a Notion App",r={id:"Integrations/Notion/integrations-notion",title:"Setup",description:"To use Notion components in Langinfra, you first need to create a Notion integration and configure it with the necessary capabilities. This guide will walk you through the process of setting up a Notion integration and granting it access to your Notion databases.",source:"@site/docs/Integrations/Notion/integrations-notion.md",sourceDirName:"Integrations/Notion",slug:"/integrations/notion/setup",permalink:"/integrations/notion/setup",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Setup",sidebar_position:0,slug:"/integrations/notion/setup"},sidebar:"docs",previous:{title:"Integrate Google Cloud Vertex AI with Langinfra",permalink:"/integrations-setup-google-cloud-vertex-ai-langinfra"},next:{title:"Notion Conversational Agent",permalink:"/integrations/notion/notion-agent-conversational"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a Notion Integration",id:"create-a-notion-integration",level:2},{value:"Configure Integration Capabilities",id:"configure-integration-capabilities",level:2},{value:"Obtain Integration Token",id:"obtain-integration-token",level:2},{value:"Grant Integration Access to Notion Databases",id:"grant-integration-access-to-notion-databases",level:2},{value:"Build with Notion Components in Langinfra",id:"build-with-notion-components-in-langinfra",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"set-up-a-notion-app",children:"Set up a Notion App"})}),"\n",(0,i.jsx)(n.p,{children:"To use Notion components in Langinfra, you first need to create a Notion integration and configure it with the necessary capabilities. This guide will walk you through the process of setting up a Notion integration and granting it access to your Notion databases."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A Notion account with access to the workspace where you want to use the integration."}),"\n",(0,i.jsx)(n.li,{children:"Admin permissions in the Notion workspace to create and manage integrations."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"create-a-notion-integration",children:"Create a Notion Integration"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://www.notion.com/my-integrations",children:"Notion Integrations"})," page."]}),"\n",(0,i.jsx)(n.li,{children:'Click on the "New integration" button.'}),"\n",(0,i.jsx)(n.li,{children:"Give your integration a name and select the workspace where you want to use it."}),"\n",(0,i.jsx)(n.li,{children:'Click "Submit" to create the integration.'}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["When creating the integration, make sure to enable the necessary capabilities based on your requirements. Refer to the ",(0,i.jsx)(n.a,{href:"https://developers.notion.com/reference/capabilities",children:"Notion Integration Capabilities"})," documentation for more information on each capability."]})}),"\n",(0,i.jsx)(n.h2,{id:"configure-integration-capabilities",children:"Configure Integration Capabilities"}),"\n",(0,i.jsx)(n.p,{children:"After creating the integration, you need to configure its capabilities to define what actions it can perform and what data it can access."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In the integration settings page, go to the ",(0,i.jsx)(n.strong,{children:"Capabilities"})," tab."]}),"\n",(0,i.jsxs)(n.li,{children:["Enable the required capabilities for your integration. For example:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'If your integration needs to read data from Notion, enable the "Read content" capability.'}),"\n",(0,i.jsx)(n.li,{children:'If your integration needs to create new content in Notion, enable the "Insert content" capability.'}),"\n",(0,i.jsx)(n.li,{children:'If your integration needs to update existing content in Notion, enable the "Update content" capability.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Configure the user information access level based on your integration's requirements."}),"\n",(0,i.jsx)(n.li,{children:"Save the changes."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"obtain-integration-token",children:"Obtain Integration Token"}),"\n",(0,i.jsx)(n.p,{children:"To authenticate your integration with Notion, you need to obtain an integration token."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'In the integration settings page, go to the "Secrets" tab.'}),"\n",(0,i.jsx)(n.li,{children:'Copy the "Internal Integration Token" value. This token will be used to authenticate your integration with Notion.'}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Your integration token is a sensitive piece of information. Make sure to keep it secure and never share it publicly. Store it safely in your Langinfra configuration or environment variables."})}),"\n",(0,i.jsx)(n.h2,{id:"grant-integration-access-to-notion-databases",children:"Grant Integration Access to Notion Databases"}),"\n",(0,i.jsx)(n.p,{children:"For your integration to interact with Notion databases, you need to grant it access to the specific databases it will be working with."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open the Notion database that you want your integration to access."}),"\n",(0,i.jsx)(n.li,{children:'Click on the "Share" button in the top-right corner of the page.'}),"\n",(0,i.jsx)(n.li,{children:'In the "Invite" section, select your integration from the list.'}),"\n",(0,i.jsx)(n.li,{children:'Click "Invite" to grant the integration access to the database.'}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"If your database contains references to other databases, you need to grant the integration access to those referenced databases as well. Repeat step 4 for each referenced database to ensure your integration has the necessary access."})}),"\n",(0,i.jsx)(n.h2,{id:"build-with-notion-components-in-langinfra",children:"Build with Notion Components in Langinfra"}),"\n",(0,i.jsx)(n.p,{children:"Once you have set up your Notion integration and granted it access to the required databases, you can start using the Notion components in Langinfra."}),"\n",(0,i.jsx)(n.p,{children:"Langinfra provides the following Notion components:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Search"}),": Searches all pages and databases that have been shared with the integration. You can filter results to either pages or databases and specify the sort direction."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"List Users"}),": Retrieves a list of users from the Notion workspace."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"List Database Properties"}),": Retrieves the properties of a specified Notion database."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Create Page"}),": Creates a new page in a specified Notion database with the provided properties."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Update Page Property"}),": Updates the properties of an existing Notion page."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Add Content to Page"}),": Converts markdown text to Notion blocks and appends them to a specified Notion page."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"List Pages"}),": Queries a Notion database with filtering and sorting options."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Page Content Viewer"}),": Retrieves the content of a Notion page as plain text."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'Each of these components output both "Data" and "Tool":'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'The "Data" output can be used directly in your Langinfra for further processing or display.'}),"\n",(0,i.jsx)(n.li,{children:'The "Tool" output can be utilized in Langinfra Agents, allowing them to interact with Notion programmatically.'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developers.notion.com/docs/getting-started",children:"Notion API Documentation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developers.notion.com/reference/capabilities",children:"Notion Integration Capabilities"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you encounter any issues or have questions, please reach out to our support team or consult the Langinfra community forums."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(96540);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);