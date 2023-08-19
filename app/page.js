"use client"
import React,{useState} from 'react'
import Header from "@/Components/Header"


const page =()=>{
  let [marks, setMarks]=useState(80)
  let [user,setUser]=useState("shubham")
  return(
    <>
    <h1 className="color">
      Header H1
    </h1>
    <h1>my marks is {marks}</h1>
    <button onClick={()=>{
      setMarks(55)
    }}>Update</button>
    </>

  )
}

export default page
