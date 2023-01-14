import { atom, selector } from 'recoil';
import { timersListState } from './recoil_store_state';

const reportListedFilterState = atom({
  key: 'reportListedFilterState',
  default: 'All',
});

const reportTaggedFilterState = atom({
  key: 'reportTaggedFilterState',
  default: [],
});

const reportCompletedFilterState = atom({
  key: 'reportCompletedFilterState',
  default: -1,
});

const filteredReportListState = selector({
  key: 'filteredReportListState',
  get: ({ get }) => {
    let list = get(timersListState);
    const listed = get(reportListedFilterState);
    const tagged = get(reportTaggedFilterState);
    const completed = get(reportCompletedFilterState);

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
  reportCompletedFilterState,
  reportListedFilterState,
  reportTaggedFilterState,
  filteredReportListState,
};
