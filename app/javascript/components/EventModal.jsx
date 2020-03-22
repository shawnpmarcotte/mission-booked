import React, { useState, useEffect } from 'react'
import axios from 'axios'
import bookmark from '../../assets/images/bookmark'

const EventModal = props => {
  const [added, setAdded] = useState(false)
  const token = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute('content')

  const csrfHeaders = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-Token': token
  }

  const takeToLogin = event => {
    event.preventDefault()
    axios.get('/users/sign_in')
  }
  const handleAddFavorite = event => {
    const event_id = props.id
    event.preventDefault()

    axios
      .post('/favorites', { event_id }, { headers: csrfHeaders })
      .then(response => {
        console.log('favorite added')
        setAdded(true)
      })
  }

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-backdrop="static"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-header-top">
              <h5 className="modal-title" id="exampleModalLabel">
                {props.name}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={(props.closeModalToggle, () => setAdded(false))}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-header-mid">
              <div className="modal_main_photo">
                <img src={props.mainphoto} className="resized-photo" />
              </div>
              <div className="modal_body_photos">
                <div className="modal_photo_1">
                  <img src={props.photo1} className="resized-photo" />
                </div>
                <div className="modal_photo_2">
                  <img src={props.photo2} className="resized-photo" />
                </div>
                <div className="modal_photo_3">
                  <img src={props.photo3} className="resized-photo" />
                </div>
              </div>
            </div>
            {props.user_id ? (
              <button
                type="button"
                aria-label="Add to Favorites"
                onClick={handleAddFavorite}
              >
                Add to Favorites
              </button>
            ) : (
              <a href="/users/sign_in">
                <button type="button" aria-label="Sign In / UP">
                  Log in or Sign Up to bookmark events!
                </button>
              </a>
            )}
          </div>
          <div className="modal-body">
            <div className="modal-col-1">
              {props.about}
              {props.facebook}
            </div>
            <div className="modal-col-2">
              {props.displaydate}
              {props.moreinfo}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={(props.closeModalToggle, () => setAdded(false))}
            >
              Close
            </button>
            {added ? (
              <p> This event has been added to your favorites!</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventModal
