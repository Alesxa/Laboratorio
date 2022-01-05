function doSubmit(form) {
    const codigoPostalRegex=/^[0-9]{5,5}$/
    const provinciaRegex=/^[a-zA-Z\s]{4,25}$/
    const ciudadesCodigoPostal=['0','Alava','Albacete','Alicante','Almeria','Avila','Badajoz','Islas Baleares','Barcelona','Burgos','Caceres','Cadiz','Castellon','Ciudad Real','Cordoba','La Coruna','Cuenca','Gerona','Granada','Guadalajara','Guipuzcoa','Huelva','Huesca','Jaen','Leon','Lerida','La Rioja','Lugo','Madrid','Malaga','Murcia','Navarra','Orense','Asturias','Palencia','Las Palmas','Pontevedra','Salamanca','Santa Cruz de Tenerife','Cantabria','Segovia','Sevilla','Soria','Tarragona','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza','Ceuta','Melilla']
    const codigoPostal=document.querySelector('#codigoPostal')
    let numeroCodigoPostal= codigoPostal.value
    if(!codigoPostalRegex.test(numeroCodigoPostal)){
        mostrarAlerta('El código postal no tiene el formato correcto','red')
        return false
    }
    let primerosCodigoPostal=numeroCodigoPostal.slice(0,2)
    console.log(parseInt(primerosCodigoPostal,10))
    let ciudadCodigoPostal=ciudadesCodigoPostal[parseInt(primerosCodigoPostal,10)]
    console.log(ciudadCodigoPostal)
    const provincia=document.querySelector('#provincia')
    if(!provinciaRegex.test(provincia.value)){
        mostrarAlerta ('La provincia no tiene el formato correcto','red')
        return false
    }
    
    if (provincia.value.toLowerCase()!=ciudadCodigoPostal.toLowerCase()){
        mostrarAlerta('La provincia no coincide con el Código Postal','red')

    }else{
        mostrarAlerta('La provincia coincide con el código postal','green')
    }

 return false
 //este return false de modo normal no lo pondría pero es para que una vez "enviemos" el formulario no desaparezca y se pueda ver claramente que sale el mensaje de "la provincia coincide con el cp"
}


function mostrarAlerta(mensajeMostrar,color){
    let mensaje=document.querySelector('#alertaCodigoPostal')
    mensaje.innerText=mensajeMostrar
    mensaje.style.color=color
}


const botonValoracion=document.querySelector('#mostrarValoracion')
const botonCuenta=document.querySelector('#mostrarCuenta')

const valoracion=document.querySelector('#valoracion')
const paisIban=document.querySelector('#paisIban')
const controlIban=document.querySelector('#controlIban')
const entidadIban=document.querySelector('#entidadIban')
const sucursalIban=document.querySelector('#sucursalIban')
const dcIban=document.querySelector('#dcIban')
const cuentaIban=document.querySelector('#cuentaIban')

const botonDia=document.querySelector('#mostrarDia')
const fecha=document.querySelector('#fechaDeLaEncuesta')


botonValoracion.addEventListener('click',
(e)=> {
    alert('Has valorado con '+ valoracion.value + ' puntos')

})

botonCuenta.addEventListener('click',
(e)=>{
    alert('Le informamos que su cuenta bancaria es: ' + paisIban.value+controlIban.value+'-'+entidadIban.value+'-'+sucursalIban.value+'-'+dcIban.value+'-'+cuentaIban.value)
})

botonDia.addEventListener('click',
(e)=>{
    let dia=new Date(fechaDeLaEncuesta.value)
    const diasSemana=['domingo','lunes','martes','miércoles','jueves','viernes','sábado']
   
    alert('La fecha seleccionada en el elemento de fecha es un '+ diasSemana[dia.getDay()] )
})
