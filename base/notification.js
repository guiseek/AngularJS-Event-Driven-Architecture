angular.module('app').factory('Notification',[function() {
  return {
    _listeners:{},

    /**
    * Adiciona um listener
    * @param name : Nome do evento
    * @param listener : Listener callback
    */  
    addEventListener:function(name,listener){
      if(!this._listeners[name]){
          this._listeners[name] = [];
      }
      this._listeners[name].push(listener)
    },


    /**
       * Remove um listener
       * @param name : Nome do evento
       * @param listener : Listener callback
       */  
    removeEventListener:function(name,listener){
      if(this._listeners[name]){
        var index = this._listeners[name].indexOf(listener);

        if(index!==-1){
            this._listeners[name].splice(index,1);
        }
      }
    },


    /**
    * Notifica um evento
    * @param Mutiplos parâmetros disponíveis, o primeiro deve ser uma string
    */ 
    notify:function(){
      var listeners;

      if (typeof arguments[0] !== 'string'){
        console.warn('Notification','Primeiro parâmetro deve ser um nome de evento (String)')
      } else {
        listeners = this._listeners[arguments[0]];

        for(var key in listeners){
          listeners[key].apply(null, arguments);
        }
      }
    },
  };
}])