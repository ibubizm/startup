import './input.scss'

export const Input = ({ value, setValue, onSubmit, ...props }) => {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input"
        {...props}
        type="search"
      />
    </form>
  )
}
