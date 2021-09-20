import React from 'react';

import './CourseDetails.scss';

import Courses from './sub-components/Courses';
import Episodes from './sub-components/Episodes';
import RatingReview from './sub-components/RatingReview';
import RecommendedCourse from './sub-components/RecommendedCourse';

const CourseDetails = () => {
  return (
    <div className='container-fluid' style={{ width: '100%', height: '100%' }}>
      <Courses />
      
    </div>
  );
};

export default CourseDetails;
