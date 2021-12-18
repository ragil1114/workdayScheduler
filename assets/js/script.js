$(document).ready(function() {
    var currentDay = $("#currentDay");
    currentDay.text(moment().format("dddd, MMMM Do"));

    var saveButton = $(".saveBtn").on("click", function() {
        var currentBtn = $(this);
        var descriptionDiv = $(this).siblings('.description');
        var descriptionText = descriptionDiv.val();
        var hourID = currentBtn.parent().attr('id');

        localStorage.setItem(hourID, descriptionText);
    });

    function hourHandler () {
        var currentHour = moment().hours();

        $(".time-block").each(function(index) {
            var block = $(this);
            var blockId = block.attr("id");
            var blockHour = blockId.split("-")[1];

            if (currentHour == blockHour) {
                $(this).addClass('present');
            }
            else if (blockHour < currentHour) {
                $(this).addClass("past");
            }
            else if (blockHour > currentHour) {
                $(this).addClass("future");
            }
        });
    };

    hourHandler();
});