import { useContext, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { projectContext } from "../../context/ProjectsContext/ProjectsContext"

const Project = ( ) => {

    const { getProjectDetailsAction, project } = useContext(projectContext)
    const projectName = useParams()

    useEffect(() => {
        if (projectName.name) {
            getProjectDetailsAction(projectName.name)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projectName.name])

    return (
        <div>
            {project != null ? (
                <div className="flex h-screen items-center relative overflow-hidden justify-center">
                    <div className="bg-cover bg-center absolute inset-0 before:absolute before:inset-0 before:backdrop-blur-md" style={{backgroundImage: `url(${project.imageUrl})`}}></div>
                    <div className="m-10 p-4 max-h-fit max-w-5xl flex flex-col border-2 relative text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-gray-900 border-blue-500 dark:border-blue-400 rounded-2xl">
                        <h1 className="text-2xl text-center font-mono">{project.name}</h1>
                        <a href={project.link} className="text-xl mt-5 text-center font-mono text-red-600 dark:text-red-400 underline underline-offset-4">Link to project</a>
                        <h2 className="text-center text-xl mt-5 font-mono">{project.timeline}</h2>
                        <p className="text-lg m-5 font-mono">{project.description}</p>   
                        <h3 className="text-lg ms-5 mt-5 me-5 text-center font-mono">Skills Utilized</h3>
                        <ul>
                            {project.skills?.length > 0 ? (
                                    project.skills?.map((skill) => <li key={skill.name} className="text-base font-mono text-center m-3 text-red-600 dark:text-red-400 underline underline-offset-4"><Link to={`/skill/${skill.name}`}>{skill.name}</Link></li>)
                            ): (
                                <p className="text-center text-base font-mono">Working on getting skills...</p>    
                            )}    
                        </ul>
                    </div> 
                </div>
            ) : (
                <p className="text-center text-2xl font-mono">Loading...</p>
            )}
        </div>
    )
}

export default Project