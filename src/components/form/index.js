import React from 'react'

const TwitterForm = () => (
  <div class="row">
    <div class="col-md-10 col-md-offset-2">
      <h4>Translate a Tweet</h4>
      <br></br>
      <form class="form-horizontal">
        <div class="form-group">
          <label for="twitterLink">Twitter Link</label>
          <input
            type="text"
            class="form-control form-control-lg"
            id="twitterUrl"
            aria-describedby="help"
            placeholder="Enter Twitter Link"
          ></input>
          <small id="inputHelp" class="form-text text-muted">
            Enter a Twitter link.
            Example:https://twitter.com/some-handle/status/123
          </small>
          <br></br>
          <button type="submit" class="btn btn-primary">
            Translate
          </button>
        </div>
      </form>
    </div>
  </div>
)

export default TwitterForm
