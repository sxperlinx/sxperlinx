#!/usr/bin/env node
import { run } from './util.mjs';

const tasks = [
	{
		msg: 'Formatting code...',
		cmd: 'prettier --write .',
	},
	{
		msg: 'Linting code...',
		cmd: 'eslint . --fix',
	},
	{
		msg: 'Starting development server...',
		cmd: 'next dev --turbopack',
	},
];

run(tasks);