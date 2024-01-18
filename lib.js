
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('registrationForm');

    form.addEventListener('input', function(event) {
        validateInput(event.target);
    });

    form.addEventListener('submit', function(event) {
        var isValid = validateForm();

        if (!isValid) {
            event.preventDefault(); // Αποτροπή υποβολής φόρμας εάν δεν είναι έγκυρη
        }
    });

    function validateInput(input) {
        // Προσαρμοσμένος έλεγχος εγκυρότητας
        if (input.id === 'fullName') {
            validateFullName(input);
        } else if (input.id === 'email') {
            validateEmail(input);
        } else if (input.id === 'address') {
            validateAddress(input);
        } else if (input.id === 'birthdate') {
            validateBirthdate(input);
        } else if (input.id === 'phone') {
            validatePhone(input);
        } else if (input.id === 'password') {
            validatePassword(input);
        } else if (input.id === 'confirmPassword') {
            validateConfirmPassword(input);
        }
        // Προσθέστε περισσότερους ελέγχους ανάλογα με τις απαιτήσεις σας
    }

    function validateFullName(input) {
        // Παράδειγμα: Το ονοματεπώνυμο πρέπει να έχει τουλάχιστον δύο λέξεις
        var fullName = input.value.trim();
        var words = fullName.split(' ');

        if (words.length < 2) {
            input.setCustomValidity('Πρέπει να εισαγάγετε τουλάχιστον δύο λέξεις.');
        } else {
            input.setCustomValidity('');
        }
    }

    function validateEmail(input) {
        // Παράδειγμα: Έλεγχος εγκυρότητας email με χρήση regex
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(input.value)) {
            input.setCustomValidity('Εισάγετε ένα έγκυρο email.');
        } else {
            input.setCustomValidity('');
        }
    }

    function validatePhone(input) {
        // Έλεγχος για τουλάχιστον 10 αριθμούς και ξεκινά με 69
        var phonePattern = /^69\d{8}$/;
    
        if (!phonePattern.test(input.value)) {
            input.setCustomValidity('Εισάγετε ένα έγκυρο τηλέφωνο που ξεκινά με 69 και αποτελείται από συνολικά 10 αριθμούς.');
        } else {
            input.setCustomValidity('');
        }
    }

    function validateForm() {
        // Προσαρμοσμένος έλεγχος φόρμας
        var isValid = true;

        // Προσθέστε περισσότερους ελέγχους ανάλογα με τις απαιτήσεις σας

        return isValid;
    }


    function validateConfirmPassword(input) {
        // Έλεγχος επιβεβαίωσης κωδικού
        var password = form.querySelector('#password').value;
        var confirmPassword = input.value;

        if (password !== confirmPassword) {
            input.setCustomValidity('Οι κωδικοί δεν ταιριάζουν.');
        } else {
            input.setCustomValidity('');
        }
    }
});