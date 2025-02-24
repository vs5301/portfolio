import profile from '../../../assets/Profile.jpg'

export default function Resume() {
    return (
        <div>
            <div className="container flex flex-col max-w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div className="flex flex-row ms-72 mt-10 font-mono">
                            <div className="flex flex-col">
                                <h1>Vaibhav Sharma</h1>
                                <h1>Ludhiana - 141012, Punjab</h1>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex">
                                    <a className='ms-48 text-red-500 dark:text-red-400 hover:underline hover:underline-offset-4' href="https://github.com/vs5301">Github</a>
                                    <a className='ms-5 text-red-500 dark:text-red-400 hover:underline hover:underline-offset-4' href="https://www.linkedin.com/in/vaibhav-sharma-07357727a">Linkedin</a>
                                </div>
                                <div className="flex">
                                    <h1 className='ms-48'>Portfolio - </h1>
                                    <a className="ms-2 text-red-500 dark:text-red-400 hover:underline hover:underline-offset-4" href="https://portfolio-ui-e7e5b.web.app/">Link</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ms-72 mt-5 font-mono">
                            <h1>Date of Birth - 05/03/2001</h1>
                        </div>
                        <div className="flex flex-col ms-72 mt-5 font-mono">
                            <h1>Phone - +918725020818 | Mail - vaibhav.sharma5301@gmail.com</h1>
                        </div>
                        <div className="flex flex-col ms-72 mt-5 font-mono max-w-2xl">
                            <p>Objective -  Seeking opportunities to enhance and explore my knowledge and skills through 
                            dedicated work and learning. Possess excellent communication skills and attention to detail. 
                            Flexible to work in any environment as required. </p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-10 ms-10">
                        <img src={profile} alt="" className="w-56 h-56 rounded-md border-2 border-blue-500 dark:border-blue-400" />
                    </div>
                </div>
                <div className="flex flex-col ms-72 font-mono mt-5">
                    <h1>Work Experience -</h1>
                    <div className="ms-10 mt-5">
                        <h1>Apprentice, 05/24 - Present     --      Azure Power India Pvt Ltd, Gurugram, Haryana</h1>
                        <ul className="list-inside list-disc me-60">
                            <li className='ms-10 mt-2'>Developing data engineering solutions using dedicated Python libraries and packages like Pandas 
                                and Cloud services to automate workflows and implement data analysis algorithms. Worked on 
                                establishing client to server communication for field devices to facilitate data migration for stake 
                                holders.</li>
                            <li className='ms-10 mt-2'>
                                Working as a full stack developer to develop comprehensive, user-friendly full stack software 
                                solutions. Responsible for digitising inter-enterprise workflows using latest Android and web 
                                application development tools.
                            </li>
                        </ul>
                    </div>
                    <div className="ms-10 mt-5 me-60">
                        <h1 className="">Campus Intern, 01-23 - 06/23    --      Auribises Technologies Pvt Ltd, Ludhiana, Punjab</h1>
                        <ul className="list-inside list-disc">
                            <li className='mt-2 ms-10'>
                                Worked under the guidance of senior developers to design and implement responsive web 
                                applications using AngularJS, Bootstrap 5 and Google Firebase cloud operations.
                            </li>
                            <li className="mt-2 ms-10">
                                Implemented user authentication and authorization functionalities to enhance application security.
                            </li>
                        </ul>
                    </div>
                    <div className="mt-5 me-60">
                        <h1>Education - </h1>
                        <ul className="list-inside list-disc ms-20 mt-2">
                            <li>B. Tech Computer Science – Vellore Institute of Technology, Amravati  
                                2019 – 2024 – Amravati/Andhra Pradesh </li>
                        </ul>
                    </div>
                    <div className="mt-5">
                        <h1>Technical Skills - </h1>
                        <ul className="list-inside list-disc ms-20">
                            <li className='mt-2'>Web Development: React, ExpressJS, Angular, NodeJS, MongoDB, Google Firebase</li>
                            <li>Mobile App Development: Kotlin, Flutter, Android Studio</li>
                            <li>Programming Languages: JavaScript, Python, Java-Core, Dart </li>
                        </ul>
                    </div>
                    <div className="mt-5 me-60">
                        <h1>Projects Undertaken - </h1>
                        <ul className="list-inside list-disc ms-20">
                            <li className='mt-2'>Income Expenses Tracker - <a className='text-red-500 dark:text-red-400 hover:underline hover:underline-offset-4' href="https://income-expenses-tracker-client.onrender.com/">Link</a> - <a className='text-red-500 dark:text-red-400 hover:underline hover:underline-offset-4' href="https://github.com/vs5301/MERN-Stack/tree/master/income-expenses-tracker">GitHub</a> <br />
                                Web application to record finances across multiple accounts. Implements user authentication using 
                                MongoDB. Server-side API handles various account and transaction actions. </li>
                            <li>
                                ChatApp - <a className='text-red-500 dark:text-red-400 hover:underline hover:underline-offset-4' href="https://github.com/vs5301/ChatApp/releases/download/Version1/app-release.apk">Link</a> - <a className='text-red-500 dark:text-red-400 hover:underline hover:underline-offset-4' href="https://github.com/vs5301/ChatApp">GitHub</a><br /> 
                                Android application to chat in real-time with users. Uses Google Firebase to authenticate users and facilitate 
                                chat functionality using Firebase database.
                            </li>
                        </ul>
                    </div>
                    <div className="mt-5">
                        <h1>Certifications - </h1>
                        <ul className="list-inside list-disc ms-20">
                            <li className='mt-2'>Android App Development – October, 2023 <a className='text-red-500 dark:text-red-400 hover:underline hover:underline-offset-4' href="https://trainings.internshala.com/view_certificate/EC9355EC-8C66-8D10-9CC1-32AB15FD8D01/39hzijbgkl5/">(Link)</a></li>
                            <li>Full Stack Web Development MERN Stack – January, 2024 <a className='text-red-500 dark:text-red-400 hover:underline hover:underline-offset-4' href="https://www.udemy.com/certificate/UC-5dc3aebf-bad4-4590-a195-825369dca640/">(Link)</a> </li>
                        </ul>
                    </div>
                    <h1 className='mt-3'>Android Club Member (07/2019 - 03/2020)</h1>
                    <p> - Worked in club workshops to learn and develop android application skills.</p>
                </div>
                <div className="flex justify-center mt-10 mb-20">
                    <button className='bg-blue-500 dark:bg-blue-400 w-48 text-3xl p-2 animate-bounce rounded-3xl'>Download</button>    
                </div>
                
            </div>
        </div>
    )
}