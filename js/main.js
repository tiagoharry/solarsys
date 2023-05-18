/*const menu = document.querySelector('.menu-open')
const menuDrop = document.querySelector('.menu-drop')
const body = document.querySelector('body')*/

/*menu.addEventListener('click', () => {
  menuDrop.classList.toggle('hide')
  body.style.background = "gray"
  body.style.opacity = "100%"
})*/

//mobile button
const btnMobile = document.getElementById('btn_mobile');
const link = document.querySelector('.menu_links');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('menu');

  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
link.addEventListener('click', toggleMenu);
/*link.addEventListener('touchstart', toggleMenu);*/

//form mask
const phone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, "($1) $2")
  value = value.replace(/(\d)(\d{4})$/, "$1-$2")
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

//form input
const submit = document.querySelector('#submit')

submit.addEventListener('click', () => {
  erro()
})

function erro() {
  const erro = document.querySelector('#erro')
  const phoneValue = document.querySelector('.phone').value
  const cnpjValue = document.querySelector('.cnpj').value
  const nameValue = document.querySelector('.name').value
  const emailValue = document.querySelector('.email').value
  const form = document.querySelector('#formContent')

  if (nameValue === 0 || emailValue.length === 0) {
    erro.style.display = "none"
  }

  else if (phoneValue.length < 15) {
    erro.style.display = "block"
    erro.textContent = "Telefone incompleto"
  }
  
  else if (cnpjValue.length < 18) {
    erro.style.display = "block"
    erro.textContent = "Cnpj incompleto"
  }

  else {
    erro.style.display = "none"
    alert('Formulário enviado')
    form.reset()

  }
}