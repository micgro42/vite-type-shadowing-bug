import * as path from 'path';

import { createVuePlugin } from 'vite-plugin-vue2';
import envCompatible from 'vite-plugin-env-compatible';

export default {
	plugins: [
		createVuePlugin(),
		envCompatible(),
	],
	resolve: {
		alias: [
			{
				find: /^~/,
				replacement: ''
			},
			{
				find: '@',
				replacement: path.resolve( __dirname, './src' )
			}
		]
	},
};
