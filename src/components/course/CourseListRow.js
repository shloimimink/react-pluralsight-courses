import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

class CourseListRow extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course)
    };
    this.actions = this.props.actions;

    this.deleteCourse = this.deleteCourse.bind(this);
  }

  deleteCourse(e) {
    event.preventDefault();

    this.props.actions.deleteCourse(this.state.course.id)
      .catch(error => {
        toastr.error(error);
      });
  }

  render() {
    return (
      <tr>
        <td><a href={this.state.course.watchHref} target="_blank">Watch</a></td>
        <td><a onClick={this.deleteCourse} href="javascript:void(0)">Delete</a></td>
        <td><Link to={'/course/' + this.state.course.id}>{this.state.course.title}</Link></td>
        <td>{this.state.course.authorId}</td>
        <td>{this.state.course.category}</td>
        <td>{this.state.course.length}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return ownProps;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseListRow);
