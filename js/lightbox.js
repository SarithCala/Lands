const imagenes = document.querySelector('.img-galeria')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')

console.log(imagenes)
console.log(imageneslight)
console.log(contenedorLight)


imagenes.forEach(imagen => {
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
        
    })
})

const aparecerImagen = (imagen)=>{
    imageneslight.src = imagen
    contenedorLight.classList.toggle('show')
    imageneslight.classList.toggle('showImage')
}
