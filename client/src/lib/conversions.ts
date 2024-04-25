export function dateToString(runDate: string) {
  const splitRunDate = runDate.split('-');
  const date = new Date(
    +splitRunDate[0],
    +splitRunDate[1] - 1,
    +splitRunDate[2]
  );
  return date.toDateString();
}

export function minutesToHours(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const time =
    String(mins).length < 2 ? `${hours}:0${mins}` : `${hours}:${mins}`;
  return time;
}
