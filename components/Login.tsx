import React from 'react';
import Link from 'next/link';

function Login() {
  return (
    <div className='text-white flex justify-center items-center'>
      <Link href="/login">
        Login
      </Link>
    </div>
  );
}

export default Login;
