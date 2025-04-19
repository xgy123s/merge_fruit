System.register("chunks:///_virtual/RevivePop",["./RevivePop.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/RevivePop.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ButtonType.ts","./GameGlobal.ts","./EventUtil.ts","./GameLogic.ts","./BundleLayer.ts","./popBasic.ts"],(function(e){var t,i,o,n,a,s,r,c,u,l,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.initializerDefineProperty},function(e){o=e.cclegacy,n=e.Node,a=e._decorator},function(e){s=e.EBtnType},function(e){r=e.GameGlobal},function(e){c=e.default},function(e){u=e.GameLogic},function(e){l=e.default},function(e){p=e.popBasic}],execute:function(){var v,d,y,f,h,b;o._RF.push({},"1b27eTXmSFNa41vtE8dcb39","RevivePop",void 0);const{ccclass:g,property:m}=a;e("RevivePop",(v=m(n),d=m(n),g((h=t((f=class extends p{constructor(){super(...arguments),i(this,"shareNode",h,this),i(this,"buyNode",b,this),this._isRevived=!1}async onInit(e){await super.onInit(e),this._isRevived=!1;const t=r.instance.gameButtonConfig.reviveBtn.btnType===s.buy;this.buyNode.active=t,this.shareNode.active=!t}async onShow(e){c.on("buyOrShareCallback",(e=>{let{key:t,isSuccess:i}=e;"reviveBtn"===t&&i&&(u.instance.reviveGame(),l.destroy("RevivePop"))})),await super.onShow(e)}async onHide(){c.targetOff(this),await super.onHide()}async closeBtnHandler(){await l.preload("OverScorePop"),l.destroy("RevivePop"),l.show("OverScorePop"),u.instance.endGame()}async destroySelf(e,t){await super.destroySelf(e,!0),c.targetOff(this)}}).prototype,"shareNode",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=t(f.prototype,"buyNode",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=f))||y));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/RevivePop', 'chunks:///_virtual/RevivePop'); 
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