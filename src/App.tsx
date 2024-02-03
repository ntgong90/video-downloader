import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Download } from './DownloadButton'
import { Title } from './Title'
import { Input } from './Textinput'
function App() {

  //Enter useState definitions below
  //const [count, setCount] = useState(0);

  return (
    <div className="mainApp">
      <Title title="Video Downloader"/>
      <div className="card">
      <Input url="test"/>
        <p>
          Enter video URL website to crawl
        </p>
      </div>
      <Download/>
    </div>
  )
}

export default App
