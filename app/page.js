"use client"
import React,{useState,useEffect} from 'react'
import Header from "@/Components/Header"
import axios from 'axios'
import "./page.css"

const page =()=>{
  let [user,setUser]=useState("shubham")
  let [images,setImages]=useState([])
  const url="https://picsum.photos/v2/list"
  const getImages=async()=>{
try {
  const response= await axios.get(url);
  const data=await response.data
  setImages(data)
  console.log(images)
  
  
} catch (error) {
  console.log(error)
}

  }
  return(
    <>
    <h1 className="color">
     Image Gallery
    </h1>
    
    <button onClick={getImages}>Get images`</button>
    <div>
      {images.map((elem,i)=>{
        return(
          <>
          <div className="container__design">

          


          <h1 key={i}>Author Name: {elem.author}</h1>
          <div className="image__center">
          <img className="size" src={elem.download_url}/>
          </div>
          </div>
          </>
        )
     
        
      })}
    </div>
    </>

  )
}

export default page
