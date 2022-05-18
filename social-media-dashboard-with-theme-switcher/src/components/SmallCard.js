import React from "react";

function SmallCard(props){
    return <div className="card-sm">
                <div className="flex items-center justify-between">
                <h4 className=" font-bold">{props.title}</h4>
                    {props.icon}
                </div>
                <div className="flex items-center justify-between mt-8">
                <h3 className=" font-black text-2xl text-slate-800">
                    {" "}
                    {props.number}
                </h3>
                <div className={`flex items-center gap-1 text-sm ${props.textUpDown == 'up' ? 'text-maingreen' : 'text-rose-700'}`}>
                    <span>
                        {props.arrow}
                    </span>
                    <span>{props.precintage}</span>
                </div>
                </div>
            </div>;
}
export default SmallCard;