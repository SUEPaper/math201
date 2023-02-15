import React from "react";

function Teachers(): JSX.Element {

    return (
        <div className="w-3/5 my-14 mx-auto">
            <h2 className="text-2xl font-bold">授课老师</h2>

            <div className="bg-sky-400 w-4/5 mx-auto mt-5 mb-1 rounded-lg shadow-2xl">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>名字</th>
                            <th>Office Hours</th>
                            <th>办公室</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td><img src="./images/people/charlie.jpg"></td> */}
                            <td>占位</td>
                            <td>徐丽</td>
                            <td>周三 2:00-3:00pm</td>
                            <td>临港B2楼A412室</td>
                        </tr>   
                        <tr>
                            {/* <td><img src="./images/people/charlie.jpg"></td> */}
                            <td>占位</td>
                            <td>邓化宇</td>
                            <td>周三 2:00-3:00pm</td>
                            <td>临港B2楼A412室</td>
                        </tr>  
                        <tr>
                            {/* <td><img src="./images/people/charlie.jpg"></td> */}
                            <td>占位</td>
                            <td>李丽花</td>
                            <td>周三 2:00-3:00pm</td>
                            <td>临港B2楼A412室</td>
                        </tr>  
                        <tr>
                            {/* <td><img src="./images/people/charlie.jpg"></td> */}
                            <td>占位</td>
                            <td>蔡静静</td>
                            <td>周三 2:00-3:00pm</td>
                            <td>临港B2楼A412室</td>
                        </tr>                   
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Teachers;