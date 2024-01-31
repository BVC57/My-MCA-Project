import React from 'react'

const Rform = () => {
  return (
    <div>
        <>
            <form>
                <div className='heading'>
                    <h1>Please Register First</h1>
                </div>
                <div className='input-field'>
                    <label>First Name:</label>
                    <input type='text' name='fname' placeholder='enter first name'/>
                    <label>Last Name:</label>
                    <input type='text' name='lname' placeholder='enter last name'/>
                </div>
                <div className='input-field'>
                <label>Email Id:</label>
                    <input type='text' name='email' placeholder='enter Email'/>
                 <label>Password:</label>
                    <input type='password' name='pass' placeholder='enter Password'/>
                </div>
                    <input type='submit' name='Register' value='Register'/>
            </form>
        
        </>
    </div>
  )
}

export default Rform