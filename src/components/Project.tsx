import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data =
[
{
    id:0,
    title:"Todo list",
    img:"/todo.png",
    desc: "A react and typescript base app to manag and organize your task effiency.",

    tags: ["NEXT.JS","NODE","CSS","TYPESCRIPT"],},
{
    id: 1,
    title: "COUNTDOWN timer",
desc: "A react and typescript base app to track time with interactive countdown.",
 img:"/countdown.png",
tags: ["NEXT.JS","NODE","CSS","TYPESCRIPT"],},

{
    id: 2,
    title: "weatherupdate",
desc: "A react and typescript base app to fetching and displaying real-time weather data.",
img: "/weather.png",
tags: ["NEXT.JS","NODE","CSS","TYPESCRIPT"],},
{
    id: 3,
    title:"static resume",
desc:"A react and typescript base interactive resume built with cs and html,allowing use to showcase their skills.",
img: "/resume.png",
tags:["NEXT.JS","NODE","CSS","TYPESCRIPT"],},
{
    id: 4,
    title: "bakery full responsive wecsite",
desc: "A react and typescript base app website in full working.",
img: "/main.jpg",
tags: ["NEXT.JS","NODE","CSS","TYPESCRIPT"],},
];


const Project = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My projects'/>
        <div className = 'grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-col-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) =>(<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
    </div>
    </div>
  )
}

export default Project