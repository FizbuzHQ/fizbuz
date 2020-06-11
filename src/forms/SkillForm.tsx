import * as React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { updateSkillSchema } from 'src/forms/validation';
import Input from 'src/components/ui/Input';
import TextArea from 'src/components/ui/TextArea';
import Button from 'src/components/ui/Button';
import Loading from 'src/components/ui/Loading';

const SkillForm = ({ skill, updateSkill }) => {
    const [formReady, setFormReady] = useState(false);

    // profile form
    const { register, handleSubmit, errors, reset, formState } = useForm({
        validationSchema: updateSkillSchema,
        mode: 'onBlur',
    });

    const { isValid } = formState;

    // set the data in the form based on the profile data from the DB
    useEffect(() => {
        if (skill) {
            reset(skill);
            setFormReady(true);
        }
    }, [skill]);

    const onSubmit = async (data) => {
        if (isValid) {
            updateSkill(data);
        }
    };

    if (!formReady) {
        return <Loading />;
    } else {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input display="Level" field="level" register={register} errors={errors} />
                <TextArea display="Comment" field="comment" register={register} errors={errors} />
                <p className="">
                    <Button mode="primary" onClick={handleSubmit(onSubmit)}>
                        Update
                    </Button>
                </p>
            </form>
        );
    }
};

export default SkillForm;
