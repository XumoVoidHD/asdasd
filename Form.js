import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        aadhar: '',
        jobRole: '',
        address: '',
        city: '',
        pincode: '',
        date: '',
        file: null,
    });

    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const validate = () => {
        const err = {};
        if (!formData.name) err.name = "Name is required";
        if (!formData.email) err.email = "Email is required";
        if (!/^\d{12}$/.test(formData.aadhar)) err.aadhar = "Aadhar must be 12 digits";
        if (!/^\d{6}$/.test(formData.pincode)) err.pincode = "Pincode must be 6 digits";
        return err;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setSubmittedData(formData);
        }
    };

    return (
        <div>
            <h2>Job Application Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input name="name" value={formData.name} onChange={handleChange} />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

                <label>Email:</label>
                <input name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

                <label
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Aadhar:
                </label>
                <input
                    name="aadhar"
                    value={formData.aadhar}
                    onChange={handleChange}
                    style={{ backgroundColor: isHovered ? '#e0f7fa' : 'white' }}
                />
                {errors.aadhar && <p style={{ color: 'red' }}>{errors.aadhar}</p>}

                <label>Job Role:</label>
                <select name="jobRole" value={formData.jobRole} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Manager">Manager</option>
                </select>

                <label>Address:</label>
                <textarea name="address" value={formData.address} onChange={handleChange} />

                <label>City:</label>
                <input name="city" value={formData.city} onChange={handleChange} />

                <label>Pincode:</label>
                <input name="pincode" value={formData.pincode} onChange={handleChange} />
                {errors.pincode && <p style={{ color: 'red' }}>{errors.pincode}</p>}

                <label>Date:</label>
                <input name="date" type="date" value={formData.date} onChange={handleChange} />

                <label>Upload Your CV:</label>
                <input name="file" type="file" onChange={handleChange} />

                <button type="submit">Apply Now</button>
            </form>

            {submittedData && (
                <div>
                    <h3>Submitted Data:</h3>
                    <pre>{JSON.stringify(submittedData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default Form;
