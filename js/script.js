var button = document.getElementById('btn');
button.addEventListener('click', () => {
    //teste para ver se está funcionando o botão
    console.log("hello,world");
    AJAX();
})
function preencheCampos(jsonArray) {
    // cria a variavel que coloca todas as informaçoes na div
    const container = document.getElementById('div');

    // cria a tabela via string
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
    `;

    // cria as linhas a cada usuario requisitado
    jsonArray.forEach((json) => {
        tableHTML += `
            <tr>
                <td>${json.userId}</td>
                <td>${json.id}</td>
                <td>${json.title}</td>
                <td>${json.completed}</td>
            </tr>
        `;
    });
    //fecha a tabela
    tableHTML += `
            </tbody>
        </table>
    `;

    // insere a tabela na div via innerHTML usando o botão que está usando o addEventListener
    container.innerHTML = tableHTML;
}
function AJAX() {
    //pega quantos usuários serão requisitados pela API
    let numUsuarios = document.getElementById('numUsuarios').value;
    //url da api com o numero dos usuarios a serem requisitados
    let url = `https://jsonplaceholder.typicode.com/todos?_limit=${numUsuarios}`;
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
    //envia a requisição para o servidor da API
    xhr.send();
}