System.register("chunks:///_virtual/NotifyMarquee",["./NotifyMarquee.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/NotifyMarquee.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NotifyDeclare.ts","./NotifyRepeater.ts"],(function(e){var t,i,o,n,s,r,l,a,d,c,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.initializerDefineProperty},function(e){o=e.cclegacy,n=e.Node,s=e.Sprite,r=e._decorator,l=e.Label,a=e.instantiate,d=e.isValid},function(e){c=e.NotifyDialogStyleType},function(e){h=e.default}],execute:function(){var p,f,u,y,b,g,_,N,m;o._RF.push({},"c367bbU9NBFfKL2yYJ7PaHM","NotifyMarquee",void 0);const{ccclass:v,property:P}=r;e("NotifyMarquee",(p=v("NotifyMarquee"),f=P(n),u=P(n),y=P(s),p((g=class extends h.BundlePool{constructor(){super(...arguments),i(this,"bg_parent",_,this),i(this,"describeNode",N,this),i(this,"icon",m,this),this._info=void 0}onInit(e){e&&(this._info=e)}onShow(e){if(this.destroyAll(),e){let t,i=e.title.split("$$");if(i.length<2)this.describeNode.getComponent(l).string=i[0],this.describeNode.getComponent(l)?.updateRenderData(!0),this.describeNode.active=!0;else for(let e in i){let t=a(this.describeNode);this.bg_parent.addChild(t),t.getComponent(l).string=i[e],t.getComponent(l)?.updateRenderData(!0),t.active=!0}(t=e.notifyStyle.notifyStyleType==c.IMAGE)&&h.LoadUtil.getSpriteFrameIntelligent(e.notifyStyle.notifyImage,(e=>{this.icon.spriteFrame=e})),this.icon.node.active=t}}destroyAll(){this.describeNode.active=!1,d(this.bg_parent)&&this.bg_parent.children.forEach((e=>{e!==this.describeNode&&e!==this.icon.node&&(this.bg_parent.removeChild(e),d(e)&&e.destroy())}))}update(e){const t=this.node.worldPosition;if(this._info){const e=h.MathUtil.moveTowards(t.x,this._info.endPos.x,this._info.step);if(t.set(e,t.y,t.z),this.node.worldPosition=t,t.x<=this._info.endPos.x){const e=this._info.track[this._info.tPos];let t=0;e&&(t=e.indexOf(this.node))>-1&&e.splice(t,1),h.BundlePool.remove("NotifyMarquee",this.node),this._info=null}}}onDestroy(){d(this.bg_parent)&&this.bg_parent.children.forEach((e=>{e!==this.describeNode&&e!==this.icon.node&&(this.bg_parent.removeChild(e),d(e)&&e.destroy())}))}},_=t(g.prototype,"bg_parent",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=t(g.prototype,"describeNode",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=t(g.prototype,"icon",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=g))||b));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/NotifyMarquee', 'chunks:///_virtual/NotifyMarquee'); 
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