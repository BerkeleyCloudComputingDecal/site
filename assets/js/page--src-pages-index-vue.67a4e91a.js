(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Pxpx:function(e,t,o){},"U+kW":function(e,t,o){"use strict";var n=o("Pxpx");o.n(n).a},aK7f:function(e,t,o){},gEGz:function(e,t,o){"use strict";var n=o("aK7f");o.n(n).a},iyQ6:function(e,t,o){"use strict";o.r(t);var n=o("j51r"),a={name:"LectureEntry",props:["display","link"],data:function(){return{}}},i=o("KHd+"),r=Object(i.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.link?o("a",{attrs:{href:e.link}},[e._v(e._s(e.display))]):o("span",[e._v(e._s(e.display))])}),[],!1,null,null,null).exports,c=(o("mRH6"),{name:"ScheduleEntry",props:["data","prefix","link","noLinkDisplay"],data:function(){return{}},computed:{displayText:function(){if(""==this.link)return this.noLinkDisplay;for(var e=0;e<this.data.edges.length;e+=1){var t=this.data.edges[e].node,o=t.path;if("/"+this.prefix+"/"+this.link+"/"==o){var n="";return t.dueDate&&(n=" (due "+t.dueDate+")"),this.data.edges[e].node.title+n}}},prefixedLink:function(){return"/"+this.prefix+"/"+this.link+"/"}}}),d={name:"Schedule",props:[],data:function(){return{daysPerWeek:2}},components:{LectureEntry:r,ScheduleEntry:Object(i.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.link?o("g-link",{attrs:{to:e.prefixedLink}},[e._v(e._s(e.displayText))]):o("span",[e._v(e._s(e.noLinkDisplay))])}),[],!1,null,null,null).exports}},s=(o("U+kW"),o("Kw5r")),u=s.a.config.optionMergeStrategies.computed,l={metadata:{siteName:"Cloud Computing Decal",semester:"Fall 2020"},weeks:{totalCount:28,edges:[{node:{id:"6923e0bc",date:"2020-09-01",topic:'Cloud Computing and SaaS Overview, Definitions, Schematic Diagram - "Map of the World", Big Picture',lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"01967d74",date:"2020-09-03",topic:"Git, Unix Command Line (PRs), Text Editors",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"4d394f95",date:"2020-09-08",topic:"Guest Speaker",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"b5c082ee",date:"2020-09-10",topic:"Guest Speaker",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"9892a474",date:"2020-09-15",topic:"Databases",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"49ded918",date:"2020-09-17",topic:"Cloud Databases",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"0c61d671",date:"2020-09-22",topic:"Resume and LinkedIn Workshop",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"bc6d6b74",date:"2020-09-24",topic:"Backend, HTTP API",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"6ec92294",date:"2020-09-29",topic:"Deploying Backend to Cloud",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"4a4e5ed8",date:"2020-10-01",topic:"Microservice Architecture",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"1e5653ce",date:"2020-10-06",topic:"Docker",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"7a627b2a",date:"2020-10-08",topic:"Kubernetes",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"53cdc929",date:"2020-10-13",topic:"Authentication and Security, JSON Web Tokens, Auth System Design",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"353bac14",date:"2020-10-15",topic:"More Security",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"47cdf3c9",date:"2020-10-20",topic:"Guest Speaker",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"331ec570",date:"2020-10-22",topic:"Guest Speaker",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"a7aa7fd0",date:"2020-10-27",topic:"Frontend",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"4dca5173",date:"2020-10-29",topic:"FaaS",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"0a6ab8b4",date:"2020-11-03",topic:"CI/CD, Miscellaneous Topics",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"5afa1cb9",date:"2020-11-05",topic:"Guest Speaker",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"aca1cee4",date:"2020-11-10",topic:"Review",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"3ccb9794",date:"2020-11-12",topic:"Review",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"436f9972",date:"2020-11-17",topic:"Project",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"32bdd8c7",date:"2020-11-19",topic:"Project",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"af5fdebe",date:"2020-11-24",topic:"",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"6c2a40a6",date:"2020-11-26",topic:"",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"f53b907e",date:"2020-12-01",topic:"",lecture:"",homework:"",note:"",project:"",quiz:""}},{node:{id:"76ea8871",date:"2020-12-03",topic:"",lecture:"",homework:"",note:"",project:"",quiz:""}}]},notes:{edges:[{node:{id:"9a6a16e14b49f2d6d3d4fe8b2c378c0a",date:"2020-07-14",title:"Sample Notes",path:"/notes/sample/"}}]},homeworks:{edges:[{node:{id:"ef888726b0d2790ed8a9de9df20aef70",date:"2020-07-14",dueDate:"2020-07-21",title:"Sample Homework",path:"/homeworks/sample/"}}]},projects:{edges:[{node:{id:"ea0fd1d2c38bbeca159fd0d3920de0be",date:"2020-07-14",dueDate:"2020-07-28",title:"Sample Project",path:"/projects/sample/"}}]},quizes:{edges:[{node:{id:"16bf0e86a9f9ac02d52039cec17b9fb8",date:"2020-07-14",dueDate:"2020-07-21",title:"Sample Quiz",path:"/quizes/sample/"}}]}},p=function(e){var t=e.options;t.__staticData?t.__staticData.data=l:(t.__staticData=s.a.observable({data:l}),t.computed=u({$static:function(){return t.__staticData.data}},t.computed))},h=Object(i.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("table",{attrs:{id:"schedule"}},[e._m(0),e._m(1),e._l(e.$static.weeks.edges,(function(t,n){return o("tr",{key:t.node.id},[n%e.daysPerWeek==0?o("td",{staticClass:"schedule-week",attrs:{rowspan:e.daysPerWeek}},[e._v(e._s(n/e.daysPerWeek+1))]):e._e(),o("td",[e._v(e._s(t.node.date))]),o("td",[o("nav",{staticClass:"schedule-table-cell"},[o("LectureEntry",{attrs:{display:t.node.topic,link:t.node.lecture}})],1)]),o("td",[o("ScheduleEntry",{attrs:{data:e.$static.notes,prefix:"notes",link:t.node.note,noLinkDisplay:""}})],1),o("td",[o("ScheduleEntry",{attrs:{data:e.$static.homeworks,prefix:"homeworks",link:t.node.homework,noLinkDisplay:""}}),o("br"),o("ScheduleEntry",{attrs:{data:e.$static.quizes,prefix:"quizes",link:t.node.quiz,noLinkDisplay:""}}),o("br"),o("ScheduleEntry",{attrs:{data:e.$static.projects,prefix:"projects",link:t.node.project,noLinkDisplay:""}})],1)])}))],2)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("colgroup",[t("col",{staticStyle:{width:"9%"},attrs:{span:"1"}}),t("col",{staticStyle:{width:"15%"},attrs:{span:"1"}}),t("col",{staticStyle:{width:"40%"},attrs:{span:"1"}}),t("col",{staticStyle:{width:"18%"},attrs:{span:"1"}}),t("col",{staticStyle:{width:"18%"},attrs:{span:"1"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("th",[this._v("Week")]),t("th",[this._v("Date")]),t("th",[this._v("Lecture")]),t("th",[this._v("Notes")]),t("th",[this._v("Assignments")])])}],!1,null,null,null);"function"==typeof p&&p(h);var m=h.exports,k={metaInfo:{title:"Home"},components:{AnnouncementHolder:n.a,Schedule:m}},f=(o("gEGz"),null),w=Object(i.a)(k,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Layout",[o("h1",[e._v(e._s(e.$page.metadata.siteName))]),o("h3",[e._v(e._s(e.$page.metadata.semester))]),e._l(e.$page.announcements.edges,(function(e){return o("nav",{key:e.node.id,staticClass:"card"},[o("AnnouncementHolder",{attrs:{title:e.node.title,date:e.node.date,content:e.node.content}})],1)})),o("br"),o("p"),o("br"),o("Schedule")],2)}),[],!1,null,null,null);"function"==typeof f&&f(w);t.default=w.exports},j51r:function(e,t,o){"use strict";var n={name:"AnnouncementHolder",props:["title","date","content"],data:function(){return{}}},a=(o("jnO0"),o("KHd+")),i=Object(a.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("nav",{staticClass:"announcement-holder"},[o("h2",[e._v(" "+e._s(e.title)+" ")]),o("h4",[e._v(" "+e._s(e.date)+" ")]),o("nav",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content",domProps:{innerHTML:e._s(e.content)}})])}),[],!1,null,null,null);t.a=i.exports},jnO0:function(e,t,o){"use strict";var n=o("neTG");o.n(n).a},neTG:function(e,t,o){}}]);