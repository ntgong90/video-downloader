export const Download = ({videoUrl,logData}:Readonly<{videoUrl:string,logData:(event:string) => string}>) => {
  
	const handleClick = () => {
		logData(videoUrl);
	}
	return (
    <button onClick={handleClick}>
      Download
    </button>
  );
}