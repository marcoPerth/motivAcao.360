
// Função que atualiza a data e hora em tempo real
function atualizarDataHora() {
  var agora = new Date();
  var dia = agora.getDate();
  var mes = agora.getMonth() + 1;
  var ano = agora.getFullYear();
  var hora = agora.getHours();
  var minuto = agora.getMinutes();
  var segundo = agora.getSeconds();

  // Formata a data e hora
  var dataHora = dia + "/" + mes + "/" + ano + " " + hora + ":" + minuto + ":" + segundo;

  // Atualiza o texto do elemento HTML
  document.getElementById("data-hora").textContent = dataHora;
}

// Chama a função atualizarDataHora a cada segundo
setInterval(atualizarDataHora, 1000);



 
