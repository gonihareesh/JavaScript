function getGrade(marks){
    var grade;
    switch(true){
        case marks>=90:
            grade='A';
            break;
            case marks>=75:
            grade='B'
            break;
            case marks>=50:
            grade='c'
            break;
            case marks>=45:
            grade='d'
            break;
            default :
            grade='Fail';
    }
    return grade;
}
var studentMarks=46;
var studentGrade=getGrade(studentMarks);
console.log("Student Marks: ",studentMarks);
console.log("student grade: ",studentGrade)
