import { atom, selector } from 'recoil';
import { timersListState } from './recoil_store_state';

const timersListedFilterState = atom({
  key: 'timersListedFilterState',
  default: 'All',
});

const timersTaggedFilterState = atom({
  key: 'timersTaggedFilterState',
  default: [],
});

const timersCompletedFilterState = atom({
  key: 'timersCompletedFilterState',
  default: -1,
});

const filteredTimersListState = selector({
  key: 'filteredTimersListState',
  get: ({ get }) => {
    let list = get(timersListState);
    const listed = get(timersListedFilterState);
    const tagged = get(timersTaggedFilterState);
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
  timersCompletedFilterState,
  timersListedFilterState,
  timersTaggedFilterState,
  filteredTimersListState,
};
