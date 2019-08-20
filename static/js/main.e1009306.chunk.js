(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{217:function(e,t,a){e.exports=a(423)},222:function(e,t,a){},409:function(e,t,a){},423:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(213),c=a.n(l),o=(a(222),a(3)),s=a(33),i=a(5),m=a(4),u=a(133),d=a(63),b=a.n(d),p=(a(402),a(404),a(25)),f={};b.a.initializeApp({apiKey:"AIzaSyD93ZAqPYTq5YtJjjXG7_R5w5TrcnHU1R0",authDomain:"soft-biblioteca-121.firebaseapp.com",databaseURL:"https://soft-biblioteca-121.firebaseio.com",projectId:"soft-biblioteca-121",storageBucket:"soft-biblioteca-121.appspot.com",messagingSenderId:"79315197671",appId:"1:79315197671:web:5626c53bb9def005"});var E=Object(i.c)(Object(m.reactReduxFirebase)(b.a,{userProfile:"users",useFirestoreForPRofile:!0}),Object(u.reduxFirestore)(b.a))(i.d)(Object(i.b)({firebase:m.firebaseReducer,firestore:u.firestoreReducer,usuario:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BUSCAR_USUARIO":return Object(p.a)({},e,{nombre:t.usuario.nombre,apellido:t.usuario.apellido,codigo:t.usuario.codigo,carrera:t.usuario.carrera});default:return e}}}),{},Object(i.c)(Object(m.reactReduxFirebase)(b.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),h=a(8),v=(a(409),function(){return n.a.createElement("div",{className:"spinner"},n.a.createElement("div",{className:"double-bounce1"}),n.a.createElement("div",{className:"double-bounce2"}))}),N=Object(i.c)(Object(m.firestoreConnect)([{collection:"libros"}]),Object(h.connect)(function(e,t){return{libros:e.firestore.ordered.libros}}))(function(e){var t=e.libros,a=e.firestore;return t?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 mb-4"},n.a.createElement(o.b,{to:"/libros/nuevo",className:"btn btn-success"},n.a.createElement("i",{className:"fas fa-plus"})," ","Nuevo Libro")),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fas-fa-book"})," ","Libros")),n.a.createElement("table",{className:"table table-striped mt-4"},n.a.createElement("thead",{className:"text-light bg-primary"},n.a.createElement("tr",null,n.a.createElement("th",null,"Titulo"),n.a.createElement("th",null,"ISBN"),n.a.createElement("th",null,"Editorial"),n.a.createElement("th",null,"Existencia"),n.a.createElement("th",null,"Disponibles"),n.a.createElement("th",null,"Acciones"))),n.a.createElement("tbody",null,t.map(function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,e.titulo),n.a.createElement("td",null,e.ISBN),n.a.createElement("td",null,e.editorial),n.a.createElement("td",null,e.existencia),n.a.createElement("td",null,e.existencia-e.prestados.length),n.a.createElement("td",null,n.a.createElement(o.b,{to:"/libros/mostrar/".concat(e.id),className:"btn btn-success btn-blcok"},n.a.createElement("i",{className:"fas fa-angle-double-rigth"})," "," ","M\xe1s Info"),n.a.createElement("button",{type:"button",className:"btn btn-danger btn-blcok ml-1",onClick:function(){return t=e.id,void a.delete({collection:"libros",doc:t});var t}},n.a.createElement("i",{className:"fas fa-trash-alt"})," "," ","Eliminar")))})))):n.a.createElement(v,null)}),g=a(11),y=a(12),j=a(14),O=a(13),S=a(15),w=function(e){function t(){return Object(g.a)(this,t),Object(j.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(y.a)(t,[{key:"_prestarLibro",value:function(e,t){if(e>0)return n.a.createElement(o.b,{to:"/libros/prestamo/".concat(t),className:"btn btn-success my-3"},"Solicitar Prestamo")}},{key:"_devolverLibro",value:function(e){var t=this.props.firestore,a=Object(p.a)({},this.props.libro),r=a.prestados.filter(function(t){return t.codigo!==e});a.prestados=r,t.update({collection:"libros",doc:a.id},a)}},{key:"_mostrarPrestados",value:function(e){var t=this;if(e.length)return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"mb-4"},"Prestados"),e.map(function(e){return n.a.createElement("div",{key:e.codigo,className:"col-md-6 col-sm-12"},n.a.createElement("div",{className:"card my-2"},n.a.createElement("h4",{className:"card-header"},e.nombre," ",e.apellido),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"},"Carrera:")," ",e.carrera),n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"},"Fecha Solicitud:")," ",e.fechaSolicitud),n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"},"C\xf3digo:")," ",e.codigo)),n.a.createElement("div",{className:"card-footer"},n.a.createElement("button",{type:"button",className:"btn btn-success font-weight-bold",onClick:function(){return t._devolverLibro(e.codigo)}},"Realizar Devoluci\xf3n"))))}))}},{key:"render",value:function(){var e=this.props.libro;if(e){var t=e.existencia-e.prestados.length;return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 mb-4"},n.a.createElement(o.b,{to:"/",className:"btn btn-secondary"},n.a.createElement("i",{className:"fas fa-arrow-circle-left"})," ","Volver al Listado")),n.a.createElement("div",{className:"col-md-6 mb-4"},n.a.createElement(o.b,{to:"/libros/editar/".concat(e.id),className:"btn btn-secondary float-right"},n.a.createElement("i",{className:"fas fa-pencil-alt"})," ","Editar")),n.a.createElement("hr",{className:"mx-5 w-100"}),n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",{className:"mb-4"},e.titulo),n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"},"ISBN:")," ",e.ISBN),n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"},"Editorial:")," ",e.editorial),n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"},"Existencia:")," ",e.existencia),n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"},"Disponibles:")," ",t),this._prestarLibro(t,e.id),this._mostrarPrestados(e.prestados)))}return n.a.createElement(v,null)}}]),t}(r.Component),R=Object(i.c)(Object(m.firestoreConnect)(function(e){return[{collection:"libros",storeAs:"libro",doc:e.match.params.id}]}),Object(h.connect)(function(e,t){var a=e.firestore.ordered;return{libro:a.libro&&a.libro[0]}}))(w),C=a(46),x=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(j.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(n)))).state={},a._handlerForm=function(e){e.preventDefault(),a.setState(Object(C.a)({},e.target.name,e.target.value))},a._agregarLibro=function(e){e.preventDefault();var t=Object(p.a)({},a.state);t.prestados=[];var r=a.props,n=r.firestore,l=r.history;n.add({collection:"libros"},t).then(function(){l.push("/")})},a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 mb-4"},n.a.createElement(o.b,{to:"/",className:"btn btn-secondary"},n.a.createElement("i",{className:"fas fa-arrow-circle-left"})," ","Volver al Listado")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fas fa-book"})," ","Nuevo Libro"),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-md-8 mt-5"},n.a.createElement("form",{onSubmit:this._agregarLibro},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Titulo:"),n.a.createElement("input",{type:"text",className:"form-control",name:"titulo",placeholder:"Titulo del Libro",required:!0,onChange:this._handlerForm})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Editorial:"),n.a.createElement("input",{type:"text",className:"form-control",name:"editorial",placeholder:"Editorial del Libro",required:!0,onChange:this._handlerForm})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"ISBN:"),n.a.createElement("input",{type:"text",className:"form-control",name:"ISBN",placeholder:"ISBN",required:!0,onChange:this._handlerForm})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Existencia:"),n.a.createElement("input",{type:"number",min:"0",className:"form-control",name:"existencia",placeholder:"Cantidad en existencia",required:!0,onChange:this._handlerForm})),n.a.createElement("input",{type:"submit",value:"Agregar Libro",className:"btn btn-success"}))))))}}]),t}(r.Component),_=Object(m.firestoreConnect)()(x),k=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(j.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(l)))).state={saveText:"Guardar Cambios"},a.tituloRef=n.a.createRef(),a.editorialRef=n.a.createRef(),a.ISBNRef=n.a.createRef(),a.existenciaRef=n.a.createRef(),a._saveChanges=function(e){e.preventDefault(),a.setState({saveText:"Guardando..."});var t={titulo:a.tituloRef.current.value,editorial:a.editorialRef.current.value,ISBN:a.ISBNRef.current.value,existencia:a.existenciaRef.current.value},r=a.props,n=r.firestore,l=r.history,c=r.libro;n.update({collection:"libros",doc:c.id},t).then(l.push("/"))},a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props.libro;if(e){var t=e.titulo,a=e.editorial,r=e.ISBN,l=e.existencia;return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 mb-4"},n.a.createElement(o.b,{to:"/",className:"btn btn-secondary"},n.a.createElement("i",{className:"fas fa-arrow-circle-left"})," ","Volver al listado")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fas fa-book"})," "," ","Editar Libro"),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-md-8 mt-5"},n.a.createElement("form",{onSubmit:this._saveChanges},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Titulo:"),n.a.createElement("input",{type:"text",className:"form-control",name:"titulo",placeholder:"Titulo del Libro",required:!0,ref:this.tituloRef,defaultValue:t})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Editorial:"),n.a.createElement("input",{type:"text",className:"form-control",name:"editorial",placeholder:"Editorial del Libro",required:!0,ref:this.editorialRef,defaultValue:a})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"ISBN:"),n.a.createElement("input",{type:"text",className:"form-control",name:"ISBN",placeholder:"ISBN",required:!0,ref:this.ISBNRef,defaultValue:r})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Existencia:"),n.a.createElement("input",{type:"number",min:"0",className:"form-control",name:"existencia",placeholder:"Cantidad en existencia",required:!0,ref:this.existenciaRef,defaultValue:l})),n.a.createElement("input",{type:"submit",value:this.state.saveText,className:"btn btn-success"}))))))}return n.a.createElement(v,null)}}]),t}(r.Component),A=Object(i.c)(Object(m.firestoreConnect)(function(e){return[{collection:"libros",storeAs:"libro",doc:e.match.params.id}]}),Object(h.connect)(function(e,t){var a=e.firestore.ordered;return{libro:a.libro&&a.libro[0]}}))(k),I=a(216),L=function(e){var t=e.alumno;return t?n.a.createElement("div",{className:"card my-3"},n.a.createElement("h3",{className:"card-header bg-primary text-white"},"Datos Solicitante"),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"font-weight-bold"},"Nombre: "," ",n.a.createElement("span",{className:"font-weight-normal"},t.nombre," ",t.apellido)),n.a.createElement("p",{className:"font-weight-bold"},"Carrera: "," ",n.a.createElement("span",{className:"font-weight-normal"},t.carrera)),n.a.createElement("p",{className:"font-weight-bold"},"codigo: "," ",n.a.createElement("span",{className:"font-weight-normal"},t.codigo)))):n.a.createElement(v,null)},B=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(j.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(l)))).state={resBusqueda:{},noResultados:!1},a.busquedaRef=n.a.createRef(),a._buscarAlumno=function(e){e.preventDefault();var t=a.busquedaRef.current.value,r=a.props,n=r.firestore,l=r.buscarUsuario;n.collection("suscriptores").where("codigo","==",t).get().then(function(e){var t={},r=!0;e.empty||(t=e.docs[0].data(),r=!1),l(t),a.setState({noResultados:r})})},a._solicitarPrestamo=function(){var e=a.props.usuario;e.fechaSolicitud=(new Date).toLocaleDateString();var t=Object(p.a)({},a.props.libro);t.prestados=[].concat(Object(I.a)(t.prestados),[e]);var r=a.props,n=r.firestore,l=r.history;n.update({collection:"libros",doc:t.id},t).then(l.push("/"))},a._renderPrestamo=function(){var e=a.props.usuario;if(e.nombre){var t=a.props.libro,r=t.prestados.find(function(t){var a;return t.id===e.id&&(a=t),a})||[],l=!!(a.props.libro.prestados&&t.prestados.length===t.existencia||0!==r.length);return n.a.createElement(n.a.Fragment,null,n.a.createElement(L,{alumno:e}),n.a.createElement("button",{type:"button",className:"btn btn-block ".concat(l?"btn-light":"btn-primary"),onClick:l?"":a._solicitarPrestamo},"Solicitar Prestamo"))}},a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"_noResultados",value:function(){if(this.state.noResultados)return n.a.createElement("div",{className:"alert alert-danger text-center font-wight-bold"},"No hay resultados para ese codigo.")}},{key:"render",value:function(){var e=this.props.libro;return e?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 mb-4"},n.a.createElement(o.b,{to:"/",className:"btn btn-secondary"},n.a.createElement("i",{className:"fas fa-arrow-circle-left"})," ","Volver al Listado")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fas fa-book"})," "," Solicitar Prestamo: ",e.titulo),n.a.createElement("div",{className:"row justify-content-center mt-5"},n.a.createElement("div",{className:"col-md-8"},n.a.createElement("form",{onSubmit:this._buscarAlumno,className:"mb-4"},n.a.createElement("legend",{className:"color-primary text-center"},"Busca el Suscriptor por C\xf3digo"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",name:"busqueda",className:"form-control mb-4",ref:this.busquedaRef}),n.a.createElement("input",{value:"Buscar alumno",type:"submit",className:"btn btn-success btn-block"}))),this._renderPrestamo(),this._noResultados())))):n.a.createElement(v,null)}}]),t}(r.Component),D=Object(i.c)(Object(m.firestoreConnect)(function(e){return[{collection:"libros",storeAs:"libro",doc:e.match.params.id}]}),Object(h.connect)(function(e,t){var a=e.firestore.ordered,r=e.usuario;return{libro:a.libro&&a.libro[0],usuario:r}},{buscarUsuario:function(e){return{type:"BUSCAR_USUARIO",usuario:e}}}))(B),q=Object(i.c)(Object(m.firestoreConnect)([{collection:"suscriptores"}]),Object(h.connect)(function(e,t){return{suscriptores:e.firestore.ordered.suscriptores}}))(function(e){var t=e.suscriptores,a=e.firestore;if(!t)return n.a.createElement(v,null);return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 mb-4"},n.a.createElement(o.b,{to:"/suscriptores/nuevo",className:"btn btn-primary"}," ",n.a.createElement("i",{className:"fas fa-plus mr-2"}),"Nuevo suscriptor")),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fas fa-users mr-2"}),"Suscriptores")),n.a.createElement("table",{className:"table table-striped mt-4"},n.a.createElement("thead",{className:"text-light bg-primary"},n.a.createElement("tr",null,n.a.createElement("th",null,"Nombre"),n.a.createElement("th",null,"Carrera"),n.a.createElement("th",null,"Acciones"))),n.a.createElement("tbody",null,t.map(function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,e.nombre," ",e.apellido),n.a.createElement("td",null,e.carrera),n.a.createElement("td",{className:"d-flex justify-content-center"},n.a.createElement(o.b,{to:"/suscriptores/mostrar/".concat(e.id),className:"btn btn-success btn-block mr-2"},n.a.createElement("i",{className:"fas fa-angle-double-right mr-2"}),"M\xe1s info"),n.a.createElement("button",{onClick:function(){return t=e.id,void a.delete({collection:"suscriptores",doc:t});var t},type:"button",className:"btn btn-danger btn-block mt-0"},n.a.createElement("i",{className:"fas fa-trash-alt mr-2"}),"Eliminar")))}))))}),P=Object(i.c)(Object(m.firestoreConnect)(function(e){return[{collection:"suscriptores",storeAs:"suscriptor",doc:e.match.params.id}]}),Object(h.connect)(function(e,t){var a=e.firestore.ordered;return{suscriptor:a.suscriptor&&a.suscriptor[0]}}))(function(e){var t=e.suscriptor;return t?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 mb-4"},n.a.createElement(o.b,{to:"/suscriptores",className:"btn btn-secondary"},n.a.createElement("i",{className:"fas fa-arrow-circle-left"})," "," ","Volver al listado")),n.a.createElement("div",{className:"col-md-6 mb-4"},n.a.createElement(o.b,{to:"/suscriptores/editar/".concat(t.id),className:"btn btn-primary float-right"},n.a.createElement("i",{className:"fas fa-pencil-alt"})," ","Editar suscriptor")),n.a.createElement("hr",{className:"mx-5 w-100"}),n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",{className:"mb-4"},t.nombre," ",t.apellido),n.a.createElement("p",null,n.a.createElement("span",{className:"fot-weight-bold"},"Carrera:")," ",t.carrera),n.a.createElement("p",null,n.a.createElement("span",{className:"fot-weight-bold"},"C\xf3digo:")," ",t.codigo))):n.a.createElement(v,null)}),V=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(j.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(l)))).state={},a.nombreRef=n.a.createRef(),a.apellidoRef=n.a.createRef(),a.carreraRef=n.a.createRef(),a.codigoRef=n.a.createRef(),a._editarSuscriptor=function(e){e.preventDefault();var t={nombre:a.nombreRef.current.value,apellido:a.apellidoRef.current.value,carrera:a.carreraRef.current.value,codigo:a.codigoRef.current.value},r=a.props,n=r.suscriptor,l=r.firestore,c=r.history;l.update({collection:"suscriptores",doc:n.id},t).then(c.push("/suscriptores"))},a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"_toggleSubmit",value:function(){return this.state.pending?n.a.createElement(v,null):n.a.createElement("input",{type:"submit",value:"Agregar Suscriptor",className:"btn btn-success"})}},{key:"render",value:function(){var e=this.props.suscriptor;return e?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 mb-4"},n.a.createElement(o.b,{to:"/suscriptores",className:"btn btn-secondary"},n.a.createElement("i",{className:"fas fa-arrow-circle-left mr-2"}),"Volver al listado")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",null,"Editar Suscriptor"),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-md-8 mt-5"},n.a.createElement("form",{onSubmit:this._editarSuscriptor},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Nombre:"),n.a.createElement("input",{type:"text",className:"form-control",name:"nombre",placeholder:"Nombre del Suscriptor",required:!0,ref:this.nombreRef,defaultValue:e.nombre})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Apellido:"),n.a.createElement("input",{type:"text",className:"form-control",name:"apellido",placeholder:"Apellido del Suscriptor",required:!0,ref:this.apellidoRef,defaultValue:e.apellido})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Carrera:"),n.a.createElement("input",{type:"text",className:"form-control",name:"carrera",placeholder:"Carrera del Suscriptor",required:!0,ref:this.carreraRef,defaultValue:e.carrera})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Codigo:"),n.a.createElement("input",{type:"text",className:"form-control",name:"codigo",placeholder:"Codigo del Suscriptor",required:!0,ref:this.codigoRef,defaultValue:e.codigo})),this._toggleSubmit()))))):n.a.createElement(v,null)}}]),t}(r.Component),F=Object(i.c)(Object(m.firestoreConnect)(function(e){return[{collection:"suscriptores",storeAs:"suscriptor",doc:e.match.params.id}]}),Object(h.connect)(function(e,t){var a=e.firestore.ordered;return{suscriptor:a.suscriptor&&a.suscriptor[0]}}))(V),T=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(j.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(n)))).state={form:{nombre:"",apellido:"",carrera:"",codigo:""},pending:!1},a._agregarSuscriptor=function(e){e.preventDefault(),a.setState({pending:!0});var t=Object(p.a)({},a.state.form),r=a.props,n=r.firestore,l=r.history;n.add({collection:"suscriptores"},t).then(function(){l.push("/suscriptores")})},a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"_handlerInput",value:function(e){e.preventDefault();var t=Object(p.a)({},this.state.form);t[e.target.name]=e.target.value,this.setState({form:t})}},{key:"_toggleSubmit",value:function(){return this.state.pending?n.a.createElement(v,null):n.a.createElement("input",{type:"submit",value:"Agregar Suscriptor",className:"btn btn-success"})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 mb-4"},n.a.createElement(o.b,{to:"/suscriptores",className:"btn btn-secondary"},n.a.createElement("i",{className:"fas fa-arrow-circle-left mr-2"}),"Volver al listado")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fas fa-user-plus mr-2"}),"Nuevo Suscriptor"),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-md-8 mt-5"},n.a.createElement("form",{onSubmit:this._agregarSuscriptor},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Nombre:"),n.a.createElement("input",{type:"text",className:"form-control",name:"nombre",placeholder:"Nombre del Suscriptor",required:!0,onChange:function(t){return e._handlerInput(t)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Apellido:"),n.a.createElement("input",{type:"text",className:"form-control",name:"apellido",placeholder:"Apellido del Suscriptor",required:!0,onChange:function(t){return e._handlerInput(t)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Carrera:"),n.a.createElement("input",{type:"text",className:"form-control",name:"carrera",placeholder:"Carrera del Suscriptor",required:!0,onChange:function(t){return e._handlerInput(t)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Codigo:"),n.a.createElement("input",{type:"text",className:"form-control",name:"codigo",placeholder:"Codigo del Suscriptor",required:!0,onChange:function(t){return e._handlerInput(t)}})),this._toggleSubmit())))))}}]),t}(r.Component),U=Object(m.firestoreConnect)()(T),z=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(j.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(n)))).state={usuarioAutenticado:!1},a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"_cerrarSesion",value:function(){this.props.firebase.logout()}},{key:"_getNavegation",value:function(){var e=this;if(this.state.usuarioAutenticado){var t=this.props.auth;return n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{to:"/suscriptores",className:"nav-link"},"Suscriptores")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{to:"/",className:"nav-link"},"Libros"))),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"#!"},t.email)),n.a.createElement("li",{className:"nav-item"},n.a.createElement("button",{type:"submit",className:"btn btn-danger",onClick:function(){return e._cerrarSesion()}},"Cerrar Sesi\xf3n"))))}}},{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary mb-5"},n.a.createElement("nav",{className:"navbar navbar-light"},n.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Administrador de Biblioteca")),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor01"},this._getNavegation()))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.auth.uid?{usuarioAutenticado:!0}:{usuarioAutenticado:!1}}}]),t}(r.Component),X=Object(i.c)(Object(m.firebaseConnect)(),Object(h.connect)(function(e,t){return{auth:e.firebase.auth}}))(z),G=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(j.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(n)))).state={mail:"",pass:""},a._leerDato=function(e){a.setState(Object(C.a)({},e.target.name,e.target.value))},a._iniciarSesion=function(e){e.preventDefault();var t=a.props,r=t.firebase,n=t.history,l=a.state,c=l.mail,o=l.pass;r.login({email:c,password:o}).then(function(e){return n.push("/")}).catch(function(e){return console.error("Hubo un error de auth")})},a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-md-5"},n.a.createElement("div",{className:"card mt-5"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h2",{className:"text-center py-4"},n.a.createElement("i",{className:"fas fa-lock"})," "," ","Iniciar Sesi\xf3n"),n.a.createElement("form",{onSubmit:this._iniciarSesion},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Mail"),n.a.createElement("input",{type:"email",className:"form-control",name:"mail",required:!0,value:this.state.mail,onChange:this._leerDato})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Contrase\xf1a"),n.a.createElement("input",{type:"password",className:"form-control",name:"pass",required:!0,value:this.state.pass,onChange:this._leerDato})),n.a.createElement("input",{type:"submit",className:"btn btn-success btn-block",value:"Iniciar Sesion"}))))))}}]),t}(r.Component),J=Object(i.c)(Object(m.firebaseConnect)(),Object(h.connect)(function(e,t){return{auth:e.firebase.auth}}))(G),M=a(132),H=a.n(M),Q=a(137),W=a(20),Y=H()({}),K=(Object(W.a)(),Object(Q.connectedRouterRedirect)({wrapperDisplayName:"UserIsAuthenticated",AuthenticatingComponent:v,allowRedirectBack:!0,redirectPath:function(e,t){return Y.getRedirectQueryParam(t)||"/login"},authenticatingSelector:function(e){var t=e.firebase,a=t.auth,r=(t.profile,t.isInitializing);return!a.isLoaded||!0===r},authenticatedSelector:function(e){var t=e.firebase.auth;return t.isLoaded&&!t.isEmpty}})),Z=Object(Q.connectedRouterRedirect)({wrapperDisplayName:"UserIsNotAuthenticated",AuthenticatingComponent:v,allowRedirectBack:!1,redirectPath:function(e,t){return Y.getRedirectQueryParam(t)||"/"},authenticatingSelector:function(e){var t=e.firebase,a=t.auth,r=t.isInitializing;return!a.isLoaded||!0===r},authenticatedSelector:function(e){var t=e.firebase.auth;return t.isLoaded&&t.isEmpty}});var $=function(){return n.a.createElement(h.Provider,{store:E},n.a.createElement(o.a,null,n.a.createElement(X,null),n.a.createElement("div",{className:"container"},n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/login",component:Z(J)}),n.a.createElement(s.a,{exact:!0,path:"/",component:K(N)}),n.a.createElement(s.a,{exact:!0,path:"/libros/mostrar/:id",component:K(R)}),n.a.createElement(s.a,{exact:!0,path:"/libros/nuevo",component:K(_)}),n.a.createElement(s.a,{exact:!0,path:"/libros/editar/:id",component:K(A)}),n.a.createElement(s.a,{exact:!0,path:"/libros/prestamo/:id",component:K(D)}),n.a.createElement(s.a,{exact:!0,path:"/suscriptores",component:K(q)}),n.a.createElement(s.a,{exact:!0,path:"/suscriptores/nuevo",component:K(U)}),n.a.createElement(s.a,{exact:!0,path:"/suscriptores/mostrar/:id",component:K(P)}),n.a.createElement(s.a,{exact:!0,path:"/suscriptores/editar/:id",component:K(F)})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[217,1,2]]]);
//# sourceMappingURL=main.e1009306.chunk.js.map