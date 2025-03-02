import { useContext, useEffect } from "react";
import Carousel from "../../modules/Carousel/Carousel"
import { projectContext } from "../../context/ProjectsContext/ProjectsContext";

export default function Projects() {

    const { fetchProjectsAction, projects } = useContext(projectContext);

    useEffect(() => {
        fetchProjectsAction()
    }, [])

    return (
        <div className="flex flex-col">
            <Carousel array={projects} />
        </div>
    );
}