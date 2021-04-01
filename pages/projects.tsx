import { Layout } from "../components/library/index"
import { ProjectsContent } from "../components/pages/index"

import ProjectData from "../content/projects.json"

export default function Projects() {
    return <Layout>
        <ProjectsContent projects={ProjectData} />
    </Layout>
}