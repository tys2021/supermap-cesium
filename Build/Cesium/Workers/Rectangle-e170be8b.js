define(["exports","./Cartographic-1bbcab04","./Check-3aa71481","./when-515d5295","./Math-5e38123d"],(function(t,e,n,a,r){"use strict";function i(t,i,o,u){i=a.e(i,0),o=a.e(o,0),u=a.e(u,0),n.n.typeOf.number.greaterThanOrEquals("x",i,0),n.n.typeOf.number.greaterThanOrEquals("y",o,0),n.n.typeOf.number.greaterThanOrEquals("z",u,0),r.n.equalsEpsilon(u,6356752.314245179,r.n.EPSILON10)&&(r.n.Radius=u),t._radii=new e.a(i,o,u),t._radiiSquared=new e.a(i*i,o*o,u*u),t._radiiToTheFourth=new e.a(i*i*i*i,o*o*o*o,u*u*u*u),t._oneOverRadii=new e.a(0===i?0:1/i,0===o?0:1/o,0===u?0:1/u),t._oneOverRadiiSquared=new e.a(0===i?0:1/(i*i),0===o?0:1/(o*o),0===u?0:1/(u*u)),t._minimumRadius=Math.min(i,o,u),t._maximumRadius=Math.max(i,o,u),t._centerToleranceSquared=r.n.EPSILON1,0!==t._radiiSquared.z&&(t._squaredXOverSquaredZ=t._radiiSquared.x/t._radiiSquared.z)}function o(t,e,n){this._radii=void 0,this._radiiSquared=void 0,this._radiiToTheFourth=void 0,this._oneOverRadii=void 0,this._oneOverRadiiSquared=void 0,this._minimumRadius=void 0,this._maximumRadius=void 0,this._centerToleranceSquared=void 0,this._squaredXOverSquaredZ=void 0,i(this,t,e,n)}Object.defineProperties(o.prototype,{radii:{get:function(){return this._radii}},radiiSquared:{get:function(){return this._radiiSquared}},radiiToTheFourth:{get:function(){return this._radiiToTheFourth}},oneOverRadii:{get:function(){return this._oneOverRadii}},oneOverRadiiSquared:{get:function(){return this._oneOverRadiiSquared}},minimumRadius:{get:function(){return this._minimumRadius}},maximumRadius:{get:function(){return this._maximumRadius}}}),o.clone=function(t,n){if(a.t(t)){var r=t._radii;return a.t(n)?(e.a.clone(r,n._radii),e.a.clone(t._radiiSquared,n._radiiSquared),e.a.clone(t._radiiToTheFourth,n._radiiToTheFourth),e.a.clone(t._oneOverRadii,n._oneOverRadii),e.a.clone(t._oneOverRadiiSquared,n._oneOverRadiiSquared),n._minimumRadius=t._minimumRadius,n._maximumRadius=t._maximumRadius,n._centerToleranceSquared=t._centerToleranceSquared,n):new o(r.x,r.y,r.z)}},o.fromCartesian3=function(t,e){return a.t(e)||(e=new o),a.t(t)&&i(e,t.x,t.y,t.z),e},o.WGS84=Object.freeze(new o(6378137,6378137,r.n.Radius)),o.XIAN80=Object.freeze(new o(6378140,6378140,6356755.29)),o.CGCS2000=Object.freeze(new o(6378137,6378137,6356752.31)),o.UNIT_SPHERE=Object.freeze(new o(1,1,1)),o.MOON=Object.freeze(new o(r.n.LUNAR_RADIUS,r.n.LUNAR_RADIUS,r.n.LUNAR_RADIUS)),o.prototype.clone=function(t){return o.clone(this,t)},o.packedLength=e.a.packedLength,o.pack=function(t,r,i){return n.n.typeOf.object("value",t),n.n.defined("array",r),i=a.e(i,0),e.a.pack(t._radii,r,i),r},o.unpack=function(t,r,i){n.n.defined("array",t),r=a.e(r,0);var u=e.a.unpack(t,r);return o.fromCartesian3(u,i)},o.prototype.geocentricSurfaceNormal=e.a.normalize,o.prototype.geodeticSurfaceNormalCartographic=function(t,r){n.n.typeOf.object("cartographic",t);var i=t.longitude,o=t.latitude,u=Math.cos(o),s=u*Math.cos(i),h=u*Math.sin(i),c=Math.sin(o);return a.t(r)||(r=new e.a),r.x=s,r.y=h,r.z=c,e.a.normalize(r,r)},o.prototype.geodeticSurfaceNormal=function(t,n){return a.t(n)||(n=new e.a),n=e.a.multiplyComponents(t,this._oneOverRadiiSquared,n),e.a.normalize(n,n)};var u=new e.a,s=new e.a;o.prototype.cartographicToCartesian=function(t,n){var r=u,i=s;this.geodeticSurfaceNormalCartographic(t,r),e.a.multiplyComponents(this._radiiSquared,r,i);var o=Math.sqrt(e.a.dot(r,i));return e.a.divideByScalar(i,o,i),e.a.multiplyByScalar(r,t.height,r),a.t(n)||(n=new e.a),e.a.add(i,r,n)},o.prototype.cartographicArrayToCartesianArray=function(t,e){n.n.defined("cartographics",t);var r=t.length;a.t(e)?e.length=r:e=new Array(r);for(var i=0;i<r;i++)e[i]=this.cartographicToCartesian(t[i],e[i]);return e};var h=new e.a,c=new e.a,d=new e.a;function l(t,e,n,r){this.west=a.e(t,0),this.south=a.e(e,0),this.east=a.e(n,0),this.north=a.e(r,0)}o.prototype.cartesianToCartographic=function(t,n){var i=this.scaleToGeodeticSurface(t,c);if(a.t(i)){var o=this.geodeticSurfaceNormal(i,h),u=e.a.subtract(t,i,d),s=Math.atan2(o.y,o.x),l=Math.asin(o.z),p=r.n.sign(e.a.dot(u,t))*e.a.magnitude(u);return a.t(n)?(n.longitude=s,n.latitude=l,n.height=p,n):new e.i(s,l,p)}},o.prototype.cartesianArrayToCartographicArray=function(t,e){n.n.defined("cartesians",t);var r=t.length;a.t(e)?e.length=r:e=new Array(r);for(var i=0;i<r;++i)e[i]=this.cartesianToCartographic(t[i],e[i]);return e},o.prototype.scaleToGeodeticSurface=function(t,n){return e.b(t,this._oneOverRadii,this._oneOverRadiiSquared,this._centerToleranceSquared,n)},o.prototype.scaleToGeocentricSurface=function(t,r){n.n.typeOf.object("cartesian",t),a.t(r)||(r=new e.a);var i=t.x,o=t.y,u=t.z,s=this._oneOverRadiiSquared,h=1/Math.sqrt(i*i*s.x+o*o*s.y+u*u*s.z);return e.a.multiplyByScalar(t,h,r)},o.prototype.transformPositionToScaledSpace=function(t,n){return a.t(n)||(n=new e.a),e.a.multiplyComponents(t,this._oneOverRadii,n)},o.prototype.transformPositionFromScaledSpace=function(t,n){return a.t(n)||(n=new e.a),e.a.multiplyComponents(t,this._radii,n)},o.prototype.equals=function(t){return this===t||a.t(t)&&e.a.equals(this._radii,t._radii)},o.prototype.toString=function(){return this._radii.toString()},o.prototype.getSurfaceNormalIntersectionWithZAxis=function(t,i,o){if(n.n.typeOf.object("position",t),!r.n.equalsEpsilon(this._radii.x,this._radii.y,r.n.EPSILON15))throw new n.t("Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)");n.n.typeOf.number.greaterThan("Ellipsoid.radii.z",this._radii.z,0),i=a.e(i,0);var u=this._squaredXOverSquaredZ;if(a.t(o)||(o=new e.a),o.x=0,o.y=0,o.z=t.z*(1-u),!(Math.abs(o.z)>=this._radii.z-i))return o},Object.defineProperties(l.prototype,{width:{get:function(){return l.computeWidth(this)}},height:{get:function(){return l.computeHeight(this)}}}),l.packedLength=4,l.pack=function(t,e,r){return n.n.typeOf.object("value",t),n.n.defined("array",e),r=a.e(r,0),e[r++]=t.west,e[r++]=t.south,e[r++]=t.east,e[r]=t.north,e},l.unpack=function(t,e,r){return n.n.defined("array",t),e=a.e(e,0),a.t(r)||(r=new l),r.west=t[e++],r.south=t[e++],r.east=t[e++],r.north=t[e],r},l.computeWidth=function(t){n.n.typeOf.object("rectangle",t);var e=t.east,a=t.west;return e<a&&(e+=r.n.TWO_PI),e-a},l.computeHeight=function(t){return n.n.typeOf.object("rectangle",t),t.north-t.south},l.fromDegrees=function(t,e,n,i,o){return t=r.n.toRadians(a.e(t,0)),e=r.n.toRadians(a.e(e,0)),n=r.n.toRadians(a.e(n,0)),i=r.n.toRadians(a.e(i,0)),a.t(o)?(o.west=t,o.south=e,o.east=n,o.north=i,o):new l(t,e,n,i)},l.fromRadians=function(t,e,n,r,i){return a.t(i)?(i.west=a.e(t,0),i.south=a.e(e,0),i.east=a.e(n,0),i.north=a.e(r,0),i):new l(t,e,n,r)},l.fromCartographicArray=function(t,e){n.n.defined("cartographics",t);for(var i=Number.MAX_VALUE,o=-Number.MAX_VALUE,u=Number.MAX_VALUE,s=-Number.MAX_VALUE,h=Number.MAX_VALUE,c=-Number.MAX_VALUE,d=0,p=t.length;d<p;d++){var f=t[d];i=Math.min(i,f.longitude),o=Math.max(o,f.longitude),h=Math.min(h,f.latitude),c=Math.max(c,f.latitude);var m=f.longitude>=0?f.longitude:f.longitude+r.n.TWO_PI;u=Math.min(u,m),s=Math.max(s,m)}return o-i>s-u&&(i=u,(o=s)>r.n.PI&&(o-=r.n.TWO_PI),i>r.n.PI&&(i-=r.n.TWO_PI)),a.t(e)?(e.west=i,e.south=h,e.east=o,e.north=c,e):new l(i,h,o,c)},l.fromCartesianArray=function(t,e,i){n.n.defined("cartesians",t),e=a.e(e,o.WGS84);for(var u=Number.MAX_VALUE,s=-Number.MAX_VALUE,h=Number.MAX_VALUE,c=-Number.MAX_VALUE,d=Number.MAX_VALUE,p=-Number.MAX_VALUE,f=0,m=t.length;f<m;f++){var g=e.cartesianToCartographic(t[f]);u=Math.min(u,g.longitude),s=Math.max(s,g.longitude),d=Math.min(d,g.latitude),p=Math.max(p,g.latitude);var O=g.longitude>=0?g.longitude:g.longitude+r.n.TWO_PI;h=Math.min(h,O),c=Math.max(c,O)}return s-u>c-h&&(u=h,(s=c)>r.n.PI&&(s-=r.n.TWO_PI),u>r.n.PI&&(u-=r.n.TWO_PI)),a.t(i)?(i.west=u,i.south=d,i.east=s,i.north=p,i):new l(u,d,s,p)},l.clone=function(t,e){if(a.t(t))return a.t(e)?(e.west=t.west,e.south=t.south,e.east=t.east,e.north=t.north,e):new l(t.west,t.south,t.east,t.north)},l.equalsEpsilon=function(t,e,r){return n.n.typeOf.number("absoluteEpsilon",r),t===e||a.t(t)&&a.t(e)&&Math.abs(t.west-e.west)<=r&&Math.abs(t.south-e.south)<=r&&Math.abs(t.east-e.east)<=r&&Math.abs(t.north-e.north)<=r},l.prototype.clone=function(t){return l.clone(this,t)},l.prototype.equals=function(t){return l.equals(this,t)},l.equals=function(t,e){return t===e||a.t(t)&&a.t(e)&&t.west===e.west&&t.south===e.south&&t.east===e.east&&t.north===e.north},l.prototype.equalsEpsilon=function(t,e){return n.n.typeOf.number("epsilon",e),l.equalsEpsilon(this,t,e)},l.validate=function(t){n.n.typeOf.object("rectangle",t);var e=t.north;n.n.typeOf.number.greaterThanOrEquals("north",e,-r.n.PI_OVER_TWO),n.n.typeOf.number.lessThanOrEquals("north",e,r.n.PI_OVER_TWO);var a=t.south;n.n.typeOf.number.greaterThanOrEquals("south",a,-r.n.PI_OVER_TWO),n.n.typeOf.number.lessThanOrEquals("south",a,r.n.PI_OVER_TWO);var i=t.west;n.n.typeOf.number.greaterThanOrEquals("west",i,-Math.PI),n.n.typeOf.number.lessThanOrEquals("west",i,Math.PI);var o=t.east;n.n.typeOf.number.greaterThanOrEquals("east",o,-Math.PI),n.n.typeOf.number.lessThanOrEquals("east",o,Math.PI)},l.southwest=function(t,r){return n.n.typeOf.object("rectangle",t),a.t(r)?(r.longitude=t.west,r.latitude=t.south,r.height=0,r):new e.i(t.west,t.south)},l.northwest=function(t,r){return n.n.typeOf.object("rectangle",t),a.t(r)?(r.longitude=t.west,r.latitude=t.north,r.height=0,r):new e.i(t.west,t.north)},l.northeast=function(t,r){return n.n.typeOf.object("rectangle",t),a.t(r)?(r.longitude=t.east,r.latitude=t.north,r.height=0,r):new e.i(t.east,t.north)},l.southeast=function(t,r){return n.n.typeOf.object("rectangle",t),a.t(r)?(r.longitude=t.east,r.latitude=t.south,r.height=0,r):new e.i(t.east,t.south)},l.center=function(t,i){n.n.typeOf.object("rectangle",t);var o=t.east,u=t.west;o<u&&(o+=r.n.TWO_PI);var s=r.n.negativePiToPi(.5*(u+o)),h=.5*(t.south+t.north);return a.t(i)?(i.longitude=s,i.latitude=h,i.height=0,i):new e.i(s,h)},l.intersection=function(t,e,i){n.n.typeOf.object("rectangle",t),n.n.typeOf.object("otherRectangle",e);var o=t.east,u=t.west,s=e.east,h=e.west;o<u&&s>0?o+=r.n.TWO_PI:s<h&&o>0&&(s+=r.n.TWO_PI),o<u&&h<0?h+=r.n.TWO_PI:s<h&&u<0&&(u+=r.n.TWO_PI);var c=r.n.negativePiToPi(Math.max(u,h)),d=r.n.negativePiToPi(Math.min(o,s));if(!((t.west<t.east||e.west<e.east)&&d<=c)){var p=Math.max(t.south,e.south),f=Math.min(t.north,e.north);if(!(p>=f))return a.t(i)?(i.west=c,i.south=p,i.east=d,i.north=f,i):new l(c,p,d,f)}},l.simpleIntersection=function(t,e,r){n.n.typeOf.object("rectangle",t),n.n.typeOf.object("otherRectangle",e);var i=Math.max(t.west,e.west),o=Math.max(t.south,e.south),u=Math.min(t.east,e.east),s=Math.min(t.north,e.north);if(!(o>=s||i>=u))return a.t(r)?(r.west=i,r.south=o,r.east=u,r.north=s,r):new l(i,o,u,s)},l.union=function(t,e,i){n.n.typeOf.object("rectangle",t),n.n.typeOf.object("otherRectangle",e),a.t(i)||(i=new l);var o=t.east,u=t.west,s=e.east,h=e.west;o<u&&s>0?o+=r.n.TWO_PI:s<h&&o>0&&(s+=r.n.TWO_PI),o<u&&h<0?h+=r.n.TWO_PI:s<h&&u<0&&(u+=r.n.TWO_PI);var c=r.n.convertLongitudeRange(Math.min(u,h)),d=r.n.convertLongitudeRange(Math.max(o,s));return i.west=c,i.south=Math.min(t.south,e.south),i.east=d,i.north=Math.max(t.north,e.north),i},l.expand=function(t,e,r){return n.n.typeOf.object("rectangle",t),n.n.typeOf.object("cartographic",e),a.t(r)||(r=new l),r.west=Math.min(t.west,e.longitude),r.south=Math.min(t.south,e.latitude),r.east=Math.max(t.east,e.longitude),r.north=Math.max(t.north,e.latitude),r},l.contains=function(t,e){n.n.typeOf.object("rectangle",t),n.n.typeOf.object("cartographic",e);var a=e.longitude,i=e.latitude,o=t.west,u=t.east;return u<o&&(u+=r.n.TWO_PI,a<0&&(a+=r.n.TWO_PI)),(a>o||r.n.equalsEpsilon(a,o,r.n.EPSILON14))&&(a<u||r.n.equalsEpsilon(a,u,r.n.EPSILON14))&&i>=t.south&&i<=t.north};var p=new e.i;l.subsample=function(t,e,i,u){n.n.typeOf.object("rectangle",t),e=a.e(e,o.WGS84),i=a.e(i,0),a.t(u)||(u=[]);var s=0,h=t.north,c=t.south,d=t.east,f=t.west,m=p;m.height=i,m.longitude=f,m.latitude=h,u[s]=e.cartographicToCartesian(m,u[s]),s++,m.longitude=d,u[s]=e.cartographicToCartesian(m,u[s]),s++,m.latitude=c,u[s]=e.cartographicToCartesian(m,u[s]),s++,m.longitude=f,u[s]=e.cartographicToCartesian(m,u[s]),s++,m.latitude=h<0?h:c>0?c:0;for(var g=1;g<8;++g)m.longitude=-Math.PI+g*r.n.PI_OVER_TWO,l.contains(t,m)&&(u[s]=e.cartographicToCartesian(m,u[s]),s++);return 0===m.latitude&&(m.longitude=f,u[s]=e.cartographicToCartesian(m,u[s]),s++,m.longitude=d,u[s]=e.cartographicToCartesian(m,u[s]),s++),u.length=s,u};var f=new e.i;l.prototype.contains=function(t){return l.contains(this,l.southwest(t,f))&&l.contains(this,l.northwest(t,f))&&l.contains(this,l.southeast(t,f))&&l.contains(this,l.northeast(t,f))},l.MAX_VALUE=Object.freeze(new l(-Math.PI,-r.n.PI_OVER_TWO,Math.PI,r.n.PI_OVER_TWO)),t.n=o,t.s=l}));
