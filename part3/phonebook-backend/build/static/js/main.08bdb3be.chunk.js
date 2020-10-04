(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),l=t(2),c=function(e){var n=e.person,t=e.handleDeletePersonButton;return r.a.createElement("div",null,r.a.createElement("strong",null,n.name)," ",n.number," ---"," ",r.a.createElement("button",{type:"button",onClick:function(){return t(n.id,n.name)}},r.a.createElement("strong",null,"Delete")))},i=function(e){var n=e.persons,t=e.filter,a=e.handleDeletePersonButton,o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",null,o.map((function(e){return r.a.createElement(c,{key:e.id,person:e,handleDeletePersonButton:a})})))},d=function(e){var n=e.handleAddPersonSubmit,t=e.handleAddPersonNameInput,a=e.handleAddPersonNameInputChange,o=e.handleAddPersonNumberInput,u=e.handleAddPersonNumberInputChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"Name:"," ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"Number:"," ",r.a.createElement("input",{value:o,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},r.a.createElement("strong",null,"Add"))))},m=function(e){var n=e.handleFilterInput,t=e.handleFilterInputChange;return r.a.createElement("div",null,"Apply filter to shown names:"," ",r.a.createElement("input",{value:n,onChange:t}))},s=function(e){var n=e.message,t={color:n.color,background:"dimgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"};return null===n.content?null:r.a.createElement("div",{style:t},n.content)},f=t(3),h=t.n(f),p="/api/persons",b=function(){return h.a.get(p).then((function(e){return e.data}))},E=function(e){return h.a.post(p,e).then((function(e){return e.data}))},g=function(e,n){return h.a.put("".concat(p,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return h.a.delete("".concat(p,"/").concat(e))},P=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),c=Object(l.a)(u,2),f=c[0],h=c[1],p=Object(a.useState)(""),P=Object(l.a)(p,2),w=P[0],A=P[1],I=Object(a.useState)(""),C=Object(l.a)(I,2),N=C[0],S=C[1],j=Object(a.useState)({content:null}),y=Object(l.a)(j,2),O=y[0],k=y[1],D=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#61dafb";if(e instanceof Error){var t=void 0!==e.response.data.errorMessage?e.response.data.errorMessage:"Something went wrong!";k({content:t,color:"red"}),setTimeout((function(){k({content:null})}),6e3)}else k({content:e,color:n}),setTimeout((function(){k({content:null})}),6e3)};return Object(a.useEffect)((function(){b().then((function(e){return o(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement("hr",null),r.a.createElement(s,{message:O}),r.a.createElement(m,{handleFilterInput:N,handleFilterInputChange:function(e){return S(e.target.value)}}),r.a.createElement("h2",null,"New Entry"),r.a.createElement(d,{handleAddPersonSubmit:function(e){var n={name:f,number:w},a=t.filter((function(e){return e.name===n.name}));if(e.preventDefault(),a.length>0){var r='"'.concat(a[0].name,'" is already added to the phonebook, would you like to update their contact number?');window.confirm(r)&&g(a[0].id,n).then((function(e){o(t.map((function(n){return n.id!==e.id?n:e}))),h(""),A(""),D('Updated "'.concat(e.name,'"'))})).catch((function(e){D(e),o(t.filter((function(e){return e.id!==a[0].id})))}))}else E(n).then((function(e){o(t.concat(e)),h(""),A(""),D('Added "'.concat(e.name,'"'))})).catch((function(e){return D(e)}))},handleAddPersonNameInput:f,handleAddPersonNameInputChange:function(e){return h(e.target.value)},handleAddPersonNumberInput:w,handleAddPersonNumberInputChange:function(e){A(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(i,{persons:t,filter:N,handleDeletePersonButton:function(e,n){window.confirm("Delete ".concat(n,"?"))&&v(e).then((function(){o(t.filter((function(n){return n.id!==e}))),D('Deleted "'.concat(n,'"'))})).catch((function(n){D(n),o(t.filter((function(n){return n.id!==e})))}))}}))};t(36);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.08bdb3be.chunk.js.map