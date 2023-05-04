import{_ as a,D as l,o as p,c as e,G as o,z as s,a as c,O as t}from"./chunks/framework.65ef40b1.js";const v=JSON.parse('{"title":"Github Page 发布","description":"","frontmatter":{},"headers":[],"relativePath":"guide/07.GitHubPage发布.md","filePath":"guide/07.GitHubPage发布.md","lastUpdated":1683219944000}'),r={name:"guide/07.GitHubPage发布.md"},i=s("hr",null,null,-1),y=s("p",null,"layout: doc",-1),d=s("hr",null,null,-1),u=s("h1",{id:"github-page-发布",tabindex:"-1"},[s("code",null,"Github Page"),c(" 发布 "),s("a",{class:"header-anchor",href:"#github-page-发布","aria-label":'Permalink to "`Github Page` 发布"'},"​")],-1),A=s("br",null,null,-1),b=t(`<h2 id="deploy-sh脚本" tabindex="-1">deploy.sh脚本 <a class="header-anchor" href="#deploy-sh脚本" aria-label="Permalink to &quot;deploy.sh脚本&quot;">​</a></h2><p>根目录新建 <code>deploy.sh</code> 文件</p><p>并复制以下内容稍微修改。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span style="color:#B8A965;">set</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># 删除文件需要根据实际打包的目录进行删除</span></span>
<span class="line"><span style="color:#80A665;">rm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-rf</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">docs/.vitepress/dist/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># 生成静态文件</span></span>
<span class="line"><span style="color:#80A665;">yarn</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># 进入生成的文件夹</span></span>
<span class="line"><span style="color:#B8A965;">cd</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># 如果是发布到自定义域名</span></span>
<span class="line"><span style="color:#758575DD;"># echo &#39;www.example.com&#39; &gt; CNAME</span></span>
<span class="line"></span>
<span class="line"><span style="color:#80A665;">git</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">init</span></span>
<span class="line"><span style="color:#80A665;">git</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">add</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-A</span></span>
<span class="line"><span style="color:#80A665;">git</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">commit</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-m</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">deploy</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># 如果发布到 https://&lt;USERNAME&gt;.github.io 修改仓库地址</span></span>
<span class="line"><span style="color:#758575DD;"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">cd</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">-</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span style="color:#998418;">set</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># 删除文件需要根据实际打包的目录进行删除</span></span>
<span class="line"><span style="color:#59873A;">rm</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-rf</span><span style="color:#393A34;"> </span><span style="color:#B56959;">docs/.vitepress/dist/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># 生成静态文件</span></span>
<span class="line"><span style="color:#59873A;">yarn</span><span style="color:#393A34;"> </span><span style="color:#B56959;">docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># 进入生成的文件夹</span></span>
<span class="line"><span style="color:#998418;">cd</span><span style="color:#393A34;"> </span><span style="color:#B56959;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># 如果是发布到自定义域名</span></span>
<span class="line"><span style="color:#A0ADA0;"># echo &#39;www.example.com&#39; &gt; CNAME</span></span>
<span class="line"></span>
<span class="line"><span style="color:#59873A;">git</span><span style="color:#393A34;"> </span><span style="color:#B56959;">init</span></span>
<span class="line"><span style="color:#59873A;">git</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-A</span></span>
<span class="line"><span style="color:#59873A;">git</span><span style="color:#393A34;"> </span><span style="color:#B56959;">commit</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-m</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">deploy</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># 如果发布到 https://&lt;USERNAME&gt;.github.io 修改仓库地址</span></span>
<span class="line"><span style="color:#A0ADA0;"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#998418;">cd</span><span style="color:#393A34;"> </span><span style="color:#B56959;">-</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="创建-github-仓库" tabindex="-1">创建 <code>github</code> 仓库 <a class="header-anchor" href="#创建-github-仓库" aria-label="Permalink to &quot;创建 \`github\` 仓库&quot;">​</a></h2><p><strong>注意 <code>Repository name</code> 和本地的 <code>base</code> 配置相同</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineConfig</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">base</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">/your-github-repository/</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#666666;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineConfig</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">base</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">/your-github-repository/</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="package-json-中新增脚本并执行" tabindex="-1"><code>package.json</code> 中新增脚本并执行 <a class="header-anchor" href="#package-json-中新增脚本并执行" aria-label="Permalink to &quot;\`package.json\` 中新增脚本并执行&quot;">​</a></h2><p>等个三两分钟直接访问 <code>https://your-github.github.io/your-github-repository/</code>。</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">scripts</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;">: </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">docs:deploy</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">bash deploy.sh</span><span style="color:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">scripts</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;">: </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">docs:deploy</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">bash deploy.sh</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,10);function h(D,g,m,E,C,B){const n=l("el-alert");return p(),e("div",null,[i,y,d,u,A,o(n,{title:`作者：65岁退休Coder
链接：https://juejin.cn/post/7164276166084263972
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。`,type:"info"}),b])}const f=a(r,[["render",h]]);export{v as __pageData,f as default};
