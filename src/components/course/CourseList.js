import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';
import CourseAutocomplete from './CourseAutocomplete';
import SelectInput from '../common/SelectInput';

const CourseList = ({courses, numRows, onNumRowsChange}) => (
  <div>
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

    <SelectInput
    name="authorId"
    label="Author"
    value={numRows}
    defaultOption="Select Author"
    options={[1,3,5]}
    onChange={onNumRowsChange}/>
  </div>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  numRows: PropTypes.number.isRequired,
  onNumRowsChange: PropTypes.func.isRequired
};

export default CourseList;
