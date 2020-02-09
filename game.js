var question = [
    {
        id:1,
        question:'Bạn thích làm gì khi chơi bóng rổ??',
        answer:{
            a: 'A. Ném 3 điểm',
            b: 'B. Ném 2 điểm',
            c: 'C. Ném phạt',
        }
    },
    {
        id:2,
        question: "Bạn thích câu lỗi kiểu nào?",
        answer: {
            a: 'A. Câu lỗi từ vòng ngoài 3 điểm',
            b: 'B. Câu Lỗi khi ném 2 điểm',
            c: 'C. Câu lỗi khi đột phá',
        }
    },
    {
        id:3,
        question: "Bạn chơi vị trí nào?",
        answer: {
            a: 'A. PG/SG',
            b: 'B. SF/PF',
            c: 'C. Center',
        }
    },
    {
        id:4,
        question: "Bạn thích đội bóng nào ở NBA?",
        answer: {
            a: 'A. Golden state warriors',
            b: 'B. Los angeles lakers',
            c: 'C. Houston rockets',
        }
    },
    {
        id:5,
        question: "Bạn muốn sở hữu chiều cao bao nhiêuuu?",
        answer: {
            a: 'A. 1m9 - 1m95',
            b: 'B. 1m96 - 2m05',
            c: 'C. > 2m5',
        }
    },
    {
        id:6,
        question: "Bạn đã từng chấn thương :",
        answer: {
            a: 'A. Lật cổ chân ( lật sơ mi )',
            b: 'B. Gãy Xương',
            c: 'C. Chưa Từng',
        }
    },
    {
        id:7,
        question: "Bạn đã bao giờ bị foulout chưa?",
        answer: {
            a: 'A. Chưa',
            b: 'B. Rồi',
            c: 'C. Còn lâu mới biết nhá',
        }
    },
    {
        id:8,
        question: "Bạn đã bao giờ đánh nhau khi đang trong trận đấu không?",
        answer: {
            a: 'A. Bí mật',
            b: 'B. Chưa',
            c: 'C. Có',
        }
    },
    {
        id:9,
        question: "Bạn đã chơi bóng rổ bao lâu?",
        answer: {
            a: 'A. Trên 2 Năm',
            b: 'B. Trên 10 năm',
            c: 'C. Trên 5 năm',
        }
    },
    {
        id:10,
        question: "Bạn có vợ/chồng chưa?",
        answer: {
            a: 'A. Ế',
            b: 'B. Cưới luôn rồi nha',
            c: 'C. Mới chia tay huhuhuhu',
        }
    }
];
var answer = {
    a: 0,
    b: 0,
    c: 0,
}
// Function - Excute
function RemoveItemChoice(list, item) {
    var quesList = list.filter(function(element){
        return element.id !== item.id
    });
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
        DOMquestions.insertAdjacentHTML("beforeend", renderHTML);
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
}

//Goi Ham Tren
showQuestion();
score();
var final;
function judge(){
    var pending = {          
        most_a: `<div id='curry'>
        <div id='curry1'></div>
        <center>
        Đây là bạn
        </center>
        <img src="./mj-says-steph-curry-not-hall-famer.jpg" alt="curry">
    </div>`,
        most_b: `<div id='lebron'>
        <div id='lebron1'></div>
        <img src="./416x416.jpg" alt="curry">
    </div>`,



        most_c:`<div id='david'>
        <div id='david1'></div>
        <img src="./hi-res-bb61cc6d9ff672fdde0b786262bd4c27_crop_north.jpg" alt="curry">
    </div>`,



        other: `<div id='kawhi'>
        <div id='kawhi1'></div>
        <img src="./hi-res-bb61cc6d9ff672fdde0b786262bd4c27_crop_north.jpg" alt="curry">
    </div>`,
        
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
                <div id="end">
                    <a href="./index.html">
                        
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







