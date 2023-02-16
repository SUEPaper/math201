import React from "react";

import DHYImageUrl from '@site/static/img/dhy.jpg';
import XULIImageUrl from '@site/static/img/xuli.jpg';
import LLHImageUrl from '@site/static/img/llh.jpg';
import CJJImageUrl from '@site/static/img/cjj.jpg';


function Teachers(): JSX.Element {

    return (
        <div className="w-4/5 my-14 mx-auto">
            <h2 className="text-2xl font-bold">授课老师</h2>

            <div className="bg-white w-4/5 mx-auto mt-5 mb-1 rounded-lg shadow-2xl text-center">
                <table className="mx-1 my-7">
                    <thead>
                        <tr className="border-t-0 border-b-2">
                            <th className="border-0 bg-white w-64"></th>
                            <th className="border-0 bg-white w-64">名字</th>
                            <th className="border-0 bg-white w-64">Office Hours</th>
                            <th className="border-0 bg-white w-64">办公室</th>
                            <th className="border-0 bg-white w-64"> 邮箱</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-0">
                            <td className="border-0 bg-white"><img className="rounded-full max-w-20 max-h-20 object-cover" src={XULIImageUrl}/></td>
                            <td className="border-0 bg-white">徐丽</td>
                            <td className="border-0 bg-white">周三 2:00-3:00pm</td>
                            <td className="border-0 bg-white">临港B2楼A412室</td>
                            <td className="border-0 bg-white">xulimaths@163.com</td>
                        </tr>   
                        <tr className="border-0">
                            <td className="border-0 bg-white"><img className="rounded-full max-w-20 max-h-20 object-cover" src={DHYImageUrl}/></td>
                            <td className="border-0 bg-white">邓化宇</td>
                            <td className="border-0 bg-white">周三 2:00-3:00pm</td>
                            <td className="border-0 bg-white">临港B2楼A412室</td>
                            <td className="border-0 bg-white">hydeng@shiep.edu.cn</td>
                        </tr>  
                        <tr className="border-0">
                            <td className="border-0 bg-white"><img className="rounded-full max-w-20 max-h-20 object-cover" src={LLHImageUrl}/></td>
                            <td className="border-0 bg-white">李丽花</td>
                            <td className="border-0 bg-white">周三 2:00-3:00pm</td>
                            <td className="border-0 bg-white">临港B2楼A412室</td>
                            <td className="border-0 bg-white">llh@shiep.edu.cn</td>
                        </tr>  
                        <tr className="border-0">
                            <td className="border-0 bg-white"><img className="rounded-full max-w-20 max-h-20 object-cover" src={CJJImageUrl}/></td>
                            <td className="border-0 bg-white">蔡静静</td>
                            <td className="border-0 bg-white">周三 2:00-3:00pm</td>
                            <td className="border-0 bg-white">临港B2楼A412室</td>
                            <td className="border-0 bg-white">workshiep2012@sina.com</td>
                        </tr>                   
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Teachers;