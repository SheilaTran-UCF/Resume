import React from 'react'
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {experienceReselect} from '../../reselect/resumeReselect';
import LoadingPage  from '../Loading';

const Expeience = () => {
    const {experience} = useSelector(createStructuredSelector({
        experience: experienceReselect
    }));
    return (
        <>
           {experience ? (
            <section className="section-wrapper section-experience gray-bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title"><h2>Work Experience</h2></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        {experience.map((item,index) => (
                            <div className="content-item" key={index}>
                                <small>{item.time}</small>
                                <h3>{item.level}</h3>
                                <h4>{item.company}</h4>
                                <p>{item.address}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>
            ) : (<LoadingPage/>)}
        </>
    )
}

export default React.memo(Expeience)
