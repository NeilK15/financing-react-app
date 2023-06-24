type Props = {
  placeholder?: string;
  onChange: (value: number) => void;
};

const TextInput = ({ placeholder = "", onChange }: Props) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    let val = evt.target.value;
    val = val.replace("/,/g", "");
    val = val.replace("/./g", "");
    let num = parseInt(val);

    onChange(num);
  };

  return (
    <div className="input-group mb-3">
      <span className="input-group-text">$</span>
      <input
        type="number"
        className="form-control"
        aria-label="Amount (to the nearest dollar)"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <span className="input-group-text">.00</span>
    </div>
  );
};

export default TextInput;
