import React from 'react'
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {educationReselect} from '../../reselect/resumeReselect';
import LoadingPage  from '../Loading';

const Education = () => {
    const {education} = useSelector(createStructuredSelector({
        education: educationReselect
    }));
    return (
        <>
        {education ? (
            <section className="section-wrapper section-education">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title"><h2>Education</h2></div>
                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col-md-12">
                        {education.map((item,index) => (
                            <div className="content-item">
                                <small>{item.time}</small>
                                <h3>{item.name}</h3>
                                <h4>{item.school}</h4>
                                <p>{item.add}</p>
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

export default React.memo(Education)
