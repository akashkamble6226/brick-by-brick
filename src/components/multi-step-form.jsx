import { useReducer, useState } from "react";

const styles = { border: "2px solid blue", padding: "10px", margin: "10px" };
const MultiStepForm = () => {
  const [currentPage, setCurrentPage] = useState(0);
  //   const [data, dispatch] = useReducer(reducerFun, initialState)
  const [data, setData] = useState({
    fname: "",
    sname: "",
    age: "",
    ssc: "",
    diploma: "",
    engin: "",
    curcomp: "",
    sal: "",
    role: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    setData((preData) => ({ ...preData, [name]: e.target.value }));
  };
  const formSection = [
    <BasicInfo data={data} handleOnChange={handleOnChange} />,
    <EducationInfo data={data} handleOnChange={handleOnChange} />,
    <JobInfo data={data} handleOnChange={handleOnChange} />,
  ];

  const validateCurrentStep = () => {
    if (currentPage === 0) {
      return (
        data.fname.length !== 0 &&
        data.sname.length !== 0 &&
        data.age.length !== 0
      );
    } else if (currentPage === 1) {
      return (
        data.ssc.length !== 0 &&
        data.diploma.length !== 0 &&
        data.engin.length !== 0
      );
    } else if (currentPage === 2) {
      data.curcomp.length !== 0 &&
        data.sal.length !== 0 &&
        data.sal.length !== 0;
    }
  };

  const handleNextClick = () => {
    if (!validateCurrentStep()) {
      alert("Please fill all fields!!!");
      return;
    }
    if (currentPage !== 2) {
      setCurrentPage((pre) => pre + 1);
    }
  };

  const handlePreClick = () => {
    if (currentPage >= 1) {
      setCurrentPage((pre) => pre - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data", data);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {formSection[currentPage]}
        <div>
          <span>
            {currentPage !== 2 && (
              <button type={"button"} onClick={handleNextClick}>
                Next
              </button>
            )}
            {currentPage !== 0 && (
              <button type={"button"} onClick={handlePreClick}>
                Previous
              </button>
            )}
            {currentPage === 2 && <button type={"submit"}>Submit</button>}
          </span>
        </div>
      </form>
    </>
  );
};

const BasicInfo = ({ data, handleOnChange }) => {
  return (
    <>
      <div style={styles}>
        <div>
          <label>Enter First Name</label>
          <input
            type="text"
            value={data.fname}
            onChange={handleOnChange}
            name="fname"
          />
        </div>

        <div>
          Enter Second Name
          <input
            type="text"
            value={data.sname}
            onChange={handleOnChange}
            name="sname"
          />
        </div>
        <div>
          Enter Age
          <input
            type="text"
            value={data.age}
            onChange={handleOnChange}
            name="age"
          />
        </div>
      </div>
    </>
  );
};

const EducationInfo = ({ data, handleOnChange }) => {
  return (
    <>
      <div style={styles}>
        <div>
          Enter SSC Score
          <input
            type="text"
            value={data.ssc}
            onChange={handleOnChange}
            name="ssc"
          />
        </div>

        <div>
          Enter Diploma Score
          <input
            type="text"
            value={data.diploma}
            onChange={handleOnChange}
            name="diploma"
          />
        </div>
        <div>
          Enter Engineering Score
          <input
            type="text"
            value={data.engin}
            onChange={handleOnChange}
            name="engin"
          />
        </div>
      </div>
    </>
  );
};

const JobInfo = ({ data, handleOnChange }) => {
  return (
    <>
      <div style={styles}>
        <div>
          Enter current company Name
          <input
            type="text"
            value={data.curcomp}
            onChange={handleOnChange}
            name="curcomp"
          />
        </div>

        <div>
          Enter current Sal
          <input
            type="text"
            value={data.sal}
            onChange={handleOnChange}
            name="sal"
          />
        </div>
        <div>
          Enter role name
          <input
            type="text"
            value={data.role}
            onChange={handleOnChange}
            name="role"
          />
        </div>
      </div>
    </>
  );
};
export default MultiStepForm;
