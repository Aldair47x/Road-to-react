export const GifItem = ({url, title}) => {
  return (
    <>
        <div className="card">
            <img src={url} alt="newGif" />
            <p>{title}</p>
        </div>
    </>
  )
}
