import{_ as v,M as c,p as w,q as g,R as s,Q as r,Z as x,ac as S,t as N,N as m,V as C,a1 as D}from"./framework-b01e3c2f.js";import{f as V}from"./sqlFormatter-ec5e07c1.js";import"./mermaid-c798b724-509d9c22.js";const p="diff1",u="diff2",h="diffm";function l(t){try{if(window)return localStorage.getItem(t)}catch{}}function f(t,e){try{window&&localStorage.setItem(t,e)}catch{}}const O={data(){let t=l(p),e=l(u),o=l(h);return[void 0,null].includes(t)&&(t=`Hello world.
      Diff inline
      `),[void 0,null].includes(e)&&(e=`Hello world.
      Diff Inline
      Very good.
      `),{loading:!1,diff1:t,diff2:e,mode:o||""}},watch:{diff1(t){f(p,t)},diff2(t){f(u,t)},mode(t){f(h,t)}},mounted(){},methods:{prettifySQL(t=!1){try{const e=V(this.diff1,{language:"mysql",tabWidth:2,keywordCase:"upper",linesBetweenQueries:2});this.diff1=e}catch(e){toastr.error(e.message)}},parseJSON(t){try{let e=this[t].trim();try{try{e=new Function(`return (${e})`)()}catch{e=new Function(`return ('${e}')`)()}}catch{}let o=null;typeof e=="string"?o=JSON.parse(e):o=e,this[t]=JSON.stringify(o,"",2)}catch(e){toastr.error(e.message)}},handleFormat(){this.mode==="mysql"?this.prettifySQL():this.mode==="json"&&(this.parseJSON("diff1"),this.parseJSON("diff2"))}}},J=r("span",null,"Diff/Compare Viewer",-1),b=D('<option value="">TEXT</option><option value="javascript">JS</option><option value="json">JSON</option><option value="html">HTML</option><option value="css">CSS</option><option value="mysql">SQL</option>',6),k=[b],F=r("span",null,"Format",-1),L=[F];function j(t,e,o,d,i,a){const y=c("DiffEditor"),_=c("ClientOnly");return w(),g("div",null,[s(" # Diff/Compare Viewer "),s(" ## Diff Text "),s(` <form @submit.prevent style="margin: 20px 0;">
  <div style="display: flex;">
    <div style="width: 50%; padding-right: 20px;">
      <textarea class="form-control" rows="6" placeholder="src" v-model="diff1" style="width: 100%;"></textarea>
    </div>
    <div style="width: 50%;">
      <textarea class="form-control" rows="6" placeholder="dist" v-model="diff2" style="width: 100%;"></textarea>
    </div>
  </div>
</form> `),r("h1",null,[J,x(r("select",{class:"form-select","onUpdate:modelValue":e[0]||(e[0]=n=>i.mode=n),style:{"margin-left":"20px"}},k,512),[[S,i.mode]]),N("   "),r("button",{class:"btn btn-primary",onClick:e[1]||(e[1]=(...n)=>a.handleFormat&&a.handleFormat(...n))},L)]),m(_,null,{default:C(()=>[m(y,{ref:"editor",style:{height:"calc(100vh - 200px)","min-height":"600px"},diff1:i.diff1,"onUpdate:diff1":e[2]||(e[2]=n=>i.diff1=n),diff2:i.diff2,"onUpdate:diff2":e[3]||(e[3]=n=>i.diff2=n),mode:i.mode},null,8,["diff1","diff2","mode"])]),_:1})])}const B=v(O,[["render",j],["__file","diff.html.vue"]]);export{B as default};
