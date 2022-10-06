import React from 'react'
import './Home.css'

const AboutUs = () => {
  return (
    <div className="background">
      <div className="">
        <div className='text-center mt-5'>
          <h1 className="text-light">Team Members</h1>
        </div>

        <div class="container">
          <div class="row my-5">
            <div class="col col-md-4">
              <div class="card py-2">
                <h2 class="card-body text-center">Aditya Gurnani</h2>
              </div>
            </div>

            <div class="col col-md-4">
              <div class="card py-2">
                <h2 class="card-body text-center">Divyanshu Garg</h2>
              </div>
            </div>

            <div class="col col-md-4">
              <div class="card py-2">
                <h2 class="card-body text-center">Faiza Khan</h2>
              </div>
            </div>
          </div>

          <div class="row my-5">
            <div class="col col-md-4">
              <div class="card py-2">
                <h2 class="card-body text-center">Sakthi B V</h2>
              </div>
            </div>

            <div class="col col-md-4">
              <div class="card py-2">
                <h2 class="card-body text-center">Shreyoshi Mukherjee</h2>
              </div>
            </div>

            <div class="col col-md-4">
              <div class="card py-2">
                <h2 class="card-body text-center">Soumyadeep Maji</h2>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AboutUs
