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


let currentQuestionIndex = 0;
let scores = {};

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
    resultElement.innerHTML = `Le personnage qui vous correspond le plus est : <strong>${winner}</strong>`;
    resultElement.style.display = "block";
}

function nextQuestion() {
    // Cette fonction peut être utilisée si vous avez un bouton "Suivant" distinct pour chaque question.
}

// Initialisation
displayQuestion();