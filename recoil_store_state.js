// These are the state variables used across the entire app.
// They will be backed up to persistent storage for all users, and synced.
// For premium users, they will also be backed up to cloud storage to enable
// cross-platform app usage.

import { atom } from 'recoil';

const timersListState = atom({
  key: 'timersListState',
  default: [
    //// [START: placeholder for adding a new timer]
    {
      id: 0,
      name: '',
      description: '',
      list: '',
      listPosition: false,
      tags: [],
      isRunning: false,
      isCompleted: false,
      start: 0,
      stop: 0,
      elapsed: 0,
    },
    //// [END: placeholder for adding a new timer]
    {
      id: 1,
      name: 'Timer #1',
      description: 'My First Timer',
      list: 'My First List',
      listPosition: false,
      tags: ['Study'],
      isRunning: false,
      isCompleted: false,
      start: 0,
      stop: 0,
      elapsed: 0,
    },
  ],
});

const listsListState = atom({
  key: 'listsListState',
  default: [
    {
      id: 0,
      label: 'All Timers',
      value: 'All',
    },
    {
      id: 1,
      label: 'My First List',
      value: 'My First List',
    },
  ],
});

const tagsListState = atom({
  key: 'tagsListState',
  default:[
    {
      id: 0,
      label: 'All Tags',
      value: 'All Tags',
    },
    {
      id: 1,
      label: 'Work',
      value: 'Work',
    },
    {
      id: 2,
      label: 'Study',
      value: 'Study',
    },
    {
      id: 3,
      label: 'Gym',
      value: 'Gym',
    },
    {
      id: 4,
      label: 'Cooking',
      value: 'Cooking',
    },
    {
      id: 5,
      label: 'Laundry',
      value: 'Laundry',
    },
  ],
});

export {
  timersListState,
  listsListState,
  tagsListState,
}
