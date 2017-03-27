import React, { Component } from 'react';

import Modal from '../modal/Modal.js'; /* modal for viewing imgs */

import '../../../../css/project.css'; /* project css */

	/* img size */
    var img = {
        width: 'auto',
        minHeight: 375,
        maxWidth: 350,
        maxHeight: 375,
        paddingTop: '1cm',
    };

    /* black font color */
    var blackFont = {

        color: '#000',
    };

/* displays project */
class ProjectView extends Component {
    constructor() {
        super();

        this.state = {
            modal: false
        };

        this.renderModal = this.renderModal.bind(this);
        this.modalToggle = this.modalToggle.bind(this);
    }

    /* toggles modal */
    modalToggle() {
        this.setState({
            modal: !this.state.modal
        });

    }

    /* redners modal */
    renderModal() {

    	/*checks if modal is open or closed*/
        return this.state.modal ? <Modal closeModal={this.modalToggle} imgs={this.props.project.imgs} /> : '';
    }

    render() {
        return(

			/* card view of project */
            <div className="container-fluid card shadow" style={blackFont}>
                <div className="row-fluid">
                    <div className="col-md-3">
                        <div className="row-fluid">
							
							{/* project img */}
                            <div className="col-md-12" style={{float: 'center'}}>
                                <img className="toggle-button" onClick={this.modalToggle} style={img} src={this.props.project.imgs[0].img} role="presentation"/>
                            </div>

                        	{/* render modal */}
                            {this.renderModal()}
                        
                        </div> {/* end row */}
                    </div> {/* end col */}

                    <div className="col-md-9">
                        <div className="row-fluid">
                            <div className="col-md-4">
                                <span>
                                    <h2>
										
										{/* project name */}
                                        {this.props.project.name}

                                    </h2>
                                </span>
                            </div> {/* end col */}
                            <div className="col-md-3" >

                            </div>
                            <div className="col-md-5">
                                <span style={{float: 'right'}}>
                                    <h2>

										{/* displays the duration of the project */}
                                        {this.props.project.duration}

                                    </h2>
                                </span>
                            </div> {/* end col */}
                            <hr />
                        </div> {/* end row */}

                        <div className="row-fluid">
                            <div className="col-md-3">
                            	<table>
                            		<tbody>

                            			{/* displays the projects job, team size, and enviroment */}
                                        {this.props.project.data.map((item) =>
                                            <tr key={item.id}>
                                                <td>
                                                    <h5>{item.title}</h5>
                                                </td>
                                                <td>
                                                    <h5>{item.name}</h5>
                                                </td>
                                            </tr>
                                        )} 

                                    </tbody>
                                </table> {/* end table */}
                            </div> {/* end col */}
                            
                            <div className="col-md-9">
                                <div className="row-fluid">

                                	{/* displays description of the project */}
                                    <div className="col-md-12">
                                        {this.props.project.description}
                                    </div>

                                </div>
                                <br />
                                <hr />
                                <div className="row-fluid">
                                    <div className="col-md-10">
                                        <ul>

											{/* displays your role in the project */}
                                            {this.props.project.role.map((item) =>
                                                <li key={item.id}>{item.work}</li>
                                            )}

                                        </ul>
                                    </div> {/* end col */}

                                    <div className="col-md-2">
                                
                                        {/* outputs button to github and/or url to project */}
                                        {this.props.project.link.map((item) =>
                                            <span key={item.id} style={{float: 'center', }}>
                                                <a href={item.url}><button type="button" className="btn btn-round color4">{item.name}</button></a>
                                                <span>   </span>
                                            </span>
                                        )}

                                    </div> {/* end col */}
                                </div> {/* end row */}
                            </div> {/* end col */}
                        </div> {/* end row */}
                        <div className="row-fluid">
                            <div className="col-md-12">
                            	<table>
                            		<tbody>
                            			<tr>
	                                        <td>
	                                            <h5>TECHNOLOGY: </h5>
	                                        </td>
                                        </tr>
                                        <tr>
                                        	<td>
												
												{/* displays all technology used in project */}
	                                            {this.props.project.technology.map((item) =>
	                                                <span key={item.id}>
	                                                    <button type="button" className="btn btn-round color4 disabled" style={{cursor: 'default'}}>{item.tech}</button>
	                                                    <span>  </span>
	                                                </span>
	                                            )} 

                                        	</td>
                                       	</tr>
                                    </tbody>
                                </table> {/* end table */}
                            </div> {/* end col */}
                        </div> {/* end row */}
                    </div> {/* end col */}
                </div> {/* end row */}
            </div> /* end container */
        );
    }
}


export default ProjectView;