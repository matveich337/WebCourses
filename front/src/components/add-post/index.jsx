import "./style.scss"
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import * as Yup from 'yup';

const AddPost = ({ addPost }) => {
    const navigate = useNavigate();

    const AddPostSchema = Yup.object().shape({
        text: Yup.string()
            .min(2, 'Too Short!')
            .max(1000, 'Too Long!')
            .required('Required'),
        userId: Yup.number()
            .min(1, 'Too Short!')
            .max(6, 'Too Long!')
            .positive()
            .integer()
            .required('Required')
    });

    return <>
        <h1>Add post</h1>
        <Formik
            initialValues={{
                text: '',
                userId: ''
            }}
            validationSchema={AddPostSchema}
            onSubmit={(values) => {
                addPost({ blog_text: values.text, user_id: values.userId, created_at: new Date(), updated_at: new Date() }).then(res => {
                    if (res && res.status && res.status === 201) {
                        navigate('/')
                    }
                })
            }}
        >
            {({ errors, touched }) => (
                <Form className="add-post-form">
                    <Field id="text" type="text" name="text" placeholder="Text..." />
                    {errors.text && touched.text ? (
                        <div className="field-error">{errors.text}</div>
                    ) : null}
                    <Field id="userId" type="number" name="userId" placeholder="User ID" />
                    {errors.userId && touched.userId ? (
                        <div className="field-error">{errors.userId}</div>
                    ) : null}
                    <Stack>
                        <Button type="submit" variant="contained">Create post</Button >
                    </Stack>
                </Form>
            )}
        </Formik>
    </>
}

export default AddPost;
