const express = require("express");
const faker = require('faker');
const app = express();
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = { 
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}



// req is short for request
// res is short for response

app.get("/api/users/new", (req, res) => {
    const user1 = new User();
    res.json({user1});
})

app.get("/api/companies/new", (req, res) => {
    const company1 = new Company();
    res.json({company1})
})

app.get("/api/user/company", (req, res) => {
    const user2 = new User();
    const company2 = new Company();
    res.json({user2, company2});
})

app.get("/api", (req, res) => {
    res.send({ message: "UwU from app.get api"});
})



app.listen( port, () => console.log(`listening uwu port: ${port}`))