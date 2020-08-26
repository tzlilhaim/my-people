// Get array data from api to variable
function fetchData(cb, func) {
  $.ajax({
    url: "https://randomuser.me/api/?results=15",
    success: function (response) {
      usersArr = response
      cb(usersArr, func)
    },
    error: (xhr, text, error) => alert(text + ": Something went wrong... Please refresh the page to try again"),
  })
}

function printData(data) {
  console.log(data)
}

function invokeFuncWithData(data, func = 0) {
  if (func) {
    func(data)
  }
}

const addUSer = function (data) {
  const source = $("#user-template").html()
  const template = Handlebars.compile(source)
  const newHTML = template(data)
  $("#data").append(newHTML)
}

fetchData(invokeFuncWithData, addUSer)
