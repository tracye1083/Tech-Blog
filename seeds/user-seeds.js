const { User } = require('../models');

const userData = [{
        username: "Jeff",
        email: "JeffWinger@greendale.edu",
        password: "P@ssw0rd1"
    },
    {
        username: "Annie",
        email: "AnnieEdison@greendale.edu",
        password: "P@ssw0rd2"
    },
    {
        username: "Shirley",
        email: "ShirleyBennett@greendale.edu",
        password: "P@ssw0rd3"
    },
    {
        username: "Britta",
        email: "BrittaPerry@greendale.edu",
        password: "P@ssw0rd4"
    },
    {
        username: "Troy",
        email: "TroyBarnes@greendale.edu",
        password: "P@ssw0rd5"
    },
    {
        username: "Abed",
        email: "AbedNadir@greendale.edu",
        password: "P@ssw0rd6"
    },
    {
        username: "Pierce",
        email: "PierceHawthorne@greendale.edu",
        password: "P@ssw0rd7"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;