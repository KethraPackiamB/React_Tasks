const ArrayOps = () => {

    const numbers = [10, 20, 30, 40, 50];
    
    const students = [
        {id : "1", name : "Kethra"}, 
        {id : "2", name : "Packiam"}, 
        {id : "3", name : "Gabriel"}];
 console.log(students.length);

        // for...of

    const displayNumbers = () => {
        for(const number of numbers){
            console.log(number);
        }
    }
    displayNumbers();

    const displayStudentData = () => {
        for (const student of students){
            console.log(`student_Name : ${student.name} - ${student.id}`);
        }
    }
    displayStudentData();

    const display = () => {
        for (const key of students){
            console.log(key, students[key]);
        }
    }
    display();


    //for...in

    const studentDetails = () => {
        for (const key in students){
            console.log(key, students[key]);
        }
    }

    studentDetails();

    const colors = ["Red", "Green", "Orange"];

    for (const index in colors){
        console.log(index, colors[index]);
    }


    const users = [
        {id : 1, name : "Kethra"},
        {id : 2, name : "Packiam"},
    ];

    let data = [];
    for (const user of users){
        data.push(
            <p key={user.id}>{user.name}</p>
        )
    }
    console.log(data);

    const fruits = ["Apple", "Mango", "Orange", "Apple", "Orange", "Mango", "Mango", "Apple"];

    const count = {};

    for (const fruit of fruits){
        if(count[fruit]){
            count[fruit]++;
        }else{
            count[fruit] = 1;
        }
    }
    for (const key in count){
        console.log(`${key} : ${count[key]}`);
    }

   

   

    return(
        <div>
            <h1>Array Operations</h1>
           {numbers.map((n,index)=> <p key={index}>{n}</p>)}
     
     
        </div>
    )
}
export default ArrayOps;