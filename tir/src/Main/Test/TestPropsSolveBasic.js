import React, { Component,Children,cloneElement} from 'react';

class TestPropsSolveBasic extends Component {

    constructor(props){
        super(props);
        let {name,age,nick} = this.props;
        console.log("name",name);
        console.log("age",age);
        console.log("nick",nick);
        console.log('========\n');

        //===============================
        console.log("props child=",this.props.children);
        let state = {openedHash: {}};
        Children.toArray(props.children).forEach(child => {
            if (child){
                state.openedHash[child.props.name] = !!child.props.defaultOpen
            }
        });
        this.state = state;
    }
    onToggle = name => {
        let openedHash = this.state.openedHash;
        this.setState({openedHash: {...openedHash, [name]: !openedHash[name]}});
    }
  render() {
     let {openedHash} = this.state;
     let {children} = this.props;
    return (
        <div>
        {Children.toArray(children).filter(c => c).map(child => cloneElement(child, {
                expanded: openedHash[child.props.name],
                onToggle: this.onToggle
            }))}
        </div>

    );
  }
}
export default TestPropsSolveBasic;
