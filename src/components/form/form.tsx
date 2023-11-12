import { useForm } from "react-hook-form";
import { userType } from "../user/usertype";
export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = async () => {
    //     await {fetch};
    //     if (username === "bill") {
    //       alert(JSON.stringify(data));
    //     } else {
    //       alert("There is an error");
    //     }
    //   };
    
    return (
        <div>
            <form
            //  onSubmit={handleSubmit(onSubmit)}
             >
      <h1>Async Submit Validation</h1>
      <label htmlFor="username">User Name</label>
      <input {...register("username")} placeholder="Bill" />

      <label htmlFor="lastName">Last Name</label>
      <input {...register("first_name")} placeholder="Luo" />

      <label htmlFor="email">Email</label>
      <input
        {...register("email")}
        placeholder="bluebill1049@hotmail.com"
        type="text"
      />

      <div style={{ color: "red" }}>
        {Object.keys(errors).length > 0 &&
          "There are errors, check your console."}
      </div>
      <input type="submit" />
    </form>
        </div>
    )
}