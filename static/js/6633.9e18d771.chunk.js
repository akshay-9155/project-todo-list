"use strict";(self.webpackChunkproject_todo_list=self.webpackChunkproject_todo_list||[]).push([[6633],{6633:(t,e,n)=>{function r(t){function e(t,e){t.cmdState.push(e)}function n(t){return t.cmdState.length>0?t.cmdState[t.cmdState.length-1]:null}function r(t,e,n){return function(){this.name=t,this.bracketNo=0,this.style=e,this.styles=n,this.argument=null,this.styleIdentifier=function(){return this.styles[this.bracketNo-1]||null},this.openBracket=function(){return this.bracketNo++,"bracket"},this.closeBracket=function(){}}}var a={};function i(t,e){t.f=e}function c(t,r){var c;if(t.match(/^\\[a-zA-Z@\xc0-\u1fff\u2060-\uffff]+/)){var f=t.current().slice(1);return e(r,c=new(c=a.hasOwnProperty(f)?a[f]:a.DEFAULT)),i(r,o),c.style}if(t.match(/^\\[$&%#{}_]/))return"tag";if(t.match(/^\\[,;!\/\\]/))return"tag";if(t.match("\\["))return i(r,(function(t,e){return u(t,e,"\\]")})),"keyword";if(t.match("\\("))return i(r,(function(t,e){return u(t,e,"\\)")})),"keyword";if(t.match("$$"))return i(r,(function(t,e){return u(t,e,"$$")})),"keyword";if(t.match("$"))return i(r,(function(t,e){return u(t,e,"$")})),"keyword";var m=t.next();return"%"==m?(t.skipToEnd(),"comment"):"}"==m||"]"==m?(c=n(r))?(c.closeBracket(m),i(r,o),"bracket"):"error":"{"==m||"["==m?(e(r,c=new(c=a.DEFAULT)),"bracket"):/\d/.test(m)?(t.eatWhile(/[\w.%]/),"atom"):(t.eatWhile(/[\w\-_]/),c=function(t){for(var e=t.cmdState,n=e.length-1;n>=0;n--){var r=e[n];if("DEFAULT"!=r.name)return r}return{styleIdentifier:function(){return null}}}(r),"begin"==c.name&&(c.argument=t.current()),c.styleIdentifier())}function u(t,e,n){if(t.eatSpace())return null;if(n&&t.match(n))return i(e,c),"keyword";if(t.match(/^\\[a-zA-Z@]+/))return"tag";if(t.match(/^[a-zA-Z]+/))return"variableName.special";if(t.match(/^\\[$&%#{}_]/))return"tag";if(t.match(/^\\[,;!\/]/))return"tag";if(t.match(/^[\^_&]/))return"tag";if(t.match(/^[+\-<>|=,\/@!*:;'"`~#?]/))return null;if(t.match(/^(\d+\.\d*|\d*\.\d+|\d+)/))return"number";var r=t.next();return"{"==r||"}"==r||"["==r||"]"==r||"("==r||")"==r?"bracket":"%"==r?(t.skipToEnd(),"comment"):"error"}function o(t,e){var r=t.peek();return"{"==r||"["==r?(n(e).openBracket(r),t.eat(r),i(e,c),"bracket"):/[ \t\r]/.test(r)?(t.eat(r),null):(i(e,c),function(t){var e=t.cmdState.pop();e&&e.closeBracket()}(e),c(t,e))}return a.importmodule=r("importmodule","tag",["string","builtin"]),a.documentclass=r("documentclass","tag",["","atom"]),a.usepackage=r("usepackage","tag",["atom"]),a.begin=r("begin","tag",["atom"]),a.end=r("end","tag",["atom"]),a.label=r("label","tag",["atom"]),a.ref=r("ref","tag",["atom"]),a.eqref=r("eqref","tag",["atom"]),a.cite=r("cite","tag",["atom"]),a.bibitem=r("bibitem","tag",["atom"]),a.Bibitem=r("Bibitem","tag",["atom"]),a.RBibitem=r("RBibitem","tag",["atom"]),a.DEFAULT=function(){this.name="DEFAULT",this.style="tag",this.styleIdentifier=this.openBracket=this.closeBracket=function(){}},{name:"stex",startState:function(){return{cmdState:[],f:t?function(t,e){return u(t,e)}:c}},copyState:function(t){return{cmdState:t.cmdState.slice(),f:t.f}},token:function(t,e){return e.f(t,e)},blankLine:function(t){t.f=c,t.cmdState.length=0},languageData:{commentTokens:{line:"%"}}}}n.r(e),n.d(e,{stex:()=>a,stexMath:()=>i});const a=r(!1),i=r(!0)}}]);
//# sourceMappingURL=6633.9e18d771.chunk.js.map