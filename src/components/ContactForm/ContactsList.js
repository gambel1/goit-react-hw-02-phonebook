import PropTypes from 'prop-types';
export default function ContactsList(props) {
  const { deleteContacts, filteredContact } = props;
  return (
    <>
      <ul>
        {filteredContact.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <span>{name}</span>
              <span>{number}</span>
              <button type="button" onClick={() => deleteContacts(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

ContactsList.propTypes = {
  filteredContact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  deleteContacts: PropTypes.func.isRequired,
};
