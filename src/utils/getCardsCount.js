import useWindowWidth from '../hooks/getWindowWidth';

export function GetCardsCount() {
  if (useWindowWidth() > 480) {
    return 7;
  }
  return 5;
}

export function GetLoadingCardsCount() {
  if (useWindowWidth() > 480) {
    return 7;
  }
  return 5;
}
