import { initializeTimes, updateTimes } from './Main';

// Mock the global fetchAPI function, since it's normally loaded
// via a <script> tag in index.html and isn't available in tests
beforeEach(() => {
  global.fetchAPI = jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('initializeTimes returns a non-empty array of times', () => {
  const result = initializeTimes();
  expect(result.length).toBeGreaterThan(0);
});

test('updateTimes returns a non-empty array of times for a selected date', () => {
  const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const action = '2026-08-10'; // a pre-selected date, as dispatched from BookingForm
  const result = updateTimes(currentState, action);
  expect(result.length).toBeGreaterThan(0);
});