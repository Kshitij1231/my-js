    // singleton
    // object.create 

    // object literals

    const mySym = Symbol("key1")

    const JsUser = {
        name: "Kshitij",
        "full name": "kshitij Pandey",
        age: 21,
        // mySym: "mykey1"
        [mySym]: "mykey1",
        location: "jaipur",
        email:"kshitijpandey@google.com",
        isLoggedIn: false,
        lastLoginDays: ["monday","tuesday"]
    }

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email ="kshitij788@gmail.com"
// Object.freeze(JsUser)
JsUser.email ="kshitij690@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}    
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}    
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());








