const config = {
    server : 'localhost',
    authentication:{
        type: 'default',
        options: {
            userName: 'sa',
            password: 'teste123',
        }
    },
    options:{
        encrypt: false,
        database: 'Lojas'
    },
    port : 55951
}

module.exports = config;