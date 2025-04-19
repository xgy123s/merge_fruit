System.register("chunks:///_virtual/ShowGetPrize",["./ShowGetPrize.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/ShowGetPrize.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ActionUtil.ts","./LoadUtil.ts","./NodeUtil.ts","./BundleLayer.ts","./AudioManage.ts","./GameGlobal.ts"],(function(e){var t,i,n,o,a,r,s,l,c,u,h,p,d,g,b,f,w;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.initializerDefineProperty},function(e){n=e.cclegacy,o=e.Node,a=e.Button,r=e.PageView,s=e.Label,l=e._decorator,c=e.instantiate,u=e.Sprite},function(e){h=e.default},function(e){p=e.default},function(e){d=e.NodeUtil},function(e){g=e.default},function(e){b=e.AudioManage,f=e.SoundList},function(e){w=e.GameGlobal}],execute:function(){var z,P,y,m,S,L,V,k,v,B,G,_,x;n._RF.push({},"d30d6xLJaxMx4eRiRirwVl7","ShowGetPrize",void 0);const{ccclass:N,property:F}=l;e("ShowGetPrize",(z=N("ShowGetPrize"),P=F(o),y=F(a),m=F(r),S=F(s),L=F(o),z((v=t((k=class extends g{constructor(){super(...arguments),i(this,"content",v,this),i(this,"okButton",B,this),i(this,"prizePageView",G,this),i(this,"coinLabel",_,this),i(this,"tempNode",x,this),this._rankId=0,this._prizes=[]}get serverConfig(){return w.instance.serverConfig}async onInit(){}async onShow(e){this.prizePageView.removeAllPages(),this._prizes=e,e?.length?(h.show(this.content,{type:"scale",duration:.3}),this.changePage(),e.forEach((e=>{const t=c(this.tempNode);this.prizePageView.addPage(t),t.active=!0;const i=t.getComponent(u);i&&p.getSpriteFrameIntelligent(e.icon,(e=>{this&&this.isValid&&e&&(i.spriteFrame=e)}))})),this.prizePageView):this.hideSelf()}changePage(){const e=this.prizePageView.curPageIdx,t=this._prizes[e];t&&(this.coinLabel.string=""+t.count)}async onHide(){await h.hide(this.content,{type:"scale",duration:.3})}start(){d.ListenBtnsClick([this.okButton],((e,t)=>{switch(b.playSFX(f.click),e.node.name){case"okButton":this.hideSelf()}}),this)}onEnable(){}onDisable(){}update(e){}}).prototype,"content",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=t(k.prototype,"okButton",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=t(k.prototype,"prizePageView",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=t(k.prototype,"coinLabel",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=t(k.prototype,"tempNode",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=k))||V));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/ShowGetPrize', 'chunks:///_virtual/ShowGetPrize'); 
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