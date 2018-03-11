
  var submitButton = $("#submitButton");

  // If your API needs headers, add them here as JSON key-value pairs
  var reqHeaders = {
  };

  // This is a GET request
  var getRequest = function(flairType) {
    $.ajax({
      method: "GET",
      url: "https://thawing-tundra-71349.herokuapp.com/users",
      headers: reqHeaders,
      success: function(data) {
        console.log(data);
        responseDiv.html(JSON.stringify(data, undefined, 2));
      },
      error: function() {
        responseDiv.html("error something isnt right");
      }
    });
  };

  // This is a POST request
  var postRequest = function(un ,pw) {
    $.ajax({
      url: "https://thawing-tundra-71349.herokuapp.com/users",
      type: "POST",
      headers: reqHeaders,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({username: un,
             password: pw}),
      dataType: "json",
      success: function(data) {
        console.log("Data being posted by html");
        console.log(data);
      },
      error: function() {
        console.log('error with post')
      }
    });
  };

  submitButton.onclick(function(e) {
    var un = String(username.value);
    var pw = String(password.value);
    console.log(un);
    console.log(pw);
    postRequest(un, pw);
  });
