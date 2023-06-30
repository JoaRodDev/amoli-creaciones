import DotLoader from 'react-spinners/BounceLoader'

function Spinner() {
  return (
    <div className='spinner'>
      <DotLoader
        color='#e0b872'
        size={100}
      />
    </div>
  )
}

export default Spinner
