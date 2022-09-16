import moment from "moment";

export const isSame = (granularity) => {
  return (time1, time2) => {
    return moment(time1).isSame(time2, granularity);
  };
};

export const isToday = (time) => {
  return isSame("day")(time, new Date());
};

export const isYesterday = (time) => {
  const yesterday = moment().subtract(1, "day");
  return isSame("day")(time, yesterday);
};
