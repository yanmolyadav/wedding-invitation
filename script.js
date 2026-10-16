var C={date:new Date("2027-01-31T19:00:00+05:30"),events:[
 ["Pre-wedding","Haldi","30 January 2027","11 AM onwards","20270130T053000Z/20270130T083000Z"],
 ["The wedding","Wedding","31 January 2027","7 PM onwards","20270131T133000Z/20270131T173000Z"],
 ["Post-wedding","Reception","2 February 2027","6 PM onwards","20270202T123000Z/20270202T163000Z"]]};
var $=function(i){return document.getElementById(i)},R=document.documentElement,rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
$("ev").innerHTML=C.events.map(function(e){return '<div><div class="tag">'+e[0]+'</div><h3>'+e[1]+'</h3><p class="d">'+e[2]+'</p><p>'+e[3]+'</p><a target="_blank" rel="noopener" href="https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent(e[1]+" – Brijesh & Sangeeta")+'&dates='+e[4]+'">Add to calendar</a></div>'}).join("");
function tick(){var s=Math.max(0,Math.floor((C.date-new Date())/1000)),p=[["Days",86400],["Hours",3600],["Mins",60],["Secs",1]],h="";
 p.forEach(function(x){var v=Math.floor(s/x[1]);s-=v*x[1];h+='<div class="u"><b>'+String(v).padStart(2,"0")+'</b><small>'+x[0]+'</small></div>'});$("cd").innerHTML=h}
tick();setInterval(tick,1000);
$("share").onclick=function(e){e.preventDefault();var d={title:document.title,text:"You’re invited to Brijesh & Sangeeta’s wedding.",url:location.href};
 if(navigator.share){navigator.share(d).catch(function(){})}else{window.open("https://wa.me/?text="+encodeURIComponent(d.text+" "+d.url),"_blank")}};
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add("in")})},{threshold:.1});
document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});
// intro
var intro=$("intro");
function ready(){R.classList.remove("rdy");void R.offsetWidth;R.classList.add("rdy")}
$("open").onclick=function(){intro.classList.add("opening");setTimeout(function(){intro.classList.add("gone");ready();scrollTo(0,0)},1500)};
// petals (C only)
var cv=$("petals"),x=cv.getContext("2d"),P=[],W,H,on=false,cl=["rgba(245,158,11,.75)","rgba(232,89,12,.7)","rgba(214,110,130,.65)","rgba(255,230,180,.7)"];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}rs();addEventListener("resize",rs);
for(var i=0;i<30;i++)P.push({x:Math.random()*W,y:Math.random()*H,r:4+Math.random()*6,v:.4+Math.random()*.9,s:Math.random()*6,a:Math.random()*6,c:cl[i%4]});
function loop(){if(!on)return;x.clearRect(0,0,W,H);P.forEach(function(p){p.y+=p.v;p.s+=.02;p.a+=.025;p.x+=Math.sin(p.s)*.7;if(p.y>H+10){p.y=-10;p.x=Math.random()*W}
 x.save();x.translate(p.x,p.y);x.rotate(p.a);x.fillStyle=p.c;x.beginPath();x.ellipse(0,0,p.r,p.r/2,0,0,7);x.fill();x.restore()});requestAnimationFrame(loop)}
// style switcher
function setStyle(s){R.dataset.style=s;
 [].forEach.call(document.querySelectorAll("#sw button"),function(b){b.classList.toggle("on",b.dataset.s===s)});
 on=(s==="c"&&!rm);if(on)loop();
 if(s==="c"&&!rm){intro.classList.remove("gone","opening");R.classList.remove("rdy");scrollTo(0,0)}else{intro.classList.add("gone");ready()}}
setStyle("b");
