module.exports = {
    port: process.env.PORT || 8000,
    callback: (port)=>{console.log('Server listening on port ' + port)}
};