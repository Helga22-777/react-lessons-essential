import { useGetGoodsQuery, useAddProductMutation, useDeleteProductMutation } from './store/goodsApi'
import './App.css'
import { useState } from 'react';

function App() {
  const [newProduct, setNewProduct] = useState('')
  const [count, setCount] = useState('')
  const {data = [], isLoading} = useGetGoodsQuery(count);
  
  const [addProduct, {isError} ]  = useAddProductMutation();
  const [ deleteProduct ] = useDeleteProductMutation();

  const  handleAddProduct = async() => {
    if(newProduct) {
      await addProduct({name: newProduct}).unwrap();
      setNewProduct('');
    }
  }
  const handlerDeleteProduct = async (id) => {
    await deleteProduct(id).unwrap()
  }

 if(isLoading) {
  return <h1>Loading...</h1>
 }

  return (
    <div>
      <div>
        <input value={newProduct} type="text" onChange={e => setNewProduct(e.target.value)} />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <select value={count} onChange={(e) => setCount(e.target.value)}>
        <option value="">all</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <ul >
        {data.map(item => (
            <li key={item.id} onClick={() => handlerDeleteProduct(item.id)}>{item.name}</li>
        ))}
      </ul>
    </div>  
  )
}

export default App
