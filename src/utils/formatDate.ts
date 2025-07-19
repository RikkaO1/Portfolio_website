export const formatDate = (dateString: string): string => {
  const [day, month, year] = dateString.split("/").map(Number);
  const thaiMonths = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  return `${day} ${thaiMonths[month - 1]} ${year}`;
};

export const formatDateRange = (dateRange: string): string => {
  return dateRange
    .split(" - ")
    .map((date) => formatDate(date))
    .join(" - ");
};
