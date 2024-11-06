var button = document.getElementById('btn');
button.addEventListener('click', () => {
    //teste para ver se está funcionando o botão
    console.log("hello,world");
    AJAX();
})
function preencheCampos(json) {
    //falta passar os campos da api que ele vai pegar
    //no parentes coloca os campos que estão no HTML
    //no "." depois do "json", coloca o campo que está na api
    document.querySelector('input[name=userId]').value = json.userId;
    document.querySelector('input[name=id]').value = json.id;
    document.querySelector('input[name=title]').value = json.title;
    document.querySelector('input[name=completed]').value = json.completed;
}
function AJAX() {
    //pega quantos usuários serão criados pela API
    /*paramos aqui 06/11/24*/
    let numUsuarios=document.querySelector('input[name=]');
    //url da api
    let url = 'https://jsonplaceholder.typicode.com/todos/1';
    //instancia o AJAX -> lembra da Juliana
    let xhr = new XMLHttpRequest();
    //passa os paramentros -> isso aqui tbm aprendemos com a Juliana?
    xhr.open('GET', url, true);
    //função anonima -> lembra do Piva
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            preencheCampos(JSON.parse(xhr.responseText));
        }
    }
    xhr.send();
}