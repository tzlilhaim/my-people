// Get array data from api to variable
function fetchData(cb) {
  $.ajax({
    url: "https://randomuser.me/api/?results=15",
    success: function (users) {
      cb(users)
    },
    error: (xhr, text, error) => renderError({text:"Couldn't load users, please try again"})
  })
}

const renderUsers = function (data) {
  const source = $("#user-template").html()
  const template = Handlebars.compile(source)
  const newHTML = template(data)
  $("#data").append(newHTML)
}

const renderError = function (data) {
  const source = $("#error-template").html()
  const template = Handlebars.compile(source)
  const newHTML = template(data)
  $("#data").append(newHTML)
}

fetchData(renderUsers)