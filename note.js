let popbox=document.querySelector(".popup-box");
let addbox =document.querySelector(".add-box");
 let closeicon=popbox.querySelector("header i");
 let inputbox=popbox.querySelector("input");
 let textagreabox=popbox.querySelector("textarea");
 button =popbox.querySelector("button")
 let locals = JSON.parse(localStorage.getItem("locals")||"[]");
addbox.addEventListener("click",()=>
{
     popbox.classList.add("show");
});
closeicon.addEventListener("click",()=>
{
    inputbox.value="";
    textagreabox.value="";
     popbox.classList.remove("show");
});
function myfuntion() {
    document.querySelectorAll(".note").forEach(locals => locals.remove());
    locals.forEach((note) => {
        let litag=`   <li class="note">
        <div class="details">
            <p>${ note.tittle
            }</p>
            <span>${note.discription}</span>
        </div>
        <div class="botton-content">
            <span>${note.date}</span>
            <div class="setting">
                <i onclick="myfuntion1(this)" class="fa-solid fa-ellipsis"></i>
                <ul  class="menu">
                    <li class="li" ><i class="fa-solid fa-pen"></i>Edit</li>
                    <li><i class="fa-solid fa-trash"></i>DELETE</li>
                </ul>
            </div>
        </div>
    </li>`
    addbox.insertAdjacentHTML("afterend",litag)
    });
}
myfuntion();
function myfuntion1(elem) {
    elem.parentElement.classList.add("show");
}
button.addEventListener("click",e=>
{ e.preventDefault();
   let x=inputbox.value;
   let y=textagreabox.value;
   if (x || y ) {
    let  day= new Date(),
     month = day.getMonth(),
     year = day.getFullYear();
     let printcnsol={
      tittle:x ,discription: y,date: `${month} ,${day} ,${year}`
     }
    
    locals.push(printcnsol)
    localStorage.setItem("note",JSON.stringify(locals))
    closeicon.click();
   }
   else
   {
    alert("enter title and discription");
   }
   myfuntion();

});
