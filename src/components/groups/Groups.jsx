import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import User from "../../assets/images/user.png";
import { lang } from "../store/Slices/data/languaages";
import "./Groups.css";
function Groups() {
  const language = useSelector(state => state.language.currentLanguage);
  const isDark = useSelector((state) => state.isDark.bool);
  const params = useParams();
  console.log(params)
  return (
    <div className="container">
      <div className="main mt-5 pt-4">
        <h2 className={`mt-3 main__h2 ${isDark?"dark__title":"light"}`}>{language.groupList}</h2>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card h-100 card__card ">
              <div className=" bg-primary text-center  informatika">
                <p className="text-light mt-3 ">Informatika</p>
              </div>
              <div className="p-3">
                <div className="d-flex">
                  <img src={User} className="w-25 h-25 mt-2" alt="" />
                  <div className="">
                    <p className="card__p ">
                      {language.teacher}:
                      <span className="card__span padding">
                        Muxamadaliyev Ibroxim
                      </span>
                    </p>
                    <p className="card__p">
                      {language.tel}:{" "}
                      <span className="card__span ">+998900113861</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">{language.lessonDays}:</p>
                  <p className="card__span">DU-CHOR-JUMA</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">{language.lessonTime}:</p>
                  <p className="card__span">14:00-16:00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">{language.numberstudents}</p>
                  <p className="card__span">25ta</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">{language.thosePaid}</p>
                  <p className="card__span">10ta</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="card__h3">Shu oy bo’yicha to’lov qilmaganlar </h3>
              <div>
                <ol className="mt-4">
                  <li>Muxamadaliyev Ibroxim</li>
                  <li>Muxamadaliyev Ibroxim</li>
                  <li>Muxamadaliyev Ibroxim</li>
                  <li>Muxamadaliyev Ibroxim</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div
              className="card mt-2 card__table"
              style={{
                background: "#FFFFFF",
                boxShadow: " 0px 10px 25px rgba(0, 0, 0, 0.25)",
              }}
            >
              <table className="table table-striped table-hover">
                <thead>
                  <tr
                    style={{
                      background: "#2F49D1",
                      color: "#fff",
                      border: "none",
                    }}
                  >
                    <th scope="col">№</th>
                    <th scope="col">O’quvchi ismi</th>
                    <th scope="col">To’lov</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Muxamadaliyev Ibroxim</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Muxamadaliyev Ibroxim</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan={1}>Muxamadaliyev Ibroxim</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colSpan={1}>Muxamadaliyev Ibroxim</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td colSpan={1}>Muxamadaliyev Ibroxim</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td colSpan={1}>Muxamadaliyev Ibroxim</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td colSpan={1}>Muxamadaliyev Ibroxim</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td colSpan={1}>Muxamadaliyev Ibroxim</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td colSpan={1}>Muxamadaliyev Ibroxim</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td colSpan={1}>Muxamadaliyev Ibroxim</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups;
