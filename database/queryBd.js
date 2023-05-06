const ProductQuery = {
    
    addPrueba: 'INSERT INTO prueba (id,nombre) VALUES (@id, @nombre)',
    addProducto: 'INSERT INTO productoAlmacen (nomProducto,categoriaProducto,descripcion,valorUnitario,refProducto,marca,modelo) VALUES (@nomProducto,@categoriaProducto,@descripcion,@valorUnitario,@refProducto,@marca,@modelo)'
   
}

module.exports={
    ProductQuery};