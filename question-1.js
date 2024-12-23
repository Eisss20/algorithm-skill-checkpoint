
// Test case
const students = [
  { id: 302, name: "Emily Carter" },
  { id: 105, name: "Michael Johnson" },
  { id: 501, name: "Sarah Wilson" },
  { id: 207, name: "Daniel Brown" },
  { id: 403, name: "Sophia Martinez" },
];


function findStudentById(students, id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id ) {
      return students[i]; 
    }
  
  }
  return null
  }
  

/// 1. เลือกใช้ linear search
/// big O notiation =  O(n)
/// เพราะ ข้อมูลไม่มีการจัดเรียงข้อมูล และ ต้องตรวจสอบทุกค่า โดยการ วน loop เพื่อหาชื่อนักเรียน 



console.log(findStudentById(students, 302)); // Output: { id: 302, name: "Emily Carter" }
console.log(findStudentById(students, 4)); // Output: null
