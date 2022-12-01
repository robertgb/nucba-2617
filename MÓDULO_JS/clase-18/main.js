/* fetch("https://reqres.in/api/users/619", {
  method: "PUT",
  body: {
    name: "Robert",
    job: "Engineer II",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Error:", error));
 */

/* 
fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Hubo un ERROR:", error)); 
*/


const getUsers = async () => {
    let users = []
    try {
        const response = await fetch("https://reqres.in/api/users")
        const { data:usersData } = await response.json()
        users = usersData;
        // console.log(users)
    } catch (error) {
        console.log('HUBO UN ERROR:', error)
    } finally {
        return users;
    }
}


const usersContainer = document.getElementById('container');

const getUserHtml = ({ avatar, id, email, first_name, last_name}) => {
    return `
        <li>
            <div>
                <h2>${first_name} ${last_name} (#ID: ${id})</h2>
                <p>Email: ${email}</p>
                <img src="${avatar}" />
            </div>
        </li>
    `
}

const renderUsers = users => {
    const html = users.map(getUserHtml).join('')
    usersContainer.innerHTML = html
}

async function init() {
    const allUsers = await getUsers()
    // console.log(allUsers, 'AllUsers')
    renderUsers(allUsers)
}
init()