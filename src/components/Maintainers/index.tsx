import React from "react";

import HeadImageUrl from '@site/static/img/head.jpg';

function Maintainers(): JSX.Element {

    return (
        <div className="w-4/5 my-14 mx-auto">
            <h2 className="text-2xl font-bold">课程维护</h2>

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
                            <td className="border-0 bg-white">章海文</td>
                            <td className="border-0 bg-white">haiwensummer@gmail.com</td>
                            <td className="border-0 bg-white"><a href="https://github.com/HaiwenZhang">HaiwenZhang</a></td>
                        </tr>   
                        <tr className="border-0">
                            <td className="border-0 bg-white"><img className="rounded-full w-32 h-32 object-cover" src={HeadImageUrl}/></td>
                            <td className="border-0 bg-white">李卉元</td>
                            <td className="border-0 bg-white">1472927952@qq.com</td>
                            <td className="border-0 bg-white"><a href="https://github.com/huiyuan-li">lihuiyuan</a></td>
                        </tr>  
                        <tr className="border-0">
                            <td className="border-0 bg-white"><img className="rounded-full w-32 h-32 object-cover" src={HeadImageUrl}/></td>
                            <td className="border-0 bg-white">徐驰</td>
                            <td className="border-0 bg-white">chi.xu@math201.com</td>
                            <td className="border-0 bg-white"><a href="https://github.com/XxC-904">XxC-904</a></td>
                        </tr>  
                        <tr className="border-0">
                            <td className="border-0 bg-white"><img className="rounded-full w-32 h-32 object-cover" src={HeadImageUrl}/></td>
                            <td className="border-0 bg-white">赵俊棋</td>
                            <td className="border-0 bg-white">junqi.zhao@math201.com</td>
                            <td className="border-0 bg-white"><a href="https://github.com/Thejunqi">Thejunqi</a></td>
                        </tr>                     
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Maintainers;