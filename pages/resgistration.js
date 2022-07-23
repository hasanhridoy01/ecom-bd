import Link from "next/link";
import { useForm } from "react-hook-form";

function resgistration() {
  //handle form submit
  const { register, formState: { errors }, handleSubmit } = useForm();

  //submit form
  const onSubmit = async data => {
    console.log(data);
  }
  return (
    <div className="mt-10 mb-10">
      <div className="grid sm:grid-cols-1 lg:grid-cols-1mx-auto">
        <div className='flex justify-center items-center my-10'>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-center text-2xl font-bold">Sign Up</h2>
              <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                      required: {
                        value: true,
                        message: 'Name is Required'
                      }
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                  </label>
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: 'Email is Required'
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Provide a valid Email'
                      }
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: 'Password is Required'
                      },
                      minLength: {
                        value: 6,
                        message: 'Must be 6 characters or longer'
                      }
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                  </label>
                </div>

                <input className='btn w-full max-w-xs text-white mt-4' type="submit" value="Sign Up" />
              </form>
              <p><small>Already have an account? <Link className='text-primary' href="/login">Please login</Link></small></p>
              <div className="divider">OR</div>
              <button className="btn btn-outline">Continue with Google</button>
            </div>
          </div>
        </div >
      </div>
    </div>
  )
}

export default resgistration