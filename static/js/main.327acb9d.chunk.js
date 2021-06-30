(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),c=n(18),a=n.n(c),s=(n(38),n(19)),o=n(20),d=n(23),l=n(21),p=n(5),u=(n(39),"https://peculiar-birds-api.herokuapp.com"),b=n(6),j=n(10),h=n(1),f=n(12),m=n(2),x=h.default.div.withConfig({displayName:"BirdCard__Wrapper",componentId:"sc-1lvwsy-0"})(["position:relative;height:500px;width:300px;margin:32px;padding:16px;border-radius:8px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);transition:0.3s;&:hover{box-shadow:4px 8px 16px 4px rgba(0,0,0,0.22);}img{position:absolute;top:0;left:0;display:block;width:100%;margin:auto;}a{color:inherit;}"]),g=h.default.div.withConfig({displayName:"BirdCard__NameWrapper",componentId:"sc-1lvwsy-1"})(["position:absolute;bottom:0;left:0;right:0;> *{text-align:center;}"]),O=function(e){var t=e.id,n=e.name,i=e.scientificName,r=e.imgUrl;return Object(m.jsx)(x,{children:Object(m.jsxs)(f.b,{to:"/birds/"+t,children:[Object(m.jsx)("img",{src:"".concat("/the-encyclopedia-of-peculiar-birds","/assets/bird-images/").concat(r),alt:n}),Object(m.jsxs)(g,{children:[Object(m.jsx)("h2",{children:n}),Object(m.jsxs)("h4",{children:["(",i,")"]})]})]})})},y=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleSubmit=function(t){t.preventDefault(),e.props.searchBirds(e.state.query)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsx)(v,{children:Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsx)("input",{type:"text",value:this.state.query,onChange:function(t){return e.setState({query:t.target.value})}}),Object(m.jsx)(_,{type:"submit",value:"Search"})]})})}}]),n}(i.Component),v=h.default.div.withConfig({displayName:"SearchBar__Wrapper",componentId:"sc-1m5yh7p-0"})(["text-align:center;margin-top:32px;"]),_=h.default.input.withConfig({displayName:"SearchBar__Submit",componentId:"sc-1m5yh7p-1"})([""]),w=Object(b.b)(null,{searchBirds:function(e){return function(t){fetch(u+"/birds").then((function(e){return e.json()})).then((function(t){return t.filter((function(t){return t.name.toUpperCase().includes(e.toUpperCase())||t.scientificName.toUpperCase().includes(e.toUpperCase())}))})).then((function(e){return t({type:"SEARCH_BIRDS",payload:e})}))}}})(y),C=n(13),I=h.default.div.withConfig({displayName:"Footer__Wrapper",componentId:"bcreka-0"})(["border-top:1px solid black;"]),N=h.default.div.withConfig({displayName:"Footer__ImageCredit",componentId:"bcreka-1"})(["padding:24px;text-align:center;"]),B=function(){return Object(m.jsx)(C.FadeIn,{delay:"2s",children:Object(m.jsx)(I,{children:Object(m.jsx)(N,{children:"Images Courtesy of the John James Audubon Center at Mill Grove, Montgomery County Audubon Collection, and Zebra Publishing"})})})},S=h.default.div.withConfig({displayName:"BirdCardContainer__Wrapper",componentId:"sc-1gyi3w0-0"})(["display:flex;flex-wrap:wrap;justify-content:center;"]),E=function(){var e=Object(b.d)((function(e){return e.birds.birds}));return Object(b.d)((function(e){return e.birds.requesting}))?Object(m.jsx)("div",{className:"loader",children:"Spinner"}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(C.FadeIn,{delay:".25s",duration:"2s",children:[Object(m.jsx)(w,{}),Object(m.jsx)(S,{children:e.map((function(e){return Object(m.jsx)(O,Object(j.a)({},e),e.id)}))})]}),Object(m.jsx)(B,{})]})},T=h.default.div.withConfig({displayName:"BirdPage__Wrapper",componentId:"sc-1e1g07d-0"})(["display:flex;flex-direction:column;align-items:center;p{margin:0;}"]),k=h.default.div.withConfig({displayName:"BirdPage__Name",componentId:"sc-1e1g07d-1"})(["font-size:2rem;margin:24px;"]),D=h.default.div.withConfig({displayName:"BirdPage__Scientific",componentId:"sc-1e1g07d-2"})(["font-size:1.5rem;font-style:italic;"]),F=h.default.img.withConfig({displayName:"BirdPage__BirdImage",componentId:"sc-1e1g07d-3"})(["height:600px;width:450px;margin:24px;box-shadow:rgba(0,0,0,0.15) 0px 15px 25px,rgba(0,0,0,0.05) 0px 5px 10px;"]),R=h.default.div.withConfig({displayName:"BirdPage__Description",componentId:"sc-1e1g07d-4"})(["text-align:center;max-width:1000px;font-size:1.25rem;margin:12px;"]),U=function(){var e=Object(b.c)(),t=Object(p.f)().id,n=Object(b.d)((function(e){return e.birds.selectedBird}));Object(i.useEffect)((function(){return e(function(e){return function(t){fetch(u+"/birds/"+e).then((function(e){return e.json()})).then((function(e){return t({type:"SET_SELECTED_BIRD",payload:e})}))}}(t)),function(){}}),[t,e]);return t?function(){var e=n.name,t=n.scientificName,i=n.order,r=n.family,c=n.genus,a=n.species,s=n.conservation,o=n.description,d=n.imgUrl;return Object(m.jsxs)(T,{children:[Object(m.jsx)(C.FadeInUp,{children:Object(m.jsx)(k,{children:e})}),Object(m.jsx)(C.FadeInUp,{delay:"0.25s",children:Object(m.jsx)(D,{children:t})}),Object(m.jsx)(C.FadeIn,{delay:"0.5s",duration:"2s",children:Object(m.jsx)(F,{src:"".concat("/the-encyclopedia-of-peculiar-birds","/assets/bird-images/").concat(d),alt:e})}),Object(m.jsxs)(C.FadeInUp,{delay:"1s",children:[Object(m.jsxs)("p",{children:["Order: ",i]}),Object(m.jsxs)("p",{children:["Family: ",r]}),Object(m.jsxs)("p",{children:["Genus: ",Object(m.jsx)("i",{children:c})]}),Object(m.jsxs)("p",{children:["Species: ",Object(m.jsx)("i",{children:a})]}),Object(m.jsxs)("p",{children:["Conservation: ",s]})]}),Object(m.jsx)(C.FadeInUp,{delay:"1.25s",children:Object(m.jsx)(R,{children:o})}),Object(m.jsx)(B,{})]})}():Object(m.jsx)("div",{className:"loader"})},P=n(22),L=h.default.div.withConfig({displayName:"ListPage__Wrapper",componentId:"sc-1r125b7-0"})([""]),q=h.default.div.withConfig({displayName:"ListPage__LetterWrapper",componentId:"sc-1r125b7-1"})(["width:25%;margin-left:16px;"]),W=h.default.li.withConfig({displayName:"ListPage__BirdName",componentId:"sc-1r125b7-2"})(["margin-left:-16px;a{color:black;transition:0.5s;&:hover{color:deeppink;}}"]),z=function(){var e=Object(b.d)((function(e){return e.birds.birds})),t=e.map((function(e){return e.name[0]})),n=Object(P.a)(new Set(t));return Object(m.jsx)(L,{children:n.map((function(t){return Object(m.jsxs)(q,{children:[Object(m.jsx)("h1",{children:t}),Object(m.jsx)("ul",{children:e.map((function(e){return e.name.startsWith(t)?Object(m.jsx)(W,{children:Object(m.jsx)(f.b,{to:"/birds/"+e.id,style:{textDecoration:"none"},children:e.name})}):null}))})]})}))})},A=h.default.div.withConfig({displayName:"Title__SiteTitle",componentId:"sc-142q5zq-0"})(["font-size:1.5rem;display:inline-block;margin-left:12px;"]),G=function(){return Object(m.jsx)(A,{children:"The Encyclopedia of Peculiar Birds"})},J=h.default.div.withConfig({displayName:"Navbar__NavWrapper",componentId:"drbuw6-0"})(["display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid lightgray;a{text-decoration:none;}"]),M=h.default.button.withConfig({displayName:"Navbar__HomeButton",componentId:"drbuw6-1"})(["display:flex;align-items:center;font-family:inherit;margin-left:16px;font-size:100%;background:white;padding:12px;border:none;transition:0.5s;&:hover{cursor:pointer;color:deeppink;}"]),H=h.default.button.withConfig({displayName:"Navbar__ListButton",componentId:"drbuw6-2"})(["font-family:inherit;font-size:1.5rem;margin-right:16px;background:white;border:none;padding:12px;transition:0.5s;&:hover{cursor:pointer;color:deeppink;}"]),Q=h.default.img.withConfig({displayName:"Navbar__Logo",componentId:"drbuw6-3"})(["height:36px;"]),Z=function(){return Object(m.jsxs)(J,{children:[Object(m.jsx)(f.b,{to:"/",children:Object(m.jsxs)(M,{children:[Object(m.jsx)(Q,{src:"".concat("/the-encyclopedia-of-peculiar-birds","/assets/bird-images/logo192.png")}),Object(m.jsx)(G,{})]})}),Object(m.jsx)(f.b,{to:"/list",children:Object(m.jsx)(H,{children:"List"})})]})},K=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getBirds()}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(Z,{}),Object(m.jsxs)(p.c,{children:[Object(m.jsx)(p.a,{exact:!0,path:"/",component:E}),Object(m.jsx)(p.a,{exact:!0,path:"/birds",component:E}),Object(m.jsx)(p.a,{exact:!0,path:"/birds/:id",component:U}),Object(m.jsx)(p.a,{exact:!0,path:"/list",component:z})]})]})}}]),n}(i.Component),V=Object(b.b)(null,{getBirds:function(){return function(e){e({type:"START_BIRD_REQUEST"}),fetch(u+"/birds").then((function(e){return e.json()})).then((function(e){return e.sort((function(e,t){return e.name>t.name?1:-1}))})).then((function(t){return e({type:"GET_BIRDS",payload:t})}))}}})(K),X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),c(e),a(e)}))},Y=n(17),$={id:null,name:"",scientificName:"",order:"",family:"",genus:"",species:"",conservation:"",description:"",imgUrl:""},ee={birds:[],selectedBird:$,requesting:!1},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_BIRD_REQUEST":return Object(j.a)(Object(j.a)({},e),{},{birds:Object(P.a)(e.birds),requesting:!0});case"GET_BIRDS":return Object(j.a)(Object(j.a)({},e),{},{birds:t.payload,requesting:!1});case"SET_SELECTED_BIRD":return Object(j.a)(Object(j.a)({},e),{},{selectedBird:t.payload});case"UNSET_BIRD":return Object(j.a)(Object(j.a)({},e),{},{selectedBird:$});case"SEARCH_BIRDS":return Object(j.a)(Object(j.a)({},e),{},{birds:t.payload});default:return e}},ne=Object(Y.b)({birds:te}),ie=n(33),re=Object(Y.d)(ne,Object(Y.c)(Object(Y.a)(ie.a)));a.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(f.a,{children:Object(m.jsx)(b.a,{store:re,children:Object(m.jsx)(V,{})})})}),document.getElementById("root")),X()},38:function(e,t,n){},39:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.327acb9d.chunk.js.map