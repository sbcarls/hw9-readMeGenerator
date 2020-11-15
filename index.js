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
        message: "What is the table of contents?",
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
        message: "What is the app used for?",
        name: "usage",
        validate: (value) =>{
            if(value){return true}
            else{return "give me a value"}
        },
    },
    {
        type: "input",
        message: "How do you use the app?",
        name: "usage2",
        validate: (value) =>{
            if(value){return true}
            else{return "give me a value"}
        },
    },
    {    //need license choices here //
        type: "checkbox",
        message: "Does this app require any licenses?",
        name: "license",
        choices: ["","","","",]
    },
    {
        type: "input",
        message: "What are the contributing instructions for this project?",
        name: "contributing"
    },
    {
        type: "input",
        message: "How would people test this project?",
        name: "tests"
    },
    {
        type: "input",
        message: "Any questions, contact me at sbcarls@gmail.com",
        name: "questions",
    },
]) .then(({
    title,
    description, 
    contents,
    installation,
    usage,
    usage2, 
    license,
    contributing,
    tests,
    questions,
}) => {
    let template = ` # ${title}
    * [description] (#description)
    * [contents] (#contents)
    * [installation] (#installation)
    * [usage] (#usage)
    * [usage2] (#usage2)
    * [license] (#license)
    * [contributing] (#contributing)
    * [tests] (#tests)
    * [questions] (#questions)


    `
}).then(res=> {
    fs.writeFile("./fs.generate.txt", `${res.title}, ${res.description}, ${res.contentd}, ${res.installation}, ${res.usage}, ${res.usage2}, ${res.license}, ${res.contributing}, ${res.tests}, ${res.questions}`)
})
