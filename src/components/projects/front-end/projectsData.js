const HobbiesImg = require('../../../assets/Images/Hobbies.png')
const Hangman = require('../../../assets/Images/screenshots/hangman.png')
const Catfacts = require('../../../assets/Images/screenshots/catfacts.png')

const projectData = [

    {
        projectUrl: 'https://la-france.netlify.app/',
        img: 'https://d33wubrfki0l68.cloudfront.net/60a13142a9d4862aea1f5fcb/screenshot_2021-05-16-14-50-57-0000.png',
        projectName: 'La France',
        projectHeadline: 'Mon premier projet personnel',
        projectInfo: "L'information des départements de France",
        tools: ['HTML', 'CSS', 'JavaScript'],
        date: 'Décembre / 2020',
        githubUrl: 'https://github.com/amirhatam/la-france.io'
    },
    {
        projectUrl: 'https://hobbies-leisure.netlify.app/',
        img: ` ${HobbiesImg.default}`,
        projectName: 'Hobbies & Leisure',
        projectHeadline: "Projet personnel d'algorithmique",
        projectInfo: 'Différent Calculatrices et jeux vidéos',
        tools: ['MDBReact', 'API (Dictionary API)', 'Material-UI'],
        date: 'Mars / 2022',
        githubUrl: 'https://github.com/amirhatam/loisir'
    },
    {
        projectUrl: 'https://the-cat-facts.netlify.app/',
        img: ` ${Catfacts.default}`,
        projectName: 'The Cat Facts',
        projectHeadline: "Un challenge technique d'utilisation les différents types d'Api",
        projectInfo: "Une plateforme d'information tout sur les chats",
        tools: ['MDBReact', 'API (The Cat API, CatFact)'],
        date: 'Mai / 2022',
        githubUrl: 'https://github.com/amirhatam/cat-fact'
    },
    {
        projectUrl: 'https://concert-max-richter.netlify.app/',
        img: 'https://d33wubrfki0l68.cloudfront.net/60b28a502f3747f62ffcdd30/screenshot_2021-05-29-18-40-49-0000.png',
        projectName: 'Un Événement Musicaux',
        projectHeadline: "Projet personnel E-marketing",
        projectInfo: "L'information d'un événement consert de Max Richter",
        tools: ['React.JS', 'Material-UI'],
        date: 'May / 2021',
        githubUrl: 'https://github.com/amirhatam/concert-max-richter'
    },
    {
        projectUrl: 'https://game-the-hangman.netlify.app/',
        img: `${Hangman.default}`,
        projectName: 'Jeu du Pendu',
        projectHeadline: 'Projet personnel Jeu vidéo',
        projectInfo: 'Trouver un mot en devinant les lettres qui le composent',
        tools: ['MDBReact', 'API (The Movie Database)', 'Material-UI'],
        date: 'Mars / 2022',
        githubUrl: 'https://github.com/amirhatam/game-hangman'
    },
    {
        projectUrl: 'https://search-info-country.netlify.app/',
        img: 'https://d33wubrfki0l68.cloudfront.net/60b2bab149cc9c0007331bdf/screenshot_2021-05-29-22-06-06-0000.png',
        projectName: 'The Countries',
        projectHeadline: 'Projet personnel',
        projectInfo: 'Images et informations de tous les pays du Monde',
        tools: ['MDBReact', 'API (The Countries & Images Database)', 'Material-UI'],
        date: 'Décembre / 2021',
        githubUrl: 'https://github.com/amirhatam/country'
    },
    {
        projectUrl: 'https://bakery-shop-react.netlify.app/',
        img: 'https://d33wubrfki0l68.cloudfront.net/60a6a42af92d67008edc9e14/screenshot_2021-05-20-18-03-36-0000.png',
        projectName: 'The Bakery',
        projectHeadline: 'Projet E-Shop pendant la formation',
        projectInfo: "D'achat des produits boulangerie",
        tools: ['React.JS'],
        date: 'Juin / 2021',
        githubUrl: 'https://github.com/amirhatam/bakery'
    },
    {
        projectUrl: 'https://movies-m-d.netlify.app/',
        img: 'https://d33wubrfki0l68.cloudfront.net/60acf265616b8d0008e71441/screenshot_2021-05-25-12-50-11-0000.png',
        projectName: 'The Movies',
        projectHeadline: 'Projet personnel Cinématographiques',
        projectInfo: 'Informations tous les films au cinéma en ce moment et ancien',
        tools: ['MDBReact', 'API (The Movie Database)'],
        date: 'May / 2021',
        githubUrl: 'https://github.com/amirhatam/moviedb'
    },
    {
        projectUrl: 'https://jeu-petit-chevaux.netlify.app/',
        img: 'https://d33wubrfki0l68.cloudfront.net/6087c4360e649bc91214af86/screenshot_2021-04-27-08-00-32-0000.png',
        projectName: 'Des Petits Chevaux',
        projectHeadline: 'Projet de groupe pendant la formation',
        projectInfo: 'Jeu des Petits Chevaux. Nombre de joueurs : 2',
        tools: ['React.JS'],
        date: 'Avril / 2021',
        githubUrl: 'https://github.com/amirhatam/petits'
    },
]

module.exports = projectData
