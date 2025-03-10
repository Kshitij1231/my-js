const accountId = 144396
let accountEmail = "kshitij@google.com"
var accountPassword = "5678"
accountCity = "Ayodhya"
let accountState;

//  accountId = 2 // not allowed

accountEmail = "ks@ks.com"
accountPassword = "566475"
accountCity = "Maharashtra"

console.log(accountId);

/*
prefer not to use var
because of issue in blocks cope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
