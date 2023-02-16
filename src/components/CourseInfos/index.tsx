import React from "react";

import { faLocationDot, faClock, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useBaseUrl from '@docusaurus/useBaseUrl';



function CourseInfos(): JSX.Element {

    return (
        <div className="w-4/5 my-14 mx-auto">
            <h2 className="text-2xl font-bold">课程信息</h2>

            <div className="bg-white w-4/5 mx-auto mt-5 mb-1 rounded-lg shadow-2xl">

                <div className="float-left">
                    <div className="my-5 ml-14">
                        <FontAwesomeIcon icon={faFileLines} />      
                        <span className="text-xl ml-2 font-bold">简介</span>
                    </div>

                    <div className="indent-9 text-left mt-1 mx-5 font-normal text-lg">
                        <p>
                            《数值计算方法训练》是一门信息与计算科学专业的专业实践课程。课程内容包括Python程序设计、
                            基于Python实现数值分析中所学计算方法，实验大作业，报告撰写及答辩汇报。
                        </p>
                        <p>
                            通过《数值计算方法训练》课程的学习，可以使学生得到数学建模、程序设计、
                            分析数值结果、写实验报告等环节的综合训练，加深对课堂所学计算方法的理解，
                            培养学生具备应用计算机技术解决工程科学计算问题的能力，
                            在计算数学领域具备信息获取、自主学习、沟通协作能力和批判性思维，
                            具有良好的科学精神、严谨的工作作风和社会责任感。
                        </p>

                        <p className="text-orange-500 font-bold">请在课程开始仔细阅读<a href={useBaseUrl("/docs/labs/")}>Lab0预学习</a>的内容，并完成相应的作业。</p>
                    </div>
                </div>
                <div className="mt-5 ml-14">
                    <FontAwesomeIcon icon={faClock} /> 
                    <span className="text-xl ml-2 font-bold">时间：</span> 
                    <p className="inline-block">周二下午1:20 ～ 晚上 8:25</p>
                </div>

                <div className="my-5 ml-14">
                    <FontAwesomeIcon icon={faLocationDot} /> 
                    <span className="text-xl ml-3 font-bold">地点：</span>
                    <p className="inline-block">临港一教408第四机房</p>
                </div>
            </div>
        </div>
    )

}

export default CourseInfos;