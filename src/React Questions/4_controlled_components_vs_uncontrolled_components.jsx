import { useRef, useState } from "react";
const ControComponents = () => {
  const [data, setData] = useState({ name: "", sal: "" });

  const validate = () => {
    let errors = {};

    if (!data.name.trim()) {
      errors.name = "Name is required!!!";
    }

    if (!data.sal.trim()) {
      errors.name = "Sal is required!!!!";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    console.log(errors);
    if (Object.keys(errors).length > 0) {
      alert("FIX errors!!!");
    } else {
      console.log(JSON.stringify(data));
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => ({ ...pre, [name]: value }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          name={"name"}
          value={data.name}
          onChange={handleOnChange}
        />
        <input
          type={"text"}
          name={"sal"}
          value={data.sal}
          onChange={handleOnChange}
        />

        <select onChange={(e) => {console.log(e.target.value)}}>
          <option name="blue" value="blue">
            Blue
          </option>
          <option name="red" value="red">
            Red
          </option>
        </select>
        <button type={"submit"}>Submit</button>
      </form>
    </>
  );
};

export default ControComponents;

// ________________________________________________________

const UncontrComp = () => {
  const inputRef = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert(inputRef.current.value);
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type={"text"} name={"input"} ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

// export default UncontrComp;
