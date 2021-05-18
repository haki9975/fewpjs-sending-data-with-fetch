
const destinationURL = "http://localhost:3000/users"
let formData = {
    name: "Steve",
    email: "steve@steve.com"
};

const configurationObject = {
    method: "POST",
    headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
};

const doc = document.getElementById("index")


function submitData() {
    fetch(destinationURL, configurationObject)
        .then(function(response){
            return response.json();
        })
            .then(function(object){
                doc.append(object[id])
            })
                .catch(function(error){
                    alert("Unauthorized Access")
                    console.log(error.message)
                })

};



