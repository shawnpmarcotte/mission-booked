import React from 'react'
import axios from 'axios'

const EventModal = props => {
  const token = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute('content')

  const csrfHeaders = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-Token': token
  }

  const handleAddFavorite = event => {
    const event_id = props.id
    event.preventDefault()
    axios
      .post('/favorites', { event_id }, { headers: csrfHeaders })
      .then(response => {
        console.log('favorite added')
      })
  }

  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-header-top">
              <h5 class="modal-title" id="exampleModalLabel">
                {props.date}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.closeModalToggle}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-header-mid">{props.name}</div>
            <div class="modal-header-bottom" onClick={handleAddFavorite}>
              Bookmark event
            </div>
          </div>
          <div class="modal-body">
            <div class="modal-col-1">{props.about}</div>
            <div class="modal-col-2">date, location, info</div>
          </div>
          <div>Stuff goes here!</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              onClick={props.closeModalToggle}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventModal
