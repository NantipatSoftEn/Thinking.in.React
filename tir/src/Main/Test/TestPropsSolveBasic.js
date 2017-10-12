import React, { Component } from 'react';

class TestPropsSolveBasic extends Component {

    constructor(props){
        super(props);
        let {name,age,nick} = this.props;
        console.log("name",name);
        console.log("age",age);
        console.log("nick",nick);
        console.log('========\n');
    }
  render() {

    return (
        <div>
        </div>

    );
  }
}
export default TestPropsSolveBasic;
