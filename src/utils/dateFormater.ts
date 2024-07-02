export function formatDate(date: string): string {
  const dateParts = date.split("/");

  const formattedDate = `${dateParts[0].padStart(
    2,
    "0"
  )}.${dateParts[1].padStart(2, "0")}.${dateParts[2].slice(-2)}`;

  return formattedDate;
}
