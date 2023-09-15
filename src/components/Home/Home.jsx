import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';


const Home = () => {

  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [remaining, setTotalRemaining] = useState(0);
  const [totalCost, setTotalCost] = useState(0)


  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  const showExistToast = () => {
    toast.error('Sorry! This item is already in your shopping cart', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
  const showOverToast = () => {
    toast.error('Sorry! This is already 20 in your cart', {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  const handleSelectCourse = course => {
    let count = course.credit;

    const isExist = selectedCourse.find(item => item.id === course.id);

    if (isExist) {

      showExistToast();
      return (
        <div>
          <ToastContainer />
        </div >
      );
    }

    else {
      selectedCourse.forEach(element => (
        count = count + element.credit

      ))
    }

    let totalRemaining = 20 - count;
    if (count > 20) {
      totalRemaining = count;

      showOverToast();

      return <div>
        <ToastContainer />
      </div>
    }

    else {

      setTotalCost(count)
      setTotalRemaining(totalRemaining)

      setSelectedCourse([...selectedCourse, course]);
    }

  }

  return (

    <div className='bg-gray-200'>
      <h3 className='text-3xl font-semibold text-center pt-10'>Course Registration: {courses.length}</h3>
      <div className="flex items-start justify-center mt-4 gap-4 pb-12 ">
        <div className='w-4/6'>
          <div className='grid grid-cols-3 gap-6'>
            {courses.map(course => (

              <div key={course.id} className=' bg-white gap-6 flex flex-col justify-start p-4 items-center  rounded-lg mt-12'>
                <div className='block'>
                  <img className='block rounded-md' src={course.image} alt="" />
                </div>
                <h3 className='block text-2xl font-semibold'>{course.title}</h3>
                <p className='block'>{course.description}</p>
                <div className='my-auto'>
                  <div className='flex gap-8 pb-4'>
                    <p>Price: ${course.course_price}</p>
                    <p>Credit: {course.credit}</p>
                  </div>

                  <button onClick={() => handleSelectCourse(course)} className='px-6 py-2 text-white bg-blue-600 w-full rounded-lg'>Select</button>
                  <ToastContainer />
                </div>
              </div>
            ))
            }
          </div>

        </div>
        <div className='w-1/4 mt-12'>

          <Cart
            key={courses.id}
            remaining={remaining}
            totalCost={totalCost}
            selectedCourse={selectedCourse}
          ></Cart>


        </div>
      </div>

    </div>

  );
};

Home.propTypes = {
  Home: PropTypes.func
}

export default Home


