/**
See how close we are to finish, and whether we should stop to avoid execution timeout error.
*/
var runtime = new Date();
function shouldIStop(){ return ((new Date).getTime() - runtime.getTime()) > 300000; }

/**
 * Start creates a new trigger for methodName in 10 minutes in case execution times out. Finish removes that trigger
 */
var TRIGGERS = (function(){
  /**
   * Remove trigger to stop it from trying to run on no data
   */
  function removeTriggerById(id){
    var triggers = ScriptApp.getProjectTriggers(), i;
    for(i = 0; i < triggers.length; i++){
      if(triggers[i].getUniqueId() === id) {
        ScriptApp.deleteTrigger(triggers[i]);
        return;
      }
    }
  }
  
  /**
   * Remove current trigger if necessary and clear setting
   */
  function finish(methodName){
    var ScriptProps = PropertiesService.getScriptProperties();
    var id = ScriptProps.getProperty("triggerID-"+methodName);
    if(id > -1) removeTriggerById(id);
    ScriptProps.setProperty("triggerID-"+methodName, -1);
  }
  
  /**
   * Add trigger to restart this if it fails before ending
   */
  function start(methodName){
    var ScriptProps = PropertiesService.getScriptProperties();
    
    //Remove current trigger if necessary
    var id = ScriptProps.getProperty("triggerID-"+methodName);
    if(id > -1) removeTriggerById(id);
    
    //Create and save new trigger to run after 10 minutes
    var trigger = ScriptApp.newTrigger(methodName).timeBased().after(600000).create();
    ScriptProps.setProperty("triggerID-"+methodName,trigger.getUniqueId());
  }
  
  return { start: start, finish: finish };
})();
