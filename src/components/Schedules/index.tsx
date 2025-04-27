import React from "react";

import useBaseUrl from '@docusaurus/useBaseUrl';

type WeekListItem = {
    id: number,
    time: string,
    name: string,
    url: string,

}

const weekLists: WeekListItem[] = [
    {
        id: 1,
        time: "第一次课",
        name: "课程介绍和 Python 介绍",
        url: "/slides/python01"
    },
    {
        id: 2,
        time: "第二次课",
        name: "Python 基础",
        url: "/slides/python02"
    },
    {
        id: 3,
        time: "第三次课",
        name: "Python 函数",
        url: "/slides/python03"
    },
    {
        id: 4,
        time: "第四次课",
        name: "Python 数据结构",
        url: "/slides/python04"
    },
    {
        id: 5,
        time: "第五次课",
        name: "NumPy 基础",
        url: "/slides/numpy"
    },
    {
        id: 6,
        time: "第六次课",
        name: "Matplotlib 基础",
        url: "/slides/matplotlib"
    },
    {
        id: 7,
        time: "第七次课",
        name: "LaTeX Talk",
        url: "https://github.com/SUEPaper/latex-talk"
    },

]


function WeekList({ time, name, url }: WeekListItem): JSX.Element {

    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="text-center my-6">
                <h3 className="text-emerald-400"> {time} </h3>
            </div>

            <div className="col-span-2">
                <div className="my-5">
                    <div className="w-32 h-8 rounded-lg bg-blue-600 text-center inline-block mr-3">
                        <h3 className="my-1"> Lecture </h3>
                    </div>
                    <a href={useBaseUrl(`${url}`)} target="_blank">{name}</a>
                </div>
            </div>
        </div>
    )
}

function Schedules(): JSX.Element {

    return (
        <div className="w-4/5 my-14 mx-auto">
            <h2 className="text-2xl font-bold">日程</h2>
            <div className="bg-white w-4/5 mx-auto mt-5 mb-6 rounded-lg shadow-2xl">

            {
                weekLists.map((item: WeekListItem) => (
                    <WeekList {...item} />
                ))
            }
               
            </div>

        </div>
    )

}


export default Schedules;