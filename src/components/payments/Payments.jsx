import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useEffect, useState, useRef } from "react";

import "./Payments.css";
import { useSelector } from "react-redux";
function Payments() {
  const language = useSelector((state) => state.language.currentLanguage);
  const isDark = useSelector((state) => state.isDark.bool);
  const [payment, setPayment] = useState([]);
  const [group, setGroup] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [student, setStudent] = useState([]);
  const [search, setSearch] = useState('');
  const [toggle, setToggle] = useState(false);
  const tel = useRef();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      useEffect(() => {
        fetch(`https://crm-joygroup.herokuapp.com/payments?search=${search}`)
          .then((res) => res.json())
          .then((data) => {
            setPayment(data);
            console.log(data);
          });
      }, [search, toggle]);
         useEffect(() => {
           fetch(`https://crm-joygroup.herokuapp.com/groups/active`)
             .then((res) => res.json())
             .then((data) => setGroup(data));
         }, []);
         useEffect(() => {
           fetch(`https://crm-joygroup.herokuapp.com/teachers`)
             .then((res) => res.json())
             .then((data) => setTeacher(data));
         }, []);
   useEffect(() => {
     fetch(`https://crm-joygroup.herokuapp.com/students`)
       .then((res) => res.json())
       .then((data) => {
         setStudent(data);
         console.log(data);
       });
   }, []);
  
  const submitPayment = e => {
    e.preventDefault();
    const { studentName, tel, date, teacherID, groupID } = e.target.elements;
    const newPayment = {
      student_name: studentName.value, group_id: groupID.value, teacher_id: teacherID.value, payment_date: date.value, student_phone: tel.value
    };
     fetch(`https://crm-joygroup.herokuapp.com/payments`, {
       headers: { "Content-Type": "application/json" },
       method: "PUT",
       body: JSON.stringify(newPayment),
     }).then((res) =>res.json())
       .then(data => {
         console.log(data);
         setToggle(!toggle)
       });

     e.target.reset();
  }
  const selectStudent = (e) => {
    console.log(e.target.value);
    const found = student.find(elem => elem.student_name == e.target.value);
    if (found) {
      
      setTeacher([{ teacher_id: found.teacher_id, teacher_name: found.teacher_name }])
      setGroup([
        { group_id: found.group_id, group_name: found.group_name },
      ]);
      tel.current.value = found.student_phone
    }
     
  }
  

  return (
    <div className="container">
      <div className="main mt-5 pt-5">
        <div className="col-md-12 mt-3">
          <h1 className={`col__h1 ${isDark ? "dark__title" : "light"}`}>
            {language.paymentTitle}
          </h1>
          <form onSubmit={submitPayment}>
            <div className="form-row">
              <div className="col d-flex justify-content-between">
                <div className=" w-50 m-2">
                  <label
                    htmlFor="inputText"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.studentName}
                  </label>
                  <input
                    type="text"
                    list="data"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    placeholder="name"
                    name="studentName"
                    onChange={selectStudent}
                  />
                  <datalist id="data">
                    {student.map((e, i) => (
                      <option key={i} value={e.student_name}>
                        {e.student_name}
                      </option>
                    ))}
                  </datalist>
                </div>
                <div className=" w-50 m-2">
                  <label
                    htmlFor="inputState"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.field}
                  </label>
                  <select
                    id="inputState"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    name="groupID"
                  >
                    {group.map((e, i) => (
                      <option key={i} value={e.group_id}>
                        {e.group_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className=" w-50 m-2">
                  <label
                    htmlFor="inputText"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.tel}
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    placeholder="+998 xx xxx xx xx"
                    ref={tel}
                    name="tel"
                  />
                </div>
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="col d-flex justify-content-between">
                <div className=" w-50 m-2">
                  <label
                    htmlFor="inputTeacher"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.teacher}
                  </label>
                  <select
                    id="inputTeacher"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    name="teacherID"
                  >
                    {teacher.map((e, i) => (
                      <option key={i} value={e.teacher_id}>
                        {e.teacher_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className=" w-50 m-2">
                  <label
                    htmlFor="inputState"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.paymentDate}
                  </label>
                  <input
                    type="date"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    name="date"
                  />
                </div>
                <div className="d-flex flex-column w-50 m-2 justify-content-end">
                  <button
                    className={`btn btn-primary ${
                      isDark ? "dark__btn" : "light"
                    }`}
                  >
                    {language.paymentTitle}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-12 d-flex justify-content-between mt-5 pt-5 mb-3">
          <h3 className={`col__h3 ${isDark ? "dark__title" : "light"}`}>
            {language.thosePaid}
          </h3>
          <div className="col__img-input">
            <SearchIcon className="col__search" />
            <input
              type="text"
              className={`col__input ${isDark ? "dark__btn" : "light"}`}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-md-12 ">
          <div
            className={`card card__table mt-2 ${
              isDark ? "dark__card" : "light"
            }`}
            style={{
              background: "#FFFFFF",
              boxShadow: " 0px 10px 25px rgba(0, 0, 0, 0.25)",
            }}
          >
            <table className="table table-striped table-hover h-25">
              <thead>
                <tr
                  style={{
                    background: "#2F49D1",
                    color: "#fff",
                    border: "none",
                  }}
                  className={`${isDark ? "dark" : "light"}`}
                >
                  <th scope="col">№</th>
                  <th scope="col">{language.studentName}</th>
                  <th scope="col">{language.tel}</th>
                  <th scope="col">{language.field}</th>
                  <th scope="col">{language.teacher}</th>
                  <th scope="col" colSpan={2}>
                    {language.paymentDate}
                  </th>
                </tr>
              </thead>
              <tbody>
                {payment.map((e, index) => (
                  <tr key={index} className={`${isDark ? "dark" : "light"}`}>
                    <th
                      className={
                        index % 2
                          ? isDark
                            ? "dark__even"
                            : "light"
                          : isDark
                          ? "dark__odd"
                          : "light"
                      }
                      scope="row"
                    >
                      {index + 1}
                    </th>
                    <td
                      className={
                        index % 2
                          ? isDark
                            ? "dark__even"
                            : "light"
                          : isDark
                          ? "dark__odd"
                          : "light"
                      }
                    >
                     {e.student_name}
                    </td>
                    <td
                      className={
                        index % 2
                          ? isDark
                            ? "dark__even"
                            : "light"
                          : isDark
                          ? "dark__odd"
                          : "light"
                      }
                    >
                      {e.student_phone}
                    </td>
                    <td
                      className={
                        index % 2
                          ? isDark
                            ? "dark__even"
                            : "light"
                          : isDark
                          ? "dark__odd"
                          : "light"
                      }
                    >
                      {e.group_name}
                    </td>
                    <td
                      className={
                        index % 2
                          ? isDark
                            ? "dark__even"
                            : "light"
                          : isDark
                          ? "dark__odd"
                          : "light"
                      }
                    >
                      {e.teacher_name}
                    </td>
                    <td
                      className={
                        index % 2
                          ? isDark
                            ? "dark__even"
                            : "light"
                          : isDark
                          ? "dark__odd"
                          : "light"
                      }
                    >
                      {e.payment_date}
                    </td>
                    <td
                      className={
                        index % 2
                          ? isDark
                            ? "dark__even"
                            : "light"
                          : isDark
                          ? "dark__odd"
                          : "light"
                      }
                    >
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-12 d-flex justify-content-end align-items-center my-5">
          <p className={`pt-3 col__jami ${isDark ? "dark__title" : "light"}`}>
            JAMI 100 ta
          </p>
          <Stack spacing={2} className="mr-5 pr-5">
            <Pagination count={10} color="primary" />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Payments;
