import { useActions, useAppSelector } from "features/hooks";

export const Login = () => {
  const { isLoading, error, user } = useAppSelector((state) => state.auth);
  const { login } = useActions();

  const submit = () => {
    login({ email: "tanondanon@mail.ru", password: "123456" });
  };

  return (
    <>
      <button onClick={submit}>submit</button>
      <h1>
        {isLoading && <p>loading</p>}
        {error && error}
        {user?.email && user.email}
      </h1>
    </>
  );
};
