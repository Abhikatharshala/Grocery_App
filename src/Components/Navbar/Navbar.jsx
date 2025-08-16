import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { signOut,getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import "./Navbar.css"


const MyNavbar = () => {
      const navigate=useNavigate()
   const handleLogOut=async()=>{
    try{
   const getauth=getAuth()
    await signOut(getauth)
    localStorage.removeItem("LoggedinAdmin")
    alert("logged out")
    navigate("/Login")
    }catch(err){
      console.log(err)
    }
   
   }
  return (
    // <div className='top-navbar'>
    //    <div className="dashboard-container">
<Navbar bg="primary" variant="dark" expand="lg" className="custom-navbar">
  <Container fluid>
    <Navbar.Brand href="#home" className="brand">Admin Panel</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
// </div>
    // </div>
  )
}

export default MyNavbar
