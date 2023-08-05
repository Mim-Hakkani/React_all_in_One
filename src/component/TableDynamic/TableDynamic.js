import { Box, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Pagination from "@mui/material/Pagination";

import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";



const TableDynamic = () => {
  const [rows, setRows] = useState([
    {
      topic: '',
      date: null,
      startTime: null,
      endTime: null,
      seat: 0,
      availableSeat: 0,
      office: '',
      address: '',
    },
  ]);

  const handleRowChange = (index, field, value) => {
    const updatedRows = [...rows];

    if (field === 'date') {
      value = dayjs(value).format('DD-MM-YYYY'); // Format the date
    }

    if (field === 'startTime') {
      value = dayjs(value).format('HH:mm'); // Format the date
    }

    if (field === 'endTime') {
      value = dayjs(value).format('HH:mm'); // Format the date
    }
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  // date: dayjs().format('DD-MM-YYYY'),
  // startTime: dayjs().format('HH:mm'),
  // endTime: dayjs().format('HH:mm'),

  const handleCheckIconClick = () => {
    const newRow = {
      topic: '',
      date: '',
      startTime: '',
      endTime: '',
      seat: 0,
      availableSeat: 0,
      office: '',
      address: '',
    };

    setRows([...rows, newRow]);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = rows.filter((row, i) => i !== index);
    setRows(updatedRows);
  };

console.log("Rows : ",rows);


const filterRows = rows.filter(item=>item.topic && item.date);

console.log("FilterDate : ", filterRows);


  return (
    <Box flex={9}>
      <Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Topic</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Start Time</TableCell>
                <TableCell>End Time</TableCell>
                <TableCell>Seat</TableCell>
                <TableCell>Available Seat</TableCell>
                <TableCell>Office</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField
                      value={row.topic}
                      onChange={(e) => handleRowChange(index, 'topic', e.target.value)}
                    />
                  </TableCell>
                
                  <TableCell>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker
    // value={row.date}
    onChange={(newDate) => handleRowChange(index, 'date', newDate)}
  />
</LocalizationProvider>
                  </TableCell>
                  <TableCell>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        label="Start Time"
                        value={row.startTime}
                        onChange={(newTime) => handleRowChange(index, 'startTime', newTime)}
                        viewRenderers={{
                          hours: renderTimeViewClock,
                          minutes: renderTimeViewClock,
                          seconds: renderTimeViewClock,
                        }}
                      />
                    </LocalizationProvider>
                  </TableCell>
                  <TableCell>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        label="End Time"
                        value={row.endTime}
                        onChange={(newTime) => handleRowChange(index, 'endTime', newTime)}
                        viewRenderers={{
                          hours: renderTimeViewClock,
                          minutes: renderTimeViewClock,
                          seconds: renderTimeViewClock,
                        }}
                      />
                    </LocalizationProvider>
                  </TableCell>

                
                  
                  <TableCell>
                    <TextField
                      value={row.seat}
                      onChange={(e) => handleRowChange(index, 'seat', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={row.availableSeat}
                      onChange={(e) => handleRowChange(index, 'availableSeat', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={row.office}
                      onChange={(e) => handleRowChange(index, 'office', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={row.address}
                      onChange={(e) => handleRowChange(index, 'address', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex' }}>
                      <CloseIcon onClick={() => handleDeleteRow(index)} />
                      <CheckIcon onClick={handleCheckIconClick} />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default TableDynamic;
