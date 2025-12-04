const sel= document.getElementById("sell");
const roll= document.getElementById("rollTF");
const department= document.getElementById("departmentTF");

  sel.addEventListener('change',modified);
  function modified()
   { 
    if(sel.value==="teacher")
     { 
        department.style.display = "inline"; 
        roll.style.display = "none"; 
    }
     else if(sel.value==="student")
     {
         roll.style.display = "inline"; 
        department.style.display = "none";
     } 
     else
       { 
        roll.style.display = "none";
         department.style.display = "none";
       }
     }


