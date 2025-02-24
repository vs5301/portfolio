import { useContext, useEffect } from 'react';
import profile from '../../../assets/Profile.jpg';
import { skillContext } from '../../context/SkillsContext/SkillsContext';
import { projectContext } from '../../context/ProjectsContext/ProjectsContext';
import { Link } from 'react-router-dom';

export default function Home() {

    const { fetchSkillsAction, skillsByCategory } = useContext(skillContext); 
    const { fetchProjectsAction, projects } = useContext(projectContext);

    useEffect(() => {
        const skillCategories = ["Web Development", "Android Development"]
        skillCategories.forEach(category => {
            fetchSkillsAction(category)
        });
        fetchProjectsAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
            <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-12 gap-1 h-screen">
                        <div className="col-span-6">
                            <div className="flex justify-center mt-16">
                                <div className="grid grid-row-1 gap-4 justify-center">
                                    <img src={profile} alt="Profile" className="h-64 w-64 row-span-1 rounded-full border-2 border-blue-500 dark:border-blue-400 justify-self-center" />
                                    <h1 className="row-span-1 text-2xl text-center font-mono">Vaibhav Sharma</h1>
                                    <h2 className="row-span-1 text-xl text-center font-mono">Full Stack Developer/Data Engineer</h2>
                                    <div className="flex justify-center flex-col">
                                        <h2 className="text-lg text-start ms-5 font-mono">Key Skills</h2>
                                        <ul className="text-center list-disc list-inside text-md font-serif">
                                            <li className="flex flex-col mt-4">
                                                <h3 className="text-md text-start ms-16 font-mono">Full Stack Development</h3>
                                                <ul className="text-start list-disc list-inside text-sm font-mono ms-16 mt-2">
                                                    {skillsByCategory["Web Development"]?.length > 0 ? (
                                                    skillsByCategory["Web Development"].map((skill) => <li key={skill.name} className=""><Link to={`/skill/${skill?.name}`} className="hover:underline hover:underline-offset-4 hover:text-red-500">{skill.name}</Link></li>)
                                                    ): (
                                                        <p>Loading...</p>
                                                    )}
                                                </ul>
                                            </li>
                                            <li className="flex flex-col">
                                                <h3 className="text-md text-center ms-16 mt-4 font-mono">Python Data Engineering & Automation</h3>
                                                <ul className="text-start list-disc list-inside text-sm font-mono ms-16 mt-2">
                                                    <li>Pandas</li>
                                                    <li>Openpyxl</li>
                                                    <li>Azure Cloud</li>
                                                </ul>
                                            </li>
                                            <li className="flex flex-col">
                                                <h3 className="text-md text-start ms-16 mt-4 font-mono">Mobile App Development</h3>
                                                <ul className="text-start list-disc list-inside text-sm font-mono ms-16 mt-2">
                                                    {skillsByCategory["Android Development"]?.length > 0 ? (
                                                    skillsByCategory["Android Development"].map((skill) => <li key={skill.name} className=""><Link to={`/skill/${skill?.name}`} className="hover:border-gray-700 hover:underline-offset-4 hover:underline hover:text-red-500">{skill.name}</Link></li>)
                                                ): (
                                                    <p>Loading...</p>
                                                )}
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="flex justify-center mt-20">
                                <div className="grid grid-row-4 gap-1 justify-center">
                                    <p className="text-lg font-mono row-span-1 p-5 border-2 rounded-xl border-blue-500 dark:border-blue-400">
                                        Hi! I'm Vaibhav, a computer science graduate passionate about full-stack development and data engineering and workflow automation. I'm skilled in technologies like React, NodeJS and Python and I'm always looking for new challenges. I'm excited to share my work with you on this website. I hope you'll take some time to explore my projects, learn more about my skills, and get in touch if you have opportunities for me.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-center mt-20 flex-col">
                                <h2 className="text-2xl font-mono text-start ms-6 p-2">Quick Links</h2>
                                <ul className="list-disc list-inside text-lg text-start">
                                    <li className="flex flex-col mt-2"> 
                                        <h3 className="font-mono text-lg ms-40">Experience</h3>
                                        <ul className="list-disc list-inside text-start">
                                            <li className='ms-48'><Link className='text-base font-mono hover:underline hover:underline-offset-4 hover:text-red-500' to="/">Azure Power India Pvt Ltd</Link></li>
                                            <li className='ms-48'><Link className='text-base font-mono hover:underline hover:underline-offset-4 hover:text-red-500' to="/">Auribises Technologies Pvt Ltd</Link></li>
                                        </ul>
                                    </li>
                                    <li className="flex flex-col mt-2"> 
                                        <h3 className="font-mono text-lg ms-40">Projects</h3>
                                        <ul className="text-start list-disc list-inside text-sm font-mono mt-2">
                                            {projects?.length > 0 ? (
                                                projects.map((project) => <li key={project.name} className='text-base font-mono text-start ms-48 '><Link to={`/project/${project?.name}`} className='text-base font-mono hover:underline hover:underline-offset-4 hover:text-red-500'>{project.name}</Link></li>)  
                                            ) : (
                                                <p>Loading...</p>
                                            )}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>   
        )
    }