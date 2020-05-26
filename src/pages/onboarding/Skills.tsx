import * as React from 'react';
import { useState } from 'react';
import gql from 'graphql-tag';
// import { useQuery } from '@apollo/react-hooks';
import { useUserIdQuery, useToolListQuery } from '../../generated/graphql';
import { stringCompare } from '../../utils/strings';
import Button from '../../components/ui/Button';
import Tag from '../../components/ui/Tag';

// import { useUpdateUserMutation, useUserQuery } from '../../generated/graphql';
// import UserForm from '../../forms/UserForm';

gql`
    query UserId {
        userId @client
    }
`;

gql`
    query ToolList {
        tools {
            id
            name
            kind
        }
    }
`;

/* gql`
    mutation UpdateUser($userInput: UserUpdateInput!, $id: String!) {
        updateOneUser(data: $userInput, where: { id: $id }) {
            id
        }
    }
`; */

const OnboardingSkills = () => {
    const { data: userData } = useUserIdQuery(/*{ fetchPolicy: 'cache-only' }*/);
    const { loading: toolsLoading, data: toolsData, error: toolsError } = useToolListQuery();
    const [skills, setSkills] = useState({});

    const toggleSkill = (tool) => {
        console.log(skills, tool);
        const temp = { ...skills };
        temp[tool.id] = temp[tool.id] ? false : true;
        setSkills(temp);
    };

    const saveSkills = (skills) => {
        console.log(skills);
    };

    // group the traits by "kind
    const kindList = toolsData.tools.reduce((acc, tool) => {
        (acc[tool.kind] = acc[tool.kind] || []).push(tool);
        return acc;
    }, {});

    console.log(skills);
    console.log(kindList);

    // define which "kinds" of Tools to display on this page
    const kindsToDisplay = ['Language'];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1>Select Tools</h1>
                <p>
                    Please select some tools that you use when coding. Don&apos;t worry if a tool you use isn&apos;t
                    listed here, you&apos;ll have an opportunity to add it to your profile later.
                </p>
                <div>
                    {kindsToDisplay.map((kind, i) => (
                        <div key={i}>
                            <h2>{kind}</h2>
                            {kindList[kind]
                                .sort((a, b) => stringCompare(a.name, b.name))
                                .map((tool, j) => (
                                    <Tag
                                        key={j}
                                        mode={skills[tool.id] ? 'on' : 'off'}
                                        /*interactive={true}
                                        minimal={true}
                                        large={true}*/
                                        onClick={() => {
                                            toggleSkill(tool);
                                        }}
                                    >
                                        {tool.name}
                                    </Tag>
                                ))}
                        </div>
                    ))}
                </div>
                <p>
                    <Button /*intent={Intent.PRIMARY}*/ onClick={() => saveSkills(skills)}>Next</Button>
                </p>
            </div>
        </div>
    );
};

export default OnboardingSkills;
