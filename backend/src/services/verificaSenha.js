const bcrypt = require("bcrypt");

async function criptografarSenha(senha) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(senha, saltRounds);
  return hash;
}

// Exemplo de uso
(async () => {
  const senha = "minha_senha_segura";
  const senhaCriptografada = await criptografarSenha(senha);
  console.log(senhaCriptografada);
})();

async function verificaSenha(password, hash) {
  const match = await bcrypt.compare(password, hash);
  return match;
}

(async () => {
  const senhaLogin = "12345";
  const senhaCriptografada =
    "$2b$10$das2HeB1EFRLW4WKYaaFWO5VLDiYWbTLEqPoP0cH7qOodKO6CeowS"; // Exemplo de hash
  const resultado = await verificaSenha(senhaLogin, senhaCriptografada);

  if (resultado) {
    console.log("Login bem-sucedido!");
  } else {
    console.log("Senha incorreta.");
  }
})();
