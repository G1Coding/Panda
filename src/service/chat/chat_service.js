
const user = [
    {id : "aaa", pwd : "aaa", num : 101, admin : 0},
    {id : "bbb", pwd : "bbb", num : 102, admin : 0},
    {id : "ccc", pwd : "ccc", num : 103, admin : 0},
    {id : "zzz", pwd : "zzz", num : 999, admin : 1},
]
const process = {
    loginChk : (body) => {
        const result = user.filter(id => id.id === body.id)
        console.log("process result : ", result)
        return result;
    }
}

const getMessage = (msg, url) => {
    return `
    <script>
        alert('${msg}');
        location.href="${url}";
    </script>
    `
}

const getUser = () => {
    return user;
}

module.exports = {
    process,
    getMessage,
    user,
    getUser,
}