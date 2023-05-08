const ProductQuery = {
    
    addPrueba: 'INSERT INTO prueba (id,nombre) VALUES (@id, @nombre)',
    addProducto: 'INSERT INTO productoAlmacen (nomProducto,categoriaProducto,descripcion,valorUnitario,refProducto,marca,modelo) VALUES (@nomProducto,@categoriaProducto,@descripcion,@valorUnitario,@refProducto,@marca,@modelo)',
    updateProducto: 'UPDATE productoAlmacen SET  nomProducto=@nomProducto,categoriaProducto=@categoriaProducto,descripcion=@descripcion,valorUnitario=@valorUnitario, marca=@marca,modelo=@modelo WHERE refProducto = @refProducto',
    findByRefProducto: 'Select * from productoAlmacen where refProducto = @refProducto'
   
}

module.exports={
    ProductQuery};