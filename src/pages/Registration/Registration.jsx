import { useForm } from "react-hook-form";

const Registration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="w-[85%] mx-auto mb-9">
      <div className="hero lg:my-20 my-10 ">
        <div className="lg:grid grid-cols-12 ">
          <div className=" col-span-6 text-center lg:text-left px-12">
            <h1 className="text-5xl font-bold">Registration now!</h1>
            <p className="py-6 x">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <h1 className=" card-title mt-10">
              Work In Progress...................
            </h1>
          </div>
          <div className="col-span-6 card w-full  bg-base-100">
            <h1 className="ms-8 card-title">Personal Details:</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Student Name:</span>
                  </label>
                  <input
                    type="name"
                    placeholder="name"
                    className="input input-bordered lg:w-[250px]"
                    required
                    {...register("name", {
                      required: true,
                    })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered lg:w-[240px]"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Contact No:</span>
                  </label>

                  <input
                    type="contact number"
                    placeholder="name"
                    className="input input-bordered lg:w-[250px]"
                    required
                    {...register("name", {
                      required: true,
                    })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <select
                    {...register("course_Name", { required: true })}
                    aria-invalid={errors.from ? "true" : "false"}
                    className="select select-bordered lg:w-[240px]"
                  >
                    <option selected disabled value="MS office">
                      Select gender
                    </option>
                    <option value="MS office">Male</option>
                    <option value="Database Programming">Female</option>
                  </select>
                </div>
              </div>
              <h1 className=" text-lg mb-[-12px] mt-5 font-semibold">
                Education Details:
              </h1>
              <div className="flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Degree Title</span>
                  </label>
                  <select
                    {...register("course_Name", { required: true })}
                    aria-invalid={errors.from ? "true" : "false"}
                    className="select select-bordered lg:w-[240px]"
                  >
                    <option selected disabled value="MS office">
                      Select Degree
                    </option>
                    <option value="MS office">SSC</option>
                    <option value="Database Programming">HSC</option>
                    <option value="Grapgics Design<">Honours</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Department</span>
                  </label>
                  <input
                    type="text"
                    placeholder="department"
                    className="input input-bordered lg:w-[240px]"
                    required
                  />
                </div>
              </div>
              <div className=" flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">CGPA</span>
                  </label>
                  <input
                    type="number"
                    placeholder="CGPA"
                    className="input input-bordered lg:w-[240px]"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Passing Year</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Passing Year"
                    className="input input-bordered lg:w-[240px]"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Institute Name</span>
                </label>
                <input
                  type="text"
                  placeholder="institute name"
                  className="input input-bordered "
                  required
                />
              </div>
              <h1 className=" text-lg mb-[-12px] mt-5 font-semibold">
                Course Details:
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Course Name</span>
                </label>
                <select
                  {...register("course_Name", { required: true })}
                  aria-invalid={errors.from ? "true" : "false"}
                  className="select select-bordered "
                >
                  <option selected disabled value="MS office">
                    Select Course
                  </option>
                  <option value="MS office">MS office</option>
                  <option value="Database Programming">
                    Database Programming
                  </option>
                  <option value="Grapgics Design<">Grapgics Design</option>
                </select>
              </div>
              <div className="flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Course Duration</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Course Duration"
                    className="input input-bordered lg:w-[240px]"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="price"
                    placeholder="number"
                    className="input input-bordered lg:w-[240px]"
                    required
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button className=" hover:text-black  relative shadow-lg top-2 z p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white">
                  Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
