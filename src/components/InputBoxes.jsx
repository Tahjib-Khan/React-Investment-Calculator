function InputBoxes({ title, onChange }) {
  return (
    <div>
      <label htmlFor="input1">{title}</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        onChange={onChange}
      />
    </div>
  )
}

export default InputBoxes
