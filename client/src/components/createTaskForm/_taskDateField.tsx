import React, {FC,  ReactElement} from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';
import {IDateField } from './interfaces/IDateField';
import  PropTypes  from 'prop-types';


export const TaskDateField : FC<IDateField> = (props) : ReactElement => {
  const {
    disabled=false,
    onChange=(date) => console.log(date),
    value = new Date()
  } = props
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker 
      label="Task Date"
      inputFormat='dd/MM/yyyy'
      value={value}
      disabled={disabled}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} />}
      />
      
    </LocalizationProvider>
  )
}

TaskDateField.propTypes = {
  disabled:PropTypes.bool,
  value:PropTypes.instanceOf(Date),
  onChange:PropTypes.func
  
}