import React from 'react'

function Reviews() {
  return (
    <div>
         <div className='p-4 border rounded my-1'>
       <div className="row border p-4 my-2">
  <div className="col-1">
    <img
      src="https://www.svgrepo.com/show/350417/user-circle.svg"
      alt="Profile"
      className="rounded-circle"
      height={'70px'}
      width={'70px'}
    />
  </div>
  <div className="col-9 ">
    <h5>Username</h5>
    <h6>Book Title</h6>
    <p>Author</p>
    <p style={{ textAlign: "justify" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor optio delectus deserunt? Amet maiores illo magni saepe alias eveniet ullam accusantium necessitatibus architecto non reprehenderit, porro repellendus obcaecati esse.
    Nisi, quasi odit dolorum itaque esse minus! Soluta, hic dolorem. Velit illo ex dolorum debitis quia eveniet dicta blanditiis quis ipsam nisi totam, qui ducimus, eaque nobis expedita ut dolores!
    Tempore, at libero molestias quibusdam necessitatibus minus ipsum, doloribus amet cupiditate tempora suscipit pariatur aspernatur magnam, ipsam voluptatibus exercitationem reiciendis cumque numquam natus! Reprehenderit officiis dolorum modi voluptates quasi! Velit.
    Perspiciatis, adipisci! Animi, nulla odio. Obcaecati eligendi, delectus voluptatibus quae voluptatem doloribus vitae temporibus cupiditate ipsum. Soluta itaque sint ad nisi, dignissimos fugiat hic consectetur, sed, quisquam accusantium possimus atque.</p>
  </div>
  <div className="col-2 d-flex flex-column align-items-stretch mt-5">
  <button className="btn btn-success mb-2 w-100" style={{ height: "50px" }}>
    APPROVE
  </button>
  <button className="btn btn-danger mb-2 w-100" style={{ height: "50px" }}>
    DELETE
  </button>
  <button className="btn btn-dark w-100" style={{ height: "50px" }}>
    EDIT
  </button>
</div>

</div>

    </div>
    </div>
  )
}

export default Reviews