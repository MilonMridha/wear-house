import React from 'react';
import paywith from '../../SocialLogin/Social-icon/USPaymentMethodsKlarna.JPG'
import google from '../../SocialLogin/Social-icon/google.png'
import Facebook from '../../SocialLogin/Social-icon/facebook.png'
import instra from '../../SocialLogin/Social-icon/instragam.png'
import youtube from '../../SocialLogin/Social-icon/you-2.png'
import copyright from '../../SocialLogin/Social-icon/copyright.png'
import logo from '../../SocialLogin/Social-icon/perfume-logo.png'

const Footer = () => {
    return (
        <div className=' row h-50 mx-auto bg-dark mt-5 p-5'>
            <div className='row mb-3'>
                <div className='col-md-4'>
                    <h3 className='text-light text-start'>Perfume House<span><img src={logo} alt="" /></span></h3>
                    <br />
                    <h5 className='text-light text-start'>Sector-3,HM-Plaza,Uttara,Dhaka.</h5>
                    <h5 className='text-light text-start'>Official: milonmridha570@gmail.com</h5>
                    <h5 className='text-light text-start'>Helpline: 01681557479, 01985147893</h5>
                    <h5 className='text-light text-start'>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</h5>
                </div>

                <div className='col-md-4'>
                    <h5 className='text-light text-start'>About us</h5>
                    <h5 className='text-light text-start'>Success</h5>
                    <h5 className='text-light text-start'>Refund policy</h5>
                    <h5 className='text-light text-start'>Terms and Conditions</h5>
                    <h5 className='text-light text-start'>Privacy Policy</h5>
                    <h5 className='text-light text-start'>App Privacy Policy</h5>
                </div>
                <div className='col-md-4'>
                    <h5 className='text-light text-start'>Pay with</h5>
                    <img className='rounded' style={{ width: '300px', height: '100px' }} src={paywith} alt="" />
                    <br /> <br />
                    <h6 className='text-light text-start'>Stay Conected with</h6>
                    <div className='align-items-center d-flex justify-content-space-between'>
                        <img className='rounded  text-start' src={google} alt="" />
                        <img className='rounded ms-2' style={{ width: '50px', height: '50px' }} src={Facebook} alt="" />
                        <img className='rounded ms-2 ' style={{ width: '40px', height: '40px' }} src={instra} alt="" />
                        <img className='rounded ms-3 ' style={{ width: '40px', height: '40px' }} src={youtube} alt="" />
                    </div>


                </div>
            </div>
            <small className='text-light'> <span><img src={copyright} alt="" /></span>Copyright-2022 Perfume-ware-house.com</small>
        </div>
    );
};

export default Footer;