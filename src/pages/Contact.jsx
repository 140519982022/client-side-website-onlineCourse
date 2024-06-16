import React, { useState } from 'react'
// import '../assets/css/home.css'
import Card from 'react-bootstrap/Card';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


export default function Contact() {

    const [containerStyle, setContainerStyle] = useState({
        width: '100%',
        height: '400px'

    })

    const [center, setCenter] = useState({
        lat: 37.4221,
        lng: -122.0841
    })

    return (
        <>
            <Header />
            <div className='container-fluid header-bg'>
                <div className="container ">
                    <div className="row my-5">
                        <div className="col-md-12">
                            <div >
                                <h1 className="text-white py-5 text-center">Contact Us</h1>
                            </div>
                            <div className='text-white text-center pb-5'>
                                <Link to={'/'} className='text-white text-decoration-none'>Home </Link> &nbsp;&nbsp; / &nbsp;&nbsp;
                                <Link to={'/courses'} className='text-white text-decoration-none '>Courses </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid">

                <div className="container">
                    <div className="row">
                        <div className="col-md-4 py-3">
                            <Card className='border p-4 border-0 text-center'>
                                <Card.Body>
                                    <FaLocationDot className='display-5' />
                                    <h4 className='py-3'>
                                        Our Location
                                    </h4>
                                    <Card.Text>Collin Street West, Victor 8007, Australia.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-4 py-3">
                            <Card className='border p-4 border-0 text-center'>
                                <Card.Body>
                                    <IoCall className='display-5' />
                                    <h4 className='py-3'>
                                        Our Numbers
                                    </h4>
                                    <Card.Text>Mobile: (+096) 468 235


                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-4 py-3">
                            <Card className='border p-4 border-0 text-center'>
                                <Card.Body>
                                    <MdEmail className='display-5' />
                                    <h4 className='py-3'>
                                        Our Email
                                    </h4>
                                    <Card.Text>info@edumy.com
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 py-5">

                            <Map containerStyle={containerStyle} center={center}>

                            </Map>

                        </div>
                        <div className="col-md-6 py-5">
                            <Card className='border border-gray border-0'>
                                <Card.Body>
                                    <h3 className='fw-normal'>
                                        Send a Message
                                    </h3>
                                    <Card.Text className='text-secondary py-2'>
                                        Ex quem dicta delicata usu, zril vocibus maiestatis in qui.


                                    </Card.Text>
                                    <form >
                                        <div>
                                            <label htmlFor="" className='text-secondary'> Your name</label>
                                            <input type="text" className='form-control my-2 border border-4' />
                                        </div>

                                        <div className='my-3'>
                                            <label htmlFor="" className='text-secondary'> Email Address</label>
                                            <input type="email" className='form-control my-2 border border-4' />
                                        </div>

                                        <div className='my-3'>
                                            <label htmlFor="" className='text-secondary'> Subject</label>
                                            <input type="text" className='form-control my-2 border border-4' />
                                        </div>

                                        <div className='my-3'>
                                            <label htmlFor="" className='text-secondary'> Message</label>
                                            <textarea name="" className='form-control my-2 border border-4' cols={10} rows={5} id=""></textarea>
                                        </div>

                                        <button type="submit" className='border border-2 border-primary px-5 py-2 bg-white text-primary fs-3 fw-normal my-3'>Send</button>

                                    </form>
                                </Card.Body>
                            </Card>

                        </div>


                    </div>

                </div>


            </div>


            <Footer />
        </>
    )
}


const Map = ({ containerStyle, center }) => {
    let apiKey = "ttps://maps.app.goo.gl/6BA6vkNATHWrUyx79"

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};
