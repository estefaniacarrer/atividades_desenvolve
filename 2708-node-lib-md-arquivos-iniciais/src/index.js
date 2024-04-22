import fs from "fs";
import chalk from "chalk";

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];//permite que um array seja expansivo 
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}));
    return resultados.length !== 0 ? resultados : 'Não há links no arquivo'
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "Arquivo não encontrado"));
}

//utilizando async/await
//deve esperar uma resposta antes de continuar
async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
     return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro);
  }
}

export default pegaArquivo;











































//utilizando promises com then()
// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = "utf-8";
//   fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch(trataErro);
// }
// pegaArquivo("./arquivos/texto.md");

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = "utf-8";
//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => { //recebe um arquivo
//     if(erro) {
//         trataErro(erro);
//     }
//     console.log(chalk.green(texto));
//   });
// }

// pegaArquivo("./arquivos/texto.md");
