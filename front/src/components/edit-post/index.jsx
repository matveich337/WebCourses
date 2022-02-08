import "./style.scss"
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useParams } from "react-router";
import { useQuery } from 'react-query';
import * as Yup from 'yup';

const EditPost = ({ editPost, getSinglePost }) => {
    const navigate = useNavigate();
    const params = useParams();
    const { id } = params;
    const { isFetching, refetch, data } = useQuery('single-post', () => getSinglePost(id));
    const post = data?.data;

    if (!post) return null;

    const { blog_text, user_id, created_at } = post;

    const EditPostSchema = Yup.object().shape({
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
        <h1>Edit post №{id}</h1>
        <Formik
            initialValues={{
                text: blog_text,
                userId: user_id,
            }}
            validationSchema={EditPostSchema}
            onSubmit={(values) => {
                editPost(id, { blog_text: values.text, user_id: values.userId, created_at, updated_at: new Date() }).then(res => {
                    if (res && res.status && res.status === 200) {
                        navigate('/')
                    }
                })
            }}
            enableReinitialize={true}
        >
            {({ errors, touched }) => (
                <Form className="edit-post-form">
                    <Field id="text" type="text" name="text" placeholder="Text..." />
                    {errors.text && touched.text ? (
                        <div className="field-error">{errors.text}</div>
                    ) : null}
                    <Field id="userId" type="number" name="userId" placeholder="User ID" />
                    {errors.userId && touched.userId ? (
                        <div className="field-error">{errors.userId}</div>
                    ) : null}
                    <Stack>
                        <Button type="submit" variant="contained">Edit post</Button >
                    </Stack>
                </Form>
            )}
        </Formik>
    </>
}

export default EditPost;
