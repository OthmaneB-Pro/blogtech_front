import * as yup from "yup";

export const yupSchema = yup.object().shape({
    username: yup.string().required("Un nom d'utilisateur est requis").min(4),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
})