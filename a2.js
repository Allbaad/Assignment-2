/***********************************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Nikhil Kumar   Student ID: 124632225   Date: June 03,2023
*
************************************************************************************************/ 

let collegeData = require('./modules/collegeData');

collegeData.initialize()
  .then(function() 
  {
    collegeData.getAllStudents()
      .then(function(students) 
      {
        console.log(`Successfully retrieved ${students.length} students`);
      }
      )
      .catch(function(error) 
      {
        console.error(error);
      }
      );

    collegeData.getCourses()
      .then(function(courses) 
      {
        console.log(`Successfully retrieved ${courses.length} courses`);
      }
      )
      .catch(function(error) 
      {
        console.error(error);
      }
      );

    collegeData.getTAs()
      .then(function(tas) 
      {
        console.log(`Successfully retrieved ${tas.length} TAs`);
      }
      )
      .catch(function(error) 
      {
        console.error(error);
      }
      );
  }
  )
  .catch(function(error) 
  {
    console.error(error);
  }
  );

