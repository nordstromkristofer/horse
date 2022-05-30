import React from 'react'

const BackofficeCamera = () => {

  return (
    <div>
      <div id="pick-image">
        <h6>Pick an Image instead</h6>
        <input type="file" accept="image/*" id="image-picker" />
      </div>
    </div>
  )
}

export default BackofficeCamera

