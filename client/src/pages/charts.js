import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import '../stylesheets/charts.css'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import {useSpring, animated} from 'react-spring'
import Navbar from '../components/navbarComp';
import Boston  from '../photos/boston.jpg';

const Charts = () => {

    const [cookie,setCookie] = useCookies()
    const jwt = cookie.jwt
    const [favdata, setFavdata] = useState([])
    const [learndata, setLearndata] = useState([])
    const [appdata, setAppdata] = useState([])
    const [projdata, setProjdata] = useState([])

    const fade = useSpring({
        from:{
            opacity: 0.1
        },
        to:{
            opacity: 1
        },
        config:{
            duration: 750
        }
    })

        fetch('http://localhost:3002/graph/charts?type=favorite',{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            credentials: 'include'
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            setFavdata(data)
            console.log(favdata)
        })
        const favList = [
            {
                Subject: 'AI',
                Amount: favdata.AI
            },
            {
                Subject: 'Chemistry',
                Amount: favdata.Chemistry
            },
            {
                Subject: 'CompSci',
                Amount: favdata.ComputerScience
            },
            {
                Subject: 'Economics',
                Amount: favdata.Economics
            },
            {
                Subject: 'ElecEngin',
                Amount: favdata.ElectricalEngineering
            },
            {
                Subject: 'Engineering',
                Amount: favdata.Engineering
            },
            {
                Subject: 'Entrepreneurship',
                Amount: favdata.Entrepreneurship
            },
            {
                Subject: 'Physics',
                Amount: favdata.Physics
            },
            {
                Subject: 'SciHis',
                Amount: favdata.ScienceHistory
            },
            {
                Subject: 'Soft Skills',
                Amount: favdata.SoftSkills
            },
            {
                Subject: 'Statistics',
                Amount: favdata.Statistics
            },
            {
                Subject: 'WebDes',
                Amount: favdata.WebDesign
            }
        ]
        fetch('http://localhost:3002/graph/charts?type=learned',{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            credentials: 'include'
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            setLearndata(data)
        })
        const learnList = [
            {
                Subject: 'AI',
                Amount: learndata.AI
            },
            {
                Subject: 'Chemistry',
                Amount: learndata.Chemistry
            },
            {
                Subject: 'CompSci',
                Amount: learndata.ComputerScience
            },
            {
                Subject: 'Economics',
                Amount: learndata.Economics
            },
            {
                Subject: 'ElecEngin',
                Amount: learndata.ElectricalEngineering
            },
            {
                Subject: 'Engineering',
                Amount: learndata.Engineering
            },
            {
                Subject: 'Entrepreneurship',
                Amount: learndata.Entrepreneurship
            },
            {
                Subject: 'Physics',
                Amount: learndata.Physics
            },
            {
                Subject: 'ScieHis',
                Amount: learndata.ScienceHistory
            },
            {
                Subject: 'Soft Skills',
                Amount: learndata.SoftSkills
            },
            {
                Subject: 'Statistics',
                Amount: learndata.Statistics
            },
            {
                Subject: 'WebDes',
                Amount: learndata.WebDesign
            }
        ]
        fetch('http://localhost:3002/graph/charts?type=applicable',{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            credentials: 'include'
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            setAppdata(data)
        })
        const appList = [
            {
                Subject: 'AI',
                Amount: appdata.AI
            },
            {
                Subject: 'Chemistry',
                Amount: appdata.Chemistry
            },
            {
                Subject: 'Computer Science',
                Amount: appdata.ComputerScience
            },
            {
                Subject: 'Economics',
                Amount: appdata.Economics
            },
            {
                Subject: 'ElecEnin',
                Amount: appdata.ElectricalEngineering
            },
            {
                Subject: 'Engineering',
                Amount: appdata.Engineering
            },
            {
                Subject: 'Entrepreneurship',
                Amount: appdata.Entrepreneurship
            },
            {
                Subject: 'Physics',
                Amount: appdata.Physics
            },
            {
                Subject: 'Science History',
                Amount: appdata.ScienceHistory
            },
            {
                Subject: 'Soft Skills',
                Amount: appdata.SoftSkills
            },
            {
                Subject: 'Statistics',
                Amount: appdata.Statistics
            },
            {
                Subject: 'WebDes',
                Amount: appdata.WebDesign
            }
        ]
        fetch('http://localhost:3002/graph/charts?type=projects',{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            credentials: 'include'
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            setProjdata(data)
        })
        const projList = [
            {
                Subject: 'AI',
                Amount: projdata.AI
            },
            {
                Subject: 'Chemistry',
                Amount: projdata.Chemistry
            },
            {
                Subject: 'CompSci',
                Amount: projdata.ComputerScience
            },
            {
                Subject: 'Economics',
                Amount: projdata.Economics
            },
            {
                Subject: 'ElecEngin',
                Amount: projdata.ElectricalEngineering
            },
            {
                Subject: 'Engineering',
                Amount: projdata.Engineering
            },
            {
                Subject: 'Entrepreneurship',
                Amount: projdata.Entrepreneurship
            },
            {
                Subject: 'Physics',
                Amount: projdata.Physics
            },
            {
                Subject: 'SciHis',
                Amount: projdata.ScienceHistory
            },
            {
                Subject: 'Soft Skills',
                Amount: projdata.SoftSkills
            },
            {
                Subject: 'Statistics',
                Amount: projdata.Statistics
            },
            {
                Subject: 'WebDes',
                Amount: projdata.WebDesign
            }
        ]
    

    return ( 
        <animated.div style={fade}>
        <Navbar /> 
        <div className="container">
            <div className='chartpic'>
                <div className='chart-nav'>
                    <img src={Boston} className='nav-img'></img>
                    <h2 className='viewh2'>Chart Viewing</h2>
                </div>
            </div>
        <div className='overall'>
         <div className='one'>
            <label className='label1'>Favorite Subjects</label>
            <BarChart width={1300} height={450} data={favList} className='barone'>   
                <XAxis dataKey="Subject"/>
                <YAxis domain={[0,10]}/>
                <Tooltip />
                <Legend />
                <Bar dataKey="Amount" stackId="a" fill="#1a6985" />
            </BarChart>
        </div>
        <div className='two'>
            <label className='label2'>Subjects You Learned From Most</label>
            <BarChart width={1300} height={450} data={learnList} className='bartwo'> 
                <XAxis dataKey="Subject"/>
                <YAxis domain={[0,10]}/>
                <Tooltip />
                <Legend />
                <Bar dataKey="Amount" stackId="a" fill="#1a6985" />
            </BarChart>
        </div>
        <div className='three'>
            <label className='label3'>Most Applicable Subjects</label>
            <BarChart width={1300} height={450} data={appList} className='barthree'> 
                <XAxis dataKey="Subject"/>
                <YAxis domain={[0,10]}/>
                <Tooltip />
                <Legend />
                <Bar dataKey="Amount" stackId="a" fill="#1a6985" />
            </BarChart>
        </div>
        <div className='four'>
            <label className='label4'>Subject With Best Projects</label>
            <BarChart width={1300} height={450} data={projList} className='barfour'> 
                <XAxis dataKey="Subject"/>
                <YAxis domain={[0,10]}/>
                <Tooltip />
                <Legend />
                <Bar dataKey="Amount" stackId="a" fill="#1a6985" />
            </BarChart>
        </div>
        </div>
    </div> 
    </animated.div>
    );
}
 
export default Charts;