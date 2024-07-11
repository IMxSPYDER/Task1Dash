import React from 'react'
import DropboxChooser from 'react-dropbox-chooser'

function DropBox() {
  return (
    <div>
      <DropboxChooser
        appKey={'your-uniq-app-key'}
        success={files => this.onSuccess(files)}
        cancel={() => this.onCancel()}
        multiselect={true}
        extensions={['.mp4']} >
        <div className="dropbox-button">Click me!</div>        
    </DropboxChooser>
    </div>
  )
}

export default DropBox

