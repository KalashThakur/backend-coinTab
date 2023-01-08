const mongoose = require("mongoose");
// const userSchema=new mongoose.Schema({
//     gender: 'female',
//       name: [Object],
//       location: [Object],
//       email: 'mandy.george@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '021-147-5692',
//       cell: '081-146-9111',
//       id: [Object],
//       picture: [Object],
//       nat: 'IE'
// })

const userSchema = new mongoose.Schema({
    id: Number,
    gender: {type: String},
    name: {
        title: {type: String},
        first: {type: String},
        last: {type: String},
    },
    location: {
        street: {
            number: {type: Number},
            name: {type: String}, 
        },
        city: {type: String},
        state: {type: String},
        country: {type: String},
        postcode: {type: String},
        coordinates: {
            latitude: {type: String},
            longitude: {type: String},
        },
        timezone: {
            offset: {type: String},
            description: {type: String},
        }
    },
    email: String,
    login: {
        uuid: {type: String},
        username: {type: String},
        password: {type: String},
        salt: {type: String},
        md5: {type: String},
        sha1: {type: String},
        sha256: {type: String},
    },
    dob: {
        date: {type: Date},
        age: {type: Number}
    },
    registered: {
        date: {type: Date},
        age: {type: Number}
    },
    phone: {type: String},
    cell: {type: String},
    picture: {
        large: {type: String},
        medium: {type: String},
        thumbnail: {type: String}
    },

})

const UserModel = mongoose.model("usersDetails", userSchema) 

module.exports = {UserModel}