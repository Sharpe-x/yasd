(this.webpackJsonpyasd=this.webpackJsonpyasd||[]).push([[10],{257:function(e,t,n){"use strict";var i=n(0),c=n(245),a=n(264),r=(n(1),n(9));var o={name:"by4vme",styles:"padding:0.3rem;"};t.a=()=>{const e=Object(r.g)();return Object(i.f)(c.a,{onClick:()=>e.goBack(),label:"back",css:[o,{width:"2rem",height:"2rem",marginRight:"0.75rem",alignSelf:"center"}]},Object(i.f)(a.a,null))}},262:function(e,t,n){"use strict";var i=n(50),c=n(0),a=n(167),r=n(266),o=n(1),s=n(257);var d={name:"z89845",styles:"margin-right:env(safe-area-inset-right);"},l={name:"1od6or",styles:"padding-left:env(safe-area-inset-left);"};t.a=e=>{const[t,n]=Object(o.useState)((()=>{var t;return null!==(t=e.defaultAutoRefreshState)&&void 0!==t&&t})),v=Object(o.useMemo)((()=>"undefined"===typeof e.sticky||e.sticky),[e.sticky]);return Object(o.useEffect)((()=>{e.hasAutoRefresh&&e.onAuthRefreshStateChange&&e.onAuthRefreshStateChange(t)}),[t,e,e.hasAutoRefresh,e.onAuthRefreshStateChange]),Object(c.f)(a.a,{size:"tera",noMargin:!0,css:[v?{position:"sticky",top:"0"}:"",{display:"flex",alignItems:"center",justifyContent:"space-between",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)","--bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--bg-opacity))",zIndex:"10",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.75rem",paddingBottom:"0.75rem"},Object(i.a)("")]},Object(c.f)("div",{css:[l,{display:"flex",alignItems:"center"}]},Object(c.f)(s.a,null),Object(c.f)("div",null,e.title)),e.hasAutoRefresh&&Object(c.f)("div",{onClick:()=>n(!t),css:[{"--bg-opacity":"1",backgroundColor:"rgba(66, 153, 225, var(--bg-opacity))","--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",cursor:"pointer",width:"2.5rem",height:"2.5rem",borderRadius:"0.5rem",display:"flex",alignItems:"center",justifyContent:"center",transitionProperty:"background-color, border-color, color, fill, stroke",transitionDuration:"200ms",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)"},t&&{"--bg-opacity":"1",backgroundColor:"rgba(252, 129, 129, var(--bg-opacity))"},d]},Object(c.f)(r.a,{css:[{width:"1.5rem",height:"1.5rem"},t&&{animation:"spin 1s linear infinite"}]})))}},264:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(1),c=n.n(i),a=function(e){return c.a.createElement("svg",e,c.a.createElement("path",{d:"M10 4L6 8l4 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};a.defaultProps={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},265:function(e,t,n){"use strict";var i=n(0);n(1);t.a=e=>{let{children:t}=e;return Object(i.f)("div",{css:{position:"relative",paddingBottom:"1.25rem"}},t)}},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(1),c=n.n(i),a=function(e){return c.a.createElement("svg",e,c.a.createElement("path",{d:"M2 8a1 1 0 00-2 0h2zm6-8a1 1 0 000 2V0zm6 8a6 6 0 01-6 6v2a8 8 0 008-8h-2zm-6 6a6 6 0 01-6-6H0a8 8 0 008 8v-2zM8 2a6 6 0 016 6h2a8 8 0 00-8-8v2z",fill:"currentColor"}))};a.defaultProps={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(1),c=n.n(i),a=function(e){return c.a.createElement("svg",e,c.a.createElement("path",{d:"M6 12l4-4-4-4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};a.defaultProps={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},293:function(e,t,n){"use strict";const i=n(294),c=e=>i({exact:!0}).test(e);c.v4=e=>i.v4({exact:!0}).test(e),c.v6=e=>i.v6({exact:!0}).test(e),c.version=e=>c(e)?c.v4(e)?4:6:void 0,e.exports=c},294:function(e,t,n){"use strict";const i="[a-fA-F\\d:]",c=e=>e&&e.includeBoundaries?`(?:(?<=\\s|^)(?=${i})|(?<=${i})(?=\\s|$))`:"",a="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",r="[a-fA-F\\d]{1,4}",o=`\n(?:\n(?:${r}:){7}(?:${r}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:${r}:){6}(?:${a}|:${r}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:${r}:){5}(?::${a}|(?::${r}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:${r}:){4}(?:(?::${r}){0,1}:${a}|(?::${r}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:${r}:){3}(?:(?::${r}){0,2}:${a}|(?::${r}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:${r}:){2}(?:(?::${r}){0,3}:${a}|(?::${r}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:${r}:){1}(?:(?::${r}){0,4}:${a}|(?::${r}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::${r}){0,5}:${a}|(?::${r}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp(`(?:^${a}$)|(?:^${o}$)`),d=new RegExp(`^${a}$`),l=new RegExp(`^${o}$`),v=e=>e&&e.exact?s:new RegExp(`(?:${c(e)}${a}${c(e)})|(?:${c(e)}${o}${c(e)})`,"g");v.v4=e=>e&&e.exact?d:new RegExp(`${c(e)}${a}${c(e)}`,"g"),v.v6=e=>e&&e.exact?l:new RegExp(`${c(e)}${o}${c(e)}`,"g"),e.exports=v},309:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(1),a=n.n(c),r=n(237),o=n(16),s=n(265),d=n(262),l=n(15),v=n(64),u=n(9),b=n(71),f=n.n(b),h=n(102),p=n.n(h),g=n(292),m=n(207),j=n(208),O=n(157);var y=e=>{let{title:t,onClose:n,actions:c}=e;const{t:a}=Object(r.a)();return Object(i.f)(m.a,null,Object(i.f)(j.a,{title:t,onClose:n}),Object(i.f)("div",{css:{"> :not(template) ~ :not(template)":{"--space-y-reverse":0,marginTop:"calc(1.25rem * calc(1 - var(--space-y-reverse)))",marginBottom:"calc(1.25rem * var(--space-y-reverse))"},paddingBottom:"1.25rem"}},c.map((e=>Object(i.f)(O.a,{stretch:!0,key:e.id,onClick:e.onClick,variant:"primary"},a(e.title))))))},$=n(53),w=n(149),x=n(7);var C=n(3).a.img((()=>i.e`
  label: image;
  display: block;
  height: auto;
  max-height: 100%;
  width: 100%;
`));var k={name:"1elddw8",styles:"width:45px;height:45px;margin-right:0.7rem;"};var _=e=>{let{icon:t}=e;const n=Object(x.g)();return Object(i.f)("div",{css:k},Object(i.f)(C,{src:`${n}/resources/devices-icon?id=${t||"default"}`,alt:""}))},S=n(254),A=n(251),R=n(209),B=n(252),P=n(255),D=n(48),I=n(293),E=n.n(I);var L=function(e,t){return e.then((function(e){return[null,e]})).catch((function(e){return t&&Object.assign(e,t),[e,void 0]}))},z=n(47),M=n(60);var F=e=>{let{title:t,dhcpDevice:n,onClose:a}=e;const{register:s,handleSubmit:d,control:v,formState:{errors:u},reset:b}=Object(D.b)({defaultValues:{name:n.displayName,address:n.assignedIP||n.currentIP,shouldHandledBySurge:Boolean(n.shouldHandledBySurge)}}),{dirtyFields:f}=Object(D.c)({control:v}),{t:h}=Object(r.a)(),[p,g]=Object(c.useState)(!1);return Object(i.f)(m.a,null,Object(i.f)(j.a,{title:`${h("devices.modify")} ${t}`,onClose:a}),Object(i.f)("form",{onSubmit:d((e=>{Object.keys(f).length?(async()=>{g(!0);const t={physicalAddress:n.physicalAddress};for(const n in f){const i=n;f[i]&&(t[i]=e[i])}const[i,c]=await L(Object(l.a)({method:"POST",url:"/devices",data:t}).then((e=>{if(e.error)throw new Error(e.error)})));if(g(!1),i)return b(),console.error(i),void z.b.error(h("common.failed_interaction")+`: ${i.message}`);Object(o.c)("/devices"),z.b.success(h("common.success_interaction")),a()})():z.b.warn(h("devices.err_nothing_changed"))}))},Object(i.f)("div",{css:{paddingBottom:"1.25rem"}},Object(i.f)(S.a,Object.assign({invalid:!!(null===u||void 0===u?void 0:u.name),disabled:p,validationHint:Object(M.a)({required:h("devices.err_required")},null===u||void 0===u?void 0:u.name),label:h("devices.name"),as:"input",defaultValue:n.displayName},s("name",{required:!0}))),Object(i.f)(S.a,Object.assign({invalid:!!(null===u||void 0===u?void 0:u.address),disabled:p,validationHint:Object(M.a)({required:h("devices.err_required"),isIP:h("devices.err_not_ip")},null===u||void 0===u?void 0:u.address),label:h("devices.address"),as:"input",defaultValue:n.assignedIP||n.currentIP},s("address",{required:!0,validate:{isIP:e=>E()(e)}}))),Object(i.f)(D.a,{name:"shouldHandledBySurge",control:v,render:e=>{let{field:t}=e;return Object(i.f)(A.a,{disabled:p,noMargin:!0,label:h("devices.handled_by_surge"),labelChecked:"on",labelUnchecked:"off",checked:t.value,onChange:()=>t.onChange(!t.value)})}})),Object(i.f)(R.a,{align:"right"},Object(i.f)(B.a,null,Object(i.f)(P.a,{isLoading:p,variant:"primary",as:"submit",loadingLabel:h("common.is_loading")},h("common.save"))))))};var T={name:"epvm6",styles:"white-space:nowrap;"};var q=e=>{var t;let{device:n}=e;const{t:o}=Object(r.a)(),{setModal:s}=Object(v.b)(),d=Object(x.g)(),l=Object(u.g)(),b=Object(c.useCallback)((()=>{s({children(e){let{onClose:t}=e;return t&&n.dhcpDevice?Object(i.f)(F,{title:n.dhcpDevice.displayName||n.name,dhcpDevice:n.dhcpDevice,onClose:t}):Object(i.f)(a.a.Fragment,null)}})}),[n.dhcpDevice,n.name,s]),h=Object(c.useCallback)((()=>{const e=[{id:"view_requests",title:"devices.view_requests",onClick:()=>{l.push(`/requests?source=${n.displayIPAddress}`)}}];n.dhcpDevice&&e.push({id:"device_settings",title:"devices.device_settings",onClick:b}),s({children(t){var c;let{onClose:r}=t;return r?Object(i.f)(y,{title:(null===n||void 0===n||null===(c=n.dhcpDevice)||void 0===c?void 0:c.displayName)||n.name,actions:e,onClose:r}):Object(i.f)(a.a.Fragment,null)}})}),[n.dhcpDevice,n.displayIPAddress,n.name,b,s,l]),m=Object(c.useMemo)((()=>{var e;const{hasTCPConnection:t}=n;return t||Boolean(null===n||void 0===n||null===(e=n.dhcpDevice)||void 0===e?void 0:e.shouldHandledBySurge)}),[n]),j=Object(c.useMemo)((()=>{let e=o("devices.not_handled_by_surge");const{hasProxyConnection:t}=n;return m&&t?e=o("devices.proxy_and_gateway_mode"):t?e=o("devices.proxy_mode"):m&&(e=o("devices.gateway_mode")),e}),[o,n,m]),O=Object(c.useMemo)((()=>{var e;return Boolean(null===n||void 0===n||null===(e=n.dhcpDevice)||void 0===e?void 0:e.waitingToReconnect)}),[n.dhcpDevice]);return Object(i.f)($.b,{css:{":hover":{"--bg-opacity":"1",backgroundColor:"rgba(247, 250, 252, var(--bg-opacity))"},cursor:"pointer"},onClick:h},Object(i.f)($.c,null,Object(i.f)("div",{css:{display:"flex",alignItems:"center",width:"100%",overflow:"hidden"}},d?Object(i.f)(w.a,{macos:"4.1.1",ios:"4.11.0"},Object(i.f)("div",{css:{flex:"1 1 0%"}},Object(i.f)(_,{icon:null===(t=n.dhcpDevice)||void 0===t?void 0:t.icon}))):Object(i.f)(a.a.Fragment,null),Object(i.f)("div",{css:{width:"100%",overflow:"hidden"}},Object(i.f)("div",{css:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",paddingRight:"1.25rem"}},n.name),Object(i.f)("div",{css:{fontSize:".875rem","--text-opacity":"1",color:"rgba(113, 128, 150, var(--text-opacity))"}},n.displayIPAddress))),Object(i.f)("div",{css:{display:"flex",alignItems:"center",flex:"1 1 0%",fontWeight:"700"}},O?Object(i.f)("div",{css:T},o("devices.waiting")):(m||n.hasProxyConnection)&&Object(i.f)("div",null,f()(n.currentSpeed)+"/s"),Object(i.f)("div",{css:{marginLeft:"0.75rem"}},Object(i.f)(g.a,null)))),Object(i.f)("div",{css:{paddingBottom:"0.75rem"}},Object(i.f)($.d,null,Object(i.f)("div",null,o("devices.mac_address")),Object(i.f)("div",null,n.physicalAddress||"N/A")),Object(i.f)($.d,null,Object(i.f)("div",null,o("devices.vendor")),Object(i.f)("div",null,n.vendor||"N/A")),n.dhcpDevice?Object(i.f)(a.a.Fragment,null,Object(i.f)($.d,null,Object(i.f)("div",null,o("devices.dhcp_last_seen")),Object(i.f)("div",null,p()(n.dhcpDevice.dhcpLastSeen).format("L LTS"))),Object(i.f)($.d,null,Object(i.f)("div",null,o("devices.dhcp_hostname")),Object(i.f)("div",null,n.dhcpDevice.dhcpHostname||"N/A"))):null,(n.hasTCPConnection||n.hasProxyConnection)&&Object(i.f)(a.a.Fragment,null,Object(i.f)($.d,null,Object(i.f)("div",null,o("devices.active_connections")),Object(i.f)("div",null,n.activeConnections)),Object(i.f)($.d,null,Object(i.f)("div",null,o("devices.total_connections")),Object(i.f)("div",null,n.totalConnections)),Object(i.f)($.d,null,Object(i.f)("div",null,o("devices.total_bytes")),Object(i.f)("div",null,f()(n.totalBytes))),Object(i.f)($.d,null,Object(i.f)("div",null,o("devices.top_host")),Object(i.f)("div",null,n.topHostBySingleConnectionTraffic||"N/A"))),Object(i.f)($.d,null,Object(i.f)("div",null,o("devices.mode")),Object(i.f)("div",null,j))))};t.default=()=>{const{t:e}=Object(r.a)(),[t,n]=Object(c.useState)(!1),{data:a,error:v}=Object(o.b)("/devices",l.a,{revalidateOnFocus:!1,revalidateOnReconnect:!1,refreshInterval:t?2e3:0});return Object(i.f)(s.a,null,Object(i.f)(d.a,{title:e("home.device_management"),hasAutoRefresh:!0,defaultAutoRefreshState:!1,onAuthRefreshStateChange:e=>n(e)}),Object(i.f)("div",{css:{"> :not(template) ~ :not(template)":{"--divide-y-reverse":0,borderTopWidth:"calc(1px * calc(1 - var(--divide-y-reverse)))",borderBottomWidth:"calc(1px * var(--divide-y-reverse))","--divide-opacity":"1",borderColor:"rgba(237, 242, 247, var(--divide-opacity))"}}},(null===a||void 0===a?void 0:a.devices)&&a.devices.map((e=>Object(i.f)("div",{key:e.identifier},Object(i.f)(q,{device:e}))))))}}}]);
//# sourceMappingURL=10.a57000a9.chunk.js.map