import MainScreen from "../../../components/MainScreen";
import {Button,Col,Row,Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorMessage from "../../../components/ErrorMessage";
import Loading from "../../../components/Loading";
import { useState } from "react";
import axios from "axios";

const RegisterScreen = () => {
const [email,setEmail]=useState("");
const [name,setName]=useState("");
const [pic,setPic]=useState("
");
const [password,setPassword]=useState("");
const [confirmpassword,setConfirmPassword]=useState("");
const [message,setMessage]=useState(null);
const [picMessage,setPicMessage]=useState(null);
const [error,setError]=useState(false);
const [loading,setLoading]=useState(false);
const submitHandler=async (e)=>{
  e.preventDefault();
  console.log(email);
  if(password!==confirmpassword){
    setMessage('Password Not Matched');
  }else{
  setMessage(null)
  try{
    
      const config={
        headers:{
          "Content-type":"application/json",
        },
      };
      setLoading(true);
      const {data}=await axios.post(
        "/api/users",
        {name,pic,email,password},
        config
      );
      
      setLoading(false);
      localStorage.setItem("userInfo",JSON.stringify(data));
  }catch(error){
   setError(error.response.data.message);
  }
  
  }
};
const postDetails=(pics)=>{
  if(
    !pics
  ){
    return setPicMessage("Please select an image");
  }
  setPicMessage(null);
  if(pics.type=='image/jpeg'|| pics.type=='image.png'){
    const data = new FormData();
    data.append('file',pics)
    data.append('upload_preset','notezipper')
    data.append('cloud_name','codder')
    fetch(,{
      method:'post',
      body:'data',
    }).then((res)=>res.json()).then((data)=>{
      console.log(data);
      setPic(data.url.toString());
    })
    .catch((err)=>{
      console.log(err);
    });
  }else{
    return setPicMessage("please select an image");
  }

};

  return (
  <MainScreen title="REGISTER">
    <div className="loginContainer">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
      {loading && <Loading/>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
          type="name"
          value={name}
          placeholder="Enter Name"
          onChange={(e)=>setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e)=>setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Email password</Form.Label>
          <Form.Control
          type="password"
          value={password}
          placeholder=" Password"
          onChange={(e)=>setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
          type="password"
          value={confirmpassword}
          placeholder="Confirm Password"
          onChange={(e)=>setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        {picMessage&& ( <ErrorMessage variant="danger">{picMessage}</ErrorMessage>)}
        <Form.Group controlId="pic">
          <Form.Label>Profile Picture</Form.Label>
          <Form.File
          onChange={(e)=>postDetails(e.target.files[0])}
          id="custom-file"
          type="image/png"
          label="Upload Profile Picture"
          custom
          />
        </Form.Group>

      </Form>
      </div>
      </MainScreen>
  );
};

export default RegisterScreen;