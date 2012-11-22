Ext.define('AG.model.Agenda', {
    extend: 'Ext.data.Model',
    fields: [
             {name:'id',type:'int'},
             {name:'nombre',type:'string'},
             {name:'apellidoPaterno',type:'string'},
             {name:'apellidoMaterno',type:'string'},
             {name:'email',type:'string'},
             {name:'telefono',type:'int'}
             ],
             idProperty:'id'
});