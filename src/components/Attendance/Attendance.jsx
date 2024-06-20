import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import User from "../../assets/images/user.png";
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import {useEffect, useState} from 'react'

function Attendance() {
  const language = useSelector(state => state.language.currentLanguage);
  const isDark = useSelector((state) => state.isDark.bool);
  const [teacher, setTeacher] = useState([]);
  const [search, setSearch] = useState('')
  let arr = [1, 2, 3, 4, 5, 6];
  
   useEffect(() => {
     fetch(`https://crm-joygroup.herokuapp.com/teachers?search=${search}`)
       .then((res) => res.json())
       .then((data) => {
         setTeacher(data);
         console.log(data);
         
       });
   }, [search]);
  return (
    <div className="container">
      <div className="main my-5 ">
        <div className="col-md-12 d-flex justify-content-between mt-5 pt-5 mb-3">
          <h3 className={`col__h3 ${isDark ? "dark__title" : "light"}`}>
            {language.chooseGroup}
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
        <div className="row">
          {teacher.map((e, i) => (
            <div key={i} className="col-md-4 mb-3">
              <NavLink to={`/attendance1/${e.teacher_id}`}>
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

export default Attendance;
