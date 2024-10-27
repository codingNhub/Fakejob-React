import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewFilter.css';
import post from '../Assets/post.jpg'
import search from '../Assets/search.jpg';
import predict from '../Assets/predict.jpg';

const NewFilter = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    }

    return (
        <div className="filter-container">
            <h2>Job Filter Options</h2>
            <div className="filter-options">
                <div className="filter-option" onClick={() => navigateTo('/PostJob')}>
                    <img src={post} alt="Post a Job" />
                    <div className="overlay">
                        <h3>Post a Job</h3>
                        <p>Description for posting a job.</p>
                    </div>
                </div>
                <div className="filter-option" onClick={() => navigateTo('/PredictJob')}>
                    <img src={predict} alt="Predict a Job" />
                    <div className="overlay">
                        <h3>Predict a Job</h3>
                        <p>Description for predicting a job.</p>
                    </div>
                </div>
                <div className="filter-option" onClick={() => navigateTo('/SearchJob')}>
                    <img src={search} alt="Search a Job" />
                    <div className="overlay">
                        <h3>Search a Job</h3>
                        <p>Description for searching a job.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewFilter;
