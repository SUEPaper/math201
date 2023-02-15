import React from "react";

type WeekListItem = {
    time: string,

}

const WeekLists: WeekListItem[] = [
    {
        time: "2023年3月1日"
    },

]


function WeekList(): JSX.Element {
    return (
        <div>

        </div>
    )
}

function Schedules(): JSX.Element {

    return (
        <div className="w-3/5 my-14 mx-auto">
            <h2 className="text-2xl font-bold">日程</h2>

            <div className="bg-sky-400 h-44	 w-4/5 mx-auto mt-5 mb-1 rounded-lg shadow-2xl">

            </div>
        </div>
    )

}


export default Schedules;