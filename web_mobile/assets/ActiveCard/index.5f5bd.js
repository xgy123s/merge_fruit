System.register("chunks:///_virtual/ActiveCard",["./ActiveCard.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/ActiveCard.ts",["./rollupPluginModLoBabelHelpers.js","cc","./LoadUtil.ts","./GameGlobal.ts","./popBasic.ts"],(function(e){var t,r,i,a,s,n,o,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.initializerDefineProperty},function(e){i=e.cclegacy,a=e.Sprite,s=e._decorator},function(e){n=e.default},function(e){o=e.GameGlobal},function(e){c=e.popBasic}],execute:function(){var l,p,u,d,f;i._RF.push({},"6f4c4o6VZdLxId+rSEOM8Yd","ActiveCard",void 0);const{ccclass:g,property:v}=s;e("ActiveCard",(l=g("ActiveCard"),p=v(a),l((f=t((d=class extends c{constructor(){super(...arguments),r(this,"adsSprite",f,this)}get serverConfig(){return o.instance.serverConfig}async onInit(){}async onShow(){n.getSpriteFrameIntelligent(this.serverConfig.loadingPage.activeCard,(e=>{this.isValid&&e&&(this.adsSprite.spriteFrame=e)})),await super.onShow()}async destroySelf(e,t){await super.destroySelf(!0,!0)}}).prototype,"adsSprite",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=d))||u));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/ActiveCard', 'chunks:///_virtual/ActiveCard'); 
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