import { atom, selector } from 'recoil';

const timersListState = atom({
  key: 'timersListState',
  default: [
    {
      id: 0,
      name: 'timer_0',
      description: '',
      list: '',
      listPosition: false,
      tags: [],
      isRunning: false,
      start: 0,
      stop: 0,
      elapsed: 0,
      isCompleted: false,
    },{
      id: 1,
      name: 'timer_1',
      description: '',
      list: '',
      listPosition: false,
      tags: [],
      isRunning: false,
      start: 0,
      stop: 0,
      elapsed: 0,
      isCompleted: false,
    },{
      id: 2,
      name: 'timer_2',
      description: '',
      list: '',
      listPosition: false,
      tags: [],
      isRunning: false,
      start: 0,
      stop: 0,
      elapsed: 0,
      isCompleted: true,
    },{
      id: 3,
      name: 'timer_3',
      description: '',
      list: '',
      listPosition: false,
      tags: [],
      isRunning: false,
      start: 0,
      stop: 0,
      elapsed: 0,
      isCompleted: false,
    },{
      id: 4,
      name: 'timer_4',
      description: '',
      list: '',
      listPosition: false,
      tags: [],
      isRunning: false,
      start: 0,
      stop: 0,
      elapsed: 0,
      isCompleted: true,
    }
  ]
});

const timersListedFilterState = atom({
  key: 'timersListedFilterState',
  default: 'All'
});

const timersTaggedFilterState = atom({
  key: 'timersTaggedFilterState',
  default: []
});

const timersCompletedFilterState = atom({
  key: 'timersCompletedFilterState',
  default: -1
});

const filteredTimersListState = selector({
  key: 'filteredTimersListState',
  get: ({ get }) => {
    let list = get(timersListState);
    const listed = get(timersListedFilterState);
    const tagged = get(timersTaggedFilterState);
    const completed = get(timersCompletedFilterState);

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
  }
});

export {
  timersListState,
  timersCompletedFilterState,
  timersListedFilterState,
  timersTaggedFilterState,
  filteredTimersListState,
}