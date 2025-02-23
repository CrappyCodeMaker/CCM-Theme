import { FancyText } from '../fancyText';
import { ERROR_HEADER } from './utils';

const validateArgs = (dark: boolean, light: boolean, test: boolean) => {
	const { red, black, blackBG, white, whiteBG } = FancyText;

	if (dark && light) {
		console.log(`${ERROR_HEADER} ${red('Please specify only one theme type:')} ${blackBG(white('--dark')) || whiteBG(black('--light'))}\n`);
		process.exit();
	}
	if (!dark && !light && test) {
		console.log(`${ERROR_HEADER} ${red('Please specify a theme type:')} ${blackBG(white('--dark')) || whiteBG(black('--light'))}\n`);
		process.exit();
	}
};

export const parseCLIArgs = () => {
	const args = process.argv.slice(2);
	const darkFlag = args.includes('--dark');
	const lightFlag = args.includes('--light');
	const testMode = args.includes('--test');
	const testUnsetMode = args.includes('--test-unset');

	const generateDark = darkFlag && !lightFlag;
	const generateLight = lightFlag && !darkFlag;
	const generateBoth = !darkFlag && !lightFlag;

	validateArgs(darkFlag, lightFlag, testMode || testUnsetMode);

	return { generateDark, generateLight, generateBoth, testMode: testMode || testUnsetMode, testUnsetMode };
};
