(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{154:function(e,a,t){"use strict";t.r(a);t(187);var r=t(0),n=t.n(r),l=t(180),m=t(183),c=t(178);a.default=function(e){var a=e.metadata,t=e.items,r=a.allTagsPath,o=a.name,s=a.count;return n.a.createElement(l.a,{title:'Posts tagged "'+o+'"',description:'Blog | Tagged "'+o+'"'},n.a.createElement("div",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,s," ",function(e,a){return e>1?a+"s":a}(s,"post"),' tagged with "',o,'"'),n.a.createElement(c.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return n.a.createElement(m.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},n.a.createElement(a,null))})))))))}},183:function(e,a,t){"use strict";t(75);var r=t(0),n=t.n(r),l=t(179),m=t.n(l),c=t(176),o=t(178),s=t(184),i=t(131),u=t.n(i),g=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,l,i,d=e.children,E=e.frontMatter,v=e.metadata,h=e.truncated,p=e.isBlogPostPage,f=void 0!==p&&p,b=v.date,N=v.permalink,_=v.tags,k=E.author,w=E.title,y=E.author_url||E.authorURL,T=E.author_title||E.authorTitle,M=E.author_image_url||E.authorImageURL;return n.a.createElement("article",{className:f?void 0:"margin-bottom--xl"},(a=f?"h1":"h2",t=b.substring(0,10).split("-"),r=t[0],l=g[parseInt(t[1],10)-1],i=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:m()("margin-bottom--sm",u.a.blogPostTitle)},f?w:n.a.createElement(o.a,{to:N},w)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:b,className:u.a.blogPostDate},l," ",i,", ",r)),n.a.createElement("div",{className:"avatar margin-vert--md"},M&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:y,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:M,alt:k})),n.a.createElement("div",{className:"avatar__intro"},k&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:y,target:"_blank",rel:"noreferrer noopener"},k)),n.a.createElement("small",{className:"avatar__subtitle"},T)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(c.a,{components:s.a},d)),(_.length>0||h)&&n.a.createElement("footer",{className:"row margin-vert--lg"},_.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),_.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(o.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),h&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(o.a,{to:v.permalink,"aria-label":"Read more about "+w},n.a.createElement("strong",null,"Read More")))))}},187:function(e,a,t){var r=t(25).f,n=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in n||t(9)&&r(n,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);