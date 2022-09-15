import { Stack, TextField } from "@mui/material";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const MuiDatePicker = ({ selectedDate, actions }) => {
  return (
    <Stack spacing={4}>
      <MobileDateTimePicker
        renderInput={(params) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue) =>
          actions.handleDateTimeChange(newValue.getTime())
        }
        className="datepicker"
        ampm={false}
        leftArrowIcon={<KeyboardArrowLeft />}
        rightArrowIcon={<KeyboardArrowRight />}
        inputFormat="dd/MM/yyy hh:mm:ss"
      />
    </Stack>
  );
};

export default MuiDatePicker;
