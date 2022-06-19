
var contenido = document.querySelector('#contenido')

fetch('https://www.dolarsi.com/api/api.php?    type=valoresprincipales')
.then(res => res.json())
.then(datos => {
    // console.log(datos)
    tabla(datos)
})


function tabla(datos) {
    // console.log(datos)
    contenido.innerHTML = ''
    for(let valor of datos){
        // console.log(valor.nombre)
        contenido.innerHTML += `
        
        <tr>
            <th scope="row">${ valor.casa.nombre }</th>
            <td>$ ${ valor.casa.compra }</td>
            <td>$ ${ valor.casa.venta }</td>
            <td>${ valor.casa.variacion}</td>
        </tr>
        
        `
    }
}
