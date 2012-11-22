Ext.define('AG.view.formAgenda', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.formAgenda',
	title : 'Agenda',
	style: {
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	initComponent : function() {
		this.items = [{
			xtype:'hiddenfield',
			name:'id'
		},{
	        xtype: 'textfield',
	        fieldLabel: 'Nombre',
	        name:'nombre'
	    },{
	        xtype: 'textfield',
	        fieldLabel: 'Apellido Paterno',
	        name:'apellidoPaterno'
	    }, {
	        xtype: 'textfield',
	        fieldLabel: 'Apellido Materno',
	        name:'apellidoMaterno'
	    }, {
	        xtype: 'textfield',
	        fieldLabel: 'E-mail',
	        name:'email'
	    }, {
	        xtype: 'numberfield',
	        fieldLabel: 'Numero Telefonico',
	        name:'telefono'
	    }
	    ];
		this.callParent(arguments);
	}
});