function cadastraUsuario(email, senha , confirmaSenha){
    var ds_email = document.getElementById(email).value;
    var ds_senha = document.getElementById(senha).value;
    var ds_confirmaSenha = document.getElementById(confirmaSenha).value;
    
    if (ds_senha == '' && ds_confirmaSenha == '' && ds_email == '' || ds_senha == '' || ds_confirmaSenha == '' || ds_email == '') {
    	alert('Preencha todos os campos!');
    }else{
    	if (ds_senha === ds_confirmaSenha) {
    		alert('Cadastro realizado com sucesso!');    		
			window.location.replace("FilmeFlix/login.html");
    	}else {
    		alert('As senhas devem ser identicas!');
    	}
    }
}

function voltaPagina(){
	window.history.back();
}

function verificaCampos(email, senha){
	var ds_email = document.getElementById(email).value;
    var ds_senha = document.getElementById(senha).value;

    if (ds_email == '' && ds_senha == '' || ds_email == '' || ds_senha == '') {
    	alert('Preencha todos os campos!');
    }else {
    	window.location.replace("index.html");	
    }
}


function abrirModal(src, alt, name) {
    var tituloFilme = document.getElementById("tituloFilme");
    var imgemFilme = document.getElementById("imgemFilme");
    var DescricaoFilme = document.getElementById("DescricaoFilme");

    DescricaoFilme.innerHTML = alt;
    tituloFilme.innerHTML = name;
    imgemFilme.src = src; 
    
    // Get the modal
    var modal_filme = document.getElementById("modal_filme");

    // Get the button that opens the modal
    var btn_filme = document.getElementById("myBtn");

    modal_filme.style.display = "block";

}

function fecharModal() {
    // Get the <span> element that closes the modal
    var modal_filme = document.getElementById("modal_filme").style.display = "none";
}