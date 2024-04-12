let currentQuestionIndex = 0;
let score = 0;
let openvc = 0;
let pilindex = 0;

// Define arrays for questions, contents, answers, and more
const questions = [
  "Vraag 1",
  "Vraag 2",
  "Vraag 3",
  "Vraag 4",
  "Vraag 5",
  "Vraag 6",
  "Vraag 7",
  "Vraag 8",
  "Vraag 9",
  "Vraag 10",
  "Vraag 11",
  "Vraag 12",
  "Vraag 13",
  "Vraag 14",
  "Vraag 15",
];

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
  "Wat zijn enkele mogelijke oorzaken van de crash die sommige mensen ervaren na het gebruik van XTC, en hoe kan dit worden geminimaliseerd?",
  "Hoe kan het gebruik van XTC de serotoninespiegels in de hersenen beïnvloeden, en wat zijn de mogelijke gevolgen hiervan op de stemming en het gedrag van een persoon?",
  "Wat zijn de belangrijkste verschillen tussen de effecten van XTC en die van andere stimulerende middelen, zoals cocaïne of amfetaminen?",
  "Hoe kan het gebruik van XTC leiden tot uitdroging en oververhitting, en welke voorzorgsmaatregelen kunnen worden genomen om deze risico's te verminderen tijdens het gebruik?",
  "Hoe kan XTC-gebruik sociale en relationele aspecten van iemands leven beïnvloeden, zowel op korte als op lange termijn?",
];

const Av = [
  "A\n THC",
  "A\n Verhoogde energie",
  "A\n Verbeterde stemming",
  "A\n Roken",
  "A\n Wiet",
  "A\n Geheugenverlies",
  "A\n Volledig legaal",
  "A\n 1-2 uur",
  "A\n Verlaagde lichaamstemperatuur",
  "A\n Verhoogd libido",
];

const Bv = [
  "B\n Lyserginezuurdiethylamide\n(LSD)",
  "B\n Slaperigheid",
  "B\n Oververhitting van het lichaam",
  "B\n Injectie",
  "B\nXTC",
  "B\n Verbeterde concentratie",
  "B\n Illegaal",
  "B\n 6-8 uur",
  "B\n Verhoogde bloeddruk",
  "B\n Serotoninesyndroom",
];

const Cv = [
  "C\n MDMA",
  "C\n Verminderde hartslag",
  "C\n Verhoogde bloeddruk",
  "C\n Slikken",
  "C\n Coke",
  "C\nVerminderde angst",
  "C\nAlleen legaal voor medisch gebruik",
  "C\n12-24 uur",
  "C\nVertraagde ademhaling",
  "C\nVerhoogde hydratatie",
];

const Dv = [
  "D\n Heroïne",
  "D\n Verbeterd geheugen",
  "D\nVerhoogde eetlust",
  "D\nSniffen",
  "D\nCrack",
  "D\nSchade aan de hersenen",
  "D\nGereguleerd, maar niet volledig legaal",
  "D\nMeer dan 24 uur",
  "D\nVerhoogde honger",
  "D\nVerlaagde hydratatie",
];

const ant = ['C', 'A', 'B', 'C', 'B', 'D', 'B', 'B', 'B', 'B'];

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
      "<p>Correct!</br>selecteer wat u wilt doen met de pillen</p>";
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
      "<p>selecteer wat u wilt doen met de pillen</p>";
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

// Function to adjust pill count
function pillenaanpassen(toevoegenofwegnemen) {
  if (answered[currentQuestionIndex] === true && pills[currentQuestionIndex] === false) {
    if (toevoegenofwegnemen === "plus") {
      if (pilindex < 15) {
        pilindex++;
        document.getElementById("p" + pilindex).style.visibility = "visible";
      }
    } else if (toevoegenofwegnemen === "min") {
      if (pilindex > 0) {
        document.getElementById("p" + pilindex).style.visibility = "hidden";
        pilindex--;
      }
    }
    pills[currentQuestionIndex] = true;
  } else {
    if (answered[currentQuestionIndex] === false) {
      document.getElementById("output").innerHTML = "U heeft de vraag nog niet beantwoord";
    } else {
      document.getElementById("output").innerHTML = "U heeft deze actie al uitgevoerd voor het antwoord";
    }
  }
}