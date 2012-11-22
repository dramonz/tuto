


Ext.define('AM.view.user.List', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.userlist',
	title : 'All Users',

	initComponent : function() {
		this.items = [{
	        xtype: 'textfield',
	        fieldLabel: 'Start date'
	    }, {
	        xtype: 'datefield',
	        fieldLabel: 'End date'
	    }];

		this.callParent(arguments);
	}
});