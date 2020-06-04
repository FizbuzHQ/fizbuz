import * as React from 'react';
import gql from 'graphql-tag';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useUserSessionQuery, useProfileQuery, useToolListQuery, useCreateSkillsMutation } from 'src/generated/graphql';
import { stringCompare } from 'src/utils/strings';
import Button from 'src/components/ui/Button';
import Checkbox from 'src/components/ui/Checkbox';
import Loading from 'src/components/ui/Loading';
import Alert from 'src/components/ui/Alert';

gql`
    mutation CreateSkills($profileUpdateInput: ProfileUpdateInput!, $id: String!) {
        updateOneProfile(data: $profileUpdateInput, where: { id: $id }) {
            skills {
                tool {
                    name
                }
            }
        }
    }

    query ToolList {
        tools {
            id
            name
            kind
        }
    }
`;

const OnboardingSkills = () => {
    const { data: userSessionData } = useUserSessionQuery();
    const { data: profileData } = useProfileQuery({
        skip: userSessionData === undefined,
        variables: {
            userId: userSessionData && userSessionData.userSession.userId,
        },
    });
    const { data: toolsData } = useToolListQuery();

    const [createSkill] = useCreateSkillsMutation();

    const { register, handleSubmit } = useForm();

    const [flash, setFlash] = React.useState(undefined);

    const history = useHistory();

    const onSubmit = async (formData) => {
        try {
            const create = formData.tools.map((id) => {
                return {
                    tool: {
                        connect: {
                            id,
                        },
                    },
                };
            });

            await createSkill({
                variables: {
                    id: profileData.user.profile.id,
                    profileUpdateInput: {
                        skills: {
                            create,
                        },
                    },
                },
            });

            history.push('/home');
        } catch (error) {
            setFlash('mutation failed, possibly because of validation errors');
        }
    };

    if (!toolsData || !profileData) {
        return <Loading />;
    } else {
        // group the tools by kind
        const kindList = toolsData.tools.reduce((acc, tool) => {
            (acc[tool.kind] = acc[tool.kind] || []).push(tool);
            return acc;
        }, {});

        // define which "kinds" of Tools to display on this page
        const kindsToDisplay = ['Language'];

        return (
            <>
                <h1>Select Tools</h1>
                {flash && (
                    <div className="p-1">
                        <Alert message={flash} />
                    </div>
                )}
                <p>
                    Please select some tools that you use when coding. Don&apos;t worry if a tool you use isn&apos;t
                    listed here, you&apos;ll have an opportunity to add it to your profile later.
                </p>
                <div>
                    {kindsToDisplay.map((kind, i) => (
                        <div key={i}>
                            <h2>{kind}</h2>
                            <div className="flex mb-4">
                                {kindList[kind]
                                    .sort((a, b) => stringCompare(a.name, b.name))
                                    .map((tool, j) => (
                                        <div key={j} className="mr-2">
                                            <Checkbox
                                                display={tool.name}
                                                register={register}
                                                name="tools"
                                                value={tool.id}
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
                <p>
                    <Button mode="primary" onClick={handleSubmit(onSubmit)}>
                        Next
                    </Button>
                </p>
            </>
        );
    }
};

export default OnboardingSkills;
