import * as yup from 'yup';

const updateOneProfileSchema = yup.object().shape({
    name: yup.string().min(5).required(),
    nickname: yup.string().min(5).required(),
    photo: yup.string().url(),
    about: yup.string(),
});

const updateSkillSchema = yup.object().shape({
    level: yup
        .number()
        .min(0)
        .max(10)
        .nullable(true)
        .transform((v, o) => (o === '' ? null : v)), // https://github.com/jquense/yup/issues/500
    comment: yup.string(),
});

export { updateOneProfileSchema, updateSkillSchema };
