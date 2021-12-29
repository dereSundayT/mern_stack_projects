import React,{useEffect, useState} from 'react'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import "./home.scss"
import axios from 'axios'
const Home = ({type}) => {
    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState(null)

    useEffect(() => {
        const getRandomLists  =  async () => {
            try {
                const res = await axios.get(`lists${type ? "?type="+type : ""}${genre ? "&genre="+genre:""}`, 
                {headers:{ token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2I5MDA0OWE2YWI3NDY1OWMzZjcyYyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDA3MzA2MzgsImV4cCI6MTY0MTE2MjYzOH0.DssX1PnL31XuLEnCRPLJWOkCqOWClpFqAtQ2GKuBmQQ"}})
                console.log(res.data)
                setLists(res.data)
            } catch (error) {
                console.log(error)
            }   
        }
        getRandomLists()
    },[genre,type])
 
    return (
        <div className='home'>
           <Navbar/>
           <Featured type={type}/>
           {lists.map((list) => <List list={list}/>)}      
        </div>
    )
}

export default Home
