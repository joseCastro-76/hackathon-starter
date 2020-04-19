import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    rootGrid: {
        flexGrow: 1,
        minWidth: '100%',
    },
}));

export default function SimpleSelect() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className={ classes.rootGrid }>

            <FormControl variant="outlined" className={ classes.formControl }>

                <InputLabel id="country">Country</InputLabel>
                <Select
                    labelId="country"
                    id="country"
                    value={ age }
                    onChange={ handleChange }
                    label="Country"
                >

                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {/* Map over countries */}
                    <MenuItem value={10}>USA</MenuItem>
                    <MenuItem value={20}>Africa</MenuItem>
                    <MenuItem value={30}>Mexico</MenuItem>
                    
                </Select>
            </FormControl>
        </div>
    )
}