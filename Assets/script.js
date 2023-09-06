$(function () {
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var timeBlock = $('.time-block')
timeBlock.on('click', '.saveBtn', function() {
  var boxText = $(this).closest('.time-block').find('.description').val()
  localStorage.setItem($(this).closest('.time-block').attr('id') + ' boxText', boxText)

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  timeBlock
    if (parseInt($(this).attr('id')) < dayjs().format('H')) {
      $(this).addClass('past')
    } else if (parseInt($(this).attr('id')) > dayjs().format('H')) {
      $(this).addClass('future')
    } else {
      $(this).addClass('present') 
    } 
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  for (i = 9; i < timeBlock.length + 9; i++) {
    var input = "#" + i
    var realInput = i.toString()
    if (localStorage.getItem(realInput + ' boxText') != null) {
      $(input).find('.description').val(localStorage.getItem(realInput + ' boxText'))
    }
  }


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

window.onload = setInterval(function() {
  var currentDay = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  $('#currentDay').text(currentDay)
}, 0)

  
  // TODO: Add code to display the current date in the header of the page.
});
