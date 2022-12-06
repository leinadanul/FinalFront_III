import { useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { data } = useContext(ContextGlobal)
  return (
    <>
      <h1>Home</h1>
      <div className='card-grid container'>
        {data.length ?
          data.map(medico => <Card {...medico} key={medico.id} />)
          : null}
      </div>
    </>
  )
}

export default Home