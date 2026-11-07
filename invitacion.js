(() => {
  const token=location.hash.slice(1),status=document.getElementById('status');
  if(!/^[a-f0-9]{64}$/.test(token)){status.textContent='Este enlace no contiene una invitación válida. Pide un enlace nuevo a la persona responsable del hogar.';return;}
  document.getElementById('invitation').hidden=false;
  document.getElementById('code').value=token;
  document.getElementById('open').href=`komoki://invite?token=${token}`;
  document.getElementById('copy').addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(token);status.textContent='Código copiado. Pégalo en KOMOKI → Tu hogar → Tengo una invitación.';}
    catch{document.getElementById('code').select();status.textContent='Selecciona y copia el código para pegarlo en KOMOKI.';}
  });
})();
