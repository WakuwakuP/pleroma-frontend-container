(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1141:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return _}));var i=t(0),n=t(1),s=t.n(n),d=t(6),o=t(4),c=t(360),m=t(853);class _ extends s.a.PureComponent{constructor(){super(...arguments),this.state={loading:!0,data:null}}componentDidMount(){const{start_at:a,end_at:e,dimension:t,limit:i,params:n}=this.props;Object(d.a)().post("/api/v1/admin/dimensions",{keys:[t],start_at:a,end_at:e,limit:i,[t]:n}).then((a=>{this.setState({loading:!1,data:a.data})})).catch((a=>{console.error(a)}))}render(){const{label:a,limit:e}=this.props,{loading:t,data:n}=this.state;let s;if(t)s=Object(i.a)("table",{},void 0,Object(i.a)("tbody",{},void 0,Array.from(Array(e)).map(((a,e)=>Object(i.a)("tr",{className:"dimension__item"},e,Object(i.a)("td",{className:"dimension__item__key"},void 0,Object(i.a)(m.a,{width:100})),Object(i.a)("td",{className:"dimension__item__value"},void 0,Object(i.a)(m.a,{width:60})))))));else{const a=n[0].data.reduce(((a,e)=>a+1*e.value),0);s=Object(i.a)("table",{},void 0,Object(i.a)("tbody",{},void 0,n[0].data.map((e=>Object(i.a)("tr",{className:"dimension__item"},e.key,Object(i.a)("td",{className:"dimension__item__key"},void 0,Object(i.a)("span",{className:"dimension__item__indicator dimension__item__indicator--"+Object(c.c)(1*e.value/a*100)}),Object(i.a)("span",{title:e.key},void 0,e.human_key)),Object(i.a)("td",{className:"dimension__item__value"},void 0,void 0!==e.human_value?e.human_value:Object(i.a)(o.c,{value:e.value})))))))}return Object(i.a)("div",{className:"dimension"},void 0,Object(i.a)("h4",{},void 0,a),s)}}}}]);
//# sourceMappingURL=8-fed5bce256042dab36a2.chunk.js.map