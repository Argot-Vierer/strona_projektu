const favoriteUsers = [];

    function fetchUsers() {
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => {
                const users = data.results;
                const tableBody = document.getElementById('userTable').querySelector('tbody');

                // Clear existing rows
                tableBody.innerHTML = '';

                users.forEach(user => {
                    const row = document.createElement('tr');

                    row.innerHTML = `
                        <td><img src="${user.picture.thumbnail}" alt="${user.name.first} ${user.name.last}"></td>
                        <td>${user.name.title} ${user.name.first} ${user.name.last}</td>
                        <td>${user.gender}</td>
                        <td>${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}</td>
                        <td>${user.email}</td>
                        <td>${user.login.username}</td>
                        <td>${new Date(user.dob.date).toLocaleDateString()}</td>
                        <td>${user.phone}</td>
                        <td>${user.cell}</td>
                        <td>${user.nat}</td>
                        <td><button class="btn btn-primary" onclick="addToFavorites(this)">Favorite</button></td>
                    `;

                    row.dataset.user = JSON.stringify(user);

                    tableBody.appendChild(row);
                });

                // Add event listener to filter input
                document.getElementById('filterInput').addEventListener('input', filterUsers);
            })
            .catch(error => console.error('Error fetching user data:', error));
    }

    function filterUsers() {
        const filterValue = document.getElementById('filterInput').value.toLowerCase();
        const rows = document.getElementById('userTable').querySelector('tbody').rows;

        Array.from(rows).forEach(row => {
            const cells = row.querySelectorAll('td');
            const textContent = Array.from(cells).map(cell => cell.textContent.toLowerCase()).join(' ');

            if (textContent.includes(filterValue)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    function addToFavorites(button) {
        const row = button.parentElement.parentElement;
        const user = JSON.parse(row.dataset.user);

        // Check if the user is already in the favorite list
        if (favoriteUsers.some(favUser => favUser.login.uuid === user.login.uuid)) {
            return;
        }

        favoriteUsers.push(user);
        const favoriteTableBody = document.getElementById('favoriteTable').querySelector('tbody');

        const favoriteRow = document.createElement('tr');

        favoriteRow.innerHTML = `
            <td><img src="${user.picture.thumbnail}" alt="${user.name.first} ${user.name.last}"></td>
            <td>${user.name.title} ${user.name.first} ${user.name.last}</td>
            <td>${user.gender}</td>
            <td>${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}</td>
            <td>${user.email}</td>
            <td>${user.login.username}</td>
            <td>${new Date(user.dob.date).toLocaleDateString()}</td>
            <td>${user.phone}</td>
            <td>${user.cell}</td>
            <td>${user.nat}</td>
            <td><button class="btn btn-danger" onclick="removeFromFavorites(this)">Remove</button></td>
        `;

        favoriteRow.dataset.user = JSON.stringify(user);

        favoriteTableBody.appendChild(favoriteRow);

        row.remove();
    }

    function removeFromFavorites(button) {
        const row = button.parentElement.parentElement;
        const user = JSON.parse(row.dataset.user);

        // usuniecie usera
        const index = favoriteUsers.findIndex(favUser => favUser.login.uuid === user.login.uuid);
        if (index !== -1) favoriteUsers.splice(index, 1);

        // dodanie userow do tabeli
        const tableBody = document.getElementById('userTable').querySelector('tbody');

        const mainRow = document.createElement('tr');

        mainRow.innerHTML = `
            <td><img src="${user.picture.thumbnail}" alt="${user.name.first} ${user.name.last}"></td>
            <td>${user.name.title} ${user.name.first} ${user.name.last}</td>
            <td>${user.gender}</td>
            <td>${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}</td>
            <td>${user.email}</td>
            <td>${user.login.username}</td>
            <td>${new Date(user.dob.date).toLocaleDateString()}</td>
            <td>${user.phone}</td>
            <td>${user.cell}</td>
            <td>${user.nat}</td>
            <td><button class="btn btn-primary" onclick="addToFavorites(this)">Favorite</button></td>
        `;

        mainRow.dataset.user = JSON.stringify(user);

        tableBody.appendChild(mainRow);

        row.remove();
    }

    document.getElementById('fetchButton').addEventListener('click', fetchUsers);

    // Pobranie userow
    fetchUsers();



