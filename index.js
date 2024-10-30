var API_ENDPOINT =
  "https://7wl0l2rztg.execute-api.ap-southeast-1.amazonaws.com/prod";

// AJAX POST request to save order data
document.getElementById("saveorder").onclick = function () {
  var inputData = {
    orderID: $("#orderID").val(),
    name: $("#name").val(),
    category: $("#category").val(),
    price: $("#price").val(),
  };
  $.ajax({
    url: API_ENDPOINT,
    type: "POST",
    data: JSON.stringify(inputData),
    contentType: "application/json; charset=utf-8",
    success: function (response) {
      document.getElementById("orderSaved").innerHTML =
        "Order data saved sucessfully!";
    },
    error: function () {
      alert("Error saving data.");
    },
  });
};

// AJAX GET request to retrieve all orders
document.getElementById("getorders").onclick = function () {
  $.ajax({
    url: API_ENDPOINT,
    type: "GET",
    contentType: "application/json; charset=utf-8",
    success: function (response) {
      $("#orderTable tr").slice(1).remove();
      jQuery.each(response, function (i, data) {
        $("#orderTable").append(
          "<tr> \
                    <td>" +
            data["orderID"] +
            "</td> \
                    <td>" +
            data["name"] +
            "</td> \
                    <td>" +
            data["category"] +
            "</td> \
                    <td>" +
            data["price"] +
            "</td> \
                    </tr>"
        );
      });
    },
    error: function () {
      alert("Error retrieving data.");
    },
  });
};
