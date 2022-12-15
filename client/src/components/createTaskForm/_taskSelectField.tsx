import React, {FC, ReactElement} from 'react';
import {FormControl, InputLabel, Select, MenuItem, SelectChangeEvent} from '@mui/material'
import { ISelectField } from './interfaces/ISelectField';
import  PropTypes   from 'prop-types';

export const TaskSelectField : FC<ISelectField> = (props):ReactElement => {
  
  const {
    disabled = false,
    name="select-box",
    label="Select Box",
    value = '',
    onChange = (e:SelectChangeEvent) => console.log(e),
    items= [{value:"Add Item", label:"Add Item"}]
  } = props
  
  return(
    <FormControl fullWidth>
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
        <Select
          labelId={`${name}-id`}
          id={`${name}-select`}
          value={value}
          label={label}
          name={name}
          onChange={onChange}
          disabled={disabled}
        >
          {items.map(({value, label}, index ) => 
              <MenuItem key={`${value || " "} ` + index} value={value}>{label}</MenuItem>
          )}
        </Select>
</FormControl>
  )
}

TaskSelectField.propTypes = {
  disabled: PropTypes.bool,
  name:PropTypes.string,
  label:PropTypes.string,
  value:PropTypes.string,
  onChange:PropTypes.func,
  items:PropTypes.arrayOf(
    PropTypes.shape({
      value:PropTypes.string.isRequired,
      label:PropTypes.string.isRequired
    }).isRequired
  )
}