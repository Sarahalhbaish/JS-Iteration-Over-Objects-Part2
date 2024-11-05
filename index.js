const students = [
    {
      "id": 1,
      "name": "Alice",
      "courses": ["Math", "Science", "History"]
    },
    {
      "id": 2,
      "name": "Bob",
      "courses": ["History", "English", "Math", "Art"]
    },
    {
      "id": 3,
      "name": "Charlie",
      "courses": ["Science", "English", "Music"]
    },
    {
      "id": 4,
      "name": "David",
      "courses": ["Math", "History", "Art", "PE"]
    },
    {
      "id": 5,
      "name": "Eva",
      "courses": ["Science", "Math", "Music"]
    },
    {
      "id": 6,
      "name": "Frank",
      "courses": ["English", "Art"]
    },
    {
      "id": 7,
      "name": "Grace",
      "courses": ["Math", "Science", "English", "Music"]
    },
    {
      "id": 8,
      "name": "Helen",
      "courses": ["History", "Art", "PE"]
    },
    {
      "id": 9,
      "name": "Ivy",
      "courses": ["Science", "English", "Art"]
    },
    {
      "id": 10,
      "name": "Jack",
      "courses": ["Math", "History", "Music"]
    }
  ]


/* *********************************************************************************** */
   

/* ----------------- Q.1 ----------------- */
const getStudentName = (student) => {
    return student.name;
}
// console.log(getStudentName(students[0]));


/* ----------------- Q.2 ----------------- */
function getCourse(student, courseIndex) {
    return student.courses[courseIndex];
  }
//   console.log(getCourse(students[4], 2)); 


/* ----------------- Q.3 ----------------- */
function addCourseToStudent(student, course) {
    student.courses.push(course);
    return student;
  }
//   console.log(addCourseToStudent(students[7], "Physics"));


/* ----------------- Q.4 ----------------- */
function countCourses(student) {
    return student.courses.length;
}
//   console.log(countCourses(students[1]));


/* ----------------- Q.5 ----------------- */
function listAllCourses(student) {
    const array = [];
    student.forEach(num => {
        num.courses.forEach(element => {
            if (!(array.includes(element)))
                array.push(element);
        });
    });
    return array;
  }
//   console.log(listAllCourses(students));


/* ----------------- Q.6 ----------------- */
function removeCourseFromStudent(student, course) {
    const index = student.courses.findIndex(num => num === course);
    student.courses.splice(index,1);
    return student;
  }
//   console.log(removeCourseFromStudent(students[6],"Science"));


/* ----------------- Q.7 ----------------- */
function findStudentById(studentId, students) {
    const index = students.findIndex(num => num.id === studentId)
    return students[index];
  }
  
//   console.log(findStudentById(10,students));
  

/* ----------------- Q.8 ----------------- */
function getStudentsByCourse(course, students) {
    return students.filter(student => student.courses.includes(course));
  }
  console.log(getStudentsByCourse("Music",students));