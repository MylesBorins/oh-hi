import { equal } from 'assert';

import { greet } from './index.js';

equal(typeof greet(), 'string', 'greeting should return a string');
