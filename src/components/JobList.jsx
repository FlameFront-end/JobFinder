import { JobPosition } from "./JobPosition";
import { useDispatch, useSelector } from "react-redux";
import { selectVisiblePositions } from "../store/positions/positions-selector";
import { addFilter } from "../store/filters/filters-actions";
import { filterSelectors } from "../store/filters/filter-selectors";

const JobList = () => {
  const dispatch = useDispatch();
  const currenFillers = useSelector(filterSelectors);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currenFillers)
  );

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
