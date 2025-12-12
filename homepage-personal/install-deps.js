const { execSync } = require('child_process');
const path = require('path');

console.log('Starting npm install...');

try {
  // 获取当前目录
  const cwd = process.cwd();
  console.log(`Working directory: ${cwd}`);
  
  // 运行npm install命令
  const output = execSync('npm install', { cwd, encoding: 'utf8', stdio: 'inherit' });
  
  console.log('npm install completed successfully!');
  console.log(output);
} catch (error) {
  console.error('npm install failed:', error.message);
  process.exit(1);
}
