import { generateTheme } from './core';

(async () => {
	await generateTheme({ name: 'Crappy Night', type: 'dark' });
	await generateTheme({ name: 'Crappy Daylight', type: 'light' });
})();
