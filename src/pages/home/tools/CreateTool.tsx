import * as React from 'react';
import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useCurrentUserQuery, useCreateToolMutation, useUpdateProfileSkillsMutation } from 'src/generated/graphql';
import ToolForm from 'src/forms/ToolForm';
import { upsertToolSchema } from 'src/forms/validation';
//import Loading from 'src/components/ui/Loading';
import { Mode } from 'src/components/ui/Alert';
import Flash from 'src/components/ui/Flash';

const CreateTool = () => {
    const [flash, setFlash] = useState(undefined);

    const name = new URLSearchParams(useLocation().search).get('name');

    const { data: currentUserData } = useCurrentUserQuery();
    const [createToolMutation] = useCreateToolMutation();
    const [updateSkillsMutation] = useUpdateProfileSkillsMutation();

    const history = useHistory();

    const createTool = async (formData) => {
        const toolCreateInput = upsertToolSchema.cast(formData);
        toolCreateInput.nameSearch = toolCreateInput.name.toLowerCase();
        try {
            const created = await createToolMutation({
                variables: { toolCreateInput },
            });
            const id = currentUserData.currentUser.profile.id;
            const profileUpdateInput = {
                skills: {
                    create: [
                        {
                            tool: {
                                connect: {
                                    id: created.data.createOneTool.id,
                                },
                            },
                        },
                    ],
                },
            };
            await updateSkillsMutation({
                variables: { id, profileUpdateInput },
            });
            history.push('/home/skills', {
                flash: { mode: Mode.SUCCESS, message: 'Tool added and attached to your Profile successfully!' },
            });
        } catch (error) {
            setFlash({ mode: Mode.ERROR, message: 'mutation failed, possibly because of validation errors' });
        }
    };

    return (
        <>
            <h1>Create a new Tool</h1>
            <Flash flash={flash} />
            <p className="p-1">Thanks for helping us build an awesome database of developer tools!</p>
            <ToolForm tool={{ name }} upsertTool={createTool} />
        </>
    );
};

export default CreateTool;
