"use strict";(self.webpackChunkpleroma_fe=self.webpackChunkpleroma_fe||[]).push([[159],{30159:(t,e,n)=>{n.r(e),n.d(e,{default:()=>p});var i=n(76229),a=n(30341),c={class:"sticker-picker"},r=["image-tooltip","image"],o=["onClick"],s=["src"],l=n(7257);const u={components:{TabSwitcher:n(79354).Z},data:function(){return{meta:{stickers:[]},path:""}},computed:{pack:function(){return this.$store.state.instance.stickers||[]}},methods:{clear:function(){this.meta={stickers:[]}},pick:function(t,e){var n=this,i=this.$store;fetch(t).then((function(t){t.blob().then((function(t){var a=new File([t],e,{mimetype:"image/png"}),c=new FormData;c.append("file",a),l.Z.uploadMedia({store:i,formData:c}).then((function(t){n.$emit("uploaded",t),n.clear()}),(function(t){console.warn("Can't attach sticker"),console.warn(t),n.$emit("upload-failed","default")}))}))}))}}},p=(0,n(46021).Z)(u,[["render",function(t,e,n,l,u,p){var f=(0,i.up)("tab-switcher");return(0,i.wg)(),(0,i.iD)("div",c,[(0,i.Wm)(f,{class:"tab-switcher","render-only-focused":!0,"scrollable-tabs":""},{default:(0,i.w5)((function(){return[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.pack,(function(e){return(0,i.wg)(),(0,i.iD)("div",{key:e.path,"image-tooltip":e.meta.title,image:e.path+e.meta.tabIcon,class:"sticker-picker-content"},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.meta.stickers,(function(n){return(0,i.wg)(),(0,i.iD)("div",{key:n,class:"sticker",onClick:(0,a.iM)((function(i){return t.pick(e.path+n,e.meta.title)}),["stop","prevent"])},[(0,i._)("img",{src:e.path+n},null,8,s)],8,o)})),128))],8,r)})),128))]})),_:1})])}]])}}]);
//# sourceMappingURL=159.98aa68ce7763143ff7a2.js.map