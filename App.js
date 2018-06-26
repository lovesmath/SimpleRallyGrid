Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    
    launch: function() {
        
        console.log('our first App, woot!');
        this._loadData();
    },
    
     // Get data from Rally
    _loadData: function() {
        
      var myStore = Ext.create('Rally.data.wsapi.Store', {
            model: 'User Story',
            autoLoad: true,
            listeners: {
                load: function(myStore, data, success) {
                  console.log('got data!', myStore, data, success);  
                  this._loadGrid(myStore);  
                  },
                   scope:this
            },
            fetch: ['FormattedID', 'Name', 'ScheduleState']
         });
    },
    
    // Create Grid and Show a Grid of given stories
    _loadGrid: function(myStoryStore) {
           
     var myGrid = Ext.create('Rally.ui.grid.Grid', { 
       store:myStoryStore,
       columnCfgs: [
          'FormattedID', 'Name', 'ScheduleState'
          ],
        });
                    
        this.add(myGrid);
        console.log('what is this?', this);  
    },
    
});

/*
Exception: SyntaxError: missing ( before formal parameters
@Scratchpad/1:28
*/
/*
Exception: SyntaxError: missing ( before formal parameters
@Scratchpad/1:28
*/
/*
Exception: SyntaxError: missing ( before formal parameters
@Scratchpad/1:29
*/