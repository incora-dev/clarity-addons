(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{lIAz:function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),e=function(){},t=u("zl1X"),c=u("+Xo0"),o=u("0G9f"),i=u("8KBR"),s=u("5lT0"),r=u("QkwE"),d=u("vAyd"),g=u("mrSG"),p='\n<clr-paged-search-result-list [clrItems]="pagedItems"\n                              [clrPage]="currentPage"\n                              [clrPageSize]="pageSize"\n                              [clrTotalItems]="allItems.length"\n                              (clrPageChange)="onPageChanged($event)">\n    <ng-template let-item="item">\n        <div class="col-xs-12">\n            <div class="card">\n                <div class="card-header">\n                    {{item}}\n                </div>\n                <div class="card-block">\n                    <div class="card-text">\n                        This is an example card.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n</clr-paged-search-result-list>\n            \n',m=function(l){function n(){var n=l.call(this,"paged-search-result-list")||this;return n.htmlExample=p,n.allItems=["Nelson","Graham","Olene","Dorian","Nidia","Keenan","Luna","Letisha","Lenny","Jeana","Alica","Sheridan","Georgia","Brad","Ellen","Brynn","Roslyn","Rhona","Marcella","Sibyl","Shenika","Desirae","Beverly","Johnson","Kaitlin","Lucius","Darla","Debby","Lottie","Genoveva"],n.pageSize=5,n.pagedItems=[],n.currentPage=1,n}return Object(g.b)(n,l),n.prototype.onPageChanged=function(l){var n=this;this.currentPage=l;var u=(l-1)*this.pageSize,a=Math.min(u+this.pageSize-1,this.allItems.length-1);setTimeout(function(){return n.pagedItems=n.allItems.slice(u,a+1)},0)},n}(u("N+3j").a),b=a.Ka({encapsulation:2,styles:[],data:{}});function h(l){return a.db(0,[(l()(),a.Ma(0,0,null,null,6,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),a.Ma(1,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),a.Ma(2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),a.cb(3,null,[" "," "])),(l()(),a.Ma(4,0,null,null,2,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),a.Ma(5,0,null,null,1,"div",[["class","card-text"]],null,null,null,null,null)),(l()(),a.cb(-1,null,[" This is an example card. "]))],null,function(l,n){l(n,3,0,n.context.item)})}function U(l){return a.db(0,[(l()(),a.Ma(0,0,null,null,60,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,c.b,c.a)),a.La(1,49152,null,0,o.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),a.Ma(2,0,null,0,58,"article",[],null,null,null,null,null)),(l()(),a.Ma(3,0,null,null,1,"h5",[["class","component-summary"],["id","search-result-list-header"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["The Paged Search Result List component is a basic component used to display a list of generic data including a pager above and below the list."])),(l()(),a.Ma(5,0,null,null,4,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),a.Ma(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.cb(-1,null,["Style"])),(l()(),a.Ma(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.cb(-1,null,["You can style the list any way you want - this component allows you to use a custom template to show all items of your list. The custom template can range from a single line representing text to one or more completely new angular components."])),(l()(),a.Ma(10,0,null,null,50,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),a.Ma(11,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["Code & Examples"])),(l()(),a.cb(-1,null,[" To set a template for each item of your list simply add a "])),(l()(),a.Ma(14,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["ng-template"])),(l()(),a.cb(-1,null,[" inside the "])),(l()(),a.Ma(17,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["clr-paged-search-result-list"])),(l()(),a.cb(-1,null,[". By defining "])),(l()(),a.Ma(20,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.cb(-1,null,['let-item="item"'])),(l()(),a.cb(-1,null,[" on your "])),(l()(),a.Ma(23,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["ng-template"])),(l()(),a.cb(-1,null,[" you can get the context of each individual item. "])),(l()(),a.Ma(26,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.cb(-1,null,[" Following interactions are available: "])),(l()(),a.Ma(28,0,null,null,25,"ul",[],null,null,null,null,null)),(l()(),a.Ma(29,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.cb(-1,null,[" To show items add a "])),(l()(),a.Ma(31,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["[clrItems]"])),(l()(),a.cb(-1,null,[" input to the component. "])),(l()(),a.Ma(34,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.cb(-1,null,[" To set the current page add a "])),(l()(),a.Ma(36,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["[clrPage]"])),(l()(),a.cb(-1,null,[" input to the component. "])),(l()(),a.Ma(39,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.cb(-1,null,[" To define the page size add a "])),(l()(),a.Ma(41,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["[clrPageSize]"])),(l()(),a.cb(-1,null,[" input to the component. "])),(l()(),a.Ma(44,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.cb(-1,null,[" To define the number of total items add a "])),(l()(),a.Ma(46,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["[clrTotalItems]"])),(l()(),a.cb(-1,null,[" input to the component. "])),(l()(),a.Ma(49,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.cb(-1,null,[" To react to page changes, bind to the event "])),(l()(),a.Ma(51,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["(clrPageChange)"])),(l()(),a.cb(-1,null,[". "])),(l()(),a.Ma(54,0,null,null,4,"div",[["class","margin-top-24"]],null,null,null,null,null)),(l()(),a.Ma(55,0,null,null,3,"clr-paged-search-result-list",[],null,[[null,"clrPageChange"]],function(l,n,u){var a=!0;return"clrPageChange"===n&&(a=!1!==l.component.onPageChanged(u)&&a),a},i.d,i.a)),a.La(56,49152,null,1,s.b,[],{pageSize:[0,"pageSize"],currentPage:[1,"currentPage"],totalItems:[2,"totalItems"],items:[3,"items"]},{pageChange:"clrPageChange"}),a.ab(335544320,1,{itemTemplate:0}),(l()(),a.Ea(0,[[1,2]],null,0,null,h)),(l()(),a.Ma(59,0,null,null,1,"clr-code-snippet",[],null,null,null,r.b,r.a)),a.La(60,4243456,null,0,d.a,[],{code:[0,"code"]},null)],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,56,0,u.pageSize,u.currentPage,u.allItems.length,u.pagedItems),l(n,60,0,u.htmlExample)},function(l,n){l(n,0,0,!0)})}var v=a.Ia("clr-search-result-list-demo",m,function(l){return a.db(0,[(l()(),a.Ma(0,0,null,null,1,"clr-search-result-list-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,U,b)),a.La(1,49152,null,0,m,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})},{},{},[]),M=u("Ip0R"),f=u("KZfJ"),y=u("gIcY"),I=u("XPsC"),P=u("ZYCi"),w=u("JsA7");u.d(n,"PagedSearchResultListDemoModuleNgFactory",function(){return S});var S=a.Ja(e,[],function(l){return a.Ta([a.Ua(512,a.j,a.Z,[[8,[t.g,t.a,t.f,v]],[3,a.j],a.v]),a.Ua(4608,M.n,M.m,[a.s,[2,M.B]]),a.Ua(4608,f.yb,f.yb,[]),a.Ua(4608,y.q,y.q,[]),a.Ua(5120,f.oc,f.pc,[[3,f.oc]]),a.Ua(1073742336,M.b,M.b,[]),a.Ua(1073742336,f.U,f.U,[]),a.Ua(1073742336,f.zb,f.zb,[]),a.Ua(1073742336,f.Lc,f.Lc,[]),a.Ua(1073742336,f.O,f.O,[]),a.Ua(1073742336,f.d,f.d,[]),a.Ua(1073742336,f.P,f.P,[]),a.Ua(1073742336,f.n,f.n,[]),a.Ua(1073742336,f.Sc,f.Sc,[]),a.Ua(1073742336,f.Uc,f.Uc,[]),a.Ua(1073742336,f.I,f.I,[]),a.Ua(1073742336,f.Q,f.Q,[]),a.Ua(1073742336,y.o,y.o,[]),a.Ua(1073742336,y.e,y.e,[]),a.Ua(1073742336,f.Ba,f.Ba,[]),a.Ua(1073742336,f.Gb,f.Gb,[]),a.Ua(1073742336,f.gc,f.gc,[]),a.Ua(1073742336,f.B,f.B,[]),a.Ua(1073742336,f.Va,f.Va,[]),a.Ua(1073742336,f.gb,f.gb,[]),a.Ua(1073742336,f.s,f.s,[]),a.Ua(1073742336,f.Fa,f.Fa,[]),a.Ua(1073742336,f.Aa,f.Aa,[]),a.Ua(1073742336,f.i,f.i,[]),a.Ua(1073742336,f.j,f.j,[]),a.Ua(1073742336,f.Wa,f.Wa,[]),a.Ua(1073742336,f.q,f.q,[]),a.Ua(1073742336,f.Da,f.Da,[]),a.Ua(1073742336,f.Ia,f.Ia,[]),a.Ua(1073742336,f.qc,f.qc,[]),a.Ua(1073742336,f.bb,f.bb,[]),a.Ua(1073742336,f.lb,f.lb,[]),a.Ua(1073742336,f.Y,f.Y,[]),a.Ua(1073742336,f.Oa,f.Oa,[]),a.Ua(1073742336,f.eb,f.eb,[]),a.Ua(1073742336,f.Ja,f.Ja,[]),a.Ua(1073742336,f.pb,f.pb,[]),a.Ua(1073742336,f.a,f.a,[]),a.Ua(1073742336,I.a,I.a,[]),a.Ua(1073742336,P.o,P.o,[[2,P.t],[2,P.l]]),a.Ua(1073742336,w.a,w.a,[]),a.Ua(1073742336,s.g,s.g,[]),a.Ua(1073742336,s.e,s.e,[]),a.Ua(1073742336,s.c,s.c,[]),a.Ua(1073742336,s.a,s.a,[]),a.Ua(1073742336,e,e,[]),a.Ua(1024,P.j,function(){return[[{path:"",component:m}]]},[])])})}}]);