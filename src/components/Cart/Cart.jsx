
import PropTypes from 'prop-types'

const Cart = ({ selectedCourse, remaining, totalCost }) => {
  return (
    <>
      <div className='bg-white p-4 rounded-lg'>
        <h3 className='text-lg font-semibold text-blue-700 pb-4'>Credit Hour Remaining: {remaining} hr</h3>
        <hr />
        <h3 className='font-semibold text-lg mb-5 pl-2'>Course Name</h3>
        {
          selectedCourse.map((course, index) => (

            <div key={course.id} className='py-1 pl-2'>
              <li className="text-md">{index + 1} {course.title}</li>
            </div>

          ))
        }
        <div className='pt-6'>
          <hr />
          <h3 className='text-lg font-semibold pb-4'>Total Credit Hour: {totalCost} hr</h3>
        </div>
      </div>
    </>
  )
}

Cart.propTypes = {
  selectedCourse: PropTypes.array.isRequired,
  remaining: PropTypes.number,
  totalCost: PropTypes.number
}

export default Cart