import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import classes from "./category.module.css";
import Droparea from "./Droparea";
import Collapse from "@mui/material/Collapse";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import EditNoteIcon from '@mui/icons-material/EditNote';
const Category = () => {
  const [Description, setDescription] = useState("");
  const [Title, setTitle] = useState("");
  const [task, settask] = useState([]);
  const [ActiveCard, setActiveCard] = useState([]);
  const [collapseToggle, setcollapseToggle] = useState(false);
  const [editToggle, seteditToggle] = useState(false);
  const [tempEditIndex, settempEditIndex] = useState()
  const handleClick = (e) => {
    e.preventDefault();
    if(Title.trim()!=="" && Description.trim()!=="")
    settask([
      ...task,
      { title: Title, description: Description, status: "todo" },
    ]);
    setTitle("");
    setDescription("");
  };
  const handleEditChange = () => {
    if (Title.trim() != "" && Description.trim() !== "")
      settask(
        task.map((item, index) => {
          if (index === tempEditIndex) {
            return {...item, title: Title, description: Description}
          }
          else return item
        })
      )
    setTitle("");
    setDescription("");
    setcollapseToggle(false);
    seteditToggle(false);
    settempEditIndex(null);
  }
  const handleEdit = (index) => {
    setcollapseToggle(true)
    seteditToggle(true)
    const [{ title,description } ]=task.filter((item, i) => index === i);
    setTitle(title);
    setDescription(description)
    settempEditIndex(index);
  }
  const handleDelete = (i) => {
    settask(
      task.filter( (item,index) => index !== i)
    )
  }
  const handleOnDrop = (e, index, status) => {
    // settask(
    //   task.map((item, index) => {
    //     if (index === ActiveCard) {
    //       return { ...item, status: status };
    //     } else return item;
    //   })
    // );

    const Filteredtask = task.filter((item, index) => index !== ActiveCard);
    // const updatetask = task.filter((item, index) => index === ActiveCard);
    Filteredtask.splice(index, 0, { ...task[ActiveCard], status: status });
    settask(Filteredtask);
    console.log(index + "index" + status + "status");
    console.log(task);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#D5D5D5",
          textAlign: "center",
          minHeight: "90vh",
        }}
      >
        <Typography variant="h4"> Task manager</Typography>
        <Button
          variant="contained"
          onClick={() => setcollapseToggle(!collapseToggle)}
          style={{margin: "10px 0 10px 0"}}
        >
          {!collapseToggle ?    <AddIcon/> :<CloseIcon/> }
        </Button>
        <Collapse in={collapseToggle}>
          <Stack
            direction="column"
            sx={{
              maxWidth: 300,
              margin: "auto",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <TextField
              value={Title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              id="standard-basic"
              label="Title"
              variant="standard"
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Description"
              multiline
              rows={4}
              variant="standard"
              value={Description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <Button onClick={ editToggle? handleEditChange :handleClick } variant="contained">
              {editToggle ? "Modify task" : "Add task"}
            </Button>
          </Stack>
        </Collapse>
        <Stack
          direction="row"
          spacing={3}
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            className="border-0"
            sx={{
              backgroundColor: "transparent",
              maxWidth: 250,
              textAlign: "center",
              width: "300px",
              minHeight: "300px",
            }}
            variant="outlined"
          >
            <Typography className="shadow" variant="h6" sx={{ backgroundColor: "#F19ED2" }}>
              Todo
            </Typography>
            <Droparea onDrop={(e) => handleOnDrop(e, 0, "todo")} />
            {task.map((item, index) => {
              if (item.status === "todo")
                return (
                  <>
                    <Card
                      key={index}
                      className={`${classes.card} shadow`}
                      sx={{
                        backgroundColor: "#EEE5E9",
                        maxWidth: 250,
                        textAlign: "left",
                        width: "230px",
                        minHeight: "150px",
                        margin: "auto",
                        marginTop: "10px",
                        marginBottom: "10px",
                        paddingLeft: "10px",
                        border: "0px",
                        position: "relative"
                      }}
                      variant="outlined"
                      draggable
                      onDragStart={() => setActiveCard(index)}
                      onDragEnd={() => setActiveCard(null)}
                    >
                    <DeleteOutlineIcon onClick={ () => {handleDelete(index)}} className={`${classes.del}`} sx={ {float:"right"}} />
                      <EditNoteIcon onClick= { () => handleEdit(index)} className={`${classes.del}`} sx={ {float:"right"}}/>
                      <Typography variant="h6"> {item.title}</Typography>
                      <Typography> {item.description}</Typography>
                      <Typography sx={{position: "absolute", bottom: "0",right: "0"}} variant="button">{item.status}</Typography>
                    </Card>
                    <Droparea
                      onDrop={(e) => {
                        handleOnDrop(e, index + 1, "todo");
                      }}
                    />
                  </>
                );
            })}
          </Card>
          <Card
            className="border-0"
            sx={{
              backgroundColor: "transparent",
              maxWidth: 250,
              textAlign: "center",
              width: "300px",
              minHeight: "150px",
            }}
            variant="outlined"
          >
            <Typography className="shadow" variant="h6" sx={{ backgroundColor: "#91DDCF" }}>
              In progress
            </Typography>
            <Droparea
              onDrop={(e) => {
                handleOnDrop(e, 0, "progress");
              }}
            />
            {task.map((item, index) => {
              if (item.status === "progress")
                return (
                  <>
                    <Card
                      key={index}
                      className={`${classes.card} shadow`}
                      sx={{
                        backgroundColor: "#EEE5E9",
                        maxWidth: 250,
                        textAlign: "left",
                        width: "230px",
                        minHeight: "150px",
                        margin: "auto",
                        paddingLeft: "10px",
                        marginTop: "10px",
                        marginBottom: "10px",
                        position: "relative"
                      }}
                      variant="outlined"
                      draggable
                      onDragStart={() => setActiveCard(index)}
                      onDragEnd={() => setActiveCard(null)}
                    >
                      <DeleteOutlineIcon onClick={() => { handleDelete(index) }} className={`${classes.del}`} sx={{ float: "right" }} />
                      <EditNoteIcon onClick= { () => handleEdit(index)} className={`${classes.del}`} sx={ {float:"right"}}/>
                       <Typography variant="h6"> {item.title}</Typography>
                      <Typography> {item.description}</Typography>
                      <Typography sx={{position: "absolute", bottom: "0",right: "0"}} variant="button">{item.status}</Typography>
                    </Card>
                    <Droparea
                      onDrop={(e) => {
                        handleOnDrop(e, index + 1, "progress");
                      }}
                    />
                  </>
                );
            })}
          </Card>
          <Card
            className="border-0"
            sx={{
              backgroundColor: "transparent",
              maxWidth: 250,
              textAlign: "center",
              width: "300px",
              minHeight: "150px",
            }}
            variant="outlined"
          >
            <Typography className="shadow" sx={{ backgroundColor: "#A4907C" }} variant="h6">
              In review
            </Typography>
            <Droparea
              onDrop={(e) => {
                handleOnDrop(e, 0, "review");
              }}
            />
            {task.map((item, index) => {
              if (item.status === "review")
                return (
                  <>
                    <Card
                      key={index}
                      className={`${classes.card} shadow`}
                      sx={{
                        backgroundColor: "#EEE5E9",
                        maxWidth: 250,
                        textAlign: "left",
                        width: "230px",
                        minHeight: "150px",
                        margin: "auto",
                        marginTop: "10px",
                        marginBottom: "10px",
                        paddingLeft: "10px",
                        position: "relative"
                      }}
                      variant="outlined"
                      draggable
                      onDragStart={() => setActiveCard(index)}
                      onDragEnd={() => setActiveCard(null)}
                    >
                      <DeleteOutlineIcon onClick={() => { handleDelete(index) }} className={`${classes.del}`} sx={{ float: "right" }} />
                      <EditNoteIcon onClick= { () => handleEdit(index)} className={`${classes.del}`} sx={ {float:"right"}}/>
                      <Typography variant="h6"> {item.title}</Typography>
                      <Typography> {item.description}</Typography>
                      <Typography sx={{position: "absolute", bottom: "0",right: "0"}} variant="button">{item.status}</Typography>
                    </Card>
                    <Droparea
                      onDrop={(e) => {
                        handleOnDrop(e, index + 1, "review");
                      }}
                    />
                  </>
                );
            })}
          </Card>
          <Card
            className="border-0"
            sx={{
              backgroundColor: "transparent",
              maxWidth: 250,
              textAlign: "center",
              width: "300px",
              minHeight: "150px",
            }}
            variant="outlined"
          >
            <Typography className="shadow" sx={{ backgroundColor: "#7776B3" }} variant="h6">
              Done
            </Typography>
            <Droparea
              onDrop={(e) => {
                handleOnDrop(e, 0, "done");
              }}
            />
            {task.map((item, index) => {
              if (item.status === "done")
                return (
                  <>
                    <Card
                      key={index}
                      className={`${classes.card} shadow`}
                      sx={{
                        backgroundColor: "#EEE5E9",
                        maxWidth: 250,
                        textAlign: "left",
                        width: "230px",
                        minHeight: "150px",
                        margin: "auto",
                        marginTop: "10px",
                        marginBottom: "10px",
                        paddingLeft: "10px",
                        position: "relative"
                      }}
                      variant="outlined"
                      draggable
                      onDragStart={() => setActiveCard(index)}
                      onDragEnd={() => setActiveCard(null)}
                    >
                      <DeleteOutlineIcon onClick={() => { handleDelete(index) }} className={`${classes.del}`} sx={{ float: "right" }} />
                      <EditNoteIcon onClick= { () => handleEdit(index)} className={`${classes.del}`} sx={ {float:"right"}}/>
                       <Typography variant="h6"> {item.title}</Typography>
                      <Typography> {item.description}</Typography>
                      <Typography sx={{position: "absolute", bottom: "0",right: "0"}} variant="button"> {item.status}</Typography>
                    </Card>
                    <Droparea
                      onDrop={(e) => {
                        handleOnDrop(e, index + 1, "done");
                      }}
                    />
                  </>
                );
            })}
          </Card>
        </Stack>
      </Box>
    </>
  );
};

export default Category;
