let bar = document.getElementById('burger-bar');
let btn = document.getElementById('btn');
const miniNav = document.getElementById('mini-ul');

btn.addEventListener('click', toggleMeni);

function toggleMeni(){
    miniNav.classList.toggle('show');
}
 

 