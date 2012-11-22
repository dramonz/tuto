Ext.define('AG.store.Agendas', {
    extend: 'Ext.data.Store',
    model: 'AG.model.Agenda',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/data.json',
            update: 'data/updateUsers.json',
            detele:'#'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
    	writer: {
			type: 'json'
		}
    }
});