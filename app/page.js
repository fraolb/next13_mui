'use client';
import { useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";

export default function Home() {
  const [thought, setThought] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, thought]);
    setThought("");
  };
  return (

      <Box sx={{ border: "solid", padding: 4 }}>
        <Typography sx={{ textAlign: "center" }} variant="h3" color="primary">
          Ideas
        </Typography>
        <Divider sx={{ margin: 2 }} />

        <form onSubmit={handleSubmit}>
          <Stack direction="row" sx={{ justifyContent: "center" }} spacing={2}>
            <TextField
              type="text"
              variant="standard"
              label="Thoughts"
              value={thought}
              onChange={(e) => setThought(e.target.value)}
              required
            />
            <Button color="primary" variant="contained" type="submit">
              Add
            </Button>{" "}
          </Stack>
        </form>

        <Divider sx={{ margin: 2 }} />
        <Grid container justifyContent="center" spacing={2}>
          {data.length > 0 ? (
            data.map((i) => (
              <Grid
                item
                xs={12}
                sm={5}
                md={4}
                lg={2}
                bgcolor="#bbb9ba"
                borderRadius={2}
                margin={1}
              >
                <Typography color="primary" textAlign="center">
                  {i}
                </Typography>
              </Grid>
            ))
          ) : (
            <div>...Empty</div>
          )}
        </Grid>
      </Box>

  );
}
