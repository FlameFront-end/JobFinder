import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";
import { useDispatch, useSelector } from "react-redux";
import { filterSelectors } from "../store/filters/filter-selectors";
import { clearFilter, removeFilter } from "../store/filters/filters-actions";

const FilterPanel = () => {
  const currenFilters = useSelector(filterSelectors);
  const dispatch = useDispatch();

  if (currenFilters.length) {
    return (
      <Card className="filter-panel">
        <div className="filter-panel-wrapper">
          <Stack>
            {currenFilters.map((filter) => (
              <Badge
                key={filter}
                variant="clearable"
                onClear={() => dispatch(removeFilter(filter))}
              >
                {filter}
              </Badge>
            ))}
          </Stack>

          <button className="link" onClick={() => dispatch(clearFilter)}>
            Clear
          </button>
        </div>
      </Card>
    );
  }

  return null;
};

export { FilterPanel };
