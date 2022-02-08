import { Formik, Field, Form } from 'formik';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useQuery } from 'react-query';
import * as Yup from 'yup';

const ProfileEdit = ({ getUser, id, editUser, setEditStatus }) => {
    const { isFetching, refetch, data } = useQuery('profile', () => getUser(id));
    const profile = data?.data;
    console.log(profile)
    if (!profile) return null;

    const { first_name, last_name, email, description } = profile;

    const ProfileSchema = Yup.object().shape({
        first_name: Yup.string()
            .min(2, 'Too Short!')
            .max(25, 'Too Long!')
            .required('Required'),
        last_name: Yup.string()
            .min(2, 'Too Short!')
            .max(25, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email()
            .min(2, 'Too Short!')
            .max(40, 'Too Long!')
            .required('Required'),
        description: Yup.string()
            .min(2, 'Too Short!')
            .max(1000, 'Too Long!')
            .required('Required'),
    });

    return <>
        <h1>Edit profile</h1>
        <Formik
            initialValues={{
                first_name,
                last_name,
                email,
                description
            }}
            validationSchema={ProfileSchema}
            onSubmit={(values) => {
                editUser(id, { ...profile, first_name: values.first_name, last_name: values.last_name, email: values.email, description: values.description }).then(res => {
                    if (res && res.status && res.status === 200) {
                        setEditStatus(false)
                    }
                })
            }}
            enableReinitialize={true}
        >
            {({ errors, touched }) => (
                <Form className="edit-profile">
                    <Field id="first_name" type="text" name="first_name" placeholder="Enter your first name" />
                    {errors.first_name && touched.first_name ? (
                        <div className="field-error">{errors.first_name}</div>
                    ) : null}
                    <Field id="last_name" type="text" name="last_name" placeholder="Enter your second name" />
                    {errors.last_name && touched.last_name ? (
                        <div className="field-error">{errors.last_name}</div>
                    ) : null}
                    <Field id="email" type="email" name="email" placeholder="Enter your email" />
                    {errors.email && touched.email ? (
                        <div className="field-error">{errors.email}</div>
                    ) : null}
                    <Field id="description" type="text" name="description" placeholder="Enter description" />
                    {errors.description && touched.description ? (
                        <div className="field-error">{errors.description}</div>
                    ) : null}
                    <Stack>
                        <Button type="submit" variant="contained">Edit profile</Button >
                    </Stack>
                </Form>
            )}
        </Formik>
    </>
}

export default ProfileEdit;
