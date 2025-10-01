/* Script de mise à jour du submodule */
const { execSync } = require('child_process');
const fs = require('fs-extra'); // Utiliser fs-extra pour plus de fonctionnalités
const path = require('path');

updateSubmodule();

function updateSubmodule() {
  const submodulePath = path.join(__dirname, '../intranets-design-system/');
  
  try {
    // Vérifier si le dossier existe
    if (!fs.existsSync(submodulePath)) {
      console.error('❌ Le dossier du submodule n\'existe pas. Veuillez exécuter d\'abord le script prepare-submodule.js');
      process.exit(1);
    }

    // Copier le fichier ids.package.json avec vérification
    const sourcePackageJson = path.join(__dirname, '../ids.package.json');
    const targetPackageJson = path.join(submodulePath, 'package.json');
    
    if (!fs.existsSync(sourcePackageJson)) {
      console.error('❌ Fichier ids.package.json introuvable');
      process.exit(1);
    }

    fs.copyFileSync(sourcePackageJson, targetPackageJson);
    console.log('✅ Fichier ids.package.json copié dans le dossier du submodule.');

    // Vérifier que c'est bien un repository git
    const gitPath = path.join(submodulePath, '.git');
    if (!fs.existsSync(gitPath)) {
      console.error('❌ Le dossier n\'est pas un repository Git valide');
      process.exit(1);
    }

    // Mettre à jour le submodule
    console.log('🔄 Mise à jour du submodule...');
    execSync('git submodule update --remote', { 
      cwd: path.dirname(submodulePath), // Se placer dans le dossier parent du submodule
      stdio: 'inherit' // Afficher la sortie en direct
    });
    
    console.log('✅ Submodule mis à jour avec succès !');

  } catch (error) {
    console.error('❌ Erreur lors de la mise à jour du submodule:', error.message);
    process.exit(1);
  }
}