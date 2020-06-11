import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import LayoutPage from '../components/LayoutPage';
import LeftContent from '../components/LeftContent';
import Introduction from '../components/introduction/Introduction';
import RightContent from '../components/RightContent';
import Skill from '../components/skill/Skill';
import Experience from '../components/experience/Expeience'
import Education from '../components/education/Education'
import Interest from '../components/interest/Interest'
import Contact from '../components/contact/Contact';
import FooterPage from '../components/FooterPage';

import {getDataResume} from '../actions/action';

const Resume = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataResume());
    }, [])

  return (
    <>
      <LayoutPage>
        <LeftContent>
          <Introduction/>
        </LeftContent>
        <RightContent>
          <Skill/>
          <Experience/>
          <Education/>
          <Interest />
          <Contact />
          <FooterPage />
        </RightContent>
      </LayoutPage>
    </>
  );
}

export default Resume;