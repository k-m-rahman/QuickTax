import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useRef } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, updateUserProfile, setForUpdate } = useContext(AuthContext);

  const displayNameRef = useRef(user?.displayName);
  const photoURLRef = useRef(user?.photoURL);

  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    const name = displayNameRef.current.value;
    const photo = photoURLRef.current.value;
    handleProfileUpdate(name, photo);

    event.target.reset();
    navigate("/");
  };

  // updating user name and photo

  const handleProfileUpdate = async (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };

    await updateUserProfile(profile)
      .then(() => {
        setForUpdate((prev) => !prev);
        // console.log("User name and photo updated");
        swal("Success!", "Profile updated!", "success");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="py-10">
      <div className="mx-5 md:w-1/2 md:mx-auto mt-10 border p-5 pb-10 rounded-lg shadow-xl mb-10">
        <h2 className="text-xl font-semibold border-b-2 pb-2  mb-5 ">
          Update Your Profile
        </h2>
        <form
          onSubmit={handleUpdate}
          className="flex flex-col gap-4 text-left w-10/12 mx-auto"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Full Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="Your Full Name"
              name="name"
              required={true}
              shadow={true}
              defaultValue={user?.displayName}
              ref={displayNameRef}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="photo" value="Photo URL" />
            </div>
            <TextInput
              id="photo"
              type="text"
              placeholder="Photo URL"
              name="photo"
              shadow={true}
              defaultValue={user?.photoURL}
              ref={photoURLRef}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email ( cannot be updated )" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="Your Email"
              name="email"
              required={true}
              shadow={true}
              defaultValue={user.email}
              readOnly
            />
          </div>

          <Button type="submit">Update</Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
