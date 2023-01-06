import { Stack } from '@mui/material';
import React from 'react'
import BiaxialChart from './BiaxialChart';
import RadialChart from './RadialChart';


function Stats({arr}) {
    
  return (
    <Stack spacing={2} direction="row" sx={{ justifyContent: "space-around" }}>
      <RadialChart arr={arr} />
      <BiaxialChart arr={arr} />
    </Stack>
  );
}

export default Stats