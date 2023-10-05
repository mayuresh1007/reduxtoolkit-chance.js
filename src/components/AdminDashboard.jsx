import { useDispatch, useSelector } from "react-redux";
import { fakeUserData } from "../api/chanceApi";
import { addAdmin, removeAdmin,deleteAll } from "../store/Admin/adminSlice";
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
    dispatch(deleteAll())
  }

  return (
    <>
      <h2>Admin Page</h2>
      <button
        onClick={() => {
          AddAdmin(fakeUserData());
        }}
        className="btn btn-dark m-1"
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
      
      <table className="table table-dark table-stripe">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">AdminName</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Alladmins?.map((admin, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{admin}</td>
                <td>
                  <button
                    onClick={() => {
                        removeadmin(admin);
                    }}
                    className="btn btn-secondary"
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

export default AdminDashboard;
