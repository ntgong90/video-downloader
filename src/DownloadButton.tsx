export const Download = ({videoUrl,log}:Readonly<{videoUrl:string,log:(event:string) => string}>) => {
  
	const handleClick = () => {
		log(videoUrl);
	}
	return (
    <button onClick={handleClick}>
      Download
    </button>
  );
}