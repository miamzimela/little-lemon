import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns the expected default times', () => {
  const result = initializeTimes();
  expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns the same available times regardless of state', () => {
  const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const action = '2026-08-10'; // an example selected date
  const result = updateTimes(currentState, action);
  expect(result).toEqual(currentState);
});