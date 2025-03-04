const accountId = 144553
let accountEmail = "priyanshi@google.com"
var accountPassword = "12345"
accountCity = "Barnala"
let accountState;

// accountId = 2 // not allowed


accountEmail = "anjs@as.com"
accountPassword = "123"
accountCity = "Chandigarh"

console.log(accountId);

/*
Prefer not to use
ecause of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])