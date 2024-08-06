"use strict";(self.webpackChunkiobroker_admin_component_hmip=self.webpackChunkiobroker_admin_component_hmip||[]).push([["src_Components_jsx"],{90977:function(G,m,n){n.r(m),n.d(m,{default:function(){return b}});var v=n(4819),o=n.n(v),k=n(15854),s=n.n(k),c=n(94427),p=n(75606),i=n(68844),T=Object.defineProperty,C=(a,e,t)=>e in a?T(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,S=(a,e,t)=>(C(a,typeof e!="symbol"?e+"":e,t),t),f=(a,e,t)=>new Promise((l,u)=>{var j=r=>{try{h(t.next(r))}catch(d){u(d)}},P=r=>{try{h(t.throw(r))}catch(d){u(d)}},h=r=>r.done?l(r.value):Promise.resolve(r.value).then(j,P);h((t=t.apply(a,e)).next())});class g extends i.ConfigGeneric{constructor(e){super(e),S(this,"onAliveChanged",(t,l)=>{const u=l?l.val:!1;u!==this.state.alive&&this.setState({alive:u},()=>{u&&!this.state.initialized&&setTimeout(()=>this.setState({initialized:!0},()=>this.askState(),100))})}),this.state={response:!1,running:!1,initialized:!1,alive:!1,error:!1}}componentDidMount(){super.componentDidMount();const e=this.props.socket.getState(`hmip.${this.props.instance}.alive`);e!=null&&e.val&&this.setState({alive:!0,initialized:!0},()=>this.askState()),this.props.socket.subscribeState(`system.adapter.hmip.${this.props.instance}.alive`,this.onAliveChanged)}componentWillUnmount(){super.componentWillUnmount(),this.props.socket.unsubscribeState(`system.adapter.hmip.${this.props.instance}.alive`,this.onAliveChanged),this.askTimeout&&(clearTimeout(this.askTimeout),this.askTimeout=null)}askState(){return f(this,null,function*(){const e=yield this.props.socket.sendTo(`hmip.${this.props.instance}`,"requestTokenState",null);this.handleResponse(e)&&(this.askTimeout=this.askTimeout||setTimeout(()=>{this.askTimeout=null,this.askState()},300))})}handleResponse(e){switch(e.state){case"startedTokenCreation":return this.setState({response:"started token creation",running:!0}),!0;case"waitForBlueButton":return this.setState({response:"press blue button on accesspoint",running:!0}),!0;case"confirmToken":return this.setState({response:"confirming token",running:!0}),!0;case"errorOccurred":this.setState({response:"error occurred during token generation, look at the logs",running:!1,error:!0});break;case"idle":this.setState({response:'press "request token"',running:!1});break;case"tokenCreated":{this.setState({response:"token created, save settings to use your accesspoint",running:!1}),i.ConfigGeneric.setValue(this.props.data,"authToken",e.authToken),i.ConfigGeneric.setValue(this.props.data,"clientAuthToken",e.clientAuthToken),i.ConfigGeneric.setValue(this.props.data,"clientId",e.clientId),this.props.onChange(this.props.data,void 0,()=>this.props.forceUpdate(["authToken","clientAuthToken","clientId"],this.props.data));break}}return!1}requestToken(){return f(this,null,function*(){const e={accessPointSgtin:i.ConfigGeneric.getValue(this.props.data,"accessPointSgtin"),clientId:i.ConfigGeneric.getValue(this.props.data,"clientId"),pin:i.ConfigGeneric.getValue(this.props.data,"pin")||"",deviceName:i.ConfigGeneric.getValue(this.props.data,"deviceName")};this.setState({response:"started token creation",running:!0,error:!1});const t=yield this.props.socket.sendTo(`hmip.${this.props.instance}`,"requestToken",e);this.handleResponse(t)&&(this.askTimeout=this.askTimeout||setTimeout(()=>{this.askTimeout=null,this.askState()},300))})}renderItem(){if(!this.state.alive&&!this.state.initialized)return o().createElement("div",null,p.I18n.t("custom_hmip_not_alive"));if(!this.state.initialized)return o().createElement(c.LinearProgress,null);const e=i.ConfigGeneric.getValue(this.props.data,"accessPointSgtin");return o().createElement("div",{style:{width:"100%"}},o().createElement("div",{style:{color:this.state.error?this.props.themeType==="dark"?"#c20000":"#800000":void 0}},p.I18n.t(`custom_hmip_${this.state.response}`).replace("custom_hmip_","")),o().createElement(c.Button,{variant:"contained",color:"primary",disabled:this.state.running||!e,onClick:()=>this.requestToken()},this.state.running?o().createElement(c.CircularProgress,{size:24}):p.I18n.t("custom_hmip_request_token")))}}g.propTypes={socket:s().object.isRequired,themeType:s().string,themeName:s().string,style:s().object,className:s().string,data:s().object.isRequired,attr:s().string,schema:s().object,onError:s().func,onChange:s().func};var y=g,b={HmipComponent:y}}}]);

//# sourceMappingURL=src_Components_jsx.cd3e6cf3.chunk.js.map