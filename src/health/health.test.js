import { getHealthStatus } from "./health";

test('should return healthy when health is more than 50', () => {
    const result = getHealthStatus({name: 'Маг', health: 90 });
    expect(result).toBe('healthy');
});

test('should return wounded when health is between 15 and 50', () => {
    const result = getHealthStatus({name: 'Воин', health: 30 });
    expect(result).toBe('wounded');
});

test('should return wounded when health is between 15 and 50', () => {
    const result = getHealthStatus({name: 'Лучник', health: 10 });
    expect(result).toBe('critical');
});