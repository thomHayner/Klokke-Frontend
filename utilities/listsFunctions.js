//// [ADD NEW LIST FUNCTION] ////
const addNewList = (lists, setLists) => {
  let tempLists = [...lists];

  tempLists.push({
    label: 'fifth',
    value: tempLists.length,
  },);

  setLists(tempLists);
};

//// [RENAME LIST] ////
const renameList = () => {
  let tempTimers = [...timers];
  let index = tempTimers.findIndex(item => (
    item.name === timer.name && item.id === timer.id
  ));
};

//// [MANAGE ORDER OF ALL LISTS] ////
const manageAllLists = () => {
  let tempTimers = [...timers];
  let index = tempTimers.findIndex(item => (
    item.name === timer.name && item.id === timer.id
  ));
};

//// [DELETE LIST] ////
const deleteList = () => {
  let tempTimers = [...timers];
  let index = tempTimers.findIndex(item => (
    item.name === timer.name && item.id === timer.id
  ));
};

export {
  addNewList,
  renameList,
  manageAllLists,
  deleteList,
}