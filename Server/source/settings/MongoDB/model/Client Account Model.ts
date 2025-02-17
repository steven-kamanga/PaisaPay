export default {
    ClientID: {type: Number, required: true},
    Name: {type: String, required: true},
    Email: {type: String, required: true},
    DOB: {type: Date, required: true, index: true},
    PhoneNumber: {type: Number, required: true},
    Password: {type: String, required: true},
    National_ID_Type: {type: String, required: true, index: true},
    National_ID_Number: {type: String, required: true, unique: true},
    LastFourDigitsOfIDNumber: {type: String, required: true, unique: true},
    ProfilePicturePath: {type: String, required: true},
    ProfilePicSize: {type: Number, required: true},
    ProfilePicFileName: {type: String, required: true},
    DateCreated: {type: Date, required: true, default: Date.now(), index: true},
    AccountStatus: {type: String, required: true, default: "Active"},
    AccountType: {type: String, required: true, default: "Client"},
    LastLoginTime: {type: Date, required: true, default: Date.now()},
    LastLoginIP: {type: String, required: true},
    LastLoginClientDetails: {type: Object, required: true},
    LastLoginToken: {type: String, required: true, default: ""},
} // export the client account data model