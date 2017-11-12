import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Autocomplete from 'react-autocomplete';
import * as filtersActions from '../../actions/filtersActions';

class CourseAutocomplete extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      courses: props.courses,
      property: props.property,
      value: props.value
    };
    this.actions = this.props.actions;

    this.getItemValue = this._getItemValue.bind(this);
    this.renderItem = this._renderItem.bind(this);
    this.onChange = this._onChange.bind(this);
    this.onSelect = this._onSelect.bind(this);

    //this.updateCourseState = this.updateCourseState.bind(this);
    //this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({value: nextProps.value});
    }
  }

  _getItemValue(course) {
    return course[this.state.property];
  }

  _renderItem(item, isHighlighted) {
    return (
      <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
        {item[this.state.property]}
      </div>
    );
  }

  _onChange(e) {
    this.actions.updateFilters({
      [this.state.property]: e.target.value
    });
  }

  _onSelect(val) {
    this.actions.updateFilters({
      [this.state.property]: val
    });
  }

  render() {
    return (
      <Autocomplete
        getItemValue={this.getItemValue}
        items={this.state.courses}
        renderItem={this.renderItem}
        value={this.state.value || ''}
        onChange={this.onChange}
        onSelect={this.onSelect}
      />
    );
  }
}

CourseAutocomplete.propTypes = {
  property: PropTypes.string.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  value: PropTypes.string
  //onSave :React.PropTypes.func.isRequired,
  //onChange: React.PropTypes.func.isRequired,
  //saving: React.PropTypes.bool,
  //errors: React.PropTypes.object
};


function mapStateToProps(state, ownProps) {
  const props = Object.assign(
    {},
    ownProps,
    {value: state.filters[ownProps.property]}
  );

  return props;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(filtersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseAutocomplete);
