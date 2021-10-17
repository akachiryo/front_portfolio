  // fetch('users.json').then(function(response) {
  //   // console.log(response);
  //   return response.json();
  // }).then(function(json) {
  //   console.log(json);
  //   for(const user of json) {
  //       console.log(`Im ${user.name}, ${user.age}`)
  //   }
  // })

async function fetchUsers() {
  const response = await fetch('users.json');
  const json = await response.json();
  for (const user of json) {
    console.log(`Im ${user.name}, ${user.age}`)
  }
}

fetchUsers();