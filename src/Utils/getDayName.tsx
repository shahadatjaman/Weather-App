const getDayName = (dateString: string) => {
  const daysOfWeek = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
  const date = new Date(dateString);
  const dayIndex = date.getDay();
  const dayName = daysOfWeek[dayIndex];
  return dayName;
};

export default getDayName;
