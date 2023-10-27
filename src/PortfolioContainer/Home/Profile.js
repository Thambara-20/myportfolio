import React from 'react'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import './profile.css'
import me from '../../assets/profile.jpg'

export default function Profile() {
    return (
      <div className='main-profile-wrapper' data-aos='fade-up'>
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-parent-colz-name-tittle-desc'>
                    
                    <div className='colz'>
                        <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} size='sm' href='https://www.facebook.com/thambara.sahassaka'>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} size='sm' href='https://twitter.com/ThambaraS'>
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} size='sm' href='https://www.instagram.com/thambarasahassaka/'>
                            <MDBIcon fab icon='instagram' />
                        </MDBBtn>

                        <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} size='sm' href='https://www.linkedin.com/in/thambara-sahassaka-5573701b5'>
                            <MDBIcon fab icon='linkedin-in' ></MDBIcon>
                        </MDBBtn>

                    </div>

                    <div className='profile-name'>
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <h1 className="highlighted-text" >Thambara Sahassaka</h1>
                        </span>
                    </div>

                    <div className='tittle'>
                        <div className='tittle-wrapper'>
                            <div className='tittle-item'>Developer</div>
                            <div className='tittle-item'>Designer</div>
                            <div className='tittle-item'>Computer Programmer</div>

                        </div>
                    </div>
                    <div className='description'>
                        I am an undergraduate student of computer science and engineering
                        at University of Moratuwa.Passionate about application developing ,problem solving and designing,
                        have experienced in mobile and web application developing.

                    </div>
                </div>
            </div>


            <div className="profile-picture">
                <div className="i-bg"></div>
                <img src={me} alt="" className="img" />
            </div>

        </div>
        <div className="bottom-line-wrapper" >
            <div classNAme= 'bottom-line-max'></div>
            
        </div>

</div>

    )
}
