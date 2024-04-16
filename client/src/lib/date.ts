export function dateToString(runDate: string) {
  const splitRunDate = runDate.split('-');
  const date = new Date(
    +splitRunDate[0],
    +splitRunDate[1] - 1,
    +splitRunDate[2]
  );
  return date.toDateString();
}
