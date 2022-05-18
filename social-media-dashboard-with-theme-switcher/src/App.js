import {AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
  } from "react-icons/ai";
  import {RiArrowDownSFill, RiArrowUpSFill} from "react-icons/ri";
import React from "react";
import Card from "./components/card";
import SmallCard from "./components/SmallCard";
import {useState} from 'react';

function App(){

  const [darkMode, setDarkMode] = useState(false);

  const handleCheckChange = (e) => {
    setDarkMode(e.target.checked);
  };

  return (
    <div className={darkMode && "dark" }>
      <div className=" text-slate-400 pb-8 dark:bg-darkbg-dark dark:text-slate-300">
      {/* header */}
      <div className=" bg-bg pb-40 dark:bg-darkbg-dark">
        <div className=" container py-9 flex justify-between items-center">
          <div>
            <h1 className="text-slate-800 dark:text-white font-bold text-3xl">Social Media Dashboard</h1>
            <span className="text-sm">Yotal Followers : 12.3456</span>
          </div>
          <div>
            <label className="mr-2" htmlFor="checkbox">Dark Mode</label>
            <span>
              <input id="checkbox" type="checkbox" onChange={handleCheckChange}/>
            </span>
          </div>
        </div>
      </div>
      {/* main cards */}
      <div className=" container -mt-40">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-8">
          {/* card */}
          <Card 
            border="before:bg-facebook"
            iconColor="text-facebook"
            icon={<AiFillFacebook size={22} />}
            arrow={<RiArrowUpSFill />}
            socialName="@nathanf"
            socialNumber="1987"
            socialFollowers="Followers"
            socialToday="12 Today"
            textUpDown="up"
          />

          <Card 
            border="before:bg-twitter"
            iconColor="text-twitter"
            icon={<AiFillTwitterSquare size={22} />}
            arrow={<RiArrowUpSFill />}
            socialName="@nathanf"
            socialNumber="1044"
            socialFollowers="Followers"
            socialToday="99 Today"
            textUpDown="up"
          />

          <Card 
            border="before:bg-gradient-to-r before:from-amber-500 before:to-fuchsia-500"
            iconColor="text-fuchsia-600"
            icon={<AiFillInstagram size={22} />}
            arrow={<RiArrowUpSFill />}
            socialName="@realnathanf"
            socialNumber="11K"
            socialFollowers="Followers"
            socialToday="1099 Today"
            textUpDown="up"
          />

          <Card 
            border="before:bg-rose-700"
            iconColor="text-rose-700"
            icon={<AiFillYoutube size={22} />}
            arrow={<RiArrowDownSFill />}
            socialName="Nathan F."
            socialNumber="8239"
            socialFollowers="SUBSCRIBERS"
            socialToday="144 Today"
            textUpDown="down"
          />
        </div>

        {/* small cards */}
        <div className="mt-12">
              <h2 className="font-bold text-2xl">Overview - Today</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-6">
                <SmallCard 
                  title="Pages Views"
                  icon={<AiFillFacebook className=" text-facebook" size={22} />}
                  number="87"
                  arrow={<RiArrowUpSFill />}
                  textUpDown="up"
                  precintage="3%"
                />

                <SmallCard 
                  title="Likes"
                  icon={<AiFillFacebook className=" text-facebook" size={22} />}
                  number="52"
                  arrow={<RiArrowDownSFill />}
                  textUpDown="down"
                  precintage="2%"
                />

                <SmallCard 
                  title="Likes"
                  icon={<AiFillInstagram className=" text-fuchsia-600" size={22} />}
                  number="5462"
                  arrow={<RiArrowUpSFill />}
                  textUpDown="up"
                  precintage="2257%"
                />

                <SmallCard 
                  title="Profile Views"
                  icon={<AiFillInstagram className=" text-fuchsia-600" size={22} />}
                  number="52K"
                  arrow={<RiArrowUpSFill />}
                  textUpDown="up"
                  precintage="1375%"
                />

                <SmallCard 
                  title="Retweets"
                  icon={<AiFillTwitterSquare className=" text-twitter" size={22} />}
                  number="117"
                  arrow={<RiArrowUpSFill />}
                  textUpDown="up"
                  precintage="303%"
                />

                <SmallCard 
                  title="Likes"
                  icon={<AiFillTwitterSquare className=" text-twitter" size={22} />}
                  number="507"
                  arrow={<RiArrowUpSFill />}
                  textUpDown="up"
                  precintage="553%"
                />

                <SmallCard 
                  title="Likes"
                  icon={<AiFillYoutube className=" text-rose-700" size={22} />}
                  number="107"
                  arrow={<RiArrowDownSFill />}
                  textUpDown="down"
                  precintage="19%"
                />

                <SmallCard 
                  title="Total Views"
                  icon={<AiFillYoutube className=" text-rose-700" size={22} />}
                  number="1407"
                  arrow={<RiArrowDownSFill />}
                  textUpDown="down"
                  precintage="12%"
                />
                

              </div>
        </div>

      </div>
      </div>
    </div>
  );
}
export default App;