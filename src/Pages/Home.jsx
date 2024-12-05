import React from 'react'
import Reviews from '../Components/Reviews'

function Home() {
  return (
    <div>
      <div className="row p-5 " style={{marginLeft:'140px'}}>
        <div className="col-2 border rounded shadow p-2 m-4">
          <h4>Total Reviews</h4>
          <p>3</p>
        </div>
        <div className="col-2 border rounded shadow p-2 m-4">
        <h4>Approved Reviews</h4>
        <p>2</p>
        </div>
        <div className="col-2 border rounded shadow p-2 m-4">
        <h4>Rejected Reviews</h4>
        <p>1</p>
        </div>
        <div className="col-2 border rounded shadow p-2 m-4">
        <h4>Edited Reviews</h4>
        <p>0</p>
        </div>
      </div>
      <div>
      <Reviews/>
      </div>
      <div>
      <Reviews/>
      </div>
      <div>
      <Reviews/>
      </div>
    </div>
  )
}

export default Home