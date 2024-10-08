import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
function TimKiem(props) {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({ name: "", description: "" });
    const[status,setStatus] = useState(true);

    useEffect(() => {
        fecthCategories();
    },[status]);


    const fecthCategories = async () => {
        try {
            const response = await axios.get("https://66fe256f69936930895735aa.mockapi.io/Categories");
            setCategories(response.data);
        } catch (error) {

        }
    }
    const addCatogory = async () => {
           await  axios.post(`https://66fe256f69936930895735aa.mockapi.io/Categories`,category);
           setStatus(!status);
    }
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className="col-3">
                    <h3 > List Categories </h3>
                </div>
                <div className="col-6">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                </div>
                <div className="col-3 text-end">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-category">
                        ADD CATEGORY
                    </button>
                </div>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td>
                                <button type="button" class="btn btn-primary me-2"><i class="fa-solid fa-pen-to-square"></i></button>
                                <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div class="modal fade" id="add-category" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Category</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name Category :</label>
                                <input type="text" class="form-control" onChange={(e) => setCategory({ ...category, name: e.target.value })} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Description :</label>
                                <textarea class="form-control" onChange={(e) => setCategory({ ...category, description: e.target.value })} rows="3"></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={addCatogory} class="btn btn-primary">ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimKiem;