(this["webpackJsonphomework-17-react-employee-directory"]=this["webpackJsonphomework-17-react-employee-directory"]||[]).push([[0],{118:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(6),c=r.n(o),i=r(9),s=r(10),l=r(12),d=r(11),u=r(46),j=r.n(u),b=function(){return j.a.get("https://randomuser.me/api/?results=20")},m=r(1);r(73);var p=function(e){return Object(m.jsxs)("main",{className:"wrapper container",children:[e.children,Object(m.jsx)("script",{src:"https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table.min.js"})]})},h=r(120);var O=function(e){return Object(m.jsx)(h.a,{bg:"dark",variant:"dark",style:{padding:"55px"},children:Object(m.jsx)(h.a.Brand,{style:{fontSize:"48px"},children:"Employee Directory"})})},f=r(8);r(8);var x=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).state={resultAPI:[],search:""},a.loadEmployeeList=function(){b().then((function(e){return a.setState({resultAPI:e.data.results})})).catch((function(e){return console.log(e)}))},a.options={defaultSortName:"name",defaultSortOrder:"desc"},a}return Object(s.a)(r,[{key:"componentDidMount",value:function(){this.loadEmployeeList()}},{key:"showDOB",value:function(e,t){return e.date}},{key:"render",value:function(){return Object(m.jsxs)(f.BootstrapTable,{ref:"table",data:this.state.resultAPI,options:this.options,search:!0,striped:!0,hover:!0,exportCSV:!0,children:[Object(m.jsx)(f.TableHeaderColumn,{dataField:"picture",dataFormat:function(e,t){return'<img src="'+[e.medium]+'"></img>'},children:"Image"}),Object(m.jsx)(f.TableHeaderColumn,{isKey:!0,dataSort:!0,dataField:"name",dataFormat:function(e,t){return[e.first]+" "+[e.last]},children:"Full Name"}),Object(m.jsx)(f.TableHeaderColumn,{dataField:"phone",dataSort:!0,children:"Phone"}),Object(m.jsx)(f.TableHeaderColumn,{dataField:"email",dataSort:!0,children:"Email"}),Object(m.jsx)(f.TableHeaderColumn,{dataField:"dob",dataFormat:function(e,t){return new Date([e.date]).toLocaleDateString()},children:"DoB"})]})}}]),r}(a.Component),y=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(m.jsxs)(p,{children:[Object(m.jsx)(O,{}),Object(m.jsx)(x,{})]})}}]),r}(a.Component);r(116),r(117);var v=function(){return Object(m.jsx)(y,{})};c.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))},73:function(e,t,r){}},[[118,1,2]]]);
//# sourceMappingURL=main.adc6b94f.chunk.js.map