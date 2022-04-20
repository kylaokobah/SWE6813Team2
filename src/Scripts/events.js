//console.log('loaded events');
/*$(function(){
    var submitBtn = $('#submit');
    var epic = $('#epic');
    var platfromDropDownBtn = $('#platform a');
    var regionDropDownBtn = $('#region a');

    var results = $('#results');

    // default values
    var platformDropDownValue = 'pc';
    var regionDropDownValue = 'NAE';

    submitBtn.click(function(){
        var data = {};
        data.epic= epic.val().toLowerCase();
        data.platformDropDownValue = platformDropDownValue.toLowerCase();
        data.regionDropDownValue = regionDropDownValue.toLowerCase();
        $.ajax({
            type: "POST",
            url: '/',
            dataType: 'json',
            data : data,
            success: function(data){
                data = JSON.parse(data);
                displayData(data);
            }
        });
        resetResult();
    });

    platfromDropDownBtn.click(function(){
        platformDropDownValue = $(this).text();
    });

    regionDropDownBtn.click(function(){
        regionDropDownValue = $(this).text();
    });

    function resetResult(){
        results.html('');
        epic.val('');
        platfromDropDownBtn.val('');
        regionDropDownBtn.val('');
    }

    function displayData(data){
        // console.table(data);
        results.html(JSON.stringify(data, undefined, 2));
    }
});*/