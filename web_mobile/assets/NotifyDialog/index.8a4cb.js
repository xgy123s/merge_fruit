System.register("chunks:///_virtual/NotifyDialog",["./NotifyDialog.ts","./TextDialog.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/NotifyDialog.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NotifyDeclare.ts","./NotifyRepeater.ts","./TextDialog.ts"],(function(t){var i,e,o,n,s,a,l,r,p,y;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.initializerDefineProperty},function(t){o=t.cclegacy,n=t.Sprite,s=t.Label,a=t.Node,l=t._decorator},function(t){r=t.NotifyDialogStyleType},function(t){p=t.default},function(t){y=t.TextDialog}],execute:function(){var u,h,c,g,f,m,b,d,S,_,D;o._RF.push({},"7a76fqpBWlCsb64kBiTqLWr","NotifyDialog",void 0);const{ccclass:T,property:B}=l;t("NotifyDialog",(u=T("NotifyDialog"),h=B(n),c=B(y),g=B(s),f=B(a),u((b=class extends p.BundleLayer{constructor(){super(...arguments),e(this,"img_bg",d,this),e(this,"textdialog",S,this),e(this,"jumpLabel",_,this),e(this,"jumpBtn",D,this),this.options=void 0,this.normalImage=void 0}async onShow(t){if(this.options=t,t){let i={frequency:t.notifyShowFrequencyType,openTime:Date.now()};p.StorageUtil.set(t.title+t._id,i)}p.ActionUtil.show(this.img_bg.node,{type:"scale",duration:1}),this._init()}onLoad(){this.normalImage||(this.normalImage=this.img_bg.spriteFrame)}async start(){this._init()}async _init(){let t=this.options?.notifyStyle.notifyStyleType==r.TEXT,i=this.options?.notifyStyle.notifyStyleType==r.IMAGE&&this.options?.notifyStyle.notifyImage;this.textdialog.node.active=t,t&&this.textdialog.init(this.options),this.jumpBtn.active=this.options?.notifyButton.hasNotifyButton||!1,this.jumpLabel.string=this.options?.notifyButton.notifyButtonText||"确定",i&&(this.img_bg.spriteFrame=await p.LoadUtil.getSpriteFrameIntelligent(i))||(this.img_bg.spriteFrame=this.normalImage)}jumpPath(){this.options?.notifyJump.isJump?p.HtmlUtil.navigateToExternalLink(this.options.notifyJump.jumpPath):this.destroySelf()}async destroySelf(t,i){this.options?.call&&this.options.call.call(),await super.destroySelf(!1,i)}},d=i(b.prototype,"img_bg",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=i(b.prototype,"textdialog",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=i(b.prototype,"jumpLabel",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=i(b.prototype,"jumpBtn",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=b))||m));o._RF.pop()}}}));

System.register("chunks:///_virtual/TextDialog.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NotifyDeclare.ts"],(function(t){var e,i,l,o,n,r,c,a;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.initializerDefineProperty},function(t){l=t.cclegacy,o=t.Label,n=t.ScrollView,r=t._decorator,c=t.Component},function(t){a=t.NotifyDialogStyleType}],execute:function(){var s,u,p,y,f,g,b,h,D;l._RF.push({},"1568dtYV/BF1aBI4oGuvtCw","TextDialog",void 0);const{ccclass:T,property:v}=r;t("TextDialog",(s=T("TextDialog"),u=v(o),p=v(o),y=v(n),s((b=e((g=class extends c{constructor(){super(...arguments),i(this,"title",b,this),i(this,"content",h,this),i(this,"scrollview",D,this)}init(t){this.title.string=t.title,t.notifyStyle.notifyStyleType==a.TEXT&&(this.content.string=t.notifyStyle.notifyText||"")}}).prototype,"title",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=e(g.prototype,"content",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=e(g.prototype,"scrollview",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=g))||f));l._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/NotifyDialog', 'chunks:///_virtual/NotifyDialog'); 
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