export const getCurrentDayName = () => {
  const daysOfWeek = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
  const date = new Date();
  const dayIndex = date.getDay();
  const dayName = daysOfWeek[dayIndex];
  return dayName;
};
