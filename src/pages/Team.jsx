import React from 'react'
import '../assets/css/home.css'
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import '../assets/css/team.css';
import { Link } from 'react-router-dom';

export default function Team() {
    return (
        <>
            <Header />
            <div className='container-fluid header-bg'>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12">
                            <div >
                                <h1 className="text-white py-5 text-center">Team</h1>
                            </div>
                            <div className='text-white text-center pb-5'>
                                <Link to={'/'} className='text-white text-decoration-none'>Home </Link> &nbsp;&nbsp; / &nbsp;&nbsp;
                                <Link to={'/courses'} className='text-white text-decoration-none '>Courses </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid bg-clr">
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
                            <Card className='border p-5 border-gray border-0 bg-clr'>
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
                            <Card className='border p-5 border-gray border-0 bg-clr'>
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
                            <Card className='border p-5 border-gray border-0 bg-clr'>
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
                            <Card className='border p-5 border-gray border-0 bg-clr'>
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
                            <Card className='border p-5 border-gray border-0 bg-clr'>
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

            <div className="container-fluid">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-3 py-3">
                            <Card className='border p-5 border-gray border-2 '>
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

                        <div className="col-md-3 py-3">
                            <Card className='border p-5 border-gray border-2 '>
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

                        <div className="col-md-3 py-3">
                            <Card className='border p-5 border-gray border-2 '>
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

                        <div className="col-md-3 py-3">
                            <Card className='border p-5 border-gray border-2 '>
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

                        <div className="col-md-3 py-3">
                            <Card className='border p-5 border-gray border-2 '>
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
