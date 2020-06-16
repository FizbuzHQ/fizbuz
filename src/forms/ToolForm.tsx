import * as React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { updateSkillSchema } from 'src/forms/validation';
import { useToolKindListQuery } from 'src/generated/graphql';
import Input from 'src/components/ui/Input';
import Select from 'src/components/ui/Select';
import Button from 'src/components/ui/Button';
import Loading from 'src/components/ui/Loading';

const ToolForm = ({ tool = undefined, upsertTool }) => {
    const { data } = useToolKindListQuery();

    const [formReady, setFormReady] = useState(false);

    // profile form
    const { register, handleSubmit, errors, reset, formState } = useForm({
        validationSchema: updateSkillSchema,
        mode: 'onBlur',
    });

    const { isValid } = formState;

    useEffect(() => {
        if (data) {
            if (tool) reset(tool);
            setFormReady(true);
        }
    }, [data]);

    const onSubmit = async (data) => {
        if (isValid) {
            upsertTool(data);
        }
    };

    if (!data || !formReady) {
        return <Loading />;
    } else {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input display="Name" field="name" register={register} errors={errors} />
                <Select display="Kind" field="kind" register={register} errors={errors}>
                    <option></option>
                    {data.__type.enumValues.map((kind, i) => (
                        <option key={i} value={kind.name}>
                            {kind.name}
                        </option>
                    ))}
                </Select>
                <div className="mt-4">
                    <Button mode="primary" onClick={handleSubmit(onSubmit)}>
                        {tool ? 'Update' : 'Create'}
                    </Button>
                </div>
            </form>
        );
    }
};

export default ToolForm;
