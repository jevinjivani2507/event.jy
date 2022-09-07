import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const InsertEvent = () => {
  const [value, setValue] = useState();

  const [mode, setMode] = React.useState();
  console.log(value);

  const [name, setName] = useState("Cat in the Hat");

  return (
    <div className="min-h-screen">
      <div className="w-1/2">
        <form action="">
          <div className="flex flex-col p-10">
            <TextField
              id="outlined-name"
              label="Event Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
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
                    value="female"
                    control={<Radio />}
                    label="Online"
                  />
                  <FormControlLabel
                    value="male"
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
            />

            <div>
              <p className="mb-2">Duration</p>
              <div className="flex gap-5">
                <TextField
                  id="outlined-number"
                  label="Months"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="outlined-number"
                  label="Days"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="outlined-number"
                  label="Minutes"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
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
            <Input
              type="text"
              // value={username}
              className="mb-1"
              placeholder="Email"
              // onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InsertEvent;
