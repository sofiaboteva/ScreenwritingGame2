// This script transfers the information from cards to the chapter
const EventEmitter = () => {
  // Creates a list of events
  let events = {};

  return {
    on(event, callback) {
      // If the event is not in the list, add it
      if (!events[event]) events[event] = [];
      events[event].push(callback);
    },
    trigger(event, data) {
      // If the event is in the list, trigger it
      if (events[event]) {
        events[event].forEach((callback) => callback(data));
      }
    },
    // Clear the list of events (in case of a new chapter)
    clearEvents() {
      events = {};
    }
  };
};

export const eventBus = EventEmitter();

export const EVENTS = {
  ANSWER_SELECTED_EVENT: 'answerSelected'
}