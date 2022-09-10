import { Stack, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";

const MuiDatePicker = ({ selectedDate, actions }) => {
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DateTimePicker
        label="Date Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue) =>
          actions.handleDateTimeChange(newValue.getTime())
        }
      />
    </Stack>
  );
};

export default MuiDatePicker;
