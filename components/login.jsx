const Login = (props) => {
    function submit(fromData){
        const data =Object.fromEntries(fromData)
        const login=fromData.getAll("Login")
        const allData={...data,login}
        console.log(allData)
    }
  return (
    <div className='flex items-center justify-center bg-gradient-to-r
     h-screen  font-rubic  from-pink-400 to-orange-300'>
      <form action={submit} >
        <div  className='bg-white rounded-md shadow-2xl  w-96 mt-10'>
            <h1 className='text-5xl text-gray-600 text-center pt-6 '>{props.show?"Login":"Signup"}</h1>
                <p className='my-2  text-center'>{props.show?"New here ?" : "already have account ?"} <button onClick={props.change}
                className='text-orange-500'>{props.show?"signup":"signin"}</button></p>
            {props.show&&<div className='text-center mt-2'>
                <label className=' text-lg' htmlFor="username">Username</label>
                <br />
                <input name="Login" type="text" className='outline-none border-2 border-gray-600 rounded-lg p-2
                focus:text-orange-600  ml-2' />
            </div>}
            <div className='text-center mt-6'>
                <label className=' text-lg' htmlFor="username">Email</label>
                <br />
                <input name="Login" type="email" className='border-2 border-gray-600 rounded-lg p-2
                 focus:text-orange-600  ml-2' />
            </div>
            <div className='text-center mt-6 pb-10'>
                <label className=' text-lg' htmlFor="username">Password</label>
                <br />
                <input name="Login" type="password" className=' 
                border-2  focus:text-orange-600 border-gray-600 rounded-lg p-2
                ml-2' />
            </div>
            <div className=' flex justify-evenly '>
               
                <button className="mb-4 w-20 rounded-md text-white
                 bg-gray-600 hover:scale-110 duration-500">{props.show?"Login":"Signup"}</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Login
