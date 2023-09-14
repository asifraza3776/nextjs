import React from 'react';

import { User, user } from './user';
import { Shop } from './shop';
// import Vehicle from '../../components/shop';

export default function Home() {
  return (
    <main>
      <h1 className='ml-3'>User & Shop Data</h1>
      <button onClick={User} className='bg-black p-5 rounded-full m-5'><a className='text-white' href="http://localhost:3000/user">User</a></button>
      <button onClick={Shop} className='bg-black p-5 rounded-full'><a className='text-white' href="http://localhost:3000/shop">shop</a></button>
      
      
    </main>
  );
}