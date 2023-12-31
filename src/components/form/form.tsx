import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux/es/hooks/useSelector";
import UserListButton from "../ui/userlistbutton";
import { userType } from "../user/usertype";
import useFetch from "../../hooks/useFetch";
import { FieldValues } from "react-hook-form";
import { RootState } from "../../redux/store";
import { useState,useEffect } from "react";
import { formType } from "../../redux/formslice";
type FormTypes = {
  first_name:string;
  last_name:string;
}
interface SubmitFormType  {
  userData:userType;
  formAction:string;
  props:formType;
}
export default function Form() {
  const [apiBody,setApiBody] = useState<FieldValues>()
  const send = useFetch()
  const formData = useSelector((state: RootState) => state.form)
  console.log('currentUser',formData.currentUser)
useEffect(()=>{
console.log('apiBody',apiBody)
send(`/users/${formData?.currentUser?.id}`,'PATCH',{
  id:formData?.currentUser?.id
},
)
},[formData?.currentUser?.id,apiBody,send])
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data:FieldValues) => {
      console.log('dataonSubm,it',data)
     setApiBody(data)
     console.log('formdata',data)
    };
    return (
        <div>      
            <form
             onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="firstName">Last Name</label>
          <input {...register("first_name", {
            required: "Please Enter Your First Name!",
            pattern: {
              value: /^[a-z ,.'-]+$/i,
              message: "Please Enter A Valid Name!"
            }
          })} type="first_name" id="first_name" placeholder={(formData.formType === 'edit') ? formData.currentUser.last_name : ''} 
          />
          <label htmlFor="lastName">Last Name</label>
          <input {...register("last_name", {
            required: "Please Enter Your Name!",
            pattern: {
              value: /^[a-z ,.'-]+$/i,
              message: "Please Enter A Valid Name!"
            }
          })} type="last_name" id="last_name" placeholder={(formData.formType === 'edit') ? formData.currentUser.last_name : ''} 
          />
      <div style={{ color: "red" }}>
        {Object.keys(errors).length > 0 &&
          "Invalid name."}
      </div>
      <input type="submit" />
     
    </form>
        </div>
    )
}