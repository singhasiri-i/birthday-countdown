import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css"

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

function App() {
  //state
  const [time, setTime] = useState(new Date('December 31, 2024 23:59:59'))

  //function input TimeStamp and then return day,hours,minutes and seconds
  const getCountdown = () => {
    let now = new Date()
    let timeCount = time.getTime() - now.getTime()  //convert milliseconds to seconds

    //convert milliseconds to days
    let days = Math.floor(timeCount / DAY)
    //convert milliseconds to hours
    let hours = Math.floor((timeCount % DAY) / HOUR)
    //convert millseconds to minutes
    let minutes = Math.floor((timeCount % HOUR) / MINUTE)
    //convert milliseconds to sec
    let seconds = Math.floor((timeCount % MINUTE) / SECOND)
    
    // หลังคำนวณเสร็จ เอาตัวแปรที่คำนวณแล้วเก็บไว้ใน object
    return { days, hours, minutes, seconds}
  }
  // countdown every second
  useEffect(() => {
    const intervalTask = setInterval(() => {
      setTime(new Date('December 31, 2024 23:59:59'))      
    }, SECOND)
    return () => clearInterval(intervalTask)
  }, [])
  // เรียกใช้ object ที่เก็บค่า เพื่อเอาไปแสดงที่หน้าจอ
  const {days, hours, minutes, seconds} = getCountdown()

  return (
    <div>
     <div className="flex justify-center items-center h-[100vh]">
       <div className='flex flex-col items-center text-white'>
         <div className='mb-[20px] text-center text-[50px] font-extrabold'>Countdown to my birthday</div>

         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] w-full place-items-center'>

           <div className="flex flex-col justify-center items-center w-[160px] h-[160px] shadow-xl shadow-blue-500/80 rounded-b-[30px]">
             <div className="flex justify-center items-center w-[160px] h-[140px] bg-sky-500/50 rounded-t-[30px] text-[50px]">{days}</div>
             <div className="w-[160px] h-[40px] bg-white rounded-b-[30px] text-gray-500 text-center text-[20px]">Days</div>
           </div>
           <div className="flex flex-col justify-center items-center w-[160px] h-[160px] shadow-xl shadow-blue-500/80 rounded-b-[30px]">
             <div className="flex justify-center items-center w-[160px] h-[140px] bg-sky-500/50 rounded-t-[30px] text-[50px]">{hours}</div>
             <div className="w-[160px] h-[40px] bg-white rounded-b-[30px] text-gray-500 text-center text-[20px]">Hours</div>
           </div>
           <div className="flex flex-col justify-center items-center w-[160px] h-[160px] shadow-xl shadow-blue-500/80 rounded-b-[30px]">
             <div className="flex justify-center items-center w-[160px] h-[140px] bg-sky-500/50 rounded-t-[30px] text-[50px]">{minutes}</div>
             <div className="w-[160px] h-[40px] bg-white rounded-b-[30px] text-gray-500 text-center text-[20px]">Minutes</div>
           </div>
           <div className="flex flex-col justify-center items-center w-[160px] h-[160px] shadow-xl shadow-blue-500/80 rounded-b-[30px]">
             <div className="flex justify-center items-center w-[160px] h-[140px] bg-sky-500/50 rounded-t-[30px] text-[50px]">{seconds}</div>
             <div className="w-[160px] h-[40px] bg-white rounded-b-[30px] text-gray-500 text-center text-[20px]">Seconds</div>
           </div>

         </div>

       </div>
     </div>
    </div>
  )
}

export default App
