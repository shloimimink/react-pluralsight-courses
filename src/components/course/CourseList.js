import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';
import CourseAutocomplete from './CourseAutocomplete';

const CourseList = ({courses}) => (
  <table className="table">
    <thead>
    <tr>
      <th>&nbsp;</th>
      <th>&nbsp;</th>
      <th>Title</th>
      <th>Author</th>
      <th>Category</th>
      <th>Length</th>
    </tr>
    <tr>
      <th>&nbsp;</th>
      <th>&nbsp;</th>
      <th>
        <CourseAutocomplete key={1} courses={courses} property={'title'} />
      </th>
      <th>&nbsp;</th>
      <th>
        <CourseAutocomplete key={2} courses={courses} property={'category'} />
      </th>
      <th>&nbsp;</th>
    </tr>
    </thead>
    <tbody>
    {courses.filter(c => c.show !== false).map(course =>
      <CourseListRow key={course.id} course={course}/>
    )}
    </tbody>
  </table>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
