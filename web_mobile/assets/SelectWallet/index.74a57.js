System.register("chunks:///_virtual/SelectWallet",["./SelectWallet.ts","./WalletSelectBtnItem.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/SelectWallet.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ActionUtil.ts","./EventUtil.ts","./NodeUtil.ts","./BundleLayer.ts","./CustomScrollViewWithPrefab.ts","./AudioManage.ts","./TonConnectManager.ts","./WalletSelectBtnItem.ts"],(function(t){var e,n,l,i,a,c,o,s,r,u,h,f,d,S,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.initializerDefineProperty},function(t){l=t.cclegacy,i=t.Button,a=t.Node,c=t._decorator},function(t){o=t.default},function(t){s=t.default},function(t){r=t.NodeUtil},function(t){u=t.default},function(t){h=t.CustomScrollViewWithPrefab},function(t){f=t.AudioManage,d=t.SoundList},function(t){S=t.TonConnectManager},function(t){p=t.WalletSelectBtnItem}],execute:function(){var b,g,w,y,C,W,B,m,v;l._RF.push({},"034c86tNtNFQrCri1i1ucPv","SelectWallet",void 0);const{ccclass:P,property:D}=c;t("SelectWallet",(b=P("SelectWallet"),g=D(i),w=D(a),y=D(h),b((B=e((W=class extends u{constructor(){super(...arguments),n(this,"CancelBtn",B,this),n(this,"content",m,this),n(this,"walletSelectScroll",v,this)}async onInit(){this.walletSelectScroll.setPrefabData(((t,e)=>{e.getComponent(p).setInfo(t)})),p.onClickBtn=this.selectWallet.bind(this)}async onShow(){this.content.active=!0,o.show(this.content,{type:"scale",duration:.3});const t=await S.instance.getWallets();console.log("wallets: ",t),t&&0!=t.length?this.walletSelectScroll.dateList=t:this.hideSelf()}async onHide(t){await o.hide(this.content,{type:"scale",duration:.3}),this.content.active=!1}start(){r.ListenBtnsClick([this.CancelBtn],((t,e)=>{switch(f.playSFX(d.click),t.node.name){case"CancelBtn":this.hideSelf()}}),this)}onEnable(){s.on("WalletStatusChange",(t=>{"connected"===t&&this.hideSelf()}))}onDisable(){s.targetOff(this)}update(t){}selectWallet(t){S.instance.connectWallet(t)}}).prototype,"CancelBtn",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=e(W.prototype,"content",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=e(W.prototype,"walletSelectScroll",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=W))||C));l._RF.pop()}}}));

System.register("chunks:///_virtual/WalletSelectBtnItem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NodeUtil.ts","./AudioManage.ts"],(function(t){var e,n,i,o,l,a,c,s,r,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.initializerDefineProperty},function(t){i=t.cclegacy,o=t.Label,l=t._decorator,a=t.Component,c=t.Button},function(t){s=t.NodeUtil},function(t){r=t.AudioManage,u=t.SoundList}],execute:function(){var p,m,d,f,y,B;i._RF.push({},"5be88lQ9YlMSLBmESoutukq","WalletSelectBtnItem",void 0);const{ccclass:b,property:h}=l;t("WalletSelectBtnItem",(p=b("WalletSelectBtnItem"),m=h(o),p(((B=class t extends a{constructor(){super(...arguments),n(this,"nameLabel",y,this),this._myinfo=void 0}start(){s.BtnOnClick(this.node.getComponent(c),(()=>{r.playSFX(u.click),t.onClickBtn(this._myinfo)}))}setInfo(t){this._myinfo=t,this.nameLabel.string=t.name}update(t){}}).onClickBtn=void 0,y=e((f=B).prototype,"nameLabel",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=f))||d));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/SelectWallet', 'chunks:///_virtual/SelectWallet'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});