function processErrorMessage(err) {
    console.log(err)
    if (err.message) {
        switch (err.message) {
            case 'registerNameWrong' : return { status: 400, message: 'A valid "Name" is required to register' }
            case 'registerUsernameWrong' : return { status: 400, message: 'A valid "Username" is required to register' }
            case 'registerPasswordWrong' : return { status: 400, message: 'A valid "Password" is required to register' }
            case 'registerZipWrong' : return { status: 400, message: 'A valid "Zip Code" is required to register' }
            case 'registerPhoneWrong' : return { status: 400, message: 'A valid "Phone Number" is required to register' }
            case 'registerEmailWrong' : return { status: 400, message: 'A valid "Email" is required to register' }
            case 'emailTaken' : return { status: 400, message: 'The "Email" provided is already being used' }
            case 'usernameTaken' : return { status: 400, message: 'The "Username" provided is already being used' }
            case 'aFieldRequired' : return { status: 400, message: 'At lease one(1) of the following fields is required: "name", "username", "email", "password", "zipcode", "phone"' }

            default:
                return { status: 500, message: 'An internal server error has occurred.' }
        }
    }
}

module.exports = processErrorMessage
 