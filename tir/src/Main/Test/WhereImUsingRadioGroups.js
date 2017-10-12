import React, { Component } from 'react';

function RadioOption(props) {
  return (
    <label>
      <input type="radio" value={props.value} name={props.name} />
      {props.label}
    </label>
  )
}

function renderChildren(props) {
  return React.Children.map(props.children, child => {
    if (child.type === RadioOption)
      return React.cloneElement(child, {
        name: props.name
      })
    else
      return child
  })
}

function RadioGroup(props) {
  return (
    <div className="radio-group">
      {renderChildren(props)}
    </div>
  )
}


class WhereImUsingRadioGroups extends Component {
  render() {
    return (
     <RadioGroup name="blizzard-games">
         <RadioOption label="Warcraft 2" value="wc2" />
         <RadioOption label="Warcraft 3" value="wc3" />
         <RadioOption label="Starcraft 1" value="sc1" />
         <RadioOption label="Starcraft 2" value="sc2" />
     </RadioGroup>
    );
  }
}

export default WhereImUsingRadioGroups;
