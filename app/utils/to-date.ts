export default function toDate(dateStr: string) {
  const dateInfo = new Date(dateStr);

  return (
    dateInfo.getDate() +
    " / " +
    dateInfo.getMonth() +
    " / " +
    dateInfo.getFullYear() +
    " / "
  );
}
