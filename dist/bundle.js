(()=>{console.log("hello world");const e=document.getElementById("users-list");(async()=>{const s=await fetch("http://localhost:3000/api/users");console.log("getUsers called"),console.log(s);const o=await s.json();(s=>{for(var o=0;o<s.length;o++){const t=s[o],l=document.createElement("li");l.innerText="Username: "+t.name,e.appendChild(l)}})(o.users),o.users})()})();