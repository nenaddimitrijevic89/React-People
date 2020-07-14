const fetchUsers = () => {
    return (
        fetch('https://randomuser.me/api/?results=15')
            .then(response => response.json())
            .catch(error => console.log(error))
    )
}

export { fetchUsers };