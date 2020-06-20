(()=>{

    var firebaseConfig = {
        apiKey: "AIzaSyDLC_hT16QxlFS1ldmkECl4CxK4w3OoFBA",
        authDomain: "sonicsales-helpdesk.firebaseapp.com",
        databaseURL: "https://sonicsales-helpdesk.firebaseio.com",
        projectId: "sonicsales-helpdesk",
        storageBucket: "sonicsales-helpdesk.appspot.com",
        messagingSenderId: "213888930294",
        appId: "1:213888930294:web:ef09101b0fe18eae26b7d7"
      };

      firebase.initializeApp(firebaseConfig);
      
      $(document).ready(function(){
        $('select').formSelect();
        $('textarea#message').characterCounter();
        $('.datepicker').datepicker();
        $('.modal').modal({
            dismissible: false
        });
      });

      const db          = firebase.firestore();
      const form        = document.querySelector('#helpdeskform');
      const email       = document.getElementById('email');
      const name        = document.getElementById('name');
      const dept        = document.getElementById('dept');
      const problem     = document.getElementById('problem');
      const priority    = document.getElementById('priority');
      const message     = document.getElementById('message');
      const date        = document.getElementById('date');
      const ticketNum   = document.getElementById('ticketText');

      var now           = new Date();
      var ticketNumber  = now.getFullYear() +''+ Number(now.getMonth() + 1) +''+ now.getDate() +''+ now.getMilliseconds();

      form.addEventListener('submit', function(e){
          e.preventDefault();
          if(email.value == ""||name.value == ""||dept.value == ""||problem.value == ""||priority.value == ""||message.value == ""||date.value == ""){
            e.preventDefault();
            $(document).ready(function(){
                $('#alertModal').modal('open');
            });
          }else{
            db.collection('tickets').add({
                ticket: ticketNumber,
                email:      form.email.value,
                name:       form.name.value,
                dept:       form.dept.value,
                problem:    form.problem.value,
                priority:   form.priority.value,
                message:    form.message.value,
                date:       form.date.value
            }).then(function(e){
                ticketNum.textContent = ticketNumber;
                $(document).ready(function(){
                    $('#successModal').modal('open');
                });
                form.reset();
            });
          }
      })
})();