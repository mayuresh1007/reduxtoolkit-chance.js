import { useDispatch, useSelector } from "react-redux";
import { fakeUserData } from "../api/chanceApi";
import { addAdmin, removeAdmin } from "../store/Admin/adminSlice";
import { deleteAllUser } from "../store/users/userSlice";
const AdminDashboard = () => {
  const dispatch = useDispatch();
  const Alladmins = useSelector((state) => state.admin);
  console.log(Alladmins);

  const AddAdmin = (name) => {
    dispatch(addAdmin(name));
    console.log("admin name -->", name);
  };
  const removeadmin = (id) => {
    dispatch(removeAdmin(id));
    console.log("admin name -->", id);
  };
  const deleteAllAdmin=()=>{
    dispatch(deleteAllUser())
  }

  return (
    <>
      <h2>Admin Page</h2>
      <button
        onClick={() => {
          AddAdmin(fakeUserData());
        }}
        className="btn btn-dark"
      >
        Add Admin
      </button>
      <button
        onClick={() => {
          deleteAllAdmin();
        }}
        className="btn btn-danger"
      >
       DeleteAll Admin
      </button>
      {Alladmins.map((admin, id) => {
        return (
          <div key={id}>
            <ul>
              {/* <li>{admin.name}</li> */}
              <li>{admin}</li>
              <button
                onClick={() => {
                  removeadmin(admin.id);
                }}
                className="btn btn-dark"
              >
                Remove
              </button>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default AdminDashboard;
