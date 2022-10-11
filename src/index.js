console.log("hello world");
const userListElement = document.getElementById("users-list");

const renderUsers = (users) => {
  for (var i = 0; i < users.length; i++) {
    const user = users[i];
    const element = document.createElement("li");
    element.innerText = "Username: " + user.name;
    userListElement.appendChild(element);
  }
};

const getUsers = async () => {
  const response = await fetch("http://localhost:3000/api/users");
  const json = await response.json();
  renderUsers(json.users);
  return json.users;
};

getUsers();
// const renderPuppies = (puppies) => {
//     for (var i = 0; i < puppies.length; i++) {
//         const puppy = puppies[i];
//         const element = document.createElement("p");
//         element.innerText = "Name: " + puppy.name;
//         puppyListElement.appendChild(element);
//     }
// const getPuppies = async () => {
//   // Reach out into DB for puppies
//   const response = await fetch("http://localhost:3000/api/puppies");
//   // const response = await fetch(
//   // "http://localhost:3000/api/puppies",
//   // {
//   //     method: "POST",
//   //     body: {
//   //         asdfasdf: "asdfasdfas"
//   //     },
//   //     header: {
//   //         Content-Type: "application.json",
//   //         // ....
//   //     }
//   // });
//   // const response = await axios.post("/api/puppies", body);

//   // Decode puppies into actual data
//   const json = await response.json();

//   // Give back to the user
//   return json.puppies;

//   // const data = await axios.get("/api/puppies");
//   // const json = await data.json;
// };
