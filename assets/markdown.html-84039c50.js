import{m as w}from"./app-daed472d.js";import{_ as g}from"./lodash-040ee94a.js";import{_ as y,M as d,p as c,q as m,Q as o,w as a,t as v,N as p,V as f}from"./framework-b01e3c2f.js";import"./mermaid-c798b724-509d9c22.js";function k(){try{if(window)return localStorage.getItem("md")}catch{}}function b(t){try{window&&localStorage.setItem("md",t)}catch{}}const H={data(){let t=k();return[void 0,null].includes(t)&&(t=`# Headers

# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------

# Emphasis

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

# Lists

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

# Links

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

# Images

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

# Code and Syntax Highlighting

Inline \`code\` has \`back-ticks around\` it.

\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

\`\`\`python
s = "Python syntax highlighting"
print s
\`\`\`

\`\`\`
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
\`\`\`

# Tables

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned |  |
| col 2 is      | centered      |    |
| zebra stripes | are neat      |     |

The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3

# Blockquotes

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

# Inline HTML

<dl>
    <dt>Definition list</dt>
    <dd>Is something people use sometimes.</dd>
    <dt>Markdown in HTML</dt>
    <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

# Horizontal Rule

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

# Line Breaks

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

# Task List

- [x] foo
- [ ] todo

# Mermaid

## flowchart

\`\`\`mermaid
flowchart LR

A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
\`\`\`
`),{loading:!1,copy:!1,md:t,html:"",layout:"split",lock:!1}},watch:{md(t){b(t),this.layout=="split"&&this.parse2html()}},mounted(){this.toHtml(),this.parse2html=g.debounce(this.toHtml,300)},methods:{handlePrint(){window.print()},handleMdScroll(t){this.lock&&(this.$refs.preview.scrollTop=this.calcHtmlTop())},handleHtmlScroll(t){this.lock||this.$refs.editor.$codeEditor.setScrollTop(this.calcMdTop())},handleLayout(t){const e=this.layout;switch(this.layout=t,e){case"md":this.toHtml();break}},toHtml(){try{const t=w.parse(this.md);this.html=t}catch(t){this.html=`<div style="color:red; padding: 10px;">${t.message}</div>`,console.error(t)}},handleCopy(){this.copy=!0,copyText(this.html),setTimeout(()=>{this.copy=!1},200)},findParentLine(t){if(t&&t.classList.contains("view-line"))return t;if(t&&t.parentNode)return this.findParentLine(t.parentNode)},calcHtmlTop(){const t=this.$refs.editor.$codeEditor,e=this.$refs.preview,l=t.getContentHeight(),r=t.getLayoutInfo(),s=t.getScrollTop()/(l-r.height);return e.scrollHeight*s},handleMdClick(t){this.$refs.preview.scrollTop=this.calcHtmlTop()},calcMdTop(){const t=this.$refs.editor.$codeEditor,e=this.$refs.preview,l=e.scrollTop/e.scrollHeight,r=t.getContentHeight(),n=t.getLayoutInfo();return(r-n.height)*l},handleHtmlClick(){this.$refs.editor.$codeEditor.setScrollTop(this.calcMdTop())}}},_={class:"title-bar no-print"},T=o("h1",{style:{margin:"0"}},[o("a",{class:"nlink",href:"/"},"Markdown Editor")],-1),M={class:"action-bar",style:{"margin-left":"20px"}},C={class:"BtnGroup"},x=o("svg",{class:"octicon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16"},[o("path",{d:"M6.823 7.823a.25.25 0 0 1 0 .354l-2.396 2.396A.25.25 0 0 1 4 10.396V5.604a.25.25 0 0 1 .427-.177Z"}),o("path",{d:"M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25H9.5v-13H1.75a.25.25 0 0 0-.25.25ZM11 14.5h3.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11Z"})],-1),L=[x],S=o("svg",{class:"octicon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16"},[o("path",{d:"M2.75 0h2.5C6.216 0 7 .784 7 1.75v12.5A1.75 1.75 0 0 1 5.25 16h-2.5A1.75 1.75 0 0 1 1 14.25V1.75C1 .784 1.784 0 2.75 0Zm8 0h2.5C14.216 0 15 .784 15 1.75v12.5A1.75 1.75 0 0 1 13.25 16h-2.5A1.75 1.75 0 0 1 9 14.25V1.75C9 .784 9.784 0 10.75 0ZM2.5 1.75v12.5c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Zm8 0v12.5c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"})],-1),A=[S],B={class:"octicon",style:{transform:"rotate(180deg)"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16"},E=o("path",{d:"M6.823 7.823a.25.25 0 0 1 0 .354l-2.396 2.396A.25.25 0 0 1 4 10.396V5.604a.25.25 0 0 1 .427-.177Z"},null,-1),I=o("path",{d:"M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25H9.5v-13H1.75a.25.25 0 0 0-.25.25ZM11 14.5h3.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11Z"},null,-1),V=[E,I],Z={class:"BtnGroup"},P=["disabled"],N=["innerHTML"];function G(t,e,l,r,n,s){const h=d("MonacoEditor"),u=d("ClientOnly");return c(),m("div",null,[o("div",_,[T,o("div",M,[o("div",C,[o("button",{class:a(["BtnGroup-item btn btn-outline",n.layout==="md"?"selected":""]),type:"button",onClick:e[0]||(e[0]=i=>{s.handleLayout("md")})},L,2),o("button",{class:a(["BtnGroup-item btn btn-outline",n.layout==="split"?"selected":""]),type:"button",onClick:e[1]||(e[1]=i=>s.handleLayout("split"))},A,2),o("button",{class:a(["BtnGroup-item btn btn-outline",n.layout==="html"?"selected":""]),type:"button",onClick:e[2]||(e[2]=i=>s.handleLayout("html"))},[(c(),m("svg",B,V))],2)]),v("   "),o("div",Z,[o("button",{class:"BtnGroup-item btn",onClick:e[3]||(e[3]=(...i)=>s.handlePrint&&s.handlePrint(...i))},"Print/Export PDF"),o("button",{class:"BtnGroup-item btn",disabled:n.copy,onClick:e[4]||(e[4]=(...i)=>s.handleCopy&&s.handleCopy(...i))},"Copy HTML",8,P)])])]),o("div",{class:a(["md-editor",n.layout])},[p(u,null,{default:f(()=>[p(h,{ref:"editor",mode:"markdown",class:"md-code",radius:"0px",onScroll:s.handleMdScroll,onMouseenter:e[5]||(e[5]=i=>{this.lock=!0}),onMousedown:s.handleMdClick,style:{height:"100%"},value:n.md,"onUpdate:value":e[6]||(e[6]=i=>n.md=i)},null,8,["onScroll","onMousedown","value"])]),_:1}),o("div",{class:"md-preview markdown-body",ref:"preview",onMousedown:e[7]||(e[7]=(...i)=>s.handleHtmlClick&&s.handleHtmlClick(...i)),onScroll:e[8]||(e[8]=(...i)=>s.handleHtmlScroll&&s.handleHtmlScroll(...i)),onMouseenter:e[9]||(e[9]=i=>{this.lock=!1})},[o("div",{innerHTML:n.html},null,8,N)],544)],2)])}const U=y(H,[["render",G],["__file","markdown.html.vue"]]);export{U as default};
