let quizApp=[{
    question: " In which standard library file is the function printf() located ?",
    options: ["stdlib.h", "stdio.h", "stdout.h", "stdoutput.h"],
    answer: 2
},
 {
    question: " In a C program, the first statement that will be executed is: ?",
    options: ["The first executable statement of the program.", 
    " The first executable statement after the comment /*start here*/",
     "The first executable statement of the main() function.", 
     " The first executable statement of the end function."],
    answer: 3
 },
 {
    question: " How would you insert pre-written code into a current program ?",
    options: [" #read", 
    "  #get",
     " #include", 
     "  #pre"],
    answer: 3
 },
 {
    question: "  Which symbol is used to make comments in C ?",
    options: [" //", 
    "  #",
     " !!", 
     "  <!--"],
    answer: 1
 },
 {
    question: "   Which function is used to read the input from console ?",
    options: [" clrscr()", 
    "  scanf()",
     " getchar()", 
     "  printf()"],
    answer: 2
 },
 {
    question: "   In order to properly use a variable ?",
    options: [" The variable must have a valid type.", 
    "   The variable name can not be a keyword (part of the C syntax).",
     " The variable name must begin with a letter.", 
     "  All of the above."],
    answer: 4
 },
    {
    question: "   A function prototypes are useful ?",
    options: [" Because they tell the compiler that a function is declared later.", 
    "  Because they make the program more readable.",
     "  Because they make the program more readable.", 
     "  All of the above."],
    answer: 4
 },
    {
    question: "   Which function is used to print something on console ?",
    options: ["  printf()", 
    " scanf()",
     " getch()"
     ],
    answer: 1
 },
    {
    question: " What is a correct syntax to output 'Hello World' in C ?",
    options: ["  Console.WriteLine('Hello World');", 
    "  Console.WriteLine('Hello World');",
     "  printf('Hello World');",
    " cout << 'Hello World' "
     ],
    answer: 3
 },
  {
    question: "When a variable is created in C, a memory address is assigned to the variable ?",
    options: ["    True", 
    "False "
     ],
     answer: 1
 },

  {
    question: "In C, code statements must end with a semicolon (;)?",
     options: ["False", " True"],
       answer: 2
 },
    {
      question: "How can you create a variable with the numeric value 5?",
      options: [" num = 5 int;", "  num = 5;", " val num = 5;", " int num = 5;"],
      answer: 4
    },
    {
      question: `What is the problem in the following C declarations?<br>  
      #include <'stdio.h'> <br>
      {int func(int);
      double func(int);
      int func(float);
      }`,
      options: ["A function with same name cannot have different signatures", 
      "A function with same name cannot have different return types",
       " A function with same name cannot have different number of parameters", 
       "All of the mentioned "],
      answer: 4
    },
    {
      question: "How can you create a variable with the floating number 2.8?",
      options: ["  num = 2.8 float;", "   num = 2.8 double;", "  float num = 2.8;", "  val num = 2.8;"],
      answer: 4
    },
    {
      question: "Which operator is used to add together two values?",
      options: ["   The * sign", "  The + sign", "  The & sign", "  The ADD keyword;"],
      answer: 2
    },
    {
      question: "Which function is often used to output values and print text?",
      options: [" write()", "  output()", "  printf()", "  printword()"],
      answer: 3
    },
    {
      question: "Which format specifier is often used to print integers?",
      options: ["    %d", "  %f", "   %s", "   %c"],
      answer: 1
    },
    {
      question: "Which operator can be used to compare two values?",
      options: ["   ==", " <>", "   ><", "  ="],
      answer: 1
    },
    {
      question: "Which format specifier is often used to print floats?",
      options: ["    %d", "  %f", "   %s", "   %c"],
      answer: 2
    },
    {
      question: "Which operator can be used to find the memory size (in bytes) of a data type or variable?",
      options: [" The length property", "  The size of property", "   The sizer property", " The len property"],
      answer: 2
    },
    {
      question: "Which keyword can be used to make a variable unchangeable/read-only?",
      options: [" constant", "   const", "  readonly", "  final"],
      answer: 2
    },
    {
      question: "Who is the father of C language?",
      options: ["  Steve Jobs", "  James Gosling", " Dennis Ritchie", "Rasmus Lerdorf"],
      answer: 3
    },
    {
      question: "What is short int in C programming?",
      options: [" The basic data type of C", " Qualifier", " Short is the qualifier and int is the basic data type", "All of the mentioned"],
      answer: 3
    },
    {
      question: ` What will be the output of the following C code considering the size of a short int is 2, char is 1 and int is 4 bytes? <br>  
     #include  <'stdio.h'>  <br>
      int main() <br>
      {
          short int i = 20; <br>
          char c = 97;<br>
          printf("%d, %d, %d\n", sizeof(i), sizeof(c), sizeof(c + i));<br>
          return 0;<br>
      }`,
      options: ["  2, 1, 2", "  2, 1, 1", " 2, 1, 4", "   2, 2, 8"],
      answer: 3
    },
    {
      question: `What will be the output of the following C function?<br>  
      #include <'stdio.h'> <br>
      void reverse(int i);<br>
      int main()<br>
      {
          reverse(1);<br>
      }
      void reverse(int i)<br>
      {
          if (i > 5)<br>
              return ;<br>
          printf("%d ", i);    <br> 
            return reverse((i++, i));<br>
      }`,
      options: ["1 2 3 4 5", " Segmentation fault", " Compilation error", " Undefined behaviour"],
      answer: 1
    },
    {
      question: `How many times i value is checked in the following C program?<br>  
      #include <"stdio.h"><br>
      consol.log
      int main()<br>
      {
        int i = 0; <br>
        while (i < 3) ;<br>
            i++;<br>
        printf("In while loop\n");<br>
      }`,
      options: [" 2", "3 ","4", "1",],
      answer: 3
    },
    {
      question: `What will be the data type returned for the following C function?<br>  
      #include <'stdio.h'> <br>
      int func() <br>
      {
          return (double)(char)5.0 <br>
      }`,
      options: ["char", "int", "double", " multiple type-casting in return is illegal "],
      answer: 2
    },
    {
      question: ` What are the elements present in the array of the following C code?<br>  
      int array[5] = {5};`,
      options: ["5, 5, 5, 5, 5", "5, 0, 0, 0, 0", "  5, (garbage), (garbage), (garbage), (garbage)", " (garbage), (garbage), (garbage), (garbage), 5"],
      answer: 2
    },
    {
      question: ` Which part of the program address space is p stored in the following C code?<br>  
      #include <'stdio.h'> <br>
      int *p; <br>
      int main()<br>
      {
          int i = 0;<br>
          p = &i;<br>
          return 0;<br>
      }`,
      options: ["Code/text segment", " Data segment", " Bss segment", " Stack"],
      answer: 3
    },
    {
      question: `Comment on the output of following C code?<br>  
      #include <'stdio.h'> <br>
      main()<br>
      {
          char *p = 0;<br>
          *p = 'a';<br>
          printf("value in pointer p is %c\n", *p);<br>
      }`,
      options: [" It will print a", " It will print 0", "Compile time error", " Run time error"],
      answer: 4
    },
      {
        question : ` What is the output of this C code? <br>
        #include <'stdio.h'> <br>
        main()<br>
        {
            if (sizeof(int) > -1)<br>
                printf("True");<br>
            else <br>
                printf("False"); <br>
        }
        `,
        options: [" True", "False"],
        answer: 2 
      },
      {
        question : `What will be the final values of i and j in the following C code?<br>
        #include <'stdio.h'> <br>
        int x = 0; <br>
      int f() <br>
      {
          if (x == 0) <br>
              return x + 1; <br>
          else  <br>
              return x - 1; <br>
      } <br>
      int g() <br>
      {
          return x++; <br>
      }
      int main() <br>
      {
          int i = (f() + g()) | g(); //bitwise or  <br>
          int j = g() | (f() + g()); //bitwise or  <br>
      }`,
        options: [" i value is 1 and j value is 1", 
        " i value is 0 and j value is 0",
        " i value is 1 and j value is undefined",
        "i and j value are undefined"],
        answer: 2
      },

];







let question_count = 0;
let data;
var  right=0;
    wrong = 0;
let ques= document.getElementById('ques')
let optionsInput= document.querySelectorAll('.form-check-input')
let result= document.getElementById('result')
let btn= document.getElementById('nextButton');
let quiz= document.querySelector('.Quiz')
let start= document.querySelector('.startQuiz')


function startQuiz(){
  quiz.style.display="flex" 
  start.style.display="none"
  startTimer(totalTime, timerDisplay);
}


let timerDisplay = document.getElementById('timer');
let totalTime = 25 * 60; // total time for quiz in seconds (10 minutes)
let countdown;

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    countdown = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(countdown);
            end();
        }
    }, 1000);
}



function next() {
     if (question_count==quizApp.length){
        end();
    }  reset()
   data=quizApp[question_count];
    ques.innerHTML=`${question_count + 1} ) ${data.question}`;
    optionsInput[0].nextElementSibling.innerText=data.options[0];
    optionsInput[1].nextElementSibling.innerText=data.options[1];
    optionsInput[2].nextElementSibling.innerText=data.options[2];
    optionsInput[3].nextElementSibling.innerText=data.options[3];

}

next()  ;
let  percentage;

let  checkAnswer = () =>{
    let ans;
    optionsInput.forEach(
        (input) =>{
            if (input.checked) {
             ans =  input.value;
            }
        }
    )
    return ans;
}
function SUBMIT(){   

    if (question_count < quizApp.length) {
        question_count++;
    }
  let check =  checkAnswer()
  if (check == data.answer) {
   right++; 
  }
  else{
      wrong++;
  }

 
   next()

    return;
}


function reset() {
    optionsInput.forEach(
        (input)=>{
            if (input.checked) {
             input.checked= false;
            }
        }
    );
    
}


  

function end() {
  clearInterval(countdown); 
  timerDisplay.style.display="none"
    document.querySelector('.Quiz').style.display =  "none";
    document.querySelector('.result').style.display = "flex";
    percentage = (right / quizApp.length) * 100;
    if(percentage>= 70){
      result.innerHTML=`
      <h4> ${right} out of ${quizApp.length}</h4>
      <h4> You have passed</h4>
      `
    }else{
      result.innerHTML=`
      <h4> ${right} out of ${quizApp.length}</h4>
      <h4> You have failed</h4>
      `
    }
let circularProgress = document.querySelector(".circular-progress"),
progressValue = document.querySelector(".progress-value");
let Endvalue = Math.round(percentage);
// round percentage to ensure an integer value
let progressStartValue = 0,    
speed = 40;

let progress = setInterval(() => {
progressStartValue++;
progressValue.textContent = `${progressStartValue}%`
circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`
if(progressStartValue == Endvalue){
    clearInterval(progress);
}   else{
  if(progressStartValue===90){
    progressValue.textContent = `${Endvalue}%`;
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${Endvalue * 3.6}deg, #ededed 0deg)`;
    clearInterval(progress);
  }
} 
}, speed);



};

// document.getElementById('startQuizButton').addEventListener('click', function () {
//   document.querySelector('.Quiz').style.display = "block";
//   startTimer(totalTime, timerDisplay);
//   next();
// });