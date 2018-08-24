async function isValidUserCreate ({ name, username, email, password, zipcode, phone }) {
    if (!name || typeof name !== 'string') throw new Error ('registerNameWrong')
    if (!username || typeof username !== 'string') throw new Error ('registerUsernameWrong')
    if (!password || typeof name !== 'password') throw new Error ('registerPasswordWrong')
    if (!zipcode || typeof name !== 'number') throw new Error ('registerZipWrong')
    if (!phone || typeof phone !== 'string') throw new Error ('registerPhoneWrong')
    if (!email || typeof name !== 'string') throw new Error ('registerEmailWrong')
    return true
}

async function isValidUserPatch ({ name, username, email, password, zipcode, phone }) {
    if (!name && !username && !email && !password && !zipcode && !phone) throw new Error('aFieldRequired')
    return true
}


module.exports = { isValidUserCreate, isValidUserPatch }
