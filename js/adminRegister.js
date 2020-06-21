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
        $('.modal').modal({
            dismissible: false
        });
    });

    const form         = document.querySelector('#registerForm');
    const Regemail     = document.getElementById('email');
    const Regpassword  = document.getElementById('password');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        if(Regemail.value == ""||Regpassword.value == ""){
            e.preventDefault();
            $(document).ready(function(){
                $('#errorModal').modal('open');
            });
        }else{
            var email       = Regemail.value;
            var pass        = Regpassword.value;
            var promise     = firebase.auth().createUserWithEmailAndPassword(email, pass);
            
            promise.catch(function(error) {
                errorMessage.textContent = error.message;
                $(document).ready(function(){
                    $('#errorModal2').modal('open');
                })
            });
        }
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location = 'welcome.html';
        }
    });
})();