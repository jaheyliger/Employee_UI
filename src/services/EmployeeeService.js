import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://127.0.0.1:8080/api/v1/employees';

class EmployeeService {
	saveEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee).then((res) => {
            console.info(res)
        }).catch((error) => {
            console.error(error)
        })
	}
}

export default new EmployeeService();
