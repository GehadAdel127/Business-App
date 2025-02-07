import React from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Components/Comments';
import HelloImage from '../Components/HelloImage';
import ProjectLinks from '../Components/ProjectLinks';
import image1 from '../Images/personal_gift-1.jpg';
import image4 from '../Images/portfolio10-1.jpg';
import image6 from '../Images/portfolio2-1.jpg';
import image5 from '../Images/portfolio3-1.jpg';
import image8 from '../Images/portfolio6-1-600x727.jpg';
import image3 from '../Images/portfolio7-1.jpg';
import image7 from '../Images/portfolio9-1.jpg';
import image2 from '../Images/tick_tock-1-1.jpg';
import './ProjectPage.css';


const ProjectPage = () => {
    const projectDetails = {
        1: { img: image1, title: "Personal gift", description: "Brand Design, Photography" },
        2: { img: image2, title: "Tik Tok", description: "3D Design, Brand Design" },
        3: { img: image3, title: "Chair Design", description: "3D Design, Photography" },
        4: { img: image4, title: "Infinity Brand", description: "Brand Design, Catalog" },
        5: { img: image5, title: "Personal gift", description: "Brand Design, Photography" },
        6: { img: image6, title: "Project Stamp", description: "Brand Design" },
        7: { img: image7, title: "Shilf Of Arts", description: "3D Design, Photography" },
        8: { img: image8, title: "Shilf Of Arts", description: "3D Design, Photography" },
    };
    const { id } = useParams();
    const project = projectDetails[Number(id)];

    if (!project) return <div>Project not found</div>;

    return (
        <div className='projectPage'>
            <HelloImage text={project.title} />
            <div className="projectPageContent">
                <div className="top">
                    <div className="right">
                        <img src={project.img} alt={project.title} />
                    </div>
                    <div className="left">
                        <p>Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.
                            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                            Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et,
                            porttitor at sem donec sollicitudin. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                            Donec sollicitudin molestie malesuada.
                        </p>
                        <div className="info">
                            <div className="detail">
                                <h5>Client</h5>
                                <p>Austin</p>
                            </div>
                            <div className="detail">
                                <h5>Created by</h5>
                                <p>Company</p>
                            </div>
                            <div className="detail">
                                <h5>Completed</h5>
                                <p>27 April 2020</p>
                            </div>
                            <div className="detail">
                                <h5>Skills</h5>
                                <p>HTML / WordPress</p>
                            </div>
                            <div className="detail">
                                <h5>Website</h5>
                                <p>www.yoursite.com</p>
                            </div>
                        </div>
                        <div className="btn">
                            <button>Live Preview</button>
                        </div>
                    </div>
                </div>
                <ProjectLinks/>
                <Comments/>
            </div>
        </div>
    );
};

export default ProjectPage;
