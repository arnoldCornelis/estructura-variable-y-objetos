
class Producto {
    constructor(nombre, categoria, precio) {
      this.nombre = nombre;
      this.categoria = categoria;
      this.precio = precio;
    }
  }
  
 
  const productos = [];
  
  function agregarProducto(nombre, categoria, precio) {
    const producto = new Producto(nombre, categoria, precio);
    productos.push(producto);
  }
  

  function filtrarProducto(categoria){
    return productos.filter(producto=> producto.categoria=== categoria);
  }

  