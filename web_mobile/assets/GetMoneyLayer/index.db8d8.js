System.register("chunks:///_virtual/GetMoneyLayer",["./GetMoneyLayer.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/GetMoneyLayer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ActionUtil.ts","./NodeUtil.ts","./TimeUtil.ts","./BundleLayer.ts","./AudioManage.ts","./GameGlobal.ts"],(function(t){var e,n,i,o,a,s,l,r,c,u,h,y,g,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.initializerDefineProperty},function(t){i=t.cclegacy,o=t.Label,a=t.Node,s=t.Button,l=t._decorator},function(t){r=t.default},function(t){c=t.NodeUtil},function(t){u=t.TimeUtil},function(t){h=t.default},function(t){y=t.AudioManage,g=t.SoundList},function(t){p=t.GameGlobal}],execute:function(){var b,f,d,m,L,_,C,G,w,B,M;i._RF.push({},"97267Duqc9NeaGZD77cWkhx","GetMoneyLayer",void 0);const{ccclass:A,property:k}=l;t("GetMoneyLayer",(b=A("GetMoneyLayer"),f=k(o),d=k(a),m=k(s),L=k(a),b((G=e((C=class extends h{constructor(){super(...arguments),n(this,"targetLabel",G,this),n(this,"getLayout",w,this),n(this,"closeButton",B,this),n(this,"content",M,this),this._getAmount=0,this._finishCallback=null}get serverConfig(){return p.instance.serverConfig}async onInit(){}async onShow(t){this.targetLabel.string=t.curAmount.toString(),this._getAmount=t.curAmount;const e=p.instance.serverConfig.cashOutConfig,n=[e.type_1,e.type_2,e.type_3];return this.getLayout.getComponentsInChildren(s).forEach(((t,e)=>{t.interactable=n[e]})),r.show(this.content,{type:"scale",duration:.3}),new Promise((t=>{this._finishCallback=t}))}async onHide(t){this._finishCallback?.(),await r.hide(this.content,{type:"scale",duration:.3})}start(){let t=this.getLayout.getComponentsInChildren(s);t=t.concat([this.closeButton]),console.log("btns",t),c.ListenBtnsClick(t,((t,e)=>{switch(y.playSFX(g.click),t.node.name){case"closeButton":this.hideSelf();break;case"getButton1":case"getButton2":case"getButton3":this.GetMoneyLayer(t.node.name)}}),this)}onEnable(){}onDisable(){}async _runDrawAnimation(){}update(t){}GetMoneyLayer(t){u.soloFunction((async()=>{await p.instance.getMoney(this._getAmount,t)&&this.hideSelf()}),"GetMoneyLayer")}}).prototype,"targetLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=e(C.prototype,"getLayout",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=e(C.prototype,"closeButton",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=e(C.prototype,"content",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=C))||_));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/GetMoneyLayer', 'chunks:///_virtual/GetMoneyLayer'); 
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