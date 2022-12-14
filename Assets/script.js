let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
let currentHour = moment().format('h')
let currentHour24 = parseInt(moment().format('HH'));
let currentHourInt = parseInt(currentHour);
let Timer;

const hour1 = $('#time1').text();
const hour2 = $('#time2').text();
const hour3 = $('#time3').text();
const hour4 = $('#time4').text();
const hour5 = $('#time5').text();
const hour6 = $('#time6').text();
const hour7 = $('#time7').text();
const hour8 = $('#time8').text();
const hour9 = $('#time9').text();

const hour1Int = parseInt(hour1);
const hour2Int = parseInt(hour2);
const hour3Int = parseInt(hour3);
const hour4Int = parseInt(hour4);
const hour5Int = parseInt(hour5);
const hour6Int = parseInt(hour6);
const hour7Int = parseInt(hour7);
const hour8Int = parseInt(hour8);
const hour9Int = parseInt(hour9);

// User input local Storage

$('#btn1').click(function() {
    if($('#text1').val()) {
      localStorage.removeItem('text1');
    }
  
    const hour1String = JSON.stringify(hour1);
    
    localStorage.setItem(hour1, $('#text1').val());
  });
  
  $('#btn2').click(function() {
    if($('#text2').val()) {
      localStorage.removeItem('text2');
    }
  
    const hour2String = JSON.stringify(hour2);
  
    localStorage.setItem(hour2, $('#text2').val());
  });
  
  $('#btn3').click(function() {
    if($('#text3').val()) {
      localStorage.removeItem('text3');
    }
  
    const hour3String = JSON.stringify(hour3);
  
    localStorage.setItem(hour3, $('#text3').val());
  });
  
  $('#btn4').click(function() {
    if($('#text4').val()) {
      localStorage.removeItem('text4');
    }
  
    const hour4String = JSON.stringify(hour4);
  
    localStorage.setItem(hour4, $('#text4').val());
  });
  
  $('#btn5').click(function() {
    if($('#text5').val()) {
      localStorage.removeItem('text5');
    }
  
    const hour5String = JSON.stringify(hour5);
  
    localStorage.setItem(hour5, $('#text5').val());
  });
  
  $('#btn6').click(function() {
    if($('#text6').val()) {
      localStorage.removeItem('text6');
    }
  
    const hour6String = JSON.stringify(hour6);
  
    localStorage.setItem(hour6, $('#text6').val());
  });
  
  $('#btn7').click(function() {
    if($('#text7').val()) {
      localStorage.removeItem('text7');
    }
  
    const hour7String = JSON.stringify(hour7);
  
    localStorage.setItem(hour7, $('#text7').val());
  })
  
  $('#btn8').click(function() {
    if($('#text8').val()) {
      localStorage.removeItem('text8');
    }
  
    const hour8String = JSON.stringify(hour8);
  
    localStorage.setItem("text8", $('#text8').val());
  })
  
  $('#btn9').click(function() { 
    if($('#text9').val()) {
      localStorage.removeItem('text9');
    }
  
    const hour9String = JSON.stringify(hour9);
  
    localStorage.setItem(hour9, $('#text9').val());
  })
  
  // Display the time using moment.js
  
  $('#currentDay').append(currentTime);
  
  // Color coding to reflect whether the time slot is in the past, the present or the future 
  
  colorCoding();
  
  function colorCoding() {
  
    TIMER = setInterval(colorCoding, 1000);
    // Test check: hourNow24 = 20;
    if(currentHour24 >= 9 && currentHour24  <= 17) {
  
      for (let i =1; i<=9 ; i++) { 
       let hourInInt = parseInt($('#time'+i).text());
  
        if (hourInInt < 9) {
          hourInInt = hourInInt + 12;
        }
        
        if (hourInInt == currentHour24 ) {
          $('#text'+i).css('background-color', '#FB8F78');
          continue;
        }
        
        if (hourInInt < currentHour24 ) {
          $('#text'+i).css('background-color', 'lightgray');
        } 
        else {
          $('#text'+i).css('background-color', 'lightgreen');
        }
      }
  
    }
    else {
      clearInterval(TIMER);
      $('textarea').css('background-color', 'pink');
    }
  }