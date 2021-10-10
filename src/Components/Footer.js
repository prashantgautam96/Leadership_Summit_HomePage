import Link from "@material-ui/core/Link"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"
import '../Components.css';
import React, { useState, useEffect } from 'react';

export default function Footer() {
    return (
        <footer>
            <div className='container-fluid container-fluid1'>
                <div className='row justify-content-center row1 mx-0'>
                    <div className='col-md-6'>
                        <p className='logo mb-md-5 mb-4'>Leadership Summit</p>
                        <p>Copyright &copy; 2021 ABC. All Rights Reserved</p>
                    </div>
                    <div className='col-md-4'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div>
                                    <ul className='list-unstyled link-group'>
                                        <li className='mb-2'>
                                            <Link href='' className='text-decoration-none'>
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='' className='text-decoration-none'>
                                                Team
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <p className='link-group-heading'>Contact Us</p>
                                <ul className='list-unstyled link-group'>
                                    <li>
                                        <a
                                            href=''
                                            className='text-decoration-none'>
                                            mail@gmail.com
                                        </a>
                                    </li>
                                    <li className='mt-2 d-flex'>
                                        <Link href='' role='button' target='_blank'>
                                            <span className='me-2'>
                                                <InstagramIcon className='social-icons'/>
                                            </span>
                                        </Link>
                                        <Link href='' role='button' target='_blank'>
                                            <span className='me-2'>
                                                <FacebookIcon className='social-icons'/>
                                            </span>
                                        </Link>
                                        <Link href='' role='button' target='_blank'>
                                            <span className='me-2'>
                                                <LinkedInIcon className='social-icons'/>
                                            </span>
                                        </Link>
                                        <Link href='' role='button' target='_blank'>
                                            <span className='me-2'>
                                                <TwitterIcon className='social-icons'/>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}