const inquire = require("inquirer");
const fs = require("fs");

inquire
.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        validate: (value) =>{
            if(value){return true}
            else{return "give me a value"}
        },
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
        validate: (value) =>{
            if(value){return true}
            else{return "give me a value"}
        },
    },
    {
        type: "input",
        message: "Table of contents?",
        name: "contents",
        validate: (value) =>{
            if(value){return true}
            else{return "give me a value"}
        },
    },
    {
        type: "input",
        message: "what is needed for installation of your app?",
        name: "installation",
        validate: (value) =>{
            if(value){return true}
            else{return "give me a value"}
        },
    },
    {
        type: "input",
        message: "",
        name: "usage",
        validate: (value) =>{
            if(value){return true}
            else{return "give me a value"}
        },
    },
    {
        type: "checkbox",
        message: "",
        name: "license",
        choices: ["","","","",]
    },
    {
        type: "input",
        message: "",
        name: "contributing"
    },
    {
        type: "input",
        message: "",
        name: "tests"
    },
    {
        type: "input",
        message: "Any questions, contact me sbcarls@gmail.com",
        name: "questions",
    },
])