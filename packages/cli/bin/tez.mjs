#!/usr/bin/env node
import('../dist/cli.mjs').then(r => (r.default || r).main())
