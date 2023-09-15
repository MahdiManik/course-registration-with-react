
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {

  const [courses, setCourses] = useState([]);

  const [selectedCourse, setSelectedCourse] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])


  const handleSelectCourse = course => {
    setSelectedCourse([...selectedCourse, course]);
  }

  return (

    <div className='bg-gray-200'>
      <h3 className='text-3xl font-semibold text-center pt-10'>Course Registration: {courses.length}</h3>
      <div className="flex items-start justify-center mt-4 gap-4">
        <div className='w-4/6'>
          <div className='grid grid-cols-3 gap-6'>
            {courses.map(course => (
              <div key={course.id} className=' bg-white gap-3  space-y-2  flex flex-col justify-start p-4 items-center  rounded-lg mt-12'>
                <div className=''>
                  <img className=' rounded-md' src={course.image} alt="" />
                </div>
                <h3 className='text-2xl font-semibold'>{course.title}</h3>
                <p>{course.description}</p>
                <div className='flex gap-8'>
                  <p>Price: ${course.course_price}</p>
                  <p>Credit: {course.credit}</p>
                </div>

                <button onClick={() => handleSelectCourse(course)} className='px-6 py-2 text-white bg-blue-600 w-full rounded-lg'>Select</button>
              </div>
            ))
            }
          </div>

        </div>
        <div className='w-1/4 mt-12'>

            <Cart 
            key={courses.title}
            selectedCourse={selectedCourse}
            ></Cart>
  

        </div>
      </div>

    </div>

  );
};


Home.propTypes = {
  homes: PropTypes.array
}

export default Home


