import React, { Component } from 'react';
import './EditCourse.css';

class EditCourse extends Component {
  render() {
    return (
      <div className="EditCoursePage">
        <div className="EditCoursePage__heading">
          <h1>Edit Course!</h1>
        </div>
        <div className="AddCoursePage__controls">
        <form>
            <label>
                Course Name:
            <input type="text" name="course_name" />
            </label>
            <label>
                Course Location (City, State):
            <input type="text" name="course_location" />
            </label>
            <label>
                Course Distance:
            <input type="text" name="course_distance" />
            </label>
            <label>
                Course Par:
            <input type="text" name="course_par" />
            </label>
            <label>
                Hole One Par:
            <input type="text" name="hole_one_par" />
            </label>
            <label>
                Hole Two Par:
            <input type="text" name="hole_two_par" />
            </label>
            <label>
                Hole Three Par:
            <input type="text" name="hole_three_par" />
            </label>
            <label>
                Hole Four Par:
            <input type="text" name="hole_four_par" />
            </label>
            <label>
                Hole Five Par:
            <input type="text" name="hole_five_par" />
            </label>
            <label>
                Hole Six Par:
            <input type="text" name="hole_six_par" />
            </label>
            <label>
                Hole Seven Par:
            <input type="text" name="hole_seven_par" />
            </label>
            <label>
                Hole Eight Par:
            <input type="text" name="hole_eight_par" />
            </label>
            <label>
                Hole Nine:
            <input type="text" name="hole_nine_par" />
            </label>
            <label>
                Hole Ten:
            <input type="text" name="hole_ten_par" />
            </label>
            <label>
                Hole Eleven Par:
            <input type="text" name="hole_eleven_Par" />
            </label>
            <label>
                Hole Twelve Par:
            <input type="text" name="hole_twelve_par" />
            </label>
            <label>
                Hole Thirteen Par:
            <input type="text" name="hole_thirteen_par" />
            </label>
            <label>
                Hole Fourteen Par:
            <input type="text" name="hole_fourteen_par" />
            </label>
            <label>
                Hole Fifteen Par:
            <input type="text" name="hole_fifteen_par" />
            </label>
            <label>
                Hole Sixteen Par:
            <input type="text" name="hole_sixteen_par" />
            </label>
            <label>
                Hole Seventeen Par:
            <input type="text" name="hole_seventeen_par" />
            </label>
            <label>
                Hole Eighteen Par:
            <input type="text" name="hole_eighteen_par" />
            </label>
            <label>
                Course Summary:
            <input type="text" name="course_summary" />
            </label>
            <label>
                Course Website
            <input type="text" name="course_website" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
      </div>
    );
  }
}

export default EditCourse;