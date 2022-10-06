import { FormEvent } from "react";
import { useActions, useAppSelector } from "features/hooks";

export const Login = () => {
  const { isLoading, error, user } = useAppSelector((state) => state.auth);
  const { login } = useActions();

  const submit = (event: FormEvent) => {
    event.preventDefault();

    // @ts-ignore
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData) as {
      email: string;
      password: string;
    };

    login(formProps);
  };

  return (
    <>
      <form onSubmit={submit}>
        <input type="text" name={"email"} />
        <input type="text" name={"password"} />
        <button type={"submit"}>submit</button>
      </form>
      <h1>
        {isLoading && <p>loading</p>}
        {error && error}
        {user?.email && user.email}
      </h1>
    </>
  );
};
