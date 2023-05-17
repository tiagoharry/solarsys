/*const menu = document.querySelector('.menu-open')
const menuDrop = document.querySelector('.menu-drop')
const body = document.querySelector('body')*/

/*menu.addEventListener('click', () => {
  menuDrop.classList.toggle('hide')
  body.style.background = "gray"
  body.style.opacity = "100%"
})*/

const btnMobile = document.getElementById('btn_mobile');
const link = document.querySelector('.menu_links');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('menu');
    
    link.style.transform = "translate(-100%, 0)";
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
link.addEventListener('click', toggleMenu);
link.addEventListener('touchstart', toggleMenu);

//form mask
const phone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

const cnpj = (event) => {
  let input = event.target
  input.value = cnpjMask(input.value)
}

const cnpjMask = (value) => {
  if (!value) return ""
  value = value.replace(/^(\d{2})(\d)/, "$1.$2")
  value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
  value = value.replace(/\.(\d{3})(\d)/, ".$1/$2")
  value = value.replace(/(\d{4})(\d)/, "$1-$2") 

  return value
}