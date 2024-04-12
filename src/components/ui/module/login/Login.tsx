import { useState, ChangeEvent, useMemo } from 'react';

import { Logo } from '@/constants/images';

import { Button, Input, Link, Loader } from '@components/ui/shared';

import { useAuthContext, useCommonContext } from '@/hooks';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { login, isLoggingIn } = useAuthContext();
  const { isLandscape } = useCommonContext();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isDisabled = useMemo(() => {
    return !(form.email && form.password);
  }, [form]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isDisabled) return;
    try {
      await login({
        email: form.email,
        password: form.password,
      });
      navigate('/conversations');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className={`flex flex-col ${isLandscape ? 'w-1/3 max-w-md' : ''} bg-white px-6`}
    >
      <section>
        <div className="flex flex-col justify-center items-center">
          <img src={Logo} />
          <h1 className="text-3xl text-text-light font-serif font-bold my-2">
            Log In
          </h1>
        </div>
      </section>

      <section>
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <Input
              name="email"
              label={'Email'}
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-1">
            <Input
              label={'Password'}
              onChange={handleChange}
              type="password"
              name="password"
              value={form.password}
            />
          </div>

          <div className="my-8">
            <Button type="submit" disabled={isDisabled}>
              {isLoggingIn ? <Loader size="small" /> : 'Log In'}
            </Button>
          </div>
          <Link to={'/signup'}>Don't have an account? Sign Up</Link>
        </form>
      </section>
    </div>
  );
};

export default Login;
