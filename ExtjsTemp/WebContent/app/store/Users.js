Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
//    fields: ['name', 'email'],
    model: 'AM.model.User',
//    data: [
//        {name: 'Ed',    email: 'ed@sencha.com'},
//        {name: 'Tommy', email: 'tommy@sencha.com'}
//    ]
    autoLoad: true,

    proxy: {
        type: 'rest',
        url: 'data/users.json',
//        api: {
//            read: 'data/users.json',
//            update: 'data/updateUsers.json'
//        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});