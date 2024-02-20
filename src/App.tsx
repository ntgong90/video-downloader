import { useState } from 'react';
import './App.css';
import { Download } from './DownloadButton';
import { Title } from './Title';
import { Input } from './Textinput';
import axios from 'axios';

function App() {
  //Enter useState definitions below
	const [url, setUrl] = useState('Enter URL'),
				[result, setResult] = useState<string|null>(null);

	const crawl = async () => {
		try {
			const response = await axios.get('/crawl', { url });
			setResult(JSON.stringify(response.data, null, 2));
      console.log("Get request worked!")
		} catch (error) {
			console.error("This shit ain't working");
			setResult('Error fetching URL');
		}
	};

	const consoleLog = () => {
		console.log(result);
	}

  return (
    <div className="mainApp">
      <Title title="Video Downloader"/>
      <div className="card">
      <Input 
				clickChange={setUrl}
				url={url}
			/>
        <p>
          Enter video URL website to crawl
        </p>
      </div>
      <Download
				log={crawl}
				videoUrl={url}
			/>
      <button onClick={consoleLog}>
        Console Log
      </button>
    </div>
  )
}
export default App;