let currentQuestionIndex = 0;
let answers = {};
let score = 0;
//indicator op welke vraag je zit
const questions = ["Vraag 1", "Vraag 2", "Vraag 3", "Vraag 4","Vraag5","Vraag6","Vraag7","Vraag8","Vraag9","Vraag10","Vraag11","Vraag12","Vraag13","Vraag14","Vraag15"];
//inhoud van de vragen
const inhoudv = [
        "vi1",
        "vi2",
        "vi3",
        "vi4",
        "vi5",
        "vi6",
        "vi7",
        "vi8",
        "vi9",
        "vi10",
        "vi11",
        "vi12",
        "vi13",
        "vi14",
        "vi15",
                    ];
//gebruik \n voor enters </br> werkt niet vanwege dat het een value is die je veranderd
const Av = ["A\n","A\n","A\n","A\n","A\n","A\n","A\n","A\n","A\n","A\n","A\n","A\n","A\n","A\n","A\n"]
const Bv = ["B\n","B\n","B\n","B\n","B\n","B\n","B\n","B\n","B\n","B\n","B\n","B\n","B\n","B\n","B\n"]
const Cv = ["C\n","C\n","C\n","C\n","C\n","C\n","C\n","C\n","C\n","C\n","C\n","C\n","C\n","C\n","C\n"]
const Dv = ["D\n","D\n","D\n","D\n","D\n","D\n","D\n","D\n","D\n","D\n","D\n","D\n","D\n","D\n","D\n"]
//correcte antwoord per vraag
const ant = ['A','B','C','D'];
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