import { doc, getDoc } from "firebase/firestore";  
import { db } from "../firebase";
import { useState, useEffect } from "react";
import { async } from "@firebase/util";

export function ProductForm({addProductToFirebase, currentID, products}){
    
    const [ product, setProduct ] = useState({
        description: "",
        produto: "",
        barCode: "",
        reference: "",
        stock:"",
        preco: ""
    })

    const handleChange = ({target: {name, value}})=>{
        setProduct({...product, [name]: value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log(product)
        if(window.confirm("You are loading up a product to database. ")){
            addProductToFirebase(product, currentID)
            setProduct({description: "",
            produto: "",
            barCode: "",
            reference: "",
            stock:"",
            preco: ""})
        }
    }

    const getProductByID = async(id)=>{
        const productByID = await getDoc(doc(db, "produc", id))
        setProduct({...productByID.data()})
    }

    useEffect(()=>{
        if(currentID === ""){
            setProduct({description: "", produto: "", barCode: "", reference: "", stock:"", preco: ""})
        }else{
            getProductByID(currentID)
        }
    }, [currentID])
    
    return(
        <>
            <div className="dashboard-form-container">
                <form className="dashboard-form" id="dashboard-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <input type="text" name="description" onChange={handleChange} value={product.description} placeholder="Type a description..."/>
                    </div>
                    <div>
                        <label htmlFor="product">Produto:</label>
                        <input type="text" name="produto" onChange={handleChange} value={product.produto} placeholder="Type a product..."/>
                    </div>
                    <div>
                        <label htmlFor="bar-code">Bar Code:</label>
                        <input type="text" name="barCode" onChange={handleChange} value={product.barCode} placeholder="Enter barcode..."/>
                    </div>
                    <div>
                        <label htmlFor="reference">Reference:</label>
                        <input type="text" name="reference" onChange={handleChange} value={product.reference} placeholder="Enter reference..."/>
                    </div>
                    <div>
                        <label htmlFor="amount">Stock:</label>
                        <input type="text" name="stock" onChange={handleChange} value={product.stock} placeholder="Enter an amount of products..."/>
                    </div>
                    <div>
                        <label htmlFor="precio">Precio:</label>
                        <input type="text" name="preco" onChange={handleChange} value={product.preco} placeholder="Enter a price of a product..."/>
                    </div>
                    <button className="button-form">{currentID === "" ? "Send" : "Update"}</button>
                </form>
            </div>
        </>
    )
}