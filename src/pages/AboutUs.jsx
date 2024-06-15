import React from 'react'
import headerImg from '../assets/images/header-bg.jpg'
import '../assets/css/home.css'
import Card from 'react-bootstrap/Card';
import { FaPenToSquare } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import { FaPlusSquare } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import '../assets/css/aboutus.css';
export default function AboutUs() {
    return (
        <>
            <Header />
            <div className='container-fluid header-bg'>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12">
                            <div >
                                <h1 className="text-white py-5 text-center">About Us</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="container-fluid">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-6">
                            {/* <div > */}
                            <h3 className='p-3'>
                                Enhance your skills with best Online courses
                            </h3>

                            <p className='p-3 text-secondary'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis,et quasi architecto beatae vitae dicta sunt explicabo.


                            </p>
                            <p className='p-3 text-secondary'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis,et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>

                            <p className='p-3 text-secondary'>
                                Nemo enim ipsam,voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia,consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.,Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, adipisci velit, sed quia non numquam eius modi tempor


                            </p>
                            {/* </div> */}

                        </div>
                        <div className="col-md-6">
                            <img src="http://localhost:3000/static/media/8%20(2).de0e26358d6021b4a986.jpg" alt="" className='py-5' />

                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container">
                    <div className="row pb-5">
                        <div className="col-md-12">
                            <h1 className='text-center pt-5'>
                            Our Story
                            </h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 py-3">
                            <Card className='border p-4 border-0'>
                                <Card.Body>
                                <Card.Text>
                                    Students learning
                                    </Card.Text>
                                    <Card.Title>6500
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3 py-3">
                            <Card className='border p-4 border-0'>
                                <Card.Body>
                                <Card.Text>
                                    Students learning
                                    </Card.Text>
                                    <Card.Title>6500
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3 py-3">
                            <Card className='border p-4 border-0'>
                                <Card.Body>
                                <Card.Text>
                                    Students learning
                                    </Card.Text>
                                    <Card.Title>6500
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3 py-3">
                            <Card className='border p-4 border-0'>
                                <Card.Body>
                                <Card.Text>
                                    Students learning
                                    </Card.Text>
                                    <Card.Title>6500
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        

                    </div>

                    <div className="row">
                        <div className="col-md-6 py-5">

                            <Card className='border border-gray border-2 shadow-lg'>
                                <Card.Body>
                                    <h3>
                                    Who We Are
                                    </h3>
                                    <Card.Text className='text-secondary py-4'>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis,et quasi architecto beatae vitae dicta sunt explicabo.
                                    </Card.Text>

                                    <Card.Text className='text-secondary'>
                                    Nemo enim ipsam,voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia,consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.,Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, adipisci velit, sed quia non numquam eius modi tempora
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                        <div className="col-md-6 py-5">
                        <Card className='border border-gray border-2 shadow-lg'>
                                <Card.Body>
                                    <h3>
                                    What We Do
                                    </h3>
                                    <Card.Text className='text-secondary py-4'>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis,et quasi architecto beatae vitae dicta sunt explicabo.
                                    </Card.Text>

                                    <Card.Text className='text-secondary'>
                                    Nemo enim ipsam,voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia,consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.,Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, adipisci velit, sed quia non numquam eius modi tempora
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                        

                    </div>

                </div>
                <div className="row py-5">
                    <div className="col-md-12">
                        <h1 className='text-center pt-5'>
                        Popular Instructor
                        </h1>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col py-3">
                            <Card className='border p-5 border-gray border-0'>
                                <Card.Img variant="top" src="http://localhost:3000/static/media/f3%20(1).2080fbebda0102bda702.png" />
                                <Card.Body>
                                    <Card.Text className='pt-3'>
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />
                                    </Card.Text>
                                    <Card.Text>
                                        Member Name
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col py-3">
                            <Card className='border p-5 border-gray border-0'>
                                <Card.Img variant="top" src="http://localhost:3000/static/media/f3%20(1).2080fbebda0102bda702.png" />
                                <Card.Body>
                                    <Card.Text className='pt-3'>
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />
                                    </Card.Text>
                                    <Card.Text>
                                        Member Name
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col py-3">
                            <Card className='border p-5 border-gray border-0'>
                                <Card.Img variant="top" src="http://localhost:3000/static/media/f3%20(1).2080fbebda0102bda702.png" />
                                <Card.Body>
                                    <Card.Text className='pt-3'>
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />
                                    </Card.Text>
                                    <Card.Text>
                                        Member Name
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col py-3">
                            <Card className='border p-5 border-gray border-0'>
                                <Card.Img variant="top" src="http://localhost:3000/static/media/f3%20(1).2080fbebda0102bda702.png" />
                                <Card.Body>
                                    <Card.Text className='pt-3'>
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />
                                    </Card.Text>
                                    <Card.Text>
                                        Member Name
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col py-3">
                            <Card className='border p-5 border-gray border-0'>
                                <Card.Img variant="top" src="http://localhost:3000/static/media/f3%20(1).2080fbebda0102bda702.png" />
                                <Card.Body>
                                    <Card.Text className='pt-3'>
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />&nbsp;
                                        <FaStar className='text-warning' />
                                    </Card.Text>
                                    <Card.Text>
                                        Member Name
                                    </Card.Text>
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
