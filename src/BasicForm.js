import {  useFormik } from "formik";
import * as yup from 'yup';

// const validateForm = (values)=>{
//     const errors = {}
//     console.log("validateForm",values)

//     if(values.email.length < 8){
//         errors.email = "Please provide a longer email"
//     }else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//       ) {
//         errors.email = 'Invalid email address';
//       }

//     if(values.password.length < 8){
//         errors.password = "Please provide a longer password"
//     }else if(values.password.length > 12){
//         errors.password = "Please provide a shorter password"
//     }
//     console.log(errors);
//     return errors;
// }

// export function BasicForm() {
//    const formik = useFormik({
//        initialValues: {email:"",password:""},
//        validate:validateForm,
//        onSubmit:(values)=>{
//            console.log("onSubmit",values);
//        }
//    })

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <input 
//       id="email"
//       name="email"
//       value={formik.values.email} 
//       onChange={formik.handleChange}
//       onBlur={formik.handleBlur}
//       type="email" 
//       placeholder="Enter your email" 
//       />
//         {formik.errors.email && formik.touched.email && formik.errors.email}

//       <input 
//       id="password"
//       name="password"
//       value={formik.values.password} 
//       onChange={formik.handleChange}
//       onBlur={formik.handleBlur}
//       type="password" 
//       placeholder="Enter your passward" 
//       />
//       {formik.errors.password && formik.touched.password && formik.errors.password}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }


// export function BasicForm() {
//     const {handleSubmit,values,handleChange,handleBlur,errors,touched} = useFormik({
//         initialValues: {email:"",password:""},
//         validate:validateForm,
//         onSubmit:(values)=>{
//             console.log("onSubmit",values);
//         }
//     })
 
//    return (
//      <form onSubmit={handleSubmit}>
//        <input 
//        id="email"
//        name="email"
//        value={values.email} 
//        onChange={handleChange}
//        onBlur={handleBlur}
//        type="email" 
//        placeholder="Enter your email" 
//        />
//          {errors.email && touched.email && errors.email}
 
//        <input 
//        id="password"
//        name="password"
//        value={values.password} 
//        onChange={handleChange}
//        onBlur={handleBlur}
//        type="password" 
//        placeholder="Enter your passward" 
//        />
//        {errors.password && touched.password && errors.password}
//        <button type="submit">Submit</button>
//      </form>
//    );
//  }

const formValidationSchema = yup.object({
    email:yup
    .string()
    .min(5,"Need a bigger email🤨") 
    .required("Why not fill this email?🤔")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Pattern does not match😑"),
    password:yup
    .string()
    .min(8,"Need a longer password🤨") 
    .max(12,"Too much password😅")
    .required("Why not fill this password?🤔"),

});


export function BasicForm() {
    const {handleSubmit,values,handleChange,handleBlur,errors,touched} = useFormik({
        initialValues: {email:"",password:""},
        // validate:validateForm,
        validationSchema:formValidationSchema,
        // only when no errors ,onsubmit
        onSubmit:(values)=>{
            console.log("onSubmit",values);
        }
    })
 
   return (
     <form onSubmit={handleSubmit}>
       <input 
       id="email"
       name="email"
       value={values.email} 
       onChange={handleChange}
       onBlur={handleBlur}
       type="email" 
       placeholder="Enter your email" 
       />
         {errors.email && touched.email && errors.email}
 
       <input 
       id="password"
       name="password"
       value={values.password} 
       onChange={handleChange}
       onBlur={handleBlur}
       type="password" 
       placeholder="Enter your passward" 
       />
       {errors.password && touched.password && errors.password}
       <button type="submit">Submit</button>
     </form>
   );
 }