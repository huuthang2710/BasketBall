var question = [
    {
        id:1,
        question:'Tại sao biệt thự nó bự ???',
        answer:{
            a: 'A. Vì nó thích bự',
            b: 'B. Vì nó mất nhiều tiền để xây',
            c: 'C. Vì nó bự thiệt',
        }
    },
    {
        id:2,
        question: "Nếu 1=5 ; 2=10 ; 3=15 ; 4=20 ; 5=? ?",
        answer: {
            a: 'A. 25',
            b: 'B. 5',
            c: 'C. 1',
        }
    },
    {
        id:3,
        question: "When you see your crush walking with another boy/girl?",
        answer: {
            a: 'A. Remain quiet accept fate',
            b: 'B. Make a move and confess',
            c: 'C. Pray that they are just friends',
        }
    },
    {
        id:4,
        question: "Failing at school and/or in life?",
        answer: {
            a: 'A. Regret your existence',
            b: 'B. I am not failing but rather school and/or life is failing me',
            c: 'C. Act like usual but inside, you are more sensitive than ever',
        }
    },
    {
        id:5,
        question: "If you are in an intense quarrel with a close friend?",
        answer: {
            a: 'A. Feel regretful but probably let everything slide and never talk again. FOREVER',
            b: 'B. Apologise and rebuild your friendship',
            c: 'C. Pacify but stick his/her name on your black book',
        }
    },
    {
        id:6,
        question: "Find out that your money has been stolen?",
        answer: {
            a: 'A. Keep it a secret and get by with no money',
            b: 'B. Report to everyone, determined to find the culprit',
            c: 'C. Ask friends but do not tell adults',
        }
    },
    {
        id:7,
        question: "You see another student being gang-bullied. What would you do?",
        answer: {
            a: 'A. Feel guilty but do nothing',
            b: 'B. Try to talk the bullies off',
            c: 'C. Tell teachers and wait for their assisstance',
        }
    },
    {
        id:8,
        question: "Your favorite book series has just been cancelled. How do you respond?",
        answer: {
            a: 'A. Do a read-over of all the previous installments of the series',
            b: 'B. Gather like-minded fans and organise a demonstaration on why the series should not be cancelled',
            c: 'C. Share posts on social medias that yearn the cancel of the series',
        }
    },
    {
        id:9,
        question: "You get a chance to walk home alone with your crush. You:",
        answer: {
            a: 'A. Feel too shy and awkward to make a move',
            b: 'B. Take the chance and ask him/her out',
            c: 'C. Try to find out if he/she is interseted in you to plan ahead',
        }
    },
    {
        id:10,
        question: "You see a box of puppies left on the pavement, but remember that your parents do not alow animals. What do you do?",
        answer: {
            a: 'A. Quickly leave and try not to look back',
            b: 'B. Bring them home anyway, for fear that they might die if left behind',
            c: 'C. Find and ask animal-loving communities whether the puppies could be adopted',
        }
    }
];
var answer = {
    a: 0,
    b: 0,
    c: 0,
    tong: 0,
}
// Function - Excute
function RemoveItemChoice(list, item) {
    var quesList = list.filter(function(element){
        return element.id !== item.id
    });
    console.log(quesList);
    return quesList;
}   

var DOMquestions = document.getElementById("questions");

function showQuestion() {
    // Chon random 1 thang trong cau hoi
    var item = question[Math.floor(Math.random()*question.length)];
    // Render ra HTML
    if (question.length === 0) {
        return
    } else {
        var renderHTML = `
        <div id="${item.id}" class='answerbox'>
            
            <div id='question'><ul><li>${item.question}</li></ul></div>
            
            <ul>
                <div><button class="btn" id='btn1'><li>${item.answer.a}</li></button></div>
                <div><button class="btn" id='btn2'><li>${item.answer.b}</li></button></div>
                <div><button class="btn" id='btn3'><li>${item.answer.c}</li></button></div>
            </ul>
        </div>
        `;
        DOMquestions.insertAdjacentHTML("beforeend", renderHTML);`1`
        // Loai bo thang item khoi List
        question = RemoveItemChoice(question, item)
    }
}

function check(answer) {
    if (answer.a + answer.b + answer.c <= 9) {
        return true
    } else {
        console.log("Het cau hoi");
        return false
    }
}

//Ham handle button
function score() {
    var button = document.getElementById('btn1');
    button.onclick = function() {
        if (check(answer)) {
            answer.a += 1;
            console.log("Answer A:" + answer.a);
        }
        // console.log("CLick bnt1");
    };

    var button2 = document.getElementById('btn2');
    button2.onclick = function() {
        if (check(answer)) {
            answer.b += 1;
            console.log("Answer B:" + answer.b);
        }
    };

    var button3 = document.getElementById('btn3');
    button3.onclick = function() {
        if (check(answer)) {
            answer.c += 1;
            console.log("Answer C:" + answer.c);
        }
    };
    tong=answer.a + answer.b + answer.c ;
    console.log(tong);
}

//Goi Ham Tren
showQuestion();
score();
var final;
function judge(){
    var pending = {           
        most_a: 'You are a sensitive type of person, being shy and afraid to speak up for your own good. Most of the time this affects your ability to make the right choices, however, you can always change as long as you hang on and work hard!!',
        most_b: 'You are strong and independent - enough to make your own decisions and always ready to act or speak up for yourself. However, you put others before yourself more often than not, and that is what makes you truly appreciable :) Be proud of who you are!! ',
        most_c: 'You stand somewhere in between being solitary and open-hearted: on occasions you would act selfless, on others you would not; sometimes you would speak up if you are treated unfairly, others times you would rather let things happen regardless,... Whatever choices you make, and however you respond to what is thrown at you, the only thing you should care about is that you are doing the right things, and no one can judge you for that. Keep going!!',
        other: 'You are neither too sensitive nor strong, but rather your personality is a mixture of characteristic traits, and you are the one who decides what to do in which situation. Your choices depend on what you think is most suitable or most reasonable, and most often that is the effective course of action, therefore there is nothing to be afraid of. Work hard and eventually you will become perfect :)',            
    };
        

        
        
    if (answer.a > answer.b && answer.a > answer.c){
        final = pending.most_a;
    } else if (answer.b > answer.a && answer.b > answer.c){
        final = pending.most_b;
    } else if (answer.c > answer.b && answer.c > answer.a){
        final = pending.most_c;
    } else {
        final = pending.other;
    }
};

// var something = document.getElementsByClassName('other');
// something.addEventListener('click', function(){
    
// });

// Ham nay de gan cac su kien vao nut click
var ListButton = document.getElementsByClassName("btn");
function loop(){   
    
    
    for (var j = 0; j < ListButton.length; j++) {
        if (question.length === 0) {
            //Xu ly sau khi het cau hoi
            DOMquestions.innerHTML = "";
            console.log(answer);
            var render = `
            <div id='content'>
                <div id='judge'>${final}</div>
                <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/07/11/11/harold-0.jpg" alt="Man">
                <div id="end">
                    <a href="./index.html">
                        <button class='btn2'>
                            Reset Quiz
                        </button>
                    </a>
                </div>
            </div>
            `;
            DOMquestions.insertAdjacentHTML("afterbegin", render);
        } else {
            ListButton[j].addEventListener("click", function() {
                DOMquestions.innerHTML = ""
                showQuestion();
                loop();
                score();
                judge();
            });
        }
    }
}

loop();

