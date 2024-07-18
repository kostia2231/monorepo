const url = " https://jsonplaceholder.typicode.com/users";
const getUsers = document.querySelector("button");

getUsers.addEventListener("click", () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      const cardContainer = document.createElement("div");
      cardContainer.className = "container";
      users.forEach((usr) => {
        const userCard = document.createElement("div");
        userCard.className = "user-card";

        userCard.innerHTML = `
        <div class = "wrapper-card">
        <h1>${usr.username}</h1>
        <div class = "card-text">
            <div>
                <h2>ID:</h2>
                <p>${usr.id}</p>
            </div>
            <div>
                <h2>Company:</h2>
                <p>${usr.company.name}</p>
            </div>
            <div>
                <h2>E-Mail:</h2>
                <p>${usr.email}</p>
            </div>
            <div>
                <h2>Address:</h2>
                <p>${usr.address.city}</p>
            </div>
            <div>
                <h2>Phone:</h2>
                <p>${usr.phone}</p>
            </div>
        </div>
        </div>
    `;
        cardContainer.appendChild(userCard);
      });

      document.body.append(cardContainer);
      getUsers.remove();
    })

    .catch(() => {
      alert(")-= NO USERS HAVE BEEN FOUND =-(");
    });
});

// for (usr in users) {
//   }

// console.log(users[0].name);
// console.log(users[0].email);
// console.log(users[0].id);
// console.log(users[0].username);
// console.log(users[0].address.city);
// console.log(users[0].phone);
