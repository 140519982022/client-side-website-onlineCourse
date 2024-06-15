import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
              <div className="information">
                <h6 className="footer-heading text-uppercase text-white fw-bold">Company</h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li className="mb-1"><Link to={'/'} className="text-secondary text-decoration-none fw-semibold ">Home</Link></li>
                  <li className="mb-1"><Link to={'/'} className="text-secondary text-decoration-none fw-semibold">Course</Link></li>
                  <li className="mb-1"><Link to={'/'} className="text-secondary text-decoration-none fw-semibold">About Us</Link></li>
                  <li className="mb-1"><Link to={'/'} className="text-secondary text-decoration-none fw-semibold">Team</Link></li>
                  <li className=""><Link to={'/'} className="text-secondary text-decoration-none fw-semibold">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
              <div className="resources">
                <h6 className="footer-heading text-uppercase text-white fw-bold">SUPPORT
                </h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li className="mb-1"><Link to={'/'} className="text-secondary text-decoration-none fw-semibold">Documentation</Link></li>
                  <li className="mb-1"><Link to={'/'} className="text-secondary text-decoration-none fw-semibold">Forums</Link></li>
                  <li className="mb-1"><Link to={'/'} className="text-secondary text-decoration-none fw-semibold">Language Packs</Link></li>
                  <li className=""><Link to={'/'} className="text-secondary text-decoration-none fw-semibold">Release Status</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mt-4 col-lg-2 text-center text-sm-start">
              <div className="social">
                <h6 className="footer-heading text-uppercase text-white fw-bold">DOWNLOAD</h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li className="mb-1"><Link to={'/'} className="text-secondary text-decoration-none fw-semibold">iOS</Link></li>
                  <li className="mb-1"><Link to={'/'} className="text-secondary text-decoration-none fw-semibold">Android</Link></li>
                  <li className="mb-1"><Link to={'/'} className="text-secondary text-decoration-none fw-semibold">Windows</Link></li>
                  <li className=""><Link to={'/'} className="text-secondary text-decoration-none fw-semibold">MacOS</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 mt-4 col-lg-4 text-center text-sm-start">
              <div className="contact">
                <h6 className="footer-heading text-uppercase text-white fw-bold">CONTACT US</h6>
                <address className="mt-4 m-0 text-secondary mb-1"><i className="bi bi-pin-map fw-semibold"></i> Ratanada Bhaskar Circle , Jodhpur</address>
                <Link to={'/'} className="text-secondary mb-1 text-decoration-none d-block fw-semibold"><i className="bi bi-telephone"></i>  123 456 7890
                </Link>
                {/* <Link to={'/'} className="text-secondary mb-1 text-decoration-none d-block fw-semibold"><i className="bi bi-envelope"></i> xyzdemomail@gmail.com</Link> */}
                <Link to={'/'} className="text-secondary text-decoration-none fw-semibold"><i className="bi bi-skype"></i> wscubetech.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary text-white mt-4 p-1">
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="p-3">

                    <div className="my-4">

                      <p className="mb-0 fw-bold">© 2023 Flowbite™. All Rights Reserved.</p>
                    </div>
                  </div>

                </div>

                <div className="col-md-6">
                  <div className="p-3 text-end">
                    <ul class="list-inline ">
                      <li class="list-inline-item"><Link to={'/'}><FaFacebookF className='text-black' /></Link></li>
                      <li class="list-inline-item"><Link to={'/'} ><FaDiscord className='text-black' /></Link></li>
                      <li class="list-inline-item"><Link to={'/'} ><CiTwitter className='text-black' /></Link></li>
                      <li class="list-inline-item"><Link to={'/'} ><FaGithub className='text-black' /></Link></li>
                      <li class="list-inline-item"><Link to={'/'} ><CiBasketball className='text-black' /></Link></li>

                    </ul>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
