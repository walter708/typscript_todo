import React, { FC, ReactElement, useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  LinearProgress,
  Alert,
  AlertTitle,
} from '@mui/material';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';
import { Priority } from './enums/Priority';
import { Status } from './enums/Status';
import { useMutation } from '@tanstack/react-query';
import { sendApiRequest } from '../../helpers/sendAPIRequest';
import { ICreateTask } from '../taskArea/interfaces/ICreateTask';

export const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.Todo);
  const [priority, setPriority] = useState<string>(Priority.Low);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  // mutate the server
  const createTaskMutation = useMutation((data: ICreateTask) =>
    sendApiRequest('http://localhost:3200/tasks', 'POST', data),
  );
  /**
   * Handle side effects
   */
  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      setShowSuccess(true);
    }
    const setSuccessState = setTimeout(() => {
      setShowSuccess(false);
    }, 7000);
    return () => {
      clearTimeout(setSuccessState);
    };
  }, [createTaskMutation.isSuccess]);

  const createTaskHandler = () => {
    if (!title || !description || !date) {
      return;
    }
    const task: ICreateTask = {
      title,
      description,
      date: date.toString(),
      priority,
      status,
    };
    createTaskMutation.mutate(task);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      {showSuccess && (
        <Alert severity="success" sx={{ width: '100%', marginBottom: '19px' }}>
          <AlertTitle>Success</AlertTitle>
          Your task has been successfully created
        </Alert>
      )}

      <Typography mb={2} component="h6" variant="h6">
        {' '}
        Create A Task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField
          disabled={createTaskMutation.isLoading}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TaskDescriptionField
          onChange={(e) => setDescription(e.target.value)}
        />
        <TaskDateField
          disabled={createTaskMutation.isLoading}
          value={date}
          onChange={(date) => setDate(date)}
        />
        <Stack sx={{ width: '100%' }} spacing={2} direction={'row'}>
          <TaskSelectField
            name="status"
            label="Status"
            disabled={createTaskMutation.isLoading}
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            items={[
              {
                value: Status.Todo,
                label: Status.Todo,
              },
              {
                value: Status.Completed,
                label: Status.Completed,
              },
              {
                value: Status.InProgress,
                label: Status.InProgress,
              },
            ]}
          />
          <TaskSelectField
            name="priority"
            label="Priority"
            disabled={createTaskMutation.isLoading}
            value={priority}
            onChange={(e) => setPriority(e.target.value as string)}
            items={[
              {
                value: Priority.High,
                label: Priority.High,
              },
              {
                value: Priority.Medium,
                label: Priority.Medium,
              },
              {
                value: Priority.Low,
                label: Priority.Low,
              },
            ]}
          />
        </Stack>
        {createTaskMutation.isLoading && <LinearProgress />}
        <Button
          disabled={!title || !description || !date || !priority || !status}
          onClick={createTaskHandler}
          variant="contained"
          fullWidth
          size="large"
        >
          Create a Task
        </Button>
      </Stack>
    </Box>
  );
};
