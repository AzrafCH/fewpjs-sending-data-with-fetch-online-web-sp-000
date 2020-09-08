// Add your code here
<<<<<<< HEAD
let submitData = {
    name = "same",
    email = "sam@sam.com"
};

let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(submitData)
};

fetch("http://localhost:3000/users", configObj);
then(function(response) {
    return response.json();
  })
  then(function(object) {
    console.log(object);
  })
  catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });
=======
// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "heyo",
//     dogBreed: "hi"
//   })
// });
////////////////////////////////////////////////

// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };

//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };

//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     });
//     .catch(function(error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//       });

function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(function(response){
        return response.json()
    })
    .then(function(object){
        document.body.innerHTML = object['id']
    })
    .catch(function(error){
        document.body.innerHTML = error.message
    })
}

submitData();
>>>>>>> afc110b1b540ac6f1cce3447aa968556c3137982
