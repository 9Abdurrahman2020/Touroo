import React from 'react';
import { useForm } from 'react-hook-form';
import './addNewTrip.css'
const AddNewTrip = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://rahmanassignment11.herokuapp.com/addTrip', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('Successfully added a new trip !');
                    reset();
                }
            })
    }
    return (
        <div className="add-trip-container container">
            <h1 className="text-center mt-4 text-success">Add a <span className="text-warning">New Trip</span></h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <b>Title:</b>
                <input {...register("title")} required />
                <b>Promo:</b>
                <input {...register("promo")} required/>
                <b>Description:</b>
                <input {...register("des")} required/>
                <b>Trip Date:</b>
                <input type="date" {...register("date")} required/>
                <b>Duration (day):</b>
                <input type="number" {...register("duration")} required/>
                <b>Expanse(Tk):</b>
                <input type="number" {...register("expanse")} required/>
                <b>Image (url):</b>
                <input {...register("img")} required/>
                <input className="btn btn-primary mt-3" type="submit" value="Add The Trip" />
            </form>
        </div>
    );
};

export default AddNewTrip;