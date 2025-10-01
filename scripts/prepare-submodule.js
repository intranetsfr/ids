const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function prepareSubmodule() {
  const submodulePath = path.join(__dirname, '../intranets-design-system/');
  const gitUrl = 'https://github.com/intranetsfr/intranets-design-system'; // Remplacez par l'URL réelle
  
  try {
    // Vérifier si le dossier existe
    if (!fs.existsSync(submodulePath)) {
      console.log('Création du dossier pour le submodule...');
      fs.mkdirSync(submodulePath, { recursive: true });
    }
    
    // Vérifier si c'est déjà un repository Git
    const gitDir = path.join(submodulePath, '.git');
    if (!fs.existsSync(gitDir)) {
      console.log('Initialisation du repository Git...');
      execSync('git init', { cwd: submodulePath });
      
      // Ajouter le remote
      console.log('Ajout du remote...');
      execSync(`git remote add origin ${gitUrl}`, { cwd: submodulePath });
      
      console.log('Submodule préparé avec succès !');
      console.log(`N'oubliez pas de :`);
      console.log(`1. Créer le repository ${gitUrl}`);
      console.log(`2. Faire un premier commit et push depuis le dossier intranets-design-system`);
    } else {
      console.log('Le dossier est déjà un repository Git');
    }
    
  } catch (error) {
    console.error('Erreur lors de la préparation du submodule:', error.message);
  }
}

prepareSubmodule();