import React, { useContext, useRef, useState } from 'react'
import "./Contact.css";
import Phone from "../../assets/home/icons/phone.png";
import Email from "../../assets/home/icons/email.png";
import Address from "../../assets/home/icons/address.png";
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../Context';




const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(

        "service_xme6l4w",
        "template_byc33y9",
        formRef.current,
        "0mECKXRhnx7ecB1Zt"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +94 76 6827280
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              thambara.20@cse.mrt.ac.lk
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              -----------------------------
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
          
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" />
            <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message" />
            <div style={{ alignItems: 'center', padding: '20px', display: 'flex' }}>
              
              <button type ="submit" style={{width:'100%', backgroundColor:'#0099ff'}} class="btn btn-secondary"> {done ? "send again":"Send"}</button>
       
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;