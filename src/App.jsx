import "./styles.css"

function App() {
  const hobbies = ["Football", "Coding", "Japanese", "Ballet"]
  const faveBands = ["Cranberries", "Rolling Stones", "Pink Floyd", "One Direction"]
  const faveLanguages = ["Python", "React.js", "CSS", "Ruby"]

  return (
    <>
      <h1 className="user-name">
        Kaan Buke
      </h1>

      <div className="hobby-section">
        <h2 className="hobby-title">Hobbies</h2>
        <ul>
          {hobbies.map((hobby, index) => {
            return(
              <li className={`hobby-list hobby-list${index + 1}`} key={index}>
                {hobby}
              </li>
            )
          })}
        </ul>
      </div>

      <div className="band-section">
        <h2>Favourite Bands</h2>
        <ol>
          {faveBands.map((band, index) => {
            return(
              <li key={index} className={`band-list band-list${index+1}`}>
                {band}
              </li>
            )
          })}
        </ol>
      </div>

      <div className="language-section">
          <h2 className="language-title">Favourite Languages</h2>
          <ul>
            {faveLanguages.map((language, index) => {
              return(
                <li key={index} className={`language-list language-list${index+1}`}>
                  {language}
                </li>
              )
            })}
          </ul>
      </div>
    </>
  )
}

export default App
