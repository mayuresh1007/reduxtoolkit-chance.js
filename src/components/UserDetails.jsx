import { useDispatch, useSelector } from "react-redux";
import { fakeUserData } from "../api/chanceApi";
import { addUser, removeUser, deleteAllUser } from "../store/users/userSlice";

const UserDetails = () => {
  const UserName = useSelector((state) => state.UserReducer);
  console.log(UserName);
  const dispatch = useDispatch();

  const addNewUser = (name) => {
    console.log("hi", name);
    dispatch(addUser(name));
  };
  const deleteUser = (user) => {
    console.log("delete", user);
    dispatch(removeUser(user));
  };
  const deleteAll = () => {
    dispatch(deleteAllUser());
  };

  return (
    <>
      <h2 >User Details</h2>
      <button
        className="btn btn-dark m-1"
        onClick={() => {
          // addNewUsr la fakeUserData data anun denar
          // tyanantr dispatch krnar data redux store madhe add karayla by using the addUser reducer
          addNewUser(fakeUserData());
        }}
      >
        Add user
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          deleteAll();
        }}
      >
        Delete All users
      </button>
      <table className="table table-dark table-stripe">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">UserName</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {UserName?.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(user);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UserDetails;
