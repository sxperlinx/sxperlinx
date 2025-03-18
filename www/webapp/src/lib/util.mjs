import { execSync } from 'child_process';

/**
 * 
 * @param {{ msg: string, cmd: string }[]} tasks 
 */
function run(tasks) {
  try {
    console.log('=== Running tasks ===');
    tasks.forEach(({ msg, cmd }) => {
      console.log(`::> ${msg}`);
      execSync(cmd, { stdio: 'inherit' });
    });
  } catch (err) {
    console.error(`Error: ${err.message}`);
    throw err;
  }
}

export { run };