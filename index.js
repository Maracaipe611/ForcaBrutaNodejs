// Declarando as variáveis
var senha = "";
var quantidadeDeTentativas = 0;
var limitarTentativas = true;


// Instanciando o módulo readline do Node.js para entrada e saída de dados
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Lendo o valor da senha e guardando na variável
readline.question(`Digite sua senha, ela deve conter no mínimo 6 dígitos. Ex.: 123456\n`, senhaInput => {
  senha = senhaInput;
  if (ValidarInput(senhaInput)) {
    console.log("Senha inválida");
  } else {
    console.log("Iniciando força bruta\n");
    ForcaBruta();
  }

  readline.close();
});

// Validar Input
function ValidarInput(input) {
  let inputNumber = parseInt(input);
  let inputLength = inputNumber.length;

  if (isNaN(inputNumber)) {
    console.log("A senha deve ser numérica");
    return true;
  }

  if (inputLength <= 5) {
    console.log("A senha não pode ter menos de 6 dígitos");
    return true;
  }
  if (inputNumber < 1) {
    console.log("A senha não pode ser 0");
    return true;
  }

  return false;
}

// Função responsável por fazer a validação da senha informada com as tentativas realizadas pelo algoritmo de força bruta
function ValidarSenha(senhaInput) {

  // Caso o algoritmo consiga quebrar a senha
  if (senhaInput == senha) {
    console.log("Acesso permitido");
    return true;
  } else {
    // Caso a contramedida de limite de tentativas seja ativada
    if (limitarTentativas) {
      // Caso não consiga quebrar
      console.log("Acesso negado\n");
      if (quantidadeDeTentativas == 3) {

        // Medida preventiva limitando à apenas 3 tentativas caso a senha esteja errada
        console.log("Quantidade de tentativas excedidas");
        return true;
      }
    }
    return false;
  }
}

// Função responsável por realizar as tentativas de quebra de senha
function ForcaBruta() {

  // Declaração da variável para guardar o valor do momento de início da quebra da senha
  var inicioTempo = new Date().getTime();

  for (let index = 1; index < 999999; index++) {

    // Contando a quantidade de tentativas realizadas
    quantidadeDeTentativas++
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

