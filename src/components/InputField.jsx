import PropTypes from 'prop-types';
import React from 'react';

import { FormControl, InputLabel, InputBase } from '@mui/material';
import styled from 'styled-components';

const Input = styled(InputBase)(() => ({
  'label + &': {
    marginTop: '25px',
  },
  '& .MuiInputBase-input': {
    'borderRadius': 15,
    'position': 'relative',
    'border': '1px solid #000000',
    'fontSize': 16,
    'padding': '10px 12px',
  },
}));
const Label = styled(InputLabel)`
  ${({ theme }) => `
    &&& {
      font-size: 16px;
      color: #000;
      font-weight: bold;
    }

    @media (min-width: ${theme.breakPoints.lg}) {
      font-size: 18px !important;
    }
  `}
`;
const FormWrapper = styled(FormControl)`
    &&& {
        width: 100%;
        margin-bottom: 15px;
    }
`;

const InputField = ({ label, autoComplete, required, name, value, onChange, multiline, rows, type = '' }) => (
  <FormWrapper variant="standard">
    <Label shrink htmlFor="inputField">
      {label}
    </Label>
    <Input
      autoComplete={autoComplete}
      id="inputField"
      multiline={multiline}
      name={name}
      required={required}
      rows={rows}
      type={type}
      value={value}
      onChange={onChange}
    />
  </FormWrapper>
);

export default InputField;

InputField.defaultProps = {
  autoComplete: '',
  multiline: false,
  name: '',
  required: false,
  rows: 0,
  type: '',
};
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
  multiline: PropTypes.bool,
  name: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  type: PropTypes.string,
};
