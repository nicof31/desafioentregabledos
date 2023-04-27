import ProductManager from "./ProductManager/ProductManager.js";

//SECUENCIA 1
const productList = new ProductManager("./files/Productos.json");

/*------------------------------------SECUENCIA 2-------------------------*/
// productList.getProducts(); //devuelve []


/*--------------------------------SECUENCIA 3  addProduct-----------------------------*/
  //agrego producto 1
//await productList.addProduct("producto prueba 1","Este es un producto prueba",200,"Sin imagen","abc123",25);
  //agrego producto 2
//await productList.addProduct("producto prueba 2","Este es un producto prueba",400,"Sin imagen","abc124",52);

//nota: el await permite la carga de productos en simultaneo

  //error carga producto, se carga producto idem al anterior
//await productList.addProduct("producto prueba 2","Este es un producto prueba",400,"Sin imagen","abc124",52);

/*----------------------------------SECUENCIA 4--------------------------*/
//verificar archivo Productos.JSON que el objeto este agregado y sin repetirse


/*----------------------------------SECUENCIA 5------------------------------*/
//productList.getProducts();  //debe aparece el producto agregado


/*----------------------------SECUENCIA 6 busqueda por ID--------------------------------*/
//correcto
// productList.getProductById(1);
//para simular error
// productList.getProductById(12);


/*----------------------------SECUENCIA 7  updateProduct--------------------------------*/
//  matriz (idUpdate,title, description, price, thumbnail, code, stock
//correcto
// productList.getUpdateProduct(1,"producto prueba update","Este es un producto prueba update",300,"Sin imagen update","abcupdate",45);
//error parametros incompletos
//productList.getUpdateProduct("producto prueba update","Este es un producto prueba update",300,"Sin imagen update","abcupdate",45);


/*--------------------------------- SECUENCIA 8 ---------------------------------*/
//correcto
// productList.getDeleteProduct(1);
//para simular error
//productList.getDeleteProduct(12);
