import './style/style.css'

const Content = () => {
  return (
    <div className='container content'>
      <div className="pic">
        <img src='https://media.licdn.com/dms/image/D4D03AQFqtKFZy8h_ug/profile-displayphoto-shrink_400_400/0/1694700071635?e=1706140800&v=beta&t=m1g8WRcZfomASsmA13FJVAwcXupcte9kQzRyS7h-Dz8' alt="my picture" />
      </div>
      <div className="title">
        <h1>
          Hey <br/>
          My name is Gregory <br/>
          I'm a FullStack Developer <br/>
        </h1>
      </div>
    </div>
  )
}

export default Content