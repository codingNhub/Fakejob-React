import React, { useState } from 'react';
import './PredictJob.css'; // Ensure this CSS file is in the same directory
import axios from 'axios';

const SearchJob = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    salaryRange: '',
  });
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { jobTitle, jobDescription, salaryRange } = formData;

    if (!jobTitle && !jobDescription && !salaryRange) {
      alert('Please fill at least one field.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/searchjob', formData);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-2">
      {results ? (
        <div className="center">
          <h1>Search Results</h1>
          {results.map((result, index) => (
            <div key={index} className="result-item">
              <h2>{result.jobTitle}</h2>
              <p>{result.jobDescription}</p>
              <p>{result.salaryRange}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="center">
          <h1>Search Job</h1>
          <form id="Search" onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-md-6">
                <div className="txt_field">
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Job Title"
                  />
                </div>
              </div>
              <div className="form-group col-md-6">
                <div className="txt_field">
                  <input
                    type="text"
                    name="jobDescription"
                    value={formData.jobDescription}
                    onChange={handleChange}
                    placeholder="Job Description"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <div className="txt_field">
                  <input
                    type="text"
                    name="salaryRange"
                    value={formData.salaryRange}
                    onChange={handleChange}
                    placeholder="Salary Range"
                  />
                </div>
              </div>
            </div>
            <input
              type="submit"
              className="btn btn-primary btn-block mt-4 button"
              value="Search"
              disabled={loading}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchJob;
