const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getMonth = (date) => {
  const d = new Date(date);
  let month = months[d.getMonth()];
  return month;
};

export const getDate = (date) => {
  const d = new Date(date);
  const day = d.getDate();
  return day;
};
