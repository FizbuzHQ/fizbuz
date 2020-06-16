import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CreatableSelect from 'react-select/creatable';
import { useToolListQuery } from 'src/generated/graphql';
import { stringCompare } from 'src/utils/strings';

const AddSkillForm = ({ skills, createSkill }) => {
    const { data } = useToolListQuery();
    const [loading, setLoading] = useState(true);
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState(undefined);
    const history = useHistory();

    const createOptionsList = () => {
        const { tools } = data;
        const toolIds = skills.map((s) => s.tool.id);
        // build list of unique tool "kind" values
        const kinds = tools.reduce((acc, tool) => {
            if (acc.indexOf(tool.kind) < 0) acc.push(tool.kind);
            return acc;
        }, []);
        // for eack "kind", build array of options with "label" and "value" properties
        const groupedOptions = kinds.map((k) => ({
            label: k,
            options: tools
                .filter((o) => o.kind === k)
                .sort((a, b) => stringCompare(a.name, b.name))
                .map((o) => ({ label: o.name, value: o.id, isDisabled: toolIds.indexOf(o.id) >= 0 })),
        }));
        setOptions(groupedOptions);
    };

    useEffect(() => {
        if (data && skills) {
            createOptionsList();
            setLoading(false);
        }
    }, [data, skills]);

    const handleChange = (selectedOption /*, actionMeta*/) => {
        //console.log(selectedOption, actionMeta);
        if (selectedOption && selectedOption.value) {
            createSkill(selectedOption.value);
            setValue(null);
        }
    };

    const handleCreate = (inputValue) => {
        history.push(`/home/tools/create?name=${inputValue}`);
    };

    const formatGroupLabel = (data) => (
        <div>
            <span>{data.label}</span>
            <span> ({data.options.length}) </span>
        </div>
    );

    return (
        <>
            <h2>Add a Skill</h2>
            <CreatableSelect
                isClearable
                isDisabled={loading}
                isLoading={loading}
                onChange={handleChange}
                onCreateOption={handleCreate}
                options={options}
                value={value}
                formatGroupLabel={formatGroupLabel}
            />
        </>
    );
};

export default AddSkillForm;
