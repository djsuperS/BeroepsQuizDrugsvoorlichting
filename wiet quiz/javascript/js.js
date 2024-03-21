let currentQuestionIndex = 0;
let answers = {};
let score = 0;
//indicator op welke vraag je zit
const questions = ["Vraag 1", "Vraag 2", "Vraag 3", "Vraag 4","Vraag5","Vraag6","Vraag7","Vraag8","Vraag9","Vraag10","Vraag11","Vraag12","Vraag13","Vraag14","Vraag15"];
//inhoud van de vragen
const inhoudv = [
        "Wat is de belangrijkste psychoactieve stof in marihuana?",
        "Wat is een veelvoorkomend effect van het consumeren van marihuana?",
        "Wat is een veelvoorkomend effect van het consumeren van marihuana?",
        "Wat is een veelvoorkomend effect van het consumeren van marihuana?",
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
const Av = ["A\nTHC","A\nSlaperigheid","A\nBladeren","A\nInjectie","A\nVerhoogde alertheid","A\nVerhoogde energie","A\n","A\n","A\n","A\n","A\n","A\n","A\n","A\n","A\n"]
const Bv = ["B\nCBD","B\Verhoogde eetlust","B\Bloemen (toppen)","B\nRoken","B\nVerminderde hartslag","B\nIllegaa","B\n","B\n","B\n","B\n","B\n","B\n","B\n","B\n","B\n"]
const Cv = ["C\nCafeïne","C\nVerbeterd geheugen","C\nStengels","C\nSnuiven","C\nAngstgevoelens","C\nAlleen legaal voor medisch gebruik","C\n","C\n","C\n","C\n","C\n","C\n","C\n","C\n","C\n"]
const Dv = ["D\nNicotine","D\nVerhoogde concentratie","D\nWortels","D\nInname via ogen","D\nVerhoogde energie","D\nGereguleerd, maar niet volledig legaal","D\n","D\n","D\n","D\n","D\n","D\n","D\n","D\n","D\n"]
//correcte antwoord per vraag
const ant = ['A','B','B','B','C','C'];
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