let currentQuestionIndex = 0;
let score = 0;
let openvc = 0;
//indicator op welke vraag je zit
const questions = ["Vraag 1", "Vraag 2", "Vraag 3", "Vraag 4","Vraag5","Vraag 6","Vraag 7","Vraag 8","Vraag 9","Vraag 10","Vraag 11","Vraag 12","Vraag 13","Vraag 14","Vraag 15"];
//inhoud van de vragen
const inhoudv = [
        "Wat is de belangrijkste werkzame stof in ecstasy (XTC)?",
        "Wat is een veelvoorkomend effect van het gebruik van ecstasy?",
        "Wat is een potentiële risico van het gebruik van ecstasy?",
        "Hoe wordt ecstasy meestal geconsumeerd?",
        "Wat is een ander veelvoorkomend woord voor ecstasy?",
        "Wat kan het gevolg zijn van langdurig gebruik van ecstasy?",
        "Wat is de wettelijke status van ecstasy in de meeste landen?",
        "Vraag: Wat is de typische duur van de effecten van het gebruik van ecstasy?",
        "Welke van de volgende kan een bijwerking zijn van het gebruik van ecstasy?",
        "Wat is een ander potentieel risico van het gebruik van ecstasy?",
        "vi11",
        "vi12",
        "vi13",
        "vi14",
        "vi15",
                    ];
//gebruik \n voor enters </br> werkt niet vanwege dat het een value is die je veranderd
const Av = ["A\n THC","A\n Verhoogde energie","A\n Verbeterde stemming","A\n Roken","A\n Wiet","A\n Geheugenverlies","A\n Volledig legaal","A\n 1-2 uur","A\n Verlaagde lichaamstemperatuur","A\n Verhoogd libido"]
const Bv = ["B\n Lyserginezuurdiethylamide\n(LSD)","B\n Slaperigheid","B\n Oververhitting van het lichaam","B\n Injectie","B\nXTC","B\n Verbeterde concentratie","B\n Illegaal","B\n 6-8 uur","B\n Verhoogde bloeddruk","B\n Serotoninesyndroom"]
const Cv = ["C\n MDMA","C\n Verminderde hartslag","C\n Verhoogde bloeddruk","C\n Slikken","C\n Coke","C\nVerminderde angst","C\nAlleen legaal voor medisch gebruik","C\n12-24 uur","C\nVertraagde ademhaling","C\nVerhoogde hydratatie"]
const Dv = ["D\n Heroïne","D\n Verbeterd geheugen","D\nVerhoogde eetlust","D\nSniffen","D\nCrack","D\nSchade aan de hersenen","D\nGereguleerd, maar niet volledig legaal","D\nMeer dan 24 uur","D\nVerhoogde honger","D\nVerhoogde hydratatie"]
//correcte antwoord per vraag
const ant = ['C','A','B','C','B','D','B','B','B','B'];
const oant = ["ant1",'ant2','ant3','ant4','ant5']
const answered = ["false","false","false","false","false","false","false","false","false","false","false","false","false","false","false"]
document.getElementById('Check').style.visibility = 'hidden';
document.getElementById('fout').style.visibility = 'hidden';
document.getElementById('goed').style.visibility = 'hidden';
document.getElementById('tekst').style.visibility = 'hidden';




function updateScore() {
    document.getElementById('score').innerHTML = "<p>score</p>" + score; 

}
setInterval(updateScore, 100);

function Answer(selectedOption) {
    console.log(currentQuestionIndex)
    console.log(ant)
    console.log(selectedOption);
    //checkt of de vraag al is beantwoord
    if (answered[currentQuestionIndex] === true) {
        document.getElementById('output').innerHTML = "<p>U heeft deze vraag al beantwoord u kunt hier geen punten meer voor krijgen</p>";
        } else
            //checkt of de vraag correct is
        if (selectedOption === ant[currentQuestionIndex]){
            answered[currentQuestionIndex] = true;
            console.log(answered[currentQuestionIndex])
            score++
        document.getElementById('output').innerHTML = "<p>Correct!</br>selecteer wat je wilt doen met uw plant.</p>";
    } else {
        document.getElementById('output').innerHTML = "<p>Jammer dat is incorrect</p>";
}
}
function check() {
    document.getElementById('Check').style.visibility = 'hidden';
    document.getElementById('fout').style.visibility = 'visible';
    document.getElementById('goed').style.visibility = 'visible';
    document.getElementById('output').innerHTML = oant[openvc];
}
function goed() {
    if (answered[currentQuestionIndex] === true) {
        document.getElementById('output').innerHTML = "<p>U heeft deze vraag al beantwoord u kunt hier geen punten meer voor krijgen</p>";
    } else {
        answered[currentQuestionIndex] = true;
    score++;
    document.getElementById('output').innerHTML = "<p>selecteer wat je wilt doen met uw plant.</p>";
}}
function fout() {
    if (answered[currentQuestionIndex] === true) {
        document.getElementById('output').innerHTML = "<p>U heeft deze vraag al beantwoord u kunt hier geen punten meer voor krijgen</p>";
    } else {
        answered[currentQuestionIndex] = true;
    document.getElementById('output').innerHTML = "<p>jammer genoeg was dit fout</p>";
}}



//volgende vraag knop
function next() {
    document.getElementById('output').innerHTML = "";
    if (currentQuestionIndex < questions.length) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } if (currentQuestionIndex >= 10 ) {
        openvc++;
        document.getElementById('A').style.visibility = 'hidden';
        document.getElementById('B').style.visibility = 'hidden';
        document.getElementById('C').style.visibility = 'hidden';
        document.getElementById('D').style.visibility = 'hidden';

        document.getElementById('Check').style.visibility = 'visible';
        document.getElementById('tekst').style.visibility = 'visible';
    }
}

//vorige vraag knop
function back() {
    openvc--;
    document.getElementById('output').innerHTML = "";
    if (currentQuestionIndex <= 0){
    } else {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
    }
    if (currentQuestionIndex < 10) {
        document.getElementById('A').style.visibility = 'visible';
        document.getElementById('B').style.visibility = 'visible';
        document.getElementById('C').style.visibility = 'visible';
        document.getElementById('D').style.visibility = 'visible';

        document.getElementById('Check').style.visibility = 'hidden';
        document.getElementById('fout').style.visibility = 'hidden';
        document.getElementById('goed').style.visibility = 'hidden';
        document.getElementById('tekst').style.visibility = 'hidden';
    }

}
//update de vraag,vraaginhoud,antwoorden
function showQuestion(index) {
    if (index >= 0 && index < questions.length) {
        document.getElementById('vragen').innerHTML = questions[index];
        document.getElementById('inhoudvraag').innerHTML = inhoudv[index];
        document.getElementById('A').value = Av[index];
        document.getElementById('B').value = Bv[index];
        document.getElementById('C').value = Cv[index];
        document.getElementById('D').value = Dv[index];
   { if (index >= 0 && index < questions.length) {
            document.getElementById('vragen').innerHTML = questions[index];
            document.getElementById('inhoudvraag').innerHTML = inhoudv[index];
            }
        }
    }
}
showQuestion(currentQuestionIndex);