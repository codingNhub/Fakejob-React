import React, { useState } from 'react';
import './PredictJob.css'; // Ensure this CSS file is in the same directory

const PredictJob = () => {
  const [formData, setFormData] = useState({
    job_id: 5,
    Title: '',
    location: '',
    department: '',
    salary_range: '',
    company_name: '',
    description: '',
    requirenment: '',
    benefits: '',
    telecommunication: 0,
    has_company: 0,
    has_question: 0,
    employment: '',
    required_experience: '',
    required_equcation: '',
    industry: '',
    Function: '',
    question: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? (checked ? 1 : 0) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Job prediction successful', result);
        alert('Job prediction successful');
        if(result.prediction[0]===1)
        {
          console.log("the job is fake");
        } else
        {
          console.log("the job is real");
        }
        // Reset form or navigate to another page if needed
      } else {
        const errorData = await response.json();
        console.error('Job prediction failed', errorData);
        alert('Failed to predict job');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error: ' + error.message);
    }
  };

  return (
    <div className="container-2">
      <div className="center">
        <h1>Predict Job</h1>
        <form id="PredictJobForm" onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-md-6">
              <div className="txt_field">
                <input
                  type="text"
                  name="Title"
                  value={formData.Title}
                  onChange={handleChange}
                  placeholder="Job Title"
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-6">
              <div className="txt_field">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Location"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <div className="txt_field">
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="Department"
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-6">
              <div className="txt_field">
                <input
                  type="text"
                  name="salary_range"
                  value={formData.salary_range}
                  onChange={handleChange}
                  placeholder="Salary Range"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <div className="txt_field">
                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  placeholder="Company Name"
                  required
                />
              </div>
            </div>
            <div className="form-group col-md6">
              <div className="txt_field">
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <div className="txt_field">
                <input
                  type="text"
                  name="requirenment"
                  value={formData.requirenment}
                  onChange={handleChange}
                  placeholder="requirenments"
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-6">
              <div className="txt_field">
                <input
                  type="text"
                  name="benefits"
                  value={formData.benefits}
                  onChange={handleChange}
                  placeholder="Benefits"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <div className="txt_field">
                <input
                  type="text"
                  name="employment"
                  value={formData.employment}
                  onChange={handleChange}
                  placeholder="Employment"
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-6">
              <div className="txt_field">
                <input
                  type="number"
                  name="required_experience"
                  value={formData.required_experience}
                  onChange={handleChange}
                  placeholder="Required Experience"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <div className="txt_field">
                <input
                  type="text"
                  name="required_equcation"
                  value={formData.required_equcation}
                  onChange={handleChange}
                  placeholder="Required Education"
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-6">
              <div className="txt_field">
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder="Industry"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-12">
              <div className="txt_field">
                <input
                  type="text"
                  name="Function"
                  value={formData.Function}
                  onChange={handleChange}
                  placeholder="Function"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <div className="checkbox_field">
                <label>
                  <input
                    type="checkbox"
                    name="telecommunication"
                    checked={formData.telecommunication === 1}
                    onChange={handleChange}
                  />
                  Telecommunication
                </label>
              </div>
            </div>
            <div className="form-group col-md-4">
              <div className="checkbox_field">
                <label>
                  <input
                    type="checkbox"
                    name="has_company"
                    checked={formData.has_company === 1}
                    onChange={handleChange}
                  />
                  Has Company
                </label>
              </div>
            </div>
            <div className="form-group col-md-4">
              <div className="checkbox_field">
                <label>
                  <input
                    type="checkbox"
                    name="has_question"
                    checked={formData.has_question === 1}
                    onChange={handleChange}
                  />
                  Has Question
                </label>
              </div>
            </div>
          </div>
          {formData.has_question === 1 && (
            <div className="row">
              <div className="form-group col-md-12">
                <div className="txt_field">
                  <input
                    type="text"
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    placeholder="Enter your question"
                    required
                  />
                </div>
              </div>
            </div>
          )}
          <input type="submit" className="btn btn-primary btn-block mt-4 button" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default PredictJob;