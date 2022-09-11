import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { FileUploader } from "react-drag-drop-files";

const InsertEvent = () => {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [durationHour, setDurationHour] = useState();
  const [durationDay, setDurationDay] = useState();
  const [durationMonth, setDurationMonth] = useState();
  const [description, setDescription] = useState("");
  const [mode, setMode] = useState();
  const [price, setPrice] = useState();
  const [file, setFile] = useState(null);
  const [value, setValue] = useState(null);

  const handleChange = (file) => {
    setFile(file);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:4000/eventlist/addEvents",
      {
        id,
        name,
        description,
        value,
        date,
        price,
        mode,
      }
    );
    console.log(response);
    if (response.data) {
      console.log("added");
      toast.error("event added!");
    } else {
      toast.error("add again");
    }
  }

  const fileTypes = ["JPG", "PNG", "GIF"];

  return (
    <div className="flex min-h-[92vh]">
      <div className="w-1/2">
        <form className="" action="">
          <div className="p-10">
            <div className="flex flex-col p-10 space-y-4">
              <TextField
                id="outlined-multiline-flexible"
                label="Event id"
                color=""
                multiline
                maxRows={4}
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Event Name"
                color=""
                multiline
                maxRows={4}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="flex gap-4">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Start Date"
                    // value={}
                    onChange={(e,d) => {
                      console.log(e.$d);
                  //     setDate(e.target.value)
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="Start Time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div className="flex flex-col gap-4">
                <p>Duration</p>
                <div className="flex gap-4">
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Hour"
                    color=""
                    multiline
                    maxRows={4}
                    value={durationHour}
                    onChange={(e) => setDurationHour(e.target.value)}
                  />
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Day"
                    color=""
                    multiline
                    maxRows={4}
                    value={durationDay}
                    onChange={(e) => setDurationDay(e.target.value)}
                  />
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Month"
                    color=""
                    multiline
                    maxRows={4}
                    value={durationMonth}
                    onChange={(e) => setDurationMonth(e.target.value)}
                  />
                </div>
              </div>
              <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div>
                <p>Select Mode</p>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={mode}
                  onChange={(e) => setMode(e.target.value)}
                >
                  <div className="flex">
                    <FormControlLabel
                      value="online"
                      control={<Radio />}
                      label="Online"
                    />
                    <FormControlLabel
                      value="offline"
                      control={<Radio />}
                      label="Offline"
                    />
                  </div>
                </RadioGroup>
              </div>

              <TextField
                id="outlined-number"
                label="Price(₹)"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <div className="">
                <p>Select Tags</p>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Technology"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Entertainment"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Design"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Label"
                />
              </div>
              <Button
                auto
                type="submit"
                className="!bg-dSecondary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-1/2 p-10 flex justify-center items-center">
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
      </div>
    </div>
  );
};

export default InsertEvent;
