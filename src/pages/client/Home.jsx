// import React, { useState } from 'react';

// function Home(props) {
//     const [todo, setTodo] = useState([]);
//     const [task, setTask] = useState("");
//     const [indexEdit, setIndexEdit] = useState(null);
//     const [taskEdit, setTaskEdit] = useState("");
//     const addTask = () => {
//         const newTask = {
//             task: task,
//             status: false
//         }
//         setTodo([...todo, newTask]);
//         setTask("");
//     }
    
//     const removeTask = (index) => {       
//         const oldTask = [...todo];
//         oldTask.splice(index, 1);
//         setTodo(oldTask);
//     }

//     const handleEdit = (value, index) => {
//               setIndexEdit(index);
//               setTaskEdit(value);
//     }
//     const updateTask = () => {
//         const oldTask = [...todo];
//         oldTask[indexEdit].task = taskEdit;
//         setTodo(oldTask);
//         setIndexEdit(null);
//     }
//     return (
//         <div>
//             <h1 className='text-center my-2'>To Do List </h1>
//             <div className='container'>
//                 <div class="d-flex">
//                     <input onChange={(e) => setTask(e.target.value)} value={task} class="form-control me-2" type="search" placeholder="Enter your task name..." aria-label="Search" />
//                     <button onClick={addTask} class="btn btn-outline-success text-nowrap" type="submit">Add Task</button>
//                 </div>

//                 {todo.map((element, index) => (
//                     <div className={`d-flex justify-content-between p-2 align-items-center rounded-3 mt-3 ${index == indexEdit ? "bg-black text-white" : " bg-info-subtle"}`}>
//                         <div>{index + 1}</div>
//                         {
//                             index == indexEdit ? ( <div>
//                                 <input type="text" value={taskEdit} onChange={(e) => setTaskEdit(e.target.value)} />
//                             </div>) : (  <div>{element.task}</div>)
//                         }
//                         <div>
//                             {
//                                 index == indexEdit ? (<>
//                                 <button type="button" onClick={updateTask} class="btn btn-success"><i class="fa-solid fa-circle-plus"></i></button>
//                                 <button type="button" onClick={() => setIndexEdit(null)} class="btn btn-info ms-2"><i class="fa-solid fa-xmark"></i></button>
//                                 </>) : (      
//                                     <button onClick={() => handleEdit(element.task,index)} type="button" class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>)
//                             }             
//                             <button onClick={() => removeTask(index)} type="button" class="btn btn-danger ms-2"><i class="fa-solid fa-trash-can"></i></button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Home;





// import React, { useState } from 'react';


// function DanhSachCongViec() {
//     const [congViec, setCongViec] = useState([]);
//     const [congViecMoi, setCongViecMoi] = useState("");
//     const [dangChinhSua, setDangChinhSua] = useState(null);
//     const [congViecChinhSua, setCongViecChinhSua] = useState("");

//     const themCongViec = () => {
//         if (congViecMoi.trim() === "") return;
//         setCongViec([...congViec, congViecMoi]);
//         setCongViecMoi("");
//     };

//     const xoaCongViec = (index) => {
//         const capNhatCongViec = [...congViec];
//         capNhatCongViec.splice(index, 1);
//         setCongViec(capNhatCongViec);
//     };

//     const batDauChinhSua = (index) => {
//         setDangChinhSua(index);
//         setCongViecChinhSua(congViec[index]);
//     };

//     const capNhatCongViec = () => {
//         const capNhatCongViec = [...congViec];
//         capNhatCongViec[dangChinhSua] = congViecChinhSua;
//         setCongViec(capNhatCongViec);
//         setDangChinhSua(null);
//         setCongViecChinhSua("");
//     };

//     return (
//         <div className="container mt-4">
//             <h1 className="text-center mb-4">Danh Sách Công Việc</h1>

//             <div className="input-group mb-3">
//                 <input
//                     value={congViecMoi}
//                     onChange={(e) => setCongViecMoi(e.target.value)}
//                     className="form-control"
//                     placeholder="Nhập công việc..."
//                 />
//                 <button onClick={themCongViec} className="btn btn-primary">Thêm Công Việc</button>
//             </div>

//             <ul className="list-group list-group-flush">
//                 {congViec.map((cv, index) => (
//                     <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
//                         {dangChinhSua === index ? (
//                             <>
//                                 <input
//                                     value={congViecChinhSua}
//                                     onChange={(e) => setCongViecChinhSua(e.target.value)}
//                                     className="form-control me-2"
//                                 />
//                                 <div>
//                                     <button onClick={capNhatCongViec} className="btn btn-success me-2">Lưu</button>
//                                     <button onClick={() => setDangChinhSua(null)} className="btn btn-secondary">Hủy</button>
//                                 </div>
//                             </>
//                         ) : (
//                             <>
//                                 {cv}
//                                 <div>
//                                     <button onClick={() => batDauChinhSua(index)} className="btn btn-primary me-2">Sửa</button>
//                                     <button onClick={() => xoaCongViec(index)} className="btn btn-danger">Xóa</button>
//                                 </div>
//                             </>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default DanhSachCongViec;



import React, { useState, useEffect  } from 'react';

import axios from 'axios';

function DanhSachCongViec() {
    const [congViec, setCongViec] = useState([]);
    const [congViecMoi, setCongViecMoi] = useState("");
    const [dangChinhSua, setDangChinhSua] = useState(null);
    const [congViecChinhSua, setCongViecChinhSua] = useState("");
    const [status, setStatus] = useState(true);

    // Gọi API để lấy danh sách công việc
    useEffect(() => {
        fetchCongViec();
    }, [status]);

    const fetchCongViec = async () => {
        try {
            const response = await axios.get('https://66fe256f69936930895735aa.mockapi.io/CongViec');
            setCongViec(response.data);
        } catch (error) {
            console.error("Lỗi ", error);
        }
    };

    
    const themCongViec = async () => {
        if (congViecMoi.trim() === "") return;
        try {
            await axios.post('https://66fe256f69936930895735aa.mockapi.io/CongViec', { name: congViecMoi });
            setStatus(!status); 
            setCongViecMoi(""); 
        } catch (error) {
            console.error("Lỗi ", error);
        }
    };

    // Cập nhật công việc qua API
    const capNhatCongViec = async (id) => {
        try {
            await axios.put(`https://66fe256f69936930895735aa.mockapi.io/CongViec/${id}`, { name: congViecChinhSua });
            setStatus(!status); 
            setDangChinhSua(null); 
            setCongViecChinhSua(""); // Xóa ô nhập
        } catch (error) {
            console.error("Lỗi ", error);
        }
    };

    // Xóa công việc qua API
    const xoaCongViec = async (id) => {
        try {
            await axios.delete(`https://66fe256f69936930895735aa.mockapi.io/CongViec/${id}`);
            setStatus(!status); 
        } catch (error) {
            console.error("Lỗi ", error);
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Danh Sách Công Việc</h1>

            <div className="input-group mb-3">
                <input
                    value={congViecMoi}
                    onChange={(e) => setCongViecMoi(e.target.value)}
                    className="form-control"
                    placeholder="Nhập công việc..."
                />
                <button onClick={themCongViec} className="btn btn-primary">Thêm Công Việc</button>
            </div>

            <ul className="list-group list-group-flush">
                {congViec.map((cv) => (
                    <li key={cv.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {dangChinhSua == cv.id ? (
                            <>
                                <input
                                    value={congViecChinhSua}
                                    onChange={(e) => setCongViecChinhSua(e.target.value)}
                                    className="form-control me-2"
                                />
                                <div>
                                    <button onClick={() => capNhatCongViec(cv.id)} className="btn btn-success me-2">Lưu</button>
                                    <button onClick={() => setDangChinhSua(null)} className="btn btn-secondary">Hủy</button>
                                </div>
                            </>
                        ) : (
                            <>
                                {cv.task}
                                <div>
                                    <button onClick={() => { setDangChinhSua(cv.id); setCongViecChinhSua(cv.name) }} className="btn btn-primary me-2">Sửa</button>
                                    <button onClick={() => xoaCongViec(cv.id)} className="btn btn-danger">Xóa</button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DanhSachCongViec;
