import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import { Sidebar } from '../../components/Sidebar/sidebar';
import { TaskArea } from '../../components/taskArea/taskArea';

const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh">
      <TaskArea />
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
