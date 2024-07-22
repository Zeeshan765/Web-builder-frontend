import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createCopiedPage, createPage } from "./redux/actions/pageAction";

const Home = () => {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const [copiedData, setCopiedData] = useState({})
  const dispatch = useDispatch();

  const { pageStore } = useSelector((state) => state);
  const { pages } = pageStore;


  const handleChange = (e) => {
    const newValue = e.target.value;
    if (isUpdate) {

      setCopiedData((prev) => ({ ...prev, name: newValue }));

    }
    else {
      setName(newValue)
    }

  }

  const handleSubmit = async () => {
    // if (!name) {
    //   setIsValid(false);
    //   return;
    // }
    if (isUpdate) {
      createCopiedPage(copiedData)(dispatch)

    } else {
      createPage(name)(dispatch)
    }
    setName('')
    setCopiedData({})
    setIsUpdate(false)

  };


  const handlePage = (page) => {
    setIsUpdate(true);
    const { _id, name, ...rest } = page
    setCopiedData({
      _id,
      name
    })
  }




  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <form id="create-page">
            <div className="modal-header">
              <h5 className="modal-title" id="addPageModalLabel">
                Create Page
              </h5>
            </div>
            <div className="modal-body">
              <div className="col-auto">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control form-control-sm ${isValid ? "" : "is-invalid"
                    }`}
                  id="name"
                  name="name"
                  placeholder="Name of Page"
                  value={isUpdate ? copiedData?.name : name}
                  onChange={handleChange}
                />
                {!isValid && (
                  <div className="invalid-feedback">
                    Please provide a valid name.
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer my-3">
              <button
                type="button"
                className="btn btn-secondary btn-sm mx-1"
                data-bs-dismiss="modal"
              >
                Clear
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 my-2">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Slug</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {pages
                ? pages.map((page) => (
                  <tr key={page._id}>
                    <td>{page._id}</td>
                    <td>{page.name}</td>
                    <td>{page.slug}</td>
                    <td>
                      <Link to={`/editor/${page._id}`}>Edit</Link>
                      <button onClick={() => handlePage(page)} type="button" class="btn btn-outline-primary mx-4">Copy</button>
                    </td>
                  </tr>
                ))
                : "No Page"}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
