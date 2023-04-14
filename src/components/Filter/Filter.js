import PropTypes from 'prop-types';

export default function Filter(props) {
  const { filterValue, FilterContact } = props;
  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        name="filter"
        type="text"
        id="filter"
        value={filterValue}
        onChange={FilterContact}
      />
    </div>
  );
}
Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  FilterContact: PropTypes.func.isRequired,
};
