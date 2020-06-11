import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { useGetUserSkillsQuery, useUpdateProfileSkillsMutation } from 'src/generated/graphql';
import Loading from 'src/components/ui/Loading';
import { Table, Header, Body, Row, Data } from 'src/components/ui/Table';
import AddSkillForm from 'src/forms/AddSkillForm';
import { Mode, Alert } from 'src/components/ui/Alert';
import Button from 'src/components/ui/Button';
import DeleteModal from 'src/components/ui/DeleteModal';
import { stringCompare } from 'src/utils/strings';

gql`
    fragment ProfileSkillsInfo on Profile {
        id
        skills {
            ...SkillInfo
        }
    }

    query GetUserSkills {
        currentUser {
            id
            profile {
                ...ProfileSkillsInfo
            }
        }
    }

    mutation UpdateProfileSkills($profileUpdateInput: ProfileUpdateInput!, $id: String!) {
        updateOneProfile(data: $profileUpdateInput, where: { id: $id }) {
            ...ProfileSkillsInfo
        }
    }
`;

const HomeSkills = () => {
    const [flash, setFlash] = useState(undefined);
    const [showDelete, setShowDelete] = useState(false);
    const [skillId, setSkillId] = useState(undefined);
    const { data } = useGetUserSkillsQuery();
    const [updateSkillsMutation] = useUpdateProfileSkillsMutation();

    const closeDelete = () => {
        setShowDelete(false);
    };

    const deleteSkill = async () => {
        try {
            const id = data.currentUser.profile.id;
            const profileUpdateInput = {
                skills: {
                    delete: [{ id: skillId }],
                },
            };
            await updateSkillsMutation({
                variables: { id, profileUpdateInput },
            });
            setFlash({ mode: Mode.SUCCESS, message: 'Skill successfully deleted.' });
        } catch (error) {
            setFlash({ mode: Mode.ERROR, message: 'mutation failed, possibly because of validation errors' });
        }
        setShowDelete(false);
    };

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
            await updateSkillsMutation({
                variables: { id, profileUpdateInput },
            });
            setFlash({ mode: Mode.SUCCESS, message: 'Skill added successfully!' });
        } catch (error) {
            setFlash({ mode: Mode.ERROR, message: 'mutation failed, possibly because of validation errors' });
        }
    };

    if (!data) {
        return <Loading />;
    } else {
        const skills = data.currentUser.profile.skills;
        return (
            <>
                <h1>Edit Skills</h1>
                {flash && (
                    <div className="p-1">
                        <Alert mode={flash.mode} message={flash.message} />
                    </div>
                )}
                <p className="p-1">Blah Blah Blah</p>

                {skills && skills.length > 0 ? (
                    <Table>
                        <Header columns={['Tool', 'Kind', 'Level', 'Edit', 'Delete']} />
                        <Body>
                            {skills
                                .sort((a, b) => stringCompare(a.tool.name, b.tool.name))
                                .map((s, i) => (
                                    <Row key={i} num={i}>
                                        <Data>{s.tool.name}</Data>
                                        <Data>{s.tool.kind}</Data>
                                        <Data>{s.level}</Data>
                                        <Data>
                                            <Link to={`/home/skills/${s.id}`}>Edit</Link>
                                        </Data>
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
                ) : (
                    <div className="p-1">
                        <Alert mode={Mode.INFO} message="No skills yet, why don't you add one?" />
                    </div>
                )}
                <div className="mt-4">
                    <AddSkillForm skills={skills} createSkill={createSkill} />
                </div>
                <DeleteModal
                    isOpen={showDelete}
                    onClose={closeDelete}
                    onDelete={deleteSkill}
                    title="Delete Skill"
                    text="Are you sure? This cannot be undone."
                />
            </>
        );
    }
};

export default HomeSkills;
