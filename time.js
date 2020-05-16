var o = document.querySelector('output'),
m = document.querySelector('#m')
s = document.querySelector('#s'),
start = document.querySelector('#start');


start.addEventListener('click', function(){
       var mm = parseInt(m.value),
           ss = parseInt(s.value);
       timer = function(){
           if(mm>0){
               if(ss>0){
                   ss--;
               }
               else{
                   mm--;
                   ss = 59;
               }
               setTimeout("timer()", 1000);
               o.value = (mm<10 ? '0' + mm : mm) + ":" + (ss<10 ? '0' + ss : ss);
           }
           else{
               if(ss>0){
                   ss--;
                   o.value = "00:" + (ss<10 ? '0' + ss : ss);
                   setTimeout("timer()", 1000);
               }
           }
       }

       timer();
}, false);