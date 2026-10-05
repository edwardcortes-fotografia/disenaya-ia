 "use client";
import {useState} from "react";
export default function Home(){
 const [brief,setBrief]=useState("");
 const [result,setResult]=useState(null);
 const [saved,setSaved]=useState([]);
 const generate=()=>{const text=brief.trim()||"Promoción especial para nuevos clientes";setResult({title:"PROMOCIÓN ESPECIAL",copy:`${text}. Aprovecha esta oportunidad y contáctanos hoy.`,cta:"ESCRÍBENOS"});}
 return <main style={{minHeight:"100vh",background:"#f6f4f8",color:"#17151c"}}>
  <header style={{background:"#17151c",color:"#fff",padding:"18px 28px",display:"flex",justifyContent:"space-between"}}>
   <b style={{fontSize:24}}>Diseña<span style={{color:"#ff2f9e"}}>Ya</span> IA</b><span style={{fontSize:13,opacity:.75}}>V4.1 · MVP</span>
  </header>
  <section style={{maxWidth:1100,margin:"auto",padding:35}}>
   <h1 style={{fontSize:34,marginBottom:5}}>Crea publicidad con IA</h1>
   <p style={{color:"#756e7c"}}>Escribe tu idea comercial y genera una propuesta en segundos.</p>
   <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,marginTop:25}}>
    <div style={{background:"#fff",padding:22,borderRadius:18,border:"1px solid #e8e3eb"}}>
     <h2 style={{fontSize:18}}>Nueva campaña</h2>
     <label style={{fontSize:12,fontWeight:700}}>¿Qué quieres promocionar?</label>
     <textarea value={brief} onChange={e=>setBrief(e.target.value)} placeholder="Ej. Corte + barba por $35.000 durante octubre..." style={{width:"100%",minHeight:150,marginTop:8,padding:12,borderRadius:10,border:"1px solid #ddd7e2",boxSizing:"border-box"}}/>
     <button onClick={generate} style={{marginTop:14,width:"100%",padding:13,border:0,borderRadius:10,background:"#ff2f9e",color:"#fff",fontWeight:800,cursor:"pointer"}}>✨ Generar propuesta</button>
     <button onClick={()=>{if(result)setSaved([result,...saved])}} style={{marginTop:9,width:"100%",padding:11,border:"1px solid #e8e3eb",borderRadius:10,background:"#fff",cursor:"pointer"}}>♡ Guardar campaña</button>
    </div>
    <div style={{background:"#fff",padding:22,borderRadius:18,border:"1px solid #e8e3eb"}}>
     <h2 style={{fontSize:18}}>Vista previa</h2>
     <div style={{minHeight:360,display:"flex",alignItems:"center",justifyContent:"center",background:"#eeeaf0",borderRadius:14}}>
      <div style={{width:240,aspectRatio:"4/5",borderRadius:16,background:"linear-gradient(145deg,#17151c,#693f5e)",color:"#fff",padding:24,textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",boxSizing:"border-box"}}>
       <small style={{letterSpacing:2,color:"#ff80c4"}}>TU NEGOCIO</small>
       <h2>{result?.title||"TU PROMOCIÓN"}</h2>
       <p>{result?.copy||"Aquí aparecerá tu propuesta publicitaria."}</p>
       <b style={{background:"#ff2f9e",padding:10,borderRadius:8}}>{result?.cta||"COMPRA AHORA"}</b>
      </div>
     </div>
    </div>
   </div>
   <div style={{marginTop:20,background:"#fff",padding:22,borderRadius:18,border:"1px solid #e8e3eb"}}>
    <h2 style={{fontSize:18}}>Mis campañas ({saved.length})</h2>
    {saved.length===0?<p style={{color:"#756e7c"}}>Aún no tienes campañas guardadas.</p>:saved.map((x,i)=><div key={i} style={{padding:"12px 0",borderBottom:"1px solid #eee"}}><b>{x.title}</b><div style={{fontSize:12,color:"#756e7c"}}>{x.copy}</div></div>)}
   </div>
  </section>
 </main>
}