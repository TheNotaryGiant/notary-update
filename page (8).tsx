export default function BlogPage(){
return (
<div style={{maxWidth:900,margin:"0 auto",padding:"80px 24px",fontFamily:"system-ui"}}>
<h1 style={{fontSize:42,fontWeight:800}}>Blog</h1>
<p style={{color:"#666"}}>Guides from The Notary Giant — NYC mobile notary, apostille & loan signing.</p>
<div style={{display:"grid",gap:20,marginTop:24}}>
<a href="/blog/what-to-bring" style={{border:"1px solid #e5e5e5",borderRadius:16,padding:24,textDecoration:"none",color:"#111"}}><b>What to Bring to a Notary Appointment in NYC</b><br/><span style={{color:"#666"}}>Valid ID, documents, what not to sign before you arrive.</span></a>
<a href="/blog/apostille-checklist" style={{border:"1px solid #e5e5e5",borderRadius:16,padding:24,textDecoration:"none",color:"#111"}}><b>NYC Apostille Checklist</b><br/><span style={{color:"#666"}}>From notary to County Clerk to Department of State.</span></a>
<a href="/blog/loan-signing-tips" style={{border:"1px solid #e5e5e5",borderRadius:16,padding:24,textDecoration:"none",color:"#111"}}><b>Loan Signing Tips</b><br/><span style={{color:"#666"}}>How to avoid delays at closing.</span></a>
</div>
<p style={{marginTop:40}}><a href="/" style={{color:"#666"}}>← Back to Home</a></p>
</div>
)}