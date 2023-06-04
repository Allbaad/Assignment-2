const fs = require('fs');

class Data 
{
  constructor(students, courses) //defining the constructor method for the Data class. It takes two parameters students and courses.
  {
    this.students = students; //assigning the value of the students parameter to the students property of the Data class instance.
    this.courses = courses;  // assigning the value of the courses parameter to the courses property of the Data class instance.
  }
}

let dataCollection = null; //declareing a variable named dataCollection and assigns it the initial value of null as per given in the question.

// Reading student and course data from files and initializing dataCollection
function initialize() 
{
  return new Promise(function(resolve, reject) 
  {
    fs.readFile('./data/students.json', 'utf8', function(err, studentDataFromFile) 
    {
      if (err) 
      {
        reject('Unable to read students.json');
        return;
      }

      fs.readFile('./data/courses.json', 'utf8', function(err, courseDataFromFile) 
      {
        if (err) 
        {
          reject('Unable to read courses.json');
          return;
        }

        const studentData = JSON.parse(studentDataFromFile);
        const courseData = JSON.parse(courseDataFromFile);

        dataCollection = new Data(studentData, courseData);

        resolve();
      }
      );
    }
    );
  }
  );
}

// Getting all students
function getAllStudents() 
{
  return new Promise(function(resolve, reject) 
  {
    if (dataCollection && Array.isArray(dataCollection.students) && dataCollection.students.length > 0) 
    {
      resolve(dataCollection.students);
    } 
    else 
    {
      reject('No students found');
    }
  }
  );
}

// Getting teaching assistants (students with TA property set to true)
function getTAs() 
{
  return new Promise(function(resolve, reject) 
  {
    if (dataCollection && Array.isArray(dataCollection.students)) 
    {
      const tas = dataCollection.students.filter(function(student) 
      {
        return student.TA === true;
      }
      );
      resolve(tas);
    } 
    else 
    {
      reject('No students found');
    }
  }
  );
}

// Getting all courses
function getCourses() 
{
  return new Promise(function(resolve, reject) 
  {
    if (dataCollection && Array.isArray(dataCollection.courses) && dataCollection.courses.length > 0) 
    {
      resolve(dataCollection.courses);
    } 
    else 
    {
      reject('No courses found');
    }
  }
  );
}

module.exports = {
  initialize, // Initializing dataCollection with data for student and course
  getAllStudents, // Retrieving all students
  getTAs, // Retrieving teaching assistants
  getCourses, // Retrieving all courses
};


