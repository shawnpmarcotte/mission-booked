import React from "react";
import axios from "axios";

const EventModal = props => {
  const token = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute('content')


  const csrfHeaders = {
    "X-Requested-With": "XMLHttpRequest",
    "X-CSRF-Token": token
  };

  const takeToLogin = event => {
    event.preventDefault();
    axios.get("/users/sign_in");
  };
  const handleAddFavorite = event => {
    const event_id = props.id
    event.preventDefault()

    axios
      .post('/favorites', { event_id }, { headers: csrfHeaders })
      .then(response => {

        console.log("favorite added");
      });
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-header-top">
              <h5 className="modal-title" id="exampleModalLabel">
                {props.date}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.closeModalToggle}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-header-mid">{props.name}</div>
            {parseInt(localStorage.getItem("userId")) > 0 ? (
              <div className="modal-header-bottom" onClick={handleAddFavorite}>
                Bookmark event
              </div>
            ) : (
              <div className="modal-header-bottom" onClick={takeToLogin}>
                Login to bookmark event
              </div>
            )}
          </div>
          <div className="modal-body">
            <div className="modal-col-1">{props.about}</div>
            <div className="modal-col-2">date, location, info</div>
          </div>
          <div>Stuff goes here!</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={props.closeModalToggle}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
