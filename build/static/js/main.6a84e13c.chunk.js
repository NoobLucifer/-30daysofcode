(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(15)},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(8),i=n.n(r),s=n(5),c=n(1),l=n(2),d=n(4),p=n(3),u=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).strike=function(){return{display:"inline-block",textDecoration:e.props.todo.completed?"line-through":"none",margin:"0"}},e.forBlockquote=function(){if(!e.props.todo.completed&&""!==e.props.todo.description)return a.a.createElement("blockquote",{style:{marginTop:"0px",marginBottom:"0px",color:"#666670"}},e.props.todo.description)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.todo,t=e.task,n=e.id;return a.a.createElement("div",{style:{width:"100%",margin:"auto",padding:"1rem",boxSizing:"border-box",background:"#20274D",color:"#767680",borderRadius:"5px"}},a.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"6fr .5fr"}},a.a.createElement("div",null,a.a.createElement("input",{type:"checkbox",style:{display:"inline-block",margin:".3rem"},onChange:this.props.makeChange.bind(this,n)}),a.a.createElement("h3",{style:this.strike()},t),this.forBlockquote()),a.a.createElement("div",null,a.a.createElement("div",{className:"opac",style:{margin:".2rem",background:"none",border:"none",color:"rgba(244,189,135,90)",cursor:"pointer"},onClick:this.props.delTodo.bind(this,n)},a.a.createElement("i",{className:"fas fa-trash-alt fa-2x"})))))}}]),n}(o.Component),m=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{style:{width:"100%",display:"grid",gridTemplateRows:"1fr",gap:"1rem"}},this.props.todos.map((function(t){return a.a.createElement(u,{key:t.id,todo:t,makeChange:e.props.makeChange,delTodo:e.props.delTodo})})))}}]),n}(o.Component),h=n(9),g=(n(7),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={toggle:!1,task:"",description:""},e.getStyle={display:"inline-block",width:"100%",border:"none",margin:".5rem 0",padding:".4rem",boxShadow:"none",color:"#ccc",background:"#20274D",height:"2.5rem",borderRadius:".5rem",boxSizing:"border-box"},e.getStyle1={display:"inline-block",width:"20%",textAlign:"center",border:"none",margin:".5rem 0",boxShadow:"none",color:"#ccc",background:"#023e8a",height:"2.5rem",borderRadius:".5rem",boxSizing:"border-box"},e.onChange=function(t){return e.setState(Object(h.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),""!==e.state.task?(e.props.addTodo(e.state.task,e.state.description),e.setState({toggle:!1,task:"",description:""})):alert("Enter some task!")},e.setToggle=function(){return e.setState({toggle:!0})},e}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.state.toggle?a.a.createElement("form",{onSubmit:this.onSubmit,style:{textAlign:"center"}},a.a.createElement("input",{type:"text",name:"task",style:this.getStyle,value:this.state.task,onChange:this.onChange,placeholder:"ADD TODO..."}),a.a.createElement("input",{type:"text",name:"description",style:this.getStyle,value:this.state.description,onChange:this.onChange,placeholder:"ADD Description"}),a.a.createElement("input",{type:"submit",className:"opac",value:"SUBMIT",style:this.getStyle1})):a.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"5fr 1fr",gridGap:".5rem",padding:"1rem",textAlign:"center"}},a.a.createElement("div",null,a.a.createElement("h1",{style:{margin:"0",color:"#ccc"}},"TO-DO LIST")),a.a.createElement("div",{className:"add-task",onClick:this.setToggle},a.a.createElement("i",{className:"fas fa-plus-circle fa-3x"}))))}}]),n}(o.Component)),b=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todos:[]},e.makeChange=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.delTodo=function(t){window.confirm("Are you Sure?")&&fetch("https://my-json-server.typicode.com/NoobLucifer/json-server/to-do".concat(t),{method:"DELETE"}).then((function(){return e.setState({todos:Object(s.a)(e.state.todos.filter((function(e){return e.id!==t})))})}))},e.addTodo=function(t,n){fetch("https://my-json-server.typicode.com/NoobLucifer/json-server/to-do",{method:"POST",body:JSON.stringify({task:t,description:n,completed:!1}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){return e.setState({todos:[].concat(Object(s.a)(e.state.todos),[t])})}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/NoobLucifer/json-server/to-do").then((function(e){return e.json()})).then((function(t){e.setState({todos:t})}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(g,{todos:this.state.todos,addTodo:this.addTodo}),a.a.createElement("hr",{style:{border:"none",height:"3px",margin:"12px 0",background:" linear-gradient(90deg, rgba(1,1,108,0.9) 0%, rgba(0,153,185,1) 50%, rgba(1,1,108,0.8970938717283788) 100%)"}}),a.a.createElement(m,{todos:this.state.todos,makeChange:this.makeChange,delTodo:this.delTodo}))}}]),n}(o.Component);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root"))},7:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.6a84e13c.chunk.js.map