#!/usr/bin/env node
/* eslint-disable no-console */
'use strict';
import('./dist/cli.mjs').then(r => (r.default || r).main())
