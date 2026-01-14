import Layout from './commons/ui/layout';
import { useUser } from './commons/ui/hooks/use-user';

function App() {
  const setImage = useUser(state => state.setImage);
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
    <Layout>
      <input type="file" onChange={handleChange} />
      {img && <img src={getImage().src} alt="logo" />}
    </Layout>
  );
}

export default App;
