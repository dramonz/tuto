Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
    views: [ 'user.List','user.Edit'  ],
    stores: ['Users'         ],
    models: ['User'],
    widgets:[],
    init: function() {
        console.log('hola mundo');
        this.control({
            'userlist': { itemdblclick: this.onPanelRendered},
            'useredit button[action=save]':{click:this.onSave}
        });
    
    },
    onSave:function(btn){
    	console.log(btn);
    	console.log(btn.up().up());
    	 var win    = btn.up('window'),
         form   = win.down('form'),
         record = form.getRecord(),
         values = form.getValues();

     record.set(values);
     win.close();
     this.getUsersStore().sync();
    	
    },
    onPanelRendered: function( This, record, item, index, e, eOpts) {
    	console.log(record.get('name'));
    	 var view = Ext.widget('useredit');
//    	 Ext.ComponentQuery.query('#id-nombre')[0].setValue(record.get('name'));
         view.down('form').loadRecord(record);
    }
});
