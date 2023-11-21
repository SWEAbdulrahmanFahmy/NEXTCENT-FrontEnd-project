import React ,{ useState,useEffect, useRef }from 'react'
import Feature4Style from "./Feature4.css"
import { animated,useSpring } from 'react-spring';
import club from"../../assets/club.svg"
import event from"../../assets/event.svg"
import member from"../../assets/members.svg"
import payment from "../../assets/payment.svg"
const Number=({num})=>{
  const {number}=useSpring({
    from:{ number:1000},
    number:num,
    delay:800,
    config:{mass:1 ,tension:20 ,friction:10},
  });
  return <animated.div>{number.to((num)=>num.toFixed(0))}</animated.div>;
}
const Feature4 = () => {
const [isAnimated, setIsAnimated] = useState(false);
const sectionRef = useRef(null);

useEffect(() => {
  const options = {
    root: null,
    threshold: 0.5, // Adjust this value as needed
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsAnimated(true);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(sectionRef.current);
  return () => {
    observer.disconnect();
  };
}, []);
const statistics=[
                   {
                    icon:member
                   ,number:2245341,
                   to:"Members"},
                   {
                    icon:club
                    ,number:46328,
                    to:"Clubs"}, 
                   {icon:event
                   
                    ,number:828867,to:"Event Bookings"},
                   {icon:payment
                   ,number:1926436,to:"Payments"}
                ];
const handleAnimation = () => {
  setIsAnimated(true);
};
  return (
    <div >
      <div ref={sectionRef} className={`py-24 bg-[#F5F7FA] animate-div ${isAnimated ? 'start-animation' : ''}`}>
        <div className='px-40 flex flex-row justify-between gap-4'>
        <div>
        <h1 className='basis-1/2 text-[25.06px] font-semibold pb-4'>Helping a local <br/> <h1 className='text-[#4CAF4F]'>business reinvent itself</h1></h1> 
          <p className='text-sm'>We reached here with our hard work and dedication</p>
        </div>
          
          {statistics.map(({icon,number,to},idx)=>(
            <div key={idx}>
            <img src={icon} className='w-14'/>
            <div className='text-[19.49px] font-bold'> <Number num={number} /></div>
           
            <p>{to}</p>
            </div>  
        ))}    
        </div>
       
      </div>

    </div>
  )
}

export default Feature4;
