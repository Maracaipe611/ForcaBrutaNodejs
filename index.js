// Declarando as variáveis
var senha = "";
var quantidadeDeTentativas = 0;

// Instanciando o módulo readline do Node.js para entrada e saída de dados
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Lendo o valor da senha e guardando na variável
readline.question(`Digite sua senha\n`, senhaInput => {
  senha = senhaInput;
  console.log("Iniciando força bruta\n");
  ForcaBruta();

  readline.close();
});

// Função responsável por fazer a validação da senha informada com as tentativas realizadas pelo algoritmo de força bruta
function ValidarSenha(senhaInput) {
  
  // Caso o algoritmo consiga quebrar a senha
  if (senhaInput == senha) {
    console.log("Acesso permitido");
    return true;
  } else {
    
    // Caso não consiga quebrar
    console.log("Acesso negado\n");
    if (quantidadeDeTentativas == 3) {

      // Medida preventiva limitando à apenas 3 tentativas caso a senha esteja errada
      console.log("Quantidade de tentativas excedidas");
      return true;
    }
    return false;
  }
}

// Função responsável por realizar as tentativas de quebra de senha
function ForcaBruta() {
  
  // Declaração da variável para guardar o valor do momento de início da quebra da senha
  var inicioTempo = new Date().getTime();

  for (let index = 0; index < 999999; index++) {
    
    // Contando a quantidade de tentativas realizadas
    var tentativa = index + 1;
    quantidadeDeTentativas = tentativa;
    console.log(`Tentativa: ${quantidadeDeTentativas}`);

    let senhaForcaBruta = index.toString();

    // Se exceder o limite de tentativas ou quebrar a senha, finaliza a iteração
    if (ValidarSenha(senhaForcaBruta)) {
      break;
    }
  }

  // Declaração da variável pra guardar o valor do momento de fim da quebra da senha
  var fimTempo = new Date().getTime();

  // Calculando o tempo de execução do algoritmo
  var tempoExecucao = fimTempo - inicioTempo;
  console.log(`Tempo de execução: ${tempoExecucao}ms`);
}

