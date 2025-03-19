#!/usr/bin/env node

const tasks = [
	{
		msg: 'Starting Containers',
		cmd: 'docker compose -f ../../../../compose.dev.yml up',
	},
];

run(tasks);