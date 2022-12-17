import { Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { summarizeYt, saveNote } from "../redux/actions";
function Summarizer() {
  const dispatch = useDispatch();
  const [algo, setAlgo] = React.useState("textrank");
  const [url, setUrl] = React.useState("");
  const handleChange = (e) => setAlgo(e.target.value);
  const summary = useSelector((state) => state.summary);
  const summarize = (e) => {
    e.preventDefault();
    dispatch(summarizeYt(url));
  };
  const savenote = (e) => {
    e.preventDefault();
    dispatch(saveNote(summary));
  };
  useEffect(() => {
  }, [summary]);
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
            <form onSubmit={savenote}>
              <Button type='submit' variant="outlined">Save</Button>
              <Button variant="outlined" color="error">
                Discard
              </Button>
            </form>
          </Stack>
        </>
      ) : null}
    </Box>
  );
}

export default Summarizer;
