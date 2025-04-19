System.register("chunks:///_virtual/PrizePreview",["./PrizePreview.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PrizePreview.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ActionUtil.ts","./LoadUtil.ts","./NodeUtil.ts","./BundleLayer.ts","./AudioManage.ts","./GameGlobal.ts"],(function(e){var i,t,n,r,a,o,s,l,c,u,p,h,g,b,d,z,f;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.initializerDefineProperty},function(e){n=e.cclegacy,r=e.Node,a=e.Button,o=e.PageView,s=e.Label,l=e._decorator,c=e.instantiate,u=e.Sprite},function(e){p=e.default},function(e){h=e.default},function(e){g=e.NodeUtil},function(e){b=e.default},function(e){d=e.AudioManage,z=e.SoundList},function(e){f=e.GameGlobal}],execute:function(){var m,P,k,w,y,L,v,I,S,B,V,_,N,F,x,A,C;n._RF.push({},"709418aetxIp7sPjolcrXzq","PrizePreview",void 0);const{ccclass:D,property:G}=l;e("PrizePreview",(m=D("PrizePreview"),P=G(r),k=G(a),w=G(o),y=G(s),L=G(s),v=G(s),I=G(r),m((V=i((B=class extends b{constructor(){super(...arguments),t(this,"content",V,this),t(this,"okButton",_,this),t(this,"prizePageView",N,this),t(this,"coinLabel",F,this),t(this,"timeLabel",x,this),t(this,"rankLabel",A,this),t(this,"tempNode",C,this),this._rankId=0}get serverConfig(){return f.instance.serverConfig}async onInit(){}async onShow(e){this.prizePageView.removeAllPages(),this._rankId=e.rankId;const i=f.instance.gameServer.getRankPrizeInfo(e.rankId);i.prize?(p.show(this.content,{type:"scale",duration:.3}),this.timeLabel.string=""+f.instance.formatTimeStr(i.endTime),1==i.prize.ranks.length?this.rankLabel.string=""+i.prize.ranks[0]:2==i.prize.ranks.length?this.rankLabel.string=`${i.prize.ranks[0]}~${i.prize.ranks[1]}`:console.error("错误的排名数据"),this.changePage(),i.prize.prizes.forEach((e=>{const i=c(this.tempNode);this.prizePageView.addPage(i),i.active=!0;const t=i.getComponent(u);t&&h.getSpriteFrameIntelligent(e.icon,(e=>{this&&this.isValid&&e&&(t.spriteFrame=e)}))})),this.prizePageView):this.hideSelf()}changePage(){const e=f.instance.gameServer.getRankPrizeInfo(this._rankId);if(!e)return;const i=this.prizePageView.curPageIdx,t=e.prize.prizes[i];this.coinLabel.string=""+t.count}async onHide(){await p.hide(this.content,{type:"scale",duration:.3})}start(){g.ListenBtnsClick([this.okButton],((e,i)=>{switch(d.playSFX(z.click),e.node.name){case"okButton":this.hideSelf()}}),this)}onEnable(){}onDisable(){}update(e){}}).prototype,"content",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=i(B.prototype,"okButton",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=i(B.prototype,"prizePageView",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=i(B.prototype,"coinLabel",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=i(B.prototype,"timeLabel",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=i(B.prototype,"rankLabel",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=i(B.prototype,"tempNode",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=B))||S));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/PrizePreview', 'chunks:///_virtual/PrizePreview'); 
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