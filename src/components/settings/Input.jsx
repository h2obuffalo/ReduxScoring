import React, { Fragment } from 'react';

 const Input = ({label, handler, value}) =>
    <Fragment>
    <label>{ label }</label>
      <input
        className="form-control"
        required={true}
        onChange={ handler }
        value={ value } />
    </Fragment>

export default Input;