const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function commitSubmodule() {
  const submodulePath = path.join(__dirname, '../intranets-design-system/');
  
  try {
    // Vérifier si le dossier existe
    if (!fs.existsSync(submodulePath)) {
      console.error('❌ Le dossier du submodule n\'existe pas.');
      process.exit(1);
    }

    // Vérifier s'il y a des changements
    const status = execSync('git status --porcelain', { 
      cwd: submodulePath,
      encoding: 'utf8' 
    });

    if (!status.trim()) {
      console.log('✅ Aucun changement détecté dans le submodule.');
      return;
    }

    console.log('📦 Changements détectés:');
    console.log(status);

    // Ajouter tous les fichiers
    execSync('git add .', { 
      cwd: submodulePath,
      stdio: 'inherit'
    });

    // Faire le commit
    const commitMessage = process.argv[2] || `Update documentation - ${new Date().toISOString().split('T')[0]}`;
    execSync(`git commit -m "${commitMessage}"`, { 
      cwd: submodulePath,
      stdio: 'inherit'
    });

    // Pousser les changements
    console.log('🚀 Pushing changes to remote...');
    execSync('git push origin main', { 
      cwd: submodulePath,
      stdio: 'inherit'
    });

    console.log('✅ Submodule commité et poussé avec succès !');

    // Mettre à jour la référence du submodule dans le projet parent
    console.log('🔄 Mise à jour de la référence du submodule...');
    execSync('git add intranets-design-system', { 
      cwd: path.dirname(submodulePath),
      stdio: 'inherit'
    });

  } catch (error) {
    console.error('❌ Erreur lors du commit du submodule:', error.message);
    process.exit(1);
  }
}

commitSubmodule();