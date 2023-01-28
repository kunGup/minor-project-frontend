import { Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from "../auth";
import { saveNote, summarizeYt } from "../api";
import RadialChart from "./summary/RadialChart";
import BiaxialChart from "./summary/BiaxialChart";
import Summaries from "./summary/Summaries";
import Stats from "./summary/Stats";

function Summarizer() {
  const dispatch = useDispatch();
  const [algo, setAlgo] = React.useState("textrank");
  const [url, setUrl] = React.useState("");
  const handleChange = (e) => setAlgo(e.target.value);
  const [summary,setSummary] = useState({})
  const {user,token} = isAuthenticated()
  const [loading,setLoading] = useState(false)
  const [saved,setSaved] = useState(false)
  const summarize = (e) => {
    e.preventDefault();
    setLoading(true)
    setSaved(false);
    summarizeYt(url).then((data)=>{
      setSummary(data)
      setLoading(false)
    });
  };
  const savenote = (summary) => {
    saveNote(summary,token).then(()=>{
      setSaved(true);
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
        {loading ? (
          <>
            <Button type="submit" variant="outlined" disabled>
              Summarizing... <CircularProgress />
            </Button>
            <Typography variant="body">
              Please wait our Transformer Algo taking some more time but will
              generate best results.
            </Typography>
          </>
        ) : (
          <Button type="submit" variant="outlined">
            Summarize
          </Button>
        )}
      </form>
      <br />
      {summary.summary ? (
        <>
          <Typography variant="h3" gutterBottom>
            Summarized Text
          </Typography>
          <Summaries arr={summary.summary} />
          <Stats arr={summary.summary} />
          <Stack spacing={2} direction="row">
            {saved ? (
              <Button
                type="submit"
                variant="outlined"
                disabled
                onClick={() => savenote(summary)}
              >
                Saved Successfully
              </Button>
            ) : (
              <Button
                type="submit"
                variant="outlined"
                onClick={() => savenote(summary)}
              >
                Save
              </Button>
            )}
          </Stack>
        </>
      ) : null}
    </Box>
  );
}

export default Summarizer;
