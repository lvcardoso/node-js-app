var model = 'camry'                                          
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cars?model=' + model,
    headers: { 'X-Api-Key': '8Ww2PG+VCYu5rq+zxbjewQ==aJXPbhAHfkHAohqI'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});