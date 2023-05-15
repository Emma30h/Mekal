import { ProductForm } from "./ProductForm";
import { ProductList } from "./ProductoList";
import { collection, doc, addDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import { async } from "@firebase/util";
import  { toast } from 'react-hot-toast';



export function DashboardBody(){
    
    const [products, setProducts] = useState([])
  
    useEffect(()=>{
        onSnapshot(collection(db, "produc"), (snapshot)=>{
            setProducts(
                snapshot.docs.map(doc =>({...doc.data(), id:doc.id}))
            )
        })
    }, [])

    const [currentID, setCurrentID] = useState("")

    //add product to Firebase
    const addProductToFirebase = async(Object, id)=>{
        if(currentID === ""){
            await addDoc(collection(db, "produc"), Object )
            toast.success(`Product loaded`)
        }
        else{
            await updateDoc(doc(db, "produc", id), Object)
            toast.success(`Product updated`)
        }
        setCurrentID("")
    }

    return(
        <section className="dashboard-body">
                <ProductForm addProductToFirebase={addProductToFirebase} currentID={currentID} products={products}/>
                <br></br>
                <br></br>
                <ProductList products={products} setCurrentID={setCurrentID}/>
        </section>
    )
}