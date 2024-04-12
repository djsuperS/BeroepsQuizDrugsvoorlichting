let plantSize = 600;
let currentQuestionIndex = 0;
let answers = {};
let score = 0;
//indicator op welke vraag je zit
const questions = ["Vraag 1", "Vraag 2", "Vraag 3", "Vraag 4", "Vraag5", "Vraag6", "Vraag7", "Vraag8", "Vraag9", "Vraag10", "Vraag11", "Vraag12", "Vraag13", "Vraag14", "Vraag15"];
//inhoud van de vragen
const inhoudv = [
    "Wat is de belangrijkste psychoactieve stof in marihuana?",
    "Wat is een veelvoorkomend effect van het consumeren van marihuana?",
    "Welk deel van de marihuanaplant bevat de meeste THC?",
    "Wat is een veelvoorkomende methode om marihuana te consumeren??",
    "Welke van de volgende is een mogelijke bijwerking van het gebruik van marihuana?",
    "Wat is de wettelijke status van marihuana in sommige landen?",
    "Wat zijn de voornaamste componenten van de marihuanaplant?",
    "Wat is een ander veelvoorkomend woord voor marihuana?",
    "Welke van de volgende is een voorbeeld van een niet-psychoactieve component in marihuana?",
    "Wat is de typische duur van de effecten van het roken van marihuana?",
    "vi11",
    "vi12",
    "vi13",
    "vi14",
    "vi15",
];
//gebruik \n voor enters </br> werkt niet vanwege dat het een value is die je veranderd
const Av = ["A\nTHC", "A\nSlaperigheid", "A\nBladeren", "A\nInjectie", "A\nVerhoogde alertheid", "A\nVolledig legaal", "A\nBladeren en wortels", "A\nHasj", "A\nTHC", "A\n1-2 uur", "A\n", "A\n", "A\n", "A\n", "A\n"]
const Bv = ["B\nCBD", "B\nVerhoogde eetlust", "B\nBloemen (toppen)", "B\nRoken", "B\nVerminderde hartslag", "B\nIllegaal", "B\nZaden en stengels", "B\nLSD", "B\nCBD", "B\n6-8 uur", "B\n", "B\n", "B\n", "B\n", "B\n"]
const Cv = ["C\nCafeïne", "C\nVerbeterd geheugen", "C\nStengels", "C\nSnuiven", "C\nAngstgevoelens", "C\nAlleen legaal voor\nmedisch gebruik", "C\nToppen en bladeren", "C\nXTC", "C\nNicotine", "C\n12-24 uur", "C\n", "C\n", "C\n", "C\n", "C\n"]
const Dv = ["D\nNicotine", "D\nVerhoogde concentratie", "D\nWortels", "D\nInname via ogen", "D\nVerhoogde energie", "D\nGereguleerd, maar niet volledig\nlegaal", "D\nBloemen en zaden", "D\nWiet", "D\nCocaïne", "D\nMeer dan 24 uur", "D\n", "D\n", "D\n", "D\n", "D\n"]
//correcte antwoord per vraag
const ant = ['A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'B', 'A'];


let plantImage = document.getElementById('plant');
plantImage.setAttribute("style", "width:" + plantSize + "px");
plantImage.setAttribute("style", "height:" + plantSize + "px");


function changeSize(action) {
    var plantImage = document.getElementById('plant');
    var currentWidth = parseInt(plantImage.style.width);
    console.log(plantImage.style.width);
    var currentHeight = parseInt(plantImage.style.height);
    var newWidth, newHeight;

    if (action === 'schaar') {
        newWidth = currentWidth - 20;
        newHeight = currentHeight - 20;
    } else if (action === 'gieter') {
        newWidth = currentWidth + 20;
        newHeight = currentHeight + 20;
    }

    plantImage.style.width = newWidth + 'px';
    plantImage.style.height = newHeight + 'px';
}

document.getElementById('schaar').onclick = function () { changeSize('schaar'); };
document.getElementById('gieter').onclick = function () { changeSize('gieter'); };

const oant = [
    "Een crash kan optreden door serotonine-uitputting, resulterend in vermoeidheid en prikkelbaarheid. Het kan worden verminderd door gezond eten, hydratatie en rust.",
    "XTC verhoogt de serotonine in de hersenen, wat geluk, empathie en energie kan veroorzaken, maar op lange termijn kan leiden tot stemmingsstoornissen.",
    "XTC veroorzaakt empathie en openheid, in tegenstelling tot de intense euforie van cocaïne of amfetaminen.",
    "XTC kan uitdroging en oververhitting veroorzaken door verhoogde lichaamstemperatuur en energieverbruik. Dit kan worden verminderd door matig water drinken, regelmatig afkoelen en het vermijden van overmatige fysieke inspanning.",
    "Kortetermijngebruik kan sociale binding versterken, maar op lange termijn kan het problemen in relaties veroorzaken door stemmingsstoornissen en verstoring van sociale en emotionele functies.",
];

const answered = Array(questions.length).fill(false);
const pills = Array(questions.length).fill(false);


// Hide elements initially
document.getElementById("vragen").innerHTML = questions[0];
document.getElementById("inhoudvraag").innerHTML = inhoudv[0];
document.getElementById("A").value = Av[0];
document.getElementById("B").value = Bv[0];
document.getElementById("C").value = Cv[0];
document.getElementById("D").value = Dv[0];
document.getElementById('Check').style.visibility = 'hidden';
document.getElementById('fout').style.visibility = 'hidden';
document.getElementById('goed').style.visibility = 'hidden';
document.getElementById('tekst').style.visibility = 'hidden';

// Function to update score
function updateScore() {
    document.getElementById("score").innerHTML = "<p>score</p>" + score;
}
setInterval(updateScore, 100);

// Function to handle user's answer
function Answer(selectedOption) {
    if (answered[currentQuestionIndex] === true) {
        document.getElementById("output").innerHTML =
            "<p>U heeft deze vraag al beantwoord u kunt hier geen punten meer voor krijgen</p>";
    } else if (selectedOption === ant[currentQuestionIndex]) {
        answered[currentQuestionIndex] = true;
        score++;
        document.getElementById("output").innerHTML =
            "<p>Correct!</br>selecteer wat u wilt doen met uw plant</p>";
    } else {
        document.getElementById("output").innerHTML =
            "<p>Jammer dat is incorrect</p>";
    }
}

// Function to check the answer
function check() {
    document.getElementById("Check").style.visibility = "hidden";
    document.getElementById("fout").style.visibility = "visible";
    document.getElementById("goed").style.visibility = "visible";
    document.getElementById("output").innerHTML = oant[openvc];
}

// Function to handle correct answer
function goed() {
    if (answered[currentQuestionIndex] === true) {
        document.getElementById("output").innerHTML =
            "<p>U heeft deze vraag al beantwoord u kunt hier geen punten meer voor krijgen</p>";
    } else {
        answered[currentQuestionIndex] = true;
        score++;
        document.getElementById("output").innerHTML =
            "<p>selecteer wat u wilt doen met uw plant</p>";
    }
}

// Function to handle incorrect answer
function fout() {
    if (answered[currentQuestionIndex] === true) {
        document.getElementById("output").innerHTML =
            "<p>U heeft deze vraag al beantwoord u kunt hier geen punten meer voor krijgen</p>";
    } else {
        answered[currentQuestionIndex] = true;
        document.getElementById("output").innerHTML =
            "<p>jammer genoeg was dit fout</p>";
    }
}

// Function to move to the next question
function next() {
    document.getElementById("output").innerHTML = "";
    if (currentQuestionIndex < questions.length) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
    if (currentQuestionIndex >= 10) {
        openvc++;
        document.getElementById("A").style.visibility = "hidden";
        document.getElementById("B").style.visibility = "hidden";
        document.getElementById("C").style.visibility = "hidden";
        document.getElementById("D").style.visibility = "hidden";
        document.getElementById("Check").style.visibility = "visible";
        document.getElementById("tekst").style.visibility = "visible";
        document.getElementById("fout").style.visibility = "hidden";
        document.getElementById("goed").style.visibility = "hidden";
    }
}

// Function to move to the previous question
function back() {
    openvc--;
    document.getElementById("output").innerHTML = "";
    if (currentQuestionIndex <= 0) {
    } else {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
    if (currentQuestionIndex < 10) {
        document.getElementById("A").style.visibility = "visible";
        document.getElementById("B").style.visibility = "visible";
        document.getElementById("C").style.visibility = "visible";
        document.getElementById("D").style.visibility = "visible";
        document.getElementById("Check").style.visibility = "hidden";
        document.getElementById("fout").style.visibility = "hidden";
        document.getElementById("goed").style.visibility = "hidden";
        document.getElementById("tekst").style.visibility = "hidden";
    }
    if (currentQuestionIndex > 10) {
        document.getElementById("fout").style.visibility = "hidden";
        document.getElementById("goed").style.visibility = "hidden";
        document.getElementById("Check").style.visibility = "visible";
    }
}

// Function to update the question, content, and answers
function showQuestion(index) {
    if (index >= 0 && index < questions.length) {
        document.getElementById("vragen").innerHTML = questions[index];
        document.getElementById("inhoudvraag").innerHTML = inhoudv[index];
        document.getElementById("A").value = Av[index];
        document.getElementById("B").value = Bv[index];
        document.getElementById("C").value = Cv[index];
        document.getElementById("D").value = Dv[index];
    }
}

