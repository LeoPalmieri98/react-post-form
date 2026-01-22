import { useState } from 'react'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <div className="container">
        <div className="row">
          <form>
            <div className="row ">


              <div>
                <h1>Blog</h1>

              </div>



              <div className="col-12 mt-5">
                <input
                  className="form-control"
                  placeholder="Autore"
                  type="text"
                  name="author"
                  value=""
                  onChange=""
                />
              </div>

              <div className="col-12 mt-5">
                <input
                  className="form-control"
                  placeholder="Title"
                  type="text"
                  name="title"
                  value=""
                  onChange=""
                />
              </div>

              <div className="mt-5">
                <textarea
                  className="form-control"
                  placeholder="Scrivi qui il tuo post!"
                  type="text"
                  name="body"
                  value=""
                  onChange=""
                />
              </div>

              <div className="col-12 mt-3 d-flex align-items-center">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  name="published"
                  checked=""
                  onChange=""
                />
                <label>Pubblica il post</label>
              </div>



            </div>
          </form>
        </div>
      </div>
    </div>

  )
}
export default App
