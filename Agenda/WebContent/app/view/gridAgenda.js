Ext.define('AG.view.gridAgenda', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.gridAgenda',
	width : 500,
	title : 'Agenda',
	store : 'Agendas',
	initComponent : function() {
		this.columns = [ {
			text : 'Nombre',
			dataIndex : 'nombre',
			flex : 1
		}, {
			text : 'Apellido Paterno',
			dataIndex : 'apellidoPaterno',
			flex : 1
		}, {
			text : 'Apellido Materno',
			dataIndex : 'apellidoMaterno',
			flex : 1
		}, {
			text : 'Email',
			dataIndex : 'email',
			flex : 1
		}, {
			text : 'Telefono',
			dataIndex : 'telefono',
			flex : 1
		} ];

		this.callParent(arguments);
	}
});