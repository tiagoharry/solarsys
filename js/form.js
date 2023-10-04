  const sendToSlack = (event) => {
    event.preventDefault();

  const name = document.getElementById('nameForm').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phoneForm').value;
  const cnpj = document.getElementById('cnpjForm').value;
  const phoneCheck = document.getElementById('phoneCheck').checked;
  const emailCheck = document.getElementById('emailCheck').checked;

  const slackMessage = `Um contato requisitado! \nNome: ${name}
   \nEmail: ${email} 
   \nNumero de Telefone: ${phone} 
   \nCnpj: ${cnpj}
   \n"Deseja Receber mensagem por telefone?": ${phoneCheck}
   \n"Deseja Receber mensagem por email?": ${emailCheck}
  `


  console.log(slackMessage);

  // @todo
  fetch('https://solarsys-email-service-aw7msj59q-thiagocmaraujo.vercel.app/email', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: slackMessage,
      to: 'plataformasolarsys@gmail.com',
      subject: 'Novo contato requisitado!'
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

const form = document.querySelector('#formContent');
form.addEventListener('submit', sendToSlack);