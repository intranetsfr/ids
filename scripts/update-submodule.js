/*Script de mise à jour du submodule */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

updateSubmodule();

function updateSubmodule() {
  const submodulePath = path.join(__dirname, '../public/');
  //const submodulePath = path.join(__dirname, '../public/intranets-design-system'); --- IGNORE ---
    try {
    // Vérifier si le dossier existe
    if (!fs.existsSync(submodulePath)) {
      console.error('Le dossier du submodule n\'existe pas. Veuillez exécuter d\'abord le script prepare-submodule.js');
      return;
    }

    //copier le fichier ids.package.json dans le dossier public/intranets-design-system
    fs.copyFileSync(path.join(__dirname, '../ids.package.json'), path.join(submodulePath, 'package.json'));
    console.log('Fichier ids.package.json copié dans le dossier du submodule.');

    // Mettre à jour le submodule
    console.log('Mise à jour du submodule...');
    execSync('git submodule update --remote', { cwd: submodulePath });
    console.log('Submodule mis à jour avec succès !');
  } catch (error) {
    console.error('Erreur lors de la mise à jour du submodule:', error.message);
  }
}
