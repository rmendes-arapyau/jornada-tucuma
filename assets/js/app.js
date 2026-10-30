(function(){
var routes=["inicio","sintese","fluxo","teses","fatores","viabilidade","indicadores"];
var names={inicio:"Início",sintese:"Síntese",fluxo:"Fluxo",teses:"Teses e mensagens",fatores:"Fatores críticos",viabilidade:"Viabilidade econômica",indicadores:"Indicadores"};
var mode="fit";
function fit(){
  var wrap=document.getElementById("figwrap"),stage=document.getElementById("figstage"),inner=document.getElementById("figinner");
  if(!wrap||wrap.offsetParent===null)return;
  var w=wrap.clientWidth, s=mode==="fit"?Math.min(1,w/2824):1;
  inner.style.transform="scale("+s+")";
  stage.style.width=Math.round(2824*s)+"px";
  stage.style.height=Math.round(2420*s)+"px";
}
function show(name,fromNav){
  if(routes.indexOf(name)<0)name="inicio";
  document.querySelectorAll(".view").forEach(function(v){v.hidden=v.getAttribute("data-view")!==name;});
  document.querySelectorAll(".nav a").forEach(function(a){
    if(a.getAttribute("data-route")===name)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");
  });
  document.title=(name==="inicio"?"Jornada Tucumã":names[name]+" · Jornada Tucumã");
  document.body.classList.remove("nav-open");document.body.classList.toggle("is-cover",name==="inicio");
  var btn=document.querySelector(".menu-btn"); if(btn)btn.setAttribute("aria-expanded","false");
  window.scrollTo(0,0);
  if(fromNav){var m=document.getElementById("main"); if(m)m.focus({preventScroll:true});}
  if(name==="fluxo")requestAnimationFrame(fit);
}
window.addEventListener("hashchange",function(){show(location.hash.slice(1),true);});
window.addEventListener("resize",fit);
document.addEventListener("click",function(ev){
  var z=ev.target.closest("[data-zoom]");
  if(z){mode=z.getAttribute("data-zoom");document.querySelectorAll("[data-zoom]").forEach(function(b){b.setAttribute("aria-pressed",b===z?"true":"false");});fit();return;}
  var mb=ev.target.closest(".menu-btn");
  if(mb){var open=!document.body.classList.contains("nav-open");document.body.classList.toggle("nav-open",open);mb.setAttribute("aria-expanded",open?"true":"false");return;}
  if(document.body.classList.contains("nav-open")&&!ev.target.closest(".sidebar")){document.body.classList.remove("nav-open");var b2=document.querySelector(".menu-btn");if(b2)b2.setAttribute("aria-expanded","false");}
});
document.addEventListener("keydown",function(ev){if(ev.key==="Escape"&&document.body.classList.contains("nav-open")){document.body.classList.remove("nav-open");var b=document.querySelector(".menu-btn");if(b){b.setAttribute("aria-expanded","false");b.focus();}}});
show(location.hash.slice(1),false);
})();
