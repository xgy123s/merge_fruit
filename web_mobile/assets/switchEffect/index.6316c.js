System.register("chunks:///_virtual/switchEffect",["./switchEffect.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/switchEffect.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BundleLayer.ts","./ActionUtil.ts"],(function(t){var e,i,n,c,a,s,r;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.initializerDefineProperty},function(t){n=t.cclegacy,c=t.Node,a=t._decorator},function(t){s=t.default},function(t){r=t.default}],execute:function(){var o,u,l,f,d;n._RF.push({},"a1fd6ONFY1JNa0nAgNqHS9e","switchEffect",void 0);const{ccclass:p,property:y}=a;t("switchEffect",(o=p("switchEffect"),u=y(c),o((d=e((f=class extends s{constructor(){super(...arguments),i(this,"main",d,this)}async onInit(t){}async onShow(t){}async onHide(){await r.hide(this.main,{duration:.8,type:"fade",useData:{easing:"backOut"}})}async destroySelf(t,e,i){await super.destroySelf(t,!0,i)}}).prototype,"main",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=f))||l));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/switchEffect', 'chunks:///_virtual/switchEffect'); 
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