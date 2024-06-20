import { useContext } from "react";
import { dataContext } from "../context/ContextData";


function UserData() {
  const { dataInfo, setDataInfo } = useContext(dataContext);
  return { dataInfo, setDataInfo };
}

export default UserData;
