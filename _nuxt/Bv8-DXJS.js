import{d as i,z as o,s as c,ag as h,m as u,l as d,i as l,E as p,D as a,ah as m,ai as g}from"./CMng2nMH.js";const f=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(n){const t=n,r=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=c(h(u().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return d(e,t.src)}return t.src});return(s,e)=>(l(),p(m(a(g)),{src:a(r),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}}),S=Object.assign(f,{__name:"ProseImg"});export{S as default};
