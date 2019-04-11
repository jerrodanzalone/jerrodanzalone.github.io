import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
              Loves coding, cats and exploring the world.
              I strive to learn something new each day.
              Development Lead on the Sprint 2019 Capstone
              Project at the University of Nebraska.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
