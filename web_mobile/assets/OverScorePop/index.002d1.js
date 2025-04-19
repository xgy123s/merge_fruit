System.register("chunks:///_virtual/OverScorePop",["./OverScorePop.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/OverScorePop.ts",["./rollupPluginModLoBabelHelpers.js","cc","./popBasic.ts","./EventUtil.ts","./StaticLayer.ts","./GameGlobal.ts","./GameLogic.ts","./GlobalManager.ts","./BundleLayer.ts","./Utils.ts","./TimeUtil.ts"],(function(e){var t,i,o,a,n,r,l,s,c,u,d,b,h,m,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.initializerDefineProperty},function(e){o=e.cclegacy,a=e.Node,n=e.Label,r=e._decorator},function(e){l=e.popBasic},function(e){s=e.default},function(e){c=e.default},function(e){u=e.GameGlobal},function(e){d=e.GameLogic},function(e){b=e.default},function(e){h=e.default},function(e){m=e.default},function(e){p=e.TimeUtil}],execute:function(){var f,g,S,y,w,v,P,N,L,k,G,I,T,U,z,D;o._RF.push({},"9381b9brCJDSKSgiD6fn/qh","OverScorePop",void 0);const{ccclass:B,property:O}=r;e("OverScorePop",(f=O(a),g=O(a),S=O(n),y=O(n),w=O(n),v=O(n),P=O(a),B((k=t((L=class extends l{constructor(){super(...arguments),i(this,"doubleNode",k,this),i(this,"normalNode",G,this),i(this,"doubleScore",I,this),i(this,"normalScore",T,this),i(this,"doubleRankLabel",U,this),i(this,"normalRankLabel",z,this),i(this,"doubleTag",D,this)}async onInit(e){this.doubleNode.active=!1,this.normalNode.active=!1,this.main=this.normalNode,this.main.active=!0,s.on("buyOrShareCallback",(e=>{"gameOverBtn"===e.key&&this.addScore(e.isSuccess?2:1)})),await super.onInit(e)}async onShow(e){e?this._updateUI(e.isDouble,e.score,e.upPercent):this._updateUI(!1,c.GameUIStatic.score,"0%"),await super.onShow(e)}_updateUI(e,t,i){const o="Animal-Top";let a=m.Instance.getLocalStorage(o);this.doubleTag.active=e,this.normalScore.string=t.toString(),this.doubleScore.string=t.toString(),this.doubleRankLabel.string=i,t>a&&m.Instance.setLocalStorage(o,t)}normalBtnHandler(){p.soloFunction((async()=>{await this.addScore(1)}),"onAgainTouch")}async addScore(e){const t=c.GameUIStatic.score*e,i=await u.instance.gameServer.gameOver(t,d.instance.composeBigWatermelonCount);if(i.isSucc)this.normalNode.active=!1,this.doubleNode.active=!1,this.main=this.doubleNode,this.main.active=!0,this.onShow({isDouble:e>1,score:t,upPercent:i.res.upPer});else{await b.moduleManager("uiPopupManager").showConfirm("上传失败是否重试",{btnPrimaryText:"重试",btnSecondaryText:"取消"})?this.addScore(e):(this.normalNode.active=!1,this.doubleNode.active=!1,this.main=this.doubleNode,this.main.active=!0,this.onShow({isDouble:!1,score:0,upPercent:"0%"}))}}async backHome(){h.show("switchEffect"),await h.preload("mainPanel"),await Promise.all([h.show("mainPanel"),h.destroy("OverScorePop"),h.destroy("gamePanel",!1)]),h.destroy("switchEffect")}}).prototype,"doubleNode",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=t(L.prototype,"normalNode",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(L.prototype,"doubleScore",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=t(L.prototype,"normalScore",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=t(L.prototype,"doubleRankLabel",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(L.prototype,"normalRankLabel",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(L.prototype,"doubleTag",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=L))||N));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/OverScorePop', 'chunks:///_virtual/OverScorePop'); 
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