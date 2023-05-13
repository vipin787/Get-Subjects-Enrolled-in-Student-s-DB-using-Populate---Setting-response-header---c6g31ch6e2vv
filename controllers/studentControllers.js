const { Student, Subject } = require('../models/Model');

const getAllStudents = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;

        const students = await Student.find()
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const count = await Student.countDocuments(Student.find());
        res.status(200).json({
            status: "success",
            data: {
                count,
                students,
            },
        });
    } catch (err) {
        res.status(404).json({
            message: "Students Not Found",
            status: "Error",
            error: err,
        });
    }
};
/*
You need to write a controller function that adds a subject to a student in the database. The function should take a roll number and a subject code in the request body and use them to find the corresponding student and subject objects from the database using findOne method.
If the student or subject object is not found, the function should return an error message with a 404 status code. If the student is already enrolled in the subject, the function should return an error message with a 409 status code.
If the student is not enrolled in the subject, the function should add the subject to the student's list of subjects and save the updated student object to the database. Finally, the function should return a success message in the response.
If there is any other error while fetching or updating data from the database, the function should return an error message with a 400 status code.
The sample input and output for the controller function are as follows:
Sample Input:
{
"roll": "1001",
"subjectCode": "MATH101"
}

Sample Output:
{
"message": "Subject added to student successfully"
}
*/
const addSubjectToStudent = async (req, res) => {
    const { roll, subjectCode } = req.body;

    try {
        //Write your Code Here
        res.status(200).json({ message: 'Subject added to student successfully' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Unable to Fetch Data' });
    }
}

/*
You need to write a controller function that fetches all the subjects of a student from the database. The function should take a roll number in the request body and use it to find the corresponding student object from the database using findOne method.

If the student object is not found, the function should return an error message with a 404 status code. If the student is found, the function should populate the student's subjects field using the populate method.

Finally, the function should return the list of subjects of the student in the response along with a success message. If there is any other error while fetching data from the database, the function should return an error message with a 400 status code.

The sample input and output for the controller function are as follows:

Sample Input:
{
    "roll": "1001"
}

Sample Output:
{
"subjects": [
    {
    "_id": "615d1bdcf1c7dc621d693cd4",
    "subjectCode": "MATH101",
    "name": "Mathematics",
    "__v": 0
    },
    {
    "_id": "615d1c8bf1c7dc621d693cd5",
    "subjectCode": "PHY101",
    "name": "Physics",
    "__v": 0
    }
]
}
*/

const getStudentSubjects = async (req, res) => {
    const { roll } = req.body;
    try {
        //Write your Code Here
        res.status(200).json({ subjects: student.subjects });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Unable to Fetch Data' });
    }
}


module.exports = { getAllStudents, addSubjectToStudent, getStudentSubjects };

