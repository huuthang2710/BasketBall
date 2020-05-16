let sanbasketball10 = document.getElementById("quan10");
sanbasketball10.addEventListener("click", function() {
    window.location = "basketball10.html";
});

let sanbasketball1 = document.getElementById("quan1");
sanbasketball1.addEventListener("click", function() {
    window.location = "basketball1.html";
});

let sanbasketball2 = document.getElementById("quan2");
sanbasketball2.addEventListener("click", function() {
    window.location = "basketball2.html";
});

let sanbasketball3 = document.getElementById("quan3");
sanbasketball3.addEventListener("click", function() {
    window.location = "basketball3.html";
});

let sanbasketball4567 = document.getElementById("quan4567");
sanbasketball4567.addEventListener("click", function() {
    window.location = "basketball4567.html";
});


let sanbasketball8 = document.getElementById("quan8,10");
sanbasketball8.addEventListener("click", function() {
    window.location = "basketball8,10.html";
});


let sanbasketball11 = document.getElementById("quan11");
sanbasketball11.addEventListener("click", function() {
    window.location = "basketball11.html";
});

let luatbasketball = document.getElementById("luatbro");
luatbasketball.addEventListener("click", function() {
    window.location = "basketballluatbro.html";
});

let homebasketball = document.getElementById("home");
homebasketball.addEventListener("click", function() {
    window.location = "basketball.html";
});

let kythuatbasketball = document.getElementById("kythuatbro");
kythuatbasketball.addEventListener("click", function() {
    window.location = "basketballkithuat.html";
});

let chieucaobasketball = document.getElementById("chieucao");
chieucaobasketball.addEventListener("click", function() {
    window.location = "basketballchieucao.html";
});

let dinhduongbasketball = document.getElementById("dinhduong");
dinhduongbasketball.addEventListener("click", function() {
    window.location = "basketballdinhduong.html";
});

let nbabasketball = document.getElementById("nba");
nbabasketball.addEventListener("click", function() {
    window.location = "basketballnba.html";
});

let nba1basketball = document.getElementById("game2");
nba1basketball.addEventListener("click", function() {
    window.location = "basketballwhonba.html";
});

let nba2basketball = document.getElementById("game1");
nba2basketball.addEventListener("click", function() {
    window.location = "basketballnbapeople.html";
});

let dangnhapbasketball = document.getElementById("dangnhap");
dangnhapbasketball.addEventListener("click", function() {
    window.location = "dangnhap.html";
});

let dangkybasketball = document.getElementById("dangky");
dangkybasketball.addEventListener("click", function() {
    window.location = "dangky.html";
});

let game2basketball = document.getElementById("game2");
game2basketball.addEventListener("click", function() {
    window.location = "game.html";
});

let game3basketball = document.getElementById("game1");
game3basketball.addEventListener("click", function() {
    window.location = "game27.html";
});

let video1basketball = document.getElementById("video1");
video1basketball.addEventListener("click", function() {
    window.location = "video1.html";
});

let video2basketball = document.getElementById("video2");
video2basketball.addEventListener("click", function() {
    window.location = "video2.html";
});

let video3basketball = document.getElementById("video3");
video3basketball.addEventListener("click", function() {
    window.location = "video3.html";
});

























// Phần về làm GAMEEEEEEEEEEEEEEEEEEEEEEE


var question = [{
        id: 1,
        question: 'Bạn thích làm gì khi chơi bro??',
        answer: {
            a: 'A. Ném 3 điểm',
            b: 'B. Ném 2 điểm',
            c: 'C. Ném phạt',
        }
    },
    {
        id: 2,
        question: "Bạn thích câu lỗi kiểu nào?",
        answer: {
            a: 'A. Câu lỗi từ vòng ngoài 3 điểm',
            b: 'B. Câu Lỗi khi ném 2 điểm',
            c: 'C. Câu lỗi khi đột phá',
        }
    },
    {
        id: 3,
        question: "Bạn chơi vị trí nào?",
        answer: {
            a: 'A. PG/SG',
            b: 'B. SF/PF',
            c: 'C. Center',
        }
    },
    {
        id: 4,
        question: "Bạn thích đội bóng nào ở NBA?",
        answer: {
            a: 'A. Golden state warriors',
            b: 'B. Los angeles lakers',
            c: 'C. Houston rockets',
        }
    },
    {
        id: 5,
        question: "Bạn muốn sở hữu chiều cao bao nhiêuuu?",
        answer: {
            a: 'A. 1m9 - 1m95',
            b: 'B. 1m96 - 2m05',
            c: 'C. > 2m5',
        }
    },
    {
        id: 6,
        question: "Bạn đã từng chấn thương :",
        answer: {
            a: 'A. Lật cổ chân ( lật sơ mi )',
            b: 'B. Gãy Xương',
            c: 'C. Chưa Từng',
        }
    },
    {
        id: 7,
        question: "Bạn đã bao giờ bị foulout chưa?",
        answer: {
            a: 'A. Chưa',
            b: 'B. Rồi',
            c: 'C. Còn lâu mới biết nhá',
        }
    },
    {
        id: 8,
        question: "Bạn đã bao giờ đánh nhau khi đang trong trận đấu không?",
        answer: {
            a: 'A. Bí mật',
            b: 'B. Chưa',
            c: 'C. Có',
        }
    },
    {
        id: 9,
        question: "Bạn đã chơi bóng rổ bao lâu?",
        answer: {
            a: 'A. Trên 2 Năm',
            b: 'B. Trên 10 năm',
            c: 'C. Trên 5 năm',
        }
    },
    {
        id: 10,
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
    var quesList = list.filter(function(element) {
        return element.id !== item.id
    });
    return quesList;
}

var DOMquestions = document.getElementById("questions");

function showQuestion() {
    // Chon random 1 thang trong cau hoi
    var item = question[Math.floor(Math.random() * question.length)];
    // Render ra HTML
    if (question.length === 0) {
        return
    } else {
        var renderHTML = `
        <div id="${item.id}" class='answerbox'>
            
            <div id='question'>
            <div><li>${item.question}</li></div>
            </div>
            
            <div class = "ans">
                <div><button class="btn" id='btn1'><li>${item.answer.a}</li></button></div>
                <div><button class="btn" id='btn2'><li>${item.answer.b}</li></button></div>
                <div><button class="btn" id='btn3'><li>${item.answer.c}</li></button></div>
            </div>
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

function judge() {
    var pending = {
        most_a: `<div id='curry'>
        <div id='curry1'></div>
        <center>
        Stephen Curry
        </center>
        <img src="./mj-says-steph-curry-not-hall-famer.jpg" alt="curry">
    </div>`,
        most_b: `<div id='lebron'>
        <div id='lebron1'></div>
        <center>
        Lebron James
        </center>
        <img src="./416x416.jpg" alt="curry">
    </div>`,



        most_c: `<div id='david'>
        <center>
        Athony David
        </center>
        <div id='david1'></div>
        <img src="./hi-res-bb61cc6d9ff672fdde0b786262bd4c27_crop_north.jpg" alt="curry">
    </div>`,



        other: `<div id='kawhi'>
        <center>
        Kawhi Leonar
        </center>
        <div id='kawhi1'></div>
        <img src="./hi-res-e9ae20397fcf0257ea9dd4f141aff7d5_crop_north (1).jpg" alt="curry">
    </div>`,

    };





    if (answer.a > answer.b && answer.a > answer.c) {
        final = pending.most_a;
    } else if (answer.b > answer.a && answer.b > answer.c) {
        final = pending.most_b;
    } else if (answer.c > answer.b && answer.c > answer.a) {
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

function loop() {


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