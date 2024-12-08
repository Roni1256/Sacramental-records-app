import React, { useState,useEffect } from "react";


const Form = ({ formTitle, data, submit, message, link, btnLabel, style,uniqueId }) => {
  return (
    <>
      <form
        className={`w-full md:max-w-[80%] lg:max-w-[50%] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 bg-white rounded-lg  dark:bg-[#060c17] dark:shadow-[0px_0px_0px_2px_#b2f5ea] shadow-[0px_0px_2px_0px_#4a5568] ${style}`}
        action="submit"
        onSubmit={(e)=>submit(e)}
        key={uniqueId}
      >
        {formTitle && (
          <div className="text-lg sm:text-xl font-bold text-left pb-6 sm:pb-8 md:pb-10">
            {formTitle}
          </div>
        )}
        
        {data.map((item,id) => {
          switch (item.type) {
            case "select":
              return (
                <Options
                  data={item.options}
                  name={item.name}
                  defaultValue={item?.defaultValue}
                  label={item.label}
                  change={item.change}
                />
              );
            case "textarea":
              return (
                <TextArea
                  name={item.name}
                  value={item.value}
                  change={item.change}
                  label={item.label}
                  placeholder={item.placeholder}
                />
              );
            default:
              return (
                <>
                <Input
                  unique={id}
                  label={item.label}
                  type={item.type}
                  name={item.name}
                  value={item.value}
                  change={item.change}
                  placeholder={item.placeholder}
                  readonly={item.readonly ? true : undefined}
                />
                                </>

              );
          }
        })}

        {link && (
          <>
            <a
              className="text-xs sm:text-sm text-blue-500 cursor-pointer py-3 sm:py-4 md:py-5"
              onClick={link.click}
            >
              {link.message}
            </a>
            <br />
          </>
        )}
        {message && (
          <>
            <div
              className={`text-xs sm:text-sm font-bold ${message.color} my-3 sm:my-4 md:my-5`}
            >
              {message.message}
            </div>
            <br />
          </>
        )}
        {btnLabel && (
          <div className="mt-2 sm:mt-3">
            <Button label={btnLabel}  type={"submit"} />
          </div>
        )}
      </form>
    </>
  );
};

function Options({ data, name, defaultValue, label, change }) {
  return (
    <div className="mb-3 sm:mb-4 md:mb-5">
      <label
        htmlFor=""
        className="block mb-1 sm:mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        className="w-full p-1.5 sm:p-2 text-sm border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-purple-500 dark:focus:border-purple-500"
        name={name}
        onChange={change}
      >
        <option value={defaultValue}>{defaultValue}</option>
        {data.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextArea({
  name = "",
  value = "",
  change,
  label = "",
  placeholder = "",
}) {
  const [isValue, setValue] = useState(value);
  return (
    <div className="w-full mb-3 sm:mb-4 md:mb-5">
      <label
        htmlFor="message"
        className="block mb-1 sm:mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <textarea
        id="message"
        rows="4"
        className="block p-2 sm:p-2.5 w-full text-xs sm:text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        name={name}
        value={isValue}
        onChange={(e) => {
          setValue(e.target.value);
          change(e);
        }}
      />
    </div>
  );
}


const Button = ({ label, click, type, style, icon }) => {
  return (
    <>
      <button
        type={type}
        className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-xs sm:text-sm w-full sm:w-auto px-3 sm:px-5 py-2 sm:py-2.5 ${
          style
            ? style
            : " bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        } flex gap-2 sm:gap-5 items-center justify-center text-center h-fit`}
        onClick={click}
      >
        {icon ? icon : null}
        {label}
      </button>
    </>
  );
};

const Input = ({ label, type, placeholder, value, name, change, readonly,unique }) => {
  const [isValue, setValue] = useState(value);

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <div className="relative z-0 w-full mb-3 sm:mb-5 group" key={unique}>
      <input
        type={type}
        value={isValue}
        onChange={(e) => {
          setValue(e.target.value);
          change(e);
        }}
        name={name}
        readOnly={readonly || false}
        className="block py-2 sm:py-2.5 px-0 w-full text-xs sm:text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
        id={name}
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-xs sm:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 sm:-translate-y-6 scale-75 top-2 sm:top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-slate-900 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 sm:peer-focus:-translate-y-6"
      >
        {label}
        {placeholder && (
          <span className="text-gray-400 text-xs sm:text-sm">
            {" "}
            ({placeholder})
          </span>
        )}
      </label>
    </div>
  );
};

export default Form;
