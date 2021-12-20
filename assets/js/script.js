$(document).ready(function() {
    var currentDay = $("#currentDay");
    currentDay.text(moment().format("dddd, MMMM Do"));

    $(".saveBtn").on("click", function() {
        var currentBtn = $(this);
        var descriptionDiv = $(this).siblings('.description');
        var descriptionText = descriptionDiv.val();
        var hourID = currentBtn.parent().attr('id');

        localStorage.setItem(hourID, descriptionText);
    });

    function getStorage() {
        const hourID = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];
        for (let i = 0; i < hourID.length; i++) {
            const element = hourID[i];
            console.log(element)
            $(`#${element} .description`).val(localStorage.getItem(element))
        }
    };

    getStorage()
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