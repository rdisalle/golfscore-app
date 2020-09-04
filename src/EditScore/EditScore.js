import React, { Component } from 'react';
import './EditScore.css';

class EditScore extends Component {
  render() {
    return (
      <div className="EditScorePage">
        <div className="EditScorePage__heading">
          <h1>Edit Score!</h1>
        </div>
        <div className="EditScorePage__controls">
        <form>
            <label>
                Hole One:
            <input type="text" name="hole_one" />
            </label>
            <label>
                Hole Two:
            <input type="text" name="hole_two" />
            </label>
            <label>
                Hole Three:
            <input type="text" name="hole_three" />
            </label>
            <label>
                Hole Four:
            <input type="text" name="hole_four" />
            </label>
            <label>
                Hole Five:
            <input type="text" name="hole_five" />
            </label>
            <label>
                Hole Six:
            <input type="text" name="hole_six" />
            </label>
            <label>
                Hole Seven:
            <input type="text" name="hole_seven" />
            </label>
            <label>
                Hole Eight:
            <input type="text" name="hole_eight" />
            </label>
            <label>
                Hole Nine:
            <input type="text" name="hole_nine" />
            </label>
            <label>
                Hole Ten:
            <input type="text" name="hole_ten" />
            </label>
            <label>
                Hole Eleven:
            <input type="text" name="hole_eleven" />
            </label>
            <label>
                Hole Twelve:
            <input type="text" name="hole_twelve" />
            </label>
            <label>
                Hole Thirteen:
            <input type="text" name="hole_thirteen" />
            </label>
            <label>
                Hole Fourteen:
            <input type="text" name="hole_fourteen" />
            </label>
            <label>
                Hole Fifteen:
            <input type="text" name="hole_fifteen" />
            </label>
            <label>
                Hole Sixteen:
            <input type="text" name="hole_sixteen" />
            </label>
            <label>
                Hole Seventeen:
            <input type="text" name="hole_seventeen" />
            </label>
            <label>
                Hole Eighteen:
            <input type="text" name="hole_eighteen" />
            </label>
            <label>
                Total Score:
            <input type="text" name="total_score" />
            </label>
            <label>
                To Par +/-
            <input type="text" name="To Par" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
      </div>
    );
  }
}

export default EditScore;