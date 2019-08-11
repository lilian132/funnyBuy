var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20180905_syb_scopedata*/global.__wcc_version__='v0.5vv_20180905_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-countdown'])
Z([[7],[3,'showDay']])
Z(z[1])
Z([[2,'!'],[[7],[3,'showColon']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-countdown'])
Z([[7],[3,'showDay']])
Z(z[1])
Z([[2,'!'],[[7],[3,'showColon']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'openSync']])
Z([[2,'||'],[[2,'=='],[[7],[3,'positionSync']],[1,'center']],[[2,'=='],[[7],[3,'positionSync']],[1,'ad']]])
Z([[4],[[5],[[5],[[5],[1,'popup-center-transStart']],[[2,'?:'],[[2,'||'],[[2,'!='],[[7],[3,'positionSync']],[1,'ad']],[[2,'!='],[[7],[3,'background']],[1,'none']]],[1,'popup-center-border'],[1,'']]],[[2,'?:'],[[7],[3,'show']],[1,'popup-center-transEnd'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[1,'background:'],[[7],[3,'background']]],[1,';']])
Z([[2,'=='],[[7],[3,'positionSync']],[1,'ad']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'addressList']])
Z([3,'id'])
Z([3,'__e'])
Z([3,'left'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'selectAddress']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'addressList']],[1,'id']],[[6],[[7],[3,'item']],[3,'id']]]]]]]]]]]]]]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'isDefault']],[1,'1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([[2,'=='],[[7],[3,'editType']],[1,'edit']])
Z([3,'__l'])
Z([3,'__e'])
Z(z[3])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onCancel']],[[4],[[5],[[4],[[5],[1,'onCancel']]]]]]]],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'mpvueCityPicker'])
Z([[7],[3,'cityPickerValue']])
Z([[7],[3,'themeColor']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list-wrap'])
Z([[2,'&&'],[[7],[3,'isFirstLoad']],[[2,'=='],[[6],[[7],[3,'productList']],[3,'length']],[1,0]]])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'productList']])
Z([3,'periodId'])
Z([3,'__e'])
Z([3,'p-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'productList']],[1,'periodId']],[[6],[[7],[3,'item']],[3,'periodId']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'isRefreshTime']])
Z([3,'#4A4A4A'])
Z([3,'__l'])
Z(z[6])
Z([3,'#FFFFFF'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^timeup']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'timeup']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'productList']],[1,'periodId']],[[6],[[7],[3,'item']],[3,'periodId']]]]]]]]]]]]]]]])
Z([[2,'!'],[1,false]])
Z([[6],[[6],[[7],[3,'item']],[3,'endTime']],[1,0]])
Z([[6],[[6],[[7],[3,'item']],[3,'endTime']],[1,1]])
Z([[6],[[6],[[7],[3,'item']],[3,'endTime']],[1,2]])
Z([1,false])
Z([[2,'+'],[1,'1-'],[[7],[3,'__i0__']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'swiper-box'])
Z([[7],[3,'tabCurrentIndex']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'300'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l1']])
Z(z[5])
Z(z[0])
Z([3,'list-scroll-content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadData']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'50'])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'loaded']])
Z([[2,'==='],[[6],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'orderList']],[3,'length']],[1,0]])
Z([3,'__i0__'])
Z([3,'item1'])
Z([[6],[[7],[3,'item']],[3,'l0']])
Z([3,'periodId'])
Z(z[0])
Z([3,'purchase'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'navList']],[1,'']],[[7],[3,'index']]]]],[[4],[[5],[[5],[[5],[1,'orderList']],[1,'periodId']],[[6],[[6],[[7],[3,'item1']],[3,'$orig']],[3,'periodId']]]]]]]]]]]]]]]])
Z([3,'over'])
Z([[2,'&&'],[[2,'>='],[[6],[[6],[[7],[3,'item1']],[3,'$orig']],[3,'executeStatus']],[1,1]],[[2,'<='],[[6],[[6],[[7],[3,'item1']],[3,'$orig']],[3,'executeStatus']],[1,2]]])
Z([[6],[[6],[[7],[3,'item1']],[3,'$orig']],[3,'isRefreshTime']])
Z([3,'__l'])
Z(z[0])
Z([3,'#ffffff'])
Z([3,'#4A4A4A'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^timeup']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'timeup']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'navList']],[1,'']],[[7],[3,'index']]]]],[[4],[[5],[[5],[[5],[1,'orderList']],[1,'periodId']],[[6],[[6],[[7],[3,'item1']],[3,'$orig']],[3,'periodId']]]]]]]]]]]]]]]])
Z([[6],[[6],[[6],[[7],[3,'item1']],[3,'$orig']],[3,'countdownTime']],[1,0]])
Z([[6],[[6],[[6],[[7],[3,'item1']],[3,'$orig']],[3,'countdownTime']],[1,1]])
Z([[6],[[6],[[6],[[7],[3,'item1']],[3,'$orig']],[3,'countdownTime']],[1,2]])
Z([1,false])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'1-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'__i0__']]])
Z(z[25])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'loadingType']])
Z([3,'margin-bottom:20rpx;'])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z(z[25])
Z(z[36])
Z([3,'margin-top:20rpx;'])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'swiper-box'])
Z([[7],[3,'tabCurrentIndex']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'300'])
Z([3,'index'])
Z([3,'item1'])
Z([[7],[3,'navList']])
Z(z[5])
Z(z[0])
Z([3,'list-scroll-content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadData']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'50'])
Z([[6],[[7],[3,'item1']],[3,'loaded']])
Z([[2,'==='],[[6],[[6],[[7],[3,'item1']],[3,'orderList']],[3,'length']],[1,0]])
Z([3,'__i0__'])
Z([3,'item'])
Z([[6],[[7],[3,'item1']],[3,'orderList']])
Z([3,'periodId'])
Z(z[0])
Z([3,'purchase'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toSure']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'navList']],[1,'']],[[7],[3,'index']]]]],[[4],[[5],[[5],[[5],[1,'orderList']],[1,'periodId']],[[6],[[7],[3,'item']],[3,'periodId']]]]]]]]]]]]]]]])
Z([[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,'0']],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,'1']]],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,'2']]])
Z([3,'__l'])
Z([[6],[[7],[3,'item1']],[3,'loadingType']])
Z([3,'margin-bottom:20rpx;'])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[23])
Z(z[24])
Z([3,'margin-top:20rpx;'])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[0])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'isWin']],[1,'1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'detail'])
Z([3,'purchase'])
Z([[7],[3,'isSale']])
Z([[7],[3,'showDateTime']])
Z([[2,'!'],[[7],[3,'isTimeUpLoading']]])
Z([[7],[3,'countdownTime']])
Z([[7],[3,'isRefreshTime']])
Z([3,'#FFFFFF'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[7])
Z([3,'#4A4A4A'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^timeup']],[[4],[[5],[[4],[[5],[1,'timeup']]]]]]]]])
Z([[6],[[7],[3,'countdownTime']],[3,'h']])
Z([[6],[[7],[3,'countdownTime']],[3,'m']])
Z([[6],[[7],[3,'countdownTime']],[3,'s']])
Z([1,false])
Z([3,'1'])
Z([[2,'!='],[[7],[3,'isSale']],[1,'']])
Z([[2,'!='],[[7],[3,'currentWinnerMsg']],[1,'']])
Z([[6],[[7],[3,'periodData']],[3,'userGuessPrice']])
Z(z[8])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z([[7],[3,'titleObj']])
Z(z[8])
Z(z[16])
Z(z[24])
Z([[2,'+'],[[2,'+'],[1,'3'],[1,',']],[1,'2']])
Z(z[23])
Z([[7],[3,'isNoPrice']])
Z([[6],[[7],[3,'woDeYCData']],[3,'length']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'woDeYCData']])
Z(z[32])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'isWin']],[1,'1']])
Z([[6],[[7],[3,'allYCData']],[3,'length']])
Z(z[32])
Z(z[33])
Z([[7],[3,'allYCData']])
Z(z[32])
Z(z[36])
Z([3,'start'])
Z([[2,'=='],[[6],[[7],[3,'periodData']],[3,'executeStatus']],[1,1]])
Z([[2,'>='],[[6],[[7],[3,'periodData']],[3,'executeStatus']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[0])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'isWin']],[1,'1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'swiper-box'])
Z([[7],[3,'tabCurrentIndex']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'300'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'navList']])
Z(z[5])
Z(z[0])
Z([3,'list-scroll-content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadData']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'50'])
Z([[6],[[7],[3,'item']],[3,'loaded']])
Z([[2,'&&'],[[2,'==='],[[6],[[6],[[7],[3,'item']],[3,'orderList']],[3,'length']],[1,0]],[[2,'=='],[[6],[[7],[3,'item']],[3,'currentPageIndex']],[1,1]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'orderList']],[3,'length']],[1,0]])
Z([3,'right'])
Z([[2,'!'],[[7],[3,'isSale']]])
Z([[2,'<'],[[6],[[7],[3,'item']],[3,'status']],[1,2]])
Z([3,'#4A4A4A'])
Z([3,'__l'])
Z(z[0])
Z([3,'#FFFFFF'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^timeup']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'timeup']],[[4],[[5],[[5],[1,'$0']],[[7],[3,'index']]]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[6],[[6],[[7],[3,'item']],[3,'endTime']],[1,0]])
Z([[6],[[6],[[7],[3,'item']],[3,'endTime']],[1,1]])
Z([[6],[[6],[[7],[3,'item']],[3,'endTime']],[1,2]])
Z([1,false])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([3,'index1'])
Z([3,'item1'])
Z([[6],[[6],[[7],[3,'navList']],[[7],[3,'tabCurrentIndex']]],[3,'orderList']])
Z([3,'periodId'])
Z(z[0])
Z([3,'shopList'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toDetail']],[[4],[[5],[[5],[1,'$0']],[1,'$1']]]],[[4],[[5],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'navList']],[1,'']],[[7],[3,'index']]],[1,'status']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[[2,'+'],[[2,'+'],[1,'navList.'],[[7],[3,'tabCurrentIndex']]],[1,'.orderList']]],[1,'periodId']],[[6],[[7],[3,'item1']],[3,'periodId']]],[1,'periodId']]]]]]]]]]]]]]])
Z([3,'liji'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,1]])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'status']],[1,1]])
Z(z[20])
Z([[2,'!'],[[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'orderList']],[3,'length']],[1,5]]])
Z([[6],[[7],[3,'item']],[3,'loadingType']])
Z([3,'margin-bottom:20rpx;'])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z(z[20])
Z(z[41])
Z([3,'margin-top:20rpx;'])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'none'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^close']],[[4],[[5],[[4],[[5],[1,'e1']]]]]]]]])
Z([[7],[3,'openAdPopup']])
Z([3,'ad'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'none'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^close']],[[4],[[5],[[4],[[5],[1,'e1']]]]]]]]])
Z([[7],[3,'openAdPopup']])
Z([3,'ad'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[2,'!'],[[7],[3,'isLogin']]])
Z([3,'__e'])
Z([3,'tj-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'/pages/order/goods?state\x3d1']]]]]]]]]]])
Z([3,'common-hover'])
Z([1,50])
Z([[2,'>'],[[7],[3,'panicBuyingNum']],[1,0]])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'/pages/order/order?state\x3d1']]]]]]]]]]])
Z(z[5])
Z(z[6])
Z([[2,'>'],[[7],[3,'conformOrderNum']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./components/mpvue-citypicker/mpvueCityPicker.wxml','./components/uni-collapse-item/uni-collapse-item.wxml','./components/uni-collapse/uni-collapse.wxml','./components/uni-countdown/uni-countdown.wxml','./components/uni-countdown/uni-down.wxml','./components/uni-icon/uni-icon.wxml','./components/uni-load-more/uni-load-more.wxml','./components/uni-number-box/uni-number-box.wxml','./components/uni-popup/YYT-popup.wxml','./pages/address/addres.wxml','./pages/address/addressManage.wxml','./pages/category/activity.wxml','./pages/category/category.wxml','./pages/find/index.wxml','./pages/index/index.wxml','./pages/login/login.wxml','./pages/order/affirm.wxml','./pages/order/details.wxml','./pages/order/goods.wxml','./pages/order/order.wxml','./pages/order/pay.wxml','./pages/password/change.wxml','./pages/password/editMobile.wxml','./pages/password/set.wxml','./pages/password/setpassword.wxml','./pages/product/allyc.wxml','./pages/product/detail.wxml','./pages/product/newlist.wxml','./pages/product/playerRule.wxml','./pages/product/store.wxml','./pages/product/wdyc.wxml','./pages/register/forget.wxml','./pages/register/register.wxml','./pages/session/primarys.wxml','./pages/set/double.wxml','./pages/set/gift.wxml','./pages/set/message.wxml','./pages/set/protocol.wxml','./pages/set/regard.wxml','./pages/set/send.wxml','./pages/set/servicesInfo.wxml','./pages/set/set.wxml','./pages/set/sign.wxml','./pages/set/suggest.wxml','./pages/user/user.wxml','./pages/user/userInfo.wxml','./pages/user/venosa.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_n('slot')
_(r,xC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var fE=_n('slot')
_(r,fE)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var hG=_n('view')
_rz(z,hG,'class',0,e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,1,e,s,gg)){oH.wxVkey=1
}
var cI=_v()
_(hG,cI)
if(_oz(z,2,e,s,gg)){cI.wxVkey=1
}
var oJ=_v()
_(hG,oJ)
if(_oz(z,3,e,s,gg)){oJ.wxVkey=1
}
oH.wxXCkey=1
cI.wxXCkey=1
oJ.wxXCkey=1
_(r,hG)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var aL=_n('view')
_rz(z,aL,'class',0,e,s,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,1,e,s,gg)){tM.wxVkey=1
}
var eN=_v()
_(aL,eN)
if(_oz(z,2,e,s,gg)){eN.wxVkey=1
}
var bO=_v()
_(aL,bO)
if(_oz(z,3,e,s,gg)){bO.wxVkey=1
}
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
_(r,aL)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var cT=_v()
_(r,cT)
if(_oz(z,0,e,s,gg)){cT.wxVkey=1
var hU=_n('view')
var oV=_v()
_(hU,oV)
if(_oz(z,1,e,s,gg)){oV.wxVkey=1
var cW=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var lY=_n('slot')
_(cW,lY)
var oX=_v()
_(cW,oX)
if(_oz(z,4,e,s,gg)){oX.wxVkey=1
}
oX.wxXCkey=1
_(oV,cW)
}
else{oV.wxVkey=2
var aZ=_n('slot')
_(oV,aZ)
}
oV.wxXCkey=1
_(cT,hU)
}
cT.wxXCkey=1
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var e2=_v()
_(r,e2)
var b3=function(x5,o4,o6,gg){
var c8=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],x5,o4,gg)
var h9=_v()
_(c8,h9)
if(_oz(z,7,x5,o4,gg)){h9.wxVkey=1
}
h9.wxXCkey=1
_(o6,c8)
return o6
}
e2.wxXCkey=2
_2z(z,2,b3,e,s,gg,e2,'item','__i0__','id')
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var cAB=_n('view')
_rz(z,cAB,'class',0,e,s,gg)
var oBB=_v()
_(cAB,oBB)
if(_oz(z,1,e,s,gg)){oBB.wxVkey=1
}
var lCB=_mz(z,'mpvue-city-picker',['bind:__l',2,'bind:onCancel',1,'bind:onConfirm',2,'class',3,'data-event-opts',4,'data-ref',5,'pickerValueDefault',6,'themeColor',7,'vueId',8],[],e,s,gg)
_(cAB,lCB)
oBB.wxXCkey=1
_(r,cAB)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var oHB=_n('view')
_rz(z,oHB,'class',0,e,s,gg)
var xIB=_v()
_(oHB,xIB)
if(_oz(z,1,e,s,gg)){xIB.wxVkey=1
}
else{xIB.wxVkey=2
var oJB=_v()
_(xIB,oJB)
var fKB=function(hMB,cLB,oNB,gg){
var oPB=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],hMB,cLB,gg)
var lQB=_v()
_(oPB,lQB)
if(_oz(z,9,hMB,cLB,gg)){lQB.wxVkey=1
var aRB=_mz(z,'uni-countdown',['backgroundColor',10,'bind:__l',1,'bind:timeup',2,'color',3,'data-event-opts',4,'hidden',5,'hour',6,'minute',7,'second',8,'showDay',9,'vueId',10],[],hMB,cLB,gg)
_(lQB,aRB)
}
lQB.wxXCkey=1
lQB.wxXCkey=3
_(oNB,oPB)
return oNB
}
oJB.wxXCkey=4
_2z(z,4,fKB,e,s,gg,oJB,'item','__i0__','periodId')
}
xIB.wxXCkey=1
xIB.wxXCkey=3
_(r,oHB)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var xWB=_mz(z,'swiper',['bindchange',0,'class',1,'current',1,'data-event-opts',2,'duration',3],[],e,s,gg)
var oXB=_v()
_(xWB,oXB)
var fYB=function(h1B,cZB,o2B,gg){
var o4B=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',9,'class',1,'data-event-opts',2,'lowerThreshold',3],[],h1B,cZB,gg)
var l5B=_v()
_(o4B,l5B)
if(_oz(z,13,h1B,cZB,gg)){l5B.wxVkey=1
var a6B=_v()
_(l5B,a6B)
if(_oz(z,14,h1B,cZB,gg)){a6B.wxVkey=1
}
else{a6B.wxVkey=2
var t7B=_v()
_(a6B,t7B)
var e8B=function(o0B,b9B,xAC,gg){
var fCC=_mz(z,'view',['bindtap',19,'class',1,'data-event-opts',2],[],o0B,b9B,gg)
var cDC=_n('view')
_rz(z,cDC,'class',22,o0B,b9B,gg)
var hEC=_v()
_(cDC,hEC)
if(_oz(z,23,o0B,b9B,gg)){hEC.wxVkey=1
var oFC=_v()
_(hEC,oFC)
if(_oz(z,24,o0B,b9B,gg)){oFC.wxVkey=1
var cGC=_mz(z,'uni-countdown',['bind:__l',25,'bind:timeup',1,'borderColor',2,'color',3,'data-event-opts',4,'hour',5,'minute',6,'second',7,'showDay',8,'vueId',9],[],o0B,b9B,gg)
_(oFC,cGC)
}
oFC.wxXCkey=1
oFC.wxXCkey=3
}
else{hEC.wxVkey=2
}
hEC.wxXCkey=1
hEC.wxXCkey=3
_(fCC,cDC)
_(xAC,fCC)
return xAC
}
t7B.wxXCkey=4
_2z(z,17,e8B,h1B,cZB,gg,t7B,'item1','__i0__','periodId')
var oHC=_mz(z,'uni-load-more',['bind:__l',35,'status',1,'style',2,'vueId',3],[],h1B,cZB,gg)
_(a6B,oHC)
}
a6B.wxXCkey=1
a6B.wxXCkey=3
}
else{l5B.wxVkey=2
var lIC=_mz(z,'uni-load-more',['bind:__l',39,'status',1,'style',2,'vueId',3],[],h1B,cZB,gg)
_(l5B,lIC)
}
l5B.wxXCkey=1
l5B.wxXCkey=3
l5B.wxXCkey=3
_(o2B,o4B)
return o2B
}
oXB.wxXCkey=4
_2z(z,7,fYB,e,s,gg,oXB,'item','index','index')
_(r,xWB)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var tKC=_mz(z,'swiper',['bindchange',0,'class',1,'current',1,'data-event-opts',2,'duration',3],[],e,s,gg)
var eLC=_v()
_(tKC,eLC)
var bMC=function(xOC,oNC,oPC,gg){
var cRC=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',9,'class',1,'data-event-opts',2,'lowerThreshold',3],[],xOC,oNC,gg)
var hSC=_v()
_(cRC,hSC)
if(_oz(z,13,xOC,oNC,gg)){hSC.wxVkey=1
var oTC=_v()
_(hSC,oTC)
if(_oz(z,14,xOC,oNC,gg)){oTC.wxVkey=1
}
else{oTC.wxVkey=2
var cUC=_v()
_(oTC,cUC)
var oVC=function(aXC,lWC,tYC,gg){
var b1C=_mz(z,'view',['bindtap',19,'class',1,'data-event-opts',2],[],aXC,lWC,gg)
var o2C=_v()
_(b1C,o2C)
if(_oz(z,22,aXC,lWC,gg)){o2C.wxVkey=1
}
o2C.wxXCkey=1
_(tYC,b1C)
return tYC
}
cUC.wxXCkey=2
_2z(z,17,oVC,xOC,oNC,gg,cUC,'item','__i0__','periodId')
var x3C=_mz(z,'uni-load-more',['bind:__l',23,'status',1,'style',2,'vueId',3],[],xOC,oNC,gg)
_(oTC,x3C)
}
oTC.wxXCkey=1
oTC.wxXCkey=3
}
else{hSC.wxVkey=2
var o4C=_mz(z,'uni-load-more',['bind:__l',27,'status',1,'style',2,'vueId',3],[],xOC,oNC,gg)
_(hSC,o4C)
}
hSC.wxXCkey=1
hSC.wxXCkey=3
hSC.wxXCkey=3
_(oPC,cRC)
return oPC
}
eLC.wxXCkey=4
_2z(z,7,bMC,e,s,gg,eLC,'item1','index','index')
_(r,tKC)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var lAD=_v()
_(r,lAD)
var aBD=function(eDD,tCD,bED,gg){
var xGD=_v()
_(bED,xGD)
if(_oz(z,4,eDD,tCD,gg)){xGD.wxVkey=1
}
xGD.wxXCkey=1
return bED
}
lAD.wxXCkey=2
_2z(z,2,aBD,e,s,gg,lAD,'item','index','index')
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var fID=_n('view')
_rz(z,fID,'class',0,e,s,gg)
var lOD=_n('view')
_rz(z,lOD,'class',1,e,s,gg)
var aPD=_v()
_(lOD,aPD)
if(_oz(z,2,e,s,gg)){aPD.wxVkey=1
var tQD=_v()
_(aPD,tQD)
if(_oz(z,3,e,s,gg)){tQD.wxVkey=1
var eRD=_v()
_(tQD,eRD)
if(_oz(z,4,e,s,gg)){eRD.wxVkey=1
var bSD=_v()
_(eRD,bSD)
if(_oz(z,5,e,s,gg)){bSD.wxVkey=1
var oTD=_v()
_(bSD,oTD)
if(_oz(z,6,e,s,gg)){oTD.wxVkey=1
var xUD=_mz(z,'uni-countdown',['backgroundColor',7,'bind:__l',1,'bind:timeup',2,'borderColor',3,'color',4,'data-event-opts',5,'hour',6,'minute',7,'second',8,'showDay',9,'vueId',10],[],e,s,gg)
_(oTD,xUD)
}
oTD.wxXCkey=1
oTD.wxXCkey=3
}
bSD.wxXCkey=1
bSD.wxXCkey=3
}
eRD.wxXCkey=1
eRD.wxXCkey=3
}
tQD.wxXCkey=1
tQD.wxXCkey=3
}
else{aPD.wxVkey=2
var oVD=_v()
_(aPD,oVD)
if(_oz(z,18,e,s,gg)){oVD.wxVkey=1
}
oVD.wxXCkey=1
}
aPD.wxXCkey=1
aPD.wxXCkey=3
_(fID,lOD)
var cJD=_v()
_(fID,cJD)
if(_oz(z,19,e,s,gg)){cJD.wxVkey=1
}
var hKD=_v()
_(fID,hKD)
if(_oz(z,20,e,s,gg)){hKD.wxVkey=1
}
var fWD=_mz(z,'uni-collapse',['bind:__l',21,'vueId',1,'vueSlots',2],[],e,s,gg)
var cXD=_v()
_(fWD,cXD)
if(_oz(z,24,e,s,gg)){cXD.wxVkey=1
var hYD=_mz(z,'uni-collapse-item',['bind:__l',25,'open',1,'titleObj',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(cXD,hYD)
}
cXD.wxXCkey=1
cXD.wxXCkey=3
_(fID,fWD)
var oLD=_v()
_(fID,oLD)
if(_oz(z,30,e,s,gg)){oLD.wxVkey=1
}
var cMD=_v()
_(fID,cMD)
if(_oz(z,31,e,s,gg)){cMD.wxVkey=1
var oZD=_v()
_(cMD,oZD)
var c1D=function(l3D,o2D,a4D,gg){
var e6D=_v()
_(a4D,e6D)
if(_oz(z,36,l3D,o2D,gg)){e6D.wxVkey=1
}
e6D.wxXCkey=1
return a4D
}
oZD.wxXCkey=2
_2z(z,34,c1D,e,s,gg,oZD,'item','index','index')
}
var oND=_v()
_(fID,oND)
if(_oz(z,37,e,s,gg)){oND.wxVkey=1
var b7D=_v()
_(oND,b7D)
var o8D=function(o0D,x9D,fAE,gg){
var hCE=_v()
_(fAE,hCE)
if(_oz(z,42,o0D,x9D,gg)){hCE.wxVkey=1
}
hCE.wxXCkey=1
return fAE
}
b7D.wxXCkey=2
_2z(z,40,o8D,e,s,gg,b7D,'item','index','index')
}
var oDE=_n('view')
_rz(z,oDE,'class',43,e,s,gg)
var cEE=_v()
_(oDE,cEE)
if(_oz(z,44,e,s,gg)){cEE.wxVkey=1
}
else{cEE.wxVkey=2
var oFE=_v()
_(cEE,oFE)
if(_oz(z,45,e,s,gg)){oFE.wxVkey=1
}
oFE.wxXCkey=1
}
cEE.wxXCkey=1
_(fID,oDE)
cJD.wxXCkey=1
hKD.wxXCkey=1
oLD.wxXCkey=1
cMD.wxXCkey=1
oND.wxXCkey=1
_(r,fID)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var bKE=_v()
_(r,bKE)
var oLE=function(oNE,xME,fOE,gg){
var hQE=_v()
_(fOE,hQE)
if(_oz(z,4,oNE,xME,gg)){hQE.wxVkey=1
}
hQE.wxXCkey=1
return fOE
}
bKE.wxXCkey=2
_2z(z,2,oLE,e,s,gg,bKE,'item','index','index')
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var lUE=_mz(z,'swiper',['bindchange',0,'class',1,'current',1,'data-event-opts',2,'duration',3],[],e,s,gg)
var aVE=_v()
_(lUE,aVE)
var tWE=function(bYE,eXE,oZE,gg){
var o2E=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',9,'class',1,'data-event-opts',2,'lowerThreshold',3],[],bYE,eXE,gg)
var f3E=_v()
_(o2E,f3E)
if(_oz(z,13,bYE,eXE,gg)){f3E.wxVkey=1
var c4E=_v()
_(f3E,c4E)
if(_oz(z,14,bYE,eXE,gg)){c4E.wxVkey=1
}
else{c4E.wxVkey=2
var h5E=_v()
_(c4E,h5E)
if(_oz(z,15,bYE,eXE,gg)){h5E.wxVkey=1
var o6E=_n('view')
_rz(z,o6E,'class',16,bYE,eXE,gg)
var c7E=_v()
_(o6E,c7E)
if(_oz(z,17,bYE,eXE,gg)){c7E.wxVkey=1
}
var o8E=_v()
_(o6E,o8E)
if(_oz(z,18,bYE,eXE,gg)){o8E.wxVkey=1
var l9E=_mz(z,'uni-countdown',['backgroundColor',19,'bind:__l',1,'bind:timeup',2,'color',3,'data-event-opts',4,'hour',5,'minute',6,'second',7,'showDay',8,'vueId',9],[],bYE,eXE,gg)
_(o8E,l9E)
}
c7E.wxXCkey=1
o8E.wxXCkey=1
o8E.wxXCkey=3
_(h5E,o6E)
}
var a0E=_v()
_(c4E,a0E)
var tAF=function(bCF,eBF,oDF,gg){
var oFF=_mz(z,'view',['bindtap',33,'class',1,'data-event-opts',2],[],bCF,eBF,gg)
var fGF=_n('view')
_rz(z,fGF,'class',36,bCF,eBF,gg)
var cHF=_v()
_(fGF,cHF)
if(_oz(z,37,bCF,eBF,gg)){cHF.wxVkey=1
}
else{cHF.wxVkey=2
var hIF=_v()
_(cHF,hIF)
if(_oz(z,38,bCF,eBF,gg)){hIF.wxVkey=1
}
hIF.wxXCkey=1
}
cHF.wxXCkey=1
_(oFF,fGF)
_(oDF,oFF)
return oDF
}
a0E.wxXCkey=2
_2z(z,31,tAF,bYE,eXE,gg,a0E,'item1','index1','periodId')
var oJF=_mz(z,'uni-load-more',['bind:__l',39,'hidden',1,'status',2,'style',3,'vueId',4],[],bYE,eXE,gg)
_(c4E,oJF)
h5E.wxXCkey=1
h5E.wxXCkey=3
}
c4E.wxXCkey=1
c4E.wxXCkey=3
}
else{f3E.wxVkey=2
var cKF=_mz(z,'uni-load-more',['bind:__l',44,'status',1,'style',2,'vueId',3],[],bYE,eXE,gg)
_(f3E,cKF)
}
f3E.wxXCkey=1
f3E.wxXCkey=3
f3E.wxXCkey=3
_(oZE,o2E)
return oZE
}
aVE.wxXCkey=4
_2z(z,7,tWE,e,s,gg,aVE,'item','index','index')
_(r,lUE)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var oRF=_mz(z,'popup',['background',0,'bind:__l',1,'bind:close',1,'data-event-opts',2,'open',3,'position',4,'vueId',5,'vueSlots',6],[],e,s,gg)
_(r,oRF)
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var cVF=_mz(z,'popup',['background',0,'bind:__l',1,'bind:close',1,'data-event-opts',2,'open',3,'position',4,'vueId',5,'vueSlots',6],[],e,s,gg)
_(r,cVF)
return r
}
e_[x[42]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
return r
}
e_[x[43]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
var cYF=_mz(z,'view',['class',0,'hidden',1],[],e,s,gg)
var oZF=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var l1F=_v()
_(oZF,l1F)
if(_oz(z,7,e,s,gg)){l1F.wxVkey=1
}
l1F.wxXCkey=1
_(cYF,oZF)
var a2F=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var t3F=_v()
_(a2F,t3F)
if(_oz(z,13,e,s,gg)){t3F.wxVkey=1
}
t3F.wxXCkey=1
_(cYF,a2F)
_(r,cYF)
return r
}
e_[x[44]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
return r
}
e_[x[45]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
return r
}
e_[x[46]]={f:m46,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/session/primarys","pages/find/index","pages/category/category","pages/category/activity","pages/user/user","pages/product/detail","pages/login/login","pages/register/register","pages/register/forget","pages/set/set","pages/set/suggest","pages/set/protocol","pages/set/servicesInfo","pages/set/message","pages/password/change","pages/password/editMobile","pages/password/setpassword","pages/password/set","pages/user/userInfo","pages/address/addres","pages/address/addressManage","pages/order/order","pages/order/goods","pages/order/affirm","pages/order/details","pages/product/store","pages/user/venosa","pages/order/pay","pages/set/gift","pages/set/sign","pages/set/double","pages/set/send","pages/product/newlist","pages/product/wdyc","pages/product/allyc","pages/set/regard","pages/product/playerRule"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#f11818"},"tabBar":{"color":"#7A7E83","selectedColor":"#FF5847","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/img/footer/icon-home-n.png","selectedIconPath":"static/img/footer/icon-home-pre.png","text":"首页"},{"pagePath":"pages/session/primarys","iconPath":"static/img/footer/icon-center-n.png","selectedIconPath":"static/img/footer/icon-center-pre.png","text":"抢购中心"},{"pagePath":"pages/user/user","iconPath":"static/img/footer/icon-me-n.png","selectedIconPath":"static/img/footer/icon-me-pre.png","text":"我的"}]},"nvueCompiler":"weex","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"趣抢购","compilerVersion":"2.1.3","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.wxml']=$gwx('./components/mpvue-citypicker/mpvueCityPicker.wxml');

__wxAppCode__['components/uni-collapse-item/uni-collapse-item.json']={"usingComponents":{"uni-icon":"/components/uni-icon/uni-icon"},"component":true};
__wxAppCode__['components/uni-collapse-item/uni-collapse-item.wxml']=$gwx('./components/uni-collapse-item/uni-collapse-item.wxml');

__wxAppCode__['components/uni-collapse/uni-collapse.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-collapse/uni-collapse.wxml']=$gwx('./components/uni-collapse/uni-collapse.wxml');

__wxAppCode__['components/uni-countdown/uni-countdown.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-countdown/uni-countdown.wxml']=$gwx('./components/uni-countdown/uni-countdown.wxml');

__wxAppCode__['components/uni-countdown/uni-down.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-countdown/uni-down.wxml']=$gwx('./components/uni-countdown/uni-down.wxml');

__wxAppCode__['components/uni-icon/uni-icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-icon/uni-icon.wxml']=$gwx('./components/uni-icon/uni-icon.wxml');

__wxAppCode__['components/uni-load-more/uni-load-more.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-load-more/uni-load-more.wxml']=$gwx('./components/uni-load-more/uni-load-more.wxml');

__wxAppCode__['components/uni-number-box/uni-number-box.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-number-box/uni-number-box.wxml']=$gwx('./components/uni-number-box/uni-number-box.wxml');

__wxAppCode__['components/uni-popup/YYT-popup.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-popup/YYT-popup.wxml']=$gwx('./components/uni-popup/YYT-popup.wxml');

__wxAppCode__['pages/address/addres.json']={"navigationBarTitleText":"收货地址管理","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/address/addres.wxml']=$gwx('./pages/address/addres.wxml');

__wxAppCode__['pages/address/addressManage.json']={"navigationBarTitleText":"新增地址","bounce":"none","usingComponents":{"mpvue-city-picker":"/components/mpvue-citypicker/mpvueCityPicker"}};
__wxAppCode__['pages/address/addressManage.wxml']=$gwx('./pages/address/addressManage.wxml');

__wxAppCode__['pages/category/activity.json']={"navigationBarTitleText":"最新活动","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/category/activity.wxml']=$gwx('./pages/category/activity.wxml');

__wxAppCode__['pages/category/category.json']={"navigationBarTitleText":"商品分类","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/category/category.wxml']=$gwx('./pages/category/category.wxml');

__wxAppCode__['pages/find/index.json']={"navigationBarTitleText":"发现","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/find/index.wxml']=$gwx('./pages/find/index.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"竞猜中心","titleNView":false,"usingComponents":{"uni-countdown":"/components/uni-countdown/uni-countdown"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"登录","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/order/affirm.json']={"navigationBarTitleText":"确认订单","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/order/affirm.wxml']=$gwx('./pages/order/affirm.wxml');

__wxAppCode__['pages/order/details.json']={"navigationBarTitleText":"订单详情","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/order/details.wxml']=$gwx('./pages/order/details.wxml');

__wxAppCode__['pages/order/goods.json']={"navigationBarTitleText":"我的抢购","bounce":"none","usingComponents":{"uni-load-more":"/components/uni-load-more/uni-load-more","uni-countdown":"/components/uni-countdown/uni-countdown"}};
__wxAppCode__['pages/order/goods.wxml']=$gwx('./pages/order/goods.wxml');

__wxAppCode__['pages/order/order.json']={"navigationBarTitleText":"我的订单","bounce":"none","usingComponents":{"uni-load-more":"/components/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/order/order.wxml']=$gwx('./pages/order/order.wxml');

__wxAppCode__['pages/order/pay.json']={"navigationBarTitleText":"支付订单","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/order/pay.wxml']=$gwx('./pages/order/pay.wxml');

__wxAppCode__['pages/password/change.json']={"navigationBarTitleText":"修改登录密码","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/password/change.wxml']=$gwx('./pages/password/change.wxml');

__wxAppCode__['pages/password/editMobile.json']={"navigationBarTitleText":"修改手机号码","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/password/editMobile.wxml']=$gwx('./pages/password/editMobile.wxml');

__wxAppCode__['pages/password/set.json']={"navigationBarTitleText":"设置密码","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/password/set.wxml']=$gwx('./pages/password/set.wxml');

__wxAppCode__['pages/password/setpassword.json']={"navigationBarTitleText":"设置新密码","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/password/setpassword.wxml']=$gwx('./pages/password/setpassword.wxml');

__wxAppCode__['pages/product/allyc.json']={"navigationBarTitleText":"全部出价记录","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/product/allyc.wxml']=$gwx('./pages/product/allyc.wxml');

__wxAppCode__['pages/product/detail.json']={"navigationBarTitleText":"商品详情","bounce":"none","usingComponents":{"uni-number-box":"/components/uni-number-box/uni-number-box","uni-collapse":"/components/uni-collapse/uni-collapse","uni-collapse-item":"/components/uni-collapse-item/uni-collapse-item","uni-countdown":"/components/uni-countdown/uni-down"}};
__wxAppCode__['pages/product/detail.wxml']=$gwx('./pages/product/detail.wxml');

__wxAppCode__['pages/product/newlist.json']={"navigationBarTitleText":"最新抢购结果","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/product/newlist.wxml']=$gwx('./pages/product/newlist.wxml');

__wxAppCode__['pages/product/playerRule.json']={"navigationBarTitleText":"玩法规则","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/product/playerRule.wxml']=$gwx('./pages/product/playerRule.wxml');

__wxAppCode__['pages/product/store.json']={"navigationBarTitleText":"金豆兑换","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/product/store.wxml']=$gwx('./pages/product/store.wxml');

__wxAppCode__['pages/product/wdyc.json']={"navigationBarTitleText":"我的预测","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/product/wdyc.wxml']=$gwx('./pages/product/wdyc.wxml');

__wxAppCode__['pages/register/forget.json']={"navigationBarTitleText":"找回密码","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/register/forget.wxml']=$gwx('./pages/register/forget.wxml');

__wxAppCode__['pages/register/register.json']={"navigationBarTitleText":"短信登录","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/register/register.wxml']=$gwx('./pages/register/register.wxml');

__wxAppCode__['pages/session/primarys.json']={"navigationBarTitleText":"初级场","titleNView":false,"usingComponents":{"uni-load-more":"/components/uni-load-more/uni-load-more","uni-countdown":"/components/uni-countdown/uni-countdown"}};
__wxAppCode__['pages/session/primarys.wxml']=$gwx('./pages/session/primarys.wxml');

__wxAppCode__['pages/set/double.json']={"navigationBarTitleText":"充值翻倍送","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/set/double.wxml']=$gwx('./pages/set/double.wxml');

__wxAppCode__['pages/set/gift.json']={"navigationBarTitleText":"我的礼物","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/set/gift.wxml']=$gwx('./pages/set/gift.wxml');

__wxAppCode__['pages/set/message.json']={"navigationBarTitleText":"消息详情","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/set/message.wxml']=$gwx('./pages/set/message.wxml');

__wxAppCode__['pages/set/protocol.json']={"navigationBarTitleText":"服务协议","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/set/protocol.wxml']=$gwx('./pages/set/protocol.wxml');

__wxAppCode__['pages/set/regard.json']={"navigationBarTitleText":"关于我们","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/set/regard.wxml']=$gwx('./pages/set/regard.wxml');

__wxAppCode__['pages/set/send.json']={"navigationBarTitleText":"注册送","bounce":"none","usingComponents":{"popup":"/components/uni-popup/YYT-popup"}};
__wxAppCode__['pages/set/send.wxml']=$gwx('./pages/set/send.wxml');

__wxAppCode__['pages/set/servicesInfo.json']={"navigationBarTitleText":"客服中心","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/set/servicesInfo.wxml']=$gwx('./pages/set/servicesInfo.wxml');

__wxAppCode__['pages/set/set.json']={"navigationBarTitleText":"设置","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/set/set.wxml']=$gwx('./pages/set/set.wxml');

__wxAppCode__['pages/set/sign.json']={"navigationBarTitleText":"签到领金豆","bounce":"none","usingComponents":{"popup":"/components/uni-popup/YYT-popup"}};
__wxAppCode__['pages/set/sign.wxml']=$gwx('./pages/set/sign.wxml');

__wxAppCode__['pages/set/suggest.json']={"navigationBarTitleText":"投诉建议","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/set/suggest.wxml']=$gwx('./pages/set/suggest.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarTitleText":"个人中心","titleNView":false,"usingComponents":{}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');

__wxAppCode__['pages/user/userInfo.json']={"navigationBarTitleText":"个人信息","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/user/userInfo.wxml']=$gwx('./pages/user/userInfo.wxml');

__wxAppCode__['pages/user/venosa.json']={"navigationBarTitleText":"我的金豆","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/user/venosa.wxml']=$gwx('./pages/user/venosa.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"32d4":function(n,e,t){},bcc4:function(n,e,t){"use strict";t.r(e);var o=t("d804");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("ceff");var r,c,i=t("2877"),a=Object(i["a"])(o["default"],r,c,!1,null,null,null);e["default"]=a.exports},ceff:function(n,e,t){"use strict";var o=t("32d4"),u=t.n(o);u.a},d804:function(n,e,t){"use strict";t.r(e);var o=t("e5f5"),u=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);e["default"]=u.a},e5f5:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t("2f62");function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){r(n,e,t[e])})}return n}function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var c={methods:u({},(0,o.mapMutations)(["login"])),onLaunch:function(){setTimeout(function(){n.showToast({title:"渠道"+plus.runtime.channel,icon:"none",duration:4e3})},3e3)},onShow:function(){console.log("App Show"," at App.vue:33")},onHide:function(){console.log("App Hide"," at App.vue:36")}};e.default=c}).call(this,t("6e42")["default"])}},[["b113","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (n) {
  function e(e) {
    for (var t, r, c = e[0], p = e[1], l = e[2], a = 0, s = []; a < c.length; a++) {
      r = c[a], u[r] && s.push(u[r][0]), u[r] = 0;
    }

    for (t in p) {
      Object.prototype.hasOwnProperty.call(p, t) && (n[t] = p[t]);
    }

    m && m(e);

    while (s.length) {
      s.shift()();
    }

    return i.push.apply(i, l || []), o();
  }

  function o() {
    for (var n, e = 0; e < i.length; e++) {
      for (var o = i[e], t = !0, r = 1; r < o.length; r++) {
        var c = o[r];
        0 !== u[c] && (t = !1);
      }

      t && (i.splice(e--, 1), n = p(p.s = o[0]));
    }

    return n;
  }

  var t = {},
      r = {
    "common/runtime": 0
  },
      u = {
    "common/runtime": 0
  },
      i = [];

  function c(n) {
    return p.p + "" + n + ".js";
  }

  function p(e) {
    if (t[e]) return t[e].exports;
    var o = t[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return n[e].call(o.exports, o, o.exports, p), o.l = !0, o.exports;
  }

  p.e = function (n) {
    var e = [],
        o = {
      "components/uni-countdown/uni-countdown": 1,
      "components/uni-load-more/uni-load-more": 1,
      "components/uni-collapse-item/uni-collapse-item": 1,
      "components/uni-collapse/uni-collapse": 1,
      "components/uni-countdown/uni-down": 1,
      "components/uni-number-box/uni-number-box": 1,
      "components/mpvue-citypicker/mpvueCityPicker": 1,
      "components/uni-popup/YYT-popup": 1,
      "components/uni-icon/uni-icon": 1
    };
    r[n] ? e.push(r[n]) : 0 !== r[n] && o[n] && e.push(r[n] = new Promise(function (e, o) {
      for (var t = ({
        "components/uni-countdown/uni-countdown": "components/uni-countdown/uni-countdown",
        "components/uni-load-more/uni-load-more": "components/uni-load-more/uni-load-more",
        "components/uni-collapse-item/uni-collapse-item": "components/uni-collapse-item/uni-collapse-item",
        "components/uni-collapse/uni-collapse": "components/uni-collapse/uni-collapse",
        "components/uni-countdown/uni-down": "components/uni-countdown/uni-down",
        "components/uni-number-box/uni-number-box": "components/uni-number-box/uni-number-box",
        "components/mpvue-citypicker/mpvueCityPicker": "components/mpvue-citypicker/mpvueCityPicker",
        "components/uni-popup/YYT-popup": "components/uni-popup/YYT-popup",
        "components/uni-icon/uni-icon": "components/uni-icon/uni-icon"
      }[n] || n) + ".wxss", u = p.p + t, i = document.getElementsByTagName("link"), c = 0; c < i.length; c++) {
        var l = i[c],
            a = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (a === t || a === u)) return e();
      }

      var s = document.getElementsByTagName("style");

      for (c = 0; c < s.length; c++) {
        l = s[c], a = l.getAttribute("data-href");
        if (a === t || a === u) return e();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = e, m.onerror = function (e) {
        var t = e && e.target && e.target.src || u,
            i = new Error("Loading CSS chunk " + n + " failed.\n(" + t + ")");
        i.request = t, delete r[n], m.parentNode.removeChild(m), o(i);
      }, m.href = u;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(m);
    }).then(function () {
      r[n] = 0;
    }));
    var t = u[n];
    if (0 !== t) if (t) e.push(t[2]);else {
      var i = new Promise(function (e, o) {
        t = u[n] = [e, o];
      });
      e.push(t[2] = i);
      var l,
          a = document.createElement("script");
      a.charset = "utf-8", a.timeout = 120, p.nc && a.setAttribute("nonce", p.nc), a.src = c(n), l = function l(e) {
        a.onerror = a.onload = null, clearTimeout(s);
        var o = u[n];

        if (0 !== o) {
          if (o) {
            var t = e && ("load" === e.type ? "missing" : e.type),
                r = e && e.target && e.target.src,
                i = new Error("Loading chunk " + n + " failed.\n(" + t + ": " + r + ")");
            i.type = t, i.request = r, o[1](i);
          }

          u[n] = void 0;
        }
      };
      var s = setTimeout(function () {
        l({
          type: "timeout",
          target: a
        });
      }, 12e4);
      a.onerror = a.onload = l, document.head.appendChild(a);
    }
    return Promise.all(e);
  }, p.m = n, p.c = t, p.d = function (n, e, o) {
    p.o(n, e) || Object.defineProperty(n, e, {
      enumerable: !0,
      get: o
    });
  }, p.r = function (n) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(n, "__esModule", {
      value: !0
    });
  }, p.t = function (n, e) {
    if (1 & e && (n = p(n)), 8 & e) return n;
    if (4 & e && "object" === typeof n && n && n.__esModule) return n;
    var o = Object.create(null);
    if (p.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: n
    }), 2 & e && "string" != typeof n) for (var t in n) {
      p.d(o, t, function (e) {
        return n[e];
      }.bind(null, t));
    }
    return o;
  }, p.n = function (n) {
    var e = n && n.__esModule ? function () {
      return n["default"];
    } : function () {
      return n;
    };
    return p.d(e, "a", e), e;
  }, p.o = function (n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }, p.p = "/", p.oe = function (n) {
    throw console.error(n), n;
  };
  var l = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = l.push.bind(l);
  l.push = e, l = l.slice();

  for (var s = 0; s < l.length; s++) {
    e(l[s]);
  }

  var m = a;
  o();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"027a":function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("b257"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"09ae":function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("3895"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"0af5":function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("3819"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},1903:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("0eec"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"25c9":function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("b699"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"26e4":function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("cd24"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},2877:function(t,e,n){"use strict";function i(t,e,n,i,r,o,a,s){var c,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:l}}n.d(e,"a",function(){return i})},"2c0c":function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("f35d"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return $}),n.d(e,"mapState",function(){return k}),n.d(e,"mapMutations",function(){return E}),n.d(e,"mapGetters",function(){return M}),n.d(e,"mapActions",function(){return L}),n.d(e,"createNamespacedHelpers",function(){return C});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var i=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:i});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[i].concat(t.init):i,n.call(this,t)}}function i(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},r="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){r&&(t._devtoolHook=r,r.emit("vuex:init",t),r.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){r.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}var l=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},u={namespaced:{configurable:!0}};u.namespaced.get=function(){return!!this._rawModule.namespaced},l.prototype.addChild=function(t,e){this._children[t]=e},l.prototype.removeChild=function(t){delete this._children[t]},l.prototype.getChild=function(t){return this._children[t]},l.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},l.prototype.forEachChild=function(t){a(this._children,t)},l.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},l.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},l.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(l.prototype,u);var f=function(t){this.register([],t,!1)};function h(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;h(t.concat(i),e.getChild(i),n.modules[i])}}f.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},f.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},f.prototype.update=function(t){h([],this.root,t)},f.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new l(e,n);if(0===t.length)this.root=r;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],r)}e.modules&&a(e.modules,function(e,r){i.register(t.concat(r),e,n)})},f.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var p;var d=function(t){var e=this;void 0===t&&(t={}),!p&&"undefined"!==typeof window&&window.Vue&&$(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1);var r=t.state;void 0===r&&(r={}),"function"===typeof r&&(r=r()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new f(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new p;var a=this,s=this,c=s.dispatch,l=s.commit;this.dispatch=function(t,e){return c.call(a,t,e)},this.commit=function(t,e,n){return l.call(a,t,e,n)},this.strict=i,_(this,r,[],this._modules.root),x(this,r),n.forEach(function(t){return t(e)}),p.config.devtools&&o(this)},v={state:{configurable:!0}};function g(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;_(t,n,[],t._modules.root,!0),x(t,n,e)}function x(t,e,n){var i=t._vm;t.getters={};var r=t._wrappedGetters,o={};a(r,function(e,n){o[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=p.config.silent;p.config.silent=!0,t._vm=new p({data:{$$state:e},computed:o}),p.config.silent=s,t.strict&&S(t),i&&(n&&t._withCommit(function(){i._data.$$state=null}),p.nextTick(function(){return i.$destroy()}))}function _(t,e,n,i,r){var o=!n.length,a=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[a]=i),!o&&!r){var s=T(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){p.set(s,c,i.state)})}var l=i.context=m(t,a,n);i.forEachMutation(function(e,n){var i=a+n;A(t,i,e,l)}),i.forEachAction(function(e,n){var i=e.root?n:a+n,r=e.handler||e;w(t,i,r,l)}),i.forEachGetter(function(e,n){var i=a+n;P(t,i,e,l)}),i.forEachChild(function(i,o){_(t,e,n.concat(o),i,r)})}function m(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var o=O(n,i,r),a=o.payload,s=o.options,c=o.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:i?t.commit:function(n,i,r){var o=O(n,i,r),a=o.payload,s=o.options,c=o.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return b(t,e)}},state:{get:function(){return T(t.state,n)}}}),r}function b(t,e){var n={},i=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,i)===e){var o=r.slice(i);Object.defineProperty(n,o,{get:function(){return t.getters[r]},enumerable:!0})}}),n}function A(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(e){n.call(t,i.state,e)})}function w(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(e,r){var o=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e,r);return c(o)||(o=Promise.resolve(o)),t._devtoolHook?o.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):o})}function P(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function S(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function T(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function O(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function $(t){p&&t===p||(p=t,i(p))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},d.prototype.commit=function(t,e,n){var i=this,r=O(t,e,n),o=r.type,a=r.payload,s=(r.options,{type:o,payload:a}),c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,i.state)}))},d.prototype.dispatch=function(t,e){var n=this,i=O(t,e),r=i.type,o=i.payload,a={type:r,payload:o},s=this._actions[r];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(o)})):s[0](o)},d.prototype.subscribe=function(t){return g(t,this._subscribers)},d.prototype.subscribeAction=function(t){return g(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch(function(){return t(i.state,i.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),_(this,this.state,t,this._modules.get(t),n.preserveState),x(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=T(e.state,t.slice(0,-1));p.delete(n,t[t.length-1])}),y(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,v);var k=j(function(t,e){var n={};return R(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=F(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0}),n}),E=j(function(t,e){var n={};return R(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var o=F(this.$store,"mapMutations",t);if(!o)return;i=o.context.commit}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),M=j(function(t,e){var n={};return R(e).forEach(function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||F(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0}),n}),L=j(function(t,e){var n={};return R(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var o=F(this.$store,"mapActions",t);if(!o)return;i=o.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),C=function(t){return{mapState:k.bind(null,t),mapGetters:M.bind(null,t),mapMutations:E.bind(null,t),mapActions:L.bind(null,t)}};function R(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function j(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function F(t,e,n){var i=t._modulesNamespaceMap[n];return i}var D={Store:d,install:$,version:"3.0.1",mapState:k,mapMutations:E,mapGetters:M,mapActions:L,createNamespacedHelpers:C};e["default"]=D},3116:function(t,e,n){"use strict";(function(e){var n={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:12,pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarGridCount:3,radarLabelTextMargin:15,gaugeLabelTextMargin:15};function i(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n}var r={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!==0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height;var n=e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y;return!n}};function o(t,e){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=t.replace(n,function(t,e,n,i){return e+e+n+n+i+i}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),o=parseInt(r[1],16),a=parseInt(r[2],16),s=parseInt(r[3],16);return"rgba("+o+","+a+","+s+","+e+")"}function a(t,e,n){if(isNaN(t))throw new Error("[wxCharts] unvalid series data!");n=n||10,e=e||"upper";var i=1;while(n<1)n*=10,i*=10;t="upper"===e?Math.ceil(t*i):Math.floor(t*i);while(t%n!==0)"upper"===e?t++:t--;return t/i}function s(t,e,n,i){var r=i.width-n.padding-e.xAxisPoints[0],o=e.eachSpacing*i.categories.length,a=t;return t>=0?a=0:Math.abs(t)>=o-r&&(a=r-o),a}function c(t,e,n){function i(t){while(t<0)t+=2*Math.PI;while(t>2*Math.PI)t-=2*Math.PI;return t}return t=i(t),e=i(e),n=i(n),e>n&&(n+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=n}function l(t,e,n){var i=t,r=n-e,o=i+(n-r-i)/Math.sqrt(2);o*=-1;var a=(n-r)*(Math.sqrt(2)-1)-(n-r-i)/Math.sqrt(2);return{transX:o,transY:a}}function u(t,e){function n(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var i=.2,r=.2,o=null,a=null,s=null,c=null;if(e<1?(o=t[0].x+(t[1].x-t[0].x)*i,a=t[0].y+(t[1].y-t[0].y)*i):(o=t[e].x+(t[e+1].x-t[e-1].x)*i,a=t[e].y+(t[e+1].y-t[e-1].y)*i),e>t.length-3){var l=t.length-1;s=t[l].x-(t[l].x-t[l-1].x)*r,c=t[l].y-(t[l].y-t[l-1].y)*r}else s=t[e+1].x-(t[e+2].x-t[e].x)*r,c=t[e+1].y-(t[e+2].y-t[e].y)*r;return n(t,e+1)&&(c=t[e+1].y),n(t,e)&&(a=t[e].y),{ctrA:{x:o,y:a},ctrB:{x:s,y:c}}}function f(t,e,n){return{x:n.x+t,y:n.y-e}}function h(t,e){if(e)while(r.isCollision(t,e))t.start.x>0?t.start.y--:t.start.x<0?t.start.y++:t.start.y>0?t.start.y++:t.start.y--;return t}function p(t,e){var n=0;return t.map(function(t){return t.color||(t.color=e.colors[n],n=(n+1)%e.colors.length),t})}function d(t,e){return t.map(function(t){return t.type||(t.type=e.type),t})}function v(t,e){var n=0,i=e-t;return n=i>=1e4?1e3:i>=1e3?100:i>=100?10:i>=10?5:i>=1?1:i>=.1?.1:.01,{minRange:a(t,"lower",n),maxRange:a(e,"upper",n)}}function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.fontSize;t=String(t);t=t.split("");var i=0;return t.forEach(function(t){/[a-zA-Z]/.test(t)?i+=7:/[0-9]/.test(t)?i+=5.5:/\./.test(t)?i+=2.7:/-/.test(t)?i+=3.25:/[\u4e00-\u9fa5]/.test(t)?i+=10:/\(|\)/.test(t)?i+=3.73:/\s/.test(t)?i+=2.5:/%/.test(t)?i+=8:i+=10}),i*e/10}function y(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function x(t){for(var e=new Array(t[0].data.length),n=0;n<e.length;n++)e[n]=0;for(var i=0;i<t.length;i++)for(n=0;n<e.length;n++)e[n]+=t[i].data[n];return t.reduce(function(t,n){return(t.data?t.data:t).concat(n.data).concat(e)},[])}function _(t,e,n){var i,r;return t.clientX?e.rotate?(r=e.height-t.clientX*e.pixelRatio,i=(t.pageY-n.mp.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):(i=t.clientX*e.pixelRatio,r=(t.pageY-n.mp.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):e.rotate?(r=e.height-t.x*e.pixelRatio,i=t.y*e.pixelRatio):(i=t.x*e.pixelRatio,r=t.y*e.pixelRatio),{x:i,y:r}}function m(t,e){var n=[];return t.forEach(function(t){if(null!==t.data[e]&&"undefined"!==typeof t.data[e]){var i={};i.color=t.color,i.name=t.name,i.data=t.format?t.format(t.data[e]):t.data[e],n.push(i)}}),n}function b(t){var e=t.map(function(t){return g(t)});return Math.max.apply(null,e)}function A(t){for(var e=2*Math.PI/t,n=[],i=0;i<t;i++)n.push(e*i);return n.map(function(t){return-1*t+Math.PI/2})}function w(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=t.map(function(t){return{text:r.format?r.format(t,i[n]):t.name+": "+t.data,color:t.color}}),a=[],s={x:0,y:0};return e.forEach(function(t){"undefined"!==typeof t[n]&&null!==t[n]&&a.push(t[n])}),a.forEach(function(t){s.x=Math.round(t.x),s.y+=t.y}),s.y/=a.length,{textList:o,offset:s}}function P(t,e,n,i,r,o){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var a=o.color.upFill,s=o.color.downFill,c=[a,a,s,a],l=[],u={text:r[i],color:null};l.push(u),e.map(function(e){0==i&&e.data[1]-e.data[0]<0?c[1]=s:(e.data[0]<t[i-1][1]&&(c[0]=s),e.data[1]<e.data[0]&&(c[1]=s),e.data[2]>t[i-1][1]&&(c[2]=a),e.data[3]<t[i-1][1]&&(c[3]=s));var n={text:"开盘："+e.data[0],color:c[0]},r={text:"收盘："+e.data[1],color:c[1]},o={text:"最低："+e.data[2],color:c[2]},u={text:"最高："+e.data[3],color:c[3]};l.push(n,r,o,u)});var f=[],h={x:0,y:0};return n.forEach(function(t){"undefined"!==typeof t[i]&&null!==t[i]&&f.push(t[i])}),h.x=Math.round(f[0][0].x),{textList:l,offset:h}}function S(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=-1;return T(t,n,i)&&e.forEach(function(e,n){t.x+r>e&&(o=n)}),o}function T(t,e,n){return t.x<e.width-n.padding&&t.x>n.padding+n.yAxisWidth+n.yAxisTitleWidth&&t.y>n.padding&&t.y<e.height-n.legendHeight-n.xAxisHeight-n.padding}function O(t,e,n){var i=2*Math.PI/n,r=-1;if(k(t,e.center,e.radius)){var o=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},a=Math.atan2(e.center.y-t.y,t.x-e.center.x);a*=-1,a<0&&(a+=2*Math.PI);var s=e.angleList.map(function(t){return t=o(-1*t),t});s.forEach(function(t,e){var n=o(t-i/2),s=o(t+i/2);s<n&&(s+=2*Math.PI),(a>=n&&a<=s||a+2*Math.PI>=n&&a+2*Math.PI<=s)&&(r=e)})}return r}function $(t,e){var n=-1;if(k(t,e.center,e.radius)){var i=Math.atan2(e.center.y-t.y,t.x-e.center.x);i=-i;for(var r=0,o=e.series.length;r<o;r++){var a=e.series[r];if(c(i,a._start_,a._start_+2*a._proportion_*Math.PI)){n=r;break}}}return n}function k(t,e,n){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(n,2)}function E(t){var e=[],n=[];return t.forEach(function(t,i){null!==t?n.push(t):(n.length&&e.push(n),n=[])}),n.length&&e.push(n),e}function M(t,e,n){if(!1===e.legend)return{legendList:[],legendHeight:0};var i=5*e.pixelRatio,r=8*e.pixelRatio,o=15*e.pixelRatio,a=[],s=0,c=[];return t.forEach(function(t){var n=3*i+o+g(t.name||"undefined");s+n>e.width?(a.push(c),s=n,c=[t]):(s+=n,c.push(t))}),c.length&&a.push(c),{legendList:a,legendHeight:a.length*(n.fontSize+r)+i}}function L(t,e,n){var i={angle:0,xAxisHeight:n.xAxisHeight},r=B(t,e,n),o=r.eachSpacing,a=t.map(function(t){return g(t)}),s=Math.max.apply(this,a);return 1==e.xAxis.rotateLabel&&s+2*n.xAxisTextPadding>o&&(i.angle=45*Math.PI/180,i.xAxisHeight=2*n.xAxisTextPadding+s*Math.sin(i.angle)),i}function C(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,a=r.extra.radar||{};a.max=a.max||0;var s=Math.max(a.max,Math.max.apply(null,y(i))),c=[];return i.forEach(function(i){var r={};r.color=i.color,r.data=[],i.data.forEach(function(i,a){var c={};c.angle=t[a],c.proportion=i/s,c.position=f(n*c.proportion*o*Math.cos(c.angle),n*c.proportion*o*Math.sin(c.angle),e),r.data.push(c)}),c.push(r)}),c}function R(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=0,i=0;return t.forEach(function(t){t.data=null===t.data?0:t.data,n+=t.data}),t.forEach(function(t){t.data=null===t.data?0:t.data,t._proportion_=t.data/n*e}),t.forEach(function(t){t._start_=i,i+=2*t._proportion_*Math.PI}),t}function j(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return 1==n&&(n=.999999),t.forEach(function(t){var i;t.data=null===t.data?0:t.data,i="default"==e.type?e.startAngle-e.endAngle+1:2,t._proportion_=i*t.data*n+e.startAngle,t._proportion_>=2&&(t._proportion_=t._proportion_%2)}),t}function F(t,e,n){for(var i=e-n+1,r=e,o=0;o<t.length;o++)t[o].value=null===t[o].value?0:t[o].value,t[o]._startAngle_=r,t[o]._endAngle_=i*t[o].value+e,t[o]._endAngle_>=2&&(t[o]._endAngle_=t[o]._endAngle_%2),r=t[o]._endAngle_;return t}function D(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return t.forEach(function(t){if(t.data=null===t.data?0:t.data,"auto"==n.pointer.color){for(var r=0;r<e.length;r++)if(t.data<=e[r].value){t.color=e[r].color;break}}else t.color=n.pointer.color;var o=n.startAngle-n.endAngle+1;t._endAngle_=o*t.data+n.startAngle,t._oldAngle_=n.oldAngle,n.oldAngle<n.endAngle&&(t._oldAngle_+=2),t.data>=n.oldData?t._proportion_=(t._endAngle_-t._oldAngle_)*i+n.oldAngle:t._proportion_=t._oldAngle_-(t._oldAngle_-t._endAngle_)*i,t._proportion_>=2&&(t._proportion_=t._proportion_%2)}),t}function I(t){t=R(t);var e=0;return t.forEach(function(t){var n=t.format?t.format(+t._proportion_.toFixed(2)):r.toFixed(100*t._proportion_)+"%";e=Math.max(e,g(n))}),e}function H(t,e,n,i,r,o){return t.map(function(t){return null===t?null:(t.width=(e-2*r.columePadding)/n,o.extra.column&&o.extra.column.width&&+o.extra.column.width>0?t.width=Math.min(t.width,+o.extra.column.width):t.width=Math.min(t.width,25),t.x+=(i+.5-n/2)*t.width,t)})}function z(t,e,n,i,r,o,a){return t.map(function(t){return null===t?null:(t.width=e-2*r.columePadding,o.extra.column&&o.extra.column.width&&+o.extra.column.width>0?t.width=Math.min(t.width,+o.extra.column.width):t.width=Math.min(t.width,25),i>0&&(t.width-=2*a),t)})}function N(t,e,n,i,r,o,a){return t.map(function(t,n){return null===t?null:(t.width=e-2*r.columePadding,o.extra.column&&o.extra.column.width&&+o.extra.column.width>0?t.width=Math.min(t.width,+o.extra.column.width):t.width=Math.min(t.width,25),t)})}function B(t,e,n){var i=n.yAxisWidth+n.yAxisTitleWidth,r=e.width-2*n.padding-i,o=e.enableScroll?Math.min(e.xAxis.itemCount,t.length):t.length,a=r/o,s=[],c=n.padding+i,l=e.width-n.padding;return t.forEach(function(t,e){s.push(c+e*a)}),!0===e.enableScroll?s.push(c+t.length*a):s.push(l),{xAxisPoints:s,startX:c,endX:l,eachSpacing:a}}function W(t,e,n,i,r,o,a){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,c=[],l=o.height-2*a.padding-a.xAxisHeight-a.legendHeight;return t.forEach(function(t,u){if(null===t)c.push(null);else{var f=[];t.forEach(function(t,c){var h={};h.x=i[u]+Math.round(r/2);var p=t.value||t,d=l*(p-e)/(n-e);d*=s,h.y=o.height-a.xAxisHeight-a.legendHeight-Math.round(d)-a.padding,f.push(h)}),c.push(f)}}),c}function U(t,e,n,i,r,o,a){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,c=[],l=o.height-2*a.padding-a.xAxisHeight-a.legendHeight;return t.forEach(function(t,u){if(null===t)c.push(null);else{var f={};f.color=t.color,f.x=i[u]+Math.round(r/2);var h=t.value||t,p=l*(h-e)/(n-e);p*=s,f.y=o.height-a.xAxisHeight-a.legendHeight-Math.round(p)-a.padding,c.push(f)}}),c}function V(t,e,n,i,r,o,a,s,c){var l=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,u=[],f=o.height-2*a.padding-a.xAxisHeight-a.legendHeight;return t.forEach(function(t,h){if(null===t)u.push(null);else{var p={};if(p.color=t.color,p.x=i[h]+Math.round(r/2),s>0){for(var d=0,v=0;v<=s;v++)d+=c[v].data[h];var g=d-t,y=f*(d-e)/(n-e),x=f*(g-e)/(n-e)}else d=t,y=f*(d-e)/(n-e),x=0;var _=x;y*=l,_*=l,p.y=o.height-a.xAxisHeight-a.legendHeight-Math.round(y)-a.padding,p.y0=o.height-a.xAxisHeight-a.legendHeight-Math.round(_)-a.padding,u.push(p)}}),u}function G(t,e,n,i){var r;r="stack"==i?x(t):y(t);var o=[];r=r.filter(function(t){return"object"===typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),r.map(function(t){"object"===typeof t?t.constructor==Array?t.map(function(t){o.push(t)}):o.push(t.value):o.push(t)});var a=0,s=0;if(o.length>0&&(a=Math.min.apply(this,o),s=Math.max.apply(this,o)),"number"===typeof e.yAxis.min&&(a=Math.min(e.yAxis.min,a)),"number"===typeof e.yAxis.max&&(s=Math.max(e.yAxis.max,s)),a===s){var c=s||10;s+=c}for(var l=v(a,s),u=l.minRange,f=l.maxRange,h=[],p=(f-u)/n.yAxisSplit,d=0;d<=n.yAxisSplit;d++)h.push(u+p*d);return h.reverse()}function q(t,e,n){var o=i({},e.extra.column||{type:""}),a=G(t,e,n,o.type),s=n.yAxisWidth,c=a.map(function(t){return t=r.toFixed(t,2),t=e.yAxis.format?e.yAxis.format(Number(t)):t,s=Math.max(s,g(t)+5),t});return!0===e.yAxis.disabled&&(s=0),{rangesFormat:c,ranges:a,yAxisWidth:s}}function X(t,e,n,i,r){var o=G(e,n,i),a=n.height-2*i.padding-i.xAxisHeight-i.legendHeight,s=o[0],c=o[o.length-1],l=i.padding,u=i.padding+a,f=s-(s-c)*(t-l)/(u-l);return f=n.yAxis.format?n.yAxis.format(Number(f)):f,f}function J(t,e){!0!==e.rotateLock?(t.translate(e.height,0),t.rotate(90*Math.PI/180)):!0!==e._rotate_&&(t.translate(e.height,0),t.rotate(90*Math.PI/180),e._rotate_=!0)}function K(t,e,n,i,r){i.beginPath(),i.setStrokeStyle("#ffffff"),i.setLineWidth(1*r.pixelRatio),i.setFillStyle(e),"diamond"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y),i.lineTo(t.x,t.y+4.5),i.lineTo(t.x+4.5,t.y),i.lineTo(t.x,t.y-4.5))}):"circle"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x+3.5*r.pixelRatio,t.y),i.arc(t.x,t.y,4*r.pixelRatio,0,2*Math.PI,!1))}):"rect"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x-3.5,t.y-3.5),i.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"===n&&t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y+4.5),i.lineTo(t.x+4.5,t.y+4.5),i.lineTo(t.x,t.y-4.5))}),i.closePath(),i.fill(),i.stroke()}function Y(t,e,n){var i=t.title.fontSize||e.titleFontSize,r=t.subtitle.fontSize||e.subtitleFontSize,o=t.title.name||"",a=t.subtitle.name||"",s=t.title.color||e.titleColor,c=t.subtitle.color||e.subtitleColor,l=o?i:0,u=a?r:0,f=5;if(a){var h=g(a,r),p=(t.width-h)/2+(t.subtitle.offsetX||0),d=(t.height-e.legendHeight+r)/2+(t.subtitle.offsetY||0);o&&(d-=(l+f)/2),n.beginPath(),n.setFontSize(r),n.setFillStyle(c),n.fillText(a,p,d),n.closePath(),n.stroke()}if(o){var v=g(o,i),y=(t.width-v)/2+(t.title.offsetX||0),x=(t.height-e.legendHeight+i)/2+(t.title.offsetY||0);a&&(x+=(u+f)/2),n.beginPath(),n.setFontSize(i),n.setFillStyle(s),n.fillText(o,y,x),n.closePath(),n.stroke()}}function Z(t,e,n,i){var r=e.data;t.forEach(function(t,o){if(null!==t){i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle("#666666");var a=r[o].value||r[o],s=e.format?e.format(a):a;i.fillText(s,t.x-g(s)/2,t.y-2),i.closePath(),i.stroke()}})}function Q(t,e,n,i,r,o){e-=t.width/2+r.gaugeLabelTextMargin;for(var a=t.startAngle-t.endAngle+1,s=a/t.splitLine.splitNumber,c=t.endNumber-t.startNumber,l=c/t.splitLine.splitNumber,u=t.startAngle,f=t.startNumber,h=0;h<t.splitLine.splitNumber+1;h++){var p={x:e*Math.cos(u*Math.PI),y:e*Math.sin(u*Math.PI)};p.x+=n.x-g(f)/2,p.y+=n.y;var d=p.x,v=p.y;o.beginPath(),o.setFontSize(r.fontSize),o.setFillStyle(t.labelColor||"#666666"),o.fillText(f,d,v+r.fontSize/2),o.closePath(),o.stroke(),u+=s,u>=2&&(u%=2),f+=l}}function tt(t,e,n,i,o,a){var s=i.extra.radar||{};e+=o.radarLabelTextMargin,t.forEach(function(t,c){var l={x:e*Math.cos(t),y:e*Math.sin(t)},u=f(l.x,l.y,n),h=u.x,p=u.y;r.approximatelyEqual(l.x,0)?h-=g(i.categories[c]||"")/2:l.x<0&&(h-=g(i.categories[c]||"")),a.beginPath(),a.setFontSize(o.fontSize),a.setFillStyle(s.labelColor||"#666666"),a.fillText(i.categories[c]||"",h,p+o.fontSize/2),a.closePath(),a.stroke()})}function et(t,e,n,i,o,a){var s=o+n.pieChartLinePadding,c=[],l=null,u=t.map(function(t){var e=2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),n=t.format?t.format(+t._proportion_.toFixed(2)):r.toFixed(100*t._proportion_)+"%",i=t.color;return{arc:e,text:n,color:i}});u.forEach(function(t){var e=Math.cos(t.arc)*s,i=Math.sin(t.arc)*s,a=Math.cos(t.arc)*o,u=Math.sin(t.arc)*o,f=e>=0?e+n.pieChartTextPadding:e-n.pieChartTextPadding,p=i,d=g(t.text),v=p;l&&r.isSameXCoordinateArea(l.start,{x:f})&&(v=f>0?Math.min(p,l.start.y):e<0?Math.max(p,l.start.y):p>0?Math.max(p,l.start.y):Math.min(p,l.start.y)),f<0&&(f-=d);var y={lineStart:{x:a,y:u},lineEnd:{x:e,y:i},start:{x:f,y:v},width:d,height:n.fontSize,text:t.text,color:t.color};l=h(y,l),c.push(l)}),c.forEach(function(t){var r=f(t.lineStart.x,t.lineStart.y,a),o=f(t.lineEnd.x,t.lineEnd.y,a),s=f(t.start.x,t.start.y,a);i.setLineWidth(1*e.pixelRatio),i.setFontSize(n.fontSize),i.beginPath(),i.setStrokeStyle(t.color),i.setFillStyle(t.color),i.moveTo(r.x,r.y);var c=t.start.x<0?s.x+t.width:s.x,l=t.start.x<0?s.x-5:s.x+5;i.quadraticCurveTo(o.x,o.y,c,s.y),i.moveTo(r.x,r.y),i.stroke(),i.closePath(),i.beginPath(),i.moveTo(s.x+t.width,s.y),i.arc(c,s.y,2,0,2*Math.PI),i.closePath(),i.fill(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle("#666666"),i.fillText(t.text,l,s.y+3),i.closePath(),i.stroke(),i.closePath()})}function nt(t,e,n,i){var r=e.extra.tooltip||{};r.gridType=void 0==r.gridType?"solid":r.gridType,r.dashLength=void 0==r.dashLength?4:r.dashLength;var a=n.padding,s=e.height-n.padding-n.xAxisHeight-n.legendHeight;if("dash"==r.gridType&&i.setLineDash([r.dashLength,r.dashLength]),i.beginPath(),i.setStrokeStyle(r.gridColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),i.moveTo(t,a),i.lineTo(t,s),i.closePath(),i.stroke(),i.setLineDash([]),r.xAxisLabel){var c=e.categories[e.tooltip.index];i.setFontSize(n.fontSize);var l=i.measureText(c).width,u=t-n.toolTipPadding-.5*l,f=s;i.beginPath(),i.setFillStyle(o(r.labelBgColor||n.toolTipBackground,r.labelBgOpacity||n.toolTipOpacity)),i.setStrokeStyle(r.labelBgColor||n.toolTipBackground),i.setLineWidth(1*e.pixelRatio),i.rect(u,f,l+2*n.toolTipPadding,n.fontSize+2*n.toolTipPadding),i.closePath(),i.stroke(),i.fill(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(r.labelFontColor||n.fontColor),i.fillText(c,u+2*n.toolTipPadding,f+n.toolTipPadding+n.fontSize),i.closePath(),i.stroke()}}function it(t,e,n,i,r){var a=t.extra.tooltip||{};a.gridType=void 0==a.gridType?"solid":a.gridType,a.dashLength=void 0==a.dashLength?4:a.dashLength;var s=e.padding+e.yAxisWidth+e.yAxisTitleWidth,c=t.width-e.padding;if("dash"==a.gridType&&n.setLineDash([a.dashLength,a.dashLength]),n.beginPath(),n.setStrokeStyle(a.gridColor||"#cccccc"),n.setLineWidth(1*t.pixelRatio),n.moveTo(s,t.tooltip.offset.y),n.lineTo(c,t.tooltip.offset.y),n.closePath(),n.stroke(),n.setLineDash([]),a.yAxisLabel){var l=X(t.tooltip.offset.y,t.series,t,e,i);n.setFontSize(e.fontSize);var u=n.measureText(l).width,f=s-2*e.toolTipPadding-u,h=t.tooltip.offset.y;n.beginPath(),n.setFillStyle(o(a.labelBgColor||e.toolTipBackground,a.labelBgOpacity||e.toolTipOpacity)),n.setStrokeStyle(a.labelBgColor||e.toolTipBackground),n.setLineWidth(1*t.pixelRatio),n.rect(f,h-.5*e.fontSize-e.toolTipPadding,u+2*e.toolTipPadding,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(a.labelFontColor||e.fontColor),n.fillText(l,f+e.toolTipPadding,h+.5*e.fontSize),n.closePath(),n.stroke()}}function rt(t,e,n,i,r){var a=e.extra.tooltip||{activeBgColor:"#000000",activeBgOpacity:.08};a.activeBgColor=a.activeBgColor?a.activeBgColor:"#000000",a.activeBgOpacity=a.activeBgOpacity?a.activeBgOpacity:.08;var s=n.padding,c=e.height-n.padding-n.xAxisHeight-n.legendHeight;i.beginPath(),i.setFillStyle(o(a.activeBgColor,a.activeBgOpacity)),i.rect(t-r/2,s,r,c-s),i.closePath(),i.fill()}function ot(t,e,n,r,a,s,c){var l=n.extra.tooltip||{bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"};l.bgColor=l.bgColor?l.bgColor:"#000000",l.bgOpacity=l.bgOpacity?l.bgOpacity:.7,l.fontColor=l.fontColor?l.fontColor:"#FFFFFF";var u=4*n.pixelRatio,f=5*n.pixelRatio,h=8*n.pixelRatio,p=!1;"line"!=n.type&&"area"!=n.type&&"candle"!=n.type&&"mix"!=n.type||nt(n.tooltip.offset.x,n,r,a),e=i({x:0,y:0},e),e.y-=8*n.pixelRatio;var d=t.map(function(t){return g(t.text)}),v=u+f+4*r.toolTipPadding+Math.max.apply(null,d),y=2*r.toolTipPadding+t.length*r.toolTipLineHeight;e.x-Math.abs(n._scrollDistance_)+h+v>n.width&&(p=!0),a.beginPath(),a.setFillStyle(o(l.bgColor||r.toolTipBackground,l.bgOpacity||r.toolTipOpacity)),p?(a.moveTo(e.x,e.y+10*n.pixelRatio),a.lineTo(e.x-h,e.y+10*n.pixelRatio-5*n.pixelRatio),a.lineTo(e.x-h,e.y),a.lineTo(e.x-h-Math.round(v),e.y),a.lineTo(e.x-h-Math.round(v),e.y+y),a.lineTo(e.x-h,e.y+y),a.lineTo(e.x-h,e.y+10*n.pixelRatio+5*n.pixelRatio),a.lineTo(e.x,e.y+10*n.pixelRatio)):(a.moveTo(e.x,e.y+10*n.pixelRatio),a.lineTo(e.x+h,e.y+10*n.pixelRatio-5*n.pixelRatio),a.lineTo(e.x+h,e.y),a.lineTo(e.x+h+Math.round(v),e.y),a.lineTo(e.x+h+Math.round(v),e.y+y),a.lineTo(e.x+h,e.y+y),a.lineTo(e.x+h,e.y+10*n.pixelRatio+5*n.pixelRatio),a.lineTo(e.x,e.y+10*n.pixelRatio)),a.closePath(),a.fill(),t.forEach(function(t,n){if(null!==t.color){a.beginPath(),a.setFillStyle(t.color);var i=e.x+h+2*r.toolTipPadding,o=e.y+(r.toolTipLineHeight-r.fontSize)/2+r.toolTipLineHeight*n+r.toolTipPadding+1;p&&(i=e.x-v-h+2*r.toolTipPadding),a.fillRect(i,o,u,r.fontSize),a.closePath()}}),t.forEach(function(t,n){var i=e.x+h+2*r.toolTipPadding+u+f;p&&(i=e.x-v-h+2*r.toolTipPadding+ +u+f);var o=e.y+(r.toolTipLineHeight-r.fontSize)/2+r.toolTipLineHeight*n+r.toolTipPadding;a.beginPath(),a.setFontSize(r.fontSize),a.setFillStyle(l.fontColor),a.fillText(t.text,i,o+r.fontSize),a.closePath(),a.stroke()})}function at(t,e,n,i){var r=n.xAxisHeight+(e.height-n.xAxisHeight-g(t))/2;i.save(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.yAxis.titleFontColor||"#333333"),i.translate(0,e.height),i.rotate(-90*Math.PI/180),i.fillText(t,r,n.padding+.5*n.fontSize),i.closePath(),i.stroke(),i.restore()}function st(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.column||{type:{},meter:{}};o.type=void 0==o.type?"group":o.type,o.meter=o.meter||{},o.meter.border=void 0==o.meter.border?4:o.meter.border,o.meter.fillColor=void 0==o.meter.fillColor?"#FFFFFF":o.meter.fillColor;var a=q(t,e,n),s=a.ranges,c=B(e.categories,e,n),l=c.xAxisPoints,u=c.eachSpacing,f=s.pop(),h=s.shift(),p=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===r&&rt(e.tooltip.offset.x,e,n,i,u),t.forEach(function(a,s){var c=a.data;switch(o.type){case"group":var d=U(c,f,h,l,u,e,n,r),v=V(c,f,h,l,u,e,n,s,t,r);p.push(v),d=H(d,u,t.length,s,n,e),d.forEach(function(t,r){if(null!==t){i.beginPath(),i.setFillStyle(t.color||a.color);var o=t.x-t.width/2+1,s=e.height-t.y-n.padding-n.xAxisHeight-n.legendHeight;i.moveTo(o,t.y),i.fillRect(o,t.y,t.width-2,s),i.closePath(),i.fill()}});break;case"stack":d=V(c,f,h,l,u,e,n,s,t,r);p.push(d),d=N(d,u,t.length,s,n,e,t),d.forEach(function(t,r){if(null!==t){i.beginPath(),i.setFillStyle(t.color||a.color);var o=t.x-t.width/2+1,c=e.height-t.y-n.padding-n.xAxisHeight-n.legendHeight,l=e.height-t.y0-n.padding-n.xAxisHeight-n.legendHeight;s>0&&(c-=l),i.moveTo(o,t.y),i.fillRect(o,t.y,t.width-2,c),i.closePath(),i.fill()}});break;case"meter":d=U(c,f,h,l,u,e,n,r);p.push(d),d=z(d,u,t.length,s,n,e,o.meter.border),0==s?d.forEach(function(t,r){if(null!==t){i.beginPath(),i.setFillStyle(o.meter.fillColor);var s=t.x-t.width/2+1,c=e.height-t.y-n.padding-n.xAxisHeight-n.legendHeight;i.moveTo(s,t.y),i.fillRect(s,t.y,t.width-2,c),i.closePath(),i.fill(),i.beginPath(),i.setStrokeStyle(a.color),i.setLineWidth(o.meter.border*e.pixelRatio),i.moveTo(s+.5*o.meter.border,t.y+c),i.lineTo(s+.5*o.meter.border,t.y+.5*o.meter.border),i.lineTo(s+t.width-o.meter.border,t.y+.5*o.meter.border),i.lineTo(s+t.width-o.meter.border,t.y+c),i.stroke()}}):d.forEach(function(t,r){if(null!==t){i.beginPath(),i.setFillStyle(t.color||a.color);var o=t.x-t.width/2+1,s=e.height-t.y-n.padding-n.xAxisHeight-n.legendHeight;i.moveTo(o,t.y),i.rect(o,t.y,t.width-2,s),i.closePath(),i.fill()}});break}}),!1!==e.dataLabel&&1===r&&t.forEach(function(a,s){var c=a.data;switch(o.type){case"group":var p=U(c,f,h,l,u,e,n,r);p=H(p,u,t.length,s,n,e),Z(p,a,n,i);break;case"stack":p=V(c,f,h,l,u,e,n,s,t,r);Z(p,a,n,i);break;case"meter":p=U(c,f,h,l,u,e,n,r);Z(p,a,n,i);break}}),i.restore(),{xAxisPoints:l,calPoints:p,eachSpacing:u}}function ct(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.candle||{color:{},average:{}};o.color.upLine=o.color.upLine?o.color.upLine:"#f04864",o.color.upFill=o.color.upFill?o.color.upFill:"#f04864",o.color.downLine=o.color.downLine?o.color.downLine:"#2fc25b",o.color.downFill=o.color.downFill?o.color.downFill:"#2fc25b",o.average.show=!0===o.average.show,o.average.name=o.average.name?o.average.name:[],o.average.day=o.average.day?o.average.day:[],o.average.color=o.average.color?o.average.color:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],e.extra.candle=o;var a=q(t,e,n),s=a.ranges,c=B(e.categories,e,n),l=c.xAxisPoints,u=c.eachSpacing,f=s.pop(),h=s.shift(),p=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),t.forEach(function(t,a){var s=t.data,c=W(s,f,h,l,u,e,n,r);p.push(c);var d=E(c);d=d[0],d.forEach(function(t,n){i.beginPath(),s[n][1]-s[n][0]>0?(i.setStrokeStyle(o.color.upLine),i.setFillStyle(o.color.upFill),i.setLineWidth(1*e.pixelRatio),i.moveTo(t[3].x,t[3].y),i.lineTo(t[1].x,t[1].y),i.lineTo(t[1].x-u/4,t[1].y),i.lineTo(t[0].x-u/4,t[0].y),i.lineTo(t[0].x,t[0].y),i.lineTo(t[2].x,t[2].y),i.lineTo(t[0].x,t[0].y),i.lineTo(t[0].x+u/4,t[0].y),i.lineTo(t[1].x+u/4,t[1].y),i.lineTo(t[1].x,t[1].y),i.moveTo(t[3].x,t[3].y)):(i.setStrokeStyle(o.color.downLine),i.setFillStyle(o.color.downFill),i.setLineWidth(1*e.pixelRatio),i.moveTo(t[3].x,t[3].y),i.lineTo(t[0].x,t[0].y),i.lineTo(t[0].x-u/4,t[0].y),i.lineTo(t[1].x-u/4,t[1].y),i.lineTo(t[1].x,t[1].y),i.lineTo(t[2].x,t[2].y),i.lineTo(t[1].x,t[1].y),i.lineTo(t[1].x+u/4,t[1].y),i.lineTo(t[0].x+u/4,t[0].y),i.lineTo(t[0].x,t[0].y),i.moveTo(t[3].x,t[3].y)),i.closePath(),i.fill(),i.stroke()})}),i.restore(),o.average.show,{xAxisPoints:l,calPoints:p,eachSpacing:u}}function lt(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=e.extra.area||{type:"straight",opacity:.5,addLine:!1,width:2};a.type=a.type?a.type:"straight",a.opacity=a.opacity?a.opacity:.2,a.addLine=1==a.addLine,a.width=a.width?a.width:2;var s=q(t,e,n),c=s.ranges,l=B(e.categories,e,n),f=l.xAxisPoints,h=l.eachSpacing,p=c.pop(),d=c.shift(),v=e.height-n.padding-n.xAxisHeight-n.legendHeight,g=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===r&&nt(e.tooltip.offset.x,e,n,i),t.forEach(function(t,s){var c=t.data,l=U(c,p,d,f,h,e,n,r);g.push(l);var y=E(l);if(y.forEach(function(n){if(i.beginPath(),i.setStrokeStyle(o(t.color,a.opacity)),i.setFillStyle(o(t.color,a.opacity)),i.setLineWidth(a.width*e.pixelRatio),n.length>1){var r=n[0],s=n[n.length-1];i.moveTo(r.x,r.y),"curve"===a.type?n.forEach(function(t,e){if(e>0){var r=u(n,e-1);i.bezierCurveTo(r.ctrA.x,r.ctrA.y,r.ctrB.x,r.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.lineTo(s.x,v),i.lineTo(r.x,v),i.lineTo(r.x,r.y)}else{var c=n[0];i.moveTo(c.x-h/2,c.y),i.lineTo(c.x+h/2,c.y),i.lineTo(c.x+h/2,v),i.lineTo(c.x-h/2,v),i.moveTo(c.x-h/2,c.y)}i.closePath(),i.fill(),a.addLine&&(i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(a.width*e.pixelRatio),1===n.length?(i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI)):(i.moveTo(n[0].x,n[0].y),"curve"===a.type?n.forEach(function(t,e){if(e>0){var r=u(n,e-1);i.bezierCurveTo(r.ctrA.x,r.ctrA.y,r.ctrB.x,r.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(n[0].x,n[0].y)),i.closePath(),i.stroke())}),!1!==e.dataPointShape){var x=n.dataPointShape[s%n.dataPointShape.length];K(l,t.color,x,i,e)}}),!1!==e.dataLabel&&1===r&&t.forEach(function(t,o){var a=t.data,s=U(a,p,d,f,h,e,n,r);Z(s,t,n,i)}),i.restore(),{xAxisPoints:f,calPoints:g,eachSpacing:h}}function ut(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.line||{type:"straight",width:2};o.type=o.type?o.type:"straight",o.width=o.width?o.width:2;var a=q(t,e,n),s=a.ranges,c=B(e.categories,e,n),l=c.xAxisPoints,f=c.eachSpacing,h=s.pop(),p=s.shift(),d=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===r&&nt(e.tooltip.offset.x,e,n,i),t.forEach(function(t,a){var s=t.data,c=U(s,h,p,l,f,e,n,r);d.push(c);var v=E(c);if(v.forEach(function(n,r){i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(o.width*e.pixelRatio),1===n.length?(i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI)):(i.moveTo(n[0].x,n[0].y),"curve"===o.type?n.forEach(function(t,e){if(e>0){var r=u(n,e-1);i.bezierCurveTo(r.ctrA.x,r.ctrA.y,r.ctrB.x,r.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(n[0].x,n[0].y)),i.closePath(),i.stroke()}),!1!==e.dataPointShape){var g=n.dataPointShape[a%n.dataPointShape.length];K(c,t.color,g,i,e)}}),!1!==e.dataLabel&&1===r&&t.forEach(function(t,o){var a=t.data,s=U(a,h,p,l,f,e,n,r);Z(s,t,n,i)}),i.restore(),{xAxisPoints:l,calPoints:d,eachSpacing:f}}function ft(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=q(t,e,n),a=o.ranges,s=B(e.categories,e,n),c=s.xAxisPoints,l=s.eachSpacing,f=a.pop(),h=a.shift(),p=e.height-n.padding-n.xAxisHeight-n.legendHeight,d=[],v=0,g=0;if(t.forEach(function(t,e){"column"==t.type&&(g+=1)}),i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===r&&nt(e.tooltip.offset.x,e,n,i),t.forEach(function(t,o){var a=t.data,s=U(a,f,h,c,l,e,n,r);if(d.push(s),"column"==t.type&&(s=H(s,l,g,v,n,e),s.forEach(function(r,o){if(null!==r){i.beginPath(),i.setFillStyle(r.color||t.color);var a=r.x-r.width/2+1,s=e.height-r.y-n.padding-n.xAxisHeight-n.legendHeight;i.moveTo(a,r.y),i.rect(a,r.y,r.width-2,s),i.closePath(),i.fill()}}),v+=1),"area"==t.type){var y=E(s);y.forEach(function(n){if(i.beginPath(),i.setStrokeStyle(t.color),i.setFillStyle(t.color),i.setGlobalAlpha(.2),i.setLineWidth(2*e.pixelRatio),n.length>1){var r=n[0],o=n[n.length-1];i.moveTo(r.x,r.y),"curve"===t.style?n.forEach(function(t,e){if(e>0){var r=u(n,e-1);i.bezierCurveTo(r.ctrA.x,r.ctrA.y,r.ctrB.x,r.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.lineTo(o.x,p),i.lineTo(r.x,p),i.lineTo(r.x,r.y)}else{var a=n[0];i.moveTo(a.x-l/2,a.y),i.lineTo(a.x+l/2,a.y),i.lineTo(a.x+l/2,p),i.lineTo(a.x-l/2,p),i.moveTo(a.x-l/2,a.y)}i.closePath(),i.fill(),i.setGlobalAlpha(1)})}if("line"==t.type){y=E(s);y.forEach(function(n,r){i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(2*e.pixelRatio),1===n.length?(i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI)):(i.moveTo(n[0].x,n[0].y),"curve"==t.style?n.forEach(function(t,e){if(e>0){var r=u(n,e-1);i.bezierCurveTo(r.ctrA.x,r.ctrA.y,r.ctrB.x,r.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(n[0].x,n[0].y)),i.closePath(),i.stroke()})}if("point"==t.type){y=E(s);y.forEach(function(n,r){i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(2*e.pixelRatio),i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI),i.closePath(),i.stroke()})}if(!1!==e.dataPointShape&&"column"!==t.type){var x=n.dataPointShape[o%n.dataPointShape.length];K(s,t.color,x,i,e)}}),!1!==e.dataLabel&&1===r){v=0;t.forEach(function(t,o){var a=t.data,s=U(a,f,h,c,l,e,n,r);"column"!==t.type?Z(s,t,n,i):(s=H(s,l,g,v,n,e),Z(s,t,n,i),v+=1)})}return i.restore(),{xAxisPoints:c,calPoints:d,eachSpacing:l}}function ht(t,e,n,i,r,o){var a=t.extra.tooltip||{};a.horizentalLine&&t.tooltip&&1===i&&("line"==t.type||"area"==t.type||"column"==t.type||"candle"==t.type||"mix"==t.type)&&it(t,e,n,r,o),n.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&n.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===i&&ot(t.tooltip.textList,t.tooltip.offset,t,e,n,r,o),n.restore()}function pt(t,e,n,i){var r=B(t,e,n),o=r.xAxisPoints,a=r.startX,s=r.endX,c=r.eachSpacing,u=e.height-n.padding-n.xAxisHeight-n.legendHeight,f=n.padding;if(e.enableScroll&&e.xAxis.scrollShow){var h=e.height-n.padding-n.legendHeight+4*e.pixelRatio,p=s-a,d=c*(o.length-1),v=p*p/d,y=0;e._scrollDistance_&&(y=-e._scrollDistance_*p/d),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollBackgroundColor||"#EFEBEF"),i.moveTo(a,h),i.lineTo(s,h),i.stroke(),i.closePath(),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollColor||"#A6A6A6"),i.moveTo(a+y,h),i.lineTo(a+y+v,h),i.stroke(),i.closePath()}if(i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),i.beginPath(),i.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),i.setLineCap("butt"),i.setLineWidth(1*e.pixelRatio),"dash"==e.xAxis.gridType&&i.setLineDash([e.xAxis.dashLength,e.xAxis.dashLength]),!0!==e.xAxis.disableGrid&&("calibration"===e.xAxis.type?o.forEach(function(t,n){n>0&&(i.moveTo(t-c/2,u),i.lineTo(t-c/2,u+4*e.pixelRatio))}):o.forEach(function(t,e){i.moveTo(t,u),i.lineTo(t,f)})),i.closePath(),i.stroke(),i.setLineDash([]),!0!==e.xAxis.disabled){var x=e.width-2*n.padding-n.yAxisWidth-n.yAxisTitleWidth,_=Math.min(t.length,Math.ceil(x/n.fontSize/1.5)),m=Math.ceil(t.length/_);t=t.map(function(t,e){return e%m!==0?"":t}),0===n._xAxisTextAngle_?t.forEach(function(t,r){var a=c/2-g(t)/2;i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.xAxis.fontColor||"#666666"),i.fillText(t,o[r]+a,u+n.fontSize+5),i.closePath(),i.stroke()}):t.forEach(function(t,r){i.save(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.xAxis.fontColor||"#666666");var a=g(t),s=c/2-a,f=l(o[r]+c/2,u+n.fontSize/2+5,e.height),h=f.transX,p=f.transY;i.rotate(-1*n._xAxisTextAngle_),i.translate(h,p),i.fillText(t,o[r]+s,u+n.fontSize+5),i.closePath(),i.stroke(),i.restore()})}i.restore()}function dt(t,e,n,i){if(!0!==e.yAxis.disableGrid){for(var r=e.height-2*n.padding-n.xAxisHeight-n.legendHeight,o=Math.floor(r/n.yAxisSplit),a=n.yAxisWidth+n.yAxisTitleWidth,s=n.padding+a,c=B(t,e,n),l=c.xAxisPoints,u=c.eachSpacing,f=u*(l.length-1),h=s+f,p=[],d=0;d<n.yAxisSplit;d++)p.push(n.padding+o*d);p.push(n.padding+o*n.yAxisSplit+2),i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),"dash"==e.yAxis.gridType&&i.setLineDash([e.yAxis.dashLength,e.yAxis.dashLength]),i.beginPath(),i.setStrokeStyle(e.yAxis.gridColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),p.forEach(function(t,e){i.moveTo(s,t),i.lineTo(h,t)}),i.closePath(),i.stroke(),i.setLineDash([]),i.restore()}}function vt(t,e,n,i){if(!0!==e.yAxis.disabled){var r=q(t,e,n),o=r.rangesFormat,a=n.yAxisWidth+n.yAxisTitleWidth,s=e.height-2*n.padding-n.xAxisHeight-n.legendHeight,c=Math.floor(s/n.yAxisSplit),l=n.padding+a,u=e.width-n.padding,f=e.height-n.padding-n.xAxisHeight-n.legendHeight;i.beginPath(),i.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&i.fillRect(0,0,l,f+n.xAxisHeight),i.fillRect(u,0,e.width,f+n.xAxisHeight),i.closePath(),i.stroke();for(var h=[],p=0;p<=n.yAxisSplit;p++)h.push(n.padding+c*p);o.forEach(function(t,r){var o=h[r]?h[r]:f;i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.yAxis.fontColor||"#666666"),i.fillText(t,n.padding+n.yAxisTitleWidth,o+n.fontSize/2),i.closePath(),i.stroke()}),e.yAxis.title&&at(e.yAxis.title,e,n,i)}}function gt(t,e,n,i){if(!1!==e.legend){var r=M(t,e,n),o=r.legendList,a=5*e.pixelRatio,s=10*e.pixelRatio,c=15*e.pixelRatio;o.forEach(function(t,r){var o=0;t.forEach(function(t){t.name=t.name||"undefined",o+=3*a+g(t.name)+c});var l=(e.width-o)/2+a,u=e.height-n.padding-n.legendHeight+r*(n.fontSize+s)+a+s;i.setFontSize(n.fontSize),t.forEach(function(t){switch(e.type){case"line":i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(t.color),i.setFillStyle(t.color),i.moveTo(l+7.5*e.pixelRatio,u+5*e.pixelRatio),i.arc(l+7.5*e.pixelRatio,u+5*e.pixelRatio,6*e.pixelRatio,0,2*Math.PI),i.closePath(),i.fill(),i.stroke();break;case"pie":i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(t.color),i.setFillStyle(t.color),i.moveTo(l+7.5*e.pixelRatio,u+5*e.pixelRatio),i.arc(l+7.5*e.pixelRatio,u+5*e.pixelRatio,6*e.pixelRatio,0,2*Math.PI),i.closePath(),i.fill(),i.stroke();break;case"ring":i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(t.color),i.setFillStyle(t.color),i.moveTo(l+7.5*e.pixelRatio,u+5*e.pixelRatio),i.arc(l+7.5*e.pixelRatio,u+5*e.pixelRatio,6*e.pixelRatio,0,2*Math.PI),i.closePath(),i.fill(),i.stroke();break;case"gauge":break;case"arcbar":break;default:i.beginPath(),i.setFillStyle(t.color),i.moveTo(l,u),i.fillRect(l,u,15*e.pixelRatio,10*e.pixelRatio),i.closePath(),i.fill(),i.stroke()}l+=a+c,i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.extra.legendTextColor||"#333333"),i.fillText(t.name,l,u+6*e.pixelRatio+3*e.pixelRatio),i.closePath(),i.stroke(),l+=g(t.name)+2*a})})}}function yt(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=e.extra.pie||{};t=R(t,r);var s={x:e.width/2,y:(e.height-n.legendHeight)/2},c=Math.min(s.x-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,s.y-n.pieChartLinePadding-n.pieChartTextPadding);e.dataLabel?c-=10:c-=2*n.padding;var l=c+n.pieChartLinePadding/2;if(t=t.map(function(t){return t._start_+=(a.offsetAngle||0)*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(i.beginPath(),i.setFillStyle(o(t.color,e.extra.pie.activeOpacity||.5)),i.moveTo(s.x,s.y),i.arc(s.x,s.y,l,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill()),i.beginPath(),i.setLineWidth(2*e.pixelRatio),i.setStrokeStyle("#ffffff"),i.setFillStyle(t.color),i.moveTo(s.x,s.y),i.arc(s.x,s.y,c,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill(),!0!==e.disablePieStroke&&i.stroke()}),"ring"===e.type){var u=.6*c;"number"===typeof e.extra.pie.ringWidth&&e.extra.pie.ringWidth>0&&(u=Math.max(0,c-e.extra.pie.ringWidth)),i.beginPath(),i.setFillStyle(e.background||"#ffffff"),i.moveTo(s.x,s.y),i.arc(s.x,s.y,u,0,2*Math.PI),i.closePath(),i.fill()}if(!1!==e.dataLabel&&1===r){for(var f=!1,h=0,p=t.length;h<p;h++)if(t[h].data>0){f=!0;break}f&&et(t,e,n,i,c,s)}return 1===r&&"ring"===e.type&&Y(e,n,i),{center:s,radius:c,series:t}}function xt(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.arcbar||{};o.startAngle=o.startAngle?o.startAngle:.75,o.endAngle=o.endAngle?o.endAngle:.25,o.type=o.type?o.type:"default",t=j(t,o,r);var a={x:e.width/2,y:e.height/2},s=Math.min(a.x,a.y);return"number"===typeof o.width&&o.width>0?o.width=o.width:o.width=12*e.pixelRatio,s-=n.padding+o.width/2,i.setLineWidth(o.width),i.setStrokeStyle(o.backgroundColor||"#E9E9E9"),i.setLineCap("round"),i.beginPath(),"default"==o.type?i.arc(a.x,a.y,s,o.startAngle*Math.PI,o.endAngle*Math.PI,!1):i.arc(a.x,a.y,s,0,2*Math.PI,!1),i.stroke(),t.forEach(function(t){i.setLineWidth(o.width),i.setStrokeStyle(t.color),i.setLineCap("round"),i.beginPath(),i.arc(a.x,a.y,s,o.startAngle*Math.PI,t._proportion_*Math.PI,!1),i.stroke()}),Y(e,n,i),{center:a,radius:s,series:t}}function _t(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,a=n.extra.gauge||{};a.startAngle=a.startAngle?a.startAngle:.75,void 0==a.oldAngle&&(a.oldAngle=a.startAngle),void 0==a.oldData&&(a.oldData=0),a.endAngle=a.endAngle?a.endAngle:.25,t=F(t,a.startAngle,a.endAngle);var s={x:n.width/2,y:n.height/2},c=Math.min(s.x,s.y);"number"===typeof a.width&&a.width>0?a.width=a.width:a.width=15*n.pixelRatio,c-=i.padding+a.width/2;var l=c-a.width;r.setLineWidth(a.width),r.setLineCap("butt"),t.forEach(function(t){r.beginPath(),r.setStrokeStyle(t.color),r.arc(s.x,s.y,c,t._startAngle_*Math.PI,t._endAngle_*Math.PI,!1),r.stroke()}),r.save();var u=a.startAngle-a.endAngle+1;a.splitLine.fixRadius=a.splitLine.fixRadius?a.splitLine.fixRadius:0,a.splitLine.splitNumber=a.splitLine.splitNumber?a.splitLine.splitNumber:10,a.splitLine.width=a.splitLine.width?a.splitLine.width:15*n.pixelRatio,a.splitLine.color=a.splitLine.color?a.splitLine.color:"#FFFFFF",a.splitLine.childNumber=a.splitLine.childNumber?a.splitLine.childNumber:5,a.splitLine.childWidth=a.splitLine.childWidth?a.splitLine.childWidth:5*n.pixelRatio;var f=u/a.splitLine.splitNumber,h=u/a.splitLine.splitNumber/a.splitLine.childNumber,p=-c-.5*a.width-a.splitLine.fixRadius,d=-c-.5*a.width-a.splitLine.fixRadius+a.splitLine.width,v=-c-.5*a.width-a.splitLine.fixRadius+a.splitLine.childWidth;r.translate(s.x,s.y),r.rotate((a.startAngle-1)*Math.PI);for(var g=0;g<a.splitLine.splitNumber+1;g++)r.beginPath(),r.setStrokeStyle(a.splitLine.color),r.setLineWidth(2*n.pixelRatio),r.moveTo(p,0),r.lineTo(d,0),r.stroke(),r.rotate(f*Math.PI);r.restore(),r.save(),r.translate(s.x,s.y),r.rotate((a.startAngle-1)*Math.PI);for(var y=0;y<a.splitLine.splitNumber*a.splitLine.childNumber+1;y++)r.beginPath(),r.setStrokeStyle(a.splitLine.color),r.setLineWidth(1*n.pixelRatio),r.moveTo(p,0),r.lineTo(v,0),r.stroke(),r.rotate(h*Math.PI);return r.restore(),a.pointer.width=a.pointer.width?a.pointer.width:15*n.pixelRatio,void 0==a.pointer.color||"auto"==a.pointer.color?a.pointer.color:(a.pointer.color,a.pointer.color),e=D(e,t,a,o),e.forEach(function(t){r.save(),r.translate(s.x,s.y),r.rotate((t._proportion_-1)*Math.PI),r.beginPath(),r.setFillStyle(t.color),r.moveTo(a.pointer.width,0),r.lineTo(0,-a.pointer.width/2),r.lineTo(-l,0),r.lineTo(0,a.pointer.width/2),r.lineTo(a.pointer.width,0),r.closePath(),r.fill(),r.beginPath(),r.setFillStyle("#FFFFFF"),r.arc(0,0,a.pointer.width/6,0,2*Math.PI,!1),r.fill(),r.restore()}),!1!==n.dataLabel&&Q(a,c,s,n,i,r),Y(n,i,r),1===o&&"gauge"===n.type&&(a.oldAngle=e[0]._proportion_,a.oldData=e[0].data),{center:s,radius:c,innerRadius:l,categories:t,totalAngle:u}}function mt(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.radar||{},a=A(e.categories.length),s={x:e.width/2,y:(e.height-n.legendHeight)/2},c=Math.min(s.x-(b(e.categories)+n.radarLabelTextMargin),s.y-n.radarLabelTextMargin);c-=n.padding,i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(o.gridColor||"#cccccc"),a.forEach(function(t){var e=f(c*Math.cos(t),c*Math.sin(t),s);i.moveTo(s.x,s.y),i.lineTo(e.x,e.y)}),i.stroke(),i.closePath();for(var l=function(t){var r={};i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(o.gridColor||"#cccccc"),a.forEach(function(e,o){var a=f(c/n.radarGridCount*t*Math.cos(e),c/n.radarGridCount*t*Math.sin(e),s);0===o?(r=a,i.moveTo(a.x,a.y)):i.lineTo(a.x,a.y)}),i.lineTo(r.x,r.y),i.stroke(),i.closePath()},u=1;u<=n.radarGridCount;u++)l(u);var h=C(a,s,c,t,e,r);return h.forEach(function(t,r){if(i.beginPath(),i.setFillStyle(t.color),i.setGlobalAlpha(.3),t.data.forEach(function(t,e){0===e?i.moveTo(t.position.x,t.position.y):i.lineTo(t.position.x,t.position.y)}),i.closePath(),i.fill(),i.setGlobalAlpha(1),!1!==e.dataPointShape){var o=n.dataPointShape[r%n.dataPointShape.length],a=t.data.map(function(t){return t.position});K(a,t.color,o,i,e)}}),tt(a,c,s,e,n,i),{center:s,radius:c,angleList:a}}function bt(t,e){e.draw()}var At={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};function wt(t){this.isStop=!1,t.duration="undefined"===typeof t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e=17,n=function(){return"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:"undefined"!==typeof setTimeout?function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}:function(t){t(null)}},i=n(),r=null,o=function(n){if(null===n||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===r&&(r=n),n-r<t.duration){var a=(n-r)/t.duration,s=At[t.timing];a=s(a),t.onProcess&&t.onProcess(a),i(o,e)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};o=o.bind(this),i(o,e)}function Pt(t,e,n,i){var r=this,o=e.series,a=e.categories;o=p(o,n),o=d(o,e);var s=M(o,e,n),c=s.legendHeight;n.legendHeight=c;var l=q(o,e,n),u=l.yAxisWidth;if(n.yAxisWidth=u,a&&a.length){var f=L(a,e,n),h=f.xAxisHeight,v=f.angle;n.xAxisHeight=h,n._xAxisTextAngle_=v}"pie"!==t&&"ring"!==t||(n._pieTextMaxLength_=!1===e.dataLabel?0:I(o));var g=e.animation?1e3:0;switch(this.animationInstance&&this.animationInstance.stop(),i.clearRect(0,0,e.width,e.height),t){case"line":this.animationInstance=new wt({timing:"easeIn",duration:g,onProcess:function(t){e.rotate&&J(i,e),dt(a,e,n,i),pt(a,e,n,i);var s=ut(o,e,n,i,t),c=s.xAxisPoints,l=s.calPoints,u=s.eachSpacing;r.chartData.xAxisPoints=c,r.chartData.calPoints=l,r.chartData.eachSpacing=u,gt(e.series,e,n,i),vt(o,e,n,i),ht(e,n,i,t,u,c),bt(e,i)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new wt({timing:"easeIn",duration:g,onProcess:function(t){e.rotate&&J(i,e),dt(a,e,n,i),pt(a,e,n,i);var s=ft(o,e,n,i,t),c=s.xAxisPoints,l=s.calPoints,u=s.eachSpacing;r.chartData.xAxisPoints=c,r.chartData.calPoints=l,r.chartData.eachSpacing=u,gt(e.series,e,n,i),vt(o,e,n,i),ht(e,n,i,t,u,c),bt(e,i)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new wt({timing:"easeIn",duration:g,onProcess:function(t){e.rotate&&J(i,e),dt(a,e,n,i),pt(a,e,n,i);var s=st(o,e,n,i,t),c=s.xAxisPoints,l=s.calPoints,u=s.eachSpacing;r.chartData.xAxisPoints=c,r.chartData.calPoints=l,r.chartData.eachSpacing=u,gt(e.series,e,n,i),vt(o,e,n,i),ht(e,n,i,t,u,c),bt(e,i)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new wt({timing:"easeIn",duration:g,onProcess:function(t){e.rotate&&J(i,e),dt(a,e,n,i),pt(a,e,n,i);var s=lt(o,e,n,i,t),c=s.xAxisPoints,l=s.calPoints,u=s.eachSpacing;r.chartData.xAxisPoints=c,r.chartData.calPoints=l,r.chartData.eachSpacing=u,gt(e.series,e,n,i),vt(o,e,n,i),ht(e,n,i,t,u,c),bt(e,i)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new wt({timing:"easeInOut",duration:g,onProcess:function(t){e.rotate&&J(i,e),r.chartData.pieData=yt(o,e,n,i,t),gt(e.series,e,n,i),ht(e,n,i,t),bt(e,i)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new wt({timing:"easeInOut",duration:g,onProcess:function(t){e.rotate&&J(i,e),r.chartData.radarData=mt(o,e,n,i,t),gt(e.series,e,n,i),bt(e,i)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new wt({timing:"easeInOut",duration:g,onProcess:function(t){e.rotate&&J(i,e),r.chartData.arcbarData=xt(o,e,n,i,t),bt(e,i)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new wt({timing:"easeInOut",duration:g,onProcess:function(t){e.rotate&&J(i,e),r.chartData.gaugeData=_t(a,o,e,n,i,t),bt(e,i)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new wt({timing:"easeIn",duration:g,onProcess:function(t){e.rotate&&J(i,e),dt(a,e,n,i),pt(a,e,n,i);var s=ct(o,e,n,i,t),c=s.xAxisPoints,l=s.calPoints,u=s.eachSpacing;r.chartData.xAxisPoints=c,r.chartData.calPoints=l,r.chartData.eachSpacing=u,gt(e.series,e,n,i),vt(o,e,n,i),ht(e,n,i,t,u,c),bt(e,i)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break}}function St(){this.events={}}wt.prototype.stop=function(){this.isStop=!0},St.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},St.prototype.trigger=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e[0],r=e.slice(1);this.events[i]&&this.events[i].forEach(function(t){try{t.apply(null,r)}catch(e){console.error(e," at components\\u-charts\\u-charts.js:3243")}})};var Tt=function(t){t.fontSize=t.fontSize?t.fontSize*t.pixelRatio:13*t.pixelRatio,t.title=t.title||{},t.subtitle=t.subtitle||{},t.yAxis=t.yAxis||{},t.yAxis.gridType=t.yAxis.gridType?t.yAxis.gridType:"solid",t.yAxis.dashLength=t.yAxis.dashLength?t.yAxis.dashLength:4*t.pixelRatio,t.xAxis=t.xAxis||{},t.xAxis.rotateLabel=!!t.xAxis.rotateLabel,t.xAxis.type=t.xAxis.type?t.xAxis.type:"calibration",t.xAxis.gridType=t.xAxis.gridType?t.xAxis.gridType:"solid",t.xAxis.dashLength=t.xAxis.dashLength?t.xAxis.dashLength:4*t.pixelRatio,t.xAxis.itemCount=t.xAxis.itemCount?t.xAxis.itemCount:5,t.xAxis.scrollAlign=t.xAxis.scrollAlign?t.xAxis.scrollAlign:"left",t.extra=t.extra||{},t.legend=!1!==t.legend,t.rotate=!!t.rotate,t.animation=!1!==t.animation;var r=i({},n);if(r.yAxisTitleWidth=!0!==t.yAxis.disabled&&t.yAxis.title?r.yAxisTitleWidth:0,"pie"!=t.type&&"ring"!=t.type||(r.pieChartLinePadding=!1===t.dataLabel?0:t.extra.pie.lableWidth||r.pieChartLinePadding*t.pixelRatio),r.pieChartTextPadding=!1===t.dataLabel?0:r.pieChartTextPadding*t.pixelRatio,r.yAxisSplit=t.yAxis.splitNumber?t.yAxis.splitNumber:n.yAxisSplit,r.rotate=t.rotate,t.rotate){var o=t.width,a=t.height;t.width=a,t.height=o}if(r.yAxisWidth=n.yAxisWidth*t.pixelRatio,r.xAxisHeight=n.xAxisHeight*t.pixelRatio,t.enableScroll&&t.xAxis.scrollShow&&(r.xAxisHeight+=4*t.pixelRatio),r.xAxisLineHeight=n.xAxisLineHeight*t.pixelRatio,r.legendHeight=n.legendHeight*t.pixelRatio,r.padding=n.padding*t.pixelRatio,r.fontSize=t.fontSize,r.titleFontSize=n.titleFontSize*t.pixelRatio,r.subtitleFontSize=n.subtitleFontSize*t.pixelRatio,r.toolTipPadding=n.toolTipPadding*t.pixelRatio,r.toolTipLineHeight=n.toolTipLineHeight*t.pixelRatio,r.columePadding=n.columePadding*t.pixelRatio,n.pixelRatio=t.pixelRatio,n.fontSize=t.fontSize,n.rotate=t.rotate,this.opts=t,this.config=r,t.$this=t.$this?t.$this:this,this.context=e.createCanvasContext(t.canvasId,t.$this),this.chartData={},this.event=new St,this.scrollOption={currentOffset:0,startTouchX:0,distance:0},t.enableScroll&&"right"==t.xAxis.scrollAlign){var s=q(t.series,t,r),c=s.yAxisWidth;r.yAxisWidth=c;var l=0,u=B(t.categories,t,r),f=u.xAxisPoints,h=u.startX,p=u.endX,d=u.eachSpacing,v=d*(f.length-1),g=p-h;l=g-v,this.scrollOption={currentOffset:l,startTouchX:l,distance:0},t._scrollDistance_=l}Pt.call(this,t.type,t,r,this.context)};Tt.prototype.updateData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts.series=t.series||this.opts.series,this.opts.categories=t.categories||this.opts.categories,this.opts.title=i({},this.opts.title,t.title||{}),this.opts.subtitle=i({},this.opts.subtitle,t.subtitle||{}),Pt.call(this,this.opts.type,this.opts,this.config,this.context)},Tt.prototype.zoom=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;!0===this.opts.enableScroll?(this.opts.animation=!1,this.opts.xAxis.itemCount=t.itemCount,Pt.call(this,this.opts.type,this.opts,this.config,this.context)):console.log("请启用滚动条后使用！"," at components\\u-charts\\u-charts.js:3361")},Tt.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Tt.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},Tt.prototype.getCurrentDataIndex=function(t){var e=t.mp.changedTouches[0];if(e){var n=_(e,this.opts,t);return"pie"===this.opts.type||"ring"===this.opts.type?$({x:n.x,y:n.y},this.chartData.pieData):"radar"===this.opts.type?O({x:n.x,y:n.y},this.chartData.radarData,this.opts.categories.length):S({x:n.x,y:n.y},this.chartData.xAxisPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Tt.prototype.showToolTip=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.mp.changedTouches[0],r=_(n,this.opts,t);if("line"===this.opts.type||"area"===this.opts.type||"mix"===this.opts.type||"column"===this.opts.type){var o=this.getCurrentDataIndex(t),a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1});if(o>-1){var c=m(this.opts.series,o);if(0!==c.length){var l=w(c,this.chartData.calPoints,o,this.opts.categories,e),u=l.textList,f=l.offset;f.y=r.y,s.tooltip={textList:u,offset:f,option:e,index:o}}}Pt.call(this,s.type,s,this.config,this.context)}if("candle"===this.opts.type){o=this.getCurrentDataIndex(t),a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1});if(o>-1){c=m(this.opts.series,o);if(0!==c.length){l=P(this.opts.series[0].data,c,this.chartData.calPoints,o,this.opts.categories,this.opts.extra.candle,e),u=l.textList,f=l.offset;f.y=r.y,s.tooltip={textList:u,offset:f,option:e,index:o}}}Pt.call(this,s.type,s,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type){o=this.getCurrentDataIndex(t),a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1});if(o>-1){c=this.opts.series[o],u=[{text:e.format?e.format(c):c.name+": "+c.data,color:c.color}],f={x:r.x,y:r.y};s.tooltip={textList:u,offset:f,option:e,index:o}}Pt.call(this,s.type,s,this.config,this.context)}},Tt.prototype.scrollStart=function(t){var e=t.mp.changedTouches[0],n=_(e,this.opts,t);e&&!0===this.opts.enableScroll&&(e.x?this.scrollOption.startTouchX=n.x:this.scrollOption.startTouchX=n.clientX)},Tt.prototype.scroll=function(t){var e=t.mp.changedTouches[0],n=_(e,this.opts,t);if(e&&!0===this.opts.enableScroll){var r;r=e.x?n.x-this.scrollOption.startTouchX:n.clientX-this.scrollOption.startTouchX;var o=this.scrollOption.currentOffset,a=s(o+r,this.chartData,this.config,this.opts);this.scrollOption.distance=r=a-o;var c=i({},this.opts,{_scrollDistance_:o+r,animation:!1});Pt.call(this,c.type,c,this.config,this.context)}},Tt.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,n=e.currentOffset,i=e.distance;this.scrollOption.currentOffset=n+i,this.scrollOption.distance=0}},t.exports=Tt}).call(this,n("6e42")["default"])},3380:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("6add"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},3865:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("c375"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"3c35":function(t,e){(function(e){t.exports=e}).call(this,{})},4362:function(t,e,n){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,i="/";e.cwd=function(){return i},e.chdir=function(e){t||(t=n("df7c")),i=t.resolve(e,i)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"528c":function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("6c96"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"582a":function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("c62a"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},5920:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("ed54"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},6417:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("7013"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var l=Object.prototype.toString;function u(t){return"[object Object]"===l.call(t)}function f(t){return"[object RegExp]"===l.call(t)}function h(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===l?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function x(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function m(t,e){return _.call(t,e)}function b(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var A=/-(\w)/g,w=b(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),P=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),S=/\B([A-Z])/g,T=b(function(t){return t.replace(S,"-$1").toLowerCase()});function O(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function $(t,e){return t.bind(e)}var k=Function.prototype.bind?$:O;function E(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function M(t,e){for(var n in e)t[n]=e[n];return t}function L(t){for(var e={},n=0;n<t.length;n++)t[n]&&M(e,t[n]);return e}function C(t,e,n){}var R=function(t,e,n){return!1},j=function(t){return t};function F(t,e){if(t===e)return!0;var n=c(t),i=c(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),o=Array.isArray(e);if(r&&o)return t.length===e.length&&t.every(function(t,n){return F(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return F(t[n],e[n])})}catch(l){return!1}}function D(t,e){for(var n=0;n<t.length;n++)if(F(t[n],e))return n;return-1}function I(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var H=["component","directive","filter"],z=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],N={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:R,isReservedAttr:R,isUnknownElement:R,getTagNamespace:C,parsePlatformTagName:j,mustUseProp:R,async:!0,_lifecycleHooks:z},B=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function W(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function U(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var V=new RegExp("[^"+B.source+".$_\\d]");function G(t){if(!V.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var q,X="__proto__"in{},J="undefined"!==typeof window,K="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=K&&WXEnvironment.platform.toLowerCase(),Z=J&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Y),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(J)try{var it={};Object.defineProperty(it,"passive",{get:function(){}}),window.addEventListener("test-passive",null,it)}catch(nr){}var rt=function(){return void 0===q&&(q=!J&&!K&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),q},ot=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ct="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var lt=C,ut=0,ft=function(){this.id=ut++,this.subs=[]};ft.prototype.addSub=function(t){this.subs.push(t)},ft.prototype.removeSub=function(t){x(this.subs,t)},ft.prototype.depend=function(){ft.target&&ft.target.addDep(this)},ft.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ft.target=null;var ht=[];function pt(t){ht.push(t),ft.target=t}function dt(){ht.pop(),ft.target=ht[ht.length-1]}var vt=function(t,e,n,i,r,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},gt={child:{configurable:!0}};gt.child.get=function(){return this.componentInstance},Object.defineProperties(vt.prototype,gt);var yt=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function xt(t){return new vt(void 0,void 0,void 0,String(t))}function _t(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,bt=Object.create(mt),At=["push","pop","shift","unshift","splice","sort","reverse"];At.forEach(function(t){var e=mt[t];U(bt,t,function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&a.observeArray(r),a.dep.notify(),o})});var wt=Object.getOwnPropertyNames(bt),Pt=!0;function St(t){Pt=t}var Tt=function(t){this.value=t,this.dep=new ft,this.vmCount=0,U(t,"__ob__",this),Array.isArray(t)?(X?Ot(t,bt):$t(t,bt,wt),this.observeArray(t)):this.walk(t)};function Ot(t,e){t.__proto__=e}function $t(t,e,n){for(var i=0,r=n.length;i<r;i++){var o=n[i];U(t,o,e[o])}}function kt(t,e){var n;if(c(t)&&!(t instanceof vt))return m(t,"__ob__")&&t.__ob__ instanceof Tt?n=t.__ob__:Pt&&!rt()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Tt(t)),e&&n&&n.vmCount++,n}function Et(t,e,n,i,r){var o=new ft,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=t[e]);var l=!r&&kt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ft.target&&(o.depend(),l&&(l.dep.depend(),Array.isArray(e)&&Ct(e))),e},set:function(e){var i=s?s.call(t):n;e===i||e!==e&&i!==i||s&&!c||(c?c.call(t,e):n=e,l=!r&&kt(e),o.notify())}})}}function Mt(t,e,n){if(Array.isArray(t)&&h(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Et(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Lt(t,e){if(Array.isArray(t)&&h(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||m(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ct(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ct(e)}Tt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Et(t,e[n])},Tt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)kt(t[e])};var Rt=N.optionMergeStrategies;function jt(t,e){if(!e)return t;for(var n,i,r,o=ct?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(i=t[n],r=e[n],m(t,n)?i!==r&&u(i)&&u(r)&&jt(i,r):Mt(t,n,r));return t}function Ft(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?jt(i,r):r}:e?t?function(){return jt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Dt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?It(n):n}function It(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ht(t,e,n,i){var r=Object.create(t||null);return e?M(r,e):r}Rt.data=function(t,e,n){return n?Ft(t,e,n):e&&"function"!==typeof e?t:Ft(t,e)},z.forEach(function(t){Rt[t]=Dt}),H.forEach(function(t){Rt[t+"s"]=Ht}),Rt.watch=function(t,e,n,i){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var o in M(r,t),e){var a=r[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),r[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return r},Rt.props=Rt.methods=Rt.inject=Rt.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return M(r,t),e&&M(r,e),r},Rt.provide=Ft;var zt=function(t,e){return void 0===e?t:e};function Nt(t,e){var n=t.props;if(n){var i,r,o,a={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(o=w(r),a[o]={type:null})}else if(u(n))for(var s in n)r=n[s],o=w(s),a[o]=u(r)?r:{type:r};else 0;t.props=a}}function Bt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(u(n))for(var o in n){var a=n[o];i[o]=u(a)?M({from:o},a):{from:a}}else 0}}function Wt(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Ut(t,e,n){if("function"===typeof e&&(e=e.options),Nt(e,n),Bt(e,n),Wt(e),!e._base&&(e.extends&&(t=Ut(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=Ut(t,e.mixins[i],n);var o,a={};for(o in t)s(o);for(o in e)m(t,o)||s(o);function s(i){var r=Rt[i]||zt;a[i]=r(t[i],e[i],n,i)}return a}function Vt(t,e,n,i){if("string"===typeof n){var r=t[e];if(m(r,n))return r[n];var o=w(n);if(m(r,o))return r[o];var a=P(o);if(m(r,a))return r[a];var s=r[n]||r[o]||r[a];return s}}function Gt(t,e,n,i){var r=e[t],o=!m(n,t),a=n[t],s=Kt(Boolean,r.type);if(s>-1)if(o&&!m(r,"default"))a=!1;else if(""===a||a===T(t)){var c=Kt(String,r.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=qt(i,r,t);var l=Pt;St(!0),kt(a),St(l)}return a}function qt(t,e,n){if(m(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==Xt(e.type)?i.call(t):i}}function Xt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Jt(t,e){return Xt(t)===Xt(e)}function Kt(t,e){if(!Array.isArray(e))return Jt(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(Jt(e[n],t))return n;return-1}function Yt(t,e,n){pt();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var o=0;o<r.length;o++)try{var a=!1===r[o].call(i,t,e,n);if(a)return}catch(nr){Qt(nr,i,"errorCaptured hook")}}}Qt(t,e,n)}finally{dt()}}function Zt(t,e,n,i,r){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&p(o)&&!o._handled&&(o.catch(function(t){return Yt(t,i,r+" (Promise/async)")}),o._handled=!0)}catch(nr){Yt(nr,i,r)}return o}function Qt(t,e,n){if(N.errorHandler)try{return N.errorHandler.call(null,t,e,n)}catch(nr){nr!==t&&te(nr,null,"config.errorHandler")}te(t,e,n)}function te(t,e,n){if(!J&&!K||"undefined"===typeof console)throw t;console.error(t)}var ee,ne=[],ie=!1;function re(){ie=!1;var t=ne.slice(0);ne.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var oe=Promise.resolve();ee=function(){oe.then(re),et&&setTimeout(C)}}else if(Q||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ee="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ae=1,se=new MutationObserver(re),ce=document.createTextNode(String(ae));se.observe(ce,{characterData:!0}),ee=function(){ae=(ae+1)%2,ce.data=String(ae)}}function le(t,e){var n;if(ne.push(function(){if(t)try{t.call(e)}catch(nr){Yt(nr,e,"nextTick")}else n&&n(e)}),ie||(ie=!0,ee()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ue=new st;function fe(t){he(t,ue),ue.clear()}function he(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!c(t)||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(r){n=t.length;while(n--)he(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)he(t[i[n]],e)}}}var pe=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}});function de(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return Zt(i,null,arguments,e,"v-on handler");for(var r=i.slice(),o=0;o<r.length;o++)Zt(r[o],null,t,e,"v-on handler")}return n.fns=t,n}function ve(t,e,n,r,a,s){var c,l,u,f;for(c in t)l=t[c],u=e[c],f=pe(c),i(l)||(i(u)?(i(l.fns)&&(l=t[c]=de(l,s)),o(f.once)&&(l=t[c]=a(f.name,l,f.capture)),n(f.name,l,f.capture,f.passive,f.params)):l!==u&&(u.fns=l,t[c]=u));for(c in e)i(t[c])&&(f=pe(c),r(f.name,e[c],f.capture))}function ge(t,e,n){var o=e.options.props;if(!i(o)){var a={},s=t.attrs,c=t.props;if(r(s)||r(c))for(var l in o){var u=T(l);ye(a,c,l,u,!0)||ye(a,s,l,u,!1)}return a}}function ye(t,e,n,i,o){if(r(e)){if(m(e,n))return t[n]=e[n],o||delete e[n],!0;if(m(e,i))return t[n]=e[i],o||delete e[i],!0}return!1}function xe(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function _e(t){return s(t)?[xt(t)]:Array.isArray(t)?be(t):void 0}function me(t){return r(t)&&r(t.text)&&a(t.isComment)}function be(t,e){var n,a,c,l,u=[];for(n=0;n<t.length;n++)a=t[n],i(a)||"boolean"===typeof a||(c=u.length-1,l=u[c],Array.isArray(a)?a.length>0&&(a=be(a,(e||"")+"_"+n),me(a[0])&&me(l)&&(u[c]=xt(l.text+a[0].text),a.shift()),u.push.apply(u,a)):s(a)?me(l)?u[c]=xt(l.text+a):""!==a&&u.push(xt(a)):me(a)&&me(l)?u[c]=xt(l.text+a.text):(o(t._isVList)&&r(a.tag)&&i(a.key)&&r(e)&&(a.key="__vlist"+e+"_"+n+"__"),u.push(a)));return u}function Ae(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function we(t){var e=Pe(t.$options.inject,t);e&&(St(!1),Object.keys(e).forEach(function(n){Et(t,n,e[n])}),St(!0))}function Pe(t,e){if(t){for(var n=Object.create(null),i=ct?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var o=i[r];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&m(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var c=t[o].default;n[o]="function"===typeof c?c.call(e):c}else 0}}return n}}function Se(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var o=t[i],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var l in n)n[l].every(Te)&&delete n[l];return n}function Te(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Oe(t,e,i){var r,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==n&&s===i.$key&&!o&&!i.$hasNormal)return i;for(var c in r={},t)t[c]&&"$"!==c[0]&&(r[c]=$e(e,c,t[c]))}else r={};for(var l in e)l in r||(r[l]=ke(e,l));return t&&Object.isExtensible(t)&&(t._normalized=r),U(r,"$stable",a),U(r,"$key",s),U(r,"$hasNormal",o),r}function $e(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:_e(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function ke(t,e){return function(){return t[e]}}function Ee(t,e){var n,i,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,o=t.length;i<o;i++)n[i]=e(t[i],i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(c(t))if(ct&&t[Symbol.iterator]){n=[];var l=t[Symbol.iterator](),u=l.next();while(!u.done)n.push(e(u.value,n.length)),u=l.next()}else for(a=Object.keys(t),n=new Array(a.length),i=0,o=a.length;i<o;i++)s=a[i],n[i]=e(t[s],s,i);return r(n)||(n=[]),n._isVList=!0,n}function Me(t,e,n,i){var r,o=this.$scopedSlots[t];o?(n=n||{},i&&(n=M(M({},i),n)),r=o(n)||e):r=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},r):r}function Le(t){return Vt(this.$options,"filters",t,!0)||j}function Ce(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Re(t,e,n,i,r){var o=N.keyCodes[e]||n;return r&&i&&!N.keyCodes[e]?Ce(r,i):o?Ce(o,t):i?T(i)!==e:void 0}function je(t,e,n,i,r){if(n)if(c(n)){var o;Array.isArray(n)&&(n=L(n));var a=function(a){if("class"===a||"style"===a||y(a))o=t;else{var s=t.attrs&&t.attrs.type;o=i||N.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=w(a),l=T(a);if(!(c in o)&&!(l in o)&&(o[a]=n[a],r)){var u=t.on||(t.on={});u["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Fe(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e?i:(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ie(i,"__static__"+t,!1),i)}function De(t,e,n){return Ie(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ie(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&He(t[i],e+"_"+i,n);else He(t,e,n)}function He(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function ze(t,e){if(e)if(u(e)){var n=t.on=t.on?M({},t.on):{};for(var i in e){var r=n[i],o=e[i];n[i]=r?[].concat(r,o):o}}else;return t}function Ne(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var o=t[r];Array.isArray(o)?Ne(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return i&&(e.$key=i),e}function Be(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function We(t,e){return"string"===typeof t?e+t:t}function Ue(t){t._o=De,t._n=v,t._s=d,t._l=Ee,t._t=Me,t._q=F,t._i=D,t._m=Fe,t._f=Le,t._k=Re,t._b=je,t._v=xt,t._e=yt,t._u=Ne,t._g=ze,t._d=Be,t._p=We}function Ve(t,e,i,r,a){var s,c=this,l=a.options;m(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var u=o(l._compiled),f=!u;this.data=t,this.props=e,this.children=i,this.parent=r,this.listeners=t.on||n,this.injections=Pe(l.inject,r),this.slots=function(){return c.$slots||Oe(t.scopedSlots,c.$slots=Se(i,r)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Oe(t.scopedSlots,this.slots())}}),u&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Oe(t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,i){var o=on(s,t,e,n,i,f);return o&&!Array.isArray(o)&&(o.fnScopeId=l._scopeId,o.fnContext=r),o}:this._c=function(t,e,n,i){return on(s,t,e,n,i,f)}}function Ge(t,e,i,o,a){var s=t.options,c={},l=s.props;if(r(l))for(var u in l)c[u]=Gt(u,l,e||n);else r(i.attrs)&&Xe(c,i.attrs),r(i.props)&&Xe(c,i.props);var f=new Ve(i,c,a,o,t),h=s.render.call(null,f._c,f);if(h instanceof vt)return qe(h,i,f.parent,s,f);if(Array.isArray(h)){for(var p=_e(h)||[],d=new Array(p.length),v=0;v<p.length;v++)d[v]=qe(p[v],i,f.parent,s,f);return d}}function qe(t,e,n,i,r){var o=_t(t);return o.fnContext=n,o.fnOptions=i,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function Xe(t,e){for(var n in e)t[w(n)]=e[n]}Ue(Ve.prototype);var Je={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Je.prepatch(n,n)}else{var i=t.componentInstance=Ze(t,Pn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;$n(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Ln(n,"mounted")),t.data.keepAlive&&(e._isMounted?Un(n):En(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Mn(e,!0):e.$destroy())}},Ke=Object.keys(Je);function Ye(t,e,n,a,s){if(!i(t)){var l=n.$options._base;if(c(t)&&(t=l.extend(t)),"function"===typeof t){var u;if(i(t.cid)&&(u=t,t=vn(u,l),void 0===t))return dn(u,e,n,a,s);e=e||{},pi(t),r(e.model)&&en(t.options,e);var f=ge(e,t,s);if(o(t.options.functional))return Ge(t,f,e,n,a);var h=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}Qe(e);var d=t.options.name||s,v=new vt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:f,listeners:h,tag:s,children:a},u);return v}}}function Ze(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function Qe(t){for(var e=t.hook||(t.hook={}),n=0;n<Ke.length;n++){var i=Ke[n],r=e[i],o=Je[i];r===o||r&&r._merged||(e[i]=r?tn(o,r):o)}}function tn(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[i],s=e.model.callback;r(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[i]=[s].concat(a)):o[i]=s}var nn=1,rn=2;function on(t,e,n,i,r,a){return(Array.isArray(n)||s(n))&&(r=i,i=n,n=void 0),o(a)&&(r=rn),an(t,e,n,i,r)}function an(t,e,n,i,o){if(r(n)&&r(n.__ob__))return yt();if(r(n)&&r(n.is)&&(e=n.is),!e)return yt();var a,s,c;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),o===rn?i=_e(i):o===nn&&(i=xe(i)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||N.getTagNamespace(e),a=N.isReservedTag(e)?new vt(N.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!r(c=Vt(t.$options,"components",e))?new vt(e,n,i,void 0,void 0,t):Ye(c,n,t,i,e)):a=Ye(e,n,t,i);return Array.isArray(a)?a:r(a)?(r(s)&&sn(a,s),r(n)&&cn(n),a):yt()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var a=0,s=t.children.length;a<s;a++){var c=t.children[a];r(c.tag)&&(i(c.ns)||o(n)&&"svg"!==c.tag)&&sn(c,e,n)}}function cn(t){c(t.style)&&fe(t.style),c(t.class)&&fe(t.class)}function ln(t){t._vnode=null,t._staticTrees=null;var e=t.$options,i=t.$vnode=e._parentVnode,r=i&&i.context;t.$slots=Se(e._renderChildren,r),t.$scopedSlots=n,t._c=function(e,n,i,r){return on(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return on(t,e,n,i,r,!0)};var o=i&&i.data;Et(t,"$attrs",o&&o.attrs||n,null,!0),Et(t,"$listeners",e._parentListeners||n,null,!0)}var un,fn=null;function hn(t){Ue(t.prototype),t.prototype.$nextTick=function(t){return le(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=Oe(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{fn=e,t=i.call(e._renderProxy,e.$createElement)}catch(nr){Yt(nr,e,"render"),t=e._vnode}finally{fn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=yt()),t.parent=r,t}}function pn(t,e){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function dn(t,e,n,i,r){var o=yt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:i,tag:r},o}function vn(t,e){if(o(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=fn;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var a=t.owners=[n],s=!0,l=null,u=null;n.$on("hook:destroyed",function(){return x(a,n)});var f=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==l&&(clearTimeout(l),l=null),null!==u&&(clearTimeout(u),u=null))},h=I(function(n){t.resolved=pn(n,e),s?a.length=0:f(!0)}),d=I(function(e){r(t.errorComp)&&(t.error=!0,f(!0))}),v=t(h,d);return c(v)&&(p(v)?i(t.resolved)&&v.then(h,d):p(v.component)&&(v.component.then(h,d),r(v.error)&&(t.errorComp=pn(v.error,e)),r(v.loading)&&(t.loadingComp=pn(v.loading,e),0===v.delay?t.loading=!0:l=setTimeout(function(){l=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,f(!1))},v.delay||200)),r(v.timeout)&&(u=setTimeout(function(){u=null,i(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function gn(t){return t.isComment&&t.asyncFactory}function yn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||gn(n)))return n}}function xn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&An(t,e)}function _n(t,e){un.$on(t,e)}function mn(t,e){un.$off(t,e)}function bn(t,e){var n=un;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function An(t,e,n){un=t,ve(e,n||{},_n,mn,bn,t),un=void 0}function wn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,o=t.length;r<o;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?E(n):n;for(var i=E(arguments,1),r='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)Zt(n[o],e,i,e,r)}return e}}var Pn=null;function Sn(t){var e=Pn;return Pn=t,function(){Pn=e}}function Tn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function On(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,o=Sn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),o(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Ln(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||x(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Ln(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function $n(t,e,i,r,o){var a=r.data.scopedSlots,s=t.$scopedSlots,c=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),l=!!(o||t.$options._renderChildren||c);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data.attrs||n,t.$listeners=i||n,e&&t.$options.props){St(!1);for(var u=t._props,f=t.$options._propKeys||[],h=0;h<f.length;h++){var p=f[h],d=t.$options.props;u[p]=Gt(p,d,e,t)}St(!0),t.$options.propsData=e}i=i||n;var v=t.$options._parentListeners;t.$options._parentListeners=i,An(t,i,v),l&&(t.$slots=Se(o,r.context),t.$forceUpdate())}function kn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function En(t,e){if(e){if(t._directInactive=!1,kn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)En(t.$children[n]);Ln(t,"activated")}}function Mn(t,e){if((!e||(t._directInactive=!0,!kn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Mn(t.$children[n]);Ln(t,"deactivated")}}function Ln(t,e){pt();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,o=n.length;r<o;r++)Zt(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),dt()}var Cn=[],Rn=[],jn={},Fn=!1,Dn=!1,In=0;function Hn(){In=Cn.length=Rn.length=0,jn={},Fn=Dn=!1}var zn=Date.now;if(J&&!Q){var Nn=window.performance;Nn&&"function"===typeof Nn.now&&zn()>document.createEvent("Event").timeStamp&&(zn=function(){return Nn.now()})}function Bn(){var t,e;for(zn(),Dn=!0,Cn.sort(function(t,e){return t.id-e.id}),In=0;In<Cn.length;In++)t=Cn[In],t.before&&t.before(),e=t.id,jn[e]=null,t.run();var n=Rn.slice(),i=Cn.slice();Hn(),Vn(n),Wn(i),ot&&N.devtools&&ot.emit("flush")}function Wn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Ln(i,"updated")}}function Un(t){t._inactive=!1,Rn.push(t)}function Vn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,En(t[e],!0)}function Gn(t){var e=t.id;if(null==jn[e]){if(jn[e]=!0,Dn){var n=Cn.length-1;while(n>In&&Cn[n].id>t.id)n--;Cn.splice(n+1,0,t)}else Cn.push(t);Fn||(Fn=!0,le(Bn))}}var qn=0,Xn=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++qn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=C)),this.value=this.lazy?void 0:this.get()};Xn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(nr){if(!this.user)throw nr;Yt(nr,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&fe(t),dt(),this.cleanupDeps()}return t},Xn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Xn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Xn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Gn(this)},Xn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(nr){Yt(nr,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Xn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Xn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Xn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||x(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Jn={enumerable:!0,configurable:!0,get:C,set:C};function Kn(t,e,n){Jn.get=function(){return this[e][n]},Jn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Jn)}function Yn(t){t._watchers=[];var e=t.$options;e.props&&Zn(t,e.props),e.methods&&ai(t,e.methods),e.data?Qn(t):kt(t._data={},!0),e.computed&&ni(t,e.computed),e.watch&&e.watch!==nt&&si(t,e.watch)}function Zn(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],o=!t.$parent;o||St(!1);var a=function(o){r.push(o);var a=Gt(o,e,n,t);Et(i,o,a),o in t||Kn(t,"_props",o)};for(var s in e)a(s);St(!0)}function Qn(t){var e=t.$options.data;e=t._data="function"===typeof e?ti(e,t):e||{},u(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var o=n[r];0,i&&m(i,o)||W(o)||Kn(t,"_data",o)}kt(e,!0)}function ti(t,e){pt();try{return t.call(e,e)}catch(nr){return Yt(nr,e,"data()"),{}}finally{dt()}}var ei={lazy:!0};function ni(t,e){var n=t._computedWatchers=Object.create(null),i=rt();for(var r in e){var o=e[r],a="function"===typeof o?o:o.get;0,i||(n[r]=new Xn(t,a||C,C,ei)),r in t||ii(t,r,o)}}function ii(t,e,n){var i=!rt();"function"===typeof n?(Jn.get=i?ri(e):oi(n),Jn.set=C):(Jn.get=n.get?i&&!1!==n.cache?ri(e):oi(n.get):C,Jn.set=n.set||C),Object.defineProperty(t,e,Jn)}function ri(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ft.target&&e.depend(),e.value}}function oi(t){return function(){return t.call(this,this)}}function ai(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?C:k(e[n],t)}function si(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)ci(t,n,i[r]);else ci(t,n,i)}}function ci(t,e,n,i){return u(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function li(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Mt,t.prototype.$delete=Lt,t.prototype.$watch=function(t,e,n){var i=this;if(u(e))return ci(i,t,e,n);n=n||{},n.user=!0;var r=new Xn(i,t,e,n);if(n.immediate)try{e.call(i,r.value)}catch(o){Yt(o,i,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var ui=0;function fi(t){t.prototype._init=function(t){var e=this;e._uid=ui++,e._isVue=!0,t&&t._isComponent?hi(e,t):e.$options=Ut(pi(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Tn(e),xn(e),ln(e),Ln(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&we(e),Yn(e),"mp-toutiao"!==e.mpHost&&Ae(e),"mp-toutiao"!==e.mpHost&&Ln(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function hi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function pi(t){var e=t.options;if(t.super){var n=pi(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=di(t);r&&M(t.extendOptions,r),e=t.options=Ut(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function di(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function vi(t){this._init(t)}function gi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=E(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function yi(t){t.mixin=function(t){return this.options=Ut(this.options,t),this}}function xi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Ut(n.options,t),a["super"]=n,a.options.props&&_i(a),a.options.computed&&mi(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,H.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=M({},a.options),r[i]=a,a}}function _i(t){var e=t.options.props;for(var n in e)Kn(t.prototype,"_props",n)}function mi(t){var e=t.options.computed;for(var n in e)ii(t.prototype,n,e[n])}function bi(t){H.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function Ai(t){return t&&(t.Ctor.options.name||t.tag)}function wi(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function Pi(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var o in n){var a=n[o];if(a){var s=Ai(a.componentOptions);s&&!e(s)&&Si(n,o,i,r)}}}function Si(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,x(n,e)}fi(vi),li(vi),wn(vi),On(vi),hn(vi);var Ti=[String,RegExp,Array],Oi={name:"keep-alive",abstract:!0,props:{include:Ti,exclude:Ti,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Si(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Pi(t,function(t){return wi(e,t)})}),this.$watch("exclude",function(e){Pi(t,function(t){return!wi(e,t)})})},render:function(){var t=this.$slots.default,e=yn(t),n=e&&e.componentOptions;if(n){var i=Ai(n),r=this,o=r.include,a=r.exclude;if(o&&(!i||!wi(o,i))||a&&i&&wi(a,i))return e;var s=this,c=s.cache,l=s.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[u]?(e.componentInstance=c[u].componentInstance,x(l,u),l.push(u)):(c[u]=e,l.push(u),this.max&&l.length>parseInt(this.max)&&Si(c,l[0],l,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},$i={KeepAlive:Oi};function ki(t){var e={get:function(){return N}};Object.defineProperty(t,"config",e),t.util={warn:lt,extend:M,mergeOptions:Ut,defineReactive:Et},t.set=Mt,t.delete=Lt,t.nextTick=le,t.observable=function(t){return kt(t),t},t.options=Object.create(null),H.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,M(t.options.components,$i),gi(t),yi(t),xi(t),bi(t)}ki(vi),Object.defineProperty(vi.prototype,"$isServer",{get:rt}),Object.defineProperty(vi.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(vi,"FunctionalRenderContext",{value:Ve}),vi.version="2.6.10";var Ei="[object Array]",Mi="[object Object]";function Li(t,e){var n={};return Ci(t,e),Ri(t,e,"",n),n}function Ci(t,e){if(t!==e){var n=Fi(t),i=Fi(e);if(n==Mi&&i==Mi){if(Object.keys(t).length>=Object.keys(e).length)for(var r in e){var o=t[r];void 0===o?t[r]=null:Ci(o,e[r])}}else n==Ei&&i==Ei&&t.length>=e.length&&e.forEach(function(e,n){Ci(t[n],e)})}}function Ri(t,e,n,i){if(t!==e){var r=Fi(t),o=Fi(e);if(r==Mi)if(o!=Mi||Object.keys(t).length<Object.keys(e).length)ji(i,n,t);else{var a=function(r){var o=t[r],a=e[r],s=Fi(o),c=Fi(a);if(s!=Ei&&s!=Mi)o!=e[r]&&ji(i,(""==n?"":n+".")+r,o);else if(s==Ei)c!=Ei?ji(i,(""==n?"":n+".")+r,o):o.length<a.length?ji(i,(""==n?"":n+".")+r,o):o.forEach(function(t,e){Ri(t,a[e],(""==n?"":n+".")+r+"["+e+"]",i)});else if(s==Mi)if(c!=Mi||Object.keys(o).length<Object.keys(a).length)ji(i,(""==n?"":n+".")+r,o);else for(var l in o)Ri(o[l],a[l],(""==n?"":n+".")+r+"."+l,i)};for(var s in t)a(s)}else r==Ei?o!=Ei?ji(i,n,t):t.length<e.length?ji(i,n,t):t.forEach(function(t,r){Ri(t,e[r],n+"["+r+"]",i)}):ji(i,n,t)}}function ji(t,e,n){t[e]=n}function Fi(t){return Object.prototype.toString.call(t)}function Di(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var i=0;i<n.length;i++)n[i]()}}function Ii(t){return Cn.find(function(e){return t._watcher===e})}function Hi(t,e){if(!t.__next_tick_pending&&!Ii(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return le(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var i=t.$scope;console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+t._uid+"]:nextMPTick")}var r;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(nr){Yt(nr,t,"nextTick")}else r&&r(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){r=t})}function zi(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Ni=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var i=this.$scope,r=Object.create(null);try{r=zi(this)}catch(s){console.error(s)}r.__webviewId__=i.data.__webviewId__;var o=Object.create(null);Object.keys(r).forEach(function(t){o[t]=i.data[t]});var a=Li(r,o);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,i.setData(a,function(){n.__next_tick_pending=!1,Di(n)})):Di(this)}};function Bi(){}function Wi(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Bi),t.$options.render||(t.$options.render=Bi),"mp-toutiao"!==t.mpHost&&Ln(t,"beforeMount");var i=function(){t._update(t._render(),n)};return new Xn(t,i,C,{before:function(){t._isMounted&&!t._isDestroyed&&Ln(t,"beforeUpdate")}},!0),n=!1,t}function Ui(t,e){return r(t)||r(e)?Vi(t,Gi(e)):""}function Vi(t,e){return t?e?t+" "+e:t:e||""}function Gi(t){return Array.isArray(t)?qi(t):c(t)?Xi(t):"string"===typeof t?t:""}function qi(t){for(var e,n="",i=0,o=t.length;i<o;i++)r(e=Gi(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Xi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Ji=b(function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Ki(t){return Array.isArray(t)?L(t):"string"===typeof t?Ji(t):t}var Yi=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Zi(t,e){var n=e.split("."),i=n[0];return 0===i.indexOf("__$n")&&(i=parseInt(i.replace("__$n",""))),1===n.length?t[i]:Zi(t[i],n.slice(1).join("."))}function Qi(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:E(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Hi(this,t)},Yi.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=Ae,t.prototype.__init_injections=we,t.prototype.__call_hook=function(t,e){var n=this;pt();var i,r=n.$options[t],o=t+" hook";if(r)for(var a=0,s=r.length;a<s;a++)i=Zt(r[a],n,e?[e]:null,n,o);return n._hasHookEvent&&n.$emit("hook:"+t),dt(),i},t.prototype.__set_model=function(t,e,n,i){Array.isArray(i)&&(-1!==i.indexOf("trim")&&(n=n.trim()),-1!==i.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return u(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Zi(e||this,t)},t.prototype.__get_class=function(t,e){return Ui(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Ki(t),i=e?M(e,n):n;return Object.keys(i).map(function(t){return T(t)+":"+i[t]}).join(";")},t.prototype.__map=function(t,e){var n,i,r,o,a;if(Array.isArray(t)){for(n=new Array(t.length),i=0,r=t.length;i<r;i++)n[i]=e(t[i],i);return n}if(c(t)){for(o=Object.keys(t),n=Object.create(null),i=0,r=o.length;i<r;i++)a=o[i],n[a]=e(t[a],a,i);return n}return[]}}var tr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function er(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==tr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,i=n.created;tr.forEach(function(t){n[t]=i}),t.prototype.__lifecycle_hooks__=tr}vi.prototype.__patch__=Ni,vi.prototype.$mount=function(t,e){return Wi(this,t,e)},er(vi),Qi(vi),e["default"]=vi}.call(this,n("c8ba"))},"670d":function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("070b"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"682d":function(t,e,n){},"68f5":function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("27b8"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"690f":function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("db3f"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createPage=we,e.createComponent=Pe,e.default=void 0;var i=r(n("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return c(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(c){r=!0,o=c}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw o}}return n}function c(t){if(Array.isArray(t))return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return p(t)||h(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function p(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function g(t){return"function"===typeof t}function y(t){return"string"===typeof t}function x(t){return"[object Object]"===d.call(t)}function _(t,e){return v.call(t,e)}function m(){}function b(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var A=/-(\w)/g,w=b(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),P=["invoke","success","fail","complete","returnValue"],S={},T={};function O(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?$(n):n}function $(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function k(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function E(t,e){Object.keys(e).forEach(function(n){-1!==P.indexOf(n)&&g(e[n])&&(t[n]=O(t[n],e[n]))})}function M(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==P.indexOf(n)&&g(e[n])&&k(t[n],e[n])})}function L(t,e){"string"===typeof t&&x(e)?E(T[t]||(T[t]={}),e):x(t)&&E(S,t)}function C(t,e){"string"===typeof t?x(e)?M(T[t],e):delete T[t]:x(t)&&M(S,t)}function R(t){return function(e){return t(e)||e}}function j(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function F(t,e){for(var n=!1,i=0;i<t.length;i++){var r=t[i];if(n)n=Promise.then(R(r));else{var o=r(e);if(j(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function D(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var i=e[n];e[n]=function(e){F(t[n],e).then(function(t){return g(i)&&i(t)||t})}}}),e}function I(t,e){var n=[];Array.isArray(S.returnValue)&&n.push.apply(n,u(S.returnValue));var i=T[t];return i&&Array.isArray(i.returnValue)&&n.push.apply(n,u(i.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function H(t){var e=Object.create(null);Object.keys(S).forEach(function(t){"returnValue"!==t&&(e[t]=S[t].slice())});var n=T[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function z(t,e,n){for(var i=arguments.length,r=new Array(i>3?i-3:0),o=3;o<i;o++)r[o-3]=arguments[o];var a=H(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=F(a.invoke,n);return s.then(function(t){return e.apply(void 0,[D(a,t)].concat(r))})}return e.apply(void 0,[D(a,n)].concat(r))}return e.apply(void 0,[n].concat(r))}var N={returnValue:function(t){return j(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},B=/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,W=/^create|Manager$/,U=/^on/;function V(t){return W.test(t)}function G(t){return B.test(t)}function q(t){return U.test(t)}function X(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function J(t){return!(V(t)||G(t)||q(t))}function K(t,e){return J(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return g(n.success)||g(n.fail)||g(n.complete)?I(t,z.apply(void 0,[t,e,n].concat(r))):I(t,X(new Promise(function(i,o){z.apply(void 0,[t,e,Object.assign({},n,{success:i,fail:o})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Y=1e-4,Z=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,i=t.windowWidth;tt=i,et=n,Q="ios"===e}function it(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Z*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Y),0===n?1!==et&&Q?.5:1:t<0?-n:n}var rt={promiseInterceptor:N},ot=Object.freeze({upx2px:it,interceptors:rt,addInterceptor:L,removeInterceptor:C}),at={},st=[],ct=[],lt=["success","fail","cancel","complete"];function ut(t,e,n){return function(i){return e(ht(t,i,n))}}function ft(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(x(e)){var o=!0===r?e:{};for(var a in g(n)&&(n=n(e,o)||{}),e)if(_(n,a)){var s=n[a];g(s)&&(s=s(e[a],e,o)),s?y(s)?o[s]=e[a]:x(s)&&(o[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==lt.indexOf(a)?o[a]=ut(t,e[a],i):r||(o[a]=e[a]);return o}return g(e)&&(e=ut(t,e,i)),e}function ht(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g(at.returnValue)&&(e=at.returnValue(t,e)),ft(t,e,n,{},i)}function pt(t,e){if(_(at,t)){var n=at[t];return n?function(e,i){var r=n;g(n)&&(r=n(e)),e=ft(t,e,r.args,r.returnValue);var o=[e];"undefined"!==typeof i&&o.push(i);var a=wx[r.name||t].apply(wx,o);return G(t)?ht(t,a,r.returnValue,V(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["subscribePush","unsubscribePush","onPush","offPush","share"];function gt(t){return function(e){var n=e.fail,i=e.complete,r={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};g(n)&&n(r),g(i)&&i(r)}}vt.forEach(function(t){dt[t]=gt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new i.default),t};var t}();function xt(t,e,n){return t[e].apply(t,n)}function _t(){return xt(yt(),"$on",Array.prototype.slice.call(arguments))}function mt(){return xt(yt(),"$off",Array.prototype.slice.call(arguments))}function bt(){return xt(yt(),"$once",Array.prototype.slice.call(arguments))}function At(){return xt(yt(),"$emit",Array.prototype.slice.call(arguments))}var wt=Object.freeze({$on:_t,$off:mt,$once:bt,$emit:At});function Pt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,i=plus.webview.getWebviewById(t.__uniapp_mask_id);i=i.parent()||i;var r=t.show,o=t.hide,a=t.close,s=function(){i.setStyle({mask:n})},c=function(){i.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r.apply(t,n)},t.hide=function(){c();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return o.apply(t,n)},t.close=function(){c(),e=[];for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a.apply(t,i)}}}function St(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Pt(e),e}function Tt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var Ot=Object.freeze({requireNativePlugin:Tt,getSubNVueById:St}),$t=Page,kt=Component,Et=/:/g,Mt=b(function(t){return w(t.replace(Et,"-"))});function Lt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return e.apply(t,[Mt(n)].concat(r))}}}function Ct(t,e){var n=e[t];e[t]=n?function(){Lt(this);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return n.apply(this,e)}:function(){Lt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ct("onLoad",t),$t(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ct("created",t),kt(t)};var Rt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function jt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){_(n,e)&&(t[e]=n[e])})}function Ft(t,e){if(!e)return!0;if(i.default.options&&Array.isArray(i.default.options[t]))return!0;if(e=e.default||e,g(e))return!!g(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(g(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Ft(t,e)}):void 0}function Dt(t,e,n){e.forEach(function(e){Ft(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function It(t,e){var n;return e=e.default||e,g(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Ht(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function zt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Nt(t,e){var n=t.data||{},i=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(r){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(r){}return x(n)||(n={}),Object.keys(i).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||_(n,t)||(n[t]=i[t])}),n}var Bt=[String,Number,Boolean,Object,Array,null];function Wt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ut(t,e){var n=t["behaviors"],i=t["extends"],r=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),x(i)&&i.props&&a.push(e({properties:Gt(i.props,!0)})),Array.isArray(r)&&r.forEach(function(t){x(t)&&t.props&&a.push(e({properties:Gt(t.props,!0)}))}),a}function Vt(t,e,n,i){return Array.isArray(e)&&1===e.length?e[0]:e}function Gt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i={};return e||(i.vueId={type:String,value:""},i.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){i[t]={type:null,observer:Wt(t)}}):x(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(x(r)){var o=r["default"];g(o)&&(o=o()),r.type=Vt(e,r.type,o,n),i[e]={type:-1!==Bt.indexOf(r.type)?r.type:null,value:o,observer:Wt(e)}}else{var a=Vt(e,r,null,n);i[e]={type:-1!==Bt.indexOf(a)?a:null,observer:Wt(e)}}}),i}function qt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=m,t.preventDefault=m,t.target=t.target||{},_(t,"detail")||(t.detail={}),x(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Xt(t,e){var n=t;return e.forEach(function(e){var i=e[0],r=e[2];if(i||"undefined"!==typeof r){var o=e[1],a=e[3],s=i?t.__get_value(i,n):n;Number.isInteger(s)?n=r:o?Array.isArray(s)?n=s.find(function(e){return t.__get_value(o,e)===r}):x(s)?n=Object.keys(s).find(function(e){return t.__get_value(o,s[e])===r}):console.error("v-for 暂不支持循环数据：",s):n=s[r],a&&(n=t.__get_value(a,n))}}),n}function Jt(t,e,n){var i={};return Array.isArray(e)&&e.length&&e.forEach(function(e,r){"string"===typeof e?e?"$event"===e?i["$"+r]=n:0===e.indexOf("$event.")?i["$"+r]=t.__get_value(e.replace("$event.",""),n):i["$"+r]=t.__get_value(e):i["$"+r]=t:i["$"+r]=Xt(t,e)}),i}function Kt(t){for(var e={},n=1;n<t.length;n++){var i=t[n];e[i[0]]=i[1]}return e}function Yt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(r&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Jt(t,i,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||r?r&&!a?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(Kt(t)):"string"===typeof t&&_(s,t)?c.push(s[t]):c.push(t)}),c}var Zt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=qt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var i=n.eventOpts||n["event-opts"];if(!i)return console.warn("事件信息不存在");var r=t.type;i.forEach(function(n){var i=n[0],o=n[1],a=i.charAt(0)===Qt;i=a?i.slice(1):i;var s=i.charAt(0)===Zt;i=s?i.slice(1):i,o&&te(r,i)&&o.forEach(function(n){var i=n[0];if(i){var r=e.$vm;r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent);var o=r[i];if(!g(o))throw new Error(" _vm.".concat(i," is not a function"));if(s){if(o.once)return;o.once=!0}o.apply(r,Yt(e.$vm,t,n[1],n[2],a,i))}})})}var ne=["onShow","onHide","onError","onPageNotFound"];function ie(t,e){var n=e.mocks,r=e.initRefs;i.default.prototype.mpHost="app-plus",i.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=l({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),jt(this,n)))}});var o={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return o.globalData=t.$options.globalData||{},Dt(o,ne),o}var re=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){var n=t.$children,i=n.find(function(t){return t.$scope._$vueId===e});if(i)return i;for(var r=n.length-1;r>=0;r--)if(i=oe(n[r],e),i)return i}function ae(t){return Behavior(t)}function se(){return!!this.route}function ce(t){this.triggerEvent("__l",t)}function le(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var i=e.selectAllComponents(".vue-ref-in-for");return i.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function ue(t){var e,n=t.detail||t.value,i=n.vuePid,r=n.vueOptions;i&&(e=oe(this.$vm,i)),e||(e=this.$vm),r.parent=e}function fe(t){return ie(t,{mocks:re,initRefs:le})}var he=["onUniNViewMessage"];function pe(t){var e=fe(t);return Dt(e,he),e}function de(t){return App(pe(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,r=e.initRelation,a=It(i.default,t),s=o(a,2),c=s[0],l=s[1],u={options:{multipleSlots:!0,addGlobalClass:!0},data:Nt(l,i.default.prototype),behaviors:Ut(l,ae),properties:Gt(l.props,!1,l.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};zt(t.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),Ht(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:ue,__e:ee}};return n?u:[u,c]}function ge(t){return ve(t,{isPage:se,initRelation:ce})}function ye(t){var e=ge(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var xe=["onShow","onHide","onUnload"];function _e(t,e){var n=e.isPage,i=e.initRelation,r=ye(t,{isPage:n,initRelation:i});return Dt(r.methods,xe,t),r.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},r}function me(t){return _e(t,{isPage:se,initRelation:ce})}xe.push.apply(xe,Rt);var be=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Ae(t){var e=me(t);return Dt(e.methods,be),e}function we(t){return Component(Ae(t))}function Pe(t){return Component(ye(t))}st.forEach(function(t){at[t]=!1}),ct.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Se={};Object.keys(ot).forEach(function(t){Se[t]=ot[t]}),Object.keys(wt).forEach(function(t){Se[t]=wt[t]}),Object.keys(Ot).forEach(function(t){Se[t]=K(t,Ot[t])}),Object.keys(wx).forEach(function(t){(_(wx,t)||_(at,t))&&(Se[t]=K(t,pt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Se,t.UniEmitter=wt),wx.createApp=de,wx.createPage=we,wx.createComponent=Pe;var Te=Se,Oe=Te;e.default=Oe}).call(this,n("c8ba"))},"70cf":function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("55aa"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"718a":function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("5beb"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},8291:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("2235"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},8685:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.postAPI=e.test=void 0;var i=r(n("d840"));function r(t){return t&&t.__esModule?t:{default:t}}var o=!1,a=function(t){return i.default.interceptor.response=function(t){return console.log("个性化response...."," at common\\vmeitime-http\\index.js:20"),t},i.default.request({baseUrl:"https://unidemo.dcloud.net.cn/",url:"ajax/echo/text?name=uni-app",dataType:"text",data:t})};e.test=a;var s=function(e,n){try{var r=t.getStorageSync("token");i.default.interceptor.request=function(t){return r&&(t.header={token:r}),t},i.default.interceptor.response=function(e){if(console.log("个性化response...."," at common\\vmeitime-http\\index.js:44"),e.data&&10009==e.data.code){t.removeStorageSync("token"),t.removeStorageSync("userInfo_token"),t.removeStorageSync("userInfo");var n=getCurrentPages(),i=n[n.length-1];if("pages/login/login"==i.route)return;if(o)return;o=!0,setTimeout(function(){t.navigateTo({url:"/pages/login/login",complete:function(){o=!1}})},1500)}return e}}catch(a){}return i.default.post(e,n)};e.postAPI=s;var c={test:a,postAPI:s};e.default=c}).call(this,n("6e42")["default"])},"878d":function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("5f75"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},9323:function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */!function(){function t(t){if(t)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=l;else if(a){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="input is invalid type",e="object"==typeof window,i=e?window:{};i.JS_MD5_NO_WINDOW&&(e=!1);var s=!e&&"object"==typeof self,h=!i.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;h?i=global:s&&(i=self);var f=!i.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,o=__webpack_require__("3c35"),a=!i.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,n="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],y=[0,8,16,24],c=["hex","array","digest","buffer","arrayBuffer","base64"],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],l;if(a){var A=new ArrayBuffer(68);l=new Uint8Array(A),d=new Uint32Array(A)}!i.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!a||!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var b=function(e){return function(n){return new t(!0).update(n)[e]()}},v=function(){var e=b("hex");h&&(e=w(e)),e.create=function(){return new t},e.update=function(t){return e.create().update(t)};for(var n=0;n<c.length;++n){var i=c[n];e[i]=b(i)}return e},w=function w(t){var e=eval("require('crypto')"),i=eval("require('buffer').Buffer"),s=function(n){if("string"==typeof n)return e.createHash("md5").update(n,"utf8").digest("hex");if(null===n||void 0===n)throw r;return n.constructor===ArrayBuffer&&(n=new Uint8Array(n)),Array.isArray(n)||ArrayBuffer.isView(n)||n.constructor===i?e.createHash("md5").update(new i(n)).digest("hex"):t(n)};return s};t.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if("string"!==n){if("object"!==n)throw r;if(null===t)throw r;if(a&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||a&&ArrayBuffer.isView(t)))throw r;e=!0}for(var i,o,s=0,c=t.length,l=this.blocks,u=this.buffer8;s<c;){if(this.hashed&&(this.hashed=!1,l[0]=l[16],l[16]=l[1]=l[2]=l[3]=l[4]=l[5]=l[6]=l[7]=l[8]=l[9]=l[10]=l[11]=l[12]=l[13]=l[14]=l[15]=0),e)if(a)for(o=this.start;s<c&&o<64;++s)u[o++]=t[s];else for(o=this.start;s<c&&o<64;++s)l[o>>2]|=t[s]<<y[3&o++];else if(a)for(o=this.start;s<c&&o<64;++s)(i=t.charCodeAt(s))<128?u[o++]=i:i<2048?(u[o++]=192|i>>6,u[o++]=128|63&i):i<55296||i>=57344?(u[o++]=224|i>>12,u[o++]=128|i>>6&63,u[o++]=128|63&i):(i=65536+((1023&i)<<10|1023&t.charCodeAt(++s)),u[o++]=240|i>>18,u[o++]=128|i>>12&63,u[o++]=128|i>>6&63,u[o++]=128|63&i);else for(o=this.start;s<c&&o<64;++s)(i=t.charCodeAt(s))<128?l[o>>2]|=i<<y[3&o++]:i<2048?(l[o>>2]|=(192|i>>6)<<y[3&o++],l[o>>2]|=(128|63&i)<<y[3&o++]):i<55296||i>=57344?(l[o>>2]|=(224|i>>12)<<y[3&o++],l[o>>2]|=(128|i>>6&63)<<y[3&o++],l[o>>2]|=(128|63&i)<<y[3&o++]):(i=65536+((1023&i)<<10|1023&t.charCodeAt(++s)),l[o>>2]|=(240|i>>18)<<y[3&o++],l[o>>2]|=(128|i>>12&63)<<y[3&o++],l[o>>2]|=(128|i>>6&63)<<y[3&o++],l[o>>2]|=(128|63&i)<<y[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=u[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var t,e,n,i,r,o,a=this.blocks;this.first?e=((e=((t=((t=a[0]-680876937)<<7|t>>>25)-271733879<<0)^(n=((n=(-271733879^(i=((i=(-1732584194^2004318071&t)+a[1]-117830708)<<12|i>>>20)+t<<0)&(-271733879^t))+a[2]-1126478375)<<17|n>>>15)+i<<0)&(i^t))+a[3]-1316259209)<<22|e>>>10)+n<<0:(t=this.h0,e=this.h1,n=this.h2,e=((e+=((t=((t+=((i=this.h3)^e&(n^i))+a[0]-680876936)<<7|t>>>25)+e<<0)^(n=((n+=(e^(i=((i+=(n^t&(e^n))+a[1]-389564586)<<12|i>>>20)+t<<0)&(t^e))+a[2]+606105819)<<17|n>>>15)+i<<0)&(i^t))+a[3]-1044525330)<<22|e>>>10)+n<<0),e=((e+=((t=((t+=(i^e&(n^i))+a[4]-176418897)<<7|t>>>25)+e<<0)^(n=((n+=(e^(i=((i+=(n^t&(e^n))+a[5]+1200080426)<<12|i>>>20)+t<<0)&(t^e))+a[6]-1473231341)<<17|n>>>15)+i<<0)&(i^t))+a[7]-45705983)<<22|e>>>10)+n<<0,e=((e+=((t=((t+=(i^e&(n^i))+a[8]+1770035416)<<7|t>>>25)+e<<0)^(n=((n+=(e^(i=((i+=(n^t&(e^n))+a[9]-1958414417)<<12|i>>>20)+t<<0)&(t^e))+a[10]-42063)<<17|n>>>15)+i<<0)&(i^t))+a[11]-1990404162)<<22|e>>>10)+n<<0,e=((e+=((t=((t+=(i^e&(n^i))+a[12]+1804603682)<<7|t>>>25)+e<<0)^(n=((n+=(e^(i=((i+=(n^t&(e^n))+a[13]-40341101)<<12|i>>>20)+t<<0)&(t^e))+a[14]-1502002290)<<17|n>>>15)+i<<0)&(i^t))+a[15]+1236535329)<<22|e>>>10)+n<<0,e=((e+=((i=((i+=(e^n&((t=((t+=(n^i&(e^n))+a[1]-165796510)<<5|t>>>27)+e<<0)^e))+a[6]-1069501632)<<9|i>>>23)+t<<0)^t&((n=((n+=(t^e&(i^t))+a[11]+643717713)<<14|n>>>18)+i<<0)^i))+a[0]-373897302)<<20|e>>>12)+n<<0,e=((e+=((i=((i+=(e^n&((t=((t+=(n^i&(e^n))+a[5]-701558691)<<5|t>>>27)+e<<0)^e))+a[10]+38016083)<<9|i>>>23)+t<<0)^t&((n=((n+=(t^e&(i^t))+a[15]-660478335)<<14|n>>>18)+i<<0)^i))+a[4]-405537848)<<20|e>>>12)+n<<0,e=((e+=((i=((i+=(e^n&((t=((t+=(n^i&(e^n))+a[9]+568446438)<<5|t>>>27)+e<<0)^e))+a[14]-1019803690)<<9|i>>>23)+t<<0)^t&((n=((n+=(t^e&(i^t))+a[3]-187363961)<<14|n>>>18)+i<<0)^i))+a[8]+1163531501)<<20|e>>>12)+n<<0,e=((e+=((i=((i+=(e^n&((t=((t+=(n^i&(e^n))+a[13]-1444681467)<<5|t>>>27)+e<<0)^e))+a[2]-51403784)<<9|i>>>23)+t<<0)^t&((n=((n+=(t^e&(i^t))+a[7]+1735328473)<<14|n>>>18)+i<<0)^i))+a[12]-1926607734)<<20|e>>>12)+n<<0,e=((e+=((o=(i=((i+=((r=e^n)^(t=((t+=(r^i)+a[5]-378558)<<4|t>>>28)+e<<0))+a[8]-2022574463)<<11|i>>>21)+t<<0)^t)^(n=((n+=(o^e)+a[11]+1839030562)<<16|n>>>16)+i<<0))+a[14]-35309556)<<23|e>>>9)+n<<0,e=((e+=((o=(i=((i+=((r=e^n)^(t=((t+=(r^i)+a[1]-1530992060)<<4|t>>>28)+e<<0))+a[4]+1272893353)<<11|i>>>21)+t<<0)^t)^(n=((n+=(o^e)+a[7]-155497632)<<16|n>>>16)+i<<0))+a[10]-1094730640)<<23|e>>>9)+n<<0,e=((e+=((o=(i=((i+=((r=e^n)^(t=((t+=(r^i)+a[13]+681279174)<<4|t>>>28)+e<<0))+a[0]-358537222)<<11|i>>>21)+t<<0)^t)^(n=((n+=(o^e)+a[3]-722521979)<<16|n>>>16)+i<<0))+a[6]+76029189)<<23|e>>>9)+n<<0,e=((e+=((o=(i=((i+=((r=e^n)^(t=((t+=(r^i)+a[9]-640364487)<<4|t>>>28)+e<<0))+a[12]-421815835)<<11|i>>>21)+t<<0)^t)^(n=((n+=(o^e)+a[15]+530742520)<<16|n>>>16)+i<<0))+a[2]-995338651)<<23|e>>>9)+n<<0,e=((e+=((i=((i+=(e^((t=((t+=(n^(e|~i))+a[0]-198630844)<<6|t>>>26)+e<<0)|~n))+a[7]+1126891415)<<10|i>>>22)+t<<0)^((n=((n+=(t^(i|~e))+a[14]-1416354905)<<15|n>>>17)+i<<0)|~t))+a[5]-57434055)<<21|e>>>11)+n<<0,e=((e+=((i=((i+=(e^((t=((t+=(n^(e|~i))+a[12]+1700485571)<<6|t>>>26)+e<<0)|~n))+a[3]-1894986606)<<10|i>>>22)+t<<0)^((n=((n+=(t^(i|~e))+a[10]-1051523)<<15|n>>>17)+i<<0)|~t))+a[1]-2054922799)<<21|e>>>11)+n<<0,e=((e+=((i=((i+=(e^((t=((t+=(n^(e|~i))+a[8]+1873313359)<<6|t>>>26)+e<<0)|~n))+a[15]-30611744)<<10|i>>>22)+t<<0)^((n=((n+=(t^(i|~e))+a[6]-1560198380)<<15|n>>>17)+i<<0)|~t))+a[13]+1309151649)<<21|e>>>11)+n<<0,e=((e+=((i=((i+=(e^((t=((t+=(n^(e|~i))+a[4]-145523070)<<6|t>>>26)+e<<0)|~n))+a[11]-1120210379)<<10|i>>>22)+t<<0)^((n=((n+=(t^(i|~e))+a[2]+718787259)<<15|n>>>17)+i<<0)|~t))+a[9]-343485551)<<21|e>>>11)+n<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=n-1732584194<<0,this.h3=i+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+n<<0,this.h3=this.h3+i<<0)},t.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,i=this.h2,r=this.h3;return n[t>>4&15]+n[15&t]+n[t>>12&15]+n[t>>8&15]+n[t>>20&15]+n[t>>16&15]+n[t>>28&15]+n[t>>24&15]+n[e>>4&15]+n[15&e]+n[e>>12&15]+n[e>>8&15]+n[e>>20&15]+n[e>>16&15]+n[e>>28&15]+n[e>>24&15]+n[i>>4&15]+n[15&i]+n[i>>12&15]+n[i>>8&15]+n[i>>20&15]+n[i>>16&15]+n[i>>28&15]+n[i>>24&15]+n[r>>4&15]+n[15&r]+n[r>>12&15]+n[r>>8&15]+n[r>>20&15]+n[r>>16&15]+n[r>>28&15]+n[r>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,i=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,255&i,i>>8&255,i>>16&255,i>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var t,e,n,i="",r=this.array(),o=0;o<15;)t=r[o++],e=r[o++],n=r[o++],i+=p[t>>>2]+p[63&(t<<4|e>>>4)]+p[63&(e<<2|n>>>6)]+p[63&n];return t=r[o],i+(p[t>>>2]+p[t<<4&63]+"==")};var _=v();f?module.exports=_:(i.md5=_,o&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return _}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},9403:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("0110"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,r=i.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=m;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,x=y&&y(y(L([])));x&&x!==i&&r.call(x,a)&&(g=x);var _=P.prototype=A.prototype=Object.create(g);w.prototype=_.constructor=P,P.constructor=w,P[c]=w.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,P):(t.__proto__=P,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},u.awrap=function(t){return{__await:t}},S(T.prototype),T.prototype[s]=function(){return this},u.AsyncIterator=T,u.async=function(t,e,n,i){var r=new T(m(t,e,n,i));return u.isGeneratorFunction(e)?r:r.next().then(function(t){return t.done?t.value:r.next()})},S(_),_[c]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},u.values=L,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,r){return s.type="throw",s.arg=t,e.next=i,r&&(e.method="next",e.arg=n),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;E(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:L(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),v}}}function m(t,e,n,i){var r=e&&e.prototype instanceof A?e:A,o=Object.create(r.prototype),a=new M(i||[]);return o._invoke=O(t,n,a),o}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function A(){}function w(){}function P(){}function S(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function T(t){function e(n,i,o,a){var s=b(t[n],t,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(l).then(function(t){c.value=t,o(c)},function(t){return e("throw",t,o,a)})}a(s.arg)}var n;function i(t,i){function r(){return new Promise(function(n,r){e(t,i,n,r)})}return n=n?n.then(r,r):r()}this._invoke=i}function O(t,e,n){var i=f;return function(r,o){if(i===p)throw new Error("Generator is already running");if(i===d){if("throw"===r)throw o;return C()}n.method=r,n.arg=o;while(1){var a=n.delegate;if(a){var s=$(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=p;var c=b(t,e,n);if("normal"===c.type){if(i=n.done?d:h,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=d,n.method="throw",n.arg=c.arg)}}}function $(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,$(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var r=b(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,v;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){while(++i<t.length)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9b66":function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("405b"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9eea":function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("7685"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a34a:function(t,e,n){t.exports=n("bbdd")},a484:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("54fb"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a82c:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("a4dc"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a838:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("ec55"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},b113:function(t,e,n){"use strict";(function(t){n("682d");var e=o(n("66fd")),i=o(n("bcc4")),r=o(n("8685"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.config.productionTip=!1,e.default.prototype.$api=r.default,i.default.mpType="app",Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t};var c=new e.default(a({},i.default));t(c).$mount()}).call(this,n("6e42")["createApp"])},b50f:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("97f4"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ba20:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("164f"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},bbdd:function(t,e,n){var i=function(){return this||"object"===typeof self&&self}()||Function("return this")(),r=i.regeneratorRuntime&&Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime")>=0,o=r&&i.regeneratorRuntime;if(i.regeneratorRuntime=void 0,t.exports=n("96cf"),r)i.regeneratorRuntime=o;else try{delete i.regeneratorRuntime}catch(a){i.regeneratorRuntime=void 0}},c790:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("55f8"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},cce3:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("8b57"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d840:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={config:{baseUrl:"http://112.74.21.125:8085/",header:{"Content-Type":"application/json;charset=UTF-8"},data:{},method:"GET",dataType:"json",responseType:"text",success:function(){},fail:function(){},complete:function(){}},interceptor:{request:null,response:null},request:function(e){var n=this;return e||(e={}),e.baseUrl=e.baseUrl||this.config.baseUrl,e.dataType=e.dataType||this.config.dataType,e.url=e.baseUrl+e.url,e.data=e.data||{},e.method=e.method||this.config.method,new Promise(function(o,a){var s=null;e.complete=function(t){var e=t.statusCode;if(t.config=s,n.interceptor.response){var i=n.interceptor.response(t);i&&(t=i)}r(t),200===e?o(t):a(t)},s=Object.assign({},n.config,e),s.requestId=(new Date).getTime(),n.interceptor.request&&n.interceptor.request(s),i(s),t.request(s)})},get:function(t,e,n){return n||(n={}),n.url=t,n.data=e,n.method="GET",this.request(n)},post:function(t,e,n){return n||(n={}),n.url=t,n.data=e,n.method="POST",this.request(n)},put:function(t,e,n){return n||(n={}),n.url=t,n.data=e,n.method="PUT",this.request(n)},delete:function(t,e,n){return n||(n={}),n.url=t,n.data=e,n.method="DELETE",this.request(n)}};function i(t){0}function r(t){var e=t.statusCode;switch(e){case 200:break;case 401:break;case 404:break;default:break}}e.default=n}).call(this,n("6e42")["default"])},df50:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("fa22"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,i=t.length-1;i>=0;i--){var r=t[i];"."===r?t.splice(i,1):".."===r?(t.splice(i,1),n++):n&&(t.splice(i,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,r=function(t){return i.exec(t).slice(1)};function o(t,e){if(t.filter)return t.filter(e);for(var n=[],i=0;i<t.length;i++)e(t[i],i,t)&&n.push(t[i]);return n}e.resolve=function(){for(var e="",i=!1,r=arguments.length-1;r>=-1&&!i;r--){var a=r>=0?arguments[r]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,i="/"===a.charAt(0))}return e=n(o(e.split("/"),function(t){return!!t}),!i).join("/"),(i?"/":"")+e||"."},e.normalize=function(t){var i=e.isAbsolute(t),r="/"===a(t,-1);return t=n(o(t.split("/"),function(t){return!!t}),!i).join("/"),t||i||(t="."),t&&r&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function i(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var r=i(t.split("/")),o=i(n.split("/")),a=Math.min(r.length,o.length),s=a,c=0;c<a;c++)if(r[c]!==o[c]){s=c;break}var l=[];for(c=s;c<r.length;c++)l.push("..");return l=l.concat(o.slice(s)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=r(t),n=e[0],i=e[1];return n||i?(i&&(i=i.substr(0,i.length-1)),n+i):"."},e.basename=function(t,e){var n=r(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return r(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},eb19:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("1414"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ec1a:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("be7e"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ed47:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("c952"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ef4d:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("c79f"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},fad1:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("31c3"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},fba9:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("7962"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},fedc:function(t,e,n){"use strict";(function(t){n("682d");i(n("66fd"));var e=i(n("e99f"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/mpvue-citypicker/mpvueCityPicker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mpvue-citypicker/mpvueCityPicker.js';

define('components/mpvue-citypicker/mpvueCityPicker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mpvue-citypicker/mpvueCityPicker"], {
  3003: function _(t, a, e) {
    "use strict";

    var i = e("ed3f"),
        n = e.n(i);
    n.a;
  },
  "5c48": function c48(t, a, e) {
    "use strict";

    e.r(a);
    var i = e("691c"),
        n = e.n(i);

    for (var r in i) {
      "default" !== r && function (t) {
        e.d(a, t, function () {
          return i[t];
        });
      }(r);
    }

    a["default"] = n.a;
  },
  "691c": function c(t, a, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.default = void 0;
      var e = {
        data: function data() {
          return {
            pickerValue: [0, 0, 0],
            provinceData: [],
            cityData: [],
            areaData: [],
            provinceDataList: [],
            cityDataList: [],
            areaDataList: [],
            showPicker: !1
          };
        },
        created: function created() {
          this.init();
        },
        props: {
          pickerValueDefault: {
            type: Array,
            default: function _default() {
              return [0, 0, 0];
            }
          },
          themeColor: String
        },
        methods: {
          init: function init() {
            var t = this;
            this.getProvice(function (a) {
              t.provinceData = a, t.provinceDataList = t.provinceData;
              var e = a[0].id;

              if (0 != t.pickerValueDefault[0]) {
                e = a.find(function (a) {
                  return a.id == t.pickerValueDefault[0];
                }).id || 0;
                var i = a.findIndex(function (a) {
                  return a.id == t.pickerValueDefault[0];
                });
                t.$set(t.pickerValue, 0, i >= 0 ? i : 0);
              }

              a && a.length && t.getCityOrArea(e, function (a) {
                t.cityData = a, t.cityDataList = t.cityData;
                var e = a[0].id;

                if (0 != t.pickerValueDefault[1]) {
                  e = a.find(function (a) {
                    return a.id == t.pickerValueDefault[1];
                  }).id || 0;
                  var i = a.findIndex(function (a) {
                    return a.id == t.pickerValueDefault[1];
                  });
                  t.$set(t.pickerValue, 1, i >= 0 ? i : 0);
                }

                a && 0 == a.length && t.pickerValueDefault != [0, 0, 0] && t._$emit("onConfirm"), a && a.length && t.getCityOrArea(e, function (a) {
                  if (t.areaData = a, t.areaDataList = t.areaData, 0 != t.pickerValueDefault[2]) {
                    var e = a.findIndex(function (a) {
                      return a.id == t.pickerValueDefault[2];
                    });
                    t.$set(t.pickerValue, 2, e >= 0 ? e : 0), t._$emit("onConfirm");
                  }
                });
              });
            });
          },
          show: function show() {
            var t = this;
            setTimeout(function () {
              t.showPicker = !0;
            }, 0);
          },
          maskClick: function maskClick() {
            this.pickerCancel();
          },
          pickerCancel: function pickerCancel() {
            this.showPicker = !1, this._$emit("onCancel");
          },
          pickerConfirm: function pickerConfirm(t) {
            this.showPicker = !1, this._$emit("onConfirm");
          },
          showPickerView: function showPickerView() {
            this.showPicker = !0;
          },
          pickerChange: function pickerChange(t) {
            var a = this,
                e = t.mp.detail.value;

            if (this.pickerValue[0] !== e[0]) {
              var i = this.provinceData[e[0]].id;
              this.getCityOrArea(i, function (t) {
                a.cityData = t, a.cityDataList = a.cityData, e[1] = 0, e[2] = 0;
                var i = a.cityData[0].id;
                a.getCityOrArea(i, function (t) {
                  a.areaData = t, a.areaDataList = a.areaData, a.pickerValue = e, a._$emit("onChange");
                });
              });
            } else if (this.pickerValue[1] !== e[1]) {
              var n = this.cityData[e[1]].id;
              this.getCityOrArea(n, function (t) {
                a.areaData = t, a.areaDataList = a.areaData, e[2] = 0, a.pickerValue = e, a._$emit("onChange");
              });
            }
          },
          _$emit: function _$emit(t) {
            var a = {
              label: this._getLabel(),
              value: this.pickerValue,
              cityCode: this._getCityCode(),
              code: this._getCode()
            };
            this.$emit(t, a);
          },
          _getLabel: function _getLabel() {
            var t = this.provinceDataList[this.pickerValue[0]].label + "-" + this.cityDataList[this.pickerValue[1]].label + "-" + (this.areaDataList[this.pickerValue[2]] ? this.areaDataList[this.pickerValue[2]].label : "");
            return t;
          },
          _getCode: function _getCode() {
            var t = this.provinceDataList[this.pickerValue[0]].value + "-" + this.cityDataList[this.pickerValue[1]].value + "-" + (this.areaDataList[this.pickerValue[2]] ? this.areaDataList[this.pickerValue[2]].value : 0);
            return t;
          },
          _getCityCode: function _getCityCode() {
            return this.areaDataList[this.pickerValue[2]] ? this.areaDataList[this.pickerValue[2]].value : 0;
          },
          getProvice: function getProvice(a) {
            this.$api.postAPI("common/getAllProvince").then(function (e) {
              if (t.hideLoading(), 0 != e.data.code) return t.showToast({
                title: e.data.msg,
                icon: "none",
                duration: 3e3
              });
              var i = 0 == e.data.code ? e.data.data : [],
                  n = i.map(function (t) {
                return t.value = t.id, t.label = t.name, t;
              });
              a && a(n);
            }).catch(function (a) {
              return t.hideLoading(), t.showToast({
                title: "网络错误",
                icon: "none",
                duration: 3e3
              });
            });
          },
          getCityOrArea: function getCityOrArea(a, e) {
            this.$api.postAPI("common/getArea/".concat(a)).then(function (a) {
              if (t.hideLoading(), 0 != a.data.code) return t.showToast({
                title: a.data.msg,
                icon: "none",
                duration: 3e3
              });
              var i = 0 == a.data.code ? a.data.data : [],
                  n = i.map(function (t) {
                return t.value = t.id, t.label = t.name, t;
              });
              e && e(n);
            }).catch(function (a) {
              return t.hideLoading(), t.showToast({
                title: "网络错误",
                icon: "none",
                duration: 3e3
              });
            });
          }
        }
      };
      a.default = e;
    }).call(this, e("6e42")["default"]);
  },
  "7e43": function e43(t, a, e) {
    "use strict";

    e.r(a);
    var i = e("93ea"),
        n = e("5c48");

    for (var r in n) {
      "default" !== r && function (t) {
        e.d(a, t, function () {
          return n[t];
        });
      }(r);
    }

    e("3003");
    var c = e("2877"),
        u = Object(c["a"])(n["default"], i["a"], i["b"], !1, null, null, null);
    a["default"] = u.exports;
  },
  "93ea": function ea(t, a, e) {
    "use strict";

    var i = function i() {
      var t = this,
          a = t.$createElement;
      t._self._c;
    },
        n = [];

    e.d(a, "a", function () {
      return i;
    }), e.d(a, "b", function () {
      return n;
    });
  },
  ed3f: function ed3f(t, a, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mpvue-citypicker/mpvueCityPicker-create-component', {
  'components/mpvue-citypicker/mpvueCityPicker-create-component': function componentsMpvueCitypickerMpvueCityPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7e43"));
  }
}, [['components/mpvue-citypicker/mpvueCityPicker-create-component']]]);
});
require('components/mpvue-citypicker/mpvueCityPicker.js');
__wxRoute = 'components/uni-collapse-item/uni-collapse-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-collapse-item/uni-collapse-item.js';

define('components/uni-collapse-item/uni-collapse-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-collapse-item/uni-collapse-item"], {
  3424: function _(n, t, e) {},
  aeb3: function aeb3(n, t, e) {
    "use strict";

    var i = e("3424"),
        a = e.n(i);
    a.a;
  },
  c22b: function c22b(n, t, e) {
    "use strict";

    var i = function i() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "a", function () {
      return i;
    }), e.d(t, "b", function () {
      return a;
    });
  },
  d2b5: function d2b5(n, t, e) {
    "use strict";

    (function (n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;

      var i = function i() {
        return e.e("components/uni-icon/uni-icon").then(e.bind(null, "89fb"));
      },
          a = {
        name: "uni-collapse-item",
        components: {
          uniIcon: i
        },
        data: function data() {
          var n = "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36));
          return {
            isOpen: this.open,
            height: 0,
            elId: n
          };
        },
        watch: {
          open: function open(n) {
            this.isOpen = n;
          }
        },
        computed: {
          index: function index() {
            return this.$parent.$children.indexOf(this);
          },
          nameSync: function nameSync() {
            return 0 === this.name ? this.index : this.name;
          },
          setCollapseCellClass: function setCollapseCellClass() {
            var n = ["uni-collapse-cell"];
            return !0 !== this.disabled && "true" !== this.disabled || n.push("uni-collapse-cell--disabled"), !0 !== this.isOpen && "true" !== this.isOpen || n.push("uni-collapse-cell--open"), n;
          },
          setActive: function setActive() {
            var n = [];
            return !0 !== this.isOpen && "true" !== this.isOpen || n.push("uni-active"), n;
          },
          setContClass: function setContClass() {
            var n = [];
            return !0 !== this.isOpen && "true" !== this.isOpen || n.push("uni-active"), "inner" === this.animation && n.push("uni-collapse-cell__inner"), n;
          }
        },
        props: {
          animation: {
            type: String,
            default: "outer"
          },
          title: String,
          name: {
            type: [Number, String],
            default: 0
          },
          disabled: {
            type: [Boolean, String],
            default: !1
          },
          open: {
            type: [Boolean, String],
            default: !1
          },
          thumb: String,
          titleObj: Object
        },
        created: function created() {
          var n = this.$parent || this.$root,
              t = n.$options.name;

          while (n && "uni-collapse" !== t) {
            n = n.$parent, n && (t = n.$options.name);
          }

          this.parent = n;
        },
        onReady: function onReady() {
          var t = this;
          n.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function (n) {
            t.height = n[0].height + "px";
          });
        },
        methods: {
          onClick: function onClick() {
            var n = this;

            if (!this.disabled) {
              var t = !!this.parent.accordion && this.parent.accordion;
              !0 !== t && "true" !== t || this.$parent.$children.forEach(function (t) {
                t !== n && (t.isOpen = !1);
              }), this.isOpen = !this.isOpen, this.parent.onChange && this.parent.onChange(this);
            }
          }
        }
      };

      t.default = a;
    }).call(this, e("6e42")["default"]);
  },
  d4dd: function d4dd(n, t, e) {
    "use strict";

    e.r(t);
    var i = e("d2b5"),
        a = e.n(i);

    for (var s in i) {
      "default" !== s && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(s);
    }

    t["default"] = a.a;
  },
  f3b2: function f3b2(n, t, e) {
    "use strict";

    e.r(t);
    var i = e("c22b"),
        a = e("d4dd");

    for (var s in a) {
      "default" !== s && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(s);
    }

    e("aeb3");
    var o = e("2877"),
        u = Object(o["a"])(a["default"], i["a"], i["b"], !1, null, null, null);
    t["default"] = u.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-collapse-item/uni-collapse-item-create-component', {
  'components/uni-collapse-item/uni-collapse-item-create-component': function componentsUniCollapseItemUniCollapseItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f3b2"));
  }
}, [['components/uni-collapse-item/uni-collapse-item-create-component']]]);
});
require('components/uni-collapse-item/uni-collapse-item.js');
__wxRoute = 'components/uni-collapse/uni-collapse';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-collapse/uni-collapse.js';

define('components/uni-collapse/uni-collapse.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-collapse/uni-collapse"], {
  "4a90": function a90(n, t, e) {},
  "7e50": function e50(n, t, e) {
    "use strict";

    e.r(t);
    var i = e("fe86"),
        a = e("90b0");

    for (var o in a) {
      "default" !== o && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(o);
    }

    e("da65");
    var r = e("2877"),
        c = Object(r["a"])(a["default"], i["a"], i["b"], !1, null, null, null);
    t["default"] = c.exports;
  },
  "8d24": function d24(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var i = {
      name: "uni-collapse",
      props: {
        accordion: {
          type: [Boolean, String],
          default: !1
        }
      },
      data: function data() {
        return {};
      },
      mounted: function mounted() {
        var n = this.$children,
            t = [];
        this.getChildren(n, t), this.childrens = t, !0 !== this.accordion && "true" !== this.accordion || t.forEach(function (n, e) {
          t.forEach(function (t, i) {
            e >= i || t.isOpen && (n.isOpen = !1);
          });
        });
      },
      methods: {
        onChange: function onChange(n) {
          var t = [];
          this.childrens.forEach(function (n, e) {
            n.isOpen && t.push(n.nameSync);
          }), this.$emit("change", t);
        },
        getChildren: function getChildren(n, t) {
          for (var e = 0, i = n.length; e < i; e++) {
            var a = n[e].$options.name;
            "uni-collapse-item" !== a ? n[e].$children && this.getChildren(n[e].$children, t) : t.push(n[e]);
          }
        }
      }
    };
    t.default = i;
  },
  "90b0": function b0(n, t, e) {
    "use strict";

    e.r(t);
    var i = e("8d24"),
        a = e.n(i);

    for (var o in i) {
      "default" !== o && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(o);
    }

    t["default"] = a.a;
  },
  da65: function da65(n, t, e) {
    "use strict";

    var i = e("4a90"),
        a = e.n(i);
    a.a;
  },
  fe86: function fe86(n, t, e) {
    "use strict";

    var i = function i() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "a", function () {
      return i;
    }), e.d(t, "b", function () {
      return a;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-collapse/uni-collapse-create-component', {
  'components/uni-collapse/uni-collapse-create-component': function componentsUniCollapseUniCollapseCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7e50"));
  }
}, [['components/uni-collapse/uni-collapse-create-component']]]);
});
require('components/uni-collapse/uni-collapse.js');
__wxRoute = 'components/uni-countdown/uni-countdown';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-countdown/uni-countdown.js';

define('components/uni-countdown/uni-countdown.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-countdown/uni-countdown"], {
  "2bf9": function bf9(t, e, n) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return u;
    });
  },
  "3a23": function a23(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("7afb"),
        u = n.n(o);

    for (var i in o) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(i);
    }

    e["default"] = u.a;
  },
  "7afb": function afb(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var o = {
      name: "uni-countdown",
      props: {
        showDay: {
          type: Boolean,
          default: !0
        },
        showColon: {
          type: Boolean,
          default: !0
        },
        backgroundColor: {
          type: String,
          default: "#FFFFFF"
        },
        borderColor: {
          type: String,
          default: "#000000"
        },
        color: {
          type: String,
          value: "#000000"
        },
        splitorColor: {
          type: String,
          default: "#000000"
        },
        day: {
          type: Number,
          default: 0
        },
        hour: {
          type: Number,
          default: 0
        },
        minute: {
          type: Number,
          default: 0
        },
        second: {
          type: Number,
          default: 0
        }
      },
      data: function data() {
        return {
          timer: null,
          d: "00",
          h: "00",
          i: "00",
          s: "00",
          leftTime: 0,
          seconds: 0
        };
      },
      created: function created(t) {
        var e = this;
        this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second), this.second <= 0 || (this.countDown(), this.timer = setInterval(function () {
          e.seconds--, e.seconds < 0 ? e.timeUp() : e.countDown();
        }, 1e3));
      },
      beforeDestroy: function beforeDestroy() {
        clearInterval(this.timer);
      },
      methods: {
        toSeconds: function toSeconds(t, e, n, o) {
          return 60 * t * 60 * 24 + 60 * e * 60 + 60 * n + o;
        },
        timeUp: function timeUp() {
          clearInterval(this.timer), this.$emit("timeup");
        },
        countDown: function countDown() {
          var t = this.seconds,
              e = 0,
              n = 0,
              o = 0,
              u = 0;
          t > 0 ? (e = Math.floor(t / 86400), n = Math.floor(t / 3600) - 24 * e, o = Math.floor(t / 60) - 24 * e * 60 - 60 * n, u = Math.floor(t) - 24 * e * 60 * 60 - 60 * n * 60 - 60 * o) : this.timeUp(), e < 10 && (e = "0" + e), n < 10 && (n = "0" + n), o < 10 && (o = "0" + o), u < 10 && (u = "0" + u), this.d = e, this.h = n, this.i = o, this.s = u;
        }
      }
    };
    e.default = o;
  },
  c7cc: function c7cc(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("2bf9"),
        u = n("3a23");

    for (var i in u) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(i);
    }

    n("d378");
    var r = n("2877"),
        a = Object(r["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    e["default"] = a.exports;
  },
  d378: function d378(t, e, n) {
    "use strict";

    var o = n("e169"),
        u = n.n(o);
    u.a;
  },
  e169: function e169(t, e, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-countdown/uni-countdown-create-component', {
  'components/uni-countdown/uni-countdown-create-component': function componentsUniCountdownUniCountdownCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("c7cc"));
  }
}, [['components/uni-countdown/uni-countdown-create-component']]]);
});
require('components/uni-countdown/uni-countdown.js');
__wxRoute = 'components/uni-countdown/uni-down';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-countdown/uni-down.js';

define('components/uni-countdown/uni-down.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-countdown/uni-down"], {
  "03b7": function b7(t, n, e) {},
  "14e0": function e0(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return i;
    });
  },
  "73df": function df(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("14e0"),
        i = e("8d2b");

    for (var u in i) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(u);
    }

    e("b03b");
    var r = e("2877"),
        a = Object(r["a"])(i["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = a.exports;
  },
  "8d2b": function d2b(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("b51c"),
        i = e.n(o);

    for (var u in o) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(u);
    }

    n["default"] = i.a;
  },
  b03b: function b03b(t, n, e) {
    "use strict";

    var o = e("03b7"),
        i = e.n(o);
    i.a;
  },
  b51c: function b51c(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "uni-countdown",
      props: {
        showDay: {
          type: Boolean,
          default: !0
        },
        showColon: {
          type: Boolean,
          default: !0
        },
        backgroundColor: {
          type: String,
          default: "#FFFFFF"
        },
        borderColor: {
          type: String,
          default: "#000000"
        },
        color: {
          type: String,
          value: "#000000"
        },
        splitorColor: {
          type: String,
          default: "#FFFFFF"
        },
        day: {
          type: Number,
          default: 0
        },
        hour: {
          type: Number,
          default: 0
        },
        minute: {
          type: Number,
          default: 0
        },
        second: {
          type: Number,
          default: 0
        }
      },
      data: function data() {
        return {
          timer: null,
          d: "00",
          h: "00",
          i: "00",
          s: "00",
          leftTime: 0,
          seconds: 0
        };
      },
      created: function created(t) {
        this.initData();
      },
      beforeDestroy: function beforeDestroy() {
        clearInterval(this.timer);
      },
      methods: {
        initData: function initData() {
          var t = this;
          this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second), this.second <= 0 || (this.countDown(), this.timer = setInterval(function () {
            t.seconds--, t.seconds < 0 ? t.timeUp() : t.countDown();
          }, 1e3));
        },
        toSeconds: function toSeconds(t, n, e, o) {
          return 60 * t * 60 * 24 + 60 * n * 60 + 60 * e + o;
        },
        timeUp: function timeUp() {
          clearInterval(this.timer), this.$emit("timeup");
        },
        countDown: function countDown() {
          var t = this.seconds,
              n = 0,
              e = 0,
              o = 0,
              i = 0;
          t > 0 ? (n = Math.floor(t / 86400), e = Math.floor(t / 3600) - 24 * n, o = Math.floor(t / 60) - 24 * n * 60 - 60 * e, i = Math.floor(t) - 24 * n * 60 * 60 - 60 * e * 60 - 60 * o) : this.timeUp(), n < 10 && (n = "0" + n), e < 10 && (e = "0" + e), o < 10 && (o = "0" + o), i < 10 && (i = "0" + i), this.d = n, this.h = e, this.i = o, this.s = i;
        }
      }
    };
    n.default = o;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-countdown/uni-down-create-component', {
  'components/uni-countdown/uni-down-create-component': function componentsUniCountdownUniDownCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("73df"));
  }
}, [['components/uni-countdown/uni-down-create-component']]]);
});
require('components/uni-countdown/uni-down.js');
__wxRoute = 'components/uni-icon/uni-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-icon/uni-icon.js';

define('components/uni-icon/uni-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-icon/uni-icon"], {
  "2c4b": function c4b(n, t, e) {},
  "3dce": function dce(n, t, e) {
    "use strict";

    var u = e("2c4b"),
        i = e.n(u);
    i.a;
  },
  7481: function _(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        i = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return i;
    });
  },
  "89fb": function fb(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("7481"),
        i = e("e863");

    for (var c in i) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(c);
    }

    e("3dce");
    var o = e("2877"),
        r = Object(o["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = r.exports;
  },
  b3f3: function b3f3(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "uni-icon",
      props: {
        type: String,
        color: String,
        size: [Number, String]
      },
      computed: {
        fontSize: function fontSize() {
          return "".concat(this.size, "px");
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = u;
  },
  e863: function e863(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("b3f3"),
        i = e.n(u);

    for (var c in u) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(c);
    }

    t["default"] = i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-icon/uni-icon-create-component', {
  'components/uni-icon/uni-icon-create-component': function componentsUniIconUniIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("89fb"));
  }
}, [['components/uni-icon/uni-icon-create-component']]]);
});
require('components/uni-icon/uni-icon.js');
__wxRoute = 'components/uni-load-more/uni-load-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-load-more/uni-load-more.js';

define('components/uni-load-more/uni-load-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-load-more/uni-load-more"], {
  "1df2": function df2(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("4144"),
        u = e.n(o);

    for (var r in o) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  "28ae": function ae(t, n, e) {},
  4144: function _(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "uni-load-more",
      props: {
        status: {
          type: String,
          default: "more"
        },
        showIcon: {
          type: Boolean,
          default: !0
        },
        color: {
          type: String,
          default: "#777777"
        },
        contentText: {
          type: Object,
          default: function _default() {
            return {
              contentdown: "正在加载...",
              contentrefresh: "正在加载...",
              contentnomore: "没有更多数据了"
            };
          }
        }
      },
      data: function data() {
        return {};
      }
    };
    n.default = o;
  },
  "4f10": function f10(t, n, e) {
    "use strict";

    var o = e("28ae"),
        u = e.n(o);
    u.a;
  },
  "5c32": function c32(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  fd3c: function fd3c(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("5c32"),
        u = e("1df2");

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    e("4f10");
    var a = e("2877"),
        c = Object(a["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-load-more/uni-load-more-create-component', {
  'components/uni-load-more/uni-load-more-create-component': function componentsUniLoadMoreUniLoadMoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("fd3c"));
  }
}, [['components/uni-load-more/uni-load-more-create-component']]]);
});
require('components/uni-load-more/uni-load-more.js');
__wxRoute = 'components/uni-number-box/uni-number-box';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-number-box/uni-number-box.js';

define('components/uni-number-box/uni-number-box.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-number-box/uni-number-box"], {
  "03b9": function b9(t, e, u) {
    "use strict";

    u.r(e);
    var n = u("6e75"),
        i = u.n(n);

    for (var a in n) {
      "default" !== a && function (t) {
        u.d(e, t, function () {
          return n[t];
        });
      }(a);
    }

    e["default"] = i.a;
  },
  "0d30": function d30(t, e, u) {
    "use strict";

    u.r(e);
    var n = u("922b"),
        i = u("03b9");

    for (var a in i) {
      "default" !== a && function (t) {
        u.d(e, t, function () {
          return i[t];
        });
      }(a);
    }

    u("12cb");
    var l = u("2877"),
        s = Object(l["a"])(i["default"], n["a"], n["b"], !1, null, null, null);
    e["default"] = s.exports;
  },
  "12cb": function cb(t, e, u) {
    "use strict";

    var n = u("8195"),
        i = u.n(n);
    i.a;
  },
  "6e75": function e75(t, e, u) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = {
      name: "uni-number-box",
      props: {
        value: {
          type: Number,
          default: 1
        },
        min: {
          type: Number,
          default: 0
        },
        max: {
          type: Number,
          default: 100
        },
        step: {
          type: Number,
          default: 1
        },
        disabled: {
          type: Boolean,
          default: !1
        }
      },
      data: function data() {
        return {
          inputValue: this.value
        };
      },
      computed: {
        disableSubtract: function disableSubtract() {
          return this.inputValue <= this.min;
        },
        disableAdd: function disableAdd() {
          return this.inputValue >= this.max;
        }
      },
      watch: {
        value: function value(t) {
          this.inputValue = t;
        },
        inputValue: function inputValue(t) {
          this.$emit("change", t);
        }
      },
      methods: {
        _calcValue: function _calcValue(t) {
          if (!this.disabled) {
            var e = this._getDecimalScale(),
                u = this.inputValue * e,
                n = this.step * e;

            "subtract" === t ? u -= n : "add" === t && (u += n), u < this.min || u > this.max || (this.inputValue = u / e);
          }
        },
        _getDecimalScale: function _getDecimalScale() {
          var t = 1;
          return ~~this.step !== this.step && (t = Math.pow(10, (this.step + "").split(".")[1].length)), t;
        },
        _onBlur: function _onBlur(t) {
          var e = t.detail.value;
          e ? (e = +e, e > this.max ? e = this.max : e < this.min && (e = this.min), this.inputValue = e) : this.inputValue = 0;
        }
      }
    };
    e.default = n;
  },
  8195: function _(t, e, u) {},
  "922b": function b(t, e, u) {
    "use strict";

    var n = function n() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    u.d(e, "a", function () {
      return n;
    }), u.d(e, "b", function () {
      return i;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-number-box/uni-number-box-create-component', {
  'components/uni-number-box/uni-number-box-create-component': function componentsUniNumberBoxUniNumberBoxCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0d30"));
  }
}, [['components/uni-number-box/uni-number-box-create-component']]]);
});
require('components/uni-number-box/uni-number-box.js');
__wxRoute = 'components/uni-popup/YYT-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-popup/YYT-popup.js';

define('components/uni-popup/YYT-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-popup/YYT-popup"], {
  "1be9": function be9(t, n, i) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var i = {
        props: {
          open: {
            type: Boolean,
            default: !1
          },
          position: {
            type: String,
            default: "center"
          },
          percent: Number,
          background: {
            type: String,
            default: "#fff"
          }
        },
        data: function data() {
          return {
            openSync: !1,
            positionSync: String,
            show: !1,
            size: Object
          };
        },
        onLoad: function onLoad() {
          var t = this;
          this.size = this._size(), this.openSync = this.open, this.positionSync = this.position, setTimeout(function () {
            t.show = t.open;
          }, 100);
        },
        watch: {
          open: function open(t) {
            var n = this;
            this.size = this._size(), this.openSync = t, this.positionSync = this.position, setTimeout(function () {
              n.show = t;
            }, 100);
          },
          percent: function percent() {
            this.size = this._size();
          }
        },
        methods: {
          close: function close() {
            var t = this;
            this.show = !1, setTimeout(function () {
              t.openSync = !1, t.$emit("close");
            }, 300);
          },
          _size: function _size() {
            var n,
                i,
                e,
                o,
                s = t.getSystemInfoSync(),
                c = ["center", "top", "bottom", "ad"];
            return c.includes(this.position) ? (n = "100%", this.percent > 0 ? i = s.windowHeight * (this.percent / 100) + "px" : (i = "auto", o = .6 * s.windowHeight + "px")) : (i = "100%", this.percent > 0 ? n = s.windowWidth * (this.percent / 100) + "px" : (n = "auto", e = .8 * s.windowWidth + "px")), {
              width: n,
              height: i,
              maxWidth: e,
              maxHeight: o
            };
          },
          _moveHandle: function _moveHandle() {}
        }
      };
      n.default = i;
    }).call(this, i("6e42")["default"]);
  },
  4128: function _(t, n, i) {
    "use strict";

    i.r(n);
    var e = i("59b2"),
        o = i("c231");

    for (var s in o) {
      "default" !== s && function (t) {
        i.d(n, t, function () {
          return o[t];
        });
      }(s);
    }

    i("6871");
    var c = i("2877"),
        u = Object(c["a"])(o["default"], e["a"], e["b"], !1, null, null, null);
    n["default"] = u.exports;
  },
  "59b2": function b2(t, n, i) {
    "use strict";

    var e = function e() {
      var t = this,
          n = t.$createElement;
      t._self._c;
      t._isMounted || (t.e0 = function (n) {
        "ad" != t.positionSync && t.close();
      });
    },
        o = [];

    i.d(n, "a", function () {
      return e;
    }), i.d(n, "b", function () {
      return o;
    });
  },
  6871: function _(t, n, i) {
    "use strict";

    var e = i("c39f"),
        o = i.n(e);
    o.a;
  },
  c231: function c231(t, n, i) {
    "use strict";

    i.r(n);
    var e = i("1be9"),
        o = i.n(e);

    for (var s in e) {
      "default" !== s && function (t) {
        i.d(n, t, function () {
          return e[t];
        });
      }(s);
    }

    n["default"] = o.a;
  },
  c39f: function c39f(t, n, i) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-popup/YYT-popup-create-component', {
  'components/uni-popup/YYT-popup-create-component': function componentsUniPopupYYTPopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4128"));
  }
}, [['components/uni-popup/YYT-popup-create-component']]]);
});
require('components/uni-popup/YYT-popup.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index","components/uni-load-more/uni-load-more"],{"1df2":function(t,e,n){"use strict";n.r(e);var a=n("4144"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"28ae":function(t,e,n){},"3de4":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},4144:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"正在加载...",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=a},"470e":function(t,e,n){"use strict";n.r(e);var a=n("749f"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"4f10":function(t,e,n){"use strict";var a=n("28ae"),i=n.n(a);i.a},"5c32":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"749f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a34a"));i(n("fd3c"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,a,i,o,r){try{var u=t[o](r),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(a,i)}function r(t){return function(){var e=this,n=arguments;return new Promise(function(a,i){var r=t.apply(e,n);function u(t){o(r,a,i,u,c,"next",t)}function c(t){o(r,a,i,u,c,"throw",t)}u(void 0)})}}var u=function(){return n.e("components/uni-countdown/uni-countdown").then(n.bind(null,"c7cc"))},c={components:{uniCountdown:u},data:function(){return{afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,imgList:[],cateMaskState:0,cateList:[],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,sliderlist:[],imageURL:["../../static/img/header/pic-chuji-n.png","../../static/img/header/pic-zhongji-n.png","../../static/img/header/pic-gaoji-n.png"],scenesList:[],topNotice:[],productList:[],timeList:[],isFirstLoad:!0}},onLoad:function(){this.getScenesData(),this.getData()},onShow:function(){this.isFirstLoad||this.getData()},methods:{toggleCateMask:function(t){var e=this;console.log(1," at pages\\index\\index.vue:134");var n="show"===t?10:300,a="show"===t?1:0;this.cateMaskState=2,setTimeout(function(){e.cateMaskState=a},n)},recharge:function(){t.navigateTo({url:"../set/double"})},register:function(){t.navigateTo({url:"../set/send"})},sign:function(){t.navigateTo({url:"../set/sign"})},getScenesData:function(){var e=r(a.default.mark(function e(){var n,i;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n={currentPage:1,data:{},pageSize:10},e.next=3,this.$api.postAPI("scene/querySceneList",n);case 3:i=e.sent,0==i.data.code?this.scenesList=i.data.data.data:t.showToast({title:i.data.msg,icon:"none",duration:3e3});case 5:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),getTopNotice:function(){var e=this;this.$api.postAPI("period/queryWinInfoLunbo").then(function(n){if(t.hideLoading(),0!=n.data.code)return t.showToast({title:n.data.msg,icon:"none",duration:3e3});var a=n.data.data,i=[],o=!0,r=!1,u=void 0;try{for(var c,s=a[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){var d=c.value;i.push("喜报：恭喜".concat(d.nickName,"玩家，猜中猜猜豆得").concat(d.price||0,"金豆！"))}}catch(f){r=!0,u=f}finally{try{o||null==s.return||s.return()}finally{if(r)throw u}}e.topNotice=i}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},getData:function(){var e=this,n={currentPage:1,data:{executeStatus:1,isRecommend:1},pageSize:20};this.$api.postAPI("period/queryPeriodList",n).then(function(n){if(e.isFirstLoad=!1,0!=n.data.code)return t.showToast({title:n.data.msg,icon:"none",duration:3e3});e.productList=n.data.data.data,e.handlerData(e.productList,n.data.timestamp)}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},handlerData:function(t,e){var n=this,a=new Date(e),i=!0,o=!1,r=void 0;try{for(var u,c=function(){var t=u.value,e=new Date(t.guessEndTime),i=e.getTime()-a.getTime();n.$set(t,"isRefreshTime",!1),n.$nextTick(function(){t.endTime=i>0?n.getMSDate(i):[0,0,0],t.isRefreshTime=!0,n.$set(t,"isRefreshTime",!0)})},s=t[Symbol.iterator]();!(i=(u=s.next()).done);i=!0)c()}catch(d){o=!0,r=d}finally{try{i||null==s.return||s.return()}finally{if(o)throw r}}},getMSDate:function(t){Math.floor(t/864e5);var e=t%864e5,n=Math.floor(e/36e5),a=e%36e5,i=Math.floor(a/6e4),o=a%6e4,r=Math.round(o/1e3);return[n,i,r]},toDetail:function(e){t.navigateTo({url:"/pages/product/detail?periodId=".concat(e.periodId)})},timeup:function(t){var e=this;this.isFirstLoad||-1==this.timeList.findIndex(function(e){return e==t.guessEndTime})&&(this.timeList.push(t.guessEndTime),setTimeout(function(){e.getData()},1e3))}},onNavigationBarButtonTap:function(t){console.log("监听到原生标题栏按钮点击事件"," at pages\\index\\index.vue:255"),console.log(t," at pages\\index\\index.vue:256")}};e.default=c}).call(this,n("6e42")["default"])},"818a":function(t,e,n){},"884c":function(t,e,n){"use strict";var a=n("818a"),i=n.n(a);i.a},c375:function(t,e,n){"use strict";n.r(e);var a=n("3de4"),i=n("470e");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("884c");var r=n("2877"),u=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},fd3c:function(t,e,n){"use strict";n.r(e);var a=n("5c32"),i=n("1df2");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("4f10");var r=n("2877"),u=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports}},[["3865","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/session/primarys';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/session/primarys.js';

define('pages/session/primarys.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/session/primarys"],{"0e58":function(t,e,n){},"1c8b":function(t,e,n){"use strict";var a=n("0e58"),i=n.n(a);i.a},"27b8":function(t,e,n){"use strict";n.r(e);var a=n("5044"),i=n("a5c5");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("1c8b");var o=n("2877"),s=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},4406:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,a,i,r,o){try{var s=t[r](o),u=s.value}catch(d){return void n(d)}s.done?e(u):Promise.resolve(u).then(a,i)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(a,i){var o=t.apply(e,n);function s(t){r(o,a,i,s,u,"next",t)}function u(t){r(o,a,i,s,u,"throw",t)}s(void 0)})}}var s=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"fd3c"))},u=function(){return n.e("components/uni-countdown/uni-countdown").then(n.bind(null,"c7cc"))},d=[],c={components:{uniLoadMore:s,uniCountdown:u},data:function(){return{currentTime:"",isFirstLoad:!0,tabCurrentIndex:0,pageSize:10,isSceneDataLoad:!1,isSale:"",isSaleMsg:"",navList:[{currentPageIndex:1,text:"初级场",sceneid:9,status:0,topTipsStr:"",startTime:[0,0,0],endTime:[0,0,0],loadingType:"more",orderList:[],tryCount:0},{currentPageIndex:1,text:"中级场",sceneid:10,status:0,topTipsStr:"",startTime:[0,0,0],endTime:[0,0,0],loadingType:"more",orderList:[],tryCount:0},{currentPageIndex:1,text:"高级场",sceneid:11,status:0,topTipsStr:"",startTime:[0,0,0],endTime:[0,0,0],loadingType:"more",orderList:[],tryCount:0}]}},onLoad:function(){this.getSceneData()},onShow:function(){var t=this;if(!this.isFirstLoad){var e={};e=JSON.parse(JSON.stringify(d)),this.navList=e,setTimeout(function(){t.loadData("tabChange")},200)}},methods:{navBack:function(){t.switchTab({url:"/pages/index/index"})},tabClick:function(t){this.tabCurrentIndex=t},changeTab:function(){var t=o(a.default.mark(function t(e){var n,i;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.tabCurrentIndex=e.target.current,n=this.tabCurrentIndex,i=this.navList[n],i.currentPageIndex=1,this.loadData("tabChange");case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getSceneData:function(){var e=this;if(this.isSceneDataLoad)return this.loadData();this.$api.postAPI("scene/querySceneList",{currentPage:1,data:{},pageSize:10}).then(function(n){if(0==n.data.code){var a=n.data.data.data,i=[];if(a&&a.length>0){var r=!0,o=!1,s=void 0;try{for(var u,c=a[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var l=u.value;i.push({currentPageIndex:1,text:l.name,sceneid:l.id,status:0,topTipsStr:"",startTime:[0,0,0],endTime:[0,0,0],loadingType:"more",orderList:[],tryCount:0})}}catch(h){o=!0,s=h}finally{try{r||null==c.return||c.return()}finally{if(o)throw s}}var f={};f=JSON.parse(JSON.stringify(i)),d=f,e.navList=i,e.isSceneDataLoad=!0}e.loadData()}else t.showToast({title:n.data.msg,icon:"none",duration:3e3})}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络繁忙，出错了",icon:"none",duration:3e3})})},loadData:function(t){var e=this.tabCurrentIndex,n=this.navList[e];("tabChange"==t||"loading"!==n.loadingType&&"noMore"!==n.loadingType)&&(n.loadingType="loading",this.getData(this.tabCurrentIndex,null,!0))},getData:function(e,n,a){var i=this;e=e||0;var r=this.navList[e],o={currentPage:r.currentPageIndex,data:{executeStatus:1,sceneId:r.sceneid},pageSize:this.pageSize};this.$api.postAPI("period/queryPeriodList",o).then(function(e){if(t.hideLoading(),i.$set(r,"loaded",!0),i.isFirstLoad=!1,i.isSale=!e.data.rest,i.isSaleMsg=e.data.rest?e.data.msg:"",0!=e.data.code)return t.showToast({title:e.data.msg,icon:"none",duration:3e3});var o=e.data.data.data;if(n&&!o.length)return n();n&&(r.orderList=[]),o.length&&(a&&(r.orderList=[]),r.tryCount=0,r.orderList.length>0?(i.handlerData(r,e.data.timestamp,o),r.orderList=r.orderList.concat(o),data.length<i.pageSize?r.loadingType="noMore":(r.currentPageIndex++,r.loadingType="more")):(r.orderList=o,i.handlerData(r,e.data.timestamp,o),r.orderList.length<i.pageSize?r.loadingType="noMore":(r.currentPageIndex++,r.loadingType="more")))}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},handlerData:function(t,e,n){var a=new Date(e),i=new Date(t.orderList[0].guessStartTime),r=new Date(t.orderList[0].guessEndTime),o=i.getTime()-a.getTime(),s=r.getTime()-a.getTime();t.endTime=s>0?this.getMSDate(s):[0,0,0],o>0?(t.status=0,t.topTipsStr="距开始"):o<=0&&s>0?(t.status=1,t.topTipsStr="距结束"):s<=0&&(t.status=2,t.topTipsStr="已结束")},getMSDate:function(t){Math.floor(t/864e5);var e=t%864e5,n=Math.floor(e/36e5),a=e%36e5,i=Math.floor(a/6e4),r=a%6e4,o=Math.round(r/1e3);return[n,i,o]},timeup:function(t,e){var n=this;console.log("-----换购 中心列表 time up请求----"," at pages\\session\\primarys.vue:293"),t.loaded&&(t.status=2,t.topTipsStr="获取期号中...",t.currentPageIndex=1,setTimeout(function(){n.setGetData(t,e)},1e3))},setGetData:function(t,e){var n=this,a=t.tryCount>30?5e3:2e3;t.tryCount>100||(this.getData(e,function(){setTimeout(function(){n.setGetData(t,e)},a)}),t.tryCount++)},getNexQi:function(e,n){if(!this.isSale)return t.showToast({title:"凌晨02:00-07:00停售，请休息会再来",icon:"none",duration:3e3});this.timeup(e,n)},toDetail:function(e,n){1==e&&t.navigateTo({url:"/pages/product/detail?periodId=".concat(n)})}}};e.default=c}).call(this,n("6e42")["default"])},5044:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},a5c5:function(t,e,n){"use strict";n.r(e);var a=n("4406"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a}},[["68f5","common/runtime","common/vendor"]]]);
});
require('pages/session/primarys.js');
__wxRoute = 'pages/find/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/find/index.js';

define('pages/find/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/find/index"],{3895:function(n,t,e){"use strict";e.r(t);var u=e("e1ec"),r=e("7168");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);var c=e("2877"),o=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},7168:function(n,t,e){"use strict";e.r(t);var u=e("801a"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a},"801a":function(n,t,e){},e1ec:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})}},[["09ae","common/runtime","common/vendor"]]]);
});
require('pages/find/index.js');
__wxRoute = 'pages/category/category';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/category/category.js';

define('pages/category/category.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{"0478":function(t,i,a){"use strict";a.r(i);var e=a("a778"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,function(){return e[t]})}(o);i["default"]=n.a},"3a18":function(t,i,a){},a4dc:function(t,i,a){"use strict";a.r(i);var e=a("c44f"),n=a("0478");for(var o in n)"default"!==o&&function(t){a.d(i,t,function(){return n[t]})}(o);a("b32e");var r=a("2877"),s=Object(r["a"])(n["default"],e["a"],e["b"],!1,null,null,null);i["default"]=s.exports},a778:function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{list:[],tabCur:1,mainCur:1,verticalNavTop:0,load:!0}},onLoad:function(){t.showLoading({title:"加载中...",mask:!0});var i=[{id:1,name:"珠宝配饰"},{id:2,name:"平板电脑"},{id:3,name:"生活家电"},{id:4,name:"数码影音"},{id:5,name:"其它专区"},{id:6,name:"美食天地"},{id:7,name:"运动户外"},{id:8,name:"美妆个护"},{id:9,name:"家居生活"}];this.list=i,this.listCur=i[0]},onReady:function(){t.hideLoading()},methods:{TabSelect:function(t){this.tabCur=t.currentTarget.dataset.id,this.mainCur=t.currentTarget.dataset.id,this.verticalNavTop=50*(t.currentTarget.dataset.id-1),this.isClickLeft=!0},VerticalMain:function(i){var a=this,e=0;if(this.load){for(var n=function(i){var n=t.createSelectorQuery().select("#main-"+a.list[i].id);n.fields({size:!0},function(t){a.list[i].top=e,e+=t.height,a.list[i].bottom=e}).exec()},o=0;o<this.list.length;o++)n(o);this.load=!1}if(this.isClickLeft)this.isClickLeft=!1;else{var r=i.detail.scrollTop+10;for(o=0;o<this.list.length;o++)if(r>this.list[o].top&&r<this.list[o].bottom)return this.verticalNavTop=50*(this.list[o].id-1),this.tabCur=this.list[o].id,console.log(r," at pages\\category\\category.vue:189"),!1}},goToDetail:function(){t.navigateTo({url:"/pages/product/detail",animationType:"pop-in",animationDuration:200})}}};i.default=a}).call(this,a("6e42")["default"])},b32e:function(t,i,a){"use strict";var e=a("3a18"),n=a.n(e);n.a},c44f:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement;t._self._c},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})}},[["a82c","common/runtime","common/vendor"]]]);
});
require('pages/category/category.js');
__wxRoute = 'pages/category/activity';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/category/activity.js';

define('pages/category/activity.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/activity"],{9063:function(n,t,e){},"97f4":function(n,t,e){"use strict";e.r(t);var u=e("c878"),r=e("ee4d");for(var c in r)"default"!==c&&function(n){e.d(t,n,function(){return r[n]})}(c);e("beb0");var a=e("2877"),o=Object(a["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},beb0:function(n,t,e){"use strict";var u=e("f652"),r=e.n(u);r.a},c878:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})},ee4d:function(n,t,e){"use strict";e.r(t);var u=e("9063"),r=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=r.a},f652:function(n,t,e){}},[["b50f","common/runtime","common/vendor"]]]);
});
require('pages/category/activity.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"0b0f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,a,r,i,s){try{var o=t[i](s),u=o.value}catch(c){return void n(c)}o.done?e(u):Promise.resolve(u).then(a,r)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var s=t.apply(e,n);function o(t){i(s,a,r,o,u,"next",t)}function u(t){i(s,a,r,o,u,"throw",t)}o(void 0)})}}var o={data:function(){return{isFirstLoad:!0,afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,imageURL:["../../static/img/user/Groups.png","../../static/img/header/pic-zhongji-n.png","../../static/img/header/pic-gaoji-n.png"],isLogin:!1,nickName:"",giftPoints:0,points:0,panicBuyingNum:0,conformOrderNum:0,userAdvator:""}},onLoad:function(){var t=this;this.initData(),setTimeout(function(){t.isFirstLoad=!1},0)},onShow:function(){this.isFirstLoad||this.initData()},onNavigationBarButtonTap:function(e){console.log(1," at pages\\user\\user.vue:180"),t.navigateTo({url:"/pages/set/set"})},methods:{initData:function(){var e=this,n=t.getStorageSync("token"),a=t.getStorageSync("userInfo_token");return n&&a?a.hasPwd?(this.getUserInfo(),this.getMyPoints(),void setTimeout(function(){e.getawaitNumber()},1e3)):t.navigateTo({url:"/pages/password/set"}):t.navigateTo({url:"/pages/login/login?url=user"})},getUserInfo:function(){var e=s(a.default.mark(function e(){var n,r;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.postAPI("users/queryUser");case 2:if(n=e.sent,r=n.data,this.isFirstLoad=!1,0!=r.code){e.next=12;break}this.isLogin=!0,this.nickName=r.data.nickName,this.userAdvator="../../static/img/user/Mask.png",t.setStorageSync("userInfo",r.data),e.next=14;break;case 12:return this.userAdvator="../../static/img/user/Mask0.png",e.abrupt("return",t.showToast({title:r.msg,icon:"none",duration:3e3}));case 14:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),getMyPoints:function(){var e=s(a.default.mark(function e(){var n,r;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.postAPI("points/detail");case 2:if(n=e.sent,r=n.data,0!=r.code){e.next=9;break}this.giftPoints=r.data.giftPoints,this.points=r.data.points,e.next=10;break;case 9:return e.abrupt("return",t.showToast({title:r.msg,icon:"none",duration:3e3}));case 10:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),getawaitNumber:function(){var e=s(a.default.mark(function e(){var n,r;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.postAPI("guess/myGuessCount");case 2:if(n=e.sent,r=n.data,0!=r.code){e.next=9;break}this.panicBuyingNum=r.data.panicBuyingNum,this.conformOrderNum=r.data.conformOrderNum,e.next=10;break;case 9:return e.abrupt("return",t.showToast({title:r.msg,icon:"none",duration:3e3}));case 10:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),toUserInfo:function(){t.navigateTo({url:"/pages/user/userInfo"})},navTo:function(e){t.navigateTo({url:e})},toPage:function(e){var n="";switch(e){case 1:n="/pages/set/sign";break;case 2:n="/pages/user/venosa";break;case 3:n="/pages/product/store";break}n&&t.navigateTo({url:n})}}};e.default=o}).call(this,n("6e42")["default"])},"23b3":function(t,e,n){},"55aa":function(t,e,n){"use strict";n.r(e);var a=n("6afd"),r=n("d75e");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("8331");var s=n("2877"),o=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},"6afd":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},8331:function(t,e,n){"use strict";var a=n("23b3"),r=n.n(a);r.a},d75e:function(t,e,n){"use strict";n.r(e);var a=n("0b0f"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a}},[["70cf","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/product/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/detail.js';

define('pages/product/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/detail"],{"22a3":function(t,e,i){},"51c5":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(i("a34a")),n=o(i("3116"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e,i,a,n,o,r){try{var s=t[o](r),c=s.value}catch(u){return void i(u)}s.done?e(c):Promise.resolve(c).then(a,n)}function s(t){return function(){var e=this,i=arguments;return new Promise(function(a,n){var o=t.apply(e,i);function s(t){r(o,a,n,s,c,"next",t)}function c(t){r(o,a,n,s,c,"throw",t)}s(void 0)})}}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.forEach(function(e){u(t,e,i[e])})}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var d,h=function(){return i.e("components/uni-countdown/uni-down").then(i.bind(null,"73df"))},l=function(){return i.e("components/uni-number-box/uni-number-box").then(i.bind(null,"0d30"))},p=function(){return i.e("components/uni-collapse/uni-collapse").then(i.bind(null,"7e50"))},f=function(){return i.e("components/uni-collapse-item/uni-collapse-item").then(i.bind(null,"f3b2"))},g=null,m=null,T=null,w={components:{uniNumberBox:l,uniCollapse:p,uniCollapseItem:f,uniCountdown:h},data:function(){return{indicatorDots:!0,autoplay:!0,interval:3e3,duration:1e3,cWidth:"",cHeight:"",cWidthZhu:"40",pixelRatio:1,serverData:"",periodId:"",periodData:{},periodHistoryData:{},periodCurrentPriceData:[],lastUpdateTime:"",minPrice:0,maxPrice:0,newLottery:{},titleObj:null,isTimeUpLoading:!1,timeTipText:"",timeTipText1:"",currentTime:"",showDateTime:!1,countdownTime:{h:0,m:0,s:0},isRefreshTime:!0,woDeYC:{},woDeYCData:[],allYCData:[],allYCCount:0,newSuccessData:[],isShowLottery:!1,showDui:!1,showSure:!1,numberPrice:"",numberCount:1,isFirstLoad:!0,nextQiStr:"抢购结果获取中...",isMyWin:"",isSale:"",isSaleMsg:"",isOpenSocket:!1,winnerList:[],currentWinnerMsgId:"",currentWinnerMsg:"",isUpdatePrice:!1,priceMsgArr:[],isNoPrice:!1,showPay:!1,showTipPrice:!1,textBatchPrice:"",isSetChange:!1,maxRandomPrice:100,trySocketCount:0,batchPrice:[{price:""},{price:""},{price:""},{price:""},{price:""},{price:""}]}},onLoad:function(e){var i=this;d=this,t.closeSocket(),this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(400),this.cWidthZhu=t.upx2px(40),this.periodId=e.periodId,this.getQihaoData(),this.getHistoryData(),setTimeout(function(){i.getNewSuccessData()},1200)},onBackPress:function(e){t.closeSocket(),T&&clearTimeout(T),this.isRefreshTime=!1},onShow:function(){T&&clearTimeout(T)},methods:{getQihaoData:function(e){var i=this;this.$api.postAPI("period/queryPeriodDetail",{id:this.periodId}).then(function(a){if(t.hideLoading(),0!=a.data.code)return t.showToast({title:a.data.msg,icon:"none",duration:3e3});if(i.periodData.executeStatus&&e&&a.data.data&&i.periodData.executeStatus==a.data.data.executeStatus)return e(a.data.data.executeStatus);var n=i.periodData.lastAvgPrice,o=a.data.data.lastAvgPrice;i.periodData=a.data.data,i.currentTime=a.data.timestamp,i.lastUpdateTime=new Date(i.currentTime).Format("hh:mm:ss"),i.handlerGuess(a.data.timestamp),i.isFirstLoad=!1,i.isSale=!a.data.rest,i.isSaleMsg=a.data.rest?a.data.msg:"",i.isTimeUpLoading=!1,e&&2==i.periodData.executeStatus&&(i.periodData.lastAvgPrice=n,i.isUpdatePrice=!0,setTimeout(function(){i.periodData.lastAvgPrice=o,i.isUpdatePrice=!1},400)),i.getCurrentLineData(),i.getWoDeYC(e),i.periodData.executeStatus>2&&i.getAllYCData(),1==i.periodData.executeStatus&&i.toWebSocket(),i.periodData.executeStatus<3&&!e&&setTimeout(function(){i.addWatchNumber()},1e3),T&&clearTimeout(T),e||setTimeout(function(){i.getWinnerList()},2e3)}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},getHistoryData:function(){var e=this;this.$api.postAPI("period/historyList",{id:this.periodId}).then(function(i){if(t.hideLoading(),0!=i.data.code)return t.showToast({title:i.data.msg,icon:"none",duration:3e3});e.periodHistoryData=i.data.data;var a={categories:[],series:[]},n=i.data.data.list.map(function(t){return t.lastAvgPrice});a.series=[{name:"均价",color:"#FF5847",data:n}],a.categories=new Array(n.length).fill(null).map(function(t,e){return e+1}),e.minPrice=i.data.data.minmax&&i.data.data.minmax.minPrice||0,e.maxPrice=i.data.data.minmax&&i.data.data.minmax.maxPrice||0,e.newLottery=i.data.data.newPeriodLotteryInfo,e.titleObj=c({name:"天天抢购"},e.newLottery),e.showLineA("canvasLineA",a,{min:e.minPrice,max:e.maxPrice})}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},getCurrentLineData:function(){var e=this;this.$api.postAPI("period/periodHistoryList",{id:this.periodId}).then(function(i){if(t.hideLoading(),0!=i.data.code)return t.showToast({title:i.data.msg,icon:"none",duration:3e3});if(e.periodCurrentPriceData=i.data.data,i.data.data&&i.data.data.length>0){var a=i.data.data[i.data.data.length-1].createTime;a&&(e.lastUpdateTime=new Date(a).Format("hh:mm:ss"))}var n={categories:[],series:[]},o=i.data.data.map(function(t){return t.curAvgPrice});n.series=[{name:"均价",color:"rgba(255,88,71,0.3)",data:o}];var r=e.periodData.guessStartTime,s=i.data.data.map(function(t){return new Date(t.createTime).Format("hh:mm")}),c=e.periodData.sceneConfig.frequencyNum+1,u=3e5;if("初级场"==e.periodData.sceneConfig.sceneName?u=12e4:"中级场"==e.periodData.sceneConfig.sceneName&&(u=18e4),e.periodData.sceneConfig.historyIntervalTime&&(u=60*e.periodData.sceneConfig.historyIntervalTime*1e3),0==s.length){e.isNoPrice=!0;for(var d=0;d<c;d++)r+=u,s.push(new Date(r).Format("hh:mm"))}else if(s.length>0&&s.length<c){e.isNoPrice=!1;for(var h=e.periodCurrentPriceData[e.periodCurrentPriceData.length-1].createTime,l=c-s.length,p=0;p<l;p++)h+=u,s.push(new Date(h).Format("hh:mm"))}else e.isNoPrice=!1;(e.periodCurrentPriceData.length>0&&3==e.periodData.executeStatus||s.length==c)&&(s[s.length-1]="结束"),n.categories=s,e.showColumn("canvasColumn",n,s.length>6)}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},getWoDeYC:function(e){var i=this,a=t.getStorageSync("token"),n=t.getStorageSync("userInfo_token");if(a&&n){this.periodId;this.$api.postAPI("guess/queryMyPeriodGuess",{currentPage:1,data:{id:this.periodId},pageSize:10}).then(function(a){if(t.hideLoading(),0!=a.data.code)return t.showToast({title:a.data.msg,icon:"none",duration:3e3});if(i.woDeYC=a.data.data,i.woDeYCData=i.woDeYC.data,i.woDeYCData.length>4&&(i.woDeYCData.length=4),i.woDeYCData&&i.woDeYCData.length>0){var n=t.getStorageSync("userInfo");if(n){var o=n.nickName?n.nickName:"";i.nextQiStr=i.periodData.userName==o?"恭喜您抢购成功，去确认订单！":"抢购失败，抢购下期",i.isMyWin=i.periodData.userName==o,i.periodData.executeStatus>1&&i.isMyWin&&e&&(i.showSure=!0)}else i.nextQiStr="抢购下期"}else i.nextQiStr="抢购下期"}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})}else this.nextQiStr="抢购下期"},getAllYCData:function(){var e=this,i={currentPage:1,data:{id:this.periodId},pageSize:4};this.$api.postAPI("period/panicBuyingRecord",i).then(function(i){if(t.hideLoading(),0!=i.data.code)return t.showToast({title:i.data.msg,icon:"none",duration:3e3});e.allYCData=i.data.data.data,e.allYCCount=i.data.data.totalCount}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},getNewSuccessData:function(){var e=this,i={currentPage:1,pageSize:3};this.$api.postAPI("guess/newGuessResult",i).then(function(i){if(t.hideLoading(),0!=i.data.code)return t.showToast({title:i.data.msg,icon:"none",duration:3e3});e.newSuccessData=i.data.data.data}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},handlerGuess:function(t){var e=this,i=new Date(t),a=[0,0,0];if(0==this.periodData.executeStatus){this.timeTipText="限时抢购",this.timeTipText1="距开场",this.showDateTime=!0;var n=new Date(this.periodData.guessStartTime),o=n.getTime()-i.getTime();a=o>0?this.getMSDate(o):[0,0,0]}else if(1==this.periodData.executeStatus){this.timeTipText="抢购中",this.timeTipText1="距结束",this.showDateTime=!0;var r=new Date(this.periodData.guessEndTime),s=r.getTime()-i.getTime();a=s>0?this.getMSDate(s):[0,0,0]}else if(2==this.periodData.executeStatus){this.timeTipText="结果确认中",this.timeTipText1="",this.showDateTime=!0;var c=new Date(this.periodData.lotteryTime),u=c.getTime()-i.getTime();a=u>0?this.getMSDate(u):[0,0,0]}else 3==this.periodData.executeStatus&&(this.timeTipText="已结束",this.timeTipText1="",this.showDateTime=!1,a=[0,0,0]);this.isRefreshTime=!1,this.$nextTick(function(){e.isRefreshTime=!0,e.countdownTime.h=a[0],e.countdownTime.m=a[1],e.countdownTime.s=a[2]})},getWinnerList:function(){var e=this;this.$api.postAPI("period/queryWinInfoLunbo").then(function(i){if(t.hideLoading(),0!=i.data.code)return t.showToast({title:i.data.msg,icon:"none",duration:3e3});T&&clearTimeout(T),e.winnerList=i.data.data,e.handlerWinner()}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},handlerWinner:function(){var t=this;this.currentWinnerMsgId=this.currentWinnerMsgId||0,this.currentWinnerMsgId>0&&this.currentWinnerMsgId>=this.winnerList.length-1&&(this.currentWinnerMsgId=0,this.getWinnerList());var e=this.winnerList[this.currentWinnerMsgId];this.currentWinnerMsg="恭喜".concat(e.nickName,"用户,获得").concat(e.title),setTimeout(function(){t.isShowLottery=!0},1e3),T=setTimeout(function(){t.currentWinnerMsgId++,t.handlerWinner()},4e4),setTimeout(function(){t.isShowLottery=!1},11e3)},showLineA:function(t,e,i){g=new n.default({$this:d,canvasId:t,type:"line",fontSize:11,legend:!1,dataLabel:!0,dataPointShape:!0,background:"#FFFFFF",pixelRatio:d.pixelRatio,categories:e.categories,series:e.series,animation:!0,enableScroll:!0,xAxis:{gridColor:"#CCCCCC",disableGrid:!1,scrollShow:!0,type:"calibration",itemCount:7},yAxis:{disableGrid:!0,dashLength:4,splitNumber:2,min:i.min,max:i.max},width:d.cWidth,height:d.cHeight,extra:{line:{type:"straight"}}})},touchLineA:function(t){g.scrollStart(t)},moveLineA:function(t){g.scroll(t)},touchEndLineA:function(t){g.scrollEnd(t),g.showToolTip(t,{format:function(t,e){return e+" "+t.name+":"+t.data}})},touchColumn:function(t){m.scrollStart(t)},moveColumn:function(t){m.scroll(t)},touchEndColumn:function(t){m.scrollEnd(t)},showColumn:function(t,e,i){m=new n.default({$this:d,canvasId:t,type:"column",legend:!1,fontSize:11,background:"#ffffff",pixelRatio:d.pixelRatio,animation:!0,categories:e.categories,series:e.series,enableScroll:!0,scrollPosition:"right",xAxis:{itemCount:7,disableGrid:!0,scrollShow:i,scrollAlign:"right"},yAxis:{disableGrid:!0},dataLabel:!0,width:d.cWidth,height:d.cHeight,extra:{column:{width:d.cWidthZhu}}})},getMSDate:function(t){Math.floor(t/864e5);var e=t%864e5,i=Math.floor(e/36e5),a=e%36e5,n=Math.floor(a/6e4),o=a%6e4,r=Math.round(o/1e3);return[i,n,r]},timeup:function(){var t=this;this.isFirstLoad||(console.log("ttt---detail-time up---"," at pages\\product\\detail.vue:809"),this.periodData.executeStatus>=0&&this.periodData.executeStatus<3&&(this.timeTipText1="正在获取中...",this.isTimeUpLoading=!0,setTimeout(function(){t.setGetData()},1e3)))},setGetData:function(){var t=this;this.getQihaoData(function(e){t.periodData.executeStatus==e&&setTimeout(function(){t.setGetData()},2e3)})},toWebSocket:function(){var e=this;this.trySocketCount>3||(t.closeSocket(),setTimeout(function(){t.connectSocket({url:"ws://112.74.21.125:8091?periodId=".concat(e.periodId)}),t.onSocketOpen(function(t){console.log("WebSocket连接已打开！"," at pages\\product\\detail.vue:838"),e.isOpenSocket=!0}),t.onSocketError(function(t){console.log("WebSocket连接打开失败，请检查！"," at pages\\product\\detail.vue:842"),e.isOpenSocket=!1,setTimeout(function(){e.trySocketCount++,e.toWebSocket()},1500)}),t.onSocketClose(function(){e.isOpenSocket=!1}),t.onSocketMessage(function(t){console.log("收到服务器内容："+t.data," at pages\\product\\detail.vue:853");var i=JSON.parse(t.data);1e3==i.serviceId?(e.isNoPrice=!1,e.updateZXChart(i.data),e.isUpdatePrice=!0,setTimeout(function(){e.periodData.lastAvgPrice=i.data.curAvgPrice,e.isUpdatePrice=!1},500)):1001==i.serviceId?(e.priceMsgArr.push({userName:i.data.userName,guessPrices:i.data.guessPrices,isShow:!1,top:e.random(0,360),t:new Date}),setTimeout(function(){console.log("=================lly",e.priceMsgArr[0].isShow," at pages\\product\\detail.vue:872");for(var t=0;t<e.priceMsgArr.length;t++)if(!e.priceMsgArr[t].isShow){e.priceMsgArr[t].isShow=!0;break}},300),setTimeout(function(){},9e3)):1004==i.serviceId?e.periodData.watchNum=i.data.num:1005==i.serviceId&&(e.periodData.biddingTimes=i.data.num)})},300))},random:function(t,e){return Math.floor(Math.random()*(e-t))+t},toPrice:function(){if(!this.isSale)return t.showToast({title:this.isSaleMsg,icon:"none",duration:3e3});1==this.periodData.executeStatus?this.userToPrice():this.periodData.executeStatus>1&&(this.isMyWin?this.eventButtonNav(2):this.getNexQi())},userToPrice:function(){var e=s(a.default.mark(function e(i,n){var o,r,s,c,u,d,h,l,p,f,g,m,T,w,v,x,D=this;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(o="",r=1,!i){e.next=40;break}s=!0,c=[],u=!0,d=!1,h=void 0,e.prev=7,l=n[Symbol.iterator]();case 9:if(u=(p=l.next()).done){e.next=20;break}if(f=p.value,g=f.price?parseFloat(f.price):0,!(g<0)){e.next=16;break}return t.showToast({title:"请输入大于0的数字",icon:"none"}),s=!1,e.abrupt("return",!1);case 16:c.push(g);case 17:u=!0,e.next=9;break;case 20:e.next=26;break;case 22:e.prev=22,e.t0=e["catch"](7),d=!0,h=e.t0;case 26:e.prev=26,e.prev=27,u||null==l.return||l.return();case 29:if(e.prev=29,!d){e.next=32;break}throw h;case 32:return e.finish(29);case 33:return e.finish(26);case 34:if(s){e.next=36;break}return e.abrupt("return");case 36:o=c.join(),r=c.length,e.next=44;break;case 40:if(o=this.numberPrice?parseFloat(this.numberPrice):0,!(o<=0)){e.next=43;break}return e.abrupt("return",t.showToast({title:"请输入大于0的数字",icon:"none",duration:3e3}));case 43:r=1;case 44:if(m=t.getStorageSync("token"),T=t.getStorageSync("userInfo_token"),m&&T){e.next=48;break}return e.abrupt("return",t.navigateTo({url:"/pages/login/login"}));case 48:return e.next=50,this.getMyPoints();case 50:if(w=e.sent,v=r*(0|(this.periodData.sceneConfig&&this.periodData.sceneConfig.pointsNum)),!(v>w)){e.next=55;break}return i&&this.hidePop(),e.abrupt("return",t.navigateTo({url:"/pages/product/store"}));case 55:x={guessPrices:o,outOrderNo:this.getUUID(),periodId:this.periodId},this.$api.postAPI("guess/guessPrice",x).then(function(e){if(t.hideLoading(),i&&D.hidePop(),0!=e.data.code)return t.showToast({title:e.data.msg,icon:"none",duration:3e3});t.showToast({title:"出价成功",duration:3e3}),setTimeout(function(){D.getWoDeYC()},1500)}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})});case 57:case"end":return e.stop()}},e,this,[[7,22,26,34],[27,,29,33]])}));function i(t,i){return e.apply(this,arguments)}return i}(),batchToPrice:function(){if(""==this.textBatchPrice)return t.showToast({title:"请至少填写一个价格",icon:"none"});var e=this.textBatchPrice.split(","),i=[],a=!0,n=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(a=(r=s.next()).done);a=!0){var c=r.value,u=parseFloat(c);isNaN(u)||i.push({price:u.toFixed(2)})}}catch(h){n=!0,o=h}finally{try{a||null==s.return||s.return()}finally{if(n)throw o}}this.batchPrice=i;var d=this.batchPrice.filter(function(t){return""!=t.price});if(console.log(d.length," at pages\\product\\detail.vue:987"),0==d.length)return t.showToast({title:"请至少填写一个价格",icon:"none"});this.userToPrice(!0,d)},getNexQi:function(){this.$api.postAPI("period/nextNewPeroid",{id:this.periodId}).then(function(e){if(t.hideLoading(),0!=e.data.code)return t.showToast({title:e.data.msg,icon:"none",duration:3e3});t.redirectTo({url:"/pages/product/detail?periodId=".concat(e.data.data.id)})}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},getMyPoints:function(){var e=s(a.default.mark(function e(){var i,n;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.postAPI("points/detail");case 2:if(i=e.sent,n=i.data,0!=n.code){e.next=8;break}return e.abrupt("return",n.data.points);case 8:return t.showToast({title:n.msg,icon:"none",duration:3e3}),e.abrupt("return",0);case 10:case"end":return e.stop()}},e,this)}));function i(){return e.apply(this,arguments)}return i}(),getUUID:function(){return"xxxx-xxxx-xxxx-xxxx-xxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,i="x"==t?e:3&e|8;return i.toString(16)})},updateZXChart:function(t){this.periodCurrentPriceData.push(t);var e=this.periodCurrentPriceData;if(e&&e.length>0){var i=e[e.length-1].createTime;i&&(this.lastUpdateTime=new Date(i).Format("hh:mm:ss"))}var a={categories:[],series:[],scrollPosition:"right",xAxis:{scrollAlign:"right"}},n=e.map(function(t){return t.curAvgPrice});a.series=[{name:"均价",color:"rgba(255,88,71,0.3)",data:n}];var o=e.map(function(t){return new Date(t.createTime).Format("hh:mm")}),r=this.periodData.sceneConfig.frequencyNum+1,s=3e5;"初级场"==this.periodData.sceneConfig.sceneName?s=12e4:"中级场"==this.periodData.sceneConfig.sceneName&&(s=18e4),this.periodData.sceneConfig.historyIntervalTime&&(s=60*this.periodData.sceneConfig.historyIntervalTime*1e3);for(var c=e[e.length-1].createTime,u=r-o.length,d=0;d<u;d++)c+=s,o.push(new Date(c).Format("hh:mm"));o[o.length-1]="结束",a.categories=o,m.updateData(a)},closePop:function(t){1==t?this.showDui=!1:2==t?this.showSure=!1:(this.showDui=!1,this.showSure=!1)},eventButtonNav:function(e){var i="";1==e?i="/pages/product/store":2==e&&(i="/pages/order/order?state=1"),i&&t.navigateTo({url:i})},btnMoreSuccess:function(e){e.periodId?t.navigateTo({url:"/pages/product/detail?periodId=".concat(e.periodId)}):t.navigateTo({url:"/pages/product/newlist?title=newlist"})},addWatchNumber:function(){this.$api.postAPI("period/watchNumber",{id:this.periodId}).then(function(t){console.log("添加围观人数"," at pages\\product\\detail.vue:1091")}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},toYCPage:function(e){var i=1==e?"/pages/product/wdyc":"/pages/product/allyc";t.navigateTo({url:i+"?periodId="+this.periodId})},toRulePage:function(e){t.navigateTo({url:"/pages/product/playerRule"})},hidePop:function(){var t=this;this.showPay=!this.showPay,setTimeout(function(){t.$refs.masklayer.$el.style.display="none"},200)},toPopPrice:function(){var t=this;this.$refs.masklayer.$el.style.display="block",setTimeout(function(){t.showPay=!0},100)},random2:function(t,e){return(Math.random()*(e-t)+t).toFixed(2)},toRandPrice:function(){this.numberPrice=this.random2(1,this.maxRandomPrice)},batchPriceChange:function(t){var e=this,i=t.detail.value;""==i||this.isSetChange||(this.isSetChange=!0,setTimeout(function(){e.textBatchPrice=i.replace(/[^\d+(,\d\d\d)*.\d+$]/g,""),e.isSetChange=!1},10))},clearPriceText:function(){this.textBatchPrice=""},btnBatchPrice:function(t){for(var e=[],i=0;i<t;i++)e.push(this.random2(1,this.maxRandomPrice));this.textBatchPrice=e.join()},showPriceTips:function(){var t=this;this.$refs.masklayer.$el.style.display="block",setTimeout(function(){t.showTipPrice=!0},100)},hidePopPrice:function(){var t=this;this.showTipPrice=!this.showTipPrice,setTimeout(function(){t.$refs.masklayer.$el.style.display="none"},200)}}};e.default=w}).call(this,i("6e42")["default"])},"54fb":function(t,e,i){"use strict";i.r(e);var a=i("937b"),n=i("93fe");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("efbd");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},"937b":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"93fe":function(t,e,i){"use strict";i.r(e);var a=i("51c5"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},efbd:function(t,e,i){"use strict";var a=i("22a3"),n=i.n(a);n.a}},[["a484","common/runtime","common/vendor"]]]);
});
require('pages/product/detail.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0eec":function(e,t,n){"use strict";n.r(t);var i=n("32e1"),o=n("43cd");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("7a7e");var a=n("2877"),s=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},"32e1":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"43cd":function(e,t,n){"use strict";n.r(t);var i=n("bc66"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=o.a},"7a7e":function(e,t,n){"use strict";var i=n("7d56"),o=n.n(i);o.a},"7d56":function(e,t,n){},bc66:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("a34a"));o(n("9323"));function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,i,o,r,a){try{var s=e[r](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(i,o)}function a(e){return function(){var t=this,n=arguments;return new Promise(function(i,o){var a=e.apply(t,n);function s(e){r(a,i,o,s,u,"next",e)}function u(e){r(a,i,o,s,u,"throw",e)}s(void 0)})}}var s={data:function(){return{loginSMSType:!0,phoneNumber:"",code:"",passwd:"",getCodeisWaiting:!1,getCodeText:"获取验证码",isGetCode:!1,fromPage:"",isLoginOK:!1}},onLoad:function(t){this.fromPage=t.url,e.setNavigationBarTitle({title:this.loginSMSType?"短信登录":"登录"})},onBackPress:function(){if("user"==this.fromPage&&!this.isLoginOK)return e.switchTab({url:"/pages/index/index"}),!0},methods:{setTimer:function(){var e=this,t=59;this.getCodeText="重新获取(60)",this.Timer=setInterval(function(){if(t<=0)return e.getCodeisWaiting=!1,e.getCodeText="获取验证码",void clearInterval(e.Timer);e.getCodeText="重新获取("+t+")",t--},1e3)},changeLoginType:function(){this.loginSMSType=!this.loginSMSType,e.setNavigationBarTitle({title:this.loginSMSType?"短信登录":"登录"})},getCode:function(){var t=this;if(e.hideKeyboard(),!this.getCodeisWaiting){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))return e.showToast({title:"请填写正确手机号码",icon:"none"}),!1;this.getCodeisWaiting=!0;var n={clientType:1,mobile:this.phoneNumber,veriCodeType:1};this.$api.postAPI("users/getVeriCode",n).then(function(e){t.isGetCode=!0,t.getCodeText="发送中...",t.setTimer()}).catch(function(e){t.getCodeisWaiting=!1})}},doReg:function(){var t=a(i.default.mark(function t(){var n,o,r,a;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e.hideKeyboard(),/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)){t.next=4;break}return e.showToast({title:"请填写正确手机号码",icon:"none"}),t.abrupt("return",!1);case 4:if(!this.loginSMSType){t.next=13;break}if(""!=this.code){t.next=9;break}return t.abrupt("return",e.showToast({title:"请输入验证码",icon:"none"}));case 9:if(/^\d{4,6}$/g.test(this.code)){t.next=11;break}return t.abrupt("return",e.showToast({title:"请输入正确验证码",icon:"none"}));case 11:t.next=15;break;case 13:if(""!=this.passwd){t.next=15;break}return t.abrupt("return",e.showToast({title:"请输入密码",icon:"none"}));case 15:if(e.showLoading({title:"提交中..."}),n={clientType:1,mobile:this.phoneNumber,veriCode:this.code},o="users/loginRegister",this.loginSMSType){t.next=23;break}n={clientType:1,loginName:this.phoneNumber,password:this.passwd},o="users/loginWithPassword",t.next=25;break;case 23:if(this.isGetCode){t.next=25;break}return t.abrupt("return",e.showToast({title:"请获取验证码",icon:"none",duration:3e3}));case 25:return t.next=27,this.$api.postAPI(o,n);case 27:if(r=t.sent,a=r.data,e.hideLoading(),0!=a.code){t.next=42;break}if(a.data.token){t.next=33;break}return t.abrupt("return");case 33:if(e.setStorageSync("token",a.data.token),e.setStorageSync("userInfo_token",a.data),a.data.hasPwd){t.next=37;break}return t.abrupt("return",e.navigateTo({url:"/pages/password/set"}));case 37:e.showToast({title:"登录成功",icon:"success"}),this.isLoginOK=!0,setTimeout(function(){e.navigateBack()},1500),t.next=43;break;case 42:return t.abrupt("return",e.showToast({title:a.msg,icon:"none",duration:3e3}));case 43:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),toLogin:function(){e.hideKeyboard(),e.redirectTo({url:"login"}),e.navigateBack()}}};t.default=s}).call(this,n("6e42")["default"])}},[["1903","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/register/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/register/register.js';

define('pages/register/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"05b6":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},i=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return i})},"1f01":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(o("9323"));function n(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{phoneNumber:"",code:"",passwd:"",getCodeText:"获取验证码",getCodeBtnColor:"#ffffff",getCodeisWaiting:!1}},onLoad:function(){},methods:{Timer:function(){},getCode:function(){var t=this;if(this.$api.postAPI("users/getVeriCode",{noncestr:Date.now()}).then(function(e){console.log("11"," at pages\\register\\register.vue:69")}).catch(function(e){console.log("22"," at pages\\register\\register.vue:72")}),e.showLoading({title:"提交中..."}),!this.getCodeisWaiting){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))return e.showToast({title:"请填写正确手机号码",icon:"none"}),!1;this.getCodeText="发送中...",this.getCodeisWaiting=!0,this.getCodeBtnColor="rgba(255,255,255,0.5)",setTimeout(function(){e.showToast({title:"验证码已发送",icon:"none"}),t.code=6666,t.setTimer()},1e3)}},setTimer:function(){var e=this,t=60;this.getCodeText="重新获取(60)",this.Timer=setInterval(function(){if(t<=0)return e.getCodeisWaiting=!1,e.getCodeBtnColor="#ffffff",e.getCodeText="获取验证码",void clearInterval(e.Timer);e.getCodeText="重新获取("+t+")",t--},1e3)},doReg:function(){if(e.hideKeyboard(),!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))return e.showToast({title:"请填写正确手机号码",icon:"none"}),!1;e.request({url:"http://112.74.21.125:8085/users/loginRegister",method:"POST",data:{hasPwd:!1,clientType:1,mobile:this.phoneNumber,veriCode:"6666"},header:{"content-type":"application/json"},success:function(e){console.log(e," at pages\\register\\register.vue:132")},fail:function(e){console.log(e," at pages\\register\\register.vue:135")}}),setTimeout(function(){e.setStorage({key:"storage_key",data:"token",success:function(){e.hideLoading(),e.showToast({title:"登录成功",icon:"success"}),setTimeout(function(){e.navigateTo({url:"../password/set"})},1e3)}})},1e3)},toLogin:function(){e.hideKeyboard(),e.redirectTo({url:"login"}),e.navigateBack()}}};t.default=i}).call(this,o("6e42")["default"])},a73c:function(e,t,o){"use strict";o.r(t);var n=o("1f01"),i=o.n(n);for(var r in n)"default"!==r&&function(e){o.d(t,e,function(){return n[e]})}(r);t["default"]=i.a},bf1c:function(e,t,o){},c952:function(e,t,o){"use strict";o.r(t);var n=o("05b6"),i=o("a73c");for(var r in i)"default"!==r&&function(e){o.d(t,e,function(){return i[e]})}(r);o("f421");var s=o("2877"),a=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=a.exports},f421:function(e,t,o){"use strict";var n=o("bf1c"),i=o.n(n);i.a}},[["ed47","common/runtime","common/vendor"]]]);
});
require('pages/register/register.js');
__wxRoute = 'pages/register/forget';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/register/forget.js';

define('pages/register/forget.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/forget"],{"00a4":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(n("9323"));function o(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{phoneNumber:"",code:"",passwd:"",getCodeText:"获取验证码",getCodeBtnColor:"#ffffff",getCodeisWaiting:!1}},onLoad:function(){},methods:{setTimer:function(){var e=this,t=59;this.getCodeText="重新获取(60)",this.Timer=setInterval(function(){if(t<=0)return e.getCodeisWaiting=!1,e.getCodeText="获取验证码",void clearInterval(e.Timer);e.getCodeText="重新获取("+t+")",t--},1e3)},getCode:function(){var t=this;if(e.hideKeyboard(),!this.getCodeisWaiting){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))return e.showToast({title:"请填写正确手机号码",icon:"none"}),!1;this.getCodeisWaiting=!0;var n={clientType:1,mobile:this.phoneNumber,veriCodeType:4};this.$api.postAPI("users/getVeriCode",n).then(function(e){t.isGetCode=!0,t.getCodeText="发送中...",t.setTimer()}).catch(function(e){t.getCodeisWaiting=!1})}},doReg:function(){return e.hideKeyboard(),/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)?""==this.code?e.showToast({title:"请输入验证码",icon:"none"}):/^\d{4,6}$/g.test(this.code)?this.isGetCode?void e.navigateTo({url:"/pages/password/setpassword?mobile=".concat(this.phoneNumber,"&code=").concat(this.code)}):e.showToast({title:"请获取验证码",icon:"none",duration:3e3}):e.showToast({title:"请输入正确验证码",icon:"none"}):(e.showToast({title:"请填写正确手机号码",icon:"none"}),!1)}}};t.default=i}).call(this,n("6e42")["default"])},"51ed":function(e,t,n){"use strict";var o=n("70ee"),i=n.n(o);i.a},"70ee":function(e,t,n){},8757:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},e99f:function(e,t,n){"use strict";n.r(t);var o=n("8757"),i=n("fec0");for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);n("51ed");var r=n("2877"),a=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},fec0:function(e,t,n){"use strict";n.r(t);var o=n("00a4"),i=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);t["default"]=i.a}},[["fedc","common/runtime","common/vendor"]]]);
});
require('pages/register/forget.js');
__wxRoute = 'pages/set/set';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/set/set.js';

define('pages/set/set.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{"06cb":function(t,n,e){"use strict";e.r(n);var o=e("29ce"),r=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=r.a},"29ce":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62");function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){u(t,n,e[n])})}return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var a={data:function(){return{}},methods:r({},(0,o.mapMutations)(["logout"]),{navTo:function(n){t.navigateTo({url:n})},btnLoginOut:function(){t.showLoading({title:"正在退出登录..."}),this.logOut(function(){t.removeStorageSync("userInfo"),t.removeStorageSync("userInfo_token"),t.removeStorageSync("token"),setTimeout(function(){t.hideLoading(),t.switchTab({url:"/pages/index/index"})},1500)})},logOut:function(n){this.$api.postAPI("users/logout").then(function(e){if(0!=e.data.code)return t.hideLoading(),t.showToast({title:e.data.msg,icon:"none",duration:3e3});n&&n()}).catch(function(n){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})}})};n.default=a}).call(this,e("6e42")["default"])},4603:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r})},"69da":function(t,n,e){},b699:function(t,n,e){"use strict";e.r(n);var o=e("4603"),r=e("06cb");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);e("e98a");var a=e("2877"),i=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports},e98a:function(t,n,e){"use strict";var o=e("69da"),r=e.n(o);r.a}},[["25c9","common/runtime","common/vendor"]]]);
});
require('pages/set/set.js');
__wxRoute = 'pages/set/suggest';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/set/suggest.js';

define('pages/set/suggest.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/suggest"],{"018c":function(n,t,u){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},c=[];u.d(t,"a",function(){return e}),u.d(t,"b",function(){return c})},"4f78":function(n,t,u){"use strict";var e=u("adf8"),c=u.n(e);c.a},7685:function(n,t,u){"use strict";u.r(t);var e=u("018c"),c=u("c060");for(var r in c)"default"!==r&&function(n){u.d(t,n,function(){return c[n]})}(r);u("4f78");var a=u("2877"),f=Object(a["a"])(c["default"],e["a"],e["b"],!1,null,null,null);t["default"]=f.exports},adf8:function(n,t,u){},c060:function(n,t,u){"use strict";u.r(t);var e=u("d07b"),c=u.n(e);for(var r in e)"default"!==r&&function(n){u.d(t,n,function(){return e[n]})}(r);t["default"]=c.a},d07b:function(n,t,u){}},[["9eea","common/runtime","common/vendor"]]]);
});
require('pages/set/suggest.js');
__wxRoute = 'pages/set/protocol';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/set/protocol.js';

define('pages/set/protocol.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/protocol"],{"53fe":function(n,t,u){"use strict";u.r(t);var a=u("a53c"),e=u.n(a);for(var r in a)"default"!==r&&function(n){u.d(t,n,function(){return a[n]})}(r);t["default"]=e.a},"593b":function(n,t,u){"use strict";var a=u("e270"),e=u.n(a);e.a},a53c:function(n,t,u){},afd3:function(n,t,u){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},e=[];u.d(t,"a",function(){return a}),u.d(t,"b",function(){return e})},c62a:function(n,t,u){"use strict";u.r(t);var a=u("afd3"),e=u("53fe");for(var r in e)"default"!==r&&function(n){u.d(t,n,function(){return e[n]})}(r);u("593b");var c=u("2877"),o=Object(c["a"])(e["default"],a["a"],a["b"],!1,null,null,null);t["default"]=o.exports},e270:function(n,t,u){}},[["582a","common/runtime","common/vendor"]]]);
});
require('pages/set/protocol.js');
__wxRoute = 'pages/set/servicesInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/set/servicesInfo.js';

define('pages/set/servicesInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/servicesInfo"],{"003c":function(t,n,e){"use strict";var i=e("f94f"),o=e.n(i);o.a},"405b":function(t,n,e){"use strict";e.r(n);var i=e("7d1e"),o=e("4717");for(var l in o)"default"!==l&&function(t){e.d(n,t,function(){return o[t]})}(l);e("003c");var c=e("2877"),r=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports},4717:function(t,n,e){"use strict";e.r(n);var i=e("7bf8"),o=e.n(i);for(var l in i)"default"!==l&&function(t){e.d(n,t,function(){return i[t]})}(l);n["default"]=o.a},"7bf8":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{list:[{title:"注册登录",list:[{title:"如何注册趣抢购？",content:"(1)应用商店下载趣抢购APP\n\t\t\t\t\t\t\t\t (2)进入【我的】，选择短信验证码登录\n\t\t\t\t\t\t\t\t (3)第一次登录需要填写登录密码，以后则可选择短信或密码两种登录方式\n\t\t\t\t\t\t\t\t "},{title:"登录时手机收不到短信验证码怎么办？",content:"(1)确认短信是否被手机软件拦截或过滤\n\t\t\t\t\t\t\t\t (2)确认手机能否正常接收短信（信号、欠费、停机等）\n\t\t\t\t\t\t\t\t (3)短信收发过程可能会有延时，请耐心等候\n\t\t\t\t\t\t\t\t (4)仍未收到，请联系客服为您服务\n\t\t\t\t\t\t\t\t "},{title:"忘记登录密码怎么办？",content:"可在密码登陆页面点击【忘记密码】进行找回"}]},{title:"抢购问题",list:[{title:"名词释义",content:"(1)应用商店下载趣抢购APP\n\t\t\t\t\t\t\t\t (2)进入【我的】，选择短信验证码登录\n\t\t\t\t\t\t\t\t (3)第一次登录需要填写登录密码，以后则可选择短信或密码两种登录方式\n\t\t\t\t\t\t\t\t "},{title:"抢购怎么玩？",content:"步骤一：免费注册会员\n\t\t\t\t\t\t\t\t步骤二：充值购买金豆（1元=100金豆）\n\t\t\t\t\t\t\t\t步骤三：选择心仪商品出价抢购，等待抢购结束\n\t\t\t\t\t\t\t\t步骤四：抢购成功，去我的订单中确认订单在您抢购之前，我们建议您花点时间看看规则和新手指引，以便您能尽快熟悉如何抢购。\n\t\t\t\t\t\t\t\t "},{title:"如何购买金豆？",content:"登录后，点击【我的】-【充值】来购买金豆，100金豆=1元，选择你想要购买的金额，点击支付即可。通过微信，支付宝均可充值。\n\t\t\t\t\t\t\t\t "},{title:"抢购采用什么规则？",content:"(1) 所有商品抢购，初始当前均价为0元，每一次出价会消耗一定数量的金豆，同时商品当前均价会根据用户的出价不断变化。\n\t\t\t\t\t\t\t\t(2) 在抢购过程中，系统会在相应时间段内更新当前均价，给用户出价作为参考。抢购倒计时结束后，如果您的出价和抢购结束后的当前均价差价最小，且您出价用时最短，您便成功抢购到了该商品。\n\t\t\t\t\t\t\t\t(3) 若抢购成功，请在30天内去我的订单确认订单，超过30天未确认订单，视为放弃，不返赠豆。\n\t\t\t\t\t\t\t\t(4) 若抢购失败，将返还所消耗金豆的50%，赠豆除外。\n\t\t\t\t\t\t\t\t(5) 平台严禁违规操作，最终解释权归趣抢购所有。\n\t\t\t\t\t\t \t\t "},{title:"抢购有哪些技巧？",content:" \n\t\t\t\t\t\t\t(1)做好充足的准备\n\t\t\t\t\t\t\t参与抢购之前，准备充足的金豆，防止由于中途充值而错过抢购时机。\n\t\t\t\t\t\t\t(2)积累抢购经验\n\t\t\t\t\t\t\t新用户注册后，通过使用赠送的金豆熟悉抢购流程，从小件商品抢购出发，积累抢购经验。\n\t\t\t\t\t\t\t(3)选择合适的抢购时段\n\t\t\t\t\t\t\t参加抢购的用户越少，获胜的几率越高，因此选择一个最佳时间参与抢购是成功的关键，例如其他用户用餐、休息或约会时间。\n\t\t\t\t\t\t\t(4)变换出价策略\n\t\t\t\t\t\t\t经常变换出价策略，让对手无法总结您的出价规律，出其不意取得最后的成功。\n\t\t\t\t\t\t\t(5)合理的预算\n\t\t\t\t\t\t\t不要指望花10块钱就能赢得一台iphone，你需要花费更多的时间和金钱才有机会赢得大奖，我们发现任何参与者只要愿意花费奖品价值的1/3就能有很大几率获得该奖品。\n\t\t\t\t\t\t\t(6)保持良好的心态\n\t\t\t\t\t\t\t趣味抢购是一个游戏竞赛过程，因此良好的心态是获胜的必要条件。\n\t\t\t\t\t\t \t\t "},{title:"金豆/赠豆/能提现吗？",content:"不支持。抢购人充值获得的金豆可用于抢购，有效期为1年，到期清零。为更好地保障您的权益，平台在金豆到期后将自动延期60天。抢购人可在金豆到期后60天内继续使用，逾期将自动清零，不可恢复；赠豆通常为活动奖励赠送，不可提现。\n\t\t\t\t\t\t \t\t "},{title:"没抢购成功能退钱吗？",content:" 趣抢购有别于传统意义上的线下抢购，对于抢购成功者而言属于超低价成交，对于抢购者将有一定损耗，所参与抢购的钱均无法退还。如果抢购失败会退还所消耗金豆50%。\n\t\t\t\t\t\t \t\t "},{title:"初级场、中级场、高级场有何区别？",content:" 抢购倒计时和出价手续费有所差别。\n\t\t\t\t\t\t\t\t\t初级场：每出价一次消耗100金豆，抢购倒计时为10分钟。\n\t\t\t\t\t\t\t\t\t中级场：每出价一次消耗500金豆，抢购倒计时为15分钟。\n\t\t\t\t\t\t\t\t\t高级场：每出价一次消耗1000金豆，抢购倒计时为20分钟。\n\t\t\t\t\t\t \t\t "},{title:"为什么有些商品在不同场次同时都有呢？",content:" \n\t\t\t\t\t\t    同样的商品，在初级场每出一次价消耗的金豆少，抢购倒计时短；而中、高级场每次出价消耗金豆更多，抢购倒计时稍长。您可以根据个人喜好，选择不同专区抢购心仪商品。\n\t\t\t\t\t\t\t为什么趣抢购商品市场价高于官方价？\n\t\t\t\t\t\t\t首先，作为抢购平台，大部分商品均以超低的出价次数成交，为保障平台长期稳定运营，更重要是确保广大用户能持续在平台以低价优势获得商品，部分商品价格需要有一定的上浮空间；其次，为保证后期给用户带来更加实惠的采购价格，目前趣抢购采购渠道处于不断开发中，因而前期处于过渡阶段，部分商品在采购价格的基础上有一定上浮。随着采购渠道的不断完善，后期价格上浮比例会逐渐拉小。\n\t\t\t\t\t\t \t\t "},{title:"一场抢购什么时候结束？",content:" 初级场抢购10分钟，中级场抢购15分钟，高级场抢购20分钟，当你看到倒计时器归零的时候就代表这场抢购结束了。\n\t\t\t\t\t\t \t\t "},{title:"抢购成功后应该怎么做？",content:" 哇！恭喜您抢购成功！\n\t\t\t\t\t\t\t\t\t首先您需要到【我的】-【我的订单】-【待确认】中确认订单并填写您的收货信息，我们会及时给您安排发货。请您在抢购结束的30天内确认订单，否则视为自愿放弃商品。如果您有任何问题请联系客服。\n\t\t\t\t\t\t \t\t "},{title:"抢购会产生什么费用？",content:" 抢购过程中每次出一次价需支付一定数额的金豆手续费\n\t\t\t\t\t\t\t\t(1)抢购成功，所消耗金豆不予返还。\n\t\t\t\t\t\t\t\t(2)抢购失败，可退还所消耗金豆50%。\n\t\t\t\t\t\t \t\t "},{title:"什么时候为停售时段？",content:"\n\t\t\t\t\t\t\t\t为保证用户基本作息时间，趣抢购每日凌02:00-07:00点为停售时段，凌晨02:00前已进入抢购倒计时的商品可继续抢购，2点前未进入抢购倒计时的商品将自动延迟到07:00。\n\t\t\t\t\t\t \t\t "},{title:"趣抢购与其他抢购app的差别？",content:"\n\t\t\t\t\t\t\t我知道我们是创新者，但是市面上仍然有许多竞争者，就让我们来告诉你，我们与众不同的优势在哪里，为什么你要把辛苦赚来的钱在趣抢购上进行消费。\n\t\t\t\t\t\t\t\n起源\n\t\t\t\t\t\t\t趣抢购创立于2019年7月，我们的创始人经过自身的经验和详细的调查发现现有的抢购行业存在一系列问题。我们创造出趣抢购是以道德和公平为基础的商业策略，我们希望能够为用户提供一个有趣的抢购过程，来积累干净的声誉，这是我们公司从始至终的方向。说了这么多，这里有一些方法能让你知道趣抢购是如何不同于其他抢购而脱颖而出的。\n\t\t\t\t\t\t\t\n建立道德声誉\n\t\t\t\t\t\t\t现在互联网上有许多所谓一元钱抢购，但却是以骗钱为目的。我们趣抢购认为一个公司如果没有可靠地声誉和道德底线是无法长久的生存下去的，我们开始申请许多社会奖项以及在各大应用商店里面能够持续保持很棒的评价。\n\t\t\t\t\t\t\t趣抢购最近也在思考邀请其他一家独立公司来监督我们的业务是公平合理的，趣抢购将来会邀请独立的会计师事务所来审计我们的商业模式以确保用户放在我们这的钱是安全的。\n\t\t\t\t\t\t\t\n获胜的用户总占大多数\n\t\t\t\t\t\t\t我们对比过其他的抢购平台，趣抢购的新用户在第一天使用时有40%的人可以抢中奖品，这个比例远高于竞争者，而我们也在努力更加提高这个百分比，让用户快乐的抢购是我们的使命。\n\t\t\t\t\t\t\t\n透明度和倾听用户\n\t\t\t\t\t\t\t就像你们看到的，我们同样的，抢购领域内为数不多提供许多技巧和窍门甚至透明了我们的商业模式，我们非常愿意倾听用户的声音以便能够更加进步。为什么我们会这么做？因为您，如果没有您就没有我们。我们感激您的每一条建议。\n\t\t\t\t\t\t\t\n优质的客户服务\n\t\t\t\t\t\t\t最后一个话题是我们很棒的客户服务，我们每一个工作人员都在努力维护您的利益，我相信我们的客户服务是首屈一指的，服务好您就是我们最高的商业价值。\n\t\t\t\t\t\t\t我们工作时间电话永远为您打开，以最快的速度发货等等。\n\t\t\t\t\t\t\t未来我们将会有更多优势，希望您能与我们一同见证！\n\t\t\t\t\t\t\t"},{title:"为什么会出现抢购卡顿现象？",content:" \n\t\t\t\t\t\t\t\t\t趣抢购每天都有成千上万的用户参加，我们统计过，仅有万分之一的用户会遇到卡顿的情况，究竟这种情况是怎么发生的？又如何避免呢？请注意以下提到的几点：\n\t\t\t\t\t\t\t\t\t\n1.参与抢购前请检查您手机当前网络是否通畅。\n\t\t\t\t\t\t\t\t\t一般网络信号不足2格的时候，就容易出现倒计时停顿的现象，这并不是抢购停止，而是您当前网络差页面未能及时刷新的现象。而实际抢购仍在进行中，网络正常的用户的显示也都是同步的。\n\t\t\t\t\t\t\t\t\t\n2.优质的手机配置是顺利抢购的硬性条件\n\t\t\t\t\t\t\t\t\t配置较低的手机及系统运行速度会相对缓慢，显示也容易出现延缓的情况。一般来讲同样的网络环境下iPhone7会比iPhone5反应速度更快。所以选择性能较好的手机非常有必要哦。3.网络信号良好的情况下，4G网络会比WiFi网络更稳定。\n\t\t\t\t\t\t \t\t "}]},{title:"发货说明",list:[{title:"确认订单后什么时候能发货？",content:"\n\t\t\t\t\t\t\t(1)虚拟商品下一个自然日发货，部分商品支持实时发奖。如您在发货前未正确填写收货信息，则发货延期。\n\t\t\t\t\t\t\t(2)实物商品一般在3个工作日内下单发货，具体发货时间和物流单号需要依商家而定。\n\t\t\t\t\t\t\t(3)预售商品发货日需根据实际采购情况而定(一般在90天内发货 )\n\t\t\t\t\t\t\t(4)恶意注册用户将取消抢购资格。\n\t\t\t\t\t\t\t\t "},{title:"长期未收到奖品怎么回事呢？",content:"\n\t\t\t\t\t\t\t(1)确保收货地址、姓名、电话等各项信息的准确性；\n\t\t\t\t\t\t\t(2)配送过程中请确保您的联系方式畅顺无阻，如果联络您的时间超过7天未得到回复，默认您已经放弃此商品。\n\t\t\t\t\t\t\t\t "},{title:"商品是正品吗？",content:" \n\t\t\t\t\t\t\t趣抢购挑选优质服务品牌商家，保证全场奖品100%品牌正品。\n\t\t\t\t\t\t\t如果您认为趣抢购的奖品是假货，并能提供国家相关质检机构的证明文件，经确认后，在返还奖品金额的同时并提供假一赔十服务保障。为了保障您的利益，对趣抢购的奖品，做如下说明：\n\t\t\t\t\t\t\t(1)趣抢购对所有奖品均保证正品行货，正规渠道发货，所有奖品都可以享受生产厂家的全国联保服务，按照国家三包政策，针对所送出奖品履行保修、换货和退货的义务。\n\t\t\t\t\t\t\t(2)出现国家三包所规定的功能性故障时，经由生产厂家指定或特约售后服务中心检测确认故障属实，您可以选择换货或者维修；超过15日且在保修期内，您只能在保修期内享受免费维修服务。为了不耽误您使用，缩短故障奖品的维修时间，我们建议您直接联系生产厂家售后服务中心进行处理。您也可以直接在奖品的保修卡中查找该奖品对应的全国各地生产厂家售后服务中心联系处理。\n\t\t\t\t\t\t\t(3)趣抢购真诚提醒广大幸运者在您收到奖品的时候，请尽量亲自签收并当面拆箱验货，如果有问题(运输途中的损坏)请不要签收，并与快递员交涉，拒签，退回!\n\t\t\t\t\t\t\t(4)在收到奖品后发现有质量问题，请您不要私自处理，妥善保留好原包装，第一时间联系趣抢购客服人员，由趣抢购同发货商城协商在48小时内解决。如有破损或丢失，我们将无法为您办理退货。\n\t\t\t\t\t\t\t\n如对协商处理结果存在异议，请您自行到当地生产厂家售后服务中心进行检测，并开据正规检测报告（对于有些生产厂家售后服务中心无法提供检测报告的，需提供维修检验单据），如果检测报告确认属于质量问题，然后将检测报告、问题奖品及完整包装附件，一并返还发货商城办理换货手续，产生的相关费用由趣抢购追究相关责任方承担。\n\t\t\t\t\t\t\t趣抢购上的电子产品及配件因为生成工艺或仓储物流原因，可能会存在收到或使用过程中出现故障的几率，趣抢购不能保证所有的奖品都没有故障，但我们保证所售奖品都是全新正品行货，能够提供正规的售后保障。我们保证奖品的正规进货渠道和质量，如果您对收到的奖品质量表示怀疑，请提供生产厂家或官方出具的书面鉴定，我们会按照国家法律规定予以处理。但对于任何欺诈性行为，趣抢购将保留依法追究法律责任的权利。本规则最终解释权由趣抢购所有。\n\t\t\t\t\t\t\t"},{title:"商品可以退换吗？",content:"\n\t\t\t\t\t\t\t非质量问题，不在三包范围内，不给予退换货。请尽量亲自签收并当面拆箱验货，如果发现运输途中造成了商品的损坏，请不要签收，可以拒签退回。\n\t\t\t\t\t\t\t\t "}]}]}},methods:{triggerCollapse:function(t){var n=!!this.list[t].open;this.$set(this.list[t],"open",!n)},triggerCollapse2:function(t){var n=!!t.open;this.$set(t,"open",!n)}}};n.default=i},"7d1e":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},f94f:function(t,n,e){}},[["9b66","common/runtime","common/vendor"]]]);
});
require('pages/set/servicesInfo.js');
__wxRoute = 'pages/set/message';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/set/message.js';

define('pages/set/message.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/message"],{2414:function(n,t,u){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},r=[];u.d(t,"a",function(){return e}),u.d(t,"b",function(){return r})},"32a7":function(n,t,u){},"591c":function(n,t,u){"use strict";u.r(t);var e=u("8d83"),r=u.n(e);for(var a in e)"default"!==a&&function(n){u.d(t,n,function(){return e[n]})}(a);t["default"]=r.a},"8d83":function(n,t,u){},c79f:function(n,t,u){"use strict";u.r(t);var e=u("2414"),r=u("591c");for(var a in r)"default"!==a&&function(n){u.d(t,n,function(){return r[n]})}(a);u("ddf7");var c=u("2877"),f=Object(c["a"])(r["default"],e["a"],e["b"],!1,null,null,null);t["default"]=f.exports},ddf7:function(n,t,u){"use strict";var e=u("32a7"),r=u.n(e);r.a}},[["ef4d","common/runtime","common/vendor"]]]);
});
require('pages/set/message.js');
__wxRoute = 'pages/password/change';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/password/change.js';

define('pages/password/change.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/password/change"],{"0fa6":function(t,n,e){"use strict";var o=e("1677"),a=e.n(o);a.a},1677:function(t,n,e){},2235:function(t,n,e){"use strict";e.r(n);var o=e("d8ae"),a=e("804e");for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);e("0fa6");var i=e("2877"),r=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=r.exports},"804e":function(t,n,e){"use strict";e.r(n);var o=e("8318"),a=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);n["default"]=a.a},8318:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{password:"",newPassword:""}},methods:{doReg:function(){if(t.hideKeyboard(),""==this.password)return t.showToast({title:"请输入原密码",icon:"none"}),!1;if(this.newPassword.length<6||this.newPassword.length>16)return t.showToast({title:"请输入6-16个字符的新密码",icon:"none"}),!1;t.showLoading({title:"提交中..."});var n={oldPassword:this.password,newPassword:this.newPassword};this.$api.postAPI("users/modifyPassword",n).then(function(n){if(t.hideLoading(),0!=n.data.code)return t.showToast({title:n.data.msg,icon:"none",duration:3e3});t.showToast({title:"修改成功",icon:"success"}),setTimeout(function(){t.navigateBack()},1500)}).catch(function(n){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})}}};n.default=e}).call(this,e("6e42")["default"])},d8ae:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})}},[["8291","common/runtime","common/vendor"]]]);
});
require('pages/password/change.js');
__wxRoute = 'pages/password/editMobile';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/password/editMobile.js';

define('pages/password/editMobile.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/password/editMobile"],{"021d":function(e,t,n){},"15b4":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"190b":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,i,o,r,a){try{var u=e[r](a),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(i,o)}function a(e){return function(){var t=this,n=arguments;return new Promise(function(i,o){var a=e.apply(t,n);function u(e){r(a,i,o,u,s,"next",e)}function s(e){r(a,i,o,u,s,"throw",e)}u(void 0)})}}var u={name:"login",data:function(){return{phoneNumber:"",code:"",getCodeisWaiting:!1,getCodeText:"获取验证码",isGetCode:!1}},methods:{setTimer:function(){var e=this,t=59;this.getCodeText="重新获取(60)",this.Timer=setInterval(function(){if(t<=0)return e.getCodeisWaiting=!1,e.getCodeText="获取验证码",void clearInterval(e.Timer);e.getCodeText="重新获取("+t+")",t--},1e3)},getCode:function(){var t=this;if(e.hideKeyboard(),!this.getCodeisWaiting){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))return e.showToast({title:"请填写正确手机号码",icon:"none"}),!1;this.getCodeisWaiting=!0;var n={clientType:1,mobile:this.phoneNumber,veriCodeType:3};this.$api.postAPI("users/getVeriCode",n).then(function(e){t.isGetCode=!0,t.getCodeText="发送中...",t.setTimer()}).catch(function(e){t.getCodeisWaiting=!1})}},btnEdit:function(){var t=a(i.default.mark(function t(){var n,o,r,a,u;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e.hideKeyboard(),/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)){t.next=4;break}return e.showToast({title:"请填写正确手机号码",icon:"none"}),t.abrupt("return",!1);case 4:if(""!=this.code){t.next=8;break}return t.abrupt("return",e.showToast({title:"请输入验证码",icon:"none"}));case 8:if(/^\d{4,6}$/g.test(this.code)){t.next=10;break}return t.abrupt("return",e.showToast({title:"请输入正确验证码",icon:"none"}));case 10:if(e.showLoading({title:"提交中..."}),n={newMobile:this.phoneNumber,mobile:"",veriCode:this.code},o="users/modifyMobile",this.isGetCode){t.next=15;break}return t.abrupt("return",e.showToast({title:"请获取验证码",icon:"none",duration:3e3}));case 15:return t.next=17,this.$api.postAPI(o,n);case 17:if(r=t.sent,a=r.data,e.hideLoading(),0!=a.code){t.next=28;break}u=e.getStorageInfoSync("userInfo"),u.mobile=this.phoneNumber,e.setStorageSync("userInfo",u),e.showToast({title:"修改成功",icon:"success"}),setTimeout(function(){e.navigateBack()},1500),t.next=29;break;case 28:return t.abrupt("return",e.showToast({title:a.msg,icon:"none",duration:3e3}));case 29:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}};t.default=u}).call(this,n("6e42")["default"])},"31c3":function(e,t,n){"use strict";n.r(t);var i=n("15b4"),o=n("bc8b");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("94bb");var a=n("2877"),u=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=u.exports},"94bb":function(e,t,n){"use strict";var i=n("021d"),o=n.n(i);o.a},bc8b:function(e,t,n){"use strict";n.r(t);var i=n("190b"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=o.a}},[["fad1","common/runtime","common/vendor"]]]);
});
require('pages/password/editMobile.js');
__wxRoute = 'pages/password/setpassword';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/password/setpassword.js';

define('pages/password/setpassword.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/password/setpassword"],{"2e63":function(t,e,n){"use strict";n.r(e);var o=n("c03e"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},"792d":function(t,e,n){},c03e:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{phoneNumber:"",password:"",code:""}},onLoad:function(t){this.phoneNumber=t.mobile,this.code=t.code},methods:{doReg:function(){if(t.hideKeyboard(),this.password.length<6||this.password.length>16)return t.showToast({title:"请输入6-16个字符的新密码",icon:"none"}),!1;t.showLoading({title:"提交中..."});var e={mobile:this.phoneNumber,password:this.password,veriCode:this.code};this.$api.postAPI("users/forgetPassword",e).then(function(e){if(t.hideLoading(),0!=e.data.code)return t.showToast({title:e.data.msg,icon:"none",duration:3e3});t.showToast({title:"设置成功",icon:"success"}),setTimeout(function(){t.navigateBack({delta:2})},1500)}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})}}};e.default=n}).call(this,n("6e42")["default"])},d787:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},e693:function(t,e,n){"use strict";var o=n("792d"),i=n.n(o);i.a},ed54:function(t,e,n){"use strict";n.r(e);var o=n("d787"),i=n("2e63");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("e693");var s=n("2877"),r=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports}},[["5920","common/runtime","common/vendor"]]]);
});
require('pages/password/setpassword.js');
__wxRoute = 'pages/password/set';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/password/set.js';

define('pages/password/set.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/password/set"],{"0195":function(t,n,e){"use strict";var o=e("6151"),a=e.n(o);a.a},6151:function(t,n,e){},"63c4":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{password:""}},onLoad:function(){},methods:{doReg:function(){if(t.hideKeyboard(),this.password.length<6||this.password.length>16)return t.showToast({title:"请输入6-16个字符的新密码",icon:"none"}),!1;t.showLoading({title:"提交中..."}),this.$api.postAPI("users/setpwd",{password:this.password}).then(function(n){if(t.hideLoading(),0!=n.data.code)return t.showToast({title:n.data.msg,icon:"none",duration:3e3});t.setStorageSync("userInfo_token",n.data.data),t.showToast({title:"登录成功",icon:"success"}),setTimeout(function(){t.switchTab({url:"/pages/user/user"})},1500)}).catch(function(n){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})}}};n.default=e}).call(this,e("6e42")["default"])},"8cf4":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},be7e:function(t,n,e){"use strict";e.r(n);var o=e("8cf4"),a=e("f939");for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);e("0195");var i=e("2877"),u=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports},f939:function(t,n,e){"use strict";e.r(n);var o=e("63c4"),a=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);n["default"]=a.a}},[["ec1a","common/runtime","common/vendor"]]]);
});
require('pages/password/set.js');
__wxRoute = 'pages/user/userInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/userInfo.js';

define('pages/user/userInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/userInfo"],{1414:function(n,e,t){"use strict";t.r(e);var o=t("9491"),u=t("b2b5");for(var a in u)"default"!==a&&function(n){t.d(e,n,function(){return u[n]})}(a);t("30d9");var r=t("2877"),i=Object(r["a"])(u["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},1730:function(n,e,t){},"30d9":function(n,e,t){"use strict";var o=t("1730"),u=t.n(o);u.a},"44f4":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{nickName:"",mobilePhone:""}},onLoad:function(){var e=n.getStorageSync("userInfo");e?(this.nickName=e.nickName,this.mobilePhone=e.mobile):n.navigateTo({url:"/pages/login/login"})},methods:{}};e.default=t}).call(this,t("6e42")["default"])},9491:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return u})},b2b5:function(n,e,t){"use strict";t.r(e);var o=t("44f4"),u=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);e["default"]=u.a}},[["eb19","common/runtime","common/vendor"]]]);
});
require('pages/user/userInfo.js');
__wxRoute = 'pages/address/addres';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/addres.js';

define('pages/address/addres.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/addres"],{"71be":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},"8b2f":function(t,e,a){},"93bc":function(t,e,a){"use strict";var n=a("8b2f"),s=a.n(n);s.a},bd34:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{type:"",addressList:[],totalCount:0,isFirstLoad:!0}},onLoad:function(t){this.type=t.type,this.getListData()},onShow:function(){this.isFirstLoad||this.getListData()},methods:{getListData:function(){var e=this,a={currentPage:this.currentPage,pageSize:this.pageSize};this.$api.postAPI("address/queryAddressList",a).then(function(a){if(t.hideLoading(),0!=a.data.code)return t.showToast({title:a.data.msg,icon:"none",duration:3e3});e.addressList=a.data.data.data,e.totalCount=a.data.data.count}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},addAddress:function(e,a){"edit"==e?(console.log(JSON.stringify(a)," at pages\\address\\addres.vue:61"),t.navigateTo({url:"/pages/address/addressManage?type=".concat(e,"&data=").concat(encodeURIComponent(JSON.stringify(a)))})):t.navigateTo({url:"/pages/address/addressManage?type=".concat(e,"}")})},selectAddress:function(e){"select"==this.type&&(t.setStorageSync("selectAddress",e),setTimeout(function(){t.navigateBack()},500))}}};e.default=a}).call(this,a("6e42")["default"])},e5fb:function(t,e,a){"use strict";a.r(e);var n=a("bd34"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=s.a},ec55:function(t,e,a){"use strict";a.r(e);var n=a("71be"),s=a("e5fb");for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);a("93bc");var o=a("2877"),d=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=d.exports}},[["a838","common/runtime","common/vendor"]]]);
});
require('pages/address/addres.js');
__wxRoute = 'pages/address/addressManage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/addressManage.js';

define('pages/address/addressManage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/addressManage"],{"6d0b":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},a=[];i.d(t,"a",function(){return s}),i.d(t,"b",function(){return a})},be38:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){return i.e("components/mpvue-citypicker/mpvueCityPicker").then(i.bind(null,"7e43"))},a={components:{mpvueCityPicker:s},data:function(){return{editType:"add",id:"",name:"",tel:"",detailed:"",isDefault:!1,cityPickerValue:[0,0,0],themeColor:"#007AFF",region:{label:"省市区县、乡镇",value:[],cityCode:""},addressStr:[],addressStrText:"",addressCode:[]}},onLoad:function(t){if(this.editType=t.type,"edit"==t.type){var i=JSON.parse(decodeURIComponent(t.data));console.log(i," at pages\\address\\addressManage.vue:69"),this.id=i.id,this.name=i.name,this.tel=i.moblie,this.detailed=i.address,this.isDefault=!!i.isDefault||!1,this.cityPickerValue=[i.provinceId,i.cityId,i.areaId],e.setNavigationBarTitle({title:"修改收货地址"})}else e.setNavigationBarTitle({title:"新增地址"})},methods:{onCancel:function(e){console.log(e," at pages\\address\\addressManage.vue:87")},chooseCity:function(){this.$refs.mpvueCityPicker.show()},onConfirm:function(e){console.log(e," at pages\\address\\addressManage.vue:93"),this.cityPickerValue=e.value,this.addressStrText=e.label,this.addressStr=e.label.split("-"),this.addressCode=e.code.split("-")},isDefaultChange:function(e){this.isDefault=!this.isDefault},btnDel:function(){this.delData()},delData:function(){e.showLoading({title:"正在提交"}),this.$api.postAPI("address/deleteAddress",{id:this.id}).then(function(t){if(e.hideLoading(),0!=t.data.code)return e.showToast({title:t.data.msg,icon:"none",duration:3e3});e.showToast({title:"删除成功",duration:3e3}),setTimeout(function(){e.navigateBack()},1500)}).catch(function(t){return e.hideLoading(),e.showToast({title:"网络错误",icon:"none",duration:3e3})})},save:function(){var t=this,i={name:this.name,tel:this.tel,address:{detailed:this.detailed},isDefault:this.isDefault};if("edit"==this.editType&&(i.id=this.id),i.name)if(i.tel){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(i.tel))return e.showToast({title:"请填写正确手机号码",icon:"none"}),!1;if(i.address.detailed)if(0!=this.addressStr.length){e.showLoading({title:"正在提交"});var s={address:this.detailed,areaId:this.addressCode[2],areaName:this.addressStr[2],cityId:this.addressCode[1],cityName:this.addressStr[1],moblie:this.tel,name:this.name,proviceName:this.addressStr[0],provinceId:this.addressCode[0],isDefault:this.isDefault?1:0},a="address/addAddress";"edit"==this.editType&&(s.id=this.id,a="address/modifyAddress"),this.$api.postAPI(a,s).then(function(i){if(e.hideLoading(),0!=i.data.code)return e.showToast({title:i.data.msg,icon:"none",duration:3e3});e.showToast({title:"edit"==t.editType?"修改成功":"添加成功",duration:3e3}),setTimeout(function(){e.navigateTo({url:"/pages/address/addres?title=addres"})},1500)}).catch(function(t){return e.hideLoading(),e.showToast({title:"网络错误",icon:"none",duration:3e3})})}else e.showToast({title:"请选择收件地址",icon:"none"});else e.showToast({title:"请输入收件人详细地址",icon:"none"})}else e.showToast({title:"电话号码不能为空",icon:"none"});else e.showToast({title:"请输入收件人姓名",icon:"none"})}},onBackPress:function(){if(this.$refs.mpvueCityPicker.showPicker)return this.$refs.mpvueCityPicker.pickerCancel(),!0},onUnload:function(){this.$refs.mpvueCityPicker.showPicker&&this.$refs.mpvueCityPicker.pickerCancel()}};t.default=a}).call(this,i("6e42")["default"])},c6db:function(e,t,i){},db3f:function(e,t,i){"use strict";i.r(t);var s=i("6d0b"),a=i("e659");for(var n in a)"default"!==n&&function(e){i.d(t,e,function(){return a[e]})}(n);i("f1fd");var d=i("2877"),o=Object(d["a"])(a["default"],s["a"],s["b"],!1,null,null,null);t["default"]=o.exports},e659:function(e,t,i){"use strict";i.r(t);var s=i("be38"),a=i.n(s);for(var n in s)"default"!==n&&function(e){i.d(t,e,function(){return s[e]})}(n);t["default"]=a.a},f1fd:function(e,t,i){"use strict";var s=i("c6db"),a=i.n(s);a.a}},[["690f","common/runtime","common/vendor"]]]);
});
require('pages/address/addressManage.js');
__wxRoute = 'pages/order/order';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/order.js';

define('pages/order/order.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"5beb":function(t,e,n){"use strict";n.r(e);var a=n("ddbd"),o=n("c67e");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("9f39");var i=n("2877"),d=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=d.exports},"8ba2":function(t,e,n){},"9f39":function(t,e,n){"use strict";var a=n("8ba2"),o=n.n(a);o.a},c67e:function(t,e,n){"use strict";n.r(e);var a=n("faf7"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},ddbd:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},faf7:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"fd3c"))},o={components:{uniLoadMore:a},data:function(){return{isFirstLoad:!0,tabCurrentIndex:0,pageSize:10,showPay:!1,tempOpItem:{},navList:[{currentPageIndex:1,text:"全部",loadingType:"more",orderList:[]},{currentPageIndex:1,text:"待确认",loadingType:"more",orderList:[]},{currentPageIndex:1,text:"待收货",loadingType:"more",orderList:[]},{currentPageIndex:1,text:"已完成",loadingType:"more",orderList:[]}]}},onLoad:function(t){this.tabCurrentIndex=+t.state,this.loadData()},onShow:function(){this.isFirstLoad||this.refreshData()},methods:{btn:function(){t.redirectTo({url:"/pages/session/primarys"})},refreshData:function(){this.navList=[{currentPageIndex:1,text:"全部",loadingType:"more",orderList:[]},{currentPageIndex:1,text:"待确认",loadingType:"more",orderList:[]},{currentPageIndex:1,text:"待收货",loadingType:"more",orderList:[]},{currentPageIndex:1,text:"已完成",loadingType:"more",orderList:[]}],this.loadData("tabChange")},toSure:function(e){"0"==e.status?t.navigateTo({url:"/pages/order/affirm?periodId=".concat(e.periodId)}):"3"!=e.status?(this.toShowPop(),this.tempOpItem=e):t.navigateTo({url:"/pages/product/detail?periodId=".concat(e.periodId)})},btnSureOK:function(){var e=this,n=this;n.confirmReceipt(this.tempOpItem,function(){e.hidePop(),t.showToast({title:"操作成功",icon:"none"}),setTimeout(function(){n.refreshData()},1200)})},btnCancle:function(){this.hidePop()},confirmReceipt:function(e,n){var a={orderNo:e.orderNo,periodId:e.periodNo};this.$api.postAPI("address/confirmReceipt",a).then(function(e){if(t.hideLoading(),0!=e.data.code)return t.showToast({title:e.data.msg,icon:"none",duration:3e3});n&&n()}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},loadData:function(t){var e=this.tabCurrentIndex,n=this.navList[e];n.state;"tabChange"===t&&!0===n.loaded||"loading"!==n.loadingType&&"noMore"!==n.loadingType&&(n.loadingType="loading",this.getData(this.tabCurrentIndex))},changeTab:function(t){this.tabCurrentIndex=t.target.current,this.loadData("tabChange")},tabClick:function(t){this.tabCurrentIndex=t,console.log(t," at pages\\order\\order.vue:233")},getData:function(e){var n=this;e=e||0;var a=this.navList[e],o={currentPage:a.currentPageIndex,data:{},pageSize:this.pageSize};e>0&&(o.data.status=e),this.$api.postAPI("guess/myOrderList",o).then(function(e){if(t.hideLoading(),n.$set(a,"loaded",!0),n.isFirstLoad=!1,0!=e.data.code)return t.showToast({title:e.data.msg,icon:"none",duration:3e3});if(a.orderList.length>0){var o=e.data.data.data;a.orderList=o,o.length<n.pageSize?a.loadingType="noMore":(a.currentPageIndex++,a.loadingType="more")}else a.orderList=e.data.data.data,a.orderList.length<n.pageSize?a.loadingType="noMore":(a.currentPageIndex++,a.loadingType="more")}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},hidePop:function(){var t=this;this.showPay=!this.showPay,setTimeout(function(){t.$refs.masklayer.$el.style.display="none"},200)},toShowPop:function(t){var e=this;this.$refs.masklayer.$el.style.display="block",setTimeout(function(){e.showPay=!0},100)}}};e.default=o}).call(this,n("6e42")["default"])}},[["718a","common/runtime","common/vendor"]]]);
});
require('pages/order/order.js');
__wxRoute = 'pages/order/goods';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/goods.js';

define('pages/order/goods.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/goods"],{"0401":function(e,t,n){},"5b9c":function(e,t,n){"use strict";var a=n("0401"),r=n.n(a);r.a},"720e":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,a,r,i,o){try{var u=e[i](o),d=u.value}catch(s){return void n(s)}u.done?t(d):Promise.resolve(d).then(a,r)}function o(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function u(e){i(o,a,r,u,d,"next",e)}function d(e){i(o,a,r,u,d,"throw",e)}u(void 0)})}}var u=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"fd3c"))},d=function(){return n.e("components/uni-countdown/uni-countdown").then(n.bind(null,"c7cc"))},s={components:{uniLoadMore:u,uniCountdown:d},data:function(){return{tabCurrentIndex:0,pageSize:10,navList:[{currentPageIndex:1,text:"全部",loadingType:"more",orderList:[]},{currentPageIndex:1,text:"抢购中",loadingType:"more",orderList:[]},{currentPageIndex:1,text:"已抢中",loadingType:"more",orderList:[]},{currentPageIndex:1,text:"未抢中",loadingType:"more",orderList:[]}]}},onLoad:function(e){this.tabCurrentIndex=+e.state,this.loadData()},filters:{covertDate:function(e){return e?new Date(e).Format("yyyy-MM-dd hh:mm:ss"):""}},methods:{btn:function(){e.switchTab({url:"/pages/session/primarys"})},loadData:function(e){var t=this.tabCurrentIndex,n=this.navList[t];"tabChange"===e&&!0===n.loaded||"loading"!==n.loadingType&&"noMore"!==n.loadingType&&(n.loadingType="loading",this.getData(this.tabCurrentIndex))},changeTab:function(){var e=o(a.default.mark(function e(t){return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.tabCurrentIndex=t.target.current,this.loadData("tabChange");case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),tabClick:function(e){this.tabCurrentIndex=e},getData:function(t){var n=this;t=t||0;var a=this.navList[t],r={currentPage:a.currentPageIndex,data:{},pageSize:this.pageSize};t>0&&(r.data.status=t),this.$api.postAPI("guess/myGuessList",r).then(function(t){if(e.hideLoading(),n.$set(a,"loaded",!0),0!=t.data.code)return e.showToast({title:t.data.msg,icon:"none",duration:3e3});if(a.orderList.length>0){var r=n.handlerData(t.data.timestamp,t.data.data.data);a.orderList=a.orderList.concat(r),r.length<n.pageSize?a.loadingType="noMore":(a.currentPageIndex++,a.loadingType="more")}else a.orderList=n.handlerData(t.data.timestamp,t.data.data.data),a.orderList.length<n.pageSize?a.loadingType="noMore":(a.currentPageIndex++,a.loadingType="more")}).catch(function(t){return e.hideLoading(),e.showToast({title:"网络错误",icon:"none",duration:3e3})})},handlerData:function(e,t){var n=[].concat(t),a=!0,r=!1,i=void 0;try{for(var o,u=n[Symbol.iterator]();!(a=(o=u.next()).done);a=!0){var d=o.value;this.handlerTime(e,d)}}catch(s){r=!0,i=s}finally{try{a||null==u.return||u.return()}finally{if(r)throw i}}return n},handlerTime:function(e,t){var n=this,a=new Date(e||t.currentTime);if(e&&(t.currentTime=e),1==t.executeStatus){var r=new Date(t.guessEndTime),i=r.getTime()-a.getTime();t.tips="距结束",t.isRefreshTime=!1,this.$nextTick(function(){t.isRefreshTime=!0,t.countdownTime=i>0?n.getMSDate(i):[0,0,0]})}else if(2==t.executeStatus){var o=new Date(t.lotteryTime),u=new Date(t.guessEndTime),d=u.getTime()-a.getTime();a=a.getTime()+d+1e3;var s=o.getTime()-a;t.tips="结果确认中",t.isRefreshTime=!1,this.$nextTick(function(){t.isRefreshTime=!0,t.countdownTime=s>0?n.getMSDate(s):[0,0,0]})}},getMSDate:function(e){Math.floor(e/864e5);var t=e%864e5,n=Math.floor(t/36e5),a=t%36e5,r=Math.floor(a/6e4),i=a%6e4,o=Math.round(i/1e3);return[n,r,o]},timeup:function(e){var t=this;1==e.executeStatus?(e.tips="获取中...",e.isRefreshTime=!1,setTimeout(function(){e.executeStatus=2,t.handlerTime(null,e)},1e3)):2==e.executeStatus&&(e.executeStatus=3,e.tips="获取中...",e.isRefreshTime=!1,setTimeout(function(){t.navList=[{currentPageIndex:1,text:"全部",loadingType:"more",orderList:[]},{currentPageIndex:1,text:"抢购中",loadingType:"more",orderList:[]},{currentPageIndex:1,text:"已抢中",loadingType:"more",orderList:[]},{currentPageIndex:1,text:"未抢中",loadingType:"more",orderList:[]}],t.loadData("tabChange")},3e3))},toDetail:function(t){e.navigateTo({url:"/pages/product/detail?periodId=".concat(t.periodId)})},toNextQi:function(t){this.$api.postAPI("period/nextNewPeroid",{id:t.periodId}).then(function(t){if(e.hideLoading(),0!=t.data.code)return e.showToast({title:t.data.msg,icon:"none",duration:3e3});e.navigateTo({url:"/pages/product/detail?periodId=".concat(t.data.data.id)})}).catch(function(t){return e.hideLoading(),e.showToast({title:"网络错误",icon:"none",duration:3e3})})}}};t.default=s}).call(this,n("6e42")["default"])},"79dc":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.navList,function(t,n){var a=e.__map(t.orderList,function(t,n){var a=e._f("covertDate")(t.guessStartTime);return{$orig:e.__get_orig(t),f0:a}});return{$orig:e.__get_orig(t),l0:a}}));e.$mp.data=Object.assign({},{$root:{l1:n}})},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},"82c3":function(e,t,n){"use strict";n.r(t);var a=n("720e"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=r.a},f35d:function(e,t,n){"use strict";n.r(t);var a=n("79dc"),r=n("82c3");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("5b9c");var o=n("2877"),u=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,null,null);t["default"]=u.exports}},[["2c0c","common/runtime","common/vendor"]]]);
});
require('pages/order/goods.js');
__wxRoute = 'pages/order/affirm';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/affirm.js';

define('pages/order/affirm.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/affirm"],{1922:function(t,e,n){"use strict";var o=n("48e5"),a=n.n(o);a.a},"46fd":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{isFirstLoad:!0,periodId:"",periodData:{},addressInfo:""}},onLoad:function(e){this.periodId=e.periodId,t.removeStorageSync("selectAddress"),this.getAddressInfo(),this.getQihaoData()},onShow:function(e){if(!this.isFirstLoad){var n=t.getStorageSync("selectAddress");n?this.addressInfo=n:this.getAddressInfo()}},filters:{covertMobile:function(t){return t.length>=11?t.replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2"):t}},methods:{wanshang:function(){t.navigateTo({url:"/pages/address/addressManage"})},toAddress:function(){t.navigateTo({url:"/pages/address/addres?type=select"})},getQihaoData:function(){var e=this;this.$api.postAPI("period/queryPeriodDetail",{id:this.periodId}).then(function(n){if(t.hideLoading(),e.isFirstLoad=!1,0!=n.data.code)return t.showToast({title:n.data.msg,icon:"none",duration:3e3});e.periodData=n.data.data}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},getAddressInfo:function(){var e=this;this.$api.postAPI("address/queryAddressDetail").then(function(n){if(t.hideLoading(),e.isFirstLoad=!1,0!=n.data.code)return t.showToast({title:n.data.msg,icon:"none",duration:3e3});e.addressInfo=n.data.data}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},btnSureAddress:function(){if(!this.addressInfo.id)return t.showToast({title:"完善收货信息",icon:"none",duration:3e3});var e={addressId:this.addressInfo.id,periodId:this.periodId};this.$api.postAPI("address/orderBindAddress",e).then(function(e){if(t.hideLoading(),0!=e.data.code)return t.showToast({title:e.data.msg,icon:"none",duration:3e3});t.showToast({title:"操作成功"}),setTimeout(function(){t.navigateBack()},1500)}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})}}};e.default=n}).call(this,n("6e42")["default"])},"48e5":function(t,e,n){},7962:function(t,e,n){"use strict";n.r(e);var o=n("d61c"),a=n("7c0a");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("1922");var d=n("2877"),s=Object(d["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},"7c0a":function(t,e,n){"use strict";n.r(e);var o=n("46fd"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},d61c:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t._f("covertMobile")(t.addressInfo.moblie));t.$mp.data=Object.assign({},{$root:{f0:n}})},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})}},[["fba9","common/runtime","common/vendor"]]]);
});
require('pages/order/affirm.js');
__wxRoute = 'pages/order/details';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/details.js';

define('pages/order/details.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/details"],{3819:function(n,t,u){"use strict";u.r(t);var r=u("b951"),a=u("8357");for(var e in a)"default"!==e&&function(n){u.d(t,n,function(){return a[n]})}(e);u("4736");var f=u("2877"),o=Object(f["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=o.exports},4736:function(n,t,u){"use strict";var r=u("6af1"),a=u.n(r);a.a},"6af1":function(n,t,u){},8357:function(n,t,u){"use strict";u.r(t);var r=u("fb66"),a=u.n(r);for(var e in r)"default"!==e&&function(n){u.d(t,n,function(){return r[n]})}(e);t["default"]=a.a},b951:function(n,t,u){"use strict";var r=function(){var n=this,t=n.$createElement;n._self._c},a=[];u.d(t,"a",function(){return r}),u.d(t,"b",function(){return a})},fb66:function(n,t,u){}},[["0af5","common/runtime","common/vendor"]]]);
});
require('pages/order/details.js');
__wxRoute = 'pages/product/store';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/store.js';

define('pages/product/store.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/store"],{"5a8b":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{payType:1,showPay:!1,payMoney:0,curPayItem:"",list:[]}},onLoad:function(){this.getMyDD()},methods:{getMyDD:function(){var n=this;this.$api.postAPI("points/pointsProductList").then(function(i){if(t.hideLoading(),0!=i.data.code)return t.showToast({title:i.data.msg,icon:"none",duration:3e3});n.list=i.data.data}).catch(function(n){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},changePayType:function(t){this.payType=t.mp.detail.value},hidePop:function(){var t=this;this.showPay=!this.showPay,setTimeout(function(){t.$refs.masklayer.$el.style.display="none"},200)},toPayPop:function(t){var n=this;this.payMoney=t.price,this.curPayItem=t,this.$refs.masklayer.$el.style.display="block",setTimeout(function(){n.showPay=!0},100)},btnToPay:function(){this.curPayItem&&this.confirm()},getUUID:function(){return"xxxx-xxxx-xxxx-xxxx-xxxx".replace(/[xy]/g,function(t){var n=16*Math.random()|0,i="x"==t?n:3&n|8;return i.toString(16)})},confirm:function(){var n=this,i=this.getUUID();this.$api.postAPI("points/buyPoints",{outOrderNo:i,productTicketId:this.curPayItem.id}).then(function(i){if(t.hideLoading(),0!=i.data.code)return t.showToast({title:i.data.msg,icon:"none",duration:3e3});n.toPay(i.data.data.orderNo)}).catch(function(n){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},toPay:function(n){var i=this,o={orderNo:n,payType:this.payType};t.showLoading({title:"正在提交中..."}),this.$api.postAPI("pay/pay",o).then(function(n){if(setTimeout(function(){t.hideLoading()},8e3),0!=n.data.code)return t.showToast({title:n.data.msg,icon:"none",duration:3e3});i.goClientPay(n.data.data)}).catch(function(n){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},goClientPay:function(n){var i=1==this.payType?"wxpay":"alipay",o=1==this.payType?"Sign=WXPay":"Sign=alipay",a={appid:n.appid,partnerid:n.partnerid,prepayid:n.prepayid,package:o,noncestr:n.noncestr,timestamp:n.timestamp,sign:n.sign};t.requestPayment({provider:i,orderInfo:JSON.stringify(a),success:function(n){t.hideLoading(),console.log("success:"+JSON.stringify(n)," at pages\\product\\store.vue:173"),this.payMessage=n,t.showToast({title:n,icon:"none",duration:3e3}),setTimeout(function(){t.navigateBack()},1500)},fail:function(n){t.hideLoading(),console.log("fail:"+JSON.stringify(n)," at pages\\product\\store.vue:182"),t.showToast({title:"支付失败",icon:"none",duration:3e3})}})}}};n.default=i}).call(this,i("6e42")["default"])},"633f":function(t,n,i){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];i.d(n,"a",function(){return o}),i.d(n,"b",function(){return a})},7013:function(t,n,i){"use strict";i.r(n);var o=i("633f"),a=i("c862");for(var e in a)"default"!==e&&function(t){i.d(n,t,function(){return a[t]})}(e);i("e11a");var s=i("2877"),r=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=r.exports},"83bb":function(t,n,i){},c862:function(t,n,i){"use strict";i.r(n);var o=i("5a8b"),a=i.n(o);for(var e in o)"default"!==e&&function(t){i.d(n,t,function(){return o[t]})}(e);n["default"]=a.a},e11a:function(t,n,i){"use strict";var o=i("83bb"),a=i.n(o);a.a}},[["6417","common/runtime","common/vendor"]]]);
});
require('pages/product/store.js');
__wxRoute = 'pages/user/venosa';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/venosa.js';

define('pages/user/venosa.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/venosa"],{"39a3":function(t,e,n){"use strict";n.r(e);var a=n("5a79"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},"3e97":function(t,e,n){"use strict";var a=n("8e08"),o=n.n(a);o.a},"5a79":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,a,o,r,i){try{var u=t[r](i),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(a,o)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(a,o){var i=t.apply(e,n);function u(t){r(i,a,o,u,s,"next",t)}function s(t){r(i,a,o,u,s,"throw",t)}u(void 0)})}}var u={data:function(){return{giftPoints:0,points:0,listData:[],currentPage:1,pageSize:10,totalCount:0,isFirstLoad:!0}},onLoad:function(){this.getMyPoints(),this.getDuoData()},filters:{covertType:function(t){var e="";switch(t){case"1":e="充值";break;case"2":e="活动";break;case"3":e="兑换";break}return e},covertDate:function(t){return t?new Date(t).Format("yyyy.MM.dd hh:mm:ss"):""}},methods:{getMyPoints:function(){var e=i(a.default.mark(function e(){var n,o;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.postAPI("points/detail");case 2:if(n=e.sent,o=n.data,0!=o.code){e.next=9;break}this.giftPoints=o.data.giftPoints,this.points=o.data.points,e.next=10;break;case 9:return e.abrupt("return",t.showToast({title:o.msg,icon:"none",duration:3e3}));case 10:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),getDuoData:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"init",a={currentPage:this.currentPage,pageSize:this.pageSize};this.$api.postAPI("points/userTradeList",a).then(function(a){if(t.hideLoading(),0!=a.data.code)return t.showToast({title:a.data.msg,icon:"none",duration:3e3});e.isFirstLoad=!1,e.currentPage++;var o=a.data.data.data;e.moreStatus=0==o.length?"noMore":"","more"==n?e.listData=e.listData.concat(o):(e.listData=a.data.data.data,e.totalCount=a.data.data.count)}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})}},onReachBottom:function(){"noMore"!=this.moreStatus&&this.getDuoData("more")}};e.default=u}).call(this,n("6e42")["default"])},"8e08":function(t,e,n){},cd24:function(t,e,n){"use strict";n.r(e);var a=n("e700"),o=n("39a3");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("3e97");var i=n("2877"),u=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},e700:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.listData,function(e,n){var a=t._f("covertType")(e.optType),o=t._f("covertDate")(e.createTime);return{$orig:t.__get_orig(e),f0:a,f1:o}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})}},[["26e4","common/runtime","common/vendor"]]]);
});
require('pages/user/venosa.js');
__wxRoute = 'pages/order/pay';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/pay.js';

define('pages/order/pay.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/pay"],{"070b":function(t,n,e){"use strict";e.r(n);var i=e("f428"),a=e("ab15");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("fd49");var r=e("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=c.exports},"7b7c":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{payType:1,payNumber:0,ticketId:0,price:0,payMessage:""}},computed:{},onLoad:function(t){this.payNumber=t.num,this.price=t.price,this.ticketId=t.id},methods:{changePayType:function(t){this.payType=t.mp.detail.value},getUUID:function(){return"xxxx-xxxx-xxxx-xxxx-xxxx".replace(/[xy]/g,function(t){var n=16*Math.random()|0,e="x"==t?n:3&n|8;return e.toString(16)})},confirm:function(){var n=this,e=this.getUUID();this.$api.postAPI("points/buyPoints",{outOrderNo:e,productTicketId:this.ticketId}).then(function(e){if(t.hideLoading(),0!=e.data.code)return t.showToast({title:e.data.msg,icon:"none",duration:3e3});n.toPay(e.data.data.orderNo)}).catch(function(n){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},toPay:function(n){var e=this,i={orderNo:n,payType:this.payType};t.showLoading({title:"正在提交中..."}),this.$api.postAPI("pay/pay",i).then(function(n){if(setTimeout(function(){t.hideLoading()},8e3),0!=n.data.code)return t.showToast({title:n.data.msg,icon:"none",duration:3e3});e.goClientPay(n.data.data)}).catch(function(n){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},goClientPay:function(n){var e=1==this.payType?"wxpay":"alipay",i=1==this.payType?"Sign=WXPay":"Sign=alipay",a={appid:n.appid,partnerid:n.partnerid,prepayid:n.prepayid,package:i,noncestr:n.noncestr,timestamp:n.timestamp,sign:n.sign};t.requestPayment({provider:e,orderInfo:JSON.stringify(a),success:function(n){t.hideLoading(),console.log("success:"+JSON.stringify(n)," at pages\\order\\pay.vue:140"),this.payMessage=n,t.showToast({title:n,icon:"none",duration:3e3}),setTimeout(function(){t.navigateBack()},1500)},fail:function(n){t.hideLoading(),console.log("fail:"+JSON.stringify(n)," at pages\\order\\pay.vue:149"),t.showToast({title:"支付失败",icon:"none",duration:3e3})}})}}};n.default=e}).call(this,e("6e42")["default"])},"910c":function(t,n,e){},ab15:function(t,n,e){"use strict";e.r(n);var i=e("7b7c"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},f428:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},fd49:function(t,n,e){"use strict";var i=e("910c"),a=e.n(i);a.a}},[["670d","common/runtime","common/vendor"]]]);
});
require('pages/order/pay.js');
__wxRoute = 'pages/set/gift';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/set/gift.js';

define('pages/set/gift.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/gift"],{1319:function(n,t,u){},4971:function(n,t,u){"use strict";var c=function(){var n=this,t=n.$createElement;n._self._c},r=[];u.d(t,"a",function(){return c}),u.d(t,"b",function(){return r})},"644c":function(n,t,u){},"8b57":function(n,t,u){"use strict";u.r(t);var c=u("4971"),r=u("d179");for(var e in r)"default"!==e&&function(n){u.d(t,n,function(){return r[n]})}(e);u("b8bd");var o=u("2877"),a=Object(o["a"])(r["default"],c["a"],c["b"],!1,null,null,null);t["default"]=a.exports},b8bd:function(n,t,u){"use strict";var c=u("644c"),r=u.n(c);r.a},d179:function(n,t,u){"use strict";u.r(t);var c=u("1319"),r=u.n(c);for(var e in c)"default"!==e&&function(n){u.d(t,n,function(){return c[n]})}(e);t["default"]=r.a}},[["cce3","common/runtime","common/vendor"]]]);
});
require('pages/set/gift.js');
__wxRoute = 'pages/set/sign';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/set/sign.js';

define('pages/set/sign.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/sign"],{3472:function(n,t,e){"use strict";var o=e("e475"),r=e.n(o);r.a},"55f8":function(n,t,e){"use strict";e.r(t);var o=e("59aa"),r=e("f330");for(var i in r)"default"!==i&&function(n){e.d(t,n,function(){return r[n]})}(i);e("3472");var a=e("2877"),c=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports},"59aa":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){n.openAdPopup=!0},n.e1=function(t){n.openAdPopup=!1})},r=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return r})},a0f5:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return e.e("components/uni-popup/YYT-popup").then(e.bind(null,"4128"))},r={components:{popup:o},data:function(){return{imageURL:["../../static/img/error/copy.png","../../static/img/header/pic-zhongji-n.png","../../static/img/header/pic-gaoji-n.png"],openPopup:!1,position:"",background:"#fff",openAdPopup:!1,percent:0,showText:!1,change:!1,loopTimer:!1,sizeSort:"asc"}},methods:{open:function(n){this.position=n,this.openPopup=!0},touchend:function(){clearInterval(this.loopTimer)},changeBgColor:function(n){var t=this;clearInterval(this.loopTimer),this.loopTimer=setInterval(function(){var n=Math.floor(256*Math.random()),e=Math.floor(256*Math.random()),o=Math.floor(256*Math.random()),r="#"+n.toString(16)+e.toString(16)+o.toString(16);t.background=r},300)},changeSize:function(){var n=this;clearInterval(this.loopTimer),this.loopTimer=setInterval(function(){var t=[40,45,50,55,60,65,70,75,80];n.percent<=40&&(n.sizeSort="asc"),n.percent>=80&&(n.sizeSort="desc"),"desc"==n.sizeSort&&(t=t.reverse());for(var e=0;e<=t.length;e++)if("desc"==n.sizeSort){if(n.percent>t[e]){n.percent=t[e];break}}else if(n.percent<t[e]){n.percent=t[e];break}},200)},reset:function(){this.percent=0,this.background="#fff",this.showText=!1}}};t.default=r},e475:function(n,t,e){},f330:function(n,t,e){"use strict";e.r(t);var o=e("a0f5"),r=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=r.a}},[["c790","common/runtime","common/vendor"]]]);
});
require('pages/set/sign.js');
__wxRoute = 'pages/set/double';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/set/double.js';

define('pages/set/double.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/double"],{5400:function(n,t,e){},"5f0d":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{imageURL:["../../static/img/header/song.png","../../static/img/header/pic-zhongji-n.png","../../static/img/header/pic-gaoji-n.png"]}}};t.default=a},"9e5d":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})},ac91:function(n,t,e){"use strict";var a=e("5400"),u=e.n(a);u.a},d9fd:function(n,t,e){"use strict";e.r(t);var a=e("5f0d"),u=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);t["default"]=u.a},fa22:function(n,t,e){"use strict";e.r(t);var a=e("9e5d"),u=e("d9fd");for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);e("ac91");var i=e("2877"),c=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports}},[["df50","common/runtime","common/vendor"]]]);
});
require('pages/set/double.js');
__wxRoute = 'pages/set/send';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/set/send.js';

define('pages/set/send.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/send"],{"164f":function(n,e,t){"use strict";t.r(e);var o=t("232e"),i=t("7f75");for(var r in i)"default"!==r&&function(n){t.d(e,n,function(){return i[n]})}(r);t("aba9");var a=t("2877"),c=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},"232e":function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement;n._self._c;n._isMounted||(n.e0=function(e){n.openAdPopup=!0},n.e1=function(e){n.openAdPopup=!1})},i=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return i})},"5bf8":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return t.e("components/uni-popup/YYT-popup").then(t.bind(null,"4128"))},i={components:{popup:o},data:function(){return{imageURL:["../../static/img/header/mianfei.png","../../static/img/header/pic-zhongji-n.png","../../static/img/header/pic-gaoji-n.png"],openPopup:!1,position:"",background:"#fff",openAdPopup:!1,percent:0,showText:!1,change:!1,loopTimer:!1,sizeSort:"asc"}},methods:{btn:function(){n.navigateTo({url:"/pages/login/login"})},open:function(n){this.position=n,this.openPopup=!0},touchend:function(){clearInterval(this.loopTimer)},changeBgColor:function(n){var e=this;clearInterval(this.loopTimer),this.loopTimer=setInterval(function(){var n=Math.floor(256*Math.random()),t=Math.floor(256*Math.random()),o=Math.floor(256*Math.random()),i="#"+n.toString(16)+t.toString(16)+o.toString(16);e.background=i},300)},changeSize:function(){var n=this;clearInterval(this.loopTimer),this.loopTimer=setInterval(function(){var e=[40,45,50,55,60,65,70,75,80];n.percent<=40&&(n.sizeSort="asc"),n.percent>=80&&(n.sizeSort="desc"),"desc"==n.sizeSort&&(e=e.reverse());for(var t=0;t<=e.length;t++)if("desc"==n.sizeSort){if(n.percent>e[t]){n.percent=e[t];break}}else if(n.percent<e[t]){n.percent=e[t];break}},200)},reset:function(){this.percent=0,this.background="#fff",this.showText=!1}}};e.default=i}).call(this,t("6e42")["default"])},"7f75":function(n,e,t){"use strict";t.r(e);var o=t("5bf8"),i=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);e["default"]=i.a},aba9:function(n,e,t){"use strict";var o=t("edf5"),i=t.n(o);i.a},edf5:function(n,e,t){}},[["ba20","common/runtime","common/vendor"]]]);
});
require('pages/set/send.js');
__wxRoute = 'pages/product/newlist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/newlist.js';

define('pages/product/newlist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/newlist"],{1479:function(t,e,a){"use strict";a.r(e);var n=a("9000"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=o.a},2885:function(t,e,a){},7161:function(t,e,a){"use strict";var n=a("2885"),o=a.n(n);o.a},9000:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{isFirstLoad:!0,pageIndex:1,pageSize:10,moreStatus:"",newSuccessData:[]}},onLoad:function(){this.getNewSuccessData()},filters:{covertDate:function(t){return t?new Date(t).Format("yyyy-MM-dd hh:mm:ss"):""}},methods:{getNewSuccessData:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"init",n={currentPage:this.pageIndex,pageSize:this.pageSize};this.$api.postAPI("guess/newGuessResult",n).then(function(n){if(t.hideLoading(),0!=n.data.code)return t.showToast({title:n.data.msg,icon:"none",duration:3e3});e.isFirstLoad=!1,e.pageIndex++;var o=n.data.data.data;e.moreStatus=0==o.length?"noMore":"",e.newSuccessData="more"==a?e.newSuccessData.concat(o):n.data.data.data}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},toDetail:function(e){t.navigateTo({url:"/pages/product/detail?periodId=".concat(e.periodId)})}},onReachBottom:function(){"noMore"!=this.moreStatus&&this.getNewSuccessData("more")}};e.default=a}).call(this,a("6e42")["default"])},b257:function(t,e,a){"use strict";a.r(e);var n=a("c723"),o=a("1479");for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);a("7161");var r=a("2877"),u=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},c723:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.__map(t.newSuccessData,function(e,a){var n=t._f("covertDate")(e.startTime);return{$orig:t.__get_orig(e),f0:n}}));t.$mp.data=Object.assign({},{$root:{l0:a}})},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})}},[["027a","common/runtime","common/vendor"]]]);
});
require('pages/product/newlist.js');
__wxRoute = 'pages/product/wdyc';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/wdyc.js';

define('pages/product/wdyc.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/wdyc"],{"084a":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.woDeYCData,function(e,n){var i=t._f("toFormatDt")(e.createTime);return{$orig:t.__get_orig(e),f0:i}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},3421:function(t,e,n){"use strict";n.r(e);var i=n("7d26"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"6c96":function(t,e,n){"use strict";n.r(e);var i=n("084a"),o=n("3421");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("bed5");var r=n("2877"),u=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},"7d26":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,String.prototype.PadLeft=function(t,e){var n=this+"";return new Array(t-n.length+1).join(e||"")+n};var n={data:function(){return{periodId:"",woDeYCData:[],showTipPrice:!1}},onLoad:function(t){this.periodId=t.periodId,this.getWoDeYC()},filters:{toFormatDt:function(t){if(!t)return"";var e=new Date(t),n=(e.getMonth()+1).toString().PadLeft(2,"0"),i=e.getDate().toString().PadLeft(2,"0"),o=e.getHours().toString().PadLeft(2,"0"),a=e.getMinutes().toString().PadLeft(2,"0"),r=e.getSeconds().toString().PadLeft(2,"0");return n+"-"+i+" "+o+":"+a+":"+r}},methods:{showPriceTips:function(){var t=this;this.$refs.masklayer.$el.style.display="block",setTimeout(function(){t.showTipPrice=!0},100)},hidePopPrice:function(){var t=this;this.showTipPrice=!this.showTipPrice,setTimeout(function(){t.$refs.masklayer.$el.style.display="none"},200)},getWoDeYC:function(){var e=this;this.$api.postAPI("guess/queryMyPeriodGuess",{currentPage:1,data:{id:this.periodId},pageSize:1e3}).then(function(n){if(t.hideLoading(),0!=n.data.code)return t.showToast({title:n.data.msg,icon:"none",duration:3e3});e.woDeYCData=n.data.data.data}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})}}};e.default=n}).call(this,n("6e42")["default"])},bed5:function(t,e,n){"use strict";var i=n("d066"),o=n.n(i);o.a},d066:function(t,e,n){}},[["528c","common/runtime","common/vendor"]]]);
});
require('pages/product/wdyc.js');
__wxRoute = 'pages/product/allyc';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/allyc.js';

define('pages/product/allyc.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/allyc"],{"1d7b":function(t,e,a){},"5ae8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.__map(t.allYCData,function(e,a){var n=t._f("toFormatDt")(e.createTime);return{$orig:t.__get_orig(e),f0:n}}));t.$mp.data=Object.assign({},{$root:{l0:a}})},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"5f75":function(t,e,a){"use strict";a.r(e);var n=a("5ae8"),i=a("a098");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("a540");var r=a("2877"),u=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},9780:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,String.prototype.PadLeft=function(t,e){var a=this+"";return new Array(t-a.length+1).join(e||"")+a};var a={data:function(){return{periodId:"",allYCData:[],currentPage:1,pageSize:30,isFirstLoad:!0,showTipPrice:!1}},onLoad:function(t){this.periodId=t.periodId,this.getAllYCData()},filters:{toFormatDt:function(t){if(!t)return"";var e=new Date(t),a=(e.getMonth()+1).toString().PadLeft(2,"0"),n=e.getDate().toString().PadLeft(2,"0"),i=e.getHours().toString().PadLeft(2,"0"),o=e.getMinutes().toString().PadLeft(2,"0"),r=e.getSeconds().toString().PadLeft(2,"0");return a+"-"+n+" "+i+":"+o+":"+r}},methods:{showPriceTips:function(){var t=this;this.$refs.masklayer.$el.style.display="block",setTimeout(function(){t.showTipPrice=!0},100)},hidePopPrice:function(){var t=this;this.showTipPrice=!this.showTipPrice,setTimeout(function(){t.$refs.masklayer.$el.style.display="none"},200)},getAllYCData:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"init",n={currentPage:this.currentPage,data:{id:this.periodId},pageSize:this.pageSize};this.$api.postAPI("period/panicBuyingRecord",n).then(function(n){if(t.hideLoading(),0!=n.data.code)return t.showToast({title:n.data.msg,icon:"none",duration:3e3});e.isFirstLoad=!1,e.currentPage++;var i=n.data.data.data;e.moreStatus=0==i.length?"noMore":"",e.allYCData="more"==a?e.allYCData.concat(i):n.data.data.data}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})}},onReachBottom:function(){"noMore"!=this.moreStatus&&this.getAllYCData("more")}};e.default=a}).call(this,a("6e42")["default"])},a098:function(t,e,a){"use strict";a.r(e);var n=a("9780"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},a540:function(t,e,a){"use strict";var n=a("1d7b"),i=a.n(n);i.a}},[["878d","common/runtime","common/vendor"]]]);
});
require('pages/product/allyc.js');
__wxRoute = 'pages/set/regard';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/set/regard.js';

define('pages/set/regard.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/regard"],{"0110":function(n,t,u){"use strict";u.r(t);var r=u("dd41"),a=u("9f01");for(var e in a)"default"!==e&&function(n){u.d(t,n,function(){return a[n]})}(e);u("eaaf");var c=u("2877"),f=Object(c["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=f.exports},"109c":function(n,t,u){},"3c01":function(n,t,u){},"9f01":function(n,t,u){"use strict";u.r(t);var r=u("3c01"),a=u.n(r);for(var e in r)"default"!==e&&function(n){u.d(t,n,function(){return r[n]})}(e);t["default"]=a.a},dd41:function(n,t,u){"use strict";var r=function(){var n=this,t=n.$createElement;n._self._c},a=[];u.d(t,"a",function(){return r}),u.d(t,"b",function(){return a})},eaaf:function(n,t,u){"use strict";var r=u("109c"),a=u.n(r);a.a}},[["9403","common/runtime","common/vendor"]]]);
});
require('pages/set/regard.js');
__wxRoute = 'pages/product/playerRule';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/playerRule.js';

define('pages/product/playerRule.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/playerRule"],{"3b43":function(n,t,u){"use strict";u.r(t);var r=u("97e1"),c=u.n(r);for(var e in r)"default"!==e&&function(n){u.d(t,n,function(){return r[n]})}(e);t["default"]=c.a},"6add":function(n,t,u){"use strict";u.r(t);var r=u("c405"),c=u("3b43");for(var e in c)"default"!==e&&function(n){u.d(t,n,function(){return c[n]})}(e);u("b48b");var a=u("2877"),o=Object(a["a"])(c["default"],r["a"],r["b"],!1,null,null,null);t["default"]=o.exports},"97e1":function(n,t,u){},b48b:function(n,t,u){"use strict";var r=u("cab9"),c=u.n(r);c.a},c405:function(n,t,u){"use strict";var r=function(){var n=this,t=n.$createElement;n._self._c},c=[];u.d(t,"a",function(){return r}),u.d(t,"b",function(){return c})},cab9:function(n,t,u){}},[["3380","common/runtime","common/vendor"]]]);
});
require('pages/product/playerRule.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

