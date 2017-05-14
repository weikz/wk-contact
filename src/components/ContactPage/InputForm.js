import React from 'react';

import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const InputForm = () => (
    <div className="container">
    <form>
        
    <FieldGroup
      id="name"
      type="text"
      label="Name"
      placeholder="Enter Full Name"
    />

    <FieldGroup
      id="email"
      type="email"
      label="Email address"
      placeholder="Enter Email"
    />

    <FieldGroup
      id="description"
      type="text"
      label="Description"
      placeholder="Enter Description"
    />

    <Button type="submit">
      Submit
    </Button>

    </form>
    </div>
);

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


export default InputForm;