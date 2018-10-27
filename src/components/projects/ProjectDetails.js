import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorem, quidem, pariatur asperiores similique accusamus temporibus eligendi ea quas a aperiam rerum eum quaerat obcaecati est? Quisquam voluptatem mollitia dolorum.</p>
                </div>
            </div>
            <div className="card-action gret lighten-4 grey-text">
                <div>Posted by the net ninja</div>
                <div>2nd September, 2am</div>
            </div>
        </div>
    )
}
export default ProjectDetails