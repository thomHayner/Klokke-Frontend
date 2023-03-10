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
// const addNewTimer = (timers, setTimers) => {
//   let _tempTimers = [...timers];

//   _tempTimers.push({
//     id: timers.length,
//     name: 'timer_' + timers.length,
//     description: '',
//     list: '',
//     listPosition: false,
//     tags: [],
//     isRunning: false,
//     start: 0,
//     stop: 0,
//     elapsed: 0,
//     isCompleted: false,
//   });

//   return setTimers(_tempTimers)
// };

//// [RENAME TIMER] ////
const renameTimer = (timer, newTimerName, timers, setTimers) => {
  let _tempTimers = [...timers];
  let index = _tempTimers.findIndex(item => (
    item.name === timer.name && item.id === timer.id
  ));

  _tempTimers[index].name = newTimerName;

  return setTimers(_tempTimers)
};

//// [EDIT TIMER DESCRIPTION] ////
const editDescription = (timer, newDescription, timers, setTimers) => {
  let _tempTimers = [...timers];
  let index = _tempTimers.findIndex(item => (
    item.name === timer.name && item.id === timer.id
  ));

  _tempTimers[index].description = newDescription;

  return setTimers(_tempTimers)
};
  
//// [MOVE TIMER TO LIST] ////
const moveToNewList = (timer, newListName, timers, setTimers) => {
  let _tempTimers = [...timers];
  let index = _tempTimers.findIndex(item => (
    item.name === timer.name && item.id === timer.id
  ));

  _tempTimers[index].list = newListName;

  return setTimers(_tempTimers)
};

//// [CHANGE TIMER PLACE IN LIST] ////
/// not correct or implemented yet, placeholder only
const organizeIndividualList = () => {
  let _tempTimers = [...timers];
  let index = _tempTimers.findIndex(item => (
    item.name === timer.name && item.id === timer.id
  ));
};

//// [ADD TAG TO TIMER] ////
/// not correct or implemented yet, placeholder only
const editTimerTags = () => {};

//// [REMOVE TAG FROM TIMER] ////
/// not correct or implemented yet, placeholder only

//// [START/STOP TIMER] ////
const handleTimer = (index, timersList, setTimersList, serverTimestamp) => {
  let _tempTimers = [...timersList];
  let _timer = _tempTimers[index];
  
  if (!_timer.isCompleted) {
    if (_timer.isRunning) {
      _tempTimers.splice(index, 1, {
        ..._timer,
        stop: serverTimestamp,
        isRunning: false,
        elapsed: (serverTimestamp - _timer.start) + _timer.elapsed,
      });
      return setTimersList(_tempTimers)
    };

    if (!_timer.isRunning) {
      _tempTimers.splice(index, 1, {
        ..._timer,
        start: serverTimestamp,
        isRunning: true,
      });
      return setTimersList(_tempTimers)
    };
  };
};

//// [RESET TIMER] ////
const resetTimer = (index, timersList, setTimersList) => {
  let _tempTimers = [...timersList];
  let _timer = {..._tempTimers[index]};
  if (!_timer.isCompleted) {
    _tempTimers.splice(index, 1, {
      ..._timer,
      isRunning: false,
      start: 0,
      stop: 0,
      elapsed: 0,
    });
    return setTimersList(_tempTimers)
  };
};

//// [MARK TIMER AS COMPLETED || UNLOCK TIMER] ////
const handleComplete = (index, timersList, setTimersList) => {
  let _tempTimers = [...timersList];
  let _timer = {..._tempTimers[index]};
  const newCompleted = !_tempTimers[index].isCompleted;
  _tempTimers.splice(index, 1, {..._timer, isCompleted: newCompleted});
  return setTimersList(_tempTimers)
};

//// [DELETE TIMER] ////
const deleteTimer = (index, timersList, setTimersList) => {
  let _tempTimers = [...timersList];
  _tempTimers.splice(index, 1);
  return setTimersList(_tempTimers)
};

export {
  displayProperTime,
  // addNewTimer,
  renameTimer,
  editDescription,
  moveToNewList,
  organizeIndividualList,
  editTimerTags,
  handleTimer,
  resetTimer,
  handleComplete,
  deleteTimer,
}