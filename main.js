
const questions = [
  {
    "question_ID": "dfgytrfv",
    "Section": "Science",
    "description": {
      "english": "What is the color of the Sky?",
      "हिन्दी": "आकाश का रंग क्या है?"
    },
    "options": {
      "1": {
        "english": "Red",
        "हिन्दी": "लाल"
      },
      "2": {
        "english": "Blue",
        "हिन्दी": "नीला"
      },
      "3": {
        "english": "Black",
        "हिन्दी": "काला"
      },
      "4": {
        "english": "White",
        "हिन्दी": "सफेद"
      }
    }
  },
  {
    "question_ID": "abc123",
    "Section": "Science",
    "description": {
      "english": "What is the capital of France?",
      "हिन्दी": "फ़्रांस की राजधानी क्या है?"
    },
    "options": {
      "1": {
        "english": "Paris",
        "हिन्दी": "पैरिस"
      },
      "2": {
        "english": "Berlin",
        "हिन्दी": "बर्लिन"
      },
      "3": {
        "english": "Rome",
        "हिन्दी": "रोम"
      },
      "4": {
        "english": "Madrid",
        "हिन्दी": "मैड्रिड"
      }
    }
  },
  {
    "question_ID": "xyz789",
    "Section": "Mathematics",
    "description": {
      "english": "What is the square of 9?",
      "हिन्दी": "9 का वर्ग क्या है?"
    },
    "options": {
      "1": {
        "english": "81",
        "हिन्दी": "81"
      },
      "2": {
        "english": "64",
        "हिन्दी": "64"
      },
      "3": {
        "english": "100",
        "हिन्दी": "100"
      },
      "4": {
        "english": "49",
        "हिन्दी": "49"
      }
    }
  },
  {
    "question_ID": "pqr456",
    "Section": "History",
    "description": {
      "english": "Who was the first President of the United States?",
      "हिन्दी": "संयुक्त राज्यों के पहले राष्ट्रपति कौन था?"
    },
    "options": {
      "1": {
        "english": "George Washington",
        "हिन्दी": "जॉर्ज वाशिंगटन"
      },
      "2": {
        "english": "Abraham Lincoln",
        "हिन्दी": "एब्राहम लिंकन"
      },
      "3": {
        "english": "Thomas Jefferson",
        "हिन्दी": "थॉमस जेफर्सन"
      },
      "9000": {
        "english": "John Adams",
        "हिन्दी": "जॉन एडम्स"
      }
    }
  },{
    "question_ID": "q1",
    "Section": "History",
    "description": {
      "english": "Who was the first Emperor of China?",
      "हिन्दी": "चीन के पहले सम्राट कौन था?"
    },
    "options": {
      "1": {
        "english": "Qin Shi Huang",
        "हिन्दी": "चिन शी हुआंग"
      },
      "2": {
        "english": "Han Wudi",
        "हिन्दी": "हान वूडी"
      },
      "3": {
        "english": "Emperor Wu",
        "हिन्दी": "सम्राट वू"
      },
      "4": {
        "english": "Mao Zedong",
        "हिन्दी": "माओ ज़ेडोंग"
      }
    }
  },
  {
    "question_ID": "q2",
    "Section": "History",
    "description": {
      "english": "What ancient civilization built the pyramids of Giza?",
      "हिन्दी": "गीज़ा के पिरामिड्स किस प्राचीन सभ्यता ने बनाए थे?"
    },
    "options": {
      "1": {
        "english": "Mesopotamia",
        "हिन्दी": "मेसोपोटामिया"
      },
      "2": {
        "english": "Ancient Greece",
        "हिन्दी": "प्राचीन ग्रीस"
      },
      "3": {
        "english": "Egypt",
        "हिन्दी": "मिस्र"
      },
      "4": {
        "english": "Rome",
        "हिन्दी": "रोम"
      }
    }
  },
  {
    "question_ID": "q3",
    "Section": "Science",
    "description": {
      "english": "What is the chemical symbol for gold?",
      "हिन्दी": "सोने के लिए रासायनिक प्रतीक क्या है?"
    },
    "options": {
      "1": {
        "english": "Au",
        "हिन्दी": "एयू"
      },
      "2": {
        "english": "Ag",
        "हिन्दी": "एग"
      },
      "3": {
        "english": "Fe",
        "हिन्दी": "फी"
      },
      "4": {
        "english": "Cu",
        "हिन्दी": "सीयू"
      }
    }
  },
  {
    "question_ID": "q4",
    "Section": "Science",
    "description": {
      "english": "Who developed the theory of relativity?",
      "हिन्दी": "सांबंधिकता सिद्धांत का आविष्कार किसने किया?"
    },
    "options": {
      "1": {
        "english": "Isaac Newton",
        "हिन्दी": "आइज़क न्यूटन"
      },
      "2": {
        "english": "Galileo Galilei",
        "हिन्दी": "गैलिलियो गैलिलेई"
      },
      "3": {
        "english": "Albert Einstein",
        "हिन्दी": "आल्बर्ट आइन्स्टीन"
      },
      "4": {
        "english": "Niels Bohr",
        "हिन्दी": "नील्स बोहर"
      }
    }
  },
  {
    "question_ID": "q5",
    "Section": "Science",
    "description": {
      "english": "Which river is the longest in the world?",
      "हिन्दी": "दुनिया का सबसे लंबा नदी कौन सा है?"
    },
    "options": {
      "1": {
        "english": "Nile",
        "हिन्दी": "नील"
      },
      "2": {
        "english": "Amazon",
        "हिन्दी": "अमेज़न"
      },
      "3": {
        "english": "Yangtze",
        "हिन्दी": "यांगत्ज़"
      },
      "4": {
        "english": "Mississippi",
        "हिन्दी": "मिसिसिपी"
      }
    }
  },
  {
    "question_ID": "q6",
    "Section": "Science",
    "description": {
      "english": "Which mountain is the tallest in the world?",
      "हिन्दी": "दुनिया का सबसे ऊचा पर्वत कौन सा है?"
    },
    "options": {
      "1": {
        "english": "Mount Everest",
        "हिन्दी": "माउंट एवरेस्ट"
      },
      "2": {
        "english": "K2",
        "हिन्दी": "के-टू"
      },
      "3": {
        "english": "Kangchenjunga",
        "हिन्दी": "कंचनजंगा"
      },
      "4": {
        "english": "Lhotse",
        "हिन्दी": "ल्होत्से"
      }
    }
  },
  {
    "question_ID": "q7",
    "Section": "Science",
    "description": {
      "english": "Who is the co-founder of Microsoft?",
      "हिन्दी": "माइक्रोसॉफ्ट के सह-संस्थापक कौन हैं?"
    },
    "options": {
      "1": {
        "english": "Bill Gates",
        "हिन्दी": "बिल गेट्स"
      },
      "2": {
        "english": "Steve Jobs",
        "हिन्दी": "स्टीव जॉब्स"
      },
      "3": {
        "english": "Mark Zuckerberg",
        "हिन्दी": "मार्क ज़करबर्ग"
      },
      "4": {
        "english": "Larry Page",
        "हिन्दी": "लैरी पेज"
      }
    }
  },
  {
    "question_ID": "q8",
    "Section": "Science",
    "description": {
      "english": "What does CPU stand for?",
      "हिन्दी": "सीपीयू का मतलब क्या है?"
    },
    "options": {
      "1": {
        "english": "Central Processing Unit",
        "हिन्दी": "सेंट्रल प्रोसेसिंग यूनिट"
      },
      "2": {
        "english": "Computer Peripheral Unit",
        "हिन्दी": "कंप्यूटर पेरिफेरल यूनिट"
      },
      "3": {
        "english": "Central Peripheral Unit",
        "हिन्दी": "सेंट्रल पेरिफेरल यूनिट"
      },
      "4": {
        "english": "Central Power Unit",
        "हिन्दी": "सेंट्रल पावर यूनिट"
      }
    }
  },
  {
    "question_ID": "q9",
    "Section": "Science",
    "description": {
      "english": "In which year did the first modern Olympic Games take place?",
      "हिन्दी": "पहले मॉडर्न ओलंपिक खेल किस वर्ष हुए थे?"
    },
    "options": {
      "1": {
        "english": "1896",
        "हिन्दी": "१८९६"
      },
      "2": {
        "english": "1904",
        "हिन्दी": "१९०४"
      },
      "3": {
        "english": "1920",
        "हिन्दी": "१९२०"
      },
      "4": {
        "english": "1936",
        "हिन्दी": "१९३६"
      }
    }
  },
  {
    "question_ID": "q10",
    "Section": "Science",
    "description": {
      "english": "Who is known as the 'King of Clay' in tennis?",
      "हिन्दी": "टेनिस में 'क्ले का राजा' किसे कहा जाता है?"
    },
    "options": {
      "1": {
        "english": "Roger Federer",
        "हिन्दी": "रॉजर फेडरर"
      },
      "2": {
        "english": "Rafael Nadal",
        "हिन्दी": "राफ़ाएल नडाल"
      },
      "3": {
        "english": "Novak Djokovic",
        "हिन्दी": "नोवाक जोकोविच"
      },
      "4": {
        "english": "Andy Murray",
        "हिन्दी": "एंडी मरे"
      }
    }
  }
]



const timeContainer = document.getElementById('time')

var examStartTime = new Date();

// Calculate the end time by adding 90 minutes to the start time
var examEndTime = new Date(examStartTime.getTime() + 90 * 60000); // 90 minutes in milliseconds

// Display the start and end times
console.log('Exam started at:', examStartTime.toLocaleString());
console.log('Exam will end at:', examEndTime.toLocaleString());


function checkExamStatus() {
  var currentTime = new Date();

  // Compare the current time with the exam end time
  if (currentTime > examEndTime) {
      
      stopExamPlatform();
      displayEndTime();
  }

  else{
    var timeRemaining = Math.max(0, examEndTime - currentTime);
    // Calculate minutes and seconds
    var minutes = Math.floor(timeRemaining / 60000);
    var seconds = Math.floor((timeRemaining % 60000) / 1000);
    timeContainer.innerHTML = "Time Left " + minutes+":" + seconds;
  }

}


var interval = setInterval(checkExamStatus, 1000); 

// Function to stop the exam platform
function stopExamPlatform() {
 
  console.log('Exam platform stopped.');
}

// Function to display the time when the exam ended
function displayEndTime() {
  
  var endTimeMessage = 'Exam ended at: ' + examEndTime.toLocaleString();
  console.log(endTimeMessage);

  // Clear the interval when the exam is completed
  clearInterval(interval);
}








/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}



  let currentQuestionIndex = 0;
  let language_chosen = 'english'
  
  const answers = {}
  const button_container = document.getElementById('box');
  const section_container = document.getElementById('section-container');
  const categoryDropdown = document.getElementById("category");
  const questionNo = document.getElementById('questionName')

  categoryDropdown.addEventListener('change',()=>{
      language_chosen = categoryDropdown.value
      console.log(language_chosen)
      displayQuestion(sections[currentSection][currentQuestionIndex]);
  })

  

  // Populate the subcategory dropdown with options based on the selected category


  const sections = {} // Each Section will contain an array of questions
  for(let i=0;i<questions.length;i++){
      answers[questions[i].question_ID]=[-1,'NotAttempted'];
      let sect = questions[i]['Section']
      if(sections[sect])sections[sect].push(questions[i]);
      else sections[sect] = [questions[i]]
  }

  let section_arr = Object.keys(sections)
  let currentSection = section_arr[0]

  for(let i=0;i<section_arr.length;i++){
      const sectionElement = document.createElement('div');
      sectionElement.innerHTML = section_arr[i];
      sectionElement.className = 'section'
      sectionElement.addEventListener('click',()=>{
          console.log("current section " , section_arr[i])
          currentSection = section_arr[i]
          currentQuestionIndex=0;
          displayQuestion(sections[currentSection][currentQuestionIndex])
          createQuestionButtons()
      })
      section_container.appendChild(sectionElement)
  }

  // for(let i=0;i<section_arr.length;i++){
  //     shuffleArray(sections[section_arr[i]])
  // }


 

  function createQuestionButtons() {

      //const buttonList = document.createElement('ul');
      //buttonList.className = 'options';
      button_container.innerHTML= ''
      data = sections[currentSection]
      for (let i = 0; i < data.length; i++) {
          const optionElement = document.createElement('div');
          optionElement.className = 'number';
          let answer_state = answers[data[i].question_ID][1] 
         // console.log(answer_state)
          if(answer_state=='Marked')
            optionElement.className+=' purple-section'
          else if(answer_state=='Attempted')
            optionElement.className+=' green-section'

          if(i==currentQuestionIndex)optionElement.className+=' current'
          
          optionElement.innerHTML = i + 1;
          optionElement.addEventListener('click', () => {
              currentQuestionIndex = i;
              updateNavButtons();
              createQuestionButtons() //remove for performance
              displayQuestion(data[i]) 
          })

          button_container.appendChild(optionElement);
      }

  }

  createQuestionButtons()

  // Answer States - NotAttempted,Attempted,Marked



  

  const question_content = document.getElementById('question');
  const options_content = document.getElementById('options');
  const clear_btn = document.getElementById('clear-btn');
  const save_btn = document.getElementById('save-btn');

  clear_btn.addEventListener('click', () => {
      let answer_arr = answers[data[currentQuestionIndex].question_ID]
      let option_chosen = answer_arr[0];
      let answer_state = answer_arr[1];
      if (answer_state=='Attempted' || answer_state=='Marked') {
          let radio = document.querySelector(`input[name="q${currentQuestionIndex}"][value="${option_chosen}"]`)
          if (radio) radio.checked = false
          answers[data[currentQuestionIndex].question_ID][1] = 'NotAttempted';
          answers[data[currentQuestionIndex].question_ID][0] = -1;
          createQuestionButtons()
      }
  })

  save_btn.addEventListener('click', () => {
    let answer_arr = answers[data[currentQuestionIndex].question_ID]
    let answer_state = answer_arr[1];
    if (answer_state=='Attempted' || answer_state=='Marked') {
        answers[data[currentQuestionIndex].question_ID][1] = 'Attempted';
        console.log(answers)
        createQuestionButtons()
    }
})


  function displayQuestion(data) {
    updateNavButtons();
     questionNo.innerHTML = 'Question ' + (currentQuestionIndex+1);


      question_content.innerHTML = `<p>${data.description[language_chosen]}</p>`;
      options_content.innerHTML = ''

      const optionsList = document.createElement('ul');
      optionsList.className = 'alphabet-list';

      counter = 'A'.charCodeAt(0);

      Object.keys(data.options).forEach((optionIndex) => {
       //   console.log(optionIndex)
          const optionElement = document.createElement('li');
          optionElement.id = "optionElement:"+optionIndex
          optionElement.className = 'optionTextContainer';

        

          // Check if the current optionIndex matches the stored answer

          optionElement.innerHTML = `
              
              <div class='numbero'>${String.fromCharCode(counter)} </div>   ${data.options[optionIndex][language_chosen]} 
          `;

          optionElement.addEventListener('click', () => {
              answers[data.question_ID][0] = optionIndex;
              answers[data.question_ID][1] = 'Marked'
              createQuestionButtons()
          })

          counter++;
          optionsList.appendChild(optionElement);
      });

      options_content.appendChild(optionsList);
      answer_arr = answers[data.question_ID];
      option_chosen = answer_arr[0];
      answer_state = answer_arr[1];
     // console.log(option_chosen)
      if (answer_state=='Attempted' || answer_state=='Marked') {
          var radioButton = document.querySelector(`input[name="q${currentQuestionIndex}"][value="${option_chosen}"]`);
          //cconsole.log(radioButton)
          if (radioButton) {
              radioButton.checked = true;
          }
      }

  }


  function prevQuestion() {
      if (currentQuestionIndex > 0) {
          currentQuestionIndex--;
          displayQuestion(sections[currentSection][currentQuestionIndex]);
      }
      updateNavButtons();
  }

  function nextQuestion() {
    //console.log(currentQuestionIndex)
      if (currentQuestionIndex < sections[currentSection].length - 1) {
          currentQuestionIndex++;
         // console.log(sections[currentSection])
          displayQuestion(sections[currentSection][currentQuestionIndex]);
      }
      updateNavButtons();
  }


  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  prevButton.addEventListener('click',prevQuestion);
  nextButton.addEventListener('click',nextQuestion)

  function updateNavButtons() {

    createQuestionButtons()
      //const submitButton = document.getElementById('submit-btn');
      prevButton.style.visibility = currentQuestionIndex === 0 ? 'hidden' : 'visible';
      nextButton.style.visibility = currentQuestionIndex === sections[currentSection].length - 1 ? 'hidden' : 'visible';
      //submitButton.style.display = currentQuestionIndex === questions.length - 1 ? 'inline-block' : 'none';

  }

  function submitAnswers() {
      //   const answers = [];
      /*    const questions = document.querySelectorAll('.question');

          questions.forEach((question, index) => {
              const selectedOption = question.querySelector(`input[name="q${index}"]:checked`);
              if (selectedOption) {
                  answers.push({
                      question_ID: question.dataset.questionId,
                      selectedOption: selectedOption.value
                  });
              }
          });

         

          */
      console.log('User answers:', answers);
  }

  displayQuestion(sections[currentSection][currentQuestionIndex])
  updateNavButtons();