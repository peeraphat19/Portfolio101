$(document).ready(function () {
    $('.btn-wrap a').on('click', function (e) {
        e.preventDefault();
        $('#subscribeModal').modal('show');
    });

    $('#subscriptionForm').on('submit', function (e) {
        e.preventDefault();
        const email = $('#emailInput').val();
        
        if (email) {
            alert('Success! Thank you for subscribing.');
            $('#subscribeModal').modal('hide');
            $('#emailInput').val('');
        } else {
            alert('Please enter a valid email address.');
        }
    });
});
