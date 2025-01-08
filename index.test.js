const { fromUTC } = require('./index'); // Adjust the path if needed
const moment = require('moment-timezone');

describe('fromUTC', () => {
  test('should convert ISO time to default timezone (Asia/Kuala_Lumpur)', () => {
    const inputTime = "2025-01-06T10:00:00Z";
    const result = fromUTC(inputTime);
    expect(result.format()).toBe(moment.tz(inputTime, "Asia/Kuala_Lumpur").format());
  });

  test('should convert ISO time to specified timezone (Europe/Rome)', () => {
    const inputTime = "2025-01-06T10:00:00Z";
    const result = fromUTC(inputTime, "Europe/Rome");
    expect(result.format()).toBe(moment.tz(inputTime, "Europe/Rome").format());
  });

  test('should convert Unix timestamp to default timezone (Asia/Kuala_Lumpur)', () => {
    const inputTime = 1673008800000; // Example timestamp
    const result = fromUTC(inputTime);
    expect(result.format()).toBe(moment.tz(inputTime, 'UTC').tz("Asia/Kuala_Lumpur").format());
  });

  test('should handle null or invalid input gracefully', () => {
    expect(() => fromUTC(null)).toThrow();
    expect(() => fromUTC(undefined)).toThrow();
    expect(() => fromUTC("Invalid Time")).toThrow();
  });

  test('should handle time without "T" in string by adding 8 hours for default timezone', () => {
    const inputTime = "2025-01-06";
    const result = fromUTC(inputTime);
    const expected = moment.tz(inputTime, 'UTC').tz("Asia/Kuala_Lumpur").format();
    expect(result.format()).toBe(expected);
  });
});
