export const formatTimestamp = (timestamp) => {
  const now = new Date();
  const targetDate = new Date(timestamp);

  // Calculate the time difference in milliseconds
  const timeDifference = now - targetDate;

  // Convert milliseconds to hours
  const hoursDifference = timeDifference / (1000 * 60 * 60);

  if (hoursDifference < 24) {
    // If the timestamp is less than 24 hours ago, return the time
    return targetDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  } else {
    // If the timestamp is 24 hours or more ago, return the formatted date
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      month: "short",
      day: "numeric",
      hour12: false,
    };
    return targetDate.toLocaleDateString([], options);
  }
};
