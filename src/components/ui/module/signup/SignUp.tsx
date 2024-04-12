import { useState, ChangeEvent, useMemo } from 'react';

import { Logo } from '@/constants/images';

import { Button, Input, Link, Loader } from '@components/ui/shared';

import { useAuthContext, useCommonContext } from '@/hooks';

const SignUp = () => {
  const [signingUp, setIsSigningUp] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
  });

  const { register } = useAuthContext();
  const { isLandscape } = useCommonContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleValidation = () => {
    if (!form.password || form.password !== form.confirmPassword) return false;
    if (!form.email || !form.name) return false;
    return true;
  };

  const isDisabled = useMemo(() => {
    return !handleValidation();
  }, [form]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = handleValidation();
    if (!isValid) return;
    setIsSigningUp(true);
    await register({
      email: form.email,
      password: form.password,
      name: form.name,
    });
    setIsSigningUp(false);
  };

  return (
    <div
      className={`flex flex-col ${isLandscape ? 'w-1/3  max-w-md' : ''} bg-white px-6`}
    >
      <section>
        <div className="flex flex-col justify-center items-center">
          <img src={Logo} />
          <h1 className="text-3xl text-text-light font-serif font-bold my-2">
            Sign Up
          </h1>
        </div>
      </section>

      <section>
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <Input
              onChange={handleChange}
              name="email"
              label="Email"
              value={form.email}
            />
          </div>
          <div className="mb-1">
            <Input
              onChange={handleChange}
              name="name"
              label="Name"
              value={form.name}
            />
          </div>
          <div className="mb-1">
            <Input
              onChange={handleChange}
              type="password"
              name="password"
              label="Password"
              value={form.password}
            />
          </div>
          <div className="mb-1">
            <Input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              value={form.confirmPassword}
            />
          </div>

          <div className="my-8">
            <Button disabled={isDisabled} type="submit">
              {signingUp ? <Loader size="small" /> : 'Sign Up'}
            </Button>
          </div>
          <Link to="/login">Already have an account? Log In</Link>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
