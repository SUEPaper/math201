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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>     
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

                        <p className="text-orange-500 font-bold">请在课程开始前仔细阅读<a href={useBaseUrl("/docs/labs/")}>Lab0预学习</a>的内容，并完成相应的作业。</p>
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