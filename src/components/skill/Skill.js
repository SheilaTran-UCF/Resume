import React from 'react'
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {skillReselect} from '../../reselect/resumeReselect';
import LoadingPage from '../Loading';

const Skill = () => {
    const {skills} = useSelector(createStructuredSelector({
        skills: skillReselect
      }))
    return (

        <>
        {skills ? (
            <section className="section-wrapper skills-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2>Skills</h2>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="progress-wrapper">
                                {skills.map((item, key) => (
                                    <div className="progress-item">
                                        <span className="progress-title">{item.skill_name}</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={`${item.skill_level}`} aria-valuemin="0"
                                                aria-valuemax="100" style={{width: `${item.skill_level}%`}}><span className="progress-percent"> {item.skill_level}%</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </section>) : (<LoadingPage/>)
        }
        </>
    )
}

export default React.memo(Skill)
