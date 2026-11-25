const CourseDetails = () => {


  const course = { 
    name: "Full Stack MERN", 
    trainer: "React JS Trainer", 
    duration: "6 Months",
    fees: 40000  
}
    return (
        <>
            <div  className="flex justify-center items-center flex-col  ">

                <h2>Course Details</h2>

                <p>Course: {course.name}</p>
                <p>Trainer: {course.trainer}</p>
                <p>Duration: {course.duration}</p>
                <p>Fees: ₹{course.fees}</p>
            </div>
        </>
    );
};

export default CourseDetails;