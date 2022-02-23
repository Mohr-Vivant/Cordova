# Cordova
Pour faire fonctionner le projet Cordova il faut télécharger et décompresser la fichier .rar de ce répertoire et les déposer dans un dossier qui servira à contenir le projet,
il manquera alors 2 choses :
- Les librairies, qui sont bien trop volumineuses pour être déposées sur github mais qui sont téléchargeables avec la commande "npm install" qui créera le doosier node_module
- Les plateformes sur lesquelles le projet peut être lancé, obtenue avec les commandes "cordova platform add browser" pour avoir l'appli sur web ou
"cordova platform add android" pour l'avoir sur Android. Il faudra alors utiliser la commande "cordova run browser" (ou "android") pour démarrer l'appli.
/!\ il faut être situé dans le dossier contenant votre application avant d'utiliser ces commandes pour qu'elles fonctionnent /!\
PS : ces commandes fonctionnent aussi sur l'invite de commande de base de Windows (c'est celui que j'ai moi-même utilisé)
