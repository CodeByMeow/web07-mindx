import moment from "moment";

export const isSame = (granularity) => {
  return (time1, time2) => {
    return moment(time1).isSame(time2, granularity);
  };
};
