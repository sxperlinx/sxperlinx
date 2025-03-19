#!/usr/bin/env node

const tasks = [
	{
		msg: 'Starting Containers',
		cmd: 'docker compose -f ../../../../compose.prod.yml up',
	},
];

run(tasks);