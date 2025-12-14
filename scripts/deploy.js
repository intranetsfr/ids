const { execSync } = require('child_process');

function deploy() {
  try {
    console.log('🏗️  Building project...');
    execSync('npm run build:all', { stdio: 'inherit' });

    console.log('📚 Updating documentation submodule...');
    execSync('npm run update:submodule', { stdio: 'inherit' });

    console.log('💾 Committing submodule changes...');
    const commitMessage = process.argv[2] || `Deploy documentation - ${new Date().toISOString()}`;
    execSync(`npm run commit:submodule "${commitMessage}"`, { stdio: 'inherit' });

    console.log('🔄 Updating main project...');
    execSync('git add intranets-design-system', { stdio: 'inherit' });
    execSync(`git commit -m "Update submodule reference"`, { stdio: 'inherit' });
    execSync('git push origin main', { stdio: 'inherit' });

    console.log('✅ Déploiement terminé avec succès !');
  } catch (error) {
    console.error('❌ Erreur lors du déploiement:', error.message);
    process.exit(1);
  }
}

deploy();