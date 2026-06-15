const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const CORRECT_PASSWORD = 'Smartmedia1776!?';
const MAX_ATTEMPTS = 3;
let attempts = 0;

function askForPassword() {
  process.stdout.write('🔐 Enter password to access repository: ');
  
  // Hide password input
  process.stdin.setRawMode(true);
  process.stdin.resume();
  
  let password = '';
  
  const dataHandler = (char) => {
    char = char.toString();
    
    if (char === '\n' || char === '\r' || char === '\u0004') {
      process.stdin.setRawMode(false);
      process.stdin.pause();
      process.stdin.removeListener('data', dataHandler);
      console.log(); // New line after hidden input
      
      attempts++;
      
      if (password === CORRECT_PASSWORD) {
        console.log('\n✅ Password Correct! Access Granted!\n');
        grantRepositoryAccess();
      } else if (attempts < MAX_ATTEMPTS) {
        console.log(`❌ Incorrect password. Attempts remaining: ${MAX_ATTEMPTS - attempts}\n`);
        askForPassword();
      } else {
        console.log('❌ Maximum attempts exceeded. Access denied.\n');
        rl.close();
        process.exit(1);
      }
    } else if (char === '\u0003') {
      process.exit();
    } else if (char === '\u007f') { // Backspace
      password = password.slice(0, -1);
      process.stdout.write('\b \b');
    } else {
      password += char;
      process.stdout.write('*');
    }
  };
  
  process.stdin.on('data', dataHandler);
}

function grantRepositoryAccess() {
  const currentDir = process.cwd();
  
  try {
    console.log('📂 REPOSITORY ACCESS GRANTED');
    console.log('=====================================');
    console.log(`📍 Repository Path: ${currentDir}`);
    console.log('=====================================\n');
    
    console.log('📁 Repository Contents:\n');
    
    const files = fs.readdirSync(currentDir);
    let dirCount = 0;
    let fileCount = 0;
    
    files.forEach((file) => {
      const fullPath = path.join(currentDir, file);
      const stats = fs.statSync(fullPath);
      
      if (stats.isDirectory()) {
        console.log(`  📂 ${file}/`);
        dirCount++;
      } else {
        console.log(`  📄 ${file}`);
        fileCount++;
      }
    });
    
    console.log('\n=====================================');
    console.log(`📊 Summary: ${dirCount} folder(s), ${fileCount} file(s)`);
    console.log('=====================================\n');
    
    rl.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error accessing repository:', error.message);
    rl.close();
    process.exit(1);
  }
}

console.log('╔═══════════════════════════════════════╗');
console.log('║   REPOSITORY PASSWORD PROTECTION     ║');
console.log('╚═══════════════════════════════════════╝\n');

askForPassword();
