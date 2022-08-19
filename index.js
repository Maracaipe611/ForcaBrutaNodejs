var senha = "";
var quantidadeDeTentativas = 0;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Digite sua senha\n`, senhaInput => {
  senha = senhaInput;
  console.log("Iniciando força bruta\n");
  ForcaBruta();

  readline.close();
});

function ValidarSenha(senhaInput) {
  if (senhaInput == senha) {
    console.log("Acesso permitido");
    return true;
  } else {
    console.log("Acesso negado\n");
    if (quantidadeDeTentativas == 3) {
      console.log("Quantidade de tentativas excedidas");
      return true;
    }
    return false;
  }
}

function ForcaBruta() {
  var inicioTempo = new Date().getTime();

  for (let index = 0; index < 999999; index++) {
    var tentativa = index + 1;
    quantidadeDeTentativas = tentativa;

    console.log(`Tentativa: ${quantidadeDeTentativas}`);
    let senhaForcaBruta = index.toString();

    if (ValidarSenha(senhaForcaBruta)) {
      break;
    }
  }

  var fimTempo = new Date().getTime();
  var tempoExecucao = fimTempo - inicioTempo;
  console.log(`Tempo de execução: ${tempoExecucao}ms`);
}

