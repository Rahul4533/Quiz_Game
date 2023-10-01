const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];
    // Destructuring the object
    

    let score=0;
    let currentScore=0;
    let total=quesJSON.length;
    //access all the elements
    const Questions= document.getElementById('question');
    const scoreEl= document.getElementById('score');
    const optionsEl= document.getElementById("options");
    const nextEl= document.getElementById('next');

   show();
   scoreEl.textContent=`Score ${score} / ${total}`

   nextEl.addEventListener('click',()=>{
    scoreEl.textContent=`Score ${score} / ${total}`;
    nextQuestion();
   });

   //create show function to show questions .....
function show(){
  // destructrure the json

  const{correctAnswer,options,question}=quesJSON[currentScore]

  Questions.textContent=question;

     
      const shuffleoption= shuffle(options);
     shuffleoption.forEach((opt) => {
      const btn= document.createElement("button");
      btn.textContent=opt;
      optionsEl.appendChild(btn);
      btn.addEventListener("click",() => {
        if(opt === correctAnswer){
          score++;
        }else{
          score= score - 0.25;
        }
        
        scoreEl.textContent=`Score ${score} / ${total}`;
        nextQuestion();
        
      })
     })
}

function nextQuestion(){
  currentScore++;
  optionsEl.textContent='';
  if(currentScore>=quesJSON.length){
    Questions.textContent="Quiz Complete"
  }else{
  show();
  }
}
     

     function shuffle(arr) {
      for(let i=arr.length-1; i>=0; i--){
        const j= Math.floor(Math.random()*i+1);
        [arr[i],arr[j]]=[arr[j],arr[i]]
      }
      return arr;
     }



     
