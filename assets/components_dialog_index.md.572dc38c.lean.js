import{h as i,C as E,o as u,c as d,k as s,H as n,w as o,l as r,a,Q as y}from"./chunks/framework.2cef3824.js";const F=s("h1",{id:"dialog-对话框",tabindex:"-1"},[a("Dialog 对话框 "),s("a",{class:"header-anchor",href:"#dialog-对话框","aria-label":'Permalink to "Dialog 对话框"'},"​")],-1),g=s("p",null,"在保留当前页面状态的情况下，告知用户并承载相关操作。",-1),D=s("h2",{id:"基本用法",tabindex:"-1"},[a("基本用法 "),s("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),_=s("p",null,"Dialog 弹出一个对话框，适合需要定制性更大的场景。",-1),C={class:"dialog-container"},v=y("",3),h={class:"dialog-container"},m=y("",1),k=JSON.parse('{"title":"Dialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog/index.md","filePath":"components/dialog/index.md"}'),b={name:"components/dialog/index.md"},T=Object.assign(b,{setup(q){let l=i(!1);const p=()=>{l.value=!0},t=()=>{l.value=!1};return(A,f)=>{const e=E("pd-button"),c=E("pd-dialog");return u(),d("div",null,[F,g,D,_,s("div",C,[n(e,{onClick:p},{default:o(()=>[a("Dialog")]),_:1}),n(c,{visible:r(l),onCancel:t},{default:o(()=>[a(" 这是一段自定义文字 ")]),_:1},8,["visible"])]),v,s("div",h,[n(e,{onClick:p},{default:o(()=>[a("Custom title")]),_:1}),n(c,{title:"自定义标题",visible:r(l),onCancel:t},{default:o(()=>[a(" 这是一段自定义文字 ")]),_:1},8,["visible"])]),m])}}});export{k as __pageData,T as default};