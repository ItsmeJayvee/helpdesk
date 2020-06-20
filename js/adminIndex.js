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

    const form            = document.querySelector('#adminloginform');
    const loginEmail      = document.getElementById('email');
    const loginPassword   = document.getElementById('password');
    const errorMessage    = document.getElementById('erroeMessage');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        if(loginEmail.value == "" ||loginPassword.value == ""){
            e.preventDefault();
            $(document).ready(function(){
                $('#loginErrorModal').modal('open');
            });
        }else{
            var email = loginEmail.value;
            var password = loginPassword.value;
            var promise = firebase.auth().signInWithEmailAndPassword(email, password);
            promise.catch(function(error) {
                e.preventDefault();
                errorMessage.textContent = error.message;
                $('#loginErrorModal2').modal('open');
            });
        }
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location = 'welcome.html';
        } else {
            window.location = 'index.html';
        }
    });
})();