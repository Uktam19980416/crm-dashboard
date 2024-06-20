import * as React from "react";
import './Select.css'
import { useDispatch, useSelector} from 'react-redux'
import { languageActions } from "../store/Slices/LanguageSlice";
export default function CustomizedSelects() {
  const [age, setAge] = React.useState("UZ");
  const dispatch = useDispatch();
  const handechange = (e) => {
      let value = e.target.value;
    dispatch(languageActions.changeLanguage(value))
  };
  const language = useSelector(state => state.language.currentLanguage);
  const isDark = useSelector(state=>state.isDark.bool)
  return (
    <div className="position-relative">
      <select className="select" style={{color:isDark?"#FFFFFF":"#000000"}} onChange={handechange}>
        {" "}
        <option value={"uz"}>UZ</option>
        <option value={"en"}>EN</option>
        <option value={"ru"}>RU</option>
      </select>
    </div>
  );
}
