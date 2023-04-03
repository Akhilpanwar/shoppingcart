import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebase';
import Cards from './Cards'
 import { useNavigate } from 'react-router-dom';

const Home = () => {
  
 const Navigate=useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const uid = user.uid;
             
            
              console.log(uid)
            } else {
           
              console.log("user is logged out")
            }
          });
         
    }, [])
 
  return (
    <section> 
<Cards/>

    </section>
  )
}
 
export default Home