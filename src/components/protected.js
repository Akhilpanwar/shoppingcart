import React,{useContext, useEffect} from 'react'
import {auth}from '../firebase/firebase'
import {useNavigate} from 'react-router-dom';
import { StateContext } from '../Routing';

function  Protected({props}) {
  const {selectedData,setSelectedData}=useContext(StateContext)

  const  Component  = props;
  let Navigate = useNavigate();
 
useEffect(()=>{

    if (!auth.currentUser?.email) {
      Navigate("/login");
    }
  })

  return (
    <div>
      
    <Component Data={selectedData} Remove={setSelectedData}/>
     
    </div>
  )
}

export default Protected
