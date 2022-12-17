import React, { FC, ReactElement } from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { ITaskCounter } from './interfaces/ITaskConuter';
import { Status } from '../createTaskForm/enums/Status';
import { emmitCorrectBorderColor } from './helper/emmitCorrectBorderColor';
import { emmitCorrectLabel } from './helper/emmitCorrectLabel';

import PropTypes from 'prop-types';

export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
  const { count = 10, status = Status.Todo } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          background: 'transparent',
          border: '5px solid',
          width: '96px',
          height: '96px',
          marginBottom: '16px',
          borderColor: `${emmitCorrectBorderColor(status)}`,
        }}
      >
        <Typography color="#ffffff" variant="h4">
          {count}
        </Typography>
      </Avatar>

      <Typography
        color="#ffffff"
        fontWeight="bold"
        fontSize="20px"
        variant="h5"
      >
        {emmitCorrectLabel(status)}
      </Typography>
    </Box>
  );
};

TaskCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([Status.Completed, Status.InProgress, Status.Todo]),
};
