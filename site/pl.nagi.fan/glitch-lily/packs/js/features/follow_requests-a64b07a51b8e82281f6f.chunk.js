(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1031:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return x}));var a,s,c=o(0),n=o(29),i=o.n(n),l=(o(1),o(12)),u=o(4),r=o(18),d=o(3),b=o.n(d),h=o(16),j=o.n(h),m=o(281),p=o(957),f=o(962),g=o(207),O=o(324),_=o(100),v=o(136),w=o(32);const q=Object(u.f)({authorize:{id:"follow_request.authorize",defaultMessage:"Authorize"},reject:{id:"follow_request.reject",defaultMessage:"Reject"}});let M=Object(u.g)(((s=class extends r.a{render(){const{intl:e,account:t,onAuthorize:o,onReject:a}=this.props,s={__html:t.get("note_emojified")};return Object(c.a)("div",{className:"account-authorize__wrapper"},void 0,Object(c.a)("div",{className:"account-authorize"},void 0,Object(c.a)(O.a,{href:t.get("url"),to:"/@"+t.get("acct"),className:"detailed-status__display-name"},void 0,Object(c.a)("div",{className:"account-authorize__avatar"},void 0,Object(c.a)(_.a,{account:t,size:48})),Object(c.a)(v.a,{account:t})),Object(c.a)("div",{className:"account__header__content translate",dangerouslySetInnerHTML:s})),Object(c.a)("div",{className:"account--panel"},void 0,Object(c.a)("div",{className:"account--panel__button"},void 0,Object(c.a)(w.a,{title:e.formatMessage(q.authorize),icon:"check",onClick:o})),Object(c.a)("div",{className:"account--panel__button"},void 0,Object(c.a)(w.a,{title:e.formatMessage(q.reject),icon:"times",onClick:a}))))}}).propTypes={account:j.a.map.isRequired,onAuthorize:b.a.func.isRequired,onReject:b.a.func.isRequired,intl:b.a.object.isRequired},a=s))||a;var y=o(13);var k,z,R=Object(l.connect)((()=>{const e=Object(g.d)();return(t,o)=>({account:e(t,o.id)})}),((e,t)=>{let{id:o}=t;return{onAuthorize(){e(Object(y.I)(o))},onReject(){e(Object(y.W)(o))}}}))(M),I=o(1296),L=o(11);const N=Object(u.f)({heading:{id:"column.follow_requests",defaultMessage:"Follow requests"}});let x=Object(l.connect)((e=>({accountIds:e.getIn(["user_lists","follow_requests","items"]),isLoading:e.getIn(["user_lists","follow_requests","isLoading"],!0),hasMore:!!e.getIn(["user_lists","follow_requests","next"]),locked:!!e.getIn(["accounts",L.n,"locked"]),domain:e.getIn(["meta","domain"])})))(k=Object(u.g)(((z=class extends r.a{constructor(){super(...arguments),this.handleLoadMore=i()((()=>{this.props.dispatch(Object(y.K)())}),300,{leading:!0})}componentWillMount(){this.props.dispatch(Object(y.O)())}render(){const{intl:e,accountIds:t,hasMore:o,multiColumn:a,locked:s,domain:n,isLoading:i}=this.props;if(!t)return Object(c.a)(p.a,{},void 0,Object(c.a)(m.b,{}));const l=Object(c.a)(u.b,{id:"empty_column.follow_requests",defaultMessage:"You don't have any follow requests yet. When you receive one, it will show up here."}),r=s?null:Object(c.a)("div",{className:"follow_requests-unlocked_explanation"},void 0,Object(c.a)(u.b,{id:"follow_requests.unlocked_explanation",defaultMessage:"Even though your account is not locked, the {domain} staff thought you might want to review follow requests from these accounts manually.",values:{domain:n}}));return Object(c.a)(p.a,{bindToDocument:!a,icon:"user-plus",heading:e.formatMessage(N.heading)},void 0,Object(c.a)(f.a,{}),Object(c.a)(I.a,{scrollKey:"follow_requests",onLoadMore:this.handleLoadMore,hasMore:o,isLoading:i,emptyMessage:l,bindToDocument:!a,prepend:r},void 0,t.map((e=>Object(c.a)(R,{id:e},e)))))}}).propTypes={params:b.a.object.isRequired,dispatch:b.a.func.isRequired,hasMore:b.a.bool,isLoading:b.a.bool,accountIds:j.a.list,locked:b.a.bool,domain:b.a.string,intl:b.a.object.isRequired,multiColumn:b.a.bool},k=z))||k)||k}}]);
//# sourceMappingURL=follow_requests-a64b07a51b8e82281f6f.chunk.js.map