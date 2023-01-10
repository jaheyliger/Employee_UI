import React, {useState} from 'react'
import EmployeeeService from '../services/EmployeeeService';

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: ""
    })

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    }
    const saveEmployee = (e) => {
        e.preventDefault()
        EmployeeeService.saveEmployee(employee);
    }

  return (
		<div className='flex max-w-2xl mx-auto shadow border-b'>
			<div className='p-8'>
				<div className='font-thin text-2xl tracking-wider'>
					<h1>Add New Employee</h1>
				</div>
				<div className='items-center my-4 justify-center h-14 w-full'>
					<label className='block text-sm font-normal text-gray-600'>
						First Name
					</label>
					<input
						onChange={(e) => {
							handleChange(e);
						}}
						name='firstName'
						value={employee.firstName}
						type='text'
						className='h-10 w-96 border mt-2 p-2'
					/>
				</div>
				<div className='items-center my-4 justify-center h-14 w-full'>
					<label className='block text-sm font-normal text-gray-600'>
						Last Name
					</label>
					<input
						onChange={(e) => {
							handleChange(e);
						}}
						name='lastName'
						value={employee.lastName}
						type='text'
						className='h-10 w-96 border mt-2 p-2'
					/>
				</div>
				<div className='items-center my-4 justify-center h-14 w-full'>
					<label className='block text-sm font-normal text-gray-600'>
						Email
					</label>
					<input
						onChange={(e) => {
							handleChange(e);
						}}
						name='emailId'
						value={employee.emailId}
						type='email'
						className='h-10 w-96 border mt-2 p-2'
					/>
				</div>
				<div className='items-center my-4 justify-center h-14 w-full space-x-4 pt-4'>
					<button
						onClick={(e) => {
							saveEmployee(e);
						}}
						className='rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700 transition-all'
					>
						Save
					</button>
					<button
						onClick={() =>
							setEmployee({
								id: '',
								firstName: '',
								lastName: '',
								emailId: ''
							})
						}
						className='rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700 transition-all'
					>
						Clear
					</button>
				</div>
			</div>
		</div>
	);
}

export default AddEmployee