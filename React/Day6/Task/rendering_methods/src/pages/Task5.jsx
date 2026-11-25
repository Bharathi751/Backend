import CourseDetails from "./CourseDetails";
import Footer from "./Footer";
import Header from "./Header";

const Task5 = () => {
  return (
    <>
      <div className="text-white p-4 bg-mist-600 flex  flex-col items-center justify-center h-100">
    <Header/>
    <CourseDetails/>
    <Footer/>
      </div>
    </>
  );
};

export default Task5;