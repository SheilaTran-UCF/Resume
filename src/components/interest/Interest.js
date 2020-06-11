import React from 'react'
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {interestReselect} from '../../reselect/resumeReselect';
import LoadingPage  from '../Loading';

const Interest = () => {
    const {interest} = useSelector(createStructuredSelector({
        interest: interestReselect
    }));
    return (
        <>
        {interest ? (
            <section className="section-wrapper section-interest gray-bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2>Interest</h2>
                            </div>
                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col-md-12">
                        {interest.map((item, index)=> (
                            <div key={index} className="content-item">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
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

export default React.memo(Interest)
