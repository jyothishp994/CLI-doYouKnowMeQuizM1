
var score=0
var readline=require('readline-sync');
questions=[
questionOne={
  question: "Where does Jyothish live?",
  answer:"kerala"
},
questionTwo={
  question: "what is Jyothish's favourite sport ?",
  answer:"cricket"
},
questionThree={
  question:"What is Jyothish's favourite food?",
  answer:"dosa"
},
questionFour={
  question:"What is Jyothish's favourite destination?",
  answer:"paris"
},
questionFive={
  question:"Who is Jyothish's favourite cricketer ?",
  answer:"sachin"
}
]

var name=readline.question('May I know your name ?');
WelcomeMsg(name+"  to Do you know Jyothish quiz");
for (var i = 0; i < questions.length; i++) {
    var userAns=readline.question(questions[i].question);
    checkAns(questions[i].question,userAns); 
    console.log("Current Score: "+score); 
    console.log("-------------------");
    }

function checkAns(userQues,UserAns)
{
for (var i = 0; i < questions.length; i++) {
    if (questions[i].question==userQues)
    {
      if(questions[i].answer==userAns.toLowerCase())
      {
      console.log('right!');
      score=score+1;
      }
      else
      {
        console.log('wrong!');
      }
    }
    }
    return score;
}

function WelcomeMsg(name)
{
  console.log('Welcome ' + name);
}