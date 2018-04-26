'use strict';

import { registerLanguage } from '../_.contribution';

// Allow for running under nodejs/requirejs in tests
const _monaco: typeof monaco = (typeof monaco === 'undefined' ? (<any>self).monaco : monaco);

registerLanguage({
	id: 'nim',
	extensions: ['.nim'],
	aliases: ['Nim', 'nim'],
	loader: () => _monaco.Promise.wrap(import('./nim'))
});
