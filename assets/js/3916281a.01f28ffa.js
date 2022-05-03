"use strict";(self.webpackChunkharvesterhci_io=self.webpackChunkharvesterhci_io||[]).push([[332],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},931:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={title:"NIC Naming Scheme",descripion:"NIC Naming Scheme Change",slug:"nic-naming-scheme",authors:[{name:"Date Huang",title:"Software Engineer",url:"https://github.com/tjjh89017",image_url:"https://github.com/tjjh89017.png"}],tags:["network"],hide_table_of_contents:!1},c="NIC Naming Scheme",s={permalink:"/kb/nic-naming-scheme",editUrl:"https://github.com/harvester/harvesterhci.io/edit/main/kb/kb/2022-04-06/nic_naming_scheme.md",source:"@site/kb/2022-04-06/nic_naming_scheme.md",title:"NIC Naming Scheme",description:"NIC Naming Scheme changed after upgrading to v1.0.1",date:"2022-04-06T00:00:00.000Z",formattedDate:"April 6, 2022",tags:[{label:"network",permalink:"/kb/tags/network"}],readingTime:1.825,truncated:!1,authors:[{name:"Date Huang",title:"Software Engineer",url:"https://github.com/tjjh89017",image_url:"https://github.com/tjjh89017.png",imageURL:"https://github.com/tjjh89017.png"}],frontMatter:{title:"NIC Naming Scheme",descripion:"NIC Naming Scheme Change",slug:"nic-naming-scheme",authors:[{name:"Date Huang",title:"Software Engineer",url:"https://github.com/tjjh89017",image_url:"https://github.com/tjjh89017.png",imageURL:"https://github.com/tjjh89017.png"}],tags:["network"],hide_table_of_contents:!1},nextItem:{title:"Multiple NICs VM Connectivity",permalink:"/kb/multiple-nics-vm-connectivity"}},p={authorsImageUrls:[void 0]},m=[{value:"NIC Naming Scheme changed after upgrading to v1.0.1",id:"nic-naming-scheme-changed-after-upgrading-to-v101",level:2},{value:"Effect Settings and Workaround",id:"effect-settings-and-workaround",level:2},{value:"Startup Network Configuration",id:"startup-network-configuration",level:3},{value:"Harvester VLAN Network Configuration",id:"harvester-vlan-network-configuration",level:3},{value:"Modify ClusterNetworks",id:"modify-clusternetworks",level:4},{value:"Modify NodeNetworks",id:"modify-nodenetworks",level:4}],u={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"nic-naming-scheme-changed-after-upgrading-to-v101"},"NIC Naming Scheme changed after upgrading to v1.0.1"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," in OpenSUSE Leap 15.3 which is the base OS of Harvester is upgraded to ",(0,r.kt)("inlineCode",{parentName:"p"},"246.16-150300.7.39.1"),". In this version, ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," will enable additional naming scheme ",(0,r.kt)("inlineCode",{parentName:"p"},"sle15-sp3")," which is ",(0,r.kt)("inlineCode",{parentName:"p"},"v238")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"bridge_no_slot"),". When there is a PCI bridge associated with NIC, ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," will never generate ",(0,r.kt)("inlineCode",{parentName:"p"},"ID_NET_NAME_SLOT")," and naming policy in ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/network/99-default.link")," will fallback to ",(0,r.kt)("inlineCode",{parentName:"p"},"ID_NET_NAME_PATH"),". According to this change, NIC names might be changed in your Harvester nodes during the upgrade process from ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.0.0")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.0.1-rc1")," or above, and it will cause network issues that are associated with NIC names."),(0,r.kt)("h2",{id:"effect-settings-and-workaround"},"Effect Settings and Workaround"),(0,r.kt)("h3",{id:"startup-network-configuration"},"Startup Network Configuration"),(0,r.kt)("p",null,"NIC name changes will need to update the name in ",(0,r.kt)("inlineCode",{parentName:"p"},"/oem/99_custom.yaml"),". You could use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/upgrade-helpers/blob/main/hack/udev_v238_sle15-sp3.py"},"migration script")," to change the NIC names which are associated with a PCI bridge."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You could find an identical machine to test naming changes before applying the configuration to production machines"))),(0,r.kt)("p",null,"You could simply execute the script with root account in ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.0.0")," via"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# python3 udev_v238_sle15-sp3.py\n")),(0,r.kt)("p",null,"It will output the patched configuration to the screen and you could compare it to the original one to ensure there is no exception. (e.g. We could use ",(0,r.kt)("inlineCode",{parentName:"p"},"vimdiff")," to check the configuration)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# python3 udev_v238_sle15-spe3.py > /oem/test\n# vimdiff /oem/test /oem/99_custom.yaml\n")),(0,r.kt)("p",null,"After checking the result, we could execute the script with ",(0,r.kt)("inlineCode",{parentName:"p"},"--really-want-to-do")," to override the configuration. It will also back up the original configuration file with a timestamp before patching it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# python3 udev_v238_sle15-sp3.py --really-want-to-do\n")),(0,r.kt)("h3",{id:"harvester-vlan-network-configuration"},"Harvester VLAN Network Configuration"),(0,r.kt)("p",null,"If your VLAN network is associated with NIC name directly without ",(0,r.kt)("inlineCode",{parentName:"p"},"bonding"),", you will need to migrate ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterNetwork")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeNetwork")," with the previous section together."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If your VLAN network is associated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"bonding")," name in ",(0,r.kt)("inlineCode",{parentName:"p"},"/oem/99_custom.yaml"),", you could skip this section."))),(0,r.kt)("h4",{id:"modify-clusternetworks"},"Modify ClusterNetworks"),(0,r.kt)("p",null,"You need to modify ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterNetworks")," via "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl edit clusternetworks vlan\n")),(0,r.kt)("p",null,"search this pattern"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  defaultPhysicalNIC: <Your NIC name>\n")),(0,r.kt)("p",null,"and change to new NIC name"),(0,r.kt)("h4",{id:"modify-nodenetworks"},"Modify NodeNetworks"),(0,r.kt)("p",null,"You need to modify ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeNetworks")," via"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl edit nodenetworks <Node name>-vlan\n")),(0,r.kt)("p",null,"search this pattern"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  nic: <Your NIC name>\n")),(0,r.kt)("p",null,"and change to new NIC name"))}d.isMDXComponent=!0}}]);