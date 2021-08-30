const myQues = [
    {
      question: "Which of the following triangles are always similar?",
      answers: {
        
        a: "Equilateral",
        b: "Isosceles",
        c: "Obtuse"
      },
      correctAnswer: "a"
    },
    {
      question: "The sides of a triangle are 7, 10, and 12.  Find the length of the longest side of a similar triangle whose shortest side is 21.",
      answers: {
        a: "21",
        b: "30",
        c: "36"
      },
      correctAnswer: "c"
    },
    {
        question: "What is the sum of all the angles of a triangle?",
        answers: {
          a: "360",
          b: "160",
          c: "180"
        },
        correctAnswer: "c"
      },
      {
        question: "The sides of a triangle are 7, 10, and 12.  Find the length of the longest side of a similar triangle whose shortest side is 21.",
        answers: {
          a: "21",
          b: "30",
          c: "36"
        },
        correctAnswer: "c"
      },
    {
      question: "How many sides does a triangle have?",
      answers: {
        a: "4",
        b: "2",
        c: "3",
      },
      correctAnswer: "c"
    }
  ];
  var cont = document.querySelector('.quiz-form');
  var show = document.querySelector('.next');
  var submit = document.querySelector('#submit');
  var boxes = document.querySelectorAll('.box-1');
  var results = document.querySelector('.result');
  var submitHead = document.querySelector('#res');
  var clicks = 0;

  submit.addEventListener('click',()=>{
    if(clicks>=4){
      result();
    }
  });


  show.addEventListener('click',nextBtn);

  function result(){
    var score = 0;
    var res = new FormData(cont);
    var index=0;
    for(let value of res.values()){
        if(value === myQues[index].correctAnswer){
            score++;
        }
        index++;
    }
    
    results.innerHTML=`<h2 id="res">Your score is: ${score}</h2>`;
  }


  function nextBtn(){
    if(clicks>= 5){
        show.style.display='none';
    
        return;
    }
    boxes[clicks].style.display = 'none';

    
    console.log(boxes);

    clicks++;
    if(clicks >= 5){
      results.style.display='flex';
      return;
  }
    boxes[clicks].style.display = 'block';
  
}


