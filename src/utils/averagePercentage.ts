export function AveragePercentage(value1: number, value2: number): string {
  const average = (value1 + value2) / 2;
  return `${average.toFixed(0)}%`;
}

export function PercentCardType(
  value1: number,
  value2: number
): "green" | "red" | "gray" {
  const averagePercentString = AveragePercentage(value1, value2);
  const averagePercentNumber = parseFloat(averagePercentString.slice(0, -1));

  return averagePercentNumber >= 50 ? "green" : "red";
}
