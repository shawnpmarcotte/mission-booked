import React from 'react'

const EventModal = (props) => {
  return(
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{props.name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={props.closeModalToggle}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          {props.about}
      </div>
      <div>
        Stuff goes here!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={props.closeModalToggle}>Close</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default EventModal
