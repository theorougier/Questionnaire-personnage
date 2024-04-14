const questions = [
    {
        text: "Quel environnement préférez-vous ?",
        options: ["Nature sauvage, exploration", "Ville, vie quotidienne avec une touche surnaturelle", "Post-apocalyptique, survie", "Royaume fantastique, quête héroïque", "Autres mondes, aventures spatiales ou dimensionnelles", "Urbain, action intense"],
        points: ["Aloy,Lara Croft,Link", "Maxine,Alex,Miles Morales", "Ellie,Abby,Joel", "Zelda,Ganondorf,Duke Nukem", "Jade,Yu & Kay", "Doomfist,Ana,Chris Redfield"],
    },
    {
        text: "Qu'est-ce qui vous motive le plus ?",
        options: ["Résoudre des mystères, découvrir des secrets", "Faire face à des défis physiques, explorer", "Protéger les autres, faire preuve de courage", "Chercher l'aventure, ne jamais s'ennuyer", "Réaliser une quête personnelle, surmonter des obstacles internes", "Jouir de la vie, s'amuser"],
        points: ["Maxine,Alex,Jade", "Aloy,Lara Croft,Nathan Drake", "Ellie,Abby,Chris Redfield", "Mario,Link,Duke Nukem", "Celeste,Miles Morales", "Peach,Ganondorf,Gragas"],
    },
    {
        text: "Comment réagissez-vous face au danger ?",
        options: ["Avec intelligence et ruse", "En utilisant la force brute ou le combat", "En trouvant des solutions créatives", "En prenant des décisions stratégiques", "En fuyant ou en évitant le conflit", "En affrontant courageusement, peu importe les risques"],
        points: ["Link,Zelda,Ada Wong", "Abby,Doomfist,Gragas", "Maxine,Alex,Yu & Kay", "Ana,Miss Fortune,Nathan Drake", "Peach,Bob,Jade", "Ellie,Mario,Chris Redfield"],
    },
    {
        text: "Quel est votre style de résolution de problèmes ?",
        options: ["Tactique et planifié", "Improvisé et adaptable", "Direct et confrontant", "Pacifique et diplomatique", "Analytique et technique", "Je ne me prends pas la tête, je fonce"],
        points: ["Ana,Chris Redfield,Zelda", "Miles Morales,Nathan Drake,Maxine", "Ellie,Abby,Duke Nukem", "Peach,Yu & Kay,Jade", "Aloy,Lara Croft,Ada Wong", "Mario,Doomfist,Gragas"],
    },
    {
        text: "Quelle valeur vous représente le mieux ?",
        options: ["Justice", "Liberté", "Loyauté", "Curiosité", "Plaisir", "Courage"],
        points: ["Ellie,Chris Redfield,Link", "Aloy,Nathan Drake,Miles Morales", "Abby,Ana,Zelda", "Maxine,Alex,Jade", "Peach,Ganondorf,Gragas", "Mario,Lara Croft,Duke Nukem"],
    },
    {
        text: "Quelle est votre approche dans les relations ?",
        options: ["Protecteur/trice envers ceux que j'aime", "Ouvert/e et amical/e, facile à se lier d'amitié", "Indépendant/e, mais formant des alliances stratégiques", "Mystérieux/se, parfois distant/e mais profondément loyal/e", "Charismatique, aimant être le centre d'attention", "Empathique, toujours prêt/e à écouter et aider"],
        points: ["Ellie,Abby,Chris Redfield", "Peach,Mario,Yu & Kay", "Aloy,Lara Croft,Link", "Zelda,Ada Wong,Miss Fortune", "Duke Nukem,Gragas,Doomfist", "Maxine,Alex,Ana"],
    }
];

const characterDescriptions = {
    "Aloy": {
        description: "Chasseuse agile et curieuse, explorant un monde post-apocalyptique dominé par des machines.",
        jeux: "Horizon Zero Dawn / Horizon Forbidden West",
        image: "./assets/IMG_0240.jpeg"
    },
    "Lara Croft": {
        description: "Archéologue intrépide, spécialiste en survie, qui explore des tombes dangereuses.",
        jeux: "Tomb Raider",
        image: "./assets/b5b337443e87208010bec4a9fba882d9.jpg"
    },
    "Link": {
        description: "Héros courageux du temps, destiné à sauver Hyrule et la princesse Zelda.",
        jeux: "The Legend of Zelda",
        image: "./assets/1807834.jpg"
    },
    "Maxine": {
        description: "Lycéenne artistique avec le pouvoir de remonter le temps, confrontée à des choix difficiles.",
        jeux: "Life is Strange",
        image: "./assets/Maxine-0.jpg"
    },
    "Alex": {
        description: "Personnage empathique avec le pouvoir de ressentir et manipuler les émotions des autres.",
        jeux: "Life is Strange: True Colors",
        image: "./assets/alex-chen-est-la-nouvelle-heroine-de-la-serie-life-is-strange-c-square-e-960x640.jpg"
    },
    "Ellie": {
        description: "Survivante dans un monde post-apocalyptique, confrontée à des choix moraux difficiles.",
        jeux: "The Last of Us / The Last of Us Part II",
        image: "./assets/Part_II_Ellie_infobox.jpg"
    },
    "Abby": {
        description: "Soldate forte et complexe cherchant la vengeance dans un monde dévasté par une pandémie.",
        jeux: "The Last of Us Part II",
        image: "./assets/TLOU2-Abby-jeune-portrait.jpg"
    },
    "Peach": {
        description: "Princesse du Royaume Champignon, souvent enlevée par Bowser mais aussi une combattante habile.",
        jeux: "Série Super Mario",
        image: "./assets/Peach_Infobox.jpg"
    },
    "Mario": {
        description: "Plombier italien aventureux, toujours prêt à sauver la Princesse Peach et le Royaume Champignon.",
        jeux: "Série Super Mario",
        image: "./assets/mario.png"
    },
    "Nathan Drake": {
        description: "Chasseur de trésors charismatique avec un penchant pour l'histoire et l'aventure.",
        jeux: "Uncharted",
        image: "./assets/1800556.jpg"
    },
    "Zelda": {
        description: "Princesse de Hyrule possédant une sagesse profonde et des pouvoirs magiques, joue un rôle clé dans la lutte contre le mal.",
        jeux: "The Legend of Zelda",
        image: "./assets/TotK_Zelda.jpg"
    },
    "Ganondorf": {
        description: "Antagoniste puissant de la série The Legend of Zelda, cherche à conquérir Hyrule.",
        jeux: "The Legend of Zelda",
        image: "./assets/Fwu6PAsWIAAgjAj.jpg"
    },
    "Duke Nukem": {
        description: "Héros emblématique avec une attitude macho, connu pour ses répliques cultes et sa lutte contre les aliens.",
        jeux: "Duke Nukem",
        image: "./assets/Duke_Nukem.jpg"
    },
    "Jade": {
        description: "Reporter courageuse et experte en arts martiaux, lutte contre une conspiration alien",
        jeux: "Beyond Good & Evil",
        image: "./assets/jade.jpg"
    },
    "Doomfist": {
        description: "Vilain charismatique d'Overwatch, croit que le conflit mène à l'évolution de l'humanité.",
        jeux: "Overwatch",
        image: "./assets/OW2_Doomfist_render.jpg"
    },
    "Ana": {
        description: "Tireuse d'élite et fondatrice d'Overwatch, se bat pour protéger les innocents et apporter la paix.",
        jeux: "Overwatch",
        image: "./assets/Ana_Skin_Classic.jpg"
    },
    "Miles Morales": {
        description: "Jeune héros suivant les traces de Spider-Man, découvre le poids de l'héritage et l'importance de la famille.",
        jeux: "Marvel's Spider-Man: Miles Morales",
        image: "./assets/PRfYtTZQsuj3ALrBXGL8MjAH.jpg"
    },
    "Yu & Kay": {
        description: "Couple amoureux explorant une planète inconnue, cherchant à survivre et à comprendre leur relation.",
        jeux: "Haven",
        image: "./assets/50062868046_713ec42514_k.jpg"
    },
    "Miss Fortune": {
        description: "Capitaine pirate redoutée de League of Legends, connue pour sa détermination et son adresse au tir.",
        jeux: "League of Legends",
        image: "./assets/images.jpeg"
    },
    "Gragas": {
        description: "Combattant jovial et buveur de League of Legends, célèbre pour sa force et son amour de la bonne boisson.",
        jeux: "League of Legends",
        image: "./assets/Z.jpeg"
    },
    "Celeste": {
        description: "Jeune femme affrontant ses démons intérieurs en escaladant une montagne, métaphore de son voyage intérieur.",
        jeux: "Celeste",
        image: "./assets/celeste-qxwmguubd5r5.jpg"
    },
    "Ada Wong": {
        description: "Espionne mystérieuse et manipulatrice, opère souvent dans l'ombre pour atteindre ses objectifs.",
        jeux: "Resident Evil",
        image: "./assets/Ada_portrait_91.jpg"
    },
    "Chris Redfield": {
        description: "Membre de l'équipe d'élite S.T.A.R.S et combattant du bioterrorisme, déterminé et courageux.",
        jeux: "Resident Evil",
        image: "./assets/Chris_RE5.jpg"
    },
    "Bob": {
        description: "Combattant de Tekken au style de combat rapide et agile, malgré son apparence imposante.",
        jeux: "Tekken",
        image: "./assets/Bob_T7FR.jpg"
    },
};



let currentQuestionIndex = 0;
let scores = {};

const questionBackgrounds = [
    "url('assets/fond1.webp')",
    "url('assets/fond2.webp')",
    "url('assets/fond3.webp')",
    "url('assets/fond4.webp')",
    "url('assets/fond5.webp')",
    "url('assets/fond6.webp')",
    "url('assets/fond7.webp')",
];

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.text;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = function() { selectOption(index); };
        optionsContainer.appendChild(button);
    });

    // Modifier le fond d'écran
    document.querySelector('html').style.backgroundImage = questionBackgrounds[currentQuestionIndex];
}

function selectOption(index) {
    const question = questions[currentQuestionIndex];
    const selectedPoints = question.points[index].split(",");
    selectedPoints.forEach(character => {
        if (!scores[character]) {
            scores[character] = 0;
        }
        scores[character]++;
    });

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    document.getElementById("questionnaireContainer").style.display = "none";
    const resultElement = document.getElementById("result");
    const winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const characterInfo = characterDescriptions[winner] || {};
    const description = characterInfo.description || "Pas de description disponible.";
    const jeux = characterInfo.jeux || "Pas de description disponible.";
    const imagePath = characterInfo.image || ""; // Fournissez un chemin par défaut si nécessaire
    resultElement.innerHTML = `<h3>Le personnage qui vous correspond le plus est : <strong>${winner}</strong> dans ${jeux}</h3>
                               <img src="${imagePath}" alt="${winner}" style="max-width:200px;"/><p>${description}</p>`;
    resultElement.style.display = "block";
}

// Initialisation
displayQuestion();