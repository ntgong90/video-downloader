export const Input = ({url}:{url:string}) => {
  return (
    <label>
     <input name={url} defaultValue="Video URL here" />
    </label>
  );
};