import * as React from 'react';
import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useCurrentUserQuery, useGetSkillQuery, useUpdateSkillMutation } from 'src/generated/graphql';
import SkillForm from 'src/forms/SkillForm';
import { updateSkillSchema } from 'src/forms/validation';
import Loading from 'src/components/ui/Loading';
import { Mode, Alert } from 'src/components/ui/Alert';

const EditSkill = () => {
    const { id } = useParams();
    const [flash, setFlash] = useState(undefined);
    const { data: currentUserData } = useCurrentUserQuery();
    const { data: skillData } = useGetSkillQuery({ variables: { skillWhereUniqueInput: { id } } });
    const [updateSkillMutation] = useUpdateSkillMutation();
    const history = useHistory();

    const updateSkill = async (formData) => {
        const data = updateSkillSchema.cast(formData);
        const where = { id: skillData.skill.id };
        const profileUpdateInput = {
            skills: {
                update: [{ data, where }],
            },
        };
        const id = currentUserData.currentUser.profile.id;

        try {
            await updateSkillMutation({
                variables: { id, profileUpdateInput },
            });
            history.push('/home/skills', {
                flash: { mode: Mode.SUCCESS, message: 'Skill updated successfully!' },
            });
        } catch (error) {
            setFlash({ mode: Mode.ERROR, message: 'mutation failed, possibly because of validation errors' });
        }
    };

    if (!skillData) {
        return <Loading />;
    } else {
        return (
            <>
                <h1>Edit Skill: {skillData.skill.tool.name}</h1>
                {flash && (
                    <div className="p-1">
                        <Alert mode={flash.mode} message={flash.message} />
                    </div>
                )}
                <p className="p-1">blah blah</p>
                <SkillForm skill={skillData.skill} updateSkill={updateSkill} />
            </>
        );
    }
};

export default EditSkill;
