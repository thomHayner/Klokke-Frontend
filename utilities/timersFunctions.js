//// [DISPLAY THE PROPER TIME FORMAT] ////
const displayProperTime = (timer, serverTimestamp) => {
  let hours = '00';
  let minutes = '00';
  let seconds = '00';
  let current = getOverallElapsedTime(timer, serverTimestamp);

  // if elapsed time >= 1 hour
  if (current >= 3600000) {
    // and elapsed time >= 10 hours
    if (current >= 36000000) {
      hours = `${Math.floor(current / 3600000)}`;
    };
    // and elapsed time < 10 hours
    if (current < 36000000) {
      hours = '0' + `${Math.floor(current / 3600000)}`;
    };
    // then set current to the remaining elapsed time
    current = current % 3600000;
  };
  
  // if (remaining) elapsed time < 1 hour but >= 1 minute
  if (3600000 > current && current >= 60000) {
    // and (remaining) elapsed time >= 10 minutes
    if (current >= 600000) {
      minutes = `${Math.floor(current / 60000)}`;
    };
    // and (remaining) elapsed time < 10 minutes
    if (current < 600000) {
      minutes = '0' + `${Math.floor(current / 60000)}`;
    };
    // then set current to the remaining elapsed time
    current = current % 60000;
  };

  // now, (remaining) elapsed time < 1 minute
  if (60000 > current) {
    // and (remaining) elapsed time >= 10 seconds
    if (current >= 10000) {
      seconds = `${Math.floor(current / 1000)}`;
    };
    // and (remaining) elapsed time < 10 seconds
    if (current < 10000) {
      seconds = '0' + `${Math.floor(current / 1000)}`;
    };
  };

  return { HH: hours, MM: minutes, SS: seconds }
};

//// [displayProperTime() helper: INTERVAL TIME] ////
const getElapsedTimeSinceLastStart = (timer) => {
  if (!timer.start) {
    return 0
  }

  return serverTimestamp - timer.start
};

//// [displayProperTime() helper: TOTAL TIME] ////
const getOverallElapsedTime = (timer, serverTimestamp) => {
  if (!timer.isRunning) {
    return timer.elapsed
  }

  return timer.elapsed + (serverTimestamp - timer.start)
};

  //// [CREATE NEW TIMER] ////
const addNewTimer = (timers, setTimers) => {
  let tempTimers = [...timers];

  tempTimers.push({
    id: timers.length,
    name: 'timer_' + timers.length,
    description: '',
    list: '',
    listPosition: false,
    tags: [],
    isRunning: false,
    start: 0,
    stop: 0,
    elapsed: 0,
    completed: false,
  });

  return setTimers(tempTimers)
};

//// [RENAME TIMER] ////
const renameTimer = (timer, newTimerName, timers, setTimers) => {
  let tempTimers = [...timers];
  let index = tempTimers.findIndex(item => (
    item.name === timer.name && item.id === timer.id
  ));

  tempTimers[index].name = newTimerName;

  return setTimers(tempTimers)
};
  
//// [MOVE TIMER TO LIST] ////
const moveToNewList = (timer, newListName, timers, setTimers) => {
  let tempTimers = [...timers];
  let index = tempTimers.findIndex(item => (
    item.name === timer.name && item.id === timer.id
  ));

  tempTimers[index].list = newListName;

  return setTimers(tempTimers)
};

//// [CHANGE TIMER PLACE IN LIST] ////
/// not correct or implemented yet, placeholder only
const organizeIndividualList = () => {
  let tempTimers = [...timers];
  let index = tempTimers.findIndex(item => (
    item.name === timer.name && item.id === timer.id
  ));
};

//// [ADD TAG TO TIMER] ////
/// not correct or implemented yet, placeholder only

//// [REMOVE TAG FROM TIMER] ////
/// not correct or implemented yet, placeholder only

//// [START/STOP TIMER] ////
const handleTimer = (timer, timers, setTimers, serverTimestamp) => {
  if (!timer.completed) {
    let tempTimers = [...timers];
    let index = tempTimers.findIndex(item => (
      item.name === timer.name && item.id === timer.id
    ));

    console.log('handleTimerPress: ' + timer.isRunning)
    
    if (timer.isRunning) {
      tempTimers[index].stop = serverTimestamp;
      tempTimers[index].isRunning = false;
      tempTimers[index].elapsed = (
        tempTimers[index].elapsed +
        (tempTimers[index].stop - tempTimers[index].start)
      );
      return setTimers(tempTimers)
    };

    if (!timer.isRunning) {
      tempTimers[index].start = serverTimestamp;
      tempTimers[index].isRunning = true;
      return setTimers(tempTimers)
    };
  };
};

//// [RESET TIMER] ////
const resetTimer = (timer, timers, setTimers) => {
  if (!timer.completed) {
    let tempTimers = [...timers];
    let index = tempTimers.findIndex(item => (
      item.name === timer.name && item.id === timer.id
    ));
    

    tempTimers[index] = {
      ...tempTimers[index],
      isRunning: false,
      start: 0,
      stop: 0,
      elapsed: 0,
    };

    return setTimers(tempTimers)
  };
};

//// [MARK TIMER AS COMPLETED] ////
const handleCompleteTimer = (timer, timers, setTimers) => {
  let tempTimers = [...timers];
  let index = tempTimers.findIndex(item => (
    item.name === timer.name && item.id === timer.id
  ));

  tempTimers[index].completed = !tempTimers[index].completed
  
  return setTimers(tempTimers);
};

//// [DELETE TIMER] ////
const deleteTimer = (timer, timers, setTimers) => {
  let tempTimers = [...timers];
  let index = tempTimers.findIndex(item => (
    item.name === timer.name && item.id === timer.id
  ));

  tempTimers.splice(index, 1);

  return setTimers(tempTimers)
};

export {
  displayProperTime,
  addNewTimer,
  renameTimer,
  moveToNewList,
  organizeIndividualList,
  handleTimer,
  resetTimer,
  handleCompleteTimer,
  deleteTimer,
}