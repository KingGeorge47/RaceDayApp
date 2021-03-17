let raceNumber = Math.floor(Math.random() * 1000);
var runReg = true
var runAge = 18
var AdultraceNumber = raceNumber + 1000
if (runAge >= 18 && runReg === true) {
  console.log('Adults registered early and are good to go, Your race number is ' + AdultraceNumber)
} else {
  console.log('Go speak to the administrators')
} if (runAge >= 18 && runReg === true) {
  console.log('Your race will begin at 9:30am, Your race number is ' + raceNumber)
} else if (runAge >= 18 && runReg === false) {
  console.log('Since you did not register early, you will race at 11:00am, Your race number is ' + raceNumber)
} else if (runAge >= 18 && runReg === true || runReg === false ) {
  console.log('Since you did not register early, you will race at 12:30pm, Your race number is ' + raceNumber)
} else {
  console.log('Go speak to the administrators')
}
