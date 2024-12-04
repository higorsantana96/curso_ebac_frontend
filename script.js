$(document).ready(function () {
    $('#taskForm').on('submit', function (event) {
        event.preventDefault();

        const task = $('#taskInput').val().trim();

        if (task !== "") {
            $('#taskList').append(`<li>${task}</li>`);
            $('#taskInput').val('');
        }
    });


    $('#taskList').on('click', 'li', function () {
        $(this).toggleClass('completed');
    });
});
