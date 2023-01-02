//// [CREATE TAG] ////
const addNewTag = (tags, setTags, tagValue) => {
  let tempTags = [...tags];

  tempLists.push({
    label: 'List #' + tempTags.length + 1,
    value: tempTags.length,
  });

  return setTags(tempTags)
};

//// [ADD TAG TO TIMER] ////
/// not correct or implemented yet, placeholder only

//// [REMOVE TAG FROM TIMER] ////
/// not correct or implemented yet, placeholder only

//// [RENAME TAG] ////
const renameTag = (tag, newTagName, tags, setTags) => {
  let tempTags = [...tags];
  let index = tempTags.findIndex(item => (
    item.label === tag.label && item.value === tag.value
  ));

  tempTags[index] = {
    label: newTagName,
    value: newTagName,
  };

  return setTags(tempTags)
};

//// [MANAGE ORDER OF ALL TAGS] ////
const manageAllTags = (newTags, setTags) => {
  return setTags(newTags)
};

//// [DELETE TAG] ////
const deleteTags = (tag, tags, setTags) => {
  let tempTags = [...tags];
  let index = tempTags.findIndex(item => (
    item.label === tag.label && item.value === tag.value
  ));

  tempTags.splice(index, 1);

  return setTags(tempTags)
};

export {
  addNewTag,
  renameTag,
  manageAllTags,
  deleteTags,
}