import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { signIn } from '../signup/signup';
import { useForm } from '../useForm/useForm';

export const LogIn = () => {
    const navigate = useNavigate()
    const [values, handleInputChange] =useForm({email:"",password:""})
    const {email,password} = values
    const login = async (e) =>{
      e.preventDefault()
      const user = await  signIn(email,password)
      if(user){
        console.log(user)
        localStorage.setItem("user",JSON.stringify(1))
        navigate('/',{replace:true})
      }else{
        localStorage.setItem("user",JSON.stringify(0))
      }
    
    }


  return (
    <form onSubmit={login} >
        <div className="mb-3">
        <label  className="form-label">Email address</label>
        <input type="email" className="form-control" autoComplete='off' value={email} name="email" onChange={handleInputChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" name='password'  autoComplete='off' value={password} onChange={handleInputChange} className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
};
