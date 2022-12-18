import React, { FC, ReactElement, useEffect,useContext } from 'react';
import { format } from 'date-fns';
import { Grid, Box, Typography, Alert, LinearProgress } from '@mui/material';
import { TaskCounter } from '../taskCounter/taskCounter';
import { Task } from '../task/task';
import { useQuery, useMutation } from '@tanstack/react-query';
import { sendApiRequest } from '../../helpers/sendAPIRequest';
import { ITaskAPI } from './interfaces/ITaskAPI';
import { Status } from '../createTaskForm/enums/Status';
import { IUpadateTask } from './interfaces/IUpdateTask';
import { countTask } from './helper/countTask';
import { TaskStatusChangedContext } from '../../context';

export const TaskArea: FC = (): ReactElement => {
  const taskStatusChangeContext = useContext(TaskStatusChangedContext);
  const { error, isLoading, data, refetch } = useQuery(['task'], async () => {
    return await sendApiRequest<ITaskAPI[]>(
      'http://localhost:3200/tasks',
      'GET',
    );
  });

  const updateTaskMutation = useMutation((data: IUpadateTask) =>
    sendApiRequest('http://localhost:3200/tasks', 'PUT', data),
  );
  
  
  useEffect(() => {
    refetch();
  }, [taskStatusChangeContext.updated])
  
  useEffect(()=> {
    taskStatusChangeContext.toggle()
  } , [updateTaskMutation.isSuccess])
  const onStatusChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    updateTaskMutation.mutate({
      id,
      status: e.target.checked ? Status.InProgress : Status.Todo,
    });
  };

  const markedCompletedHandler = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    updateTaskMutation.mutate({
      id,
      status: Status.Completed,
    });
  };

  return (
    <Grid item md={8}>
      <Box mb={8} p={4}>
        <Typography variant="h5">
          Status Of Your Task As On {format(new Date(), 'PPPP')}
        </Typography>
      </Box>

      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter
            status={Status.Todo}
            count={data ? countTask(data, Status.Todo) : undefined}
          />
          <TaskCounter
            status={Status.InProgress}
            count={data ? countTask(data, Status.InProgress) : undefined}
          />
          <TaskCounter
            status={Status.Completed}
            count={data ? countTask(data, Status.Completed) : undefined}
          />
        </Grid>

        <Grid item display="flex" flexDirection="column" md={8} xs={10}>
          <>
            {error && (
              <Alert severity="error">
                There was an error in the server Your task could not be fetched.
              </Alert>
            )}

            {!error && Array.isArray(data) && data.length === 0 && (
              <Alert severity="warning">
                You do not hava any task at the moment Starting by creating a
                task
              </Alert>
            )}

            {isLoading ? (
              <LinearProgress />
            ) : (
              Array.isArray(data) &&
              data.map((each, index) => {
                return each.status === Status.Todo ||
                  each.status === Status.InProgress ? (
                  <Task
                    key={`${index}-${each.priority}`}
                    id={each.id}
                    title={each.title}
                    date={new Date(each.date)}
                    description={each.description}
                    priority={each.priority}
                    status={each.status}
                    onStatusChange={onStatusChangeHandler}
                    onClick={markedCompletedHandler}
                  />
                ) : (
                  false
                );
              })
            )}
          </>
        </Grid>
      </Grid>
    </Grid>
  );
};
