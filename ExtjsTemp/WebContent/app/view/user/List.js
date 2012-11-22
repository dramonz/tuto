Ext.define('AM.view.user.List', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.userlist',
	width:500,
	title : 'All Users',
	store: 'Users',
	initComponent : function() {
//		this.store = {
//			fields : [ 'name', 'email' ],
//			data : [ {
//				name : 'Ed',
//				email : 'ed@sencha.com'
//			}, {
//				name : 'Tommy',
//				email : 'tommy@sencha.com'
//			} ]
//		};

		this.columns = [ {
			text : 'Name',
			dataIndex : 'name',
			flex : 1
		}, {
			text : 'Email',
			dataIndex : 'email',
			flex : 1
		} ];

		this.callParent(arguments);
	}
});