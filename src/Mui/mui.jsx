import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Fingerprint from "@mui/icons-material/Fingerprint";
//Upload button
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
//Dark mode
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Mui = () => {
    const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <>
      <Typography variant="h4">Buttons</Typography>
      <Stack spacing={1} direction="row">
        <Button variant="contained">Contained</Button>
        <Button variant="contained" size="medium" color="secondary">
          contained
        </Button>
        <Button variant="contained" disableElevation size="small" color="success">
          contain
        </Button>
        <Button variant="contained" size="large" color="error">
          contained
        </Button>
        <Button variant="outlined" color="secondary">
          con
        </Button>
        <Button variant="outlined">contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">text</Button>
        <Button variant="text" color="secondary">
          text
        </Button>
        <Button variant="outlined" color="secondary" disabled>
          text
        </Button>
        <Button variant="outlined" color="success">
          text
        </Button>
        <Button variant="outlined" color="secondary">
          text
        </Button>
        <Button variant="outlined" color="error">
          text
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
          </Stack>
          <Stack direction="row">
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload
          <VisuallyHiddenInput type="file" />
        </Button>
              
          </Stack>
      <Typography variant="h4">Icons</Typography>
      <Stack direction="row">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
          <DeleteIcon />
        </IconButton>
        <IconButton color="secondary">
          <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton color="success" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton aria-label="fingerprint" color="success">
          <Fingerprint />
        </IconButton>
      </Stack>
    </>
  );
};

export default Mui;
