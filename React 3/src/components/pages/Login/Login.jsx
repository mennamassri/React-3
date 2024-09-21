




import { Formik } from 'formik';





const Login = () => (
  <div>
    
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        } else if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(values.password) 
        ) {
          errors.password = 'Please enter a valid password';
        }
        
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
       
      }) => (
       <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      
        
        }}>
         
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center'}}>
          <input style={{
             borderRadius: '10px',
             border: '1px solid grey',
             margin: '5px',
             padding: '6px'
          }}
            type="email"
            name="email"
            placeholder='Enter your email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input style={{
             borderRadius: '10px',
             border: '1px solid grey',
             margin: '5px',
             padding: '6px'
          }}
            type="password"
            name="password"
            placeholder='Enter your password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button style={{
             borderRadius: '10px',
             margin: '5px',
             padding: '6px'
          }} type="submit" disabled={isSubmitting}>
            Submit
          </button >
          


        </form>
        </div>
       
      )}
    </Formik>
  </div>
);



export default Login;