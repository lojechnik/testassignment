import { useForm } from "react-hook-form";
import UserListButton from "../ui/userlistbutton";
import { userType } from "../user/usertype";
import useFetch from "../../hooks/useFetch";
type FormActionT =  {
  formaction:string;
}
export default function Form() {
  const send = useFetch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async () => {
    
      };
    return (
        <div>
            <form
             onSubmit={handleSubmit(onSubmit)}
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