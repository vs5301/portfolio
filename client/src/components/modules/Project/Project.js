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
    }, [])

    return (
        <div>
            {project != null ? (
                <div className="flex justify-center">
                    <div className="m-10 p-4 max-w-5xl flex flex-col border-2 border-gray-500 rounded-xl">
                        <h1 className="text-2xl text-center font-mono">{project.name}</h1>
                        <a href={project.link} className="text-xl mt-5 text-center font-mono hover:text-blue-600 underline underline-offset-4">Link to project</a>
                        <h2 className="text-center text-xl mt-5 font-mono">{project.timeline}</h2>
                        <p className="text-lg m-5 font-mono">{project.description}</p>   
                        <h3 className="text-lg ms-5 mt-5 me-5 text-center font-mono">Skills Utilized</h3>
                        <ul>
                            {project.skills?.length > 0 ? (
                                    project.skills?.map((skill) => <li key={skill.name} className="text-base font-mono text-center m-3 hover:text-blue-600 underline underline-offset-4"><Link to={`/skill/${skill.name}`}>{skill.name}</Link></li>)
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