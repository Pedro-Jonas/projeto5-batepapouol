let nome;
enviarnome()
function enviarnome(){
    nome = {
        name: prompt("Qual o seu nome?")
    };
    let promisse = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", nome);
    promisse.then(setInterval(manteronline, 5000));
    promisse.catch(tratarerro);
}
function tratarerro(erro){
    let tipo = erro.response.status
    if (tipo === 400){
        alert("Nome já utilizado")
        enviarnome()
    }
}
function manteronline(){
    axios.post("https://mock-api.driven.com.br/api/v6/uol/status", nome);
}
