Ext.define('AG.controller.Agendas', {
    extend: 'Ext.app.Controller',
    views: ['formAgenda','gridAgenda'],
    stores: ['Agendas'],
    models: ['Agenda'],
//    widgets:[],
    init: function() {
        this.control({});
    
    }
});
