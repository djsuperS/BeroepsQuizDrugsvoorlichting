let currentQuestionIndex = 0;
let answers = {};
let score = 0;
//indicator op welke vraag je zit
const questions = ["Vraag 1", "Vraag 2", "Vraag 3", "Vraag 4","Vraag 5","Vraag 6","Vraag 7","Vraag 8","Vraag 9","Vraag 10","Vraag11","Vraag12","Vraag13","Vraag14","Vraag15"];
//inhoud van de vragen
const inhoudv = [
        "Wat is de belangrijkste werkzame stof in psilocybine paddo's?",
        "Wat is een veelvoorkomend effect van het gebruik van psilocybine paddo's?",
        "Wat is een potentiële risico van het gebruik van psilocybine paddo's?",
        "Hoe worden psilocybine paddo's meestal geconsumeerd?",
        "Wat is een ander veelvoorkomend woord voor psilocybine paddo's?",
        "Wat kan het gevolg zijn van langdurig gebruik van psilocybine paddo's?",
        "Wat is de wettelijke status van psilocybine paddo's in de meeste landen?",
        "Wat is de typische duur van de effecten van het gebruik van psilocybine paddo's?",
        "Welke van de volgende kan een bijwerking zijn van het gebruik van psilocybine paddo's?",
        "Wat is een ander potentieel risico van het gebruik van psilocybine paddo's?",
        "vi11",
        "vi12",
        "vi13",
        "vi14",
        "vi15",
                    ];
//gebruik \n voor enters </br> werkt niet vanwege dat het een value is die je veranderd
const Av = ["A\nTHC","A\nVerhoogde eetlust","A\nPsychotische stoornissen","A\nRoken","A\nLSD","A\nVerbeterde emotionele stabiliteit","A\nVolledig legaal","A\n1-2 uur","A\nVerhoogde lichaamstemperatuur","A\nVerbeterde creativiteit","A\n","A\n","A\n","A\n","A\n"]
const Bv = ["B\nMDMA","B\nVisuele hallucinaties","B\nVerbeterd geheugen","B\nInjectie","B\nShrooms","B\nSchade aan de hersenen","B\nIllegaal","B\n6-8 uur","B\nVerhoogde angstgevoelens","B\nHoge bloeddruk","B\n","B\n","B\n","B\n","B\n"]
const Cv = ["C\nPsilocybine","C\nVerhoogde alertheid","C\nVerhoogde concentratie","C\nSlikken","C\nCoke","C\nGewichtstoename","C\nAlleen legaal voor medisch gebruik","C\n12-24 uur","C\nVertraagde hartslag","C\nVerhoogde empathie","C\n","C\n","C\n","C\n","C\n"]
const Dv = ["D\nCocaïne","D\nVerminderde hartslag","D\nGewichtsverlies","D\nSniffen","D\nHeroïne","D\nVerhoogde energie","D\nGereguleerd, maar niet volledig legaal","D\nMeer dan 24 uur","D\nVerbeterde slaapkwaliteit","D\nFlashbacks","D\n","D\n","D\n","D\n","D\n"]
//correcte antwoord per vraag
const ant = ['C','B','A','C','B','B','B','B','B','D'];
const answered = ["false","false","false","false","false","false","false","false","false","false","false","false","false","false","false"]

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
        } else {
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
}
//volgende vraag knop
function next() {
    document.getElementById('output').innerHTML = "";
    if (currentQuestionIndex >= questions.length){
    } else {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
    }
}
//vorige vraag knop
function back() {
    document.getElementById('output').innerHTML = "";
    if (currentQuestionIndex <= 0){
    } else {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
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