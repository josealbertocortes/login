import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../signup/singout';

export const Listado = () => {

  const navigate = useNavigate()

  const singOut = async (e) =>{
    e.preventDefault()
    const user = await signOut()
    if(user){
      localStorage.setItem("user",JSON.stringify(0))
      navigate('/login',{replace:true})
    }else{
      localStorage.setItem("user",JSON.stringify(0))
    }
  
  }


  return (<>
  
      <button className='btn btn-danger' onClick={singOut} >SingOut </button>
  
  </>);
};
