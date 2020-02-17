function mudaTexto(){
    console.log('Entrei na Função muda texto');
    // alert('minha função mudaTexto()');
    // como acessar um elemento de nossso html?
    // classe DOCUMENT tem acesso a toda estrutuda do hmtl
    var elementoP = document.getElementById('info');
    elementoP.innerHTML = 'Novo Texto Javascript JS.';
    console.log('estrutura do elemento P',elementoP);
    console.log('Sai da Função muda texto');
    document.getElementById('infoP').innerHTML = 'Trocado';
    console.log(infoP);
}