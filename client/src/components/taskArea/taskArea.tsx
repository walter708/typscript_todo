import React, { FC, ReactElement } from 'react';
import { format } from 'date-fns';
import { Grid, Box, Typography } from '@mui/material';
import { TaskCounter } from '../taskCounter/taskCounter';
import { Task } from '../task/task';

export const TaskArea: FC = (): ReactElement => {
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
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid item display="flex" flexDirection="column" md={8} xs={10}>
          <Task />
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};
