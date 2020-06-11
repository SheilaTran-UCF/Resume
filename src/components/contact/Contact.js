import React from 'react'
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {contactReselect} from '../../reselect/resumeReselect';
import LoadingPage  from '../Loading';

const Contact = () => {
    const {contact} = useSelector(createStructuredSelector({
        contact: contactReselect
    }));
    return (
        <>
        { contact ? (
        <section className="section-contact section-wrapper gray-bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2>Contact</h2>
                            </div>
                        </div>
                    </div>
                   
                    <div className="row">
                        <div className="col-md-12">
                            <address>
                                <strong>Address</strong><br/>
                                {contact.address}
                            </address>
                            <address>
                                <strong>Phone Number</strong><br/>
                                {contact.phone}
                            </address>

                            <address>
                                <strong>Mobile Number</strong><br/>
                                {contact.phone}
                            </address>


                            <address>
                                <strong>Email</strong><br/>
                                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                            </address>
                        </div>
                    </div>
                   
                
                </div>
               
            </section>) : (<LoadingPage/>)}
            
        </>
    )
}

export default React.memo(Contact)
