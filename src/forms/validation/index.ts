import * as yup from 'yup';

const updateOneProfileSchema = yup.object().shape({
    name: yup.string().min(5).required(),
    nickname: yup.string().min(5).required(),
    photo: yup.string().url(),
    about: yup.string(),
});

export { updateOneProfileSchema };
