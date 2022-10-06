import { useActions, useAppSelector } from "features/hooks";

export const Spaces = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { logout } = useActions();

  return (
    <div>
      Spaces
      {user && <p>{user.email}</p>}
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};
