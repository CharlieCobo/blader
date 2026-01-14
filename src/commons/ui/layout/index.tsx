import { Header } from './header';
import { Sidebar } from './sidebar';

interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </>
  );
};
