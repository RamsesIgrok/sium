import axios from 'axios'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import Product from '../components/Product'

export default function Shop() {
    console.log(process.env.API)
    const[res, setRes]=useState([])
    const[load, setLoad]=useState(false)
    useEffect(()=>{
        axios.get('http://localhost:5000').then((r)=>{
            setRes(r.data); setLoad(true)
        })
    },[])
    console.log (res)
  return load?<><Script src='https://shoppy.gg/api/embed.js'/>
    {res.map(product => {
      console.log(`Prezzo: ${product.price} ${product.currency}`);
      console.log(`Titolo: ${product.title}`);
      console.log(`Immagine: ${product.image.url}`);
      console.log(`Id prodotto: ${product.id}`)
      return <Product info={product}/>
    })}
    </>: <></>
}
