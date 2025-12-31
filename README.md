# 🏥 Cabinet Médical Missour - Site Web Premium

Bienvenue sur le code source du site web du **Cabinet Médical Missour**. Ce projet a été conçu pour offrir une expérience utilisateur moderne, fluide et professionnelle, reflétant l'excellence médicale du cabinet.

## 🌟 Aperçu du Projet
Ce site est une vitrine numérique "Full Responsive" (adaptée aux mobiles et ordinateurs) utilisant une esthétique **"Medical Futurism"**. Il se distingue par l'utilisation de transparences (Glassmorphism), d'arrière-plans immersifs et d'une navigation simplifiée inspirée des applications mobiles.

### Fonctionnalités Clés
-   **Design Immersif** : Chaque page possède son propre arrière-plan thématique plein écran qui reste fixe au défilement (effet Parallax).
-   **Interface "Glass"** : Les cartes de contenu et la navigation utilisent un effet de verre dépoli premium pour une lisibilité parfaite.
-   **Actions Rapides** : Accès immédiat aux **Urgences**, **Rendez-vous** et **Localisation** dès la page d'accueil via une grille interactive.
-   **Navigation Unifiée** : Une barre de navigation constante et intuitive sur toutes les pages, optimisée pour le tactile sur mobile.
-   **Animations Fluides** : Les éléments apparaissent doucement lors du défilement (grâce à la librairie AOS).
-   **Performance Mobile** : Optimisé pour charger rapidement et défiler sans accroc sur les smartphones (iOS & Android).

---

## 📂 Structure des Fichiers

Voici l'organisation du projet pour vous aider à vous repérer :

-   **`index.html`** : **Page d'Accueil**. Contient la grille d'actions rapides et la présentation générale.
-   **`services.html`** : **Nos Services**. Détaille les prestations (Consultation, ECG, Échographie, etc.).
-   **`about.html`** : **Le Docteur**. Présente le Dr. Missour, l'équipe et l'histoire du cabinet.
-   **`contact.html`** : **Contact**. Affiche les coordonnées, la carte, les horaires et le bouton d'appel.
-   **`style.css`** : **Styles Visuels**. Le cœur du design. Contient les règles pour le Glassmorphism, les arrière-plans, et les ajustements personnalisés.
-   **`script.js`** : **Interactivité**. Gère le menu mobile (ouverture/fermeture) et les effets de défilement de l'en-tête.
-   **`assets/`** : (Dossier recommandé) Pour stocker vos images locales comme le logo ou les photos du cabinet.

---

## 🛠 Technologies Utilisées

Ce projet est construit avec des technologies standards, robustes et faciles à maintenir :

1.  **HTML5** : Structure sémantique et accessible.
2.  **Tailwind CSS (CDN)** : Framework CSS pour la mise en page rapide et le responsive design (via `<script src="cdn.tailwindcss...">`).
3.  **CSS3 Moderne** : Utilisé pour les variables, le `backdrop-filter` (flou), et les gradients.
4.  **JavaScript (Vanilla)** : Pas de framework lourd (React/Vue) pour garantir une vitesse maximale.
5.  **Lucide Icons** : Bibliothèque d'icônes vectorielles légères et nettes.
6.  **AOS (Animate On Scroll)** : Pour les animations d'entrée.
7.  **Google Fonts** : Police **"Outfit"** pour un look moderne et clean.

---

## ⚙️ Guide de Personnalisation

### Changer les Textes
Ouvrez simplement les fichiers `.html` (`index.html`, etc.) avec un éditeur de texte (comme VS Code ou Notepad++) et modifiez le texte entre les balises.

### Changer les Images d'Arrière-Plan
Les images de fond sont définies dans `style.css`. Cherchez les classes commençant par `body.bg-...` :

```css
/* Exemple dans style.css */
body.bg-home {
    background-image: linear-gradient(...), url('VOTRE_LIEN_IMAGE_ICI');
}
```
Remplacez l'URL par le lien de votre nouvelle image.

### Changer le Logo
Dans chaque fichier HTML, recherchez la balise `<img>` dans le `<header>` et changez la source :
```html
<img src="CHEMIN/VERS/VOTRE_LOGO.png" alt="Logo">
```

---

## 🚀 Mise en Ligne (Déploiement)

Ce site est **"Statique"**, ce qui le rend très facile à héberger gratuitement et sans maintenance complexe.

1.  **Vercel / Netlify (Recommandé)** :
    -   Créez un compte sur [Vercel](https://vercel.com) ou [Netlify](https://netlify.com).
    -   Faites glisser le dossier de votre projet.
    -   Le site est en ligne en quelques secondes !

2.  **Hébergement Classique (cPanel/FTP)** :
    -   Envoyez simplement tous les fichiers (`.html`, `.css`, `.js`, images) dans le dossier `public_html` de votre hébergeur.

---

*Conçu pour l'excellence médicale.* 🏥
