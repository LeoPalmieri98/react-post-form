import { useState } from 'react'

function App() {
  const [datiBlog, setDatiBlog] = useState({
    authorName: "",
    titleName: "",
    bodyName: "",
    publishedName: false
  })

  function aggiornaDati(event) {
    const key = event.target.name;
    const value = event.target.value;
    const nuovoBlog = { ...datiBlog };
    nuovoBlog[key] = value;
    setDatiBlog(nuovoBlog);
  }

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
                  name="authorName"
                  value={datiBlog.authorName}
                  onChange={aggiornaDati}
                />
              </div>

              <div className="col-12 mt-5">
                <input
                  className="form-control"
                  placeholder="Title"
                  type="text"
                  name="titleName"
                  value={datiBlog.titleName}
                  onChange={aggiornaDati}
                />
              </div>

              <div className="mt-5">
                <textarea
                  className="form-control"
                  placeholder="Scrivi qui il tuo post!"
                  type="text"
                  name="bodyName"
                  value={datiBlog.bodyName}
                  onChange={aggiornaDati}
                />
              </div>

              <div className="col-12 mt-5 d-flex align-items-center">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  name="publishedName"
                  checked={datiBlog.publishedName}
                  onChange={aggiornaDati}
                />
                <label>Pubblica il post</label>

                <button className="btn btn-primary ms-4">Invia</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>

  )
}
export default App
