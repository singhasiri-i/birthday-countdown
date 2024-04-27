// import React, { useEffect, useState } from 'react'

// const Countdown = () => {
//     const [birthdate, setBirthdate] = useState(new Date())
//     const [daysLeft, setDaysLeft] = useState(0)

//     const handleInputChange = (event:any) => {
//         setBirthdate(event.target.value)
//     }
    
//     useEffect(() => {
//       const today = new Date()
//       const selectedDate = new Date(birthdate)
      
//       const difference = selectedDate.getTime() - today.getTime()
//       const daysRemaining = Math.ceil(difference / (1000 * 60 * 60 * 24))
//       console.log(daysRemaining);
      
//       if(daysRemaining < 0) {
//         setDaysLeft(daysRemaining + 365); 
//       } else {
//         setDaysLeft(daysRemaining); 
//       }

//     }, [birthdate])

//   return (
//     <div className="flex justify-center items-center h-[100vh]">
//       <div className='flex flex-col items-center text-white'>
//         <div className='mb-[20px] text-center text-[50px] font-extrabold'>Countdown to my birthday</div>
//         <div className='flex justify-between items-center mb-[35px] p-[10px] w-[280px] h-[50px] bg-purple-400 rounded-[10px]  text-black'>
//             <label htmlFor="birthdate" className='font-semibold'>My birthdate is: </label>
//             <input className='bg-transparent text-center' type="date" value={ birthdate } onChange={ handleInputChange } />
//         </div>
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] w-full place-items-center'>
//           <div className="flex flex-col justify-center items-center w-[160px] h-[160px] shadow-xl shadow-blue-500/80 rounded-b-[30px]">
//             <div className="flex justify-center items-center w-[160px] h-[140px] bg-sky-500/50 rounded-t-[30px] text-[50px]">{ daysLeft }</div>
//             <div className="w-[160px] h-[40px] bg-white rounded-b-[30px] text-gray-500 text-center text-[20px]">Days</div>
//           </div>
//           <div className="flex flex-col justify-center items-center w-[160px] h-[160px] shadow-xl shadow-blue-500/80 rounded-b-[30px]">
//             <div className="flex justify-center items-center w-[160px] h-[140px] bg-sky-500/50 rounded-t-[30px] text-[50px]">12</div>
//             <div className="w-[160px] h-[40px] bg-white rounded-b-[30px] text-gray-500 text-center text-[20px]">Hours</div>
//           </div>
//           <div className="flex flex-col justify-center items-center w-[160px] h-[160px] shadow-xl shadow-blue-500/80 rounded-b-[30px]">
//             <div className="flex justify-center items-center w-[160px] h-[140px] bg-sky-500/50 rounded-t-[30px] text-[50px]">2</div>
//             <div className="w-[160px] h-[40px] bg-white rounded-b-[30px] text-gray-500 text-center text-[20px]">Minutes</div>
//           </div>
//           <div className="flex flex-col justify-center items-center w-[160px] h-[160px] shadow-xl shadow-blue-500/80 rounded-b-[30px]">
//             <div className="flex justify-center items-center w-[160px] h-[140px] bg-sky-500/50 rounded-t-[30px] text-[50px]">46</div>
//             <div className="w-[160px] h-[40px] bg-white rounded-b-[30px] text-gray-500 text-center text-[20px]">Seconds</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Countdown

