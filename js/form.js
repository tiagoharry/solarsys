  const sendToSlack = () => {

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  //const message = document.getElementById('message').value;
  const cnpj = document.querySelector('.cnpj');
  const phoneCheck = document.getElementById('phoneCheck').checked;
  const emailCheck = document.getElementById('emailCheck').checked;

  const slackMessage = `Um contato requisitado! \nNome: ${name}
   \nEmail: ${email} 
   \nNumero de Telefone: ${phone} 
   \nMensagem: ${message}
   \nCnpj: ${cnpj}
   \n"Deseja Receber mensagem por telefone?": ${phoneCheck}
   \n"Deseja Receber mensagem por email?": ${emailCheck}
  `

  // @todo
  fetch('contato@plataformasolarsys.com', {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: JSON.stringify({
      text: slackMessage
    })
  }).then(response => response.json())
    .then(data => {
      console.log('Dados recebidos:', data);
      // faz alguma coisa com os dados aqui
    })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
    });

}

const send = document.querySelector('.send');

send.addEventListener('click', sendToSlack);
