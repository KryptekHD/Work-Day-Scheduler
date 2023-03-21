// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let schedual = $('.row')
// console.log(schedual)
let saveBtn =$('.saveBtn')



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage

  let description = $('.description')
  
  saveBtn.on('click',function(event){
        event.preventDefault();
        let value = description.val()
       let key= $(this).parent().attr('id')
        localStorage.setItem(key,value)
        return               
  })
  

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
    let hour = dayjs().format('HH').toString();
    console.log(hour)

    let ids = $('div[id]')
    console.log(ids)

    let arrayIds = []
    for(let i=0; i<ids.length;i++){
      arrayIds.push( ids[i].id);
    }
    console.log(arrayIds)
    function schedualColor(){
      for(let i =0; i <arrayIds.length; i++){

        let numb = arrayIds[i].replace('hour-','')
        let a = parseInt(numb)
        let b = parseInt(hour)

        if(a > b ){
          let r = document.getElementById(arrayIds[i])
          r.setAttribute("class"," row time-block future")

        }
        else if (a === b){
          let t = document.getElementById(arrayIds[i])
          t.setAttribute("class"," row time-block present")
          
          console.log("same")
        }
        else{
          console.log("smaller")
          console.log(arrayIds[i])
          let x = document.getElementById(arrayIds[i])
          x.setAttribute("class"," row time-block past")
        }

      }
    }



  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
   function readEvent(){
    
    let info =localStorage.getItem('hour-9')
    $('#hour-9').children().eq(1).append(info)

    let inf =localStorage.getItem('hour-10')
    $('#hour-10').children().eq(1).append(inf)

    let fo =localStorage.getItem('hour-11')
    $('#hour-11').children().eq(1).append(fo)

    let o =localStorage.getItem('hour-12')
    $('#hour-12').children().eq(1).append(o)

    let p =localStorage.getItem('hour-13')
    $('#hour-13').children().eq(1).append(p)

    let c =localStorage.getItem('hour-14')
    $('#hour-14').children().eq(1).append(c)

    let r =localStorage.getItem('hour-15')
    $('#hour-15').children().eq(1).append(r)

    let z =localStorage.getItem('hour-16')
    $('#hour-16').children().eq(1).append(z)

    let h =localStorage.getItem('hour-17')
    $('#hour-17').children().eq(1).append(h)
   }


  // TODO: Add code to display the current date in the header of the page.
  let date = $('#currentDay')
  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    date.text(rightNow);
  }
  displayTime()
  setInterval(displayTime, 1000);
  schedualColor();
  readEvent()
});
