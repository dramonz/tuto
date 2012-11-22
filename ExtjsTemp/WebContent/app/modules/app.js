Ext.application({
    name: 'AM',

    appFolder: 'app',
    controllers: [
                  'Users'
              ],
    launch: function() {
    	var form = Ext.ClassManager.instantiate('AM.view.user.List', {
			renderTo: 'form-list'
		});
		this.getController('Users').widgets.push(form);
//        Ext.create('Ext.container.Viewport', {
//            layout: 'fit',
//            items: [
//                {
//                    xtype: 'userlist'
//                }
//            ]
//        });
    }
});