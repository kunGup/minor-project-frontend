import { Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from "../auth";
import { saveNote, summarizeYt } from "../api";
function Summarizer() {
  const dispatch = useDispatch();
  const [algo, setAlgo] = React.useState("textrank");
  const [url, setUrl] = React.useState("");
  const handleChange = (e) => setAlgo(e.target.value);
  const [summary,setSummary] = useState({})
  const {user,token} = isAuthenticated()
  const summarize = (e) => {
    e.preventDefault();
    summarizeYt(url).then((data)=>{
      setSummary({...data})
    });
  };
  const savenote = (summary) => {
    saveNote(summary,token).then(()=>{
      setSummary({});
    })
  };
  return (
    <Box>
      <form onSubmit={summarize}>
        <Typography variant="h6" gutterBottom>
          Enter Video Link
        </Typography>
        <TextField
          required
          fullWidth
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        <br />
        <br />
        <Typography variant="h6" gutterBottom>
          Choose Algorithm
        </Typography>
        <Select value={algo} onChange={handleChange} fullWidth>
          <MenuItem value={"textrank"}>Text Rank</MenuItem>
          <MenuItem value={"frequency"}>Frequency Based</MenuItem>
          <MenuItem value={"lsa"}>Latent Semantic Analysis</MenuItem>
          <MenuItem value={"luhn"}>Luhn Algorithm</MenuItem>
          <MenuItem value={"transformer"}>Transformer Algorithm</MenuItem>
        </Select>
        <br />
        <br />
        <Button type="submit" variant="outlined">
          Summarize
        </Button>
      </form>
      {summary.text ? (
        <>
          <Typography variant="h5" gutterBottom>
            Summarized Text
          </Typography>
          <Box
            sx={{
              border: "1px solid #0c64f2",
              borderRadius: "10px",
              p: "10px",
              textAlign: "justify",
              background: "#73a5f5",
              mb: "20px",
              maxHeight: "300px",
              overflowY: "scroll",
            }}
          >
            {summary.text}
          </Box>
          <Stack spacing={2} direction="row">
            <Button type='submit' variant="outlined" onClick={()=>savenote(summary)}>Save</Button>
            <Button variant="outlined" color="error">
              Discard
            </Button>
          </Stack>
        </>
      ) : null}
    </Box>
  );
}

export default Summarizer;
