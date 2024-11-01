import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils functions', () => {
    test('getFullYear returns the correct year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });

    test('getFooterCopy returns the correct string', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
        expect(getFooterCopy(false)).toBe('All rights reserved');
    });

    test('getLatestNotification returns the correct string', () => {
        const notification = {
            type: 'default',
            value: 'New course available',
        };
        expect(getLatestNotification()).toBe(notification.value);
    });
});
