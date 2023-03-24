let Form = document.getElementById("formulario");

Form.addEventListener("submit", function(e){
    e.preventDefault();

    let campoA = parseInt(document.getElementById("campoA").value);
    let campoB = parseInt(document.getElementById("campoB").value);
    let Mensagem = document.getElementById("mensagemAviso");

    if (campoA < campoB){
        document.querySelector("p").style.color="green";
        Mensagem.textContent = "Formulário enviado!";
    }else{
        Button.disabled = true;
        document.querySelector("p").style.color="red";
        Mensagem.textContent = "* O valor do campo B precisa ser maior do que o campo A.";
    }
});

function voltar(){
    Button.disabled = false;
}