/**
For multi-step scripts, create an event with an email reminder for the person to come back and run the next step.
*/
function createEventForNextStep(step){
  var event = CalendarApp.createEvent("Ready for step #" + step, timeMinutesFromNow(5), timeMinutesFromNow(6))
  event.removeAllReminders().addEmailReminder(1).setDescription("The script has finished step #"+(step-1)+" and is ready for the next step.");
}
