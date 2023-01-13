import { atom, selector } from 'recoil';

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
      start: 0,
      stop: 0,
      elapsed: 0,
      isCompleted: false,
    },
    //// [END: placeholder for adding a new timer]
    {
      id: 1,
      name: 'Timer #1',
      description: 'hello',
      list: 'My First List',
      listPosition: false,
      tags: ['Work', 'Gym'],
      isRunning: false,
      start: 0,
      stop: 0,
      elapsed: 0,
      isCompleted: false,
    },
    // {
    //   id: 2,
    //   name: 'timer_2',
    //   description: '',
    //   list: '',
    //   listPosition: false,
    //   tags: [],
    //   isRunning: false,
    //   start: 0,
    //   stop: 0,
    //   elapsed: 0,
    //   isCompleted: true,
    // },
    // {
    //   id: 3,
    //   name: 'timer_3',
    //   description: '',
    //   list: '',
    //   listPosition: false,
    //   tags: [],
    //   isRunning: false,
    //   start: 0,
    //   stop: 0,
    //   elapsed: 0,
    //   isCompleted: false,
    // },
    // {
    //   id: 4,
    //   name: 'timer_4',
    //   description: '',
    //   list: '',
    //   listPosition: false,
    //   tags: [],
    //   isRunning: false,
    //   start: 0,
    //   stop: 0,
    //   elapsed: 0,
    //   isCompleted: true,
    // }
  ],
});

const listedFilterState = atom({
  key: 'listedFilterState',
  default: 'All',
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

const taggedFilterState = atom({
  key: 'taggedFilterState',
  default: [],
});

const tagsListState = atom({
  key: 'tagsListState',
  default:[
    {
      id: 0,
      label: 'Work',
      value: 'Work',
    },
    {
      id: 1,
      label: 'Gym',
      value: 'Gym',
    },
    {
      id: 2,
      label: 'Study',
      value: 'Study',
    },
    {
      id: 3,
      label: 'Cooking',
      value: 'Cooking',
    },
    {
      id: 4,
      label: 'Laundry',
      value: 'Laundry',
    },
  ],
});

const timersCompletedFilterState = atom({
  key: 'timersCompletedFilterState',
  default: -1,
});

const filteredTimersListState = selector({
  key: 'filteredTimersListState',
  get: ({ get }) => {
    let list = get(timersListState);
    const listed = get(listedFilterState);
    const tagged = get(taggedFilterState);
    const completed = get(timersCompletedFilterState);

    list = [...list.slice(1)]

    if (listed !== 'All') {
      list = list.filter((timer) => listed == timer.list);
    };

    if (tagged.length > 0) {
      list = list.filter(
        (timer) => timer.tags.some(
          (tag) => tagged.includes(tag)
        )
      );
    };

    if (completed !== -1) {
      switch (completed) {
        case 1:
          list = list.filter((timer) => timer.isCompleted);
          break
        case 0:
          list = list.filter((timer) => !timer.isCompleted);
          break
        default:
          break
      }
    };

    return list
  },
});

export {
  timersListState,
  timersCompletedFilterState,
  listsListState,
  listedFilterState,
  tagsListState,
  taggedFilterState,
  filteredTimersListState,
}
