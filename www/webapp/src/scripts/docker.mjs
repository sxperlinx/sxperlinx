#!/usr/bin/env node
import { run } from "./util.mjs";

const tasks = [
  { msg: 'Build Webapp Container', cmd: 'exit 0' }
];

run(tasks);