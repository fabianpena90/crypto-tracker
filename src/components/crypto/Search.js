import PropTypes from 'prop-types'

const Search = ({ handleChange }) => {

  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} className="d-flex">
      <input 
        type="text" 
        className="form-control me2" 
        placeholder="Search"
        onChange={handleChange}
       />
    </form>
  )
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default Search
