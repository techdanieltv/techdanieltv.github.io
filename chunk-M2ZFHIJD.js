import{b as x,c as z}from"./chunk-FWKPPODT.js";import"./chunk-VSKOGBAH.js";import"./chunk-ADY2GKJC.js";import"./chunk-WBLWCSP5.js";import"./chunk-UXMDVUQN.js";import"./chunk-HC6MZPB3.js";import"./chunk-YMI2B6JE.js";import"./chunk-4YKVRCH4.js";import"./chunk-FERD25SW.js";import"./chunk-SYQESB6R.js";import"./chunk-LEIMCQKJ.js";import"./chunk-MM5QLNJM.js";import"./chunk-72KDLSWN.js";import"./chunk-5OMUW5VI.js";import"./chunk-OBXDPQ3V.js";import"./chunk-4JAX2GF5.js";import"./chunk-MCRJI3T3.js";import"./chunk-YUQCATHU.js";import"./chunk-WZBJ6353.js";import{e as k}from"./chunk-2FTBLW4H.js";import{b as I}from"./chunk-TBMSBXVH.js";import{A as c,B as r,Ba as y,C as i,D as p,J as f,Q as d,R as b,Va as M,Wa as u,Xa as F,Ya as T,Za as P,_a as E,aa as S,ea as v,eb as O,fb as _,s as o,t as g,v as D,y as C}from"./chunk-6OOBC5BM.js";import"./chunk-7O5VHV6O.js";import"./chunk-63FF5AP4.js";import"./chunk-C45FPRRA.js";import"./chunk-MIR5STHC.js";import"./chunk-F7XBNY6P.js";import"./chunk-JX3TYZ34.js";import"./chunk-RUY5SX76.js";import"./chunk-NIOQNOHM.js";import"./chunk-4U6PRYVA.js";import"./chunk-ZAB4NJP7.js";import"./chunk-JWIEPCRG.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import{f as m}from"./chunk-RW4GY4BD.js";function A(l,n){if(l&1&&(r(0,"div")(1,"h2"),d(2),i(),p(3,"canvas",3),i()),l&2){let h=n.$implicit,e=f();o(2),b(h.mese),o(),c("data",e.getSpesePerMacroCategoriaChartData(h))("options",e.pieChartOptions)}}function G(l,n){if(l&1&&(r(0,"div")(1,"h2"),d(2),i(),p(3,"canvas",3),i()),l&2){let h=n.$implicit,e=f();o(2),b(h.mese),o(),c("data",e.getSpesePerMicroCategoriaChartData(h))("options",e.pieChartOptions)}}var K=(()=>{let n=class n{constructor(e,t,a){this.sheetsService=e,this.toastController=t,this.loadingController=a,this.spese=[],this.ingressi=[],this.monthlyData=[],this.ingressiChartData={labels:[],datasets:[]},this.speseChartData={labels:[],datasets:[]},this.differenzaChartData={labels:[],datasets:[]},this.barChartOptions={responsive:!0,plugins:{legend:{display:!1},title:{display:!1,text:""}}},this.pieChartOptions={responsive:!0,plugins:{legend:{position:"right"},title:{display:!1,text:""}}}}ngOnInit(){return m(this,null,function*(){let e=yield this.loadingController.create({message:"Caricamento Dashboard..."});yield e.present();try{yield this.loadData(),this.processData(),this.setupCharts()}catch(t){console.error("Errore nel caricamento della dashboard:",t),this.presentToast("Errore nel caricamento della dashboard.")}finally{yield e.dismiss()}})}loadData(){return m(this,null,function*(){try{let e=yield this.sheetsService.getData("Spese!A2:F");this.spese=e.map(a=>({Descrizione:a[0],Mese:a[1],Giorno:parseInt(a[2],10),Spesa:parseFloat(a[3]),Categoria_Primaria:a[4],Categoria_Secondaria:a[5]}));let t=yield this.sheetsService.getData("Ingressi!A2:C");this.ingressi=t.map(a=>({Mese:a[0],Descrizione:a[1],Valore:parseFloat(a[2])}))}catch(e){throw console.error("Errore nel caricamento dei dati:",e),e}})}processData(){let e=["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];this.monthlyData=e.map(t=>({mese:t,ingressiTotali:0,speseTotali:0,differenzaTotale:0,spesePerMacroCategoria:{},spesePerMicroCategoria:{}})),this.ingressi.forEach(t=>{let a=this.monthlyData.find(s=>s.mese===t.Mese);a&&(a.ingressiTotali+=t.Valore)}),this.spese.forEach(t=>{let a=this.monthlyData.find(s=>s.mese===t.Mese);a&&(a.speseTotali+=t.Spesa,a.spesePerMacroCategoria[t.Categoria_Primaria]?a.spesePerMacroCategoria[t.Categoria_Primaria]+=t.Spesa:a.spesePerMacroCategoria[t.Categoria_Primaria]=t.Spesa,a.spesePerMicroCategoria[t.Categoria_Secondaria]?a.spesePerMicroCategoria[t.Categoria_Secondaria]+=t.Spesa:a.spesePerMicroCategoria[t.Categoria_Secondaria]=t.Spesa)}),this.monthlyData.forEach(t=>{t.differenzaTotale=t.ingressiTotali-t.speseTotali})}setupCharts(){this.ingressiChartData={labels:this.monthlyData.map(e=>e.mese),datasets:[{label:"Ingressi Totali (\u20AC)",data:this.monthlyData.map(e=>e.ingressiTotali),backgroundColor:"rgba(75, 192, 192, 0.6)"}]},this.speseChartData={labels:this.monthlyData.map(e=>e.mese),datasets:[{label:"Spese Totali (\u20AC)",data:this.monthlyData.map(e=>e.speseTotali),backgroundColor:"rgba(255, 99, 132, 0.6)"}]},this.differenzaChartData={labels:this.monthlyData.map(e=>e.mese),datasets:[{label:"Differenza Totale (\u20AC)",data:this.monthlyData.map(e=>e.differenzaTotale),backgroundColor:"rgba(54, 162, 235, 0.6)"}]}}getSpesePerMacroCategoriaChartData(e){let t=Object.keys(e.spesePerMacroCategoria),a=Object.values(e.spesePerMacroCategoria),s=this.getColors(t.length);return{labels:t,datasets:[{data:a,backgroundColor:s}]}}getSpesePerMicroCategoriaChartData(e){let t=Object.keys(e.spesePerMicroCategoria),a=Object.values(e.spesePerMicroCategoria),s=this.getColors(t.length);return{labels:t,datasets:[{data:a,backgroundColor:s}]}}getColors(e){let t=["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF","#FF9F40","#66FF66","#FF6666","#66CCFF","#FFCC66","#CC66FF","#FF66CC"];if(e<=t.length)return t.slice(0,e);{let a=[];for(let s=0;s<e;s++){let j="#"+Math.floor(Math.random()*16777215).toString(16);a.push(j)}return a}}presentToast(e){return m(this,null,function*(){(yield this.toastController.create({message:e,duration:2e3,position:"bottom"})).present()})}};n.\u0275fac=function(t){return new(t||n)(g(I),g(z),g(x))},n.\u0275cmp=D({type:n,selectors:[["app-dashboard"]],decls:35,vars:9,consts:[[1,"ion-padding",3,"fullscreen"],["baseChart","","chartType","bar",3,"data","options"],[4,"ngFor","ngForOf"],["baseChart","","chartType","pie",3,"data","options"]],template:function(t,a){t&1&&(r(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),d(3,"Dashboard"),i()()(),r(4,"ion-content",0)(5,"ion-card")(6,"ion-card-header")(7,"ion-card-title"),d(8,"Ingressi Totali per Mese"),i()(),r(9,"ion-card-content"),p(10,"canvas",1),i()(),r(11,"ion-card")(12,"ion-card-header")(13,"ion-card-title"),d(14,"Spese Totali per Mese"),i()(),r(15,"ion-card-content"),p(16,"canvas",1),i()(),r(17,"ion-card")(18,"ion-card-header")(19,"ion-card-title"),d(20,"Differenza Totale per Mese (Ingressi - Spese)"),i()(),r(21,"ion-card-content"),p(22,"canvas",1),i()(),r(23,"ion-card")(24,"ion-card-header")(25,"ion-card-title"),d(26,"Spese per Macro Categoria"),i()(),r(27,"ion-card-content"),C(28,A,4,3,"div",2),i()(),r(29,"ion-card")(30,"ion-card-header")(31,"ion-card-title"),d(32,"Spese per Micro Categoria"),i()(),r(33,"ion-card-content"),C(34,G,4,3,"div",2),i()()()),t&2&&(o(4),c("fullscreen",!0),o(6),c("data",a.ingressiChartData)("options",a.barChartOptions),o(6),c("data",a.speseChartData)("options",a.barChartOptions),o(6),c("data",a.differenzaChartData)("options",a.barChartOptions),o(6),c("ngForOf",a.monthlyData),o(6),c("ngForOf",a.monthlyData))},dependencies:[E,_,O,M,P,F,T,u,v,S,y,k],styles:["ion-card[_ngcontent-%COMP%]{margin-bottom:24px}ion-card-title[_ngcontent-%COMP%]{font-size:1.2em;font-weight:700}h2[_ngcontent-%COMP%]{font-size:1em;margin-top:16px;margin-bottom:8px}canvas[_ngcontent-%COMP%]{max-height:300px}"]});let l=n;return l})();export{K as DashboardPage};
