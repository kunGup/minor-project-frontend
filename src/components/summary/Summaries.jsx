import { Card, CardContent, Stack, Typography } from '@mui/material';
import React from 'react'

function Summaries({arr}) {
  return (
    <Stack spacing={2} direction="row">
      {arr.map((obj) => {
        return (
          <>
            <Card
              sx={{
                border: "1px solid #0c64f2",
                borderRadius: "10px",
                textAlign: "justify",
                mb: "20px",
                maxHeight: "300px",
                overflowY: "scroll",
                flex: 1,
              }}
              variant="outlined"
              key={obj.algo}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {obj.algo} Algo Summarized
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {obj.summary}
                </Typography>
              </CardContent>
            </Card>
          </>
        );
      })}
    </Stack>
  );
}

export default Summaries