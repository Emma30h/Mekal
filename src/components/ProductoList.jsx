import { deleteProduct } from "../FirebaseFunction/firebaseFunction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

export function ProductList({products, setCurrentID}){
    return(
        <>
           <div className="table-container">
            <table className="table">
                    <thead>
                        <tr className="thead">
                            <th className="th-product">Description</th>
                            <th>Bar Code</th>
                            <th className="th-amount">Stock</th>
                            <th>Price</th>
                            <th className="th-actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="tbody"> 
                        {
                            products.map(product=>{
                                return(
                                    <tr className="tr-body" key={product.id}>
                                        
                                        <td className="td-name">{product.description}</td>
                                        <td className="td">{product.barCode}</td>
                                        <td className="td td-amount">{product.stock}</td>
                                        <td className="td-price">${product.preco}</td>
                                        <td className="td-buttons">
                                            <button onClick={()=>setCurrentID(product.id)} className="button-update"><FontAwesomeIcon icon={faPen} /></button>
                                            <button onClick={()=>deleteProduct(product.id)} className="button-delete"><FontAwesomeIcon icon={faTrash} /></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
            </table>
           </div>
        </>
    )
} 