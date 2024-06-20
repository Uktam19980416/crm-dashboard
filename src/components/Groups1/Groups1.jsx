import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import User from "../../assets/images/user.jpg";
import "./Groups1.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
function Groups1() {
  const language = useSelector(state => state.language.currentLanguage);
  const isDark = useSelector((state) => state.isDark.bool);
  const [teachers, setTeachers] = useState([]);
  const [search, setSearch] = useState('');
  const [groups, setGroups] = useState([]);
  const [toggle, setToggle] = useState(false);
     useEffect(() => {
       fetch(`https://crm-joygroup.herokuapp.com/teachers?search=${search}`)
         .then((res) => res.json())
         .then((data) => {
           setTeachers(data);
           console.log(data)
         });
     }, [search, toggle]);
    useEffect(() => {
      fetch(`https://crm-joygroup.herokuapp.com/groups`)
        .then((res) => res.json())
        .then((data) =>
        {
          setGroups(data)
          console.log(data)
        });
    }, []);
  const sendGroup = e => {
    e.preventDefault();
    console.log('sent')
    const { groupID, lessonDays, lessonTime, teacherName, teacherTel, teacherImg } = e.target.elements;
    const newGroup = {
      teacher_name: teacherName.value,
      teacher_phone: teacherTel.value,
      lesson_days: lessonDays.value,
      lesson_hours: lessonTime.value,
      group_id: Number(groupID.value),
      teacher_profile_img: teacherImg.files[0]
    };
    const form = new FormData();
    form.append("teacher_name", teacherName.value);
    form.append("teacher_phone", teacherTel.value);
    form.append("lesson_days", lessonDays.value);
    form.append("lesson_hours", lessonTime.value);
    form.append("group_id", groupID.value);
    form.append("file", teacherImg.files[0]);
    console.log(form, newGroup);
      fetch(`https://crm-joygroup.herokuapp.com/teachers`, {
        method: "POST",
      
        body: form,
      })
        .then((res) => res.json())
        .then((message) => {
          console.log(message)
          setToggle(!toggle);
        });
    
       
   }

  return (
    <div className="container">
      <div className="main my-5 pt-5">
        <div className="col-md-12 mt-3">
          <h1 className={`col__h1 ${isDark ? "dark__title" : "light"}`}>
            {language.addNewGroup}
          </h1>

          <form onSubmit={sendGroup}>
            <div className="form-row">
              <div className="col d-flex justify-content-between">
                <div className=" w-50 m-2">
                  <label
                    htmlFor="inputText"
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
                    {groups.map((e, i) => (
                      <option key={i} value={e.group_id}>
                        {e.group_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-50 m-2">
                  <label
                    htmlFor="inputState"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.lessonDays}
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    placeholder="DU-CHOR-JUMA"
                    name="lessonDays"
                  />
                </div>
                <div className="w-50 m-2">
                  <label
                    htmlFor="inputText"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.lessonTime}
                  </label>
                  <select
                    id="inputState"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    name="lessonTime"
                  >
                    <option defaultValue="9:00-11:00">9:00-11:00</option>
                    <option value={"11:00-13:00"}>11:00-13:00</option>
                    <option value={"14:00-16:00"}>14:00-16:00</option>
                    <option value={"16:00-18:00"}>16:00-18:00</option>
                    <option value={"18:00-20:00"}>18:00-20:00</option>
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
                    {language.teacher}
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    placeholder=" Olimjonova Nargiza"
                    name="teacherName"
                  />
                </div>
                <div className="w-50 m-2">
                  <label
                    htmlFor="inputState"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.teacherTel}
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    placeholder="+998 xx xxx xx xx"
                    name="teacherTel"
                  />
                </div>
                <div className="w-50 m-2">
                  <label
                    htmlFor="inputState"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.teacherImg}
                  </label>
                  <input
                    type="file"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    name="teacherImg"
                  />
                </div>
              </div>
              <div className="w-100 m-2 p-3 mt-3 card__btn">
                <button
                  type="submit"
                  className={`btn btn-primary btn__btn ${
                    isDark ? "dark__btn" : "light"
                  }`}
                >
                  {language.addNewGroup}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-12 d-flex justify-content-between mt-5 pt-5 mb-3">
          <h3 className={`col__h3 ${isDark ? "dark__title" : "light"}`}>
            {language.existingGroups}
          </h3>
          <div className="col__img-input">
            <SearchIcon className="col__search" />
            <input
              type="text"
              className={`col__input ${isDark ? "dark__btn" : "light"}`}
              onChange={(e) => {
                setSearch(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          {teachers.map((e, i) => (
            <div key={i} className="col-md-4 mb-3">
              <NavLink to={`/groups/${e.teacher_id}`}>
                <div
                  className={`card h-100 card__card ${
                    isDark ? "dark__cards" : "light"
                  }`}
                >
                  <div
                    className={` bg-primary text-center  informatika ${
                      isDark ? "dark__btn" : "light"
                    }`}
                  >
                    <p className="text-light mt-3 ">{e.group_name}</p>
                  </div>
                  <div className="p-3">
                    <div className="d-flex">
                      <img
                        src={User}
                        className="w-25 h-25 mt-2"
                        style={{ borderRadius: 50 }}
                        alt={"user"}
                      />
                      <div className="">
                        <p className="card__p ">
                          O’qituvchi:
                          <span className="card__span padding">
                            {e.teacher_name}
                          </span>
                        </p>
                        <p className="card__p">
                          Tell raqam:{" "}
                          <span className="card__span ">
                            +{e.teacher_phone}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="card__p">Dars kunlari:</p>
                      <p className="card__span">{e.lesson_days}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="card__p">Dars vaqti:</p>
                      <p className="card__span">{e.lesson_hours}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="card__p">O’quvchilar soni</p>
                      <p className="card__span">{e.studentAll.length}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="card__p">To’lov qilganlar</p>
                      <p className="card__span">{e.isPaid.length}</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Groups1;
