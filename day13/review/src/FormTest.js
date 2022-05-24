import React from 'react'

export default function formTest() {
    const [formData, setFormData] = React.useState({
        firstName: "as",
        lastName: "ew",
        email: "rt",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    })

    console.log(formData);
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData( prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value = {formData.firstName}
        />
        <input 
        type="text" 
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value = {formData.lastName}
        />
        <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value = {formData.email}
        />
        <textarea
        value={formData.comments}
        placeholder="Commnets"
        onChange={handleChange}
        name="comments"
        />
        <input
        type="checkbox"
        id='isFriendly'
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
        />
        <label htmlFor='isFriendly'>Are you friendly?</label>
        <br />
        <br />

        <fieldset>
            <legend>Current employment status</legend>
            <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            onChange={handleChange}
            />
            <label htmlFor="unemployed">Part-time</label>
            <br />
            <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            checked={formData.employment === "part-time"}
            onChange={handleChange}
            />
            <label htmlFor="part-time">Part-time</label>
            <br />
            <input
            type="radio"
            id="pull-time"
            name="employment"
            value="pull-time"
            checked={formData.employment === "pull-time"}
            onChange={handleChange}
            />
            <label htmlFor="pull-time">Part-time</label>
        </fieldset>

        <label htmlFor='favColor'> What is your favorite color?</label>
        <br/>
        <select
         id="favColor"
         value={formData.favColor}
         onChange={handleChange}
         name="favColor"
         >
            <option value="">--Choose--</option>
            <option value="red">Red</option>
            <option value="orange">orange</option>
            <option value="yellow">yellow</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="indigo">indigo</option>
            <option value="violet">violet</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
    </form>
  )
};
