(this["webpackJsonpfunny-robos"]=this["webpackJsonpfunny-robos"]||[]).push([[0],{12:function(a,e,i){},14:function(a,e,i){},15:function(a,e,i){"use strict";i.r(e);var m=i(0),n=i.n(m),l=i(2),d=i.n(l);i(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i(13);var o=i(3),t=i(4),r=i(6),c=i(5),h=function(a){a.id;var e=a.name,i=a.email;return n.a.createElement("div",{className:"bg-light-green dark-gray tc dib pa2 br4 ma2 grow bw4 shadow-5 cardGradient"},n.a.createElement("img",{alt:"My Robo!",src:"https://robohash.org/".concat(e,"?200x200")}),n.a.createElement("div",{"text-align":"center"},n.a.createElement("h2",null,e),n.a.createElement("p",null,i)))},u=function(a){var e=a.robots;return n.a.createElement("div",{className:"flex flex-wrap justify-center bw3 pb3 pt3 ma2 dib"},e.map((function(a,i){return n.a.createElement(h,{key:i,id:e[i].id,name:e[i].name,email:e[i].email})})))},s=function(a){a.searchField;var e=a.searchChange;return n.a.createElement("div",{className:"bg-light-green dark-gray tc dib pa2 br4 ma2 grow bw4 shadow-5 cardGradient"},n.a.createElement("h2",null,"Search your favourites robo family member here!"),n.a.createElement("h2",null,n.a.createElement("input",{className:"pa2 bs4 br4 b--purple bg-light-blue dark-blue",name:"SearchBox",type:"search",placeholder:"Enter robo name to search",onChange:e})))},f=(i(14),function(a){return n.a.createElement("div",{style:{overflow:"Scroll",border:"1px solid navy",height:"500px"}},a.children)}),b=[{id:1,name:"Dinesh Mishra",email:"default-email@domain.com"},{id:2,name:"Shubh Lata Mishra",email:"default-email@domain.com"},{id:3,name:"Rajesh Mishra",email:"default-email@domain.com"},{id:4,name:"Rekha Mishra",email:"default-email@domain.com"},{id:5,name:"Vinod Mishra",email:"default-email@domain.com"},{id:6,name:"Mamta Mishra",email:"default-email@domain.com"},{id:7,name:"Prashant Mishra",email:"default-email@domain.com"},{id:8,name:"Pragati Mishra",email:"default-email@domain.com"},{id:9,name:"Pradeep Dubey",email:"default-email@domain.com"},{id:10,name:"Priya Dubey",email:"default-email@domain.com"},{id:11,name:"Aradhya Dubey",email:"default-email@domain.com"},{id:12,name:"Shashank Mishra",email:"default-email@domain.com"},{id:13,name:"Priyam Mishra",email:"default-email@domain.com"},{id:14,name:"Deeksha Mishra",email:"default-email@domain.com"},{id:15,name:"Swati Mishra",email:"default-email@domain.com"},{id:16,name:"Shivani Mishra",email:"default-email@domain.com"},{id:17,name:"Shivesh Mishra",email:"default-email@domain.com"},{id:18,name:"Nishant Mishra",email:"default-email@domain.com"},{id:19,name:"Sandeep Pandey",email:"default-email@domain.com"},{id:20,name:"Mani Pandey",email:"default-email@domain.com"},{id:21,name:"Shweta Pandey",email:"default-email@domain.com"},{id:22,name:"Shraddha Pandey",email:"default-email@domain.com"},{id:23,name:"Shubham Pandey",email:"default-email@domain.com"},{id:24,name:"Manoj Mishra",email:"default-email@domain.com"},{id:25,name:"Manish Mishra",email:"default-email@domain.com"},{id:26,name:"Mayank Mishra",email:"default-email@domain.com"},{id:27,name:"shreya Mishra",email:"default-email@domain.com"},{id:28,name:"Shubham Mishra",email:"default-email@domain.com"},{id:29,name:"Manan Mishra",email:"default-email@domain.com"},{id:30,name:"Rohit Mishra",email:"default-email@domain.com"},{id:31,name:"Pankaj Mishra",email:"default-email@domain.com"},{id:32,name:"Sudarshan Mishra",email:"default-email@domain.com"},{id:33,name:"Ram Anuj Mishra",email:"default-email@domain.com"},{id:34,name:"Ripudalan Mishra",email:"default-email@domain.com"},{id:35,name:"Jay Mishra",email:"default-email@domain.com"},{id:36,name:"Ravi kant Mishra",email:"default-email@domain.com"},{id:37,name:"Shashi Kant Mishra",email:"default-email@domain.com"},{id:38,name:"Somesh Mishra",email:"default-email@domain.com"},{id:39,name:"Hariom Pandey",email:"default-email@domain.com"},{id:40,name:"Shriom Pandey",email:"default-email@domain.com"},{id:41,name:"Rajendra Tiwari",email:"default-email@domain.com"},{id:42,name:"Sushma Tiwari",email:"default-email@domain.com"},{id:43,name:"Anamika Tiwari",email:"default-email@domain.com"},{id:44,name:"Swati Tiwari",email:"default-email@domain.com"},{id:45,name:"Abhishek Tiwari",email:"default-email@domain.com"},{id:46,name:"Sanvi Dubey",email:"default-email@domain.com"},{id:47,name:"Parth Dubey",email:"default-email@domain.com"},{id:48,name:"Girish Pandey",email:"default-email@domain.com"},{id:49,name:"Deepak Pandey",email:"default-email@domain.com"},{id:50,name:"Sudheer Pandey",email:"default-email@domain.com"}],y=function(a){Object(r.a)(i,a);var e=Object(c.a)(i);function i(){var a;return Object(o.a)(this,i),(a=e.call(this)).onSearchChange=function(e){a.setState({searchField:e.target.value})},a.state={robots:b,searchField:""},a}return Object(t.a)(i,[{key:"render",value:function(){var a=this.state,e=a.robots,i=a.searchField,m=e.filter((function(a){return a.name.toLowerCase().includes(i.toLowerCase())}));return 0===e.length?n.a.createElement("h1",null,"Robots are loading..."):n.a.createElement("div",{className:"washed-red tc"},n.a.createElement("h1",null,"Super Funny Robo Family"),n.a.createElement("h1",null,"Welcome to the world of funny and stylish robos!"),n.a.createElement(s,{searchChange:this.onSearchChange}),n.a.createElement(f,null,n.a.createElement(u,{robots:m})))}}]),i}(m.Component);d.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))},7:function(a,e,i){a.exports=i(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.82eceeaa.chunk.js.map