"use client"
import React, { useState } from 'react'
import {addDoc} from "firebase/firestore"

import {collection} from "firebase/firestore"
import { db } from '@/config/db'



export default function Form() {
    const [userName,setUserName]=useState("")
    const [email,setEmail]=useState("")
    const [course,setCourse]=useState()
    const onSumbitHandler=async()=>{
          let student={
            Name:userName,
            email,
            course
          }
          try {
            const docs=await addDoc(collection(db,"students"),student) 
            console.log("docs",docs)
          } catch (error) {
            console.log("error Adding ",error)
          }
    }
  return (
    <div>
      <h1>Course Registration</h1>
      <form>
        <input onChange={(e)=>{setUserName(e.target.value)}} type="text" placeholder='Enter Name' />
        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Enter Email' />
        <input onChange={(e)=>{setCourse(e.target.value)}} type="text" placeholder='Enter course' />
      </form>

      <button onClick={onSumbitHandler} type='submit'>Submit</button>
    </div>
  )
}