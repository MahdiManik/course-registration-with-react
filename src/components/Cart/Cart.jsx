
import PropTypes from 'prop-types'

const Cart = ({ selectedCourse }) => {
  return (
    <>
      <div className='bg-white p-4 rounded-lg'>
        <h3 className='text-3xl font-semibold pb-4'>Cart: {selectedCourse.length}</h3>
        <hr />
        <h3 className='font-semibold text-lg mb-5 pl-2'>Course Name</h3>
        {
          selectedCourse.map((course, index) => (

            <>

              <div key={course.id} className='py-1 pl-2'>

                <ol>
                  <li className="text-md">{index + 1} {course.title}</li>
                </ol>
                <hr />
              </div>

            </>
          ))
        }
        <div className=''>
          <h4>Total Credit Hour : {selectedCourse.credit}</h4>
        </div>
      </div>
    </>
  )
}

Cart.propTypes = {
  selectedCourse: PropTypes.array.isRequired
}

export default Cart