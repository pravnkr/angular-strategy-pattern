import { interval, map, tap } from "rxjs";

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const messages = ['IncorrectUserNameOrPasswordMessage', 'SessionExpiredMessage'];

/**
 * Simple simulation for message producer transmitting message every second.
 */
export const produceMessage = () => {
  return interval(1000)
    .pipe(map(() => messages[getRandomInt(0, messages.length)]));
}
