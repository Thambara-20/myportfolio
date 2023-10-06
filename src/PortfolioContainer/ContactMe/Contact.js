import React, { useContext, useRef, useState } from 'react'
import "./Contact.css";
import Phone from "../../assets/home/icons/phone.png";
import Email from "../../assets/home/icons/email.png";
import Address from "../../assets/home/icons/address.png";
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../Context';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';




const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qnbei69",
        "template_46xh6yb",
         formRef.current,
        "dKlbCt5MRKtv_1-lk"
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
              <PhoneAndroidIcon color="white" size={"3rem"} style={{ marginRight: '5px' }} />
              +94 76 6827280
            </div>
            <div className="c-info-item">
              <EmailIcon color="white" size={"3rem"} style={{ marginRight: '5px' }} />
              thambara.20@cse.mrt.ac.lk
            </div>

            <div className="c-info-item">
              <LocationOnIcon color="white" size={"3rem"} style={{ marginRight: '5px' }} />
              Hakmana, Matara, Sri Lanka
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

              <button type="submit" style={{ width: '100%', backgroundColor: '#02174c' }} class="btn btn-secondary"> {done ? "send again" : "Send"}</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;