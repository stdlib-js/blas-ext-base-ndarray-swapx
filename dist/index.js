"use strict";var d=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var q=d(function(D,s){
var p=require('@stdlib/ndarray-base-numel-dimension/dist'),u=require('@stdlib/ndarray-base-stride/dist'),v=require('@stdlib/ndarray-base-offset/dist'),n=require('@stdlib/ndarray-base-data-buffer/dist'),l=require('@stdlib/blas-ext-base-swapx/dist').ndarray,m=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function x(a){var r,e,i;return e=a[0],i=a[1],r=m(a[2]),l(p(e,0),r,n(e),u(e,0),v(e),n(i),u(i,0),v(i)),i}s.exports=x
});var c=require("path").join,f=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),j=q(),t,o=f(c(__dirname,"./native.js"));g(o)?t=j:t=o;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
