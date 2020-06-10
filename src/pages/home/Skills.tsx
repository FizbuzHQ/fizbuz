import * as React from 'react';
import { useEffect } from 'react';
import gql from 'graphql-tag';
import { useGetHomeSkillsQuery, useCreateHomeSkillMutation } from 'src/generated/graphql';
import Loading from 'src/components/ui/Loading';
import { Table, Header, Body, Row, Data } from 'src/components/ui/Table';
import AddSkillForm from 'src/forms/AddSkillForm';
import { useState } from 'react';
import { Mode, Alert } from 'src/components/ui/Alert';
import Button from 'src/components/ui/Button';
import DeleteModal from 'src/components/ui/DeleteModal';

gql`
    fragment HomeSkillsInfo on Profile {
        id
        skills {
            id
            level
            comment
            tool {
                id
                name
            }
        }
    }

    query GetHomeSkills {
        currentUser {
            id
            profile {
                ...HomeSkillsInfo
            }
        }
    }

    mutation CreateHomeSkill($profileUpdateInput: ProfileUpdateInput!, $id: String!) {
        updateOneProfile(data: $profileUpdateInput, where: { id: $id }) {
            ...HomeSkillsInfo
        }
    }
`;

const HomeSkills = () => {
    const [flash, setFlash] = useState(undefined);

    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [skillId, setSkillId] = useState(undefined);
    const { data } = useGetHomeSkillsQuery();
    const [createSkillMutation] = useCreateHomeSkillMutation();
    const [skills, setSkills] = useState(undefined);

    useEffect(() => {
        if (data && data.currentUser && data.currentUser.profile) {
            setSkills(data.currentUser.profile.skills);
        }
    }, [data]);

    const closeDelete = () => {
        setShowDelete(false);
    };

    const deleteSkill = async () => {
        try {
            const foo = await createSkillMutation({
                variables: {
                    id: data.currentUser.profile.id,
                    profileUpdateInput: {
                        skills: {
                            delete: [{ id: skillId }],
                        },
                    },
                },
            });
            setSkills(foo.data.updateOneProfile.skills);
            setFlash({ mode: Mode.SUCCESS, message: 'Skill successfully deleted.' });
        } catch (error) {
            setFlash({ mode: Mode.ERROR, message: 'mutation failed, possibly because of validation errors' });
        }
        setShowDelete(false);
    };
    // execute the profile update mutation
    const createSkill = async (toolId) => {
        const id = data.currentUser.profile.id;
        const profileUpdateInput = {
            skills: {
                create: [
                    {
                        tool: {
                            connect: {
                                id: toolId,
                            },
                        },
                    },
                ],
            },
        };
        try {
            await createSkillMutation({
                variables: { id, profileUpdateInput },
            });
            setFlash({ mode: Mode.SUCCESS, message: 'Skill added successfully!' });
        } catch (error) {
            setFlash({ mode: Mode.ERROR, message: 'mutation failed, possibly because of validation errors' });
        }
    };

    if (!skills) {
        return <Loading />;
    } else {
        return (
            <>
                <h1>Edit Skills</h1>
                {flash && (
                    <div className="p-1">
                        <Alert mode={flash.mode} message={flash.message} />
                    </div>
                )}
                <p>Blah Blah Blah</p>
                <Table>
                    <Header columns={['Tool', 'Level', 'Edit', 'Delete']} />
                    <Body>
                        {data.currentUser.profile.skills.map((s, i) => (
                            <Row key={i} num={i}>
                                <Data>{s.tool.name}</Data>
                                <Data>{s.level}</Data>
                                <Data>Edit</Data>
                                <Data>
                                    <Button
                                        mode="danger"
                                        size="xs"
                                        onClick={() => {
                                            setSkillId(s.id);
                                            setShowDelete(true);
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </Data>
                            </Row>
                        ))}
                    </Body>
                </Table>
                <div className="mt-4">
                    <AddSkillForm skills={skills} createSkill={createSkill} />
                </div>
                <DeleteModal
                    isOpen={showDelete}
                    onClose={closeDelete}
                    onDelete={deleteSkill}
                    title="Delete???"
                    text="Are you sure????"
                />
            </>
        );
    }
};

export default HomeSkills;
