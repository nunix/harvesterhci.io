(self.webpackChunkharvesterhci=self.webpackChunkharvesterhci||[]).push([[9942],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3527:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={sidebar_position:9},l={unversionedId:"development/dev-mode",id:"version-0.2.0/development/dev-mode",isDocsHomePage:!1,title:"Developer Mode Installation",description:"Developer mode (dev mode) is intended to be used for testing and development purposes.",source:"@site/versioned_docs/version-0.2.0/development/dev-mode.md",sourceDirName:"development",slug:"/development/dev-mode",permalink:"/docs/development/dev-mode",editUrl:"https://github.com/harvester/harvester.github.io/edit/master/website/versioned_docs/version-0.2.0/development/dev-mode.md",version:"0.2.0",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"version-0.2.0/tutorialSidebar",previous:{title:"Harvester Node Driver",permalink:"/docs/rancher-intergration/node-driver"}},s=[{value:"Requirements",id:"requirements",children:[]},{value:"Install as an App",id:"install-as-an-app",children:[{value:"Requirements",id:"requirements-1",children:[]},{value:"Option 1: Install using Helm",id:"option-1-install-using-helm",children:[]},{value:"Option 2: Install using Rancher",id:"option-2-install-using-rancher",children:[]},{value:"Digital Ocean Test Environment",id:"digital-ocean-test-environment",children:[]}]}],p={toc:s};function c(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Developer mode (dev mode) is intended to be used for testing and development purposes."),(0,i.kt)("p",null,"Note: This ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/TG0GaAD_6J4"},"video")," shows the dev mode installation."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For dev mode, it is assumed that Multus is installed across your cluster and a corresponding NetworkAttachmentDefinition CRD was created."),(0,i.kt)("li",{parentName:"ul"},"For dev mode, if you are using an ",(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/"},"RKE")," cluster, please ensure the ",(0,i.kt)("inlineCode",{parentName:"li"},"ipv4.ip_forward")," is enabled for the CNI plugin so that the pod network works as expected. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/94"},"#94"),". ")),(0,i.kt)("h2",{id:"install-as-an-app"},"Install as an App"),(0,i.kt)("p",null,"Harvester can be installed on a Kubernetes cluster in the following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install with the ",(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm")," CLI"),(0,i.kt)("li",{parentName:"ul"},"Install as a Rancher catalog app, in which case the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester"},"harvester/harvester")," repo is added to the Rancher Catalog as a Helm ",(0,i.kt)("inlineCode",{parentName:"li"},"v3")," app\n")),(0,i.kt)("p",null,"Please refer to the Harvester Helm chart for more details on installing and configuring the Helm chart."),(0,i.kt)("h3",{id:"requirements-1"},"Requirements"),(0,i.kt)("p",null,"The Kubernetes node must have hardware virtualization support."),(0,i.kt)("p",null,"To validate the support, use this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cat /proc/cpuinfo | grep vmx\n")),(0,i.kt)("h3",{id:"option-1-install-using-helm"},"Option 1: Install using Helm"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone the GitHub repository:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ git clone https://github.com/harvester/harvester.git --depth=1\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the Helm chart:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ cd harvester/deploy/charts\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the Harvester chart with the following commands:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"### To install the chart with the release name `harvester`:\n\n## Create the target namespace\n$ kubectl create ns harvester-system\n\n## Install the chart to the target namespace\n$ helm install harvester harvester \\\n  --namespace harvester-system \\\n  --set longhorn.enabled=true,minio.persistence.storageClass=longhorn\n")),(0,i.kt)("h3",{id:"option-2-install-using-rancher"},"Option 2: Install using Rancher"),(0,i.kt)("p",null,"Tip: You can create a testing Kubernetes environment in Rancher using the Digital Ocean cloud provider. For details, see ",(0,i.kt)("a",{parentName:"p",href:"#digital-ocean-test-environment"},"this section.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add the Harvester repo ",(0,i.kt)("inlineCode",{parentName:"li"},"https://github.com/harvester/harvester")," to your Rancher catalogs by clicking ",(0,i.kt)("strong",{parentName:"li"},"Global > Tools > Catalogs.")),(0,i.kt)("li",{parentName:"ol"},"Specify the URL and name. Set the branch to ",(0,i.kt)("inlineCode",{parentName:"li"},"stable")," if you need a stable release version. Set the ",(0,i.kt)("inlineCode",{parentName:"li"},"Helm version")," to be ",(0,i.kt)("inlineCode",{parentName:"li"},"Helm v3"),".\n",(0,i.kt)("img",{alt:"harvester-catalog.png",src:n(3206).Z})),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create.")),(0,i.kt)("li",{parentName:"ol"},"Navigate to your project-level ",(0,i.kt)("inlineCode",{parentName:"li"},"Apps.")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Launch")," and choose the Harvester app."),(0,i.kt)("li",{parentName:"ol"},"(Optional) You can modify the configurations if needed. Otherwise, use the default options."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Launch")," and wait for the app's components to be ready."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("inlineCode",{parentName:"li"},"/index.html")," link to navigate to the Harvester UI:\n",(0,i.kt)("img",{alt:"harvester-app.png",src:n(9559).Z}))),(0,i.kt)("h3",{id:"digital-ocean-test-environment"},"Digital Ocean Test Environment"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/"},"Digital Ocean")," is one of the cloud providers who support nested virtualization by default."),(0,i.kt)("p",null,"You can create a testing Kubernetes environment in Rancher using the Digital Ocean cloud provider."),(0,i.kt)("p",null,"We recommend using the ",(0,i.kt)("inlineCode",{parentName:"p"},"8 core, 16 GB RAM")," node, which will have nested virtualization enabled by default."),(0,i.kt)("p",null,"This screenshot shows how to create a Rancher node template that would allow Rancher to provision such a node in Digital Ocean:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"do.png",src:n(9208).Z})),(0,i.kt)("p",null,"For more information on how to launch Digital Ocean nodes with Rancher, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.x/en/cluster-provisioning/rke-clusters/node-pools/digital-ocean/"},"Rancher documentation.")))}c.isMDXComponent=!0},9208:function(e,t,n){"use strict";t.Z=n.p+"assets/images/do-9d47cfbd0126b6b6c9eae88caa80a3ce.png"},9559:function(e,t,n){"use strict";t.Z=n.p+"assets/images/harvester-app-acaec54a799c0824d86185035265b030.png"},3206:function(e,t,n){"use strict";t.Z=n.p+"assets/images/harvester-catalog-7086351244a36fc1d1aac6a8fb03af9e.png"}}]);