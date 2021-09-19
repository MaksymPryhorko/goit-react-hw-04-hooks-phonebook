(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={mainSection:"Phonebook_mainSection__10ITw",containerContacts:"Phonebook_containerContacts__1qOdd"}},18:function(t,e,n){},2:function(t,e,n){t.exports={mainForm:"Form_mainForm__3mosh",labelForm:"Form_labelForm__ZTEoH",inputForm:"Form_inputForm__2NXt5",buttonForm:"Form_buttonForm__2KNmp"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=(n(18),n(13)),i=n(3),l=n(4),u=n(6),m=n(5),b=n(12),h=n(22),d=n(2),j=n.n(d),f=n(0),p=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(b.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit({name:t.state.name,id:Object(h.a)(),number:t.state.number}),t.reset()},t.reset=function(){t.setState({name:""}),t.setState({number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:j.a.mainForm,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:j.a.labelForm,children:[Object(f.jsx)("input",{className:j.a.inputForm,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange}),"Name"]}),Object(f.jsxs)("label",{className:j.a.labelForm,children:[Object(f.jsx)("input",{className:j.a.inputForm,value:this.state.number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange}),"Number"]}),Object(f.jsx)("button",{className:j.a.buttonForm,type:"submit",children:"Add contact"})]})}}]),n}(c.a.Component),O=n(7),_=n.n(O);function C(t){var e=t.contacts,n=t.onDelete;return Object(f.jsx)("ul",{children:e.map((function(t){return Object(f.jsxs)("li",{className:_.a.contactListItem,children:[Object(f.jsx)("button",{className:_.a.btnDeleteContact,type:"button",onClick:function(){return n(t.name)},children:"delete"}),t.name,":"," ",Object(f.jsx)("span",{className:_.a.numberPhone,children:t.number})]},t.id)}))})}var F=n(8),v=n.n(F);function x(t){var e=t.filter,n=t.onChange;return Object(f.jsx)("div",{className:v.a.filterContainer,children:Object(f.jsxs)("label",{className:v.a.labelFilter,children:[Object(f.jsx)("input",{className:v.a.inputFilter,type:"text",value:e,onChange:n}),"Find contacts by name"]})})}var g=n(10),S=n.n(g),N=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.deleteContact=function(e){var n=t.state.contacts.filter((function(t){return t.name!==e}));t.setState({contacts:n})},t.checkedDuplicate=function(e){return t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},t.formSubmitHandler=function(e){void 0===t.checkedDuplicate(e.name)?t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(s.a)(n),[e])}})):alert("".concat(e.name," is alreade in contacts."))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(f.jsxs)("section",{className:S.a.mainSection,children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(p,{onSubmit:this.formSubmitHandler}),Object(f.jsxs)("div",{className:S.a.containerContacts,children:[Object(f.jsx)("h2",{children:"Contacts:"}),Object(f.jsx)(x,{filter:t,onChange:this.changeFilter}),Object(f.jsx)(C,{contacts:e,onDelete:this.deleteContact})]})]})}}]),n}(c.a.Component);function k(){return Object(f.jsx)(N,{})}o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={btnDeleteContact:"ContactList_btnDeleteContact__3fd6q",contactListItem:"ContactList_contactListItem__1E_BP",numberPhone:"ContactList_numberPhone__twIHa"}},8:function(t,e,n){t.exports={filterContainer:"Filter_filterContainer__mAAWc",labelFilter:"Filter_labelFilter__2Cm29",inputFilter:"Filter_inputFilter__eFPQw"}}},[[20,1,2]]]);
//# sourceMappingURL=main.99b09803.chunk.js.map