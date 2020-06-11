import React from 'react'
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {introductionReselect} from '../../reselect/resumeReselect';
import LoadingPage from '../Loading';

const Introduction = () => {
    const {introduction} = useSelector(createStructuredSelector({
        introduction: introductionReselect
    }))
    return (
        <>
        {introduction ? (
            <header className="header theiaStickySidebar">
                <div className="profile-img">
                    <img src={`img/${introduction.avatar}`} className="img-responsive" alt=""/>
                </div>
                <div className="content">
                    <h1>{introduction.full_name}</h1>
                    <span className="lead">{introduction.title}</span>

                    <div className="about-text">
                        <p>
                            {introduction.description}
                        </p>
                        <p><img src="img/Signature.png" alt="" className="img-responsive"/></p>
                    </div>


                    <ul className="social-icon">
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-slack" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                    </ul>
                </div>

            </header>) : (
                <LoadingPage/>
            )
        }
        </>
    )
}

export default React.memo(Introduction)
