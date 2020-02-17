function validar(){
    console.log('Entrei na função validar');
    var nome = formSignUp.nome.value;
    console.log(nome);
    var email = document.getElementById('email').value;
    console.log(email);
    var senha = document.getElementsByName('senha')[0].value;
    console.log(senha);
    var confirm_senha = formSignUp.confirm_senha.value;
    console.log(confirm_senha);
    var msgerro = document.getElementById('msg_erro');
    if (nome == '' || nome.lenght < 3){
        msgerro.innerHTML= 'Nome invalido!';
        formSignUp.nome.value = '';
        formSignUp.nome.focus();
        return false;
    }
    if (email == ''){
        msgerro.innerHTML= 'Campo Email é Obrigatório!';
        formSignUp.email.focus();
        return false;
    }
    if (senha == ''){
        msgerro.innerHTML= 'Campo Senha é Obrigatório!';
        formSignUp.senha.focus();
        return false;
    }
    if (confirm_senha == ''){
        msgerro.innerHTML= 'Campo Confim Senha Obrigatorio';
        formSignUp.confirm_senha.focus();
        return false;
    }
    if (senha !== confirm_senha){
        msgerro.innerHTML = 'Senhas Diferentes';
        formSignUp.senha.value = '';
        formSignUp.confirm_senha.value = '';
        formSignUp.senha.focus();
        return false;
    }
    msgerro.innerHTML = "FORMULÁRIO PREENCHIDO CORRETAMENTE!"

}