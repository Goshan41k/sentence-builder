import React from 'react';
import PropsTypes from 'prop-types';

const InputComponent = (props) => {
  const onChangeHandler = () => {
    let newTimes = JSON.parse(JSON.stringify(props.times));
    newTimes[props.id].isChecked = !newTimes[props.id].isChecked;
    props.setTimes(newTimes);
  };

  return (
    <div className='input-component-container'>
      <input
        type='checkbox'
        id={props.id}
        value={props.times[props.id].isChecked}
        onChange={onChangeHandler}
        className='input-component-container-checkbox'
      ></input>
      <label className='input-component-container-label' htmlFor={props.id}>
        {props.times[props.id].name}
      </label>
    </div>
  );
};

InputComponent.propTypes = {
  id: PropsTypes.number,
  times: PropsTypes.array,
  setTimes: PropsTypes.func,
};

export default InputComponent;
