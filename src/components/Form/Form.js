import { useState } from "react";
import success from "../../images/icon-complete.svg";
import "./form.css";
export default function Form({
  setName,
  setNumber,
  setMonth,
  setYear,
  setCvc,
  name,
  number,
  month,
  year,
  cvc,
}) {
  const [showSuccess, setShowSuccess] = useState(false);

  // error

  const handleError = (e) => {
    const parent = e.target.parentElement;
    const errorTag = parent.lastElementChild;
    if (e.target.value === "") {
      errorTag.style.display = "block";
      errorTag.textContent = "Can`t be blank";
      e.target.style.borderColor = "hsl(0, 100%, 66%)";
    } else {
      errorTag.style.display = "none";
      e.target.style.borderColor = "hsl(270, 3%, 87%)";
    }
  };

  // name

  const handleName = (e) => {
    if (e.target.value !== "") {
      setName(e.target.value);
    } else {
      setName("");
    }
  };

  // number

  const handleNumber = (e) => {
    if (e.target.value !== "" && e.target.value.match(/(\d)/g)) {
      const isNum = e.target.value.split("");
      console.log();
      const notNumb = isNum.filter((i) => {
        return i.match(/(\D)/g);
      });
      if (notNumb == 0 && !isNum.includes(" ")) {
        const num = e.target.value;
        const splited = num.match(/.{1,4}/g).join(" ");
        if (e.target.value.length == 16) {
          setNumber(splited);
        } else if (e.target.value.length > 16) {
          setNumber("");
        } else {
          setNumber(num);
        }
      } else {
        const parent = e.target.parentElement;
        const errorTag = parent.lastElementChild;
        errorTag.style.display = "block";
        errorTag.textContent = "Wrong format,numbers only";
        e.target.style.borderColor = "hsl(0, 100%, 66%)";
      }
    } else {
      setNumber("");
    }
  };

  // dates

  const handleDate = (e, d) => {
    const isNum = e.target.value.split("");
    const notNumb = isNum.filter((i) => {
      return i.match(/(\D)/g);
    });
    if (e.target.value !== "" && e.target.value.match(/(\d)/g)) {
      if (notNumb == 0 && !isNum.includes(" ")) {
        if (e.target.value.length <= 2) {
          if (d === "mo") {
            setMonth(e.target.value);
          } else {
            setYear(e.target.value);
          }
        }
      } else {
        const parent = e.target.parentElement;
        const errorTag = parent.lastElementChild;
        errorTag.style.display = "block";
        errorTag.textContent = "Wrong format,numbers only";
        e.target.style.borderColor = "hsl(0, 100%, 66%)";
      }
    } else {
      if (d === "mo") {
        setMonth("");
      } else {
        setYear("");
      }
    }
  };

  // cvc

  const handleCvc = (e) => {
    const isNum = e.target.value.split("");
    const notNumb = isNum.filter((i) => {
      return i.match(/(\D)/g);
    });
    if (e.target.value.length <= 3 && e.target.value.match(/(\d)/g)) {
      if (notNumb == 0 && !isNum.includes(" ")) {
        setCvc(e.target.value);
      } else {
        const parent = e.target.parentElement;
        const errorTag = parent.lastElementChild;
        errorTag.style.display = "block";
        errorTag.textContent = "Wrong format,numbers only";
        e.target.style.borderColor = "hsl(0, 100%, 66%)";
      }
    } else {
      setCvc("");
    }
  };

  // submiting

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && number && cvc && month && year) {
      if (showSuccess === true) {
        setShowSuccess(false);
      } else {
        setShowSuccess(true);
      }
    } else {
      const errors = document.querySelectorAll(".error");
      const inputTags = document.querySelectorAll("input");
      console.log(inputTags);
      errors.forEach((error) => {
        if (error.style.display === "") {
          error.style.display = "block";
          error.textContent = "Can`t be blank";
        }
      });
      inputTags.forEach((inp) => {
        if (inp.value === "") {
          inp.style.borderColor = "hsl(0, 100%, 66%)";
        }
      });
    }
  };

  return (
    <>
      {!showSuccess && (
        <form className="form">
          <label>
            Cardholder Name
            <input
              onBlur={handleError}
              value={name}
              onChange={(e) => handleName(e)}
              type="text"
              className="name-input"
              placeholder="e.g. Jane Appleseed"
            />
            <p className="error">Can`t be blank</p>
          </label>
          <label>
            Card Number
            <input
              value={number}
              type="text"
              onBlur={handleError}
              onChange={(e) => handleNumber(e)}
              className="number-input"
              placeholder="e.g. 1234 5678 9123 0000"
            />
            <p className="error">Can`t be blank</p>
          </label>
          <div className="date-cvc">
            <label>
              Exp. Date (MM/YY)
              <div className="month-year">
                <input
                  type="text"
                  onChange={(e) => handleDate(e, "mo")}
                  className="month"
                  placeholder="MM"
                  value={month}
                  onBlur={handleError}
                />
                <input
                  type="text"
                  onChange={(e) => handleDate(e, "yr")}
                  className="year"
                  placeholder="YY"
                  onBlur={handleError}
                  value={year}
                />
                <p className="error">Can`t be blank</p>
              </div>
            </label>
            <label>
              CVC
              <input
                type="text"
                onBlur={handleError}
                onChange={(e) => handleCvc(e)}
                className="cvc"
                placeholder="e.g. 123"
                value={cvc}
              />
              <p className="error">Can`t be blank</p>
            </label>
          </div>
          <button className="btn" onClick={handleSubmit}>
            Confirm
          </button>
        </form>
      )}
      {showSuccess && (
        <>
          <div className="success">
            <img src={success} alt="success-img" />
            <h2>Thank you!</h2>
            <p>We`ve added your card details</p>
            <button className="btn" onClick={handleSubmit}>
              Continue
            </button>
          </div>
        </>
      )}
    </>
  );
}
