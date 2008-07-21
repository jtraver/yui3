YUI.add("dd-constrain",function(E){var A="dragNode",G="offsetHeight",F="offsetWidth";var D=function(){D.superclass.constructor.apply(this,arguments);};D.NAME="DragConstrained";D.ATTRS={stickX:{value:false},stickY:{value:false},tickX:{value:false},tickY:{value:false},tickXArray:{value:false},tickYArray:{value:false},constrain2region:{value:false,get:function(C){if(E.Lang.isObject(C)){var H={};E.mix(H,C);return H;}else{return false;}},set:function(C){if(E.Lang.isObject(C)){if(C.top&&C.right&&C.left&&C.bottom){var H={};E.mix(H,C);return H;}else{return false;}}else{if(C!==false){return false;}}}},gutter:{value:"0",set:function(C){return E.DD.DDM.cssSizestoObject(C);}},constrain2node:{value:false,set:function(H){if(!this.get("constrain2region")){var C=E.Node.get(H);if(C){return C;}}else{if(this.get("constrain2region")!==false){}}return false;}},constrain2view:{value:false}};var B={start:function(){D.superclass.start.apply(this,arguments);this._regionCache=null;},_regionCache:null,_cacheRegion:function(){this._regionCache=this.get("constrain2node").get("region");},getRegion:function(K){var I={};if(this.get("constrain2node")){if(!this._regionCache){E.Event.addListener("window","resize",this._cacheRegion,this);this._cacheRegion();}I=E.clone(this._regionCache);}else{if(this.get("constrain2region")){I=this.get("constrain2region");}else{if(this.get("constrain2view")){I=this.get("node").get("viewportRegion");}else{return false;}}}var H=this.get("gutter");E.each(H,function(L,M){if((M=="right")||(M=="bottom")){I[M]-=L;}else{I[M]+=L;}});if(K){var J=this.get(A).get(G),C=this.get(A).get(F);I.right=I.right-C;I.bottom=I.bottom-J;}return I;},_checkRegion:function(C){var I=C,J=this.getRegion(),K=this.get(A).get(G),H=this.get(A).get(F);if(J.top>I[1]){I[1]=J.top;}if(I[1]>(J.bottom-K)){I[1]=(J.bottom-K);}if(J.left>I[0]){I[0]=J.left;}if(I[0]>(J.right-H)){I[0]=(J.right-H);}return I;},inRegion:function(I){I=I||this.get(A).getXY();var H=this._checkRegion([I[0],I[1]]),C=false;if((I[0]===H[0])&&(I[1]===H[1])){C=true;}return C;},_align:function(I){var C=D.superclass._align.apply(this,arguments),H=this.getRegion(true);if(this.get("stickX")){C[1]=(this.startXY[1]-this.deltaXY[1]);}if(this.get("stickY")){C[0]=(this.startXY[0]-this.deltaXY[0]);}if(H){C=this._checkRegion(C);}C=this._checkTicks(C,H);return C;},_calcTicks:function(N,M,J,L,K){var H=((N-M)/J),I=Math.floor(H),C=Math.ceil(H);if((I!==0)||(C!==0)){if((H>=I)&&(H<=C)){N=(M+(J*I));if(L&&K){if(N<L){N=(M+(J*(I+1)));}if(N>K){N=(M+(J*(I-1)));}}}}return N;},_calcTickArray:function(O,P,N,K){var H=0,L=P.length,J=0;if(!P||(P.length===0)){return O;}else{if(P[0]>=O){return P[0];}else{for(H=0;H<L;H++){J=(H+1);if(P[J]&&P[J]>=O){var I=O-P[H],C=P[J]-O;var M=(C>I)?P[H]:P[J];if(N&&K){if(M>K){if(P[H]){M=P[H];}else{M=P[L-1];}}}return M;}}return P[P.length-1];}}},_checkTicks:function(L,J){var K=(this.startXY[0]-this.deltaXY[0]),I=(this.startXY[1]-this.deltaXY[1]),C=this.get("tickX"),H=this.get("tickY");if(C&&!this.get("tickXArray")){L[0]=this._calcTicks(L[0],K,C,J.left,J.right);}if(H&&!this.get("tickYArray")){L[1]=this._calcTicks(L[1],I,H,J.top,J.bottom);}if(this.get("tickXArray")){L[0]=this._calcTickArray(L[0],this.get("tickXArray"),J.left,J.right);}if(this.get("tickYArray")){L[1]=this._calcTickArray(L[1],this.get("tickYArray"),J.top,J.bottom);}return L;}};E.extend(D,E.DD.Drag,B);E.DD.Drag=D;},"@VERSION@",{requires:["dd-drag","dd-proxy"],skinnable:false});