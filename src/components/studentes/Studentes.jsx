import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import Delete from "../../assets/images/delete.png";
import "./Studentes.css";
import { useSelector } from "react-redux";
import { lang } from "../store/Slices/data/languaages";

function Studentes() {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [option, setOption] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [file, setFile] = useState();
  const [hendleDelete, setHendleDelete] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

console.log(students)
   
  useEffect(() => {
    fetch(
      `https://crm-joygroup.herokuapp.com/students?search=${search}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, [search, page, posts, hendleDelete]);

  console.log(hendleDelete);

  const PostForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("student_name", studentName);
    formData.append("student_phone", phoneNumber);
    formData.append("parents_name", parentName);
    formData.append("parents_phone", parentPhone);
    formData.append("group_id", option);
    formData.append("file", file);

    fetch(`https://crm-joygroup.herokuapp.com/students`, {
      method: "POST",
      body: formData,
    }).then((res) => res.json().then((data) => setPosts(data)));

    // setPhoneNumber(e.target.number.value);
    // setOption(e.target.select.value);
    // setParentName(e.target.parentName.value);
    // setParentPhone(e.target.parentPhone.value);

    e.target.reset()
  };


  const HendleDelete = (id) => {
    fetch(`https://crm-joygroup.herokuapp.com/students?student_id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setHendleDelete(data));
  };

  const hendleSearch = (e) => {
    e.preventDefault();

    setSearch(e.target.search.value);

    e.target.search.value = "";
  };
  //language 
  const language = useSelector((state) => state.language.currentLanguage);
  const isDark = useSelector((state) => state.isDark.bool);
  return (
    <div className="container">
      <div className="main my-5 pt-5">
        <div className="col-md-12 mt-3">
          <h1 className={`col__h1 ${isDark ? "dark__title" : "light"}`}>
            {language.addNewStudent}
          </h1>
          <form onSubmit={(e) => PostForm(e)}>
            <div className="form-row">
              <div className="col d-flex justify-content-between">
                <div className=" w-50 m-2">
                  <label
                    htmlFor="text"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.studentName}
                  </label>
                  <input
                    onChange={(e) => setStudentName(e.target.value)}
                    name="text"
                    type="text"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    placeholder="O’quvchi ismi"
                  />
                </div>
                <div className="w-50 m-2">
                  <label
                    htmlFor="inputState"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.tel}
                  </label>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    name="number"
                    type="number"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    placeholder="+998 xx xxx xx xx"
                  />
                </div>
                <div className="w-50 m-2">
                  <label
                    htmlFor="inputText"
                    className={`col__label ${isDark ? "dark__title" : "ligh"}`}
                  >
                    {language.field}
                  </label>
                  <select
                    id="inputState"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    name="select"
                    onChange={(e) => setOption(e.target.value)}
                  >
                    <option value="1">Foundation</option>
                    <option value="2">Java</option>
                    <option value="3">NodeJS</option>
                    <option value="4">Flutter</option>
                    <option value="5">JavaScript</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="col d-flex justify-content-between">
                <div className="w-50 m-2">
                  <label
                    htmlFor="inputText"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.parentName}
                  </label>
                  <input
                    onChange={(e) => setParentName(e.target.value)}
                    name="parentName"
                    type="text"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    placeholder=" Ota-onasi ismi"
                  />
                </div>
                <div className="w-50 m-2">
                  <label
                    htmlFor="inputState"
                    className={`col__label ${isDark ? "dark__title" : "ligh"}`}
                  >
                    {language.parentsTel}
                  </label>
                  <input
                    onChange={(e) => setParentPhone(e.target.value)}
                    name="parentPhone"
                    type="number"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    placeholder="+998 xx xxx xx xx"
                  />
                </div>
                <div className="w-50 m-2">
                  <label
                    htmlFor="inputState"
                    className={`col__label ${isDark ? "dark__title" : "ligh"}`}
                  >
                    {language.rasm}
                  </label>
                  <input
                    name="file"
                    type="file"
                    id="file"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="w-100 m-2 p-3 mt-3 card__btn">
                <button
                  className={`btn btn-primary btn__btn ${
                    isDark ? "dark__btn" : "light"
                  }`}
                >
                  {language.addNewStudent}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-md-12 d-flex justify-content-between mt-5 pt-5 mb-3">
          <h3 className={`col__h3 ${isDark ? "dark__title" : "light"}`}>
            {language.ourStudents}
          </h3>
          <form onSubmit={(e) => hendleSearch(e)} className="col__img-input">
            <SearchIcon className={`col__search `} />
            <input
              name="search"
              type="search"
              className={`col__input ${isDark ? "dark__btn" : "light"}`}
              placeholder="Qidiruv"
            />
          </form>
        </div>
        <div className={`col-md-12 ${isDark ? "dark__card" : "light"}`}>
          <div
            className={`card card__table mt-2 ${
              isDark ? "dark__card" : "light"
            }`}
            style={{
              background: "#FFFFFF",
              boxShadow: " 0px 10px 25px rgba(0, 0, 0, 0.25)",
            }}
          >
            <table
              className={`table table-striped table-hover h-25 p-5 ${
                isDark ? "dark" : "light"
              }`}
            >
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
                  <th scope="col">{language.parentName}</th>
                  <th scope="col" colSpan="2">
                    {language.parentsTel}
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {students &&
                  students?.map((i, index) => {
                    return (
                      <tr
                        className={
                          index % 2
                            ? isDark
                              ? "dark__even"
                              : "light"
                            : isDark
                            ? "dark__odd"
                            : "light"
                        }
                        key={Math.random()}
                      >
                        <th
                          className={isDark ? "dark__title" : "light"}
                          scope="row"
                        >
                          {index + 1}
                        </th>
                        <td className={isDark ? "dark__title" : "light"}>
                          {i.student_name}
                        </td>
                        <td className={isDark ? "dark__title" : "light"}>
                          +{i.student_phone}
                        </td>
                        <td className={isDark ? "dark__title" : "light"}>
                          {i.group_name}
                        </td>
                        <td className={isDark ? "dark__title" : "light"}>
                          {i.parents_name}
                        </td>
                        <td className={isDark ? "dark__title" : "light"}>
                          {i.parents_phone}
                        </td>
                        <td className={isDark ? "dark__title" : "light"}>
                          <img
                            src={Delete}
                            id={i.student_id}
                            onClick={(e) => HendleDelete(e.target.id)}
                            className="delete"
                            alt=""
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-12 d-flex justify-content-end align-items-center my-5">
          <p className={`pt-3 col__jami ${isDark ? "dark__title" : "light"}`}>
            {language.all} {students.length}{" "}
          </p>

          <Stack
            spacing={2}
            className={` mr-5 pr-5 ${isDark ? "dark__title" : "light"}`}
          >
            <Pagination
              count={students.length || 100}
              color="primary"
              defaultValue={1}
              className={` mr-5 pr-5 ${isDark ? "dark__title" : "light"}`}
              onChange={(e) => setPage(e.target.textContent)}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Studentes;
