import * as React from 'react';
import { useParams } from 'react-router-dom';

const PublicProfile = () => {
    const { nickname } = useParams();
    return <div>{nickname}</div>;
};

export default PublicProfile;
