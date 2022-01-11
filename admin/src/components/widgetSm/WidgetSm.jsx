import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
    const getNewUsers = async () => {
      //
      try {
        const res =  await axios.get('/users?new=true',{
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2I5MDA0OWE2YWI3NDY1OWMzZjcyYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTc4MTU0OSwiZXhwIjoxNjQ1NjY5NTQ5fQ.uz9YCRGFVB0vsg6LX2_SwSa1_fkaueQc4RIx5p_mHcE"
          }
        })

        setNewUsers(res.data)
      } catch (error) {
        
      }
    }
    getNewUsers()
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle"> New Join Members </span>
      <ul className="widgetSmList">
        {
          newUsers.map((user) =>  (<li className="widgetSmListItem">
          <img
            src= { user.profilePic || "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li> ))
        }
      </ul>
    </div>
  );
}
