import React from "react";

function TAs(): JSX.Element {

    return (
        <div className="w-3/5 my-14 mx-auto">
            <h2 className="text-2xl font-bold">助教</h2>

            <div className="bg-sky-400 w-4/5 mx-auto mt-5 mb-1 rounded-lg shadow-2xl">
            <table className="table-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>名字</th>
                            <th>邮箱</th>
                            <th>GitHub账号</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td><img src="./images/people/charlie.jpg"></td> */}
                            <td>占位</td>
                            <td>张辰星</td>
                            <td>chengxin.zhang@math201.com</td>
                            <td>github</td>
                        </tr>   
                        <tr>
                            {/* <td><img src="./images/people/charlie.jpg"></td> */}
                            <td>占位</td>
                            <td>董宇航</td>
                            <td>yuhang.dong@math201.com</td>
                            <td>github</td>
                        </tr>  
                        <tr>
                            {/* <td><img src="./images/people/charlie.jpg"></td> */}
                            <td>占位</td>
                            <td>朱志强</td>
                            <td>zhiqiang.zhu@math201.com</td>
                            <td>github</td>
                        </tr>                    
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default TAs;