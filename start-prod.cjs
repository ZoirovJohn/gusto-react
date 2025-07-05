const { spawn } = require('child_process');

const child = spawn('npm', ['run', 'start:prod'], {
  stdio: 'inherit',
  shell: true
});

child.on('close', (code) => {
  console.log(`Process exited with code ${code}`);
});