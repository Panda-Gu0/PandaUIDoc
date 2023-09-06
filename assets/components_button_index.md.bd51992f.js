import{_ as t,C as e,o as c,c as r,k as l,H as n,w as o,a,Q as p}from"./chunks/framework.c202abbe.js";const J=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md"}'),E={name:"components/button/index.md"},y=l("h1",{id:"button-按钮",tabindex:"-1"},[a("Button 按钮 "),l("a",{class:"header-anchor",href:"#button-按钮","aria-label":'Permalink to "Button 按钮"'},"​")],-1),u=l("p",null,"常规的操作按钮。",-1),d=l("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),i=l("p",null,"使用 type、plain、round 和 circle 来定义按钮的样式。",-1),g={class:"button-container"},F={class:"button-type"},b={class:"button-type"},_={class:"button-type"},q=p(`<details class="details custom-block"><summary>展开代码</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 默认 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;default&quot;</span><span style="color:#E1E4E8;">&gt;default&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;">&gt;primary&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;success&quot;</span><span style="color:#E1E4E8;">&gt;success&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;info&quot;</span><span style="color:#E1E4E8;">&gt;info&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;warning&quot;</span><span style="color:#E1E4E8;">&gt;warning&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;danger&quot;</span><span style="color:#E1E4E8;">&gt;danger&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 朴素 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;default&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">plain</span><span style="color:#E1E4E8;">&gt;default&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">plain</span><span style="color:#E1E4E8;">&gt;primary&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;success&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">plain</span><span style="color:#E1E4E8;">&gt;success&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;info&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">plain</span><span style="color:#E1E4E8;">&gt;info&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;warning&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">plain</span><span style="color:#E1E4E8;">&gt;warning&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;danger&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">plain</span><span style="color:#E1E4E8;">&gt;danger&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 圆角 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;default&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">&gt;default&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">&gt;primary&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;success&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">&gt;success&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;info&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">&gt;info&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;warning&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">&gt;warning&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;danger&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">&gt;danger&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 默认 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;default&quot;</span><span style="color:#24292E;">&gt;default&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;">&gt;primary&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;success&quot;</span><span style="color:#24292E;">&gt;success&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;info&quot;</span><span style="color:#24292E;">&gt;info&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;warning&quot;</span><span style="color:#24292E;">&gt;warning&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;danger&quot;</span><span style="color:#24292E;">&gt;danger&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 朴素 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;default&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">plain</span><span style="color:#24292E;">&gt;default&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">plain</span><span style="color:#24292E;">&gt;primary&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;success&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">plain</span><span style="color:#24292E;">&gt;success&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;info&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">plain</span><span style="color:#24292E;">&gt;info&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;warning&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">plain</span><span style="color:#24292E;">&gt;warning&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;danger&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">plain</span><span style="color:#24292E;">&gt;danger&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 圆角 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;default&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">round</span><span style="color:#24292E;">&gt;default&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">round</span><span style="color:#24292E;">&gt;primary&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;success&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">round</span><span style="color:#24292E;">&gt;success&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;info&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">round</span><span style="color:#24292E;">&gt;info&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;warning&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">round</span><span style="color:#24292E;">&gt;warning&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;danger&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">round</span><span style="color:#24292E;">&gt;danger&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="禁用状态" tabindex="-1">禁用状态 <a class="header-anchor" href="#禁用状态" aria-label="Permalink to &quot;禁用状态&quot;">​</a></h2><p>按钮处在不可使用状态。</p>`,3),h={class:"button-container"},m={class:"button-type"},C=p(`<details class="details custom-block"><summary>展开代码</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;default&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">&gt;default&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">&gt;primary&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;success&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">&gt;success&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;info&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">&gt;info&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;warning&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">&gt;warning&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;danger&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">&gt;danger&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;default&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">&gt;default&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">&gt;primary&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;success&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">&gt;success&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;info&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">&gt;info&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;warning&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">&gt;warning&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;danger&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">&gt;danger&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="加载状态" tabindex="-1">加载状态 <a class="header-anchor" href="#加载状态" aria-label="Permalink to &quot;加载状态&quot;">​</a></h2><p>按钮处在加载状态中(加载状态无法使用)</p>`,3),B={class:"button-container"},f={class:"button-type"},A=p('<details class="details custom-block"><summary>展开代码</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">loading</span><span style="color:#E1E4E8;">&gt;Loading&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loading</span><span style="color:#24292E;">&gt;Loading&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="按钮尺寸" tabindex="-1">按钮尺寸 <a class="header-anchor" href="#按钮尺寸" aria-label="Permalink to &quot;按钮尺寸&quot;">​</a></h2><p>Button 组件提供3中不同的按钮尺寸，默认情况下为 &quot; midium &quot; 尺寸</p>',3),D={class:"button-container"},v={class:"button-type"},k=p(`<details class="details custom-block"><summary>展开代码</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;midium&quot;</span><span style="color:#E1E4E8;">&gt;midium&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;small&quot;</span><span style="color:#E1E4E8;">&gt;small&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;mini&quot;</span><span style="color:#E1E4E8;">&gt;mini&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;midium&quot;</span><span style="color:#24292E;">&gt;midium&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;small&quot;</span><span style="color:#24292E;">&gt;small&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;mini&quot;</span><span style="color:#24292E;">&gt;mini&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="图标按钮" tabindex="-1">图标按钮 <a class="header-anchor" href="#图标按钮" aria-label="Permalink to &quot;图标按钮&quot;">​</a></h2><p>带有图标的按钮可以增加辨识度。</p>`,3),T={class:"button-container"},w={class:"button-type"},x=p(`<details class="details custom-block"><summary>展开代码</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sousuo&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;danger&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;shanchu&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;success&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;shezhi&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;bianji&quot;</span><span style="color:#E1E4E8;">&gt;编辑&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">icon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sousuo&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">round</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;danger&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">icon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;shanchu&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;success&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">icon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;shezhi&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">icon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bianji&quot;</span><span style="color:#24292E;">&gt;编辑&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="文字链接" tabindex="-1">文字链接 <a class="header-anchor" href="#文字链接" aria-label="Permalink to &quot;文字链接&quot;">​</a></h2><p>没有边框及背景色的按钮(纯文字)</p>`,3),P={class:"button-container"},S={class:"button-type"},V=p(`<details class="details custom-block"><summary>展开代码</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;">&gt;文字按钮&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">&gt;禁用&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">&gt;文字按钮&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">&gt;禁用&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details>`,1);function z(I,N,R,$,j,L){const s=e("pd-button");return c(),r("div",null,[y,u,d,i,l("div",g,[l("div",F,[n(s,{type:"default"},{default:o(()=>[a("default")]),_:1}),n(s,{type:"primary"},{default:o(()=>[a("primary")]),_:1}),n(s,{type:"success"},{default:o(()=>[a("success")]),_:1}),n(s,{type:"info"},{default:o(()=>[a("info")]),_:1}),n(s,{type:"warning"},{default:o(()=>[a("warning")]),_:1}),n(s,{type:"danger"},{default:o(()=>[a("danger")]),_:1})]),l("div",b,[n(s,{type:"default",plain:""},{default:o(()=>[a("default")]),_:1}),n(s,{type:"primary",plain:""},{default:o(()=>[a("primary")]),_:1}),n(s,{type:"success",plain:""},{default:o(()=>[a("success")]),_:1}),n(s,{type:"info",plain:""},{default:o(()=>[a("info")]),_:1}),n(s,{type:"warning",plain:""},{default:o(()=>[a("warning")]),_:1}),n(s,{type:"danger",plain:""},{default:o(()=>[a("danger")]),_:1})]),l("div",_,[n(s,{type:"default",round:""},{default:o(()=>[a("default")]),_:1}),n(s,{type:"primary",round:""},{default:o(()=>[a("primary")]),_:1}),n(s,{type:"success",round:""},{default:o(()=>[a("success")]),_:1}),n(s,{type:"info",round:""},{default:o(()=>[a("info")]),_:1}),n(s,{type:"warning",round:""},{default:o(()=>[a("warning")]),_:1}),n(s,{type:"danger",round:""},{default:o(()=>[a("danger")]),_:1})])]),q,l("div",h,[l("div",m,[n(s,{type:"default",disabled:""},{default:o(()=>[a("default")]),_:1}),n(s,{type:"primary",disabled:""},{default:o(()=>[a("primary")]),_:1}),n(s,{type:"success",disabled:""},{default:o(()=>[a("success")]),_:1}),n(s,{type:"info",disabled:""},{default:o(()=>[a("info")]),_:1}),n(s,{type:"warning",disabled:""},{default:o(()=>[a("warning")]),_:1}),n(s,{type:"danger",disabled:""},{default:o(()=>[a("danger")]),_:1})])]),C,l("div",B,[l("div",f,[n(s,{type:"primary",loading:""},{default:o(()=>[a("Loading")]),_:1})])]),A,l("div",D,[l("div",v,[n(s,{size:"midium"},{default:o(()=>[a("midium")]),_:1}),n(s,{size:"small"},{default:o(()=>[a("small")]),_:1}),n(s,{size:"mini"},{default:o(()=>[a("mini")]),_:1})])]),k,l("div",T,[l("div",w,[n(s,{type:"primary",icon:"sousuo",round:""}),n(s,{type:"danger",icon:"shanchu"}),n(s,{type:"success",icon:"shezhi"}),n(s,{type:"primary",icon:"bianji"},{default:o(()=>[a("编辑")]),_:1})])]),x,l("div",P,[l("div",S,[n(s,{type:"text"},{default:o(()=>[a("文字按钮")]),_:1}),n(s,{type:"text",disabled:""},{default:o(()=>[a("禁用")]),_:1})])]),V])}const O=t(E,[["render",z]]);export{J as __pageData,O as default};