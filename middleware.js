var aujourdhui = new Date();
var hours = aujourdhui.getHours();
var Day = aujourdhui.getDay();

const TimeVerification = (req, res, next) => {
    if (Day > 1 && Day <= 5 && hours > 8 && hours < 19) {
        console.log("on service")
        next()
    } else {
        console.log("hors service");
        res.send(' <h1>out of service  </h1> ')
    }
}
module.exports = TimeVerification;