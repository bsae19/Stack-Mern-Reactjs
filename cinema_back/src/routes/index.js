module.exports = (app) => {
    require('./users')(app)
    require('./cinema')(app)
    require('./auth')(app)
}