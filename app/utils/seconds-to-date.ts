export function secondsToDate(seconds?: number) {
  if (!seconds) {
    return;
  }

  return new Date(seconds * 1000).toISOString().slice(11, 19);
}
