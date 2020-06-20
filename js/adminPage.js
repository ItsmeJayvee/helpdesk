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
        $('.collapsible').collapsible();
        $('.sidenav').sidenav();
        $('.tabs').tabs();
        $('.modal').modal({
            dismissible: false
        });
    });

    const db                    = firebase.firestore();
    const highPrio              = document.querySelector('#highprio');
    const medPrio               = document.querySelector('#medprio');
    const lowPrio               = document.querySelector('#lowprio');
    const toFollowHighPrio      = document.querySelector('#tofollowhighprio');
    const toFollowMedPrio       = document.querySelector('#tofollowmedprio');
    const toFollowLowPrio       = document.querySelector('#tofollowlowprio');
    const historyHighPrio       = document.querySelector('#tickethistoryhighprio');
    const historyMedPrio        = document.querySelector('#tickethistorymedprio');
    const historyLowPrio        = document.querySelector('#tickethistorylowprio');
    const newBtn                = document.getElementById('newticketsBtn');
    const toFollowBtn           = document.getElementById('tofollowBtn');
    const historyBtn            = document.getElementById('tickethistoryBtn');
    const logoutBtn             = document.getElementById('logoutBtn');
    const newtickets            = document.getElementById('newtickets');
    const tofollow              = document.getElementById('tofollow');
    const ticketHistory         = document.getElementById('tickethistory');

    tofollow.style.display = 'none';
    ticketHistory.style.display = 'none';

    newBtn.addEventListener('click', function(e){
        newtickets.style.display = 'block';
        tofollow.style.display = 'none';
        ticketHistory.style.display = 'none';
    });
    
    toFollowBtn.addEventListener('click', function(e){
        tofollow.style.display = 'block';
        newtickets.style.display = 'none';
        ticketHistory.style.display = 'none';
    });
    
    historyBtn.addEventListener('click', function(e){
        tofollow.style.display = 'none';
        newtickets.style.display = 'none';
        ticketHistory.style.display = 'block';
    });
    
    logoutBtn.addEventListener('click', function(e){
        firebase.auth().signOut().then(function() {
        // Sign-out successful.
        }).catch(function(error) {
        // An error happened.
        });
    });

    function renderNewHighPrioTickets(doc){
        $(document).ready(function(){
            $('select').formSelect();
        });
        let li              = document.createElement('li');
        let divHeader       = document.createElement('div');
        let headerIcon      = document.createElement('i');
        let headerText      = document.createElement('span');
        let divBody         = document.createElement('div');
        let divRow          = document.createElement('div');
        let table           = document.createElement('table');
        let thead           = document.createElement('thead');
        let theadtr         = document.createElement('tr');
        let theadth1        = document.createElement('th');
        let theadth2        = document.createElement('th');
        let theadth3        = document.createElement('th');
        let theadth4        = document.createElement('th');
        let theadth5        = document.createElement('th');
        let tbody           = document.createElement('tbody');
        let tbodytr         = document.createElement('tr');
        let tbodytd1        = document.createElement('td');
        let tbodytd2        = document.createElement('td');
        let tbodytd3        = document.createElement('td');
        let tbodytd4        = document.createElement('td');
        let tbodytd5        = document.createElement('td');
        let divRow2         = document.createElement('div');
        let bodyHeader      = document.createElement('h6');
        let bodyHeaderB     = document.createElement('b');
        let message         = document.createElement('span');
        let divRow3         = document.createElement('div');
        let divLeft         = document.createElement('div');
        let remarks         = document.createElement('select');
        let option0         = document.createElement('option');
        let option1         = document.createElement('option');
        let option2         = document.createElement('option');
        let remarksLabel    = document.createElement('label');
        let divRight        = document.createElement('div');
        let button          = document.createElement('button');

        li.setAttribute('data-id', doc.id);
        headerIcon.setAttribute('class', 'material-icons white-text');
        divHeader.setAttribute('class', 'collapsible-header grey darken-2');
        divBody.setAttribute('class', 'collapsible-body');
        headerText.setAttribute('class', 'white-text');
        table.setAttribute('class', 'highlight centered responsive-table');
        bodyHeader.setAttribute('class', 'center-align');
        bodyHeaderB.setAttribute('class', 'white-text');
        theadtr.setAttribute('class', 'white-text');
        tbodytr.setAttribute('class', 'white-text');
        message.setAttribute('class', 'white-text');
        divRow.setAttribute('class', 'row');
        divRow2.setAttribute('class', 'row');
        divRow3.setAttribute('class', 'row');
        divLeft.setAttribute('class', 'input-field col s6 m6 l6');
        divRight.setAttribute('class', 'input-field col s6 m6 l6 center-align');
        button.setAttribute('class', 'btn waves-effect waves-light black');
        divHeader.style.border          = 'transparent';
        divHeader.style.borderRadius    = '10px';
        headerIcon.textContent          = "email";
        headerText.textContent          = "Ticket Number "+doc.data().ticket;
        divBody.style.border            = 'transparent';
        divBody.style.borderRadius      = '10px';
        theadth1.textContent            = 'Due Date';
        theadth1.style.fontSize         = 'small';
        theadth2.textContent            = 'Name';
        theadth2.style.fontSize         = 'small';
        theadth3.textContent            = 'Email';
        theadth3.style.fontSize         = 'small';
        theadth4.textContent            = 'Department';
        theadth4.style.fontSize         = 'small';
        theadth5.textContent            = 'Problem';
        theadth5.style.fontSize         = 'small';
        tbodytd1.textContent            = doc.data().date;
        tbodytd1.style.fontSize         = 'small';
        tbodytd2.textContent            = doc.data().name;
        tbodytd2.style.fontSize         = 'small';
        tbodytd3.textContent            = doc.data().email;
        tbodytd3.style.fontSize         = 'small';
        tbodytd4.textContent            = doc.data().dept;
        tbodytd4.style.fontSize         = 'small';
        tbodytd5.textContent            = doc.data().problem;
        tbodytd5.style.fontSize         = 'small';
        bodyHeaderB.textContent         = 'Message:';
        message.textContent             = doc.data().message;
        option0.value                   = '';
        option0.textContent             = 'Select Remarks';
        option0.disabled                = true;
        option0.selected                = true;
        option1.value                   = 'To Follow';
        option1.textContent             = 'To Follow';
        option2.value                   = 'Completed';
        option2.textContent             = 'Completed';
        remarksLabel.textContent        = 'Remarks';
        button.textContent              = 'Submit';

        li.appendChild(divHeader);
        divHeader.appendChild(headerIcon);
        divHeader.appendChild(headerText);
        li.appendChild(divBody);
        divBody.appendChild(divRow);
        divRow.appendChild(table);
        table.appendChild(thead);
        thead.appendChild(theadtr);
        theadtr.appendChild(theadth1);
        theadtr.appendChild(theadth2);
        theadtr.appendChild(theadth3);
        theadtr.appendChild(theadth4);
        theadtr.appendChild(theadth5);
        table.appendChild(tbody);
        tbody.appendChild(tbodytr);
        tbodytr.appendChild(tbodytd1);
        tbodytr.appendChild(tbodytd2);
        tbodytr.appendChild(tbodytd3);
        tbodytr.appendChild(tbodytd4);
        tbodytr.appendChild(tbodytd5);
        divBody.appendChild(divRow2);
        divRow2.appendChild(bodyHeader);
        bodyHeader.appendChild(bodyHeaderB);
        divRow2.appendChild(message);
        divBody.appendChild(divRow3);
        divRow3.appendChild(divLeft);
        divLeft.appendChild(remarks);
        remarks.appendChild(option0);
        remarks.appendChild(option1);
        remarks.appendChild(option2);
        divLeft.appendChild(remarksLabel);
        divRow3.appendChild(divRight);
        divRight.appendChild(button);
        highPrio.appendChild(li);

        button.addEventListener('click', function(e){
            db.collection('tickets').doc(doc.id).update({
                remarks: remarks.value
            }).then(function(){
                $(document).ready(function(){
                    $('#successModal').modal('open');
                });
                highPrio.removeChild(li);
            });
        });
    }

    function renderNewMedPrioTickets(doc){
        $(document).ready(function(){
            $('select').formSelect();
        });
        let li              = document.createElement('li');
        let divHeader       = document.createElement('div');
        let headerIcon      = document.createElement('i');
        let headerText      = document.createElement('span');
        let divBody         = document.createElement('div');
        let divRow          = document.createElement('div');
        let table           = document.createElement('table');
        let thead           = document.createElement('thead');
        let theadtr         = document.createElement('tr');
        let theadth1        = document.createElement('th');
        let theadth2        = document.createElement('th');
        let theadth3        = document.createElement('th');
        let theadth4        = document.createElement('th');
        let theadth5        = document.createElement('th');
        let tbody           = document.createElement('tbody');
        let tbodytr         = document.createElement('tr');
        let tbodytd1        = document.createElement('td');
        let tbodytd2        = document.createElement('td');
        let tbodytd3        = document.createElement('td');
        let tbodytd4        = document.createElement('td');
        let tbodytd5        = document.createElement('td');
        let divRow2         = document.createElement('div');
        let bodyHeader      = document.createElement('h6');
        let bodyHeaderB     = document.createElement('b');
        let message         = document.createElement('span');
        let divRow3         = document.createElement('div');
        let divLeft         = document.createElement('div');
        let remarks         = document.createElement('select');
        let option0         = document.createElement('option');
        let option1         = document.createElement('option');
        let option2         = document.createElement('option');
        let remarksLabel    = document.createElement('label');
        let divRight        = document.createElement('div');
        let button          = document.createElement('button');

        li.setAttribute('data-id', doc.id);
        headerIcon.setAttribute('class', 'material-icons white-text');
        divHeader.setAttribute('class', 'collapsible-header grey darken-2');
        divBody.setAttribute('class', 'collapsible-body');
        headerText.setAttribute('class', 'white-text');
        table.setAttribute('class', 'highlight centered responsive-table');
        bodyHeader.setAttribute('class', 'center-align');
        bodyHeaderB.setAttribute('class', 'white-text');
        theadtr.setAttribute('class', 'white-text');
        tbodytr.setAttribute('class', 'white-text');
        message.setAttribute('class', 'white-text');
        divRow.setAttribute('class', 'row');
        divRow2.setAttribute('class', 'row');
        divRow3.setAttribute('class', 'row');
        divLeft.setAttribute('class', 'input-field col s6 m6 l6');
        divRight.setAttribute('class', 'input-field col s6 m6 l6 center-align');
        button.setAttribute('class', 'btn waves-effect waves-light black');
        divHeader.style.border          = 'transparent';
        divHeader.style.borderRadius    = '10px';
        headerIcon.textContent          = "email";
        headerText.textContent          = "Ticket Number "+doc.data().ticket;
        divBody.style.border            = 'transparent';
        divBody.style.borderRadius      = '10px';
        theadth1.textContent            = 'Due Date';
        theadth1.style.fontSize         = 'small';
        theadth2.textContent            = 'Name';
        theadth2.style.fontSize         = 'small';
        theadth3.textContent            = 'Email';
        theadth3.style.fontSize         = 'small';
        theadth4.textContent            = 'Department';
        theadth4.style.fontSize         = 'small';
        theadth5.textContent            = 'Problem';
        theadth5.style.fontSize         = 'small';
        tbodytd1.textContent            = doc.data().date;
        tbodytd1.style.fontSize         = 'small';
        tbodytd2.textContent            = doc.data().name;
        tbodytd2.style.fontSize         = 'small';
        tbodytd3.textContent            = doc.data().email;
        tbodytd3.style.fontSize         = 'small';
        tbodytd4.textContent            = doc.data().dept;
        tbodytd4.style.fontSize         = 'small';
        tbodytd5.textContent            = doc.data().problem;
        tbodytd5.style.fontSize         = 'small';
        bodyHeaderB.textContent         = 'Message:';
        message.textContent             = doc.data().message;
        option0.value                   = '';
        option0.textContent             = 'Select Remarks';
        option0.disabled                = true;
        option0.selected                = true;
        option1.value                   = 'To Follow';
        option1.textContent             = 'To Follow';
        option2.value                   = 'Completed';
        option2.textContent             = 'Completed';
        remarksLabel.textContent        = 'Remarks';
        button.textContent              = 'Submit';

        li.appendChild(divHeader);
        divHeader.appendChild(headerIcon);
        divHeader.appendChild(headerText);
        li.appendChild(divBody);
        divBody.appendChild(divRow);
        divRow.appendChild(table);
        table.appendChild(thead);
        thead.appendChild(theadtr);
        theadtr.appendChild(theadth1);
        theadtr.appendChild(theadth2);
        theadtr.appendChild(theadth3);
        theadtr.appendChild(theadth4);
        theadtr.appendChild(theadth5);
        table.appendChild(tbody);
        tbody.appendChild(tbodytr);
        tbodytr.appendChild(tbodytd1);
        tbodytr.appendChild(tbodytd2);
        tbodytr.appendChild(tbodytd3);
        tbodytr.appendChild(tbodytd4);
        tbodytr.appendChild(tbodytd5);
        divBody.appendChild(divRow2);
        divRow2.appendChild(bodyHeader);
        bodyHeader.appendChild(bodyHeaderB);
        divRow2.appendChild(message);
        divBody.appendChild(divRow3);
        divRow3.appendChild(divLeft);
        divLeft.appendChild(remarks);
        remarks.appendChild(option0);
        remarks.appendChild(option1);
        remarks.appendChild(option2);
        divLeft.appendChild(remarksLabel);
        divRow3.appendChild(divRight);
        divRight.appendChild(button);
        medPrio.appendChild(li);

        button.addEventListener('click', function(e){
            db.collection('tickets').doc(doc.id).update({
                remarks: remarks.value
            }).then(function(){
                $(document).ready(function(){
                    $('#successModal').modal('open');
                });
                medPrio.removeChild(li);
            });
        });
    }

    function renderNewLowPrioTickets(doc){
        $(document).ready(function(){
            $('select').formSelect();
        });
        let li              = document.createElement('li');
        let divHeader       = document.createElement('div');
        let headerIcon      = document.createElement('i');
        let headerText      = document.createElement('span');
        let divBody         = document.createElement('div');
        let divRow          = document.createElement('div');
        let table           = document.createElement('table');
        let thead           = document.createElement('thead');
        let theadtr         = document.createElement('tr');
        let theadth1        = document.createElement('th');
        let theadth2        = document.createElement('th');
        let theadth3        = document.createElement('th');
        let theadth4        = document.createElement('th');
        let theadth5        = document.createElement('th');
        let tbody           = document.createElement('tbody');
        let tbodytr         = document.createElement('tr');
        let tbodytd1        = document.createElement('td');
        let tbodytd2        = document.createElement('td');
        let tbodytd3        = document.createElement('td');
        let tbodytd4        = document.createElement('td');
        let tbodytd5        = document.createElement('td');
        let divRow2         = document.createElement('div');
        let bodyHeader      = document.createElement('h6');
        let bodyHeaderB     = document.createElement('b');
        let message         = document.createElement('span');
        let divRow3         = document.createElement('div');
        let divLeft         = document.createElement('div');
        let remarks         = document.createElement('select');
        let option0         = document.createElement('option');
        let option1         = document.createElement('option');
        let option2         = document.createElement('option');
        let remarksLabel    = document.createElement('label');
        let divRight        = document.createElement('div');
        let button          = document.createElement('button');

        li.setAttribute('data-id', doc.id);
        headerIcon.setAttribute('class', 'material-icons white-text');
        divHeader.setAttribute('class', 'collapsible-header grey darken-2');
        divBody.setAttribute('class', 'collapsible-body');
        headerText.setAttribute('class', 'white-text');
        table.setAttribute('class', 'highlight centered responsive-table');
        bodyHeader.setAttribute('class', 'center-align');
        bodyHeaderB.setAttribute('class', 'white-text');
        theadtr.setAttribute('class', 'white-text');
        tbodytr.setAttribute('class', 'white-text');
        message.setAttribute('class', 'white-text');
        divRow.setAttribute('class', 'row');
        divRow2.setAttribute('class', 'row');
        divRow3.setAttribute('class', 'row');
        divLeft.setAttribute('class', 'input-field col s6 m6 l6');
        divRight.setAttribute('class', 'input-field col s6 m6 l6 center-align');
        button.setAttribute('class', 'btn waves-effect waves-light black');
        divHeader.style.border          = 'transparent';
        divHeader.style.borderRadius    = '10px';
        headerIcon.textContent          = "email";
        headerText.textContent          = "Ticket Number "+doc.data().ticket;
        divBody.style.border            = 'transparent';
        divBody.style.borderRadius      = '10px';
        theadth1.textContent            = 'Due Date';
        theadth1.style.fontSize         = 'small';
        theadth2.textContent            = 'Name';
        theadth2.style.fontSize         = 'small';
        theadth3.textContent            = 'Email';
        theadth3.style.fontSize         = 'small';
        theadth4.textContent            = 'Department';
        theadth4.style.fontSize         = 'small';
        theadth5.textContent            = 'Problem';
        theadth5.style.fontSize         = 'small';
        tbodytd1.textContent            = doc.data().date;
        tbodytd1.style.fontSize         = 'small';
        tbodytd2.textContent            = doc.data().name;
        tbodytd2.style.fontSize         = 'small';
        tbodytd3.textContent            = doc.data().email;
        tbodytd3.style.fontSize         = 'small';
        tbodytd4.textContent            = doc.data().dept;
        tbodytd4.style.fontSize         = 'small';
        tbodytd5.textContent            = doc.data().problem;
        tbodytd5.style.fontSize         = 'small';
        bodyHeaderB.textContent         = 'Message:';
        message.textContent             = doc.data().message;
        option0.value                   = '';
        option0.textContent             = 'Select Remarks';
        option0.disabled                = true;
        option0.selected                = true;
        option1.value                   = 'To Follow';
        option1.textContent             = 'To Follow';
        option2.value                   = 'Completed';
        option2.textContent             = 'Completed';
        remarksLabel.textContent        = 'Remarks';
        button.textContent              = 'Submit';

        li.appendChild(divHeader);
        divHeader.appendChild(headerIcon);
        divHeader.appendChild(headerText);
        li.appendChild(divBody);
        divBody.appendChild(divRow);
        divRow.appendChild(table);
        table.appendChild(thead);
        thead.appendChild(theadtr);
        theadtr.appendChild(theadth1);
        theadtr.appendChild(theadth2);
        theadtr.appendChild(theadth3);
        theadtr.appendChild(theadth4);
        theadtr.appendChild(theadth5);
        table.appendChild(tbody);
        tbody.appendChild(tbodytr);
        tbodytr.appendChild(tbodytd1);
        tbodytr.appendChild(tbodytd2);
        tbodytr.appendChild(tbodytd3);
        tbodytr.appendChild(tbodytd4);
        tbodytr.appendChild(tbodytd5);
        divBody.appendChild(divRow2);
        divRow2.appendChild(bodyHeader);
        bodyHeader.appendChild(bodyHeaderB);
        divRow2.appendChild(message);
        divBody.appendChild(divRow3);
        divRow3.appendChild(divLeft);
        divLeft.appendChild(remarks);
        remarks.appendChild(option0);
        remarks.appendChild(option1);
        remarks.appendChild(option2);
        divLeft.appendChild(remarksLabel);
        divRow3.appendChild(divRight);
        divRight.appendChild(button);
        lowPrio.appendChild(li);

        button.addEventListener('click', function(e){
            db.collection('tickets').doc(doc.id).update({
                remarks: remarks.value
            }).then(function(){
                $(document).ready(function(){
                    $('#successModal').modal('open');
                });
                lowPrio.removeChild(li);
            });
        });
    }

    function renderToFollowHighPrioTickets(doc){
        let li              = document.createElement('li');
        let divHeader       = document.createElement('div');
        let headerIcon      = document.createElement('i');
        let headerText      = document.createElement('span');
        let divBody         = document.createElement('div');
        let divRow          = document.createElement('div');
        let table           = document.createElement('table');
        let thead           = document.createElement('thead');
        let theadtr         = document.createElement('tr');
        let theadth1        = document.createElement('th');
        let theadth2        = document.createElement('th');
        let theadth3        = document.createElement('th');
        let theadth4        = document.createElement('th');
        let theadth5        = document.createElement('th');
        let tbody           = document.createElement('tbody');
        let tbodytr         = document.createElement('tr');
        let tbodytd1        = document.createElement('td');
        let tbodytd2        = document.createElement('td');
        let tbodytd3        = document.createElement('td');
        let tbodytd4        = document.createElement('td');
        let tbodytd5        = document.createElement('td');
        let divRow2         = document.createElement('div');
        let bodyHeader      = document.createElement('h6');
        let bodyHeaderB     = document.createElement('b');
        let message         = document.createElement('span');
        let divRow3         = document.createElement('div');
        let divCenter       = document.createElement('div');
        let button          = document.createElement('button');

        li.setAttribute('data-id', doc.id);
        headerIcon.setAttribute('class', 'material-icons white-text');
        divHeader.setAttribute('class', 'collapsible-header grey darken-2');
        divBody.setAttribute('class', 'collapsible-body');
        headerText.setAttribute('class', 'white-text');
        table.setAttribute('class', 'highlight centered responsive-table');
        bodyHeader.setAttribute('class', 'center-align');
        bodyHeaderB.setAttribute('class', 'white-text');
        theadtr.setAttribute('class', 'white-text');
        tbodytr.setAttribute('class', 'white-text');
        message.setAttribute('class', 'white-text');
        divRow.setAttribute('class', 'row');
        divRow2.setAttribute('class', 'row');
        divRow3.setAttribute('class', 'row');
        divCenter.setAttribute('class', 'input-field col s12 m12 l12 center-align');
        button.setAttribute('class', 'btn waves-effect waves-light black');
        divHeader.style.border          = 'transparent';
        divHeader.style.borderRadius    = '10px';
        headerIcon.textContent          = "email";
        headerText.textContent          = "Ticket Number "+doc.data().ticket;
        divBody.style.border            = 'transparent';
        divBody.style.borderRadius      = '10px';
        theadth1.textContent            = 'Due Date';
        theadth1.style.fontSize         = 'small';
        theadth2.textContent            = 'Name';
        theadth2.style.fontSize         = 'small';
        theadth3.textContent            = 'Email';
        theadth3.style.fontSize         = 'small';
        theadth4.textContent            = 'Department';
        theadth4.style.fontSize         = 'small';
        theadth5.textContent            = 'Problem';
        theadth5.style.fontSize         = 'small';
        tbodytd1.textContent            = doc.data().date;
        tbodytd1.style.fontSize         = 'small';
        tbodytd2.textContent            = doc.data().name;
        tbodytd2.style.fontSize         = 'small';
        tbodytd3.textContent            = doc.data().email;
        tbodytd3.style.fontSize         = 'small';
        tbodytd4.textContent            = doc.data().dept;
        tbodytd4.style.fontSize         = 'small';
        tbodytd5.textContent            = doc.data().problem;
        tbodytd5.style.fontSize         = 'small';
        bodyHeaderB.textContent         = 'Message:';
        message.textContent             = doc.data().message;
        button.textContent              = 'Completed';

        li.appendChild(divHeader);
        divHeader.appendChild(headerIcon);
        divHeader.appendChild(headerText);
        li.appendChild(divBody);
        divBody.appendChild(divRow);
        divRow.appendChild(table);
        table.appendChild(thead);
        thead.appendChild(theadtr);
        theadtr.appendChild(theadth1);
        theadtr.appendChild(theadth2);
        theadtr.appendChild(theadth3);
        theadtr.appendChild(theadth4);
        theadtr.appendChild(theadth5);
        table.appendChild(tbody);
        tbody.appendChild(tbodytr);
        tbodytr.appendChild(tbodytd1);
        tbodytr.appendChild(tbodytd2);
        tbodytr.appendChild(tbodytd3);
        tbodytr.appendChild(tbodytd4);
        tbodytr.appendChild(tbodytd5);
        divBody.appendChild(divRow2);
        divRow2.appendChild(bodyHeader);
        bodyHeader.appendChild(bodyHeaderB);
        divRow2.appendChild(message);
        divBody.appendChild(divRow3);
        divRow3.appendChild(divCenter);
        divCenter.appendChild(button);
        toFollowHighPrio.appendChild(li);

        button.addEventListener('click', function(e){
            db.collection('tickets').doc(doc.id).update({
                remarks: 'Completed'
            }).then(function(){
                $(document).ready(function(){
                    $('#successModal').modal('open');
                });
                toFollowHighPrio.removeChild(li);
            });
        });
    }

    function renderToFollowMedPrioTickets(doc){
        let li              = document.createElement('li');
        let divHeader       = document.createElement('div');
        let headerIcon      = document.createElement('i');
        let headerText      = document.createElement('span');
        let divBody         = document.createElement('div');
        let divRow          = document.createElement('div');
        let table           = document.createElement('table');
        let thead           = document.createElement('thead');
        let theadtr         = document.createElement('tr');
        let theadth1        = document.createElement('th');
        let theadth2        = document.createElement('th');
        let theadth3        = document.createElement('th');
        let theadth4        = document.createElement('th');
        let theadth5        = document.createElement('th');
        let tbody           = document.createElement('tbody');
        let tbodytr         = document.createElement('tr');
        let tbodytd1        = document.createElement('td');
        let tbodytd2        = document.createElement('td');
        let tbodytd3        = document.createElement('td');
        let tbodytd4        = document.createElement('td');
        let tbodytd5        = document.createElement('td');
        let divRow2         = document.createElement('div');
        let bodyHeader      = document.createElement('h6');
        let bodyHeaderB     = document.createElement('b');
        let message         = document.createElement('span');
        let divRow3         = document.createElement('div');
        let divCenter       = document.createElement('div');
        let button          = document.createElement('button');

        li.setAttribute('data-id', doc.id);
        headerIcon.setAttribute('class', 'material-icons white-text');
        divHeader.setAttribute('class', 'collapsible-header grey darken-2');
        divBody.setAttribute('class', 'collapsible-body');
        headerText.setAttribute('class', 'white-text');
        table.setAttribute('class', 'highlight centered responsive-table');
        bodyHeader.setAttribute('class', 'center-align');
        bodyHeaderB.setAttribute('class', 'white-text');
        theadtr.setAttribute('class', 'white-text');
        tbodytr.setAttribute('class', 'white-text');
        message.setAttribute('class', 'white-text');
        divRow.setAttribute('class', 'row');
        divRow2.setAttribute('class', 'row');
        divRow3.setAttribute('class', 'row');
        divCenter.setAttribute('class', 'input-field col s12 m12 l12 center-align');
        button.setAttribute('class', 'btn waves-effect waves-light black');
        divHeader.style.border          = 'transparent';
        divHeader.style.borderRadius    = '10px';
        headerIcon.textContent          = "email";
        headerText.textContent          = "Ticket Number "+doc.data().ticket;
        divBody.style.border            = 'transparent';
        divBody.style.borderRadius      = '10px';
        theadth1.textContent            = 'Due Date';
        theadth1.style.fontSize         = 'small';
        theadth2.textContent            = 'Name';
        theadth2.style.fontSize         = 'small';
        theadth3.textContent            = 'Email';
        theadth3.style.fontSize         = 'small';
        theadth4.textContent            = 'Department';
        theadth4.style.fontSize         = 'small';
        theadth5.textContent            = 'Problem';
        theadth5.style.fontSize         = 'small';
        tbodytd1.textContent            = doc.data().date;
        tbodytd1.style.fontSize         = 'small';
        tbodytd2.textContent            = doc.data().name;
        tbodytd2.style.fontSize         = 'small';
        tbodytd3.textContent            = doc.data().email;
        tbodytd3.style.fontSize         = 'small';
        tbodytd4.textContent            = doc.data().dept;
        tbodytd4.style.fontSize         = 'small';
        tbodytd5.textContent            = doc.data().problem;
        tbodytd5.style.fontSize         = 'small';
        bodyHeaderB.textContent         = 'Message:';
        message.textContent             = doc.data().message;
        button.textContent              = 'Completed';

        li.appendChild(divHeader);
        divHeader.appendChild(headerIcon);
        divHeader.appendChild(headerText);
        li.appendChild(divBody);
        divBody.appendChild(divRow);
        divRow.appendChild(table);
        table.appendChild(thead);
        thead.appendChild(theadtr);
        theadtr.appendChild(theadth1);
        theadtr.appendChild(theadth2);
        theadtr.appendChild(theadth3);
        theadtr.appendChild(theadth4);
        theadtr.appendChild(theadth5);
        table.appendChild(tbody);
        tbody.appendChild(tbodytr);
        tbodytr.appendChild(tbodytd1);
        tbodytr.appendChild(tbodytd2);
        tbodytr.appendChild(tbodytd3);
        tbodytr.appendChild(tbodytd4);
        tbodytr.appendChild(tbodytd5);
        divBody.appendChild(divRow2);
        divRow2.appendChild(bodyHeader);
        bodyHeader.appendChild(bodyHeaderB);
        divRow2.appendChild(message);
        divBody.appendChild(divRow3);
        divRow3.appendChild(divCenter);
        divCenter.appendChild(button);
        toFollowMedPrio.appendChild(li);

        button.addEventListener('click', function(e){
            db.collection('tickets').doc(doc.id).update({
                remarks: 'Completed'
            }).then(function(){
                $(document).ready(function(){
                    $('#successModal').modal('open');
                });
                toFollowMedPrio.removeChild(li);
            });
        });
    }

    function renderToFollowLowPrioTickets(doc){
        let li              = document.createElement('li');
        let divHeader       = document.createElement('div');
        let headerIcon      = document.createElement('i');
        let headerText      = document.createElement('span');
        let divBody         = document.createElement('div');
        let divRow          = document.createElement('div');
        let table           = document.createElement('table');
        let thead           = document.createElement('thead');
        let theadtr         = document.createElement('tr');
        let theadth1        = document.createElement('th');
        let theadth2        = document.createElement('th');
        let theadth3        = document.createElement('th');
        let theadth4        = document.createElement('th');
        let theadth5        = document.createElement('th');
        let tbody           = document.createElement('tbody');
        let tbodytr         = document.createElement('tr');
        let tbodytd1        = document.createElement('td');
        let tbodytd2        = document.createElement('td');
        let tbodytd3        = document.createElement('td');
        let tbodytd4        = document.createElement('td');
        let tbodytd5        = document.createElement('td');
        let divRow2         = document.createElement('div');
        let bodyHeader      = document.createElement('h6');
        let bodyHeaderB     = document.createElement('b');
        let message         = document.createElement('span');
        let divRow3         = document.createElement('div');
        let divCenter       = document.createElement('div');
        let button          = document.createElement('button');

        li.setAttribute('data-id', doc.id);
        headerIcon.setAttribute('class', 'material-icons white-text');
        divHeader.setAttribute('class', 'collapsible-header grey darken-2');
        divBody.setAttribute('class', 'collapsible-body');
        headerText.setAttribute('class', 'white-text');
        table.setAttribute('class', 'highlight centered responsive-table');
        bodyHeader.setAttribute('class', 'center-align');
        bodyHeaderB.setAttribute('class', 'white-text');
        theadtr.setAttribute('class', 'white-text');
        tbodytr.setAttribute('class', 'white-text');
        message.setAttribute('class', 'white-text');
        divRow.setAttribute('class', 'row');
        divRow2.setAttribute('class', 'row');
        divRow3.setAttribute('class', 'row');
        divCenter.setAttribute('class', 'input-field col s12 m12 l12 center-align');
        button.setAttribute('class', 'btn waves-effect waves-light black');
        divHeader.style.border          = 'transparent';
        divHeader.style.borderRadius    = '10px';
        headerIcon.textContent          = "email";
        headerText.textContent          = "Ticket Number "+doc.data().ticket;
        divBody.style.border            = 'transparent';
        divBody.style.borderRadius      = '10px';
        theadth1.textContent            = 'Due Date';
        theadth1.style.fontSize         = 'small';
        theadth2.textContent            = 'Name';
        theadth2.style.fontSize         = 'small';
        theadth3.textContent            = 'Email';
        theadth3.style.fontSize         = 'small';
        theadth4.textContent            = 'Department';
        theadth4.style.fontSize         = 'small';
        theadth5.textContent            = 'Problem';
        theadth5.style.fontSize         = 'small';
        tbodytd1.textContent            = doc.data().date;
        tbodytd1.style.fontSize         = 'small';
        tbodytd2.textContent            = doc.data().name;
        tbodytd2.style.fontSize         = 'small';
        tbodytd3.textContent            = doc.data().email;
        tbodytd3.style.fontSize         = 'small';
        tbodytd4.textContent            = doc.data().dept;
        tbodytd4.style.fontSize         = 'small';
        tbodytd5.textContent            = doc.data().problem;
        tbodytd5.style.fontSize         = 'small';
        bodyHeaderB.textContent         = 'Message:';
        message.textContent             = doc.data().message;
        button.textContent              = 'Completed';

        li.appendChild(divHeader);
        divHeader.appendChild(headerIcon);
        divHeader.appendChild(headerText);
        li.appendChild(divBody);
        divBody.appendChild(divRow);
        divRow.appendChild(table);
        table.appendChild(thead);
        thead.appendChild(theadtr);
        theadtr.appendChild(theadth1);
        theadtr.appendChild(theadth2);
        theadtr.appendChild(theadth3);
        theadtr.appendChild(theadth4);
        theadtr.appendChild(theadth5);
        table.appendChild(tbody);
        tbody.appendChild(tbodytr);
        tbodytr.appendChild(tbodytd1);
        tbodytr.appendChild(tbodytd2);
        tbodytr.appendChild(tbodytd3);
        tbodytr.appendChild(tbodytd4);
        tbodytr.appendChild(tbodytd5);
        divBody.appendChild(divRow2);
        divRow2.appendChild(bodyHeader);
        bodyHeader.appendChild(bodyHeaderB);
        divRow2.appendChild(message);
        divBody.appendChild(divRow3);
        divRow3.appendChild(divCenter);
        divCenter.appendChild(button);
        toFollowLowPrio.appendChild(li);

        button.addEventListener('click', function(e){
            db.collection('tickets').doc(doc.id).update({
                remarks: 'Completed'
            }).then(function(){
                $(document).ready(function(){
                    $('#successModal').modal('open');
                });
                toFollowLowPrio.removeChild(li);
            });
        });
    }

    function renderHistoryHighPrioTickets(doc){
        let li              = document.createElement('li');
        let divHeader       = document.createElement('div');
        let headerIcon      = document.createElement('i');
        let headerText      = document.createElement('span');
        let divBody         = document.createElement('div');
        let divRow          = document.createElement('div');
        let table           = document.createElement('table');
        let thead           = document.createElement('thead');
        let theadtr         = document.createElement('tr');
        let theadth1        = document.createElement('th');
        let theadth2        = document.createElement('th');
        let theadth3        = document.createElement('th');
        let theadth4        = document.createElement('th');
        let theadth5        = document.createElement('th');
        let tbody           = document.createElement('tbody');
        let tbodytr         = document.createElement('tr');
        let tbodytd1        = document.createElement('td');
        let tbodytd2        = document.createElement('td');
        let tbodytd3        = document.createElement('td');
        let tbodytd4        = document.createElement('td');
        let tbodytd5        = document.createElement('td');
        let divRow2         = document.createElement('div');
        let bodyHeader      = document.createElement('h6');
        let bodyHeaderB     = document.createElement('b');
        let message         = document.createElement('span');

        li.setAttribute('data-id', doc.id);
        headerIcon.setAttribute('class', 'material-icons white-text');
        divHeader.setAttribute('class', 'collapsible-header grey darken-2');
        divBody.setAttribute('class', 'collapsible-body');
        headerText.setAttribute('class', 'white-text');
        table.setAttribute('class', 'highlight centered responsive-table');
        bodyHeader.setAttribute('class', 'center-align');
        bodyHeaderB.setAttribute('class', 'white-text');
        theadtr.setAttribute('class', 'white-text');
        tbodytr.setAttribute('class', 'white-text');
        message.setAttribute('class', 'white-text');
        divRow.setAttribute('class', 'row');
        divRow2.setAttribute('class', 'row');
        divHeader.style.border          = 'transparent';
        divHeader.style.borderRadius    = '10px';
        headerIcon.textContent          = "email";
        headerText.textContent          = "Ticket Number "+doc.data().ticket;
        divBody.style.border            = 'transparent';
        divBody.style.borderRadius      = '10px';
        theadth1.textContent            = 'Due Date';
        theadth1.style.fontSize         = 'small';
        theadth2.textContent            = 'Name';
        theadth2.style.fontSize         = 'small';
        theadth3.textContent            = 'Email';
        theadth3.style.fontSize         = 'small';
        theadth4.textContent            = 'Department';
        theadth4.style.fontSize         = 'small';
        theadth5.textContent            = 'Problem';
        theadth5.style.fontSize         = 'small';
        tbodytd1.textContent            = doc.data().date;
        tbodytd1.style.fontSize         = 'small';
        tbodytd2.textContent            = doc.data().name;
        tbodytd2.style.fontSize         = 'small';
        tbodytd3.textContent            = doc.data().email;
        tbodytd3.style.fontSize         = 'small';
        tbodytd4.textContent            = doc.data().dept;
        tbodytd4.style.fontSize         = 'small';
        tbodytd5.textContent            = doc.data().problem;
        tbodytd5.style.fontSize         = 'small';
        bodyHeaderB.textContent         = 'Message:';
        message.textContent             = doc.data().message;

        li.appendChild(divHeader);
        divHeader.appendChild(headerIcon);
        divHeader.appendChild(headerText);
        li.appendChild(divBody);
        divBody.appendChild(divRow);
        divRow.appendChild(table);
        table.appendChild(thead);
        thead.appendChild(theadtr);
        theadtr.appendChild(theadth1);
        theadtr.appendChild(theadth2);
        theadtr.appendChild(theadth3);
        theadtr.appendChild(theadth4);
        theadtr.appendChild(theadth5);
        table.appendChild(tbody);
        tbody.appendChild(tbodytr);
        tbodytr.appendChild(tbodytd1);
        tbodytr.appendChild(tbodytd2);
        tbodytr.appendChild(tbodytd3);
        tbodytr.appendChild(tbodytd4);
        tbodytr.appendChild(tbodytd5);
        divBody.appendChild(divRow2);
        divRow2.appendChild(bodyHeader);
        bodyHeader.appendChild(bodyHeaderB);
        divRow2.appendChild(message);
        historyHighPrio.appendChild(li);
    }

    function renderHistoryMedPrioTickets(doc){
        let li              = document.createElement('li');
        let divHeader       = document.createElement('div');
        let headerIcon      = document.createElement('i');
        let headerText      = document.createElement('span');
        let divBody         = document.createElement('div');
        let divRow          = document.createElement('div');
        let table           = document.createElement('table');
        let thead           = document.createElement('thead');
        let theadtr         = document.createElement('tr');
        let theadth1        = document.createElement('th');
        let theadth2        = document.createElement('th');
        let theadth3        = document.createElement('th');
        let theadth4        = document.createElement('th');
        let theadth5        = document.createElement('th');
        let tbody           = document.createElement('tbody');
        let tbodytr         = document.createElement('tr');
        let tbodytd1        = document.createElement('td');
        let tbodytd2        = document.createElement('td');
        let tbodytd3        = document.createElement('td');
        let tbodytd4        = document.createElement('td');
        let tbodytd5        = document.createElement('td');
        let divRow2         = document.createElement('div');
        let bodyHeader      = document.createElement('h6');
        let bodyHeaderB     = document.createElement('b');
        let message         = document.createElement('span');

        li.setAttribute('data-id', doc.id);
        headerIcon.setAttribute('class', 'material-icons white-text');
        divHeader.setAttribute('class', 'collapsible-header grey darken-2');
        divBody.setAttribute('class', 'collapsible-body');
        headerText.setAttribute('class', 'white-text');
        table.setAttribute('class', 'highlight centered responsive-table');
        bodyHeader.setAttribute('class', 'center-align');
        bodyHeaderB.setAttribute('class', 'white-text');
        theadtr.setAttribute('class', 'white-text');
        tbodytr.setAttribute('class', 'white-text');
        message.setAttribute('class', 'white-text');
        divRow.setAttribute('class', 'row');
        divRow2.setAttribute('class', 'row');
        divHeader.style.border          = 'transparent';
        divHeader.style.borderRadius    = '10px';
        headerIcon.textContent          = "email";
        headerText.textContent          = "Ticket Number "+doc.data().ticket;
        divBody.style.border            = 'transparent';
        divBody.style.borderRadius      = '10px';
        theadth1.textContent            = 'Due Date';
        theadth1.style.fontSize         = 'small';
        theadth2.textContent            = 'Name';
        theadth2.style.fontSize         = 'small';
        theadth3.textContent            = 'Email';
        theadth3.style.fontSize         = 'small';
        theadth4.textContent            = 'Department';
        theadth4.style.fontSize         = 'small';
        theadth5.textContent            = 'Problem';
        theadth5.style.fontSize         = 'small';
        tbodytd1.textContent            = doc.data().date;
        tbodytd1.style.fontSize         = 'small';
        tbodytd2.textContent            = doc.data().name;
        tbodytd2.style.fontSize         = 'small';
        tbodytd3.textContent            = doc.data().email;
        tbodytd3.style.fontSize         = 'small';
        tbodytd4.textContent            = doc.data().dept;
        tbodytd4.style.fontSize         = 'small';
        tbodytd5.textContent            = doc.data().problem;
        tbodytd5.style.fontSize         = 'small';
        bodyHeaderB.textContent         = 'Message:';
        message.textContent             = doc.data().message;

        li.appendChild(divHeader);
        divHeader.appendChild(headerIcon);
        divHeader.appendChild(headerText);
        li.appendChild(divBody);
        divBody.appendChild(divRow);
        divRow.appendChild(table);
        table.appendChild(thead);
        thead.appendChild(theadtr);
        theadtr.appendChild(theadth1);
        theadtr.appendChild(theadth2);
        theadtr.appendChild(theadth3);
        theadtr.appendChild(theadth4);
        theadtr.appendChild(theadth5);
        table.appendChild(tbody);
        tbody.appendChild(tbodytr);
        tbodytr.appendChild(tbodytd1);
        tbodytr.appendChild(tbodytd2);
        tbodytr.appendChild(tbodytd3);
        tbodytr.appendChild(tbodytd4);
        tbodytr.appendChild(tbodytd5);
        divBody.appendChild(divRow2);
        divRow2.appendChild(bodyHeader);
        bodyHeader.appendChild(bodyHeaderB);
        divRow2.appendChild(message);
        historyMedPrio.appendChild(li);
    }

    function renderHistoryLowPrioTickets(doc){
        let li              = document.createElement('li');
        let divHeader       = document.createElement('div');
        let headerIcon      = document.createElement('i');
        let headerText      = document.createElement('span');
        let divBody         = document.createElement('div');
        let divRow          = document.createElement('div');
        let table           = document.createElement('table');
        let thead           = document.createElement('thead');
        let theadtr         = document.createElement('tr');
        let theadth1        = document.createElement('th');
        let theadth2        = document.createElement('th');
        let theadth3        = document.createElement('th');
        let theadth4        = document.createElement('th');
        let theadth5        = document.createElement('th');
        let tbody           = document.createElement('tbody');
        let tbodytr         = document.createElement('tr');
        let tbodytd1        = document.createElement('td');
        let tbodytd2        = document.createElement('td');
        let tbodytd3        = document.createElement('td');
        let tbodytd4        = document.createElement('td');
        let tbodytd5        = document.createElement('td');
        let divRow2         = document.createElement('div');
        let bodyHeader      = document.createElement('h6');
        let bodyHeaderB     = document.createElement('b');
        let message         = document.createElement('span');

        li.setAttribute('data-id', doc.id);
        headerIcon.setAttribute('class', 'material-icons white-text');
        divHeader.setAttribute('class', 'collapsible-header grey darken-2');
        divBody.setAttribute('class', 'collapsible-body');
        headerText.setAttribute('class', 'white-text');
        table.setAttribute('class', 'highlight centered responsive-table');
        bodyHeader.setAttribute('class', 'center-align');
        bodyHeaderB.setAttribute('class', 'white-text');
        theadtr.setAttribute('class', 'white-text');
        tbodytr.setAttribute('class', 'white-text');
        message.setAttribute('class', 'white-text');
        divRow.setAttribute('class', 'row');
        divRow2.setAttribute('class', 'row');
        divHeader.style.border          = 'transparent';
        divHeader.style.borderRadius    = '10px';
        headerIcon.textContent          = "email";
        headerText.textContent          = "Ticket Number "+doc.data().ticket;
        divBody.style.border            = 'transparent';
        divBody.style.borderRadius      = '10px';
        theadth1.textContent            = 'Due Date';
        theadth1.style.fontSize         = 'small';
        theadth2.textContent            = 'Name';
        theadth2.style.fontSize         = 'small';
        theadth3.textContent            = 'Email';
        theadth3.style.fontSize         = 'small';
        theadth4.textContent            = 'Department';
        theadth4.style.fontSize         = 'small';
        theadth5.textContent            = 'Problem';
        theadth5.style.fontSize         = 'small';
        tbodytd1.textContent            = doc.data().date;
        tbodytd1.style.fontSize         = 'small';
        tbodytd2.textContent            = doc.data().name;
        tbodytd2.style.fontSize         = 'small';
        tbodytd3.textContent            = doc.data().email;
        tbodytd3.style.fontSize         = 'small';
        tbodytd4.textContent            = doc.data().dept;
        tbodytd4.style.fontSize         = 'small';
        tbodytd5.textContent            = doc.data().problem;
        tbodytd5.style.fontSize         = 'small';
        bodyHeaderB.textContent         = 'Message:';
        message.textContent             = doc.data().message;

        li.appendChild(divHeader);
        divHeader.appendChild(headerIcon);
        divHeader.appendChild(headerText);
        li.appendChild(divBody);
        divBody.appendChild(divRow);
        divRow.appendChild(table);
        table.appendChild(thead);
        thead.appendChild(theadtr);
        theadtr.appendChild(theadth1);
        theadtr.appendChild(theadth2);
        theadtr.appendChild(theadth3);
        theadtr.appendChild(theadth4);
        theadtr.appendChild(theadth5);
        table.appendChild(tbody);
        tbody.appendChild(tbodytr);
        tbodytr.appendChild(tbodytd1);
        tbodytr.appendChild(tbodytd2);
        tbodytr.appendChild(tbodytd3);
        tbodytr.appendChild(tbodytd4);
        tbodytr.appendChild(tbodytd5);
        divBody.appendChild(divRow2);
        divRow2.appendChild(bodyHeader);
        bodyHeader.appendChild(bodyHeaderB);
        divRow2.appendChild(message);
        historyLowPrio.appendChild(li);
    }
    
    db.collection("tickets").where('remarks', '==', null).onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            if (change.type === "added") {
                if(change.doc.data().priority === 'High Prio'){
                    renderNewHighPrioTickets(change.doc);
                }
                if(change.doc.data().priority === 'Medium Prio'){
                    renderNewMedPrioTickets(change.doc)
                }
                if(change.doc.data().priority === 'Low Prio'){
                    renderNewLowPrioTickets(change.doc);
                }
            }
        });
    });

    db.collection("tickets").where('remarks', '==', 'To Follow').onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            if (change.type === "added") {
                if(change.doc.data().priority === 'High Prio'){
                    renderToFollowHighPrioTickets(change.doc);
                }
                if(change.doc.data().priority === 'Medium Prio'){
                    renderToFollowMedPrioTickets(change.doc)
                }
                if(change.doc.data().priority === 'Low Prio'){
                    renderToFollowLowPrioTickets(change.doc);
                }
            }
        });
    });

    db.collection("tickets").where('remarks', '==', 'Completed').onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            if (change.type === "added") {
                if(change.doc.data().priority === 'High Prio'){
                    renderHistoryHighPrioTickets(change.doc);
                }
                if(change.doc.data().priority === 'Medium Prio'){
                    renderHistoryMedPrioTickets(change.doc)
                }
                if(change.doc.data().priority === 'Low Prio'){
                    renderHistoryLowPrioTickets(change.doc);
                }
            }
        });
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
        } else {
          window.location = 'index.html';
        }
    });
})();