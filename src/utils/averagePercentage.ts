export function AveragePercentage(
  greenCount: number,
  redCount: number
): string {
  const totalCount = greenCount + redCount;
  if (totalCount === 0) return "0%";
  const greenPercentage = (greenCount / totalCount) * 100;
  const redPercentage = (redCount / totalCount) * 100;
  const highestPercentage = Math.max(greenPercentage, redPercentage);
  return `${highestPercentage.toFixed(0)}%`;
}
export function PercentCardType(
  greenCount: number,
  redCount: number
): "green" | "red" | "gray" {
  const totalCount = greenCount + redCount;
  if (totalCount === 0) return "gray";
  const greenPercentage = (greenCount / totalCount) * 100;
  const redPercentage = (redCount / totalCount) * 100;
  if (greenPercentage > redPercentage) return "green";
  else if (redPercentage > greenPercentage) return "red";
  else return "gray";
}
