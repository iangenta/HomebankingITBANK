const form = document.querySelector('.formulario')
const totalDiv = document.querySelector('.total')
const divisionDiv = document.querySelector('.division')
const personasDiv = document.querySelector('.personas')

const personas = []

const añadirGasto = (e)=>{
  e.preventDefault();
  let persona = document.querySelector('#personas').value
  let gasto = document.querySelector('#pagos').value
  personas.push({
    nombre: persona,
    gasto: gasto
  })
  console.log(personas)
  mostrarPersonas()
  total()
  division()
}
function mostrarPersonas(){
  personasDiv.innerHTML=''
  personas.forEach(persona=>{
    let p = document.createElement('P')
  let div = document.createElement('DIV')
  p.innerHTML= persona.nombre+' gasto: $'+persona.gasto
  div.appendChild(p)
  personasDiv.appendChild(div)
  })
}

function total (){
  let suma = 0
  personas.forEach(persona=>{
    suma += Number(persona.gasto)
  })
  crearPrecio(suma)
  return suma
}

function division(){
  let gastosDivididos = total()/personas.length
  crearDivision(Math.round(gastosDivididos))
  return gastosDivididos
}

function crearPrecio (elemento){
  totalDiv.innerHTML=''
  let p = document.createElement('P')
  let div = document.createElement('DIV')
  p.innerHTML= 'Total: $'+elemento
  div.appendChild(p)
  totalDiv.appendChild(div)
}
function crearDivision (elemento){
  divisionDiv.innerHTML=''
  let p = document.createElement('P')
  let div = document.createElement('DIV')
  p.innerHTML= 'Cada uno debe pagar: $'+elemento
  div.appendChild(p)
  divisionDiv.appendChild(div)
}

form.addEventListener('submit',añadirGasto)