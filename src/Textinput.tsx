export const Input = ({url,clickChange}:Readonly<{url:string, clickChange:(value: string) => void}>) => {

	const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		clickChange(event.target.value);
	}

  return (
		<div>
			<input
				type="text"
				value={url}
				onChange={handleChange}
			/>
		</div>
	);
};