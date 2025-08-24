function findTopDepartment(employees) {
    if (employees.size === 0) {
        return "Xodimlar ro'yxati bo'sh";
    }

    let departments = {
        HR: { total: 0, count: 0, employees: [] },
        IT: { total: 0, count: 0, employees: [] }
    };

    for (let emp of employees) {
        if (emp.department === "HR" || emp.department === "IT") {
            departments[emp.department].total += emp.salary;
            departments[emp.department].count++;
            departments[emp.department].employees.push(emp);
        }
    }

    let hrAvg;
    if (departments.HR.count) {
        hrAvg = departments.HR.total / departments.HR.count;
    } else {
        hrAvg = 0;
    }

    let itAvg;
    if (departments.IT.count) {
        itAvg = departments.IT.total / departments.IT.count;
    } else {
        itAvg = 0;
    }

    if (hrAvg > itAvg) {
        return { department: "HR", avgSalary: hrAvg, employees: departments.HR.employees };
    } else if (itAvg > hrAvg) {
        return { department: "IT", avgSalary: itAvg, employees: departments.IT.employees };
    } else {
        return "Har ikkala bo'limning o'rtacha maoshi teng";
    }
}

const employees = new Set([
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
]);

console.log(findTopDepartment(employees));
