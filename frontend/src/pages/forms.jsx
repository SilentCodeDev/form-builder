import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Forms = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    axios
      .get("/api/forms/")
      .then((response) => {
        setForms(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <h1>Forms</h1>
      <table className="table table-stripped">
        <thead>
          <tr>
            <td>ID</td>
            <td>Form Name</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {forms.length > 0 ? (
            forms.map((form) => (
              <tr key={form.id}>
                <td>{form.id}</td>
                <td>{form.name}</td>
                <td>
                  <Link
                    to={`/forms/${form.id}/details`}
                    className="btn btn-info mx-1"
                  >
                    View
                  </Link>
                  <Link
                    to={`/forms/${form.id}/edit`}
                    className="btn btn-primary mx-1"
                  >
                    View
                  </Link>
                  <button className="btn btn-danger mx-1">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Forms;
