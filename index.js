function submitData(name, email){
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
  },
  body: JSON.stringify({
    name: name,
    email: email
  })
}
return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json()
    })
    .then(function (object) {
        console.log(object)
        document.body.append(object.id)
    })
    .catch(function (error) {
        alert("ERROR");
        console.log(error.message)
        document.body.append(error.message)
    })

}