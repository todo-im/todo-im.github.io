import { default as page } from './lib/page.mjs';

import * as user from './data/user.js';
import * as requester from './data/api.js';

window.requester = requester;
window.user = user;
