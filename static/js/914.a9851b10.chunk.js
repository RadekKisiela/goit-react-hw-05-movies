"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[914],{412:function(e,t,r){r.d(t,{Bt:function(){return o},Ug:function(){return u},Y5:function(){return c}});var n=r(861),a=r(757),s=r.n(a),i=r(340),c=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=9b4d34572252a172944be66a3c78e6d5"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details: ",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=9b4d34572252a172944be66a3c78e6d5&language=en-US&page=1"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching reviews",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=9b4d34572252a172944be66a3c78e6d5&language=en-US"));case 3:return r=e.sent,n=r.data?r.data.cast:[],e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("Error fetching cast",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},914:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(861),a=r(439),s=r(757),i=r.n(s),c=r(791),o=r(689),u=r(87),l="MovieDetails_movieDetailsContainer__hxmcN",v="MovieDetails_movieInfoContainer__HLRn5",p="MovieDetails_movieContent__LEFsN",d="MovieDetails_movieTitle__0CAOT",h="MovieDetails_moviePoster__V6U6u",f="MovieDetails_filmData__AHD7w",m="MovieDetails_buttonGroup__twNRs",_="MovieDetails_button__uXZxd",x="MovieDetails_linkGoBack__wojGA",g=r(412),w=r(184);function j(){var e,t=(0,o.UO)().movieId,r=(0,c.useState)(""),s=(0,a.Z)(r,2),j=s[0],b=s[1],k=(0,c.useState)(!1),N=(0,a.Z)(k,2),D=N[0],Z=N[1],C=(0,c.useState)(!1),M=(0,a.Z)(C,2),U=M[0],y=M[1];(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.Y5)(t,"movie");case 3:r=e.sent,b(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var E=(null===(e=(0,o.TH)().state)||void 0===e?void 0:e.form)||"/";return(0,w.jsxs)("div",{className:l,children:[(0,w.jsx)(u.rU,{to:E,className:x,children:"Go Back"}),j?(0,w.jsx)("div",{className:v,children:(0,w.jsxs)("div",{className:p,children:[(0,w.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(j.poster_path),alt:j.title||j.name,className:h})," ",(0,w.jsxs)("div",{className:f,children:[" ",(0,w.jsx)("h1",{className:d,children:j.title||j.name}),(0,w.jsxs)("p",{children:["Release date: ",j.release_date]}),(0,w.jsxs)("p",{children:["Rating: ",j.vote_average]}),(0,w.jsxs)("p",{children:["Overview: ",j.overview]}),(0,w.jsxs)("p",{children:["Genres:"," ",j.genres&&j.genres.map((function(e){return e.name})).join(", ")]})]})]})}):(0,w.jsx)("p",{children:"Loading..."}),(0,w.jsxs)("div",{className:m,children:[(0,w.jsx)(u.rU,{to:"cast",className:_,onClick:function(){Z(!D),y(!1)},children:"Cast"}),(0,w.jsx)(u.rU,{to:"reviews",className:_,onClick:function(){y(!U),Z(!1)},children:"Reviews"})]}),(0,w.jsx)(o.j3,{})]})}}}]);
//# sourceMappingURL=914.a9851b10.chunk.js.map