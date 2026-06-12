export const getBanglaTime = (dateString: string): string => {
  const date = new Date(dateString);
  const time = date.toLocaleTimeString("bn-BD", {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
    dayPeriod: "short",
    timeZone: "Asia/Dhaka",
  });

  //change রাত্রি to রাত
  if (time.includes("রাত্রি")) {
    return time.replace("রাত্রি", "রাত").split(" ").reverse().join(" ");
  }

  return time.split(" ").reverse().join(" ");
};
