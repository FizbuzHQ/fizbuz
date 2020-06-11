import * as React from 'react';
import gql from 'graphql-tag';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useCurrentUserQuery, useToolListQuery, useCreateOnboardingSkillsMutation } from 'src/generated/graphql';
import { stringCompare } from 'src/utils/strings';
import Button from 'src/components/ui/Button';
import Checkbox from 'src/components/ui/Checkbox';
import Loading from 'src/components/ui/Loading';
import { Alert, Mode } from 'src/components/ui/Alert';

gql`
    mutation CreateOnboardingSkills($profileUpdateInput: ProfileUpdateInput!, $id: String!) {
        updateOneProfile(data: $profileUpdateInput, where: { id: $id }) {
            id
            skills {
                tool {
                    name
                }
            }
        }
    }
`;

const OnboardingSkills = () => {
    const { data: currentUserData } = useCurrentUserQuery();
    const { data: toolsData } = useToolListQuery();

    const [createSkill] = useCreateOnboardingSkillsMutation();

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
                    id: currentUserData.currentUser.profile.id,
                    profileUpdateInput: {
                        skills: {
                            create,
                        },
                    },
                },
            });

            history.push('/home');
        } catch (error) {
            setFlash({ mode: Mode.ERROR, message: 'mutation failed, possibly because of validation errors' });
        }
    };

    if (!toolsData || !currentUserData) {
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
                        <Alert mode={flash.mode} message={flash.message} />
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
                            <div className="w-full flex flex-wrap mb-4">
                                {kindList[kind]
                                    .sort((a, b) => stringCompare(a.name, b.name))
                                    .map((tool, j) => (
                                        <div key={j} className="mr-4 mb-4">
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
