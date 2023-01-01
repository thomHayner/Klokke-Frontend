//// [DISPLAY THE PROPER TIME FORMAT] ////
const displayProperTime = (timer, serverTimestamp) => {
  let hours = '00';
  let minutes = '00';
  let seconds = '00';
  let current = getOverallElapsedTime(timer, serverTimestamp);

  // if the elapsed time is greater than or equal to 1 hour
  if (current >= 3600000) {
    // and the elapsed time is greater than or equal to 10 hours
    if (current >= 36000000) {
      hours = `${Math.floor(current / 3600000)}`;
    };
    // and the elapsed time is less than 10 hours
    if (current < 36000000) {
      hours = '0' + `${Math.floor(current / 3600000)}`;
    };
    // then set current to the remaining elapsed time
    current = current % 3600000;
  };
  
  // if the (remaining) elapsed time is less than 1 hour but greater than or equal to 1 minute
  if (3600000 > current && current >= 60000) {
    // and the (remaining) elapsed time is greater than or equal to 10 minutes
    if (current >= 600000) {
      minutes = `${Math.floor(current / 60000)}`;
    };
    // and the (remaining) elapsed time is less than 10 minutes
    if (current < 600000) {
      minutes = '0' + `${Math.floor(current / 60000)}`;
    };
    // then set current to the remaining elapsed time
    current = current % 60000;
  };

  // the (remaining) elapsed time is now less than 1 minute
  if (60000 > current) {
    // and the (remaining) elapsed time is greater than or equal to 10 seconds
    if (current >= 10000) {
      seconds = `${Math.floor(current / 1000)}`;
    };
    // and the (remaining) elapsed time is less than 10 seconds
    if (current < 10000) {
      seconds = '0' + `${Math.floor(current / 1000)}`;
    };
  };

  return { HH: hours, MM: minutes, SS: seconds }
  // return hours + ' : ' + minutes + ' : ' + seconds
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

//// [START / STOP] ////
const handleTimer = (timer, timers, setTimers, serverTimestamp) => {
  let tempTimers = [...timers];
  let index = tempTimers.findIndex(item => item.name === timer.name && item.id === timer.id);

  console.log('handleTimerPress: ' + timer.isRunning)
  
  if (timer.isRunning) {
    tempTimers[index].stop = serverTimestamp;
    tempTimers[index].isRunning = false;
    tempTimers[index].elapsed = tempTimers[index].elapsed + (tempTimers[index].stop - tempTimers[index].start);
    return setTimers(tempTimers);
  }

  if (!timer.isRunning) {
    tempTimers[index].start = serverTimestamp;
    tempTimers[index].isRunning = true;
    return setTimers(tempTimers);
  }
};

//// [DELETE] ////
const deleteTimer = (timer, timers, setTimers) => {
  let tempTimers = [...timers];
  let index = tempTimers.findIndex(item => item.name === timer.name && item.id === timer.id);

  tempTimers.splice(index, 1);

  return setTimers(tempTimers);
};

//// [RESET] ////
const resetTimer = (timer, timers, setTimers) => {
  let tempTimers = [...timers];
  let index = tempTimers.findIndex(item => item.name === timer.name && item.id === timer.id);

  tempTimers[index] = {
    ...tempTimers[index],
    isRunning: false,
    start: 0,
    stop: 0,
    elapsed: 0,
  }

  console.log(tempTimers[index])
  return setTimers(tempTimers);
};

//// [MARK AS COMPLETED] ////
const completeTimer = () => {
  let tempTimers = [...timers];
  let index = tempTimers.findIndex(item => item.name === timer.name && item.id === timer.id);
};

//// [RENAME] ////
const renameTimer = () => {
  let tempTimers = [...timers];
  let index = tempTimers.findIndex(item => item.name === timer.name && item.id === timer.id);
};

//// [CHANGE PLACE IN LIST] ////
const changeTimerPosition = () => {
  let tempTimers = [...timers];
  let index = tempTimers.findIndex(item => item.name === timer.name && item.id === timer.id);
};

export {
  displayProperTime,
  handleTimer,
  deleteTimer,
  resetTimer,
  completeTimer,
  renameTimer,
  changeTimerPosition,
}