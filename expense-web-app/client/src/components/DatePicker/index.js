import { Stack, TextField } from "@mui/material";
import { MobileDateTimePicker } from "@mui/x-date-pickers";

const MuiDatePicker = ({ selectedDate, actions }) => {
  return (
    <Stack spacing={4}>
      <MobileDateTimePicker
        label="Date Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue) =>
          actions.handleDateTimeChange(newValue.getTime())
        }
        className="datepicker"
        ampm={false}
      />
    </Stack>
  );
};

export default MuiDatePicker;
