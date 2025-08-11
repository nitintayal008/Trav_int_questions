/*
You are a developer for a university. Your current project is to develop a system for students to find courses they share with friends. The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.
 
Write a function that takes in a collection of (student ID number, course name) pairs and returns, for every pair of students, a collection of all courses they share.
 
Sample Input:
 
enrollments1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
]

58, 94, 17, 25 
 
Sample Output (pseudocode, in any order):
 
find_pairs(enrollments1) =>
{
  "58,17": ["Software Design", "Linear Algebra"]
  "58,94": ["Economics"]
  "58,25": ["Economics"]
  "94,25": ["Economics"]
  "17,94": []
  "17,25": []
}
*/



function find_pairs(enrollments1){
  const studentCourses ={};
  for(const [key, value] of enrollments1){
    if(!(key in studentCourses)){
      studentCourses[key] = [];
    }
      studentCourses[key].push(value);
    }

    const studentIds = Object.keys(studentCourses);
    console.log("efd", studentIds);
    const result={};
    for(let i=0;i<studentIds.length; i++){
      for(let j=i+1; j<studentIds.length; j++){
        const id1 = studentIds[i];
        const id2 = studentIds[j];
        const pairKey = `${id1},${id2}`;
        const courses1 = studentCourses[id1];
        const courses2 = studentCourses[id2];
        const shared = [...courses1].filter(course => courses2.includes(course));
        result[pairKey] = shared;
      }
    }
  return result;
}

const enrollments1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
]
console.log(find_pairs(enrollments1));