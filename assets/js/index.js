const questions=[
    {
        question: "HTML is what type of language ?",
        answer: [
            { text: "Scripting Language" , correct: false},
            { text: "Markup Language" , correct: true},
            { text: "Programming Language" , correct: false},
            { text: "Network Protocol" , correct: false},
    
    ]
    },

    {
        question: "HTML uses :",
        answer: [
            { text: "User defined tags", correct: false},
            { text: "Pre-specified tags", correct: false},
            { text: "Fixed tags defined by the language", correct: true},
            { text: "Tags only for linking", correct: false},
    
    ]
    },

    {
        question:  "The year in which HTML was first proposed _______.",
        answer: [
            { text: "1990" , correct: true},
            { text: "1980" , correct: false},
            { text: "2000" , correct: false},
            { text: "2005" , correct: false},
    
    ]
    },

    {
        question: "Apart from <b> tag, what other tag makes text bold ?",
        answer: [
            { text: "fat" , correct: false},
            { text: "strong" , correct: true},
            { text: "black" , correct: false},
            { text: "emp" , correct: false},
    ]
    },

    {
        question:  "How can you make a bulleted list with numbers? ",
        answer: [
            { text: "dl" , correct: false},
            { text: "ul" , correct: false},
            { text: "list" , correct: false},
            { text: "ol" , correct: true},
    
    ]
    },


    
    {
        question:  "What tag is used to display a picture in a HTML page?",
        answer: [
            { text: "piture" , correct: false},
            { text: "pic" , correct: false},
            { text: "image" , correct: false},
            { text: "img" , correct: true},
    
    ]
    },

    
    {
        question:  "HTML web pages can be read and rendered by _________.",
        answer: [
            { text: "compilar" , correct: false},
            { text: "server" , correct: false},
            { text: "web Browser" , correct: true},
            { text: "Interprater" , correct: false},
    
    ]
    },

    
    {
        question:  "Which of the following is not a browser ?",
        answer: [
            { text: "Microsofts Bing", correct: true},
            { text: "Netscape Navigator" , correct: false},
            { text: "Mozilla Firefox" , correct: false},
            { text: "Opera" , correct: false},
    
    ]
    },

    
    {
        question:  "HTML tags are surrounded by which type of brackets.",
        answer: [
            { text: "curly" , correct: true},
            { text: "squert" , correct: false},
            { text: "Round" , correct: false},
            { text: "Angle" , correct: false},
    
    ]
    },

    
    {
        question:  "Tags and test that are not directly displayed on the page are written in _____ section.",
        answer: [
            { text: "title" , correct: false},
            { text: "body" , correct: false},
            { text: "head" , correct: true},
            { text: "html" , correct: false},
    
    ]
    }

];
const questionElement = document.getElementById("question");
const  answerButtons = document.getElementById("answer-button");
const  nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =0;

let startQuiz= ()=>{
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML ="Next";
    showquestion();
}

let showquestion= ()=>{
    resetstat();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML =questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer=> {
        const button = document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click', selectAnswer)

    });
};

const resetstat= ()=>{
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

const selectAnswer = (e)=>{
    const selectedBtn =e.target;
    const iscorrect =selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display ="block";
       // const selectedBtn.classList.add("correct")
};

const showScore =()=>{
    resetstat();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play Again"
    nextButton.style.display="block";
}

const handleNextButton = ()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showquestion();
    }
    else{
        showScore()
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})


startQuiz();


