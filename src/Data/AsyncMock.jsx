export const productos = [


    {
        id: 1,
        nombre: "Adhesivos para cerrar bolsas",
        precio: 100,
        categoria: "Packaging",
        stock: 15,
        descripcion: "Adhesivos de papel glossy para cerrare bolsas",
       img: "../src/assets/Adhesivos-cerrar-bolsas.svg",
          
    },

    {
        id: 2,
        nombre: "Diseño de logo",
        precio: 1500,
        categoria: "Identidad Visual",
        stock: 100,
        descripcion: "Diseño de logo ",
       img: "../src/assets/diseño-de-logo.svg",
    },

    {
        id: 3,
        nombre: "Invitación Digital",
        precio: 1200,
        categoria: "Productos Digitales",
        stock: 100,
        descripcion: "Diseño de invitaciones digitales para eventos ",
       img: "../src/assets/Invitacion-digital.svg",
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}


export const getProductsByCategory = (categoria) => {
    return new Promise((resolve) => {
      const productosFiltrados = productos.filter((prod)=> prod.categoria === categoria)
      setTimeout(() => {
        resolve(productosFiltrados)
      }, 2000)
    })
  }
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      const productoFiltrado = productos.find((prod) => prod.id === parseInt(id))
      setTimeout(()=> {
        resolve(productoFiltrado)
      }, 2000)
    })
  }