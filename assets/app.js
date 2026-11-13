const repo="https://github.com/Eric-Herter-Games-Entertainment/Five-Nights-at-Manolos";
const games=[
["01","Five Nights at Manolo's 1","assets/fnam-01.svg",true,"Aventura de vigilancia nocturna","Five Nights at Manolo’s 1"],
["02","Five Nights at Manolo's 2","assets/fnam-02.svg",false,"Próxima entrega de la colección","Five Nights at Manolo’s 2"],
["03","Five Nights at Manolo's 3","assets/fnam-03.svg",false,"Una nueva noche por descubrir","Five Nights at Manolo’s 3"],
["04","Five Nights at Manolo's 4","assets/fnam-04.svg",false,"Nueva entrega en preparación","Five Nights at Manolo’s 4"],
["SL","Manolo's Location","assets/fnam-sl.svg",false,"Una localización diferente","Five Nights at Manolo’s Manolo’s location"],
["PS","Pizzeria Simulator","assets/fnam-ps.svg",false,"Entrega aún no publicada","Five Nights at Manolo’s PS"],
["UCN","Ultimate Custom Night","assets/fnam-ucn.svg",false,"Desafío reservado para el futuro","Five Nights at Manolo’s UCN"]
];
const downloads=[
["01 / ANDROID","ANDROID","APK para teléfonos y tabletas Android","Five_Nights_at_Manolo's_1_Android_Edition","FiveNightsatManolo_s-v1.0-signed.apk"],
["02 / IPHONE","IOS / IPHONE","Archivo IPA para dispositivos compatibles","Five_Nights_at_Manolo's_Iphone_Edition","FiveNightsatManolo_s.ipa"],
["03 / PC","WINDOWS","Ejecutable para ordenadores Windows","Five_Nights_at_Manolo's_1","FiveNightsatManolo_s.exe"],
["04 / NAVEGADOR","HTML MULTIPLATAFORMA","Archivo HTML de la edición multiplataforma","Five_Nights_at_Manolo's_Multiplatform_Edition","FNAF_TODO_EN_UNO.html"]
];
const catalog=document.querySelector("#catalog");
games.forEach(([id,name,cover,available,desc,path])=>{
const card=document.createElement("article");card.className="poster reveal";
const photo=document.createElement("div");photo.className="poster-media";
const img=document.createElement("img");img.src=cover;img.alt="Arte conceptual de "+name;img.loading="lazy";img.decoding="async";photo.append(img);
const status=document.createElement("span");status.className="poster-status"+(available?" live":"");status.textContent=available?"Disponible":"Sin publicar";photo.append(status);
const number=document.createElement("span");number.className="poster-id";number.textContent=id;photo.append(number);
const detail=document.createElement("div");detail.className="poster-text";
const title=document.createElement("h3");title.textContent=name;
const para=document.createElement("p");para.textContent=desc;
const action=document.createElement("a");action.className="poster-link";action.href=available?"#descargas":repo+"/releases";action.textContent=available?"Elegir plataforma":"Ver lanzamientos";
detail.append(title,para,action);card.append(photo,detail);catalog.append(card);
});
const grid=document.querySelector("#platforms");
downloads.forEach(([index,name,description,tag,file])=>{
const card=document.createElement("article");card.className="platform reveal";
const kicker=document.createElement("div");kicker.className="platform-kicker";kicker.textContent=index;
const title=document.createElement("h3");title.textContent=name;
const desc=document.createElement("p");desc.textContent=description;
const link=document.createElement("a");link.href=repo+"/releases/download/"+encodeURIComponent(tag)+"/"+encodeURIComponent(file);link.textContent="Descargar FNAM 1";link.setAttribute("aria-label","Descargar FNAM 1 para "+name);
card.append(kicker,title,desc,link);grid.append(card);
});
document.getElementById("year").textContent=new Date().getFullYear();
const header=document.querySelector(".site-nav");const onScroll=()=>header.classList.toggle("scrolled",window.scrollY>50);window.addEventListener("scroll",onScroll,{passive:true});onScroll();
const toggle=document.getElementById("mobileToggle"),links=document.getElementById("navLinks");
toggle.addEventListener("click",()=>{const expanded=links.classList.toggle("open");toggle.setAttribute("aria-expanded",String(expanded));toggle.textContent=expanded?"Cerrar":"Menú"});
links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{links.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.textContent="Menú"}));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){links.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.textContent="Menú"}});
if("IntersectionObserver" in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})},{threshold:.07});document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));}else{document.querySelectorAll(".reveal").forEach(el=>el.classList.add("visible"));}
