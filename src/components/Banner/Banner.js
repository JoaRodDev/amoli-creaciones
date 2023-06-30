const Banner = () => {
  return (
    <div
      className='banner'
      id='home'>
      <img
        src={process.env.PUBLIC_URL + '/assets/images/background.svg'}
        alt='Waves'
        className='banner-waves'
      />
    </div>
  )
}

export default Banner
