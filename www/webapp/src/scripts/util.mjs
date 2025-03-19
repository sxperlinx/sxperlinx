import { execSync } from 'child_process';

/**
 *
 * @param {{msg:string,cmd:string}[]} tasks
 */
export function run(tasks) {
	try {
		console.log('::: Running tasks :::');

		if (tasks instanceof Array) {
			tasks.forEach((task) => {
				runTask(task);
			});
		} else {
			runTask(tasks);
		}
	} catch (err) {
		console.error('-:> Error running task:', err);
		throw err;
	}
}

/**
 * 
 * @param {{msg:string,cmd:string}} task 
 */
function runTask(task) {
	console.log(`::> ${task.msg}`);
	execSync(task.cmd, { stdio: 'inherit' });
}
