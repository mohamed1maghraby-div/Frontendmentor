
import React from "react";

function Card(props){
    return <div className={`card ${props.border}`}>
    <div className=" flex items-center justify-center gap-1 font-bold pd-6">
      <span className={props.iconColor}>
        {props.icon}
      </span>
      <span>{props.socialName}</span>
    </div>
    <h2 className="text-slate-800 dark:text-white text-6xl">{props.socialNumber}</h2>
    <p className=" font-medium uppercase tracking-[0.3em]">{props.socialFollowers}</p>
    <div className={`flex items-center justify-center gap-1 font-bold pt-6 ${props.textUpDown == 'up' ? 'text-maingreen' : 'text-rose-700'}`}>
      <span>
        {props.arrow}
      </span>
      <span>{props.socialToday}</span>
    </div>
  </div>;
}
export default Card;