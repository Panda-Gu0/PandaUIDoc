import{_ as c,C as e,o as E,c as r,k as t,H as s,w as n,Q as o,a as l}from"./chunks/framework.5a94cfaf.js";const F=JSON.parse('{"title":"Space 间距","description":"","frontmatter":{},"headers":[],"relativePath":"components/space/index.md","filePath":"components/space/index.md"}'),y={name:"components/space/index.md"},d=o('<h1 id="space-间距" tabindex="-1">Space 间距 <a class="header-anchor" href="#space-间距" aria-label="Permalink to &quot;Space 间距&quot;">​</a></h1><p><code>PandaUI</code>提供<code>&lt;pd-space&gt;</code>组件可以更加高效地进行<code>flex</code>布局</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>使用 <code>&lt;pd-space&gt;</code>组件包裹需要进行<code>flex</code>布局的元素，通过给<code>gap</code>属性设置一个<strong>只有两个值</strong>的<code>一维数组</code>来控制元素间的间距，其中数组第一个值控制的是<code>y轴</code>间距，第二个值控制的是<code>x轴</code>间距。</p>',4),u={class:"space-container"},i=o(`<details class="details custom-block"><summary>展开代码</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-space</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:gap</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[20, 20]&quot;</span><span style="color:#E1E4E8;"> &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;Space&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;Space&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;Space&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;Space&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;Space&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;Space&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;Space&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;Space&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;Space&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;Space&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;Space&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;Space&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">pd-space</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-space</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:gap</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[20, 20]&quot;</span><span style="color:#24292E;"> &gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;Space&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;Space&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;Space&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;Space&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;Space&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;Space&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;Space&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;Space&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;Space&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;Space&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;Space&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;Space&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">pd-space</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="排列方式" tabindex="-1">排列方式 <a class="header-anchor" href="#排列方式" aria-label="Permalink to &quot;排列方式&quot;">​</a></h2><p>在<code>&lt;pd-space&gt;</code>组件当中可以设置<code>横向排列</code>和<code>纵向排列</code>两种排列方式，具体通过设置<code>inline</code>属性来控制，默认排列方式为<code>横向排列</code>。</p>`,3),g={class:"space-container"},b=t("hr",null,null,-1),_=o(`<details class="details custom-block"><summary>展开代码</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">pd-space</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:gap</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[20, 20]&quot;</span><span style="color:#E1E4E8;"> &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;横向排列&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;横向排列&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;横向排列&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;横向排列&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;横向排列&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">pd-space</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pd-space</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:inline</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;false&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:gap</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[20, 20]&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;纵向排列&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;纵向排列&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;纵向排列&lt;/</span><span style="color:#85E89D;">pd-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">pd-space</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">pd-space</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:gap</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[20, 20]&quot;</span><span style="color:#24292E;"> &gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;横向排列&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;横向排列&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;横向排列&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;横向排列&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;横向排列&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">pd-space</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pd-space</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:inline</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;false&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:gap</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[20, 20]&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;纵向排列&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;纵向排列&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;纵向排列&lt;/</span><span style="color:#22863A;">pd-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">pd-space</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details>`,1);function A(D,S,h,m,f,q){const a=e("pd-button"),p=e("pd-space");return E(),r("div",null,[d,t("div",u,[s(p,{gap:[20,20]},{default:n(()=>[s(a,null,{default:n(()=>[l("Space")]),_:1}),s(a,null,{default:n(()=>[l("Space")]),_:1}),s(a,null,{default:n(()=>[l("Space")]),_:1}),s(a,null,{default:n(()=>[l("Space")]),_:1}),s(a,null,{default:n(()=>[l("Space")]),_:1}),s(a,null,{default:n(()=>[l("Space")]),_:1}),s(a,null,{default:n(()=>[l("Space")]),_:1}),s(a,null,{default:n(()=>[l("Space")]),_:1}),s(a,null,{default:n(()=>[l("Space")]),_:1}),s(a,null,{default:n(()=>[l("Space")]),_:1}),s(a,null,{default:n(()=>[l("Space")]),_:1}),s(a,null,{default:n(()=>[l("Space")]),_:1})]),_:1})]),i,t("div",g,[s(p,{gap:[20,20]},{default:n(()=>[s(a,null,{default:n(()=>[l("横向排列")]),_:1}),s(a,null,{default:n(()=>[l("横向排列")]),_:1}),s(a,null,{default:n(()=>[l("横向排列")]),_:1}),s(a,null,{default:n(()=>[l("横向排列")]),_:1}),s(a,null,{default:n(()=>[l("横向排列")]),_:1})]),_:1}),b,s(p,{inline:!1,gap:[20,20]},{default:n(()=>[s(a,null,{default:n(()=>[l("纵向排列")]),_:1}),s(a,null,{default:n(()=>[l("纵向排列")]),_:1}),s(a,null,{default:n(()=>[l("纵向排列")]),_:1})]),_:1})]),_])}const T=c(y,[["render",A]]);export{F as __pageData,T as default};
