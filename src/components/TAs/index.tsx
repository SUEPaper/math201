import React from "react";

import ZCXImageUrl from '@site/static/img/zcx.jpg';
import HeadImageUrl from '@site/static/img/head.jpg';


function TAs(): JSX.Element {

    return (
        <div className="w-4/5 my-14 mx-auto">
            <h2 className="text-2xl font-bold">助教</h2>

            <div className="bg-white w-4/5 mx-auto mt-5 mb-1 rounded-lg shadow-2xl text-center">
                <table className="mx-7 my-7">
                    <thead>
                        <tr className="border-t-0 border-b-2">
                            <th className="border-0 bg-white w-64"></th>
                            <th className="border-0 bg-white w-32">名字</th>
                            <th className="border-0 bg-white w-64">邮箱</th>
                            <th className="border-0 bg-white w-64">GitHub账号</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-0">
                            <td className="border-0 bg-white"><img className="rounded-full w-32 h-32 object-cover" src={HeadImageUrl}/></td>
                            <td className="border-0 bg-white">朱志强</td>
                            <td className="border-0 bg-white">zhiqiang.zhu@math201.com</td>
                            <td className="border-0 bg-white"><a href="https://github.com/dushangdonglou">dushangdonglou</a></td>
                        </tr>  
                        <tr className="border-0"> 
                            <td className="border-0 bg-white"><img className="rounded-full w-32 h-32 object-cover" src={ZCXImageUrl}/></td>
                            <td className="border-0 bg-white">张辰星</td>
                            <td className="border-0 bg-white">2049314799@qq.com</td>
                            <td className="border-0 bg-white"><a href="https://github.com/zcxxxxxxx">zcxxxxxxx</a></td>
                        </tr>   
                        <tr className="border-0">
                            <td className="border-0 bg-white"><img className="rounded-full w-32 h-32 object-cover" src={HeadImageUrl}/></td>
                            <td className="border-0 bg-white">董宇航</td>
                            <td className="border-0 bg-white">yuhang.dong@math201.com</td>
                            <td className="border-0 bg-white"><a href="https://github.com/ryggh">ryggh</a></td>
                        </tr>  
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default TAs;