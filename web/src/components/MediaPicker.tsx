'use client'

import { ChangeEvent, Fragment, useState } from 'react'

export const MediaPicker = () => {
  const [preview, setPreview] = useState<{
    type: string | null
    url: string | null
  }>({
    type: null,
    url: null,
  })

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) return

    const file = files[0]

    const [fileType] = file.type.split('/')

    const previewURL = URL.createObjectURL(file)

    setPreview({
      type: fileType,
      url: previewURL,
    })
  }

  return (
    <Fragment>
      <input
        onChange={onFileSelected}
        type="file"
        id="media"
        name="coverUrl"
        accept="image/*,video/*"
        className="invisible h-0 w-0"
      />

      {preview.url &&
        preview.type &&
        {
          image: (
            // eslint-disable-next-line
            <img
              src={preview.url}
              alt=""
              className="aspect-video w-full rounded-lg object-cover"
            />
          ),
          video: (
            <video
              src={preview.url}
              className="aspect-video w-full rounded-lg object-cover"
              controls
            />
          ),
        }[preview.type]}
    </Fragment>
  )
}
