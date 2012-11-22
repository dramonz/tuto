Ext.application({
    name: 'AG',
    
    appFolder: 'app',
    controllers: ['Agendas'  ],
    launch: function() {
    	var form_Agenda = Ext.ClassManager.instantiate('AG.view.formAgenda', {
			renderTo: 'form-agenda',
			width:'80%'
		});
    	var grid_Agenda = Ext.ClassManager.instantiate('AG.view.gridAgenda', {
			renderTo: 'grid-agenda',
			width:'80%'
		});
//    	this.getController('Agendas').widgets.push(form_Agenda);
    }

});