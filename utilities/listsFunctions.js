//// [CREATE NEW LIST] ////
const addNewList = (lists, setLists, listValue) => {
  let tempLists = [...lists];

  tempLists.push({
    label: 'List #' + tempLists.length + 1,
    value: tempLists.length,
  });

  return setLists(tempLists)
};

//// [RENAME LIST] ////
const renameList = (list, newListName, lists, setLists) => {
  let tempLists = [...lists];
  let index = tempLists.findIndex(item => (
    item.label === list.label && item.value === list.value
  ));

  tempLists[index] = {
    label: newListName,
    value: newListName,
  };

  return setLists(tempLists)
};

//// [MANAGE ORDER OF ALL LISTS] ////
const manageAllLists = (newLists, setLists) => {
  return setLists(newLists)
};

//// [DELETE LIST] ////
const deleteList = (list, lists, setLists) => {
  let tempLists = [...lists];
  let index = tempLists.findIndex(item => (
    item.label === list.label && item.value === list.value
  ));

  tempLists.splice(index, 1);

  return setLists(tempLists)
};

export {
  addNewList,
  renameList,
  manageAllLists,
  deleteList,
}