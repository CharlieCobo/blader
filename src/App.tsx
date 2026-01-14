import { useUser } from './commons/ui/hooks/use-user';

function App() {
  const setImage = useUser(state => state.setImage);
  const setUsername = useUser(state => state.setUsername);
  const img = useUser(state => state.image);
  const getImage = useUser(state => state.getImage);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.files) return;

    const fr = new FileReader();
    fr.readAsDataURL(e.target.files[0]);
    fr.onload = () => {
      const url = fr.result;

      setImage(url);
    };
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <input type="text" onChange={e => setUsername(e.target.value)} />
      <input type="file" onChange={handleChange} />
      {img && <img src={getImage().src} alt="logo" />}
    </>
  );
}

export default App;
