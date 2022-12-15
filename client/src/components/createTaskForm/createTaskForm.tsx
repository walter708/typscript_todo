import React, {FC, ReactElement} from 'react';
import {Box, Typography, Stack} from '@mui/material'
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import {TaskDateField} from './_taskDateField';
import {TaskSelectField} from './_taskSelectField'
import { Priority } from './enums/Priority';
import { Status } from './enums/Status';

export const CreateTaskForm : FC  = ():ReactElement => {
  return (
    <Box 
    display="flex"
    flexDirection="column"
    alignItems="flex-start"
    width="100%"
    px={4}
    my={6}
    >
      <Typography mb={2} component="h6" variant="h6"> Create A Task</Typography>
      <Stack sx={{width:"100%"}} spacing={2} >
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
        <Stack sx={{width:"100%"} }  spacing={2} direction={'row'}>
        <TaskSelectField 
              name="status"
              label="Status"
              items={[
                {
                  value:Status.Completed,
                  label:Status.Completed.toUpperCase()
                },
                {
                  value:Status.Inprogress,
                  label:Status.Inprogress.toUpperCase()
                }
              ]}
        />
          <TaskSelectField 
             name="priority"
             label="Priority"
             items={[
               {
                 value:Priority.High,
                 label:Priority.High
               },
               {
                value:Priority.Medium,
                label:Priority.Medium
               },
               {
                value:Priority.Low,
                label:Priority.Low
               }
             ]}
          />
        </Stack>
      </Stack>

    </Box>
  )
}