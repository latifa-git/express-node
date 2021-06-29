var aujourdhui = new Date();
var hours = aujourdhui.getHours();
var Day = aujourdhui.getDay();

const TimeVerification = (req, res, next) => {
    if (Day > 1 && Day <= 5 && hours > 8 && hours < 19) {
        console.log("heures d'ouverture")
        next()
    } else {
        console.log("Essayez pendant les heures de travail");
        res.send(' <h1>Essayez pendant les heures de travail  </h1> ')
    }
}
module.exports = TimeVerification;